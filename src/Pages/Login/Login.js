import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './Login.scss';
import Button from '../../Component/Layout/Buttton';
import NavManue from '../../Component/NavManue/NavManue';

function Login() {
  return (
    <div className='form__container'>
      <div className='form__container-nav'>
        <NavManue />
      </div>
      <div className='form__container-sub'>
        <div className='form__container-heading'>
          <h3 className='form__container-text'>Login</h3>
        </div>
        <form>
          <div className='google'>
            <FcGoogle className='google-icon' />
            <p>Continue with Google</p>
          </div>

          <input
            type='text'
            placeholder='User Name or Email'
            className='form__container-sub-input'
          />
          <input
            type='password'
            placeholder='Password'
            className='form__container-sub-input'
          />
          <div className='submit-button'>
            <Button>Login</Button>
          </div>
        </form>
        <div className='form__container-link'>
          <p>Don't have an account?</p>
          <Link to='/signup' className='link'>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
