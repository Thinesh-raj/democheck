import { Link } from "react-router-dom";
import bg from "../assets/logo.png";
import google from '../assets/logo-1.png';
import './index.scss';

export default function Login() {
    return (
        <section>
            <div className="mainsection">
                <div className="innersection">
                    <img src={bg} alt="logo img" />
                    <div className="title">
                        <h2>Log in to your account</h2>
                    </div>
                    <div className="content">
                        <div className="button">
                            <div>
                                <img src={google} alt="google logo" />
                            </div>
                            <p>Continue with Google</p>
                        </div>
                        <div className="seperator"><p>or</p></div>
                        <div className="email">
                            <h2>Email</h2>
                            <input></input>
                        </div>
                        <div className="email">
                            <h2>Password</h2>
                            <input></input>
                        </div>
                        <button>Continue</button>
                        <p>Don't have an account? <Link to={'/login'}>Sign Up</Link></p>
                        <div className="footer">
                            <p>Having trouble logging in? <a href="forget" >Click here </a>to set up a new password.</p>
                            <p>If you need help <a href="#">contact support.</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
