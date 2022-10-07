import ButtonSubmit from 'components/ButtonSubmit/ButtonSubmit';
import Page from 'components/Page/Page';
import React from 'react';

import styles from './SignUp.module.scss';

const SignUp = () => {
  const loginId = 'login';

  return (
    <Page>
      <h1 className={styles.heading}>Sign Up</h1>
      <form className={styles.form}>
        <label htmlFor={loginId}>
          Login
          <input className={styles.input} type="text" name={loginId} id="login" />
        </label>
        <label htmlFor="passwords">
          Password
          <input className={styles.input} type="text" name="password" id="password" />
        </label>
        <label htmlFor="confirm">
          Confirm password
          <input className={styles.input} type="text" name="confirm" id="confirm" />
        </label>
        <ButtonSubmit value="submit" />
      </form>
    </Page>

  );
};

export default SignUp;
