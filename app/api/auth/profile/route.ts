import { NextRequest, NextResponse } from 'next/server';
import { users, User } from '../../../lib/users';

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.substring(7); // Remove 'Bearer '

    // Extract email from fake token
    if (!token.startsWith('fake-jwt-token-')) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    const email = token.replace('fake-jwt-token-', '');

    // Find user
    const user: User | undefined = users.find((u: User) => u.email === email);
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Return user data without password
    const { password, ...userData } = user;
    return NextResponse.json(userData, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
