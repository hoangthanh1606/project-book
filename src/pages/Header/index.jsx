import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ShoppingCartOutlined, UserOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons'
import './styles.css'

import { logoutAction } from '../../redux/actions'

function Header(props) {
  const { logout } = props
  return (
    <>
      <div className='header-container '>
        <div className='header-icons'>
          <FacebookOutlined className='header-container-icon' />
          <InstagramOutlined className='header-container-icon' />
        </div>
        <div className='heading ' >

          <div className="header-logo">
            <Link to='/'>
              <h3>BookStore</h3>
            </Link>
          </div>
          <div className="header-nav">
            <Link className='header-nav-link' to='/'  > Home</Link>
            <Link className='header-nav-link' to='/product'>Product</Link>
            <Link className='header-nav-link' to='/about'>About Us</Link>
          </div>

          <div className="header-user">
            <div className='header-user-icon'>
              <UserOutlined />
              <div className='header-user-acc'>
                <Link className='link' to='./login'> Login</Link>
                <Link className='link' to='./profile'>Profile</Link>
                <Link className='link' onClick={logout}>Log Out</Link>
              </div>
            </div>
            <Link className='header-user-link' to='/cart'>
              <ShoppingCartOutlined />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (params) => dispatch(logoutAction(params))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);