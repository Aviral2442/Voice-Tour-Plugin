import { NextResponse } from "next/server"
import { cookies } from "next/headers";


export async function middleware(req, res) {
    const cookieStore = cookies()
    const token = cookieStore.get('token') || '';
    // console.log(token.value);
    const ApiResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/authorise`, {
        headers: {
            'x-auth-token': token.value
        }
    });
    console.log(ApiResponse.status);
    if (ApiResponse.status !== 200) {
        return NextResponse.redirect(new URL('/login', req.url));
    } else {
        return NextResponse.next();
    }
}

export const config = {
    matcher: ['/user/:path*']
}