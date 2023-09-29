import { LoginForm } from 'components/form/authForms/LoginForm';
import { Heading } from 'components/form/authForms/authForm.styles';
import { TextLink, Link } from 'components/form/authForms/authForm.styles';
const Login = () => {
  return (
    <div>
      <Heading>Log In</Heading>
      <LoginForm />
      <TextLink>
        Don't have an account? <Link to="/register">Sign up</Link>
      </TextLink>
    </div>
  );
};

export default Login;
