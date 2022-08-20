import React from 'react';
import './Signup.scss';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import Button from '../../Component/Layout/Buttton';
import NavManue from '../../Component/NavManue/NavManue';
function Signup() {
  return (
    <div className='form__container '>
      <div className='form__container-sub sign-up'>
        <div className='form__container-sub'>
          <form>
            <div className='google'>
              <FcGoogle className='google-icon' />
              <p>Continue with Google</p>
            </div>
            <div className='col-2'>
              <input
                type='text'
                placeholder='First Name'
                className='form__container-sub-input'
              />
              <input
                type='text'
                placeholder='Last Name'
                className='form__container-sub-input'
              />
            </div>

            <input
              type='text'
              placeholder='Email Address'
              className='form__container-sub-input'
            />
            <input
              type='text'
              placeholder='Confarm Email '
              className='form__container-sub-input'
            />

            <input
              type='number'
              placeholder='Phone Number'
              className='form__container-sub-input'
            />

            <div className='col-2'>
              <input
                type='password'
                placeholder='Password'
                className='form__container-sub-input'
              />
              <input
                type='password'
                placeholder='Confarm Password '
                className='form__container-sub-input'
              />
            </div>
            <div className='checkbox'>
              <input className='checkbox-sq' type='checkbox' />
              <label htmlFor='checkbox'>
                Agree to our Terms and Conditions
              </label>
            </div>
            <div className='submit-button'>
              <Button>Submit</Button>
            </div>
          </form>
          <div className='form__container-link'>
            <p>Already have a account? </p>
            <Link to='/login' className='link'>
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
