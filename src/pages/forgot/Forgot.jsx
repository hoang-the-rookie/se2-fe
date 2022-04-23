import React from 'react';
import { Link } from 'react-router-dom';
import './Forgot.css';

export default class Forgot extends React.Component {
    
    componentDidMount(){
        this.props.isLogin();
    }

  render() {
    return (
        <div className="login-body d-flex justify-content-center align-items-center">
            <div className="container-forgotten container-card ">
                <form className="p-3 corner-5 forgotten-form" method="get">
                    <div>
                        <h1 className=" text-center text-light forgotten-text">Reset Password</h1>
                    </div>
                    <div className="forgotten-wrap p-3">
                        <label className="text-info">Please enter your email</label>
                        <div className="">
                            <input type="email" className="form-control m-0 corner-5 border-normal" name="email" placeholder="Email" size="60" autoFocus required/>
                        </div>
                        <div className="text-center btn-confirm-container" >
                            <button className="h-25 corner-5 border-0 text-white text-uppercase btn-confirm primary-btn btn-confirm" name="confirm" type="submit">Confirm</button>
                        </div>
                        <div className="back-container text-center mt-2">
                            <div className="back-to-login">
                                <Link to="/login" className="external_link "> &lt; Back to Login </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}