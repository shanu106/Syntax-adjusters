import {GoogleOAuthProvider, GoogleLogin} from '@react-oauth/google';

import React from 'react'

const oAuth = () => {
  return (
    
      
   

<GoogleOAuthProvider clientId="1054893857630-onk7l9ld66r5oe30befactp9ac7tvl85.apps.googleusercontent.com">
    <GoogleLogin
    onSuccess={(credentialResponse)=>{
        const accessToken = credentialResponse.access_token;
    }}
    onError={()=>console.log('Login Failed')}
    useOneTap
    scope="https://www.googleapis.com/auth/gmail.readonly"
    redirectUri="http://localhost:5173/auth/google/callback"
    />
    </GoogleOAuthProvider>
   
)
}

export default oAuth