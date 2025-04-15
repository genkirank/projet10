import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateUserName } from '../feature/authSlice';
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
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(updateUserName({ userName: newUserName, firstName: newFirstName, lastName: newLastName }))
                  .then(() => onCancel());
            }}>
                <div>
                    <label htmlFor='user-name'>User name:</label>
                    <input type="text" id="userName" onChange={(e) => setNewUserName(e.target.value)} value={newUserName} />
                </div>
                <div>
                    <label htmlFor='first-name'>First name:</label>
                    <input type="text" id="firstName" onChange={(e) => setNewFirstName(e.target.value)} value={newFirstName} readOnly />
                </div>
                <div>
                    <label htmlFor='last-name'>Last name:</label>
                    <input type="text" id="lastName" onChange={(e) => setNewLastName(e.target.value)} value={newLastName} readOnly />
                </div>
                <div>
                    <button className="editName-save"  type="submit">
                        Save
                    </button>
                    <button className="editName-Cancel" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </>
    )
}