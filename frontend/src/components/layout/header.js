import React, { Component} from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <nav className='navbar navbar-default'>
                <button className='navbar-toggle' type='button' data-toggle="collapse"
                        data-target="#navbarTogglerDemo01" aria-controls='navbarToggleDemo01'
                        aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggle-icon' />
                </button>
                <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
                    <a className='navbar-brand' href='#'> Lead Manager</a>
                    <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
                        <li className='nav-item'>
                            <Link to='/login' className='nav-link'>Login</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/register' className='nav-link'>Register</Link>
                        </li>
                    </ul>
                </div>
                test
            </nav>

        )
    }

}
export default Header