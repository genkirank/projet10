import '../styles/user.css'
import Account from '../componets/accounts/accounts'
export default function User({ user }) {
  return (
    <>
      <main className='main bg-dark '>
        <div className='header'>
          <h1>
            Welcome back
            <br />
            {user}Tony Jarvis!
          </h1>
          <button className='edit-button'>Edit Name</button>
        </div>
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
