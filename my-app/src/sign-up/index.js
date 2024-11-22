import { Link } from "react-router-dom";
import bg from "../assets/logo.png";
import './index.scss'

export default function Signup() {
    return (
        <section>
            <div className="mainsection">
                <div className="innersection">
                    <img src={bg} alt="logo img" />
                    <div className="title">
                        <h2>Discover your next big idea</h2>
                        <p>Sign up for a free account.</p>
                    </div>
                    <div className="content">
                        <div className="seperator"><p>or</p></div>
                        <div className="name">
                            <div className="email">
                                <h2>First Name</h2>
                                <input placeholder="First Name" ></input>
                            </div>
                            <div className="email">
                                <h2>Last Name</h2>
                                <input placeholder="Last Name" ></input>
                            </div>
                        </div>
                        <div className="email">
                            <h2>Email</h2>
                            <input placeholder="e.g.eleanor@mixpixel.com" ></input>
                        </div>
                        <div className="email">
                            <h2>Password</h2>
                            <input placeholder="Example@123" ></input>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox" ></input>
                            <label>Agreed to <a href="#">terms of use</a> & <a href="#">privacy statements</a></label>
                        </div>
                        <button>Sign Up</button>
                        <p>Already have an account? <Link to={'/login'}>Log In</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
