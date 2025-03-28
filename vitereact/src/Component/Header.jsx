//  import React from 'react';
//import { Link } from "react-router-dom"
//import {HoverMenuButton} from "./HoverMenuButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCartShopping, faEllipsisVertical, faStore } from '@fortawesome/free-solid-svg-icons';
import logo from './Logo2.png';


function Header(search) {

    return (
        <>
            <div className="main-header">
                <header className="header">
                    <div className="header-logo"/>
                        <img className='image' src={logo} alt="Logo"></img>                    <div className="header-search">
                        <form action={search}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            <input name="query" ></input>
                            <button type="submit">Search</button>
                        </form>
                    </div>
                    <div className="header-login">
                        <a title="Login">
                            {/* <Link to='/'> */}
                            <button>
                                < FontAwesomeIcon icon={faUser} />
                                Login
                            </button>
                            {/* </Link> */}

                            {/* <HoverMenuButton title="Dropdown 1"  /> 
                                <HoverMenuButton title="Dropdown 2" /> */}
                        </a>
                    </div>
                    <div className="header-cart">
                        <a title="Login">
                            <FontAwesomeIcon icon={faCartShopping} /> Cart
                        </a>
                    </div>
                    <div className="store-section">
                        <a title="Become a seller">
                            <FontAwesomeIcon icon={faStore} />
                        </a>
                    </div>
                    <div className="header-dropdown-button">
                        <a title="Login">
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </a>
                    </div>
                </header>
                
            </div>


        </>
    )
}
export default Header;