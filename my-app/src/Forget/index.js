import { Link } from "react-router-dom";
import bg from "../assets/logo.png";
import './index.scss';

export default function Forget() {
    return (
        <section>
            <div className="mainsection">
                <div className="innersection">
                    <img src={bg} alt="logo img" />
                    <div className="title">
                        <h2>Forgot Password?</h2>
                        <p>Enter email to reset password.</p>
                    </div>
                    <div className="content">
                        <div className="email">
                            <h2>Email</h2>
                            <input></input>
                        </div>
                        <Link to={'/reset'} className="sendbtn">Send Email</Link>
                        <Link to={'/login'}>Back to Log In</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
