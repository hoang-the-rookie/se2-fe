import React from 'react';

export default class Login extends React.Component{

    componentDidMount(){
        this.props.isLogin();
    }

    render(){
        return(
            <div className="login-body d-flex justify-content-center align-items-center">
                <div className="container-login container-card">
                    <form className="p-3 corner-5 login-form" method="post">
                        <h1 className=" text-center text-danger login-text">Login</h1>
                        <div className="login-wrap p-3">
                            <div className=" mt-3">
                                <label className='lb text-danger'>Email</label>
                                <input type="email" className="form-control m-0 corner-5 border-normal " name="email" placeholder="Email" size="60" height="100" autoFocus required/>
                            </div>
                            <div className="lb mt-3">
                                <label className='text-danger'>Password</label>
                                <input type="password" className="form-control m-0 corner-5 border-normal " name="password" placeholder="Password" required/>
                            </div>
                            <div className="reform-login d-flex justify-content-between py-1 px-2 mt-3">
                                <a className="extra_link register d-inline-block" href="#">Register</a>
                                <a className="extra_link forgot d-inline-block" href="#">Forgot password?</a>
                            </div>
                            <div className="text-center btn-login-container">
                                <button className=" corner-5 border-0 text-white text-uppercase btn-corfirm primary-btn btn-login" name="login" type="submit">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}