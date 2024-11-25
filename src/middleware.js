import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// 쿠키에 토큰 여부 확인
async function checkAuthentication(request) {
  const token = request.cookies.get('JSESSIONID');

  if (!token) return false;

  // // 토큰을 서버로 보내서 유효성 체크
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/validate-token`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ token }),
  // });

  // // 서버에서 유효성 확인 결과 처리
  // if (response.ok) {
  //   return true;
  // }
  // return false;

  return true;
}

export async function middleware(request) {
  const isAuthenticated = await checkAuthentication(request);

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/study', '/roadmap', '/profile'],
};
