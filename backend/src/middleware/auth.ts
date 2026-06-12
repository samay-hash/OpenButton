import { Request, Response, NextFunction } from 'express';

// Mock auth middleware — passes through with a mock user
// Replace this with real JWT verification later
export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  // For now, always pass through with mock user
  // In production: verify JWT token from authHeader
  (req as any).user = {
    id: 'user_001',
    email: 'premium@openbutton.com',
    name: 'Premium User',
    plan: 'pro',
  };

  next();
}
