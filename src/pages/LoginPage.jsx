import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="login-page">
      <article className="login-page__main">
        <h2>Login to Post New thread.</h2>

        <LoginInput login={onLogin} />
        <p>
          Don&apos;t have an account?
          <Link to="/register">Register</Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
