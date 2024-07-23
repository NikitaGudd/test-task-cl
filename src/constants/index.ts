import { PasswordCheckKey } from '@/types';

export const passwordValidationMessages: {
  key: PasswordCheckKey;
  message: string;
}[] = [
  { key: 'length', message: 'Minimum 8 characters, maximum 64' },
  { key: 'upperLowerCase', message: 'Uppercase and lowercase letters' },
  { key: 'digit', message: 'At least one digit' },
];
