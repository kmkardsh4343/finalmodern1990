import { NextRequest, NextResponse } from 'next/server';
import { users, User } from '../../../lib/users';

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    // Basic validation
    if (!name || !email || !password) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    // Check if user already exists
    const existingUser: User | undefined = users.find((user: User) => user.email === email);
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Add user to store
    users.push({ name, email, password });

    return NextResponse.json({ message: 'Registration successful' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
