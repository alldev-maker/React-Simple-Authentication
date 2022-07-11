import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FormInput } from 'components/form-control';
import { ButtonPurple } from 'components/button';

import { setUser } from 'redux/actions';
import { signin } from 'service/auth';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setError('');
  }, [username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const { user, result } = signin(username, password);
      dispatch(setUser(user));
      result === 'success' && navigate('/');
    } catch (e) {
      setError(e.message ?? 'Unknown error');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h3 className="mb-3 text-center">Sign in</h3>

      <div className="form-group">
        <FormInput
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <FormInput
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        {error && <p className="error-msg">{error}</p>}
      </div>

      <ButtonPurple type="submit">Sign in</ButtonPurple>
    </form>
  );
};
