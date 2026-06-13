"use client"

import { useState, useEffect } from 'react';

export type CurrencyType = 'INR' | 'USD';
export type ProductType = 'component' | 'bundle' | 'lifetime';

export function useGeoPricing() {
  const [currency, setCurrency] = useState<CurrencyType>('INR');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if we already cached the currency
    const cachedCurrency = localStorage.getItem('openbutton_currency');
    if (cachedCurrency) {
      setCurrency(cachedCurrency as CurrencyType);
      setLoading(false);
      return;
    }

    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const detectedCurrency = data.country_code === 'IN' ? 'INR' : 'USD';
        setCurrency(detectedCurrency);
        localStorage.setItem('openbutton_currency', detectedCurrency);
      })
      .catch(err => {
        console.error('Geo IP Error:', err);
        // Default to INR on error
      })
      .finally(() => setLoading(false));
  }, []);

  const getPrice = (type: ProductType) => {
    if (currency === 'INR') {
      if (type === 'component') return { symbol: '₹', value: 35, currency: 'INR' };
      if (type === 'bundle') return { symbol: '₹', value: 299, currency: 'INR' };
      if (type === 'lifetime') return { symbol: '₹', value: 799, currency: 'INR' };
    } else {
      if (type === 'component') return { symbol: '$', value: 1, currency: 'USD' };
      if (type === 'bundle') return { symbol: '$', value: 8, currency: 'USD' };
      if (type === 'lifetime') return { symbol: '$', value: 20, currency: 'USD' };
    }
    return { symbol: '₹', value: 0, currency: 'INR' };
  };

  return { currency, getPrice, loading };
}
