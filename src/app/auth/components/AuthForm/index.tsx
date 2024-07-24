'use client';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input, Message } from '@/components/shared';
import React, { useCallback, useMemo, useState } from 'react';
import styles from './AuthForm.module.scss';
import { ShowPass } from '@/components/ShowPass';
import { passwordValidationMessages } from '@/constants';
import { validationSchema } from '@/utils';
import { toast } from 'sonner';
import { IFormInputs } from '@/types';

const AuthForm = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitted },
  } = useForm<IFormInputs>({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });
  const [hidePass, setHidePass] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  const onSubmit = (data: IFormInputs) => {
    toast.success('Successfully registered!');
    alert(JSON.stringify(data));
    reset();
  };

  const togglePassVisibility = () => {
    setHidePass((prev) => !prev);
  };

  const passwordChecks = useMemo(
    () => ({
      length: password.length >= 8 && password.length <= 64,
      upperLowerCase: /[A-Z]/.test(password) && /[a-z]/.test(password),
      digit: /\d/.test(password),
    }),
    [password]
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const inputVariant = useCallback(
    (type: 'email' | 'password') =>
      isSubmitted ? (errors[type] ? 'error' : 'success') : 'default',
    [isSubmitted, errors]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2 className={styles.title}>Sign Up</h2>
      <div className={styles.inputGroup}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onBlur, onChange, value, ref } }) => (
            <>
              <Input
                placeholder="Email"
                autoComplete="off"
                id="email"
                onBlur={onBlur}
                onChange={onChange}
                variant={inputVariant('email')}
                value={value || ''}
                ref={ref}
              />
            </>
          )}
        />
      </div>
      <div className={styles.inputGroup}>
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <>
              <Input
                className={styles.inputPass}
                type={hidePass ? 'text' : 'password'}
                placeholder="Create your password"
                variant={inputVariant('password')}
                id="password"
                onBlur={onBlur}
                onChange={(e) => {
                  handlePasswordChange(e);
                  onChange(e);
                }}
                value={value || ''}
                ref={ref}
              />
              <ShowPass
                className={styles.btnPass}
                hidePass={hidePass}
                onClick={togglePassVisibility}
                variant={inputVariant('password')}
                size={24}
              />
            </>
          )}
        />
        <div className={styles.validationMessages}>
          {passwordValidationMessages.map(({ key, message }) => (
            <Message
              key={key}
              variant={
                passwordChecks[key]
                  ? 'success'
                  : isSubmitted && errors.password?.message === message
                    ? 'error'
                    : 'default'
              }
              size="sm"
            >
              {message}
            </Message>
          ))}
        </div>
      </div>
      <Button className={styles.submitBtn} type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default AuthForm;
