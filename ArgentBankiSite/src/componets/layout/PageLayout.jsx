import { Link, NavLink, Outlet } from 'react-router-dom'
import Logo from '../../assets/Logo/argentBankLogo.png'
import './PageLayout.css'
function PageLayout() {
  return (
    <div className='styleLayout'>
      <header className='page-header'>
        <Link to='/'>
          <img
            src={Logo}
            alt='argentBankLogo'
            className='argentBankLogo'
          />
        </Link>

        <div className='header-item'>
          <i className='fa fa-user-circle'></i>
          <NavLink
            className='sign-in'
            to='/login'>
            Sign In
          </NavLink>
        </div>
      </header>
      <main className='page-content '>
        <Outlet />
      </main>
      <footer className='page-footer'>
        <p className='footer-texte'>Copyright 2020 Argent Bank</p>
      </footer>
    </div>
  )
}
export default PageLayout
