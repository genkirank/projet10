import { Link, NavLink, Outlet } from 'react-router-dom'
import Logo from '../../assets/Logo/argentBankLogo.png'
import './PageLayout.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../feature/authSlice';

function PageLayout() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user
  )
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout()) 
    navigate('/login')

  }
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
          {user?.firstName}
          {
  user ? (
    <NavLink className='sign-in'  to="#"onClick={handleLogout}>
      <i className='fa fa-sign-out'></i> Sign Out
    </NavLink>
  ) : (
    <NavLink className='sign-in' to='/login'>
    Sign In
    </NavLink>
  )
}
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
