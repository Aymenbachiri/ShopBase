import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import helmet from "helmet";

export function withHelmet(
  handler: (req: NextRequest) => Promise<NextResponse>
) {
  return async (req: NextRequest) => {
    const res = NextResponse.next();

    await new Promise<void>((resolve, reject) => {
      helmet({
        contentSecurityPolicy: false, // Disable CSP as it's better handled by Next.js
      })(
        req as any,
        {
          getHeader: (key: string) => res.headers.get(key),
          setHeader: (key: string, value: string) =>
            res.headers.set(key, value),
          removeHeader: (key: string) => res.headers.delete(key),
        } as any,
        (err: any) => {
          if (err) reject(err);
          resolve();
        }
      );
    });

    const response = await handler(req);

    // Copy headers from res to response
    res.headers.forEach((value, key) => {
      if (!response.headers.has(key)) {
        response.headers.set(key, value);
      }
    });

    return response;
  };
}
