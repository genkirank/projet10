import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateUserName } from '../feature/authSlice';
import './editNameForm.css'
export default function EditNameForm({onCancel}) {
    const user = useSelector((state) => state.auth.user)
const userName= user?.userName||""
    const [newUserName, setNewUserName] = useState(userName)
    const [newFirstName, setNewFirstName] = useState(user?.firstName || "")
    const [newLastName, setNewLastName] = useState(user?.lastName || "")
    const dispatch = useDispatch();
  
    return (
        <>
            <h1>Edit user info</h1>
            <form className="gapform" onSubmit={(e) => {
                e.preventDefault();
                dispatch(updateUserName({ userName: newUserName, firstName: newFirstName, lastName: newLastName }))
                  .then(() => onCancel());
            }}>
                <div className="styleform">
                    <label htmlFor='user-name'>User name:</label>
                    <input type="text" id="userName" onChange={(e) => setNewUserName(e.target.value)} value={newUserName} />
                </div>
                <div className="styleform">
                    <label htmlFor='first-name'>First name:</label>
                    <input type="text" disabled id="firstName" onChange={(e) => setNewFirstName(e.target.value)} value={newFirstName} readOnly />
                </div>
                <div className="styleform">
                    <label htmlFor='last-name'>Last name:</label>
                    <input disabled type="text" id="lastName" onChange={(e) => setNewLastName(e.target.value)} value={newLastName} readOnly />
                </div>
                <div className="editbtn">
                    <button className="editName-save"  type="submit">
                        Save
                    </button>
                    <button className="editName-Cancel" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </>
    )
}