import React from 'react'
import './newUser.scss'

const NewUser = () => {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New user</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="divine" className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="Devine Achieng" className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="devineachieng@gmail.com" className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder="password" className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="+254 711 697 728" className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="Nairobi | Kenya" className="newUserInput" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" className="newUserInput" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" className="newUserInput" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="other" className="newUserInput" />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}

export default NewUser;
