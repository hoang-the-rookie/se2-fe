import React from 'react';
import './Profile.css';

export default class Profile extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="profile-content row p-3">
                        <div className="leftSide col-3">
                            <div className="content-card p-3">
                                <div className="content-card__head p-2">
                                    <div className="image w-100 text-center mb-2">
                                        <img src="../style/image/user2.jpg" alt="" className=""/>
                                        <button className="image_change p-2">
                                            <i className="fa-solid fa-camera cursor-pointer"></i>
                                        </button>
                                    </div>
                                    <div className="user-name">
                                        <h4 className="m-0 text-center">Daaraa</h4>
                                        <div className="d-flex justify-content-between my-2">
                                            <p className="balance">Balance: <span className="">***000 d</span></p>
                                            <span className="cursor-pointer" id="show_currency">
                                                <i className="fa-solid fa-eye cursor-pointer"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>



                                <div className="options p-2">
                                    <a href="#info" className="btn no-outline">Information</a>
                                    <a href="#payment" className="btn no-outline">Add Fund</a>
                                    <a href="#change_password" className="btn no-outline">Change Password</a>
                                    <a href="#deactive_account" className="btn no-outline external_link">Deactive account</a>
                                    <hr/>
                                    <a href="#" className="btn no-outline text-danger">Log out</a>
                                </div>
                            </div>
                        </div>

                        <div className="rightSide col-9">

                            <div className="information content-card border-normal p-4 corner-8" id="info">
                                <div className="content-card__head pb-3">
                                    <h2 className="card-title m-0">Information</h2>
                                    <p className="card-sub-title m-0 ps-1">Manage your basic information</p>
                                </div>

                                <div className="content-card__content">
                                    <form action="#" className="p-2">
                                        <table className="table info-table">
                                            <tr>
                                                <td className="border-0">Fullname</td>
                                                <td className="border-0" colspan="3">
                                                    <input type="text" value="Vu Thi Hue" className="info-table_input w-100 px-2 py-1"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-0">Email</td>
                                                <td className="border-0" colspan="3">
                                                    <input type="email" value="huevt2310@abc.bca" className="info-table_input w-100 px-2 py-1"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-0">Phone</td>
                                                <td className="border-0" colspan="3">
                                                    <input type="tel" value="123-456-789" className="info-table_input w-100 px-2 py-1"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-0">Address</td>
                                                <td className="border-0" colspan="3">
                                                    <input type="text" value="Truong Dai Hoc Ha Noi, Trung Van, Ha Noi" className="info-table_input w-100 px-2 py-1"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border-0">Birthday</td>
                                                <td className="border-0">
                                                    <input type="date" name="dob" id="dob" className="px-2" value="2001-10-23"/>
                                                </td>
                                                <td className="border-0">Gender</td>
                                                <td className="border-0">
                                                    <div className="gender">
                                                        <label htmlFor="male" className="cursor-pointer ps-2 pe-1">Male</label>
                                                        <input type="radio" name="gender" id="male"/>
                                                        <label htmlFor="female" className="cursor-pointer ps-2 pe-1">Female</label>
                                                        <input type="radio" name="gender" id="female" checked/>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        <span className="d-block text-end">
                                            <button type="submit" className="primary-btn corner-5 px-3 py-2">Save</button>
                                        </span>
                                    </form>
                                </div>
                            </div>

                            <div className="payment content-card border-normal p-4 corner-8" id="payment">
                                <div className="content-card__head pb-3">
                                    <h2 className="card-title m-0">Payment method</h2>
                                    <p className="card-sub-title m-0 ps-1"></p>
                                </div>

                                <div className="content-card__content">
                                    <form action="#" className="p-2 text-end">
                                        <select name="fund" id="pay-method" className="w-100 p-2 corner-5 border-thin mb-2 cursor-pointer" required>
                                            <option value="--Choose a payment method--" disabled selected>--Choose a payment method--</option>
                                            <option value="bank">Bank</option>
                                            <option value="wallet">E-Wallet</option>
                                        </select>
                                        <input type="number" id="pay-acc" className="w-100 p-2 corner-5 border-thin mb-2" placeholder="Account number" required/>
                                        <input type="number" id="pay-amount" className="w-100 p-2 corner-5 border-thin mb-2" placeholder="Amount" required/>
                                        <input type="password" id="pay-pass" className="w-100 p-2 corner-5 border-thin mb-2" placeholder="Enter password password" required/>
                                        <button type="submit" className="primary-btn px-3 py-2 corner-5">Add fund</button>
                                    </form>
                                </div>
                            </div>

                            <div className="reset content-card border-normal p-4 corner-8" id="change_password">
                                <div className="content-card__head pb-3">
                                    <h2 className="card-title m-0">Change password</h2>
                                    <p className="card-sub-title m-0 ps-1">You can only change password after each 30 days</p>
                                </div>

                                <form action="#" className="text-end p-2">
                                    <input type="password" name="" id="change-old-pass" className="w-100 p-2 corner-5 border-thin mb-2" placeholder="Enter old password" required/>
                                    <input type="password" name="" id="change-new-pass" className="w-100 p-2 corner-5 border-thin mb-2" placeholder="Enter new password" required/>
                                    <input type="password" name="" id="change-confirm-pass" className="w-100 p-2 corner-5 border-thin mb-2" placeholder="Confirm new password" required/>
                                    <button type="submit" className="primary-btn px-3 py-2 corner-5" id="change-btn">Confirm</button>
                                </form>
                            </div>
        
                            <div className="deactive content-card border-normal p-4 corner-8" id="deactive_account">
                                <div className="content-card__head pb-3">
                                    <h2 className="card-title m-0 text-danger">Defective account</h2>
                                    <p className="card-sub-title m-0 ps-1">Delete your account permanently</p>
                                </div>

                                <form action="" className="p-2 text-end">
                                    <input type="password" name="" id="del-pass" className="w-100 p-2 corner-5 border-thin mb-2" placeholder="Enter password" required/>
                                    <button type="submit" className="btn-danger px-3 py-2 corner-5" id="del-btn">Confirm</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}