import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../components/firebase/firebase';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSigningUp, setIsSigningUp] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }
        setIsSigningUp(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/home');
        } catch (error) {
            console.error('Error during signup:', error.message);
            setErrorMessage(error.message);
            setIsSigningUp(false);
        }
    };

    return (
        <div>
            <main className="w-full h-screen flex justify-center items-center">
                <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                    <div className="text-center">
                        <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Create an Account</h3>
                    </div>
                    <form onSubmit={handleSignup} className="space-y-5">
                        <div>
                            <label className="text-sm text-gray-600 font-bold">Email</label>
                            <input
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-600 font-bold">Password</label>
                            <input
                                type="password"
                                autoComplete="new-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-600 font-bold">Confirm Password</label>
                            <input
                                type="password"
                                autoComplete="new-password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>
                        {errorMessage && <span className="text-red-600 font-bold">{errorMessage}</span>}
                        <button
                            type="submit"
                            disabled={isSigningUp}
                            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isSigningUp ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
                        >
                            {isSigningUp ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </form>
                    <p className="text-center text-sm">Already have an account? <Link to="/login" className="hover:underline font-bold">Sign in</Link></p>
                </div>
            </main>
        </div>
    );
};

export default Signup;
