import React from 'react';
import ValidationErrorMessage from 'components/ValidationErrorMessage/ValidationErrorMessage';

type Props = {
  name: string;
  error: Array<{
    element: string;
    message: string;
  }>;
  title: string;
  style: {
    label: string;
    input: string;
    invalid: string;
  }
};

const AuthFormInput: React.FC<Props> = ({
  name, error, title, style,
}) => {
  const errorIndex = error.findIndex((errorOjb) => errorOjb.element === name);
  const isError = errorIndex !== -1;
  const defineClasses = () => `${style.input}${isError ? ` ${style.invalid}` : ''}`;

  return (
    <>
      <label htmlFor={name}>
        {title}
        <input className={defineClasses()} type="text" name={name} id={name} />
      </label>
      {isError && <ValidationErrorMessage message={error[errorIndex].message} />}
    </>
  );
};
export default AuthFormInput;
