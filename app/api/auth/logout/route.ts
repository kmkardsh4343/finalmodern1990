import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // In a real app, you might invalidate the token on the server side
  // For now, just return success as logout is handled client-side
  return NextResponse.json({ message: 'Logout successful' }, { status: 200 });
}
