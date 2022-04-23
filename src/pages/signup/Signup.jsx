import React from 'react';
import './Signup.css';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default class Signup extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    componentDidMount(){
        this.props.isLogin();
    }

    render(){  

        return(
            <div className="login-body d-flex justify-content-center align-items-center">
                <div className="container-register container-card">
                <form className="p-3 corner-5 register-form" method="post" />
                    <div>
                        <h1 className=" text-center text-light register-text">Register</h1>
                    </div>
                    <div className="register-wrap p-3">
                        <div>
                            <div className="name-container">
                                <div>
                                    <div className="user-name mt-3">
                                        <label className='text-info'>First Name</label>
                                        <div>
                                            <input type="fname" className="form-control m-0 corner-5 border-normal" name="fname" placeholder="First Name" autoFocus required/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="user-name mt-3">
                                        <label className='text-info'>Last Name</label>
                                        <div>
                                            <input type="lname" className="form-control m-0 corner-5 border-normal" name="lname" placeholder="Last Name" autoFocus required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <label className='text-info'>Email</label>
                            <input type="email" className="form-control m-0 corner-5 border-normal" name="email" placeholder="Email" autoFocus required/>
                        </div>
                        <div className="mt-3">
                            <label className='text-info'>Phone Number</label>
                            <input type="phone" className="form-control m-0 corner-5 border-normal" name="phone" placeholder="Phone" required/>
                        </div>
                        <div className="mt-3">
                            <label className='text-info'>Password</label>
                            <input type="password" className="form-control m-0 corner-5 border-normal h-20" name="password" placeholder="Password" required/>
                        </div>
                        <div className="mt-3 d-flex">
                            <div className="dob-container me-5">
                                <div className="option-dob">
                                    <label className="text-dob mt-2 mb-2 d-block text-info">Date of birth</label>
                                    <span className="option-dob-wrap cursor-pointer" data-type="selectors" data-name="birthday-wrapper" id="option-dob-wrap">
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            label="Pick a date"
                                            value={this.state.date}
                                            onChange={(date) => {
                                            this.setState({date});
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                    </span>
                                </div>
                            </div>
                            <div className="gender-container flex-grow-1" id="gender">
                                <label className="text-gender mt-2 mb-2 d-block text-info">Gender</label>
                                <span className="option-gender" data-type="radio" data-name="gender_wrapper" id="gender-female">
                                    <span className="option-female me-2">
                                        <label className="text-female text-info cursor-pointer" for="female">Female</label>
                                        <input type="radio" className="input-female cursor-pointer" name="sex" value="1" id="female"/>
                                    </span>
                                    <span className="option-male">
                                        <label className="text-male text-info cursor-pointer" for="male">Male</label>
                                        <input type="radio" className="input-male cursor-pointer" name="sex" value="2" id="male"/>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center btn-register-container">
                        <button className=" corner-5 border-0 text-white text-uppercase btn-corfirm primary-btn btn-register" name="register" type="submit">Register</button>
                    </div>
                    <div className="back-container text-center mt-2">
                        <div className="back-to-login">
                            <a className="external_link " href=""> &lt; Back to Login </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}