import { MD5 } from 'crypto-js';

export const getHash = (pass: string): string => {
  return MD5(
    MD5(MD5(pass).toString().toUpperCase() + 'F593B01C562548C6B7A31B30884BDE53')
      .toString()
      .toUpperCase(),
  )
    .toString()
    .toUpperCase();
};
