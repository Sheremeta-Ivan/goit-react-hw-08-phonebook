import { useDispatch, useSelector } from 'react-redux';
import { Form } from './authForm.styles';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const errorLogin = useSelector(state => state.error);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <>
      {errorLogin && <div>Error login</div>}
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            required
            placeholder="sheremeta@gmail.com"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            minLength={6}
            required
            placeholder="*******"
          />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </>
  );
};
