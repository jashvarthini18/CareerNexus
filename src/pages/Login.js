import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../components/firebase/firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsSigningIn(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/home');
        } catch (error) {
            setErrorMessage(error.message);
            setIsSigningIn(false);
        }
    };

    const handleGoogleLogin = async (e) => {
        e.preventDefault();
        setIsSigningIn(true);
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            navigate('/home');
        } catch (error) {
            setErrorMessage(error.message);
            setIsSigningIn(false);
        }
    };

    return (
        <main className="w-full h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-sm bg-white p-6 shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Welcome Back</h2>
                
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-150 ease-in-out"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-150 ease-in-out"
                        />
                    </div>
                    
                    {errorMessage && <p className="text-red-600 text-sm font-medium">{errorMessage}</p>}
                    
                    <button
                        type="submit"
                        disabled={isSigningIn}
                        className={`w-full px-4 py-2 text-white font-semibold rounded-lg ${isSigningIn ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-150 ease-in-out'}`}
                    >
                        {isSigningIn ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>
                
                <p className="text-center text-sm mt-4">Don't have an account? <Link to="/signup" className="text-indigo-600 hover:underline font-semibold">Sign up</Link></p>
                
                <div className="flex items-center justify-center my-6">
                    <div className="border-t border-gray-300 flex-grow"></div>
                    <span className="mx-4 text-sm font-medium text-gray-600">OR</span>
                    <div className="border-t border-gray-300 flex-grow"></div>
                </div>
                
                <button
                    onClick={handleGoogleLogin}
                    disabled={isSigningIn}
                    className={`w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-semibold ${isSigningIn ? 'cursor-not-allowed' : 'hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition duration-150 ease-in-out'}`}
                >
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_17_40)">
                            <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                            <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                            <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                            <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                        </g>
                        <defs>
                            <clipPath id="clip0_17_40">
                                <rect width="48" height="48" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    {isSigningIn ? 'Signing In...' : 'Continue with Google'}
                </button>
            </div>
        </main>
    );
};

export default Login;
