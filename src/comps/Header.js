/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/Icon';
import { googleSignIn } from '../firebase/config';
const Header = () => {
    const [Logged, setLogged] = useState(false)
    const handleGoogleAuth = () => {
        googleSignIn();
    }
    return (
        <div className="header-wrapper">
            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React Logo" />
            <h1>Publish a thought! 💭</h1>
            <div className="firebase-wrapper">
                <img src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png" alt="Firebase Logo" />
                <Button onClick={handleGoogleAuth}><SvgIcon style={{ padding: "0 10px"}}><img style={{ width: "20px"}} src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" /></SvgIcon> Login with Google</Button>
            </div>
        </div>
    )
}

export default Header;
