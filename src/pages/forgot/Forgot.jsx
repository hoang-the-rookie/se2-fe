import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Forgot.css';

export default class Forgot extends React.Component {
    
    componentDidMount() {
        this.props.isLogin(true);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${this.props.url}/api/auth/forgot-password`, {
            username: e.target.username.value
        }).then(res => {
            if(res.status === 200){
                window.alert(res.data.message);
            }
        }).catch(err => {
            window.alert(err);
        })
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
                            <label className="lb-ip text-info">Please enter your username</label>
                            <div className="">
                                <input type="name" className="form-control m-0 corner-5 border-normal" name="username" placeholder="Username" size="60" autoFocus required/>
                            </div>
                            <div className="text-center btn-confirm-container " >
                                <button className="h-25 corner-5 border-0 text-white text-uppercase btn-confirm primary-btn btn-confirm " name="confirm" type="submit">Confirm</button>
                            </div>
                            <div className="back-container text-center mt-2 pt-5">
                                <div className="back-to-login-btn">
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