import { RegisterForm } from 'components/form/authForms/RegisterForm';
import { Heading } from 'components/form/authForms/authForm.styles';
import { TextLink, Link } from 'components/form/authForms/authForm.styles';
const Register = () => {
  return (
    <div>
      <Heading>Registration</Heading>
      <RegisterForm />
      <TextLink>
        Already registered? <Link to={'/login'}>Sign in</Link>
      </TextLink>
    </div>
  );
};

export default Register;
