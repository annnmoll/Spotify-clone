import React from 'react';
import './Login.css';
import { accessUrl } from './Spotify';

function Login1() {
  return (
    <div className='login'>
    
    <img src='https://brandpalettes.com/wp-content/uploads/2018/11/Spotify-Logo-PNG-300x90.png?ezimgfmt=ngcb1/notWebP ' alt='spotify'></img>
    <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login1
