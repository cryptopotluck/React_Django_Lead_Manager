import React, { Component} from 'react'

export class Header extends Component {
    render() {
        return (
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Lead Manager</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </nav>

        )
    }

}
export default Header