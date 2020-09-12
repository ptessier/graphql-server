import bcrypt from 'bcryptjs';

export const Passwords = Object.freeze({
  compare: (s: string, hash: string) => bcrypt.compare(s, hash),
  hash: (s: string) => bcrypt.hash(s, 10),
});
