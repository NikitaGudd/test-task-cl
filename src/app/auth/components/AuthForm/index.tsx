'use client';

import styles from './AuthForm.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input } from '@/components/shared';
import { Message } from '@/components/shared/Message';

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, '8 characters or more (no spaces)')
      .matches(/[A-Z]/, 'Uppercase and lowercase letters')
      .matches(/\d/, 'At least one digit')
      .required('Password is required'),
  })
  .required();

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2>Sign Up</h2>
      <div className={styles.inputGroup}>
        <label htmlFor="email">Email</label>
        <Input id="email" {...register('email')} />
        {errors.email && (
          <Message variant="error" size="sm">
            {errors.email.message}
          </Message>
        )}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="password">Password</label>
        <Input type="password" id="password" {...register('password')} />
        {errors.password && (
          <Message variant="error" size="sm">
            {errors.password?.message}
          </Message>
        )}
      </div>
      <Button type="submit">Login</Button>
    </form>
  );
}
