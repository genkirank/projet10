import '../styles/sign-in.css'
export default function Sign_in() {
  return (
    <>
      <main className='main bg-dark'>
        <section className='sign-in-content'>
          <i className='fa fa-user-circle '></i>
          <h1>Sign In</h1>
          <form>
            <div className='input-wrapper'>
              <label for='username'>Username</label>
              <input
                type='text'
                id='username'
              />
            </div>
            <div className='input-wrapper'>
              <label for='password'>Password</label>
              <input
                type='password'
                id='password'
              />
            </div>
            <div className='input-remember'>
              <input
                type='checkbox'
                id='remember-me'
              />
              <label for='remember-me'>Remember me</label>
            </div>

            <button
              className='sign-in-button'
              to='/profile'>
              Sign In
            </button>
          </form>
        </section>
      </main>{' '}
    </>
  )
}
