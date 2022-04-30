import React from 'react';
import logo from '../../../images/logos/Group 1329.png';
import google from '../../../images/logos/google.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocailLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    if (user) {
        navigate('/');
    }
    if (loading) {
        return <p>Loading............</p>
    }
    return (
        <div className='my-2'>
            <img src={logo} alt="" height={60} />

            <div className='mx-auto w-50 bg-white p-5 my-5'>
                <h5 className='p-3'>Login with</h5>
                <button className="btn btn-outline-dark d-flex justify-content-evenly mx-auto w-50" onClick={handleGoogleSignIn}>
                    <img src={google} alt="" width={31} />
                    <p>Continue with Google</p>
                </button>
                <p className='mt-3'>Don't have an account? <Link to='/register'>Create an account</Link></p>
            </div>
        </div>
    );
};

export default SocailLogin;