import SignUpForm from './SignUpForm';

export const App = () => {
  return (
    <>
      <SignUpForm onSubmit={values => console.log(values)} />
    </>
  );
};
