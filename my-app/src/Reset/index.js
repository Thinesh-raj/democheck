import { Link } from "react-router-dom";
import bg from "../assets/logo.png";
import './index.scss';

export default function Reset() {
    return (
        <section>
            <div className="mainsection">
                <div className="innersection">
                    <img src={bg} alt="logo img" />
                    <div className="title">
                        <h2>Reset Password</h2>
                    </div>
                    <div className="content">
                        <div className="email">
                            <h2>Enter New Password</h2>
                            <input></input>
                        </div>
                        <div className="email">
                            <h2>Confirm New Password</h2>
                            <input></input>
                        </div>
                        <button>Reset</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
