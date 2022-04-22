import react from 'react';

export default class Forgot extends react.Component {
    
    componentDidMount(){
        this.props.isLogin();
    }

  render() {
    return (
        <div className="login-body d-flex justify-content-center align-items-center">
            <div className="container-forgotten container-card hide">
                <form className="p-3 corner-5 forgotten-form" method="get">
                    <div>
                        <h1 className=" text-center fw-lighter forgotten-text">Reset Password</h1>
                    </div>
                    <div className="forgotten-wrap p-3">
                        <label>Please enter your email</label>
                        <div className="">
                            <input type="email" className="form-control m-0 corner-5 border-normal" name="email" placeholder="Email" autoFocus required/>
                        </div>
                        <div className="text-center btn-confirm-container">
                            <button className=" corner-5 border-0 text-white text-uppercase btn-confirm primary-btn btn-confirm" name="confirm" type="submit">Confirm</button>
                        </div>
                        <div className="back-container text-center mt-2">
                            <div className="back-to-login">
                                <a className="external_link " href=""> &lt; Back to Login </a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}