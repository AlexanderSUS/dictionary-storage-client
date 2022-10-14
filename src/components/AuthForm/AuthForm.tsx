import AuthFormInput from 'components/AuthFormInput/AuthFormInput';
import ButtonSubmit from 'components/ButtonSubmit/ButtonSubmit';
import { AuthInputs, AuthInputLabel } from 'const/auth';
import React, { SyntheticEvent, useState } from 'react';

import styles from './AuthForm.module.scss';

type Props = {
  setUserData: (...data: string[]) => void
};

type Errors = Array<{ element: string, message: string }>;

const AuthForm: React.FC<Props> = ({ setUserData }) => {
  const [errors, setErrors] = useState<Errors>([]);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const { login, password, confirm } = form as HTMLFormElement & {
      login: HTMLInputElement;
      password: HTMLInputElement;
      confirm: HTMLInputElement;
    };

    if (password === confirm) {
      setUserData(login.value, password.value);
    } else {
      setErrors([...errors, { element: 'password', message: 'Passwords mismatch' }]);
    }
  };

  const handleChange = (e: SyntheticEvent<HTMLFormElement>) => {
    const form = e.currentTarget;

    setIsDisabled(false);

    const { login, password, confirm } = form as HTMLFormElement & {
      loging: HTMLInputElement;
      password: HTMLInputElement;
      confirm: HTMLInputElement;
    };

    console.log(login.value);
    console.log(password.value);
    console.log(confirm.value);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <AuthFormInput
        name={AuthInputs.login}
        title={AuthInputLabel.login}
        error={errors}
        style={{ input: styles.input, label: styles.label, invalid: styles.invalid }}
      />
      <AuthFormInput
        name={AuthInputs.password}
        title={AuthInputLabel.password}
        error={errors}
        style={{ input: styles.input, label: styles.label, invalid: styles.invalid }}
      />
      <AuthFormInput
        name={AuthInputs.confirm}
        title={AuthInputLabel.confirm}
        error={errors}
        style={{ input: styles.input, label: styles.label, invalid: styles.invalid }}
      />
      <ButtonSubmit value="submit" disabled={isDisabled} />
    </form>

  );
};

export default AuthForm;
