import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "./AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../../AuthProvider";

const Login = () => {
    // const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const { signIn, githubSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogIn = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess("Login success")
                Swal.fire({
                    title: 'Login Successful!',
                    text: 'Enjoy Exploring!',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                setSuccess(error.message);
            })
    }
    const handleGithubSignIn=()=>{
        githubSignIn()
        .then(result=>{
            console.log(result.user);
            Swal.fire({
                title: 'Login Successful!',
                text: 'Enjoy Exploring!',
                icon: 'success',
                confirmButtonText: 'Continue'
              })
            navigate("/");
        })
        .catch();
    }
    
    return (
        <div>
            <div className="text-center">
                <h1 className="text-3xl font-bold">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100 my-10">
                <div className="card-body">
                    <form onSubmit={handleLogIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                        </div>
                        {
                            success && <p className="text-red-600">{success}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="mx-auto text-center">
                        <p className="pb-2">or,</p>
                        <button onClick={handleGithubSignIn} className="flex gap-2 items-center py-3 px-6 bg-sky-400  rounded-lg"><FcGoogle />
                            <span className="text-white font-bold">GitHub</span></button>
                    </div>
                    
                    <p className="mt-4 text-center">Do not have an account? <Link className="text-blue-600" to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;