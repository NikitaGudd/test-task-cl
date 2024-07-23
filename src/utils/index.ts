import * as yup from 'yup';

export const validationSchema = yup
  .object({
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Minimum 8 characters, maximum 64')
      .max(64, 'Minimum 8 characters, maximum 64')
      .matches(/[A-Z]/, 'Uppercase and lowercase letters')
      .matches(/\d/, 'At least one digit')
      .required('Password is required'),
  })
  .required();
