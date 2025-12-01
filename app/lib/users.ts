// In-memory user store for demo purposes (replace with database in production)
export interface User {
  name: string;
  email: string;
  password: string;
}

export const users: User[] = [
  { name: 'Demo User', email: 'user@example.com', password: 'password' }, // Pre-seeded user for demo
  { name: 'redentor balcueva', email: 'redentor@gmail.com', password: 'redentor123345' } // User's account
];
