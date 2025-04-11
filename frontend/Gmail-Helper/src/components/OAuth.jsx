import {GoogleOAuthProvider,useGoogleLogin, GoogleLogin} from '@react-oauth/google';

import React from 'react'
import { useNavigate } from 'react-router-dom';

const oAuth = () => {
  const navigate = useNavigate();
  const login = useGoogleLogin({
    flow:'implicit',
    scope:'https://www.googleapis.com/auth/gmail.readonly',
    onSuccess:(tokenResponse)=>{
      const accessToken = tokenResponse.access_token;
      console.log(accessToken);
      const state = { accessToken };
      navigate('/dashboard', { state });
    },
    onError: (error) => {
      console.log('Login Failed:', error);
    },
  })
  return (
    <div>
      <h1>Welcome to the Gmail Helper</h1>
      <button onClick={() => login()}>Login with Google</button>
    </div>
  )
}

export default oAuth