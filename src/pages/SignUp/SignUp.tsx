import React from 'react';
import AuthForm from 'components/AuthForm/AuthForm';
import Page from 'components/Page/Page';

import styles from './SignUp.module.scss';

const SignUp = () => {
  // const [isError, setError] = useState<boolean>(false);
  // const [succes, setSucces] = useState<string>('');
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  const setUserData = (...data: string[]) => {
    data.forEach((d) => console.log(d));
  };

  return (
    <Page>
      <h1 className={styles.heading}>Sign Up</h1>
      <AuthForm setUserData={setUserData} />
      {/* {isLoading && <p>Lodading...</p>}
      {isError && <p>Error</p>}
      {succes && <p>{succes}</p>} */}
    </Page>

  );
};

export default SignUp;
