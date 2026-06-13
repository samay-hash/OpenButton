import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Optional: Verify Vercel Cron Secret to prevent unauthorized access
  const authHeader = request.headers.get('authorization');
  if (
    process.env.CRON_SECRET &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000';
    
    // Ping the backend health endpoint to keep it awake (e.g. on Render/Railway)
    const response = await fetch(`${backendUrl}/health`);
    const data = await response.json();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Backend pinged successfully',
      backendStatus: data 
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Cron Ping Error:', errorMessage);
    return NextResponse.json(
      { success: false, error: 'Failed to ping backend' },
      { status: 500 }
    );
  }
}
