import React from 'react';
import './Login.scss';
import Button from '../../Layout/Buttton';
import NavManue from '../../NavManue/NavManue';

function Login() {
  return (
    <div className='page__container'>
      <div className='page__container-nav'>
        <NavManue />
      </div>
      <div className='page__container-form'>
        <div className='page__container-heading'>
          <div className='page__container-pic'></div>
          <h3 className='page__container-text'>Login</h3>
        </div>
        <form>
          <input type='text' placeholder='User Name or Email' />
          <input type='password' placeholder='Password' />
          <Button>Login</Button>
        </form>
        <div className='page__container-link'>
          <p>Don't have an account?</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
