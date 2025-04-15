import '../styles/sign-in.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loginUser , getUserProfile } from '../componets/feature/authSlice';
import { useNavigate } from 'react-router-dom';
export default function Sign_in() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'succeeded') {
      dispatch(getUserProfile());
      navigate('/profile');
    }
  }, [status, navigate]);
  return (
    <>
      <main className='main bg-dark'>
        <section className='sign-in-content'>
          <i className='fa fa-user-circle '></i>
          <h1>Sign In</h1>
          <form onSubmit={(e) => {
             e.preventDefault();
               dispatch(loginUser({ email, password }));
              }}>
            <div className='input-wrapper'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                id='username'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='input-wrapper'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='input-remember'>
              <input
                type='checkbox'
                id='remember-me'
              />
              <label htmlFor='remember-me'>Remember me</label>
            </div>

            <button
              className='sign-in-button'
              to='/profile'
            type='submit'>
              Sign In
            </button>
          </form>
          {status === 'loading' && <p>connexion en cour</p>}
          {status === 'failed' && <p>échec de connexion</p>}
          {status === 'succeeded' && <p>Connexion réussie !</p>}
        </section>
      </main>{' '}
    </>
  )
}
