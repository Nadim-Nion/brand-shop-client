import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        // clear any previous success message
        setSuccess('');

        // clear any previous error 
        setError('');

        // validation for password: at-least one lowercase and length of password should at-least 9
        if (!/^(?=.*[a-z])[a-z]{1,9}$/.test(password)) {
            setError('Password should have at least one lowercase and length should be between 1 and 9 characters');
        }



        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
                form.reset();
                setSuccess('New user created');
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Welcome to our exclusive Register! Experience seamless access to premium content, exclusive deals, and personalized services. Join our community today to unlock a world of benefits tailored just for you. Sign up now and embark on a journey of convenience and excellence. Your satisfaction is our priority.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPass ? "text" : "password"}
                                name='password'
                                placeholder="password"
                                className="input input-bordered" required />
                            <span onClick={() => setShowPass(!showPass)}>
                                {showPass ? <FaEyeSlash /> : <FaEye />}
                            </span>
                            <label className="label">
                                <h3>Already have an account.Please <Link to="/login" style={{ textDecoration: "underline" }}>Login</Link> </h3>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className='text-green-700'>{success}</p>
                        <p className='text-red-700'>{error}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;