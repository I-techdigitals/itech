/**
 * Centralized API configuration.
 *
 * Set NEXT_PUBLIC_API_URL in your environment:
 *   - Local dev (.env.local):  NEXT_PUBLIC_API_URL=http://localhost:5000
 *   - Production (Vercel):     NEXT_PUBLIC_API_URL=https://itechdigitals.com/_/backend
 *
 * The trailing slash is stripped so you can always write:
 *   `${API_URL}/api/contact`
 */
const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/$/, "");

export default API_URL;
