import React from 'react'
import EmployeeDialog from '../../components/dialog/EmployeeDialog'
import logo from '../../assets/images/football.png';

const LogIn = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen bg-[#FAFAFB]'>
            <div className="sidebar__logo -mb-4">
                <img src={logo} alt="tdtu_logo" />
            </div>

            <div className="flex justify-center items-center flex-col w-[500px] shadow-sm shadow-black bg-white p-4 rounded-lg">
                <div class="form-group w-[364px] my-2">
                    <label for="exampleDropdownFormEmail1" className='mb-2'>Username</label>
                    <input type="username" class="form-control" id="exampleDropdownFormEmail1" placeholder="Email address or phone number" />
                </div>
                <div class="form-group w-[364px] my-2">
                    <label for="exampleDropdownFormPassword1" className='mb-2'>Password</label>
                    <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                </div>

                <button className="btn btn-primary mr-3 w-[364px] my-2" type="submit">
                    Log In
                </button>
                <a href="" className='my-2'>Forgottern password?</a>
                <button className="btn btn-success my-2" type="submit">
                    Create New Account
                </button>
            </div>

        </div>
    )
}

export default LogIn