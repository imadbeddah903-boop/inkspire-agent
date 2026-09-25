import { NextResponse, type NextRequest } from "next/server";
export async function middleware(req:NextRequest){const res=NextResponse.next();res.headers.set("x-inkspire-agent","1");return res;}
export const config={matcher:["/((?!_next/static|_next/image|favicon.ico).*)"]};