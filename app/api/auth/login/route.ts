import { NextRequest, NextResponse } from 'next/server';
import { users, User } from '../../../lib/users';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Basic validation
    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    // Find user
    const user: User | undefined = users.find((u: User) => u.email === email && u.password === password);
    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // Generate a simple token (replace with JWT in production)
    const token = `fake-jwt-token-${user.email}`;

    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
