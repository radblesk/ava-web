import { NextRequest } from "next/server";

export function validateAuthorization(request: NextRequest): boolean {
  const authorization = request.headers.get("Authorization");
  const token = process.env.APP_TOKEN;
  return !!token && authorization === `Bearer ${token}`;
}
