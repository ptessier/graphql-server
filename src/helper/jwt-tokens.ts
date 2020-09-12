import jwt from 'jsonwebtoken';
import { config } from '~/config';
import { Viewer } from '~/context/viewer';

const SIGN_OPTIONS = { expiresIn: '1d' };

const JWT_SECRET = config.secret();

export const JwtTokens = Object.freeze({
  sign(payload: Viewer) {
    return jwt.sign(payload, JWT_SECRET, SIGN_OPTIONS);
  },
  verify(token: string): Viewer {
    return jwt.verify(token, JWT_SECRET) as Viewer;
  },
});
