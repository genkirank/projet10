import '../styles/user.css'
import Account from '../componets/accounts/accounts'
import { useEffect, useState } from 'react'
import EditNameForm from '../componets/EditNameForm/EditNameForm'
import { useSelector, useDispatch } from 'react-redux'
import { getUserProfile,  } from '../componets/feature/authSlice'
import { useNavigate } from "react-router-dom"
export default function User({ }) {
  const navigate = useNavigate()

  const user=useSelector((state)=>state.auth.user)
  const [isEditing,setisEditing] = useState(false)
  function handleCloseForm() {
  setisEditing(false)
  }
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }
  
    if (!user) {
      dispatch(getUserProfile());
    }
  }, [user, dispatch, navigate]);
  
  return (
    <>
      <main className='main bg-dark '>
        <div className='header'>
          <h1>
            Welcome back
            <br />
             {user?.userName}
          </h1>
          <button className='edit-button' onClick={() => setisEditing(true)}>Edit Name</button>
          {isEditing &&<EditNameForm
            onCancel={handleCloseForm } />}</div>
        <h2 className='sr-only'>Accounts</h2>
        <Account
          title='Argent Bank Checking'
          number='x8349'
          amount='2,082.79'
          description='Available Balance'
        />
        <Account
          title='Argent Bank Savings'
          number='x6712'
          amount='10,928.42'
          description='Available Balance'
        />
        <Account
          title='Argent Bank Credit Card'
          number='x8349'
          amount='184.30'
          description='Current Balance'
        />{' '}
      </main>{' '}
    </>
  )
}
