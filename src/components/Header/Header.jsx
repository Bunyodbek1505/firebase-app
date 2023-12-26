import React, {useRef, useEffect} from "react";
import "./header.css";

import {NavLink, useNavigate} from "react-router-dom";
import {Container, Row} from "reactstrap";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {signOut} from 'firebase/auth'
import {auth} from "../../firebase.config";

import {motion} from "framer-motion";

import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";

import useAuth from "../../custom-hooks/useAuth";
import {toast} from "react-toastify";

const nav_links = [{
    path: "home", display: "Home",
}, {
    path: "shop", display: "Shop",
}, {
    path: "cart", display: "Cart",
},];

const Header = () => {
    // const headerRef = useRef(null);
    const navigate = useNavigate();
    const {currentUser} = useAuth()

    const profileActionRef = useRef(null)

    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    console.log(totalQuantity);

    const menuRef = useRef(null);


    const stickHeaderFunc = () => {
        // console.log("fuksiya");
        window.addEventListener("scroll", () => {
            // console.log("funksiyaga kirdi");
            if (document.body.scrollTo > 80 || document.documentElement.scrollTo > 80) {
                // headerRef.current.classList.add("sticky_header");
                // console.log("if ishladi");
            } else {
                // headerRef.current.classList.remove("sticky_header");
                // console.log("else ishladi");
            }
        });
    };

    //   user icon logout
    const logout = () => {
        signOut(auth).then(() => {
            toast.success('Logged out')
            navigate('/home')
        }).catch(err => {
            toast.error(err.message)
        })
    }

    useEffect(() => {
        // console.log("useEffect ichiga kirdi");
        stickHeaderFunc();
        return () => window.removeEventListener("scroll", stickHeaderFunc);
    });

    const menuToggle = () => menuRef.current.classList.toggle("active_menu");

    const navigateToCart = () => {
        navigate("/cart");
    };

    //   user Account
    const toggleProfileAction = () => profileActionRef.current.classList.toggle('show_profileActions')

    return (<header className="header">
        <Container>
            <Row>
                <div className="nav_wrapper">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                        <div>
                            <Link to='/home'><h1>ShopZone</h1></Link>
                        </div>
                    </div>

                    <div className="navigation" ref={menuRef} onClick={menuToggle}>
                        <ul className="menu">
                            {nav_links.map((item, index) => (<li className="nav_item" key={index}>
                                <NavLink
                                    to={item.path}
                                    className={(navClass) => navClass.isActive ? "nav_active" : ""}
                                >
                                    {item.display}
                                </NavLink>
                            </li>))}
                        </ul>
                    </div>

                    <div className="nav_icons">
                  <span className="fav_icon">
                   <i className="ri-heart-line"></i>
                   <span className="badge">1</span>
                </span>
                        <span className="cart_icon" onClick={navigateToCart}>
                 <i className="ri-shopping-bag-line"></i>
                 <span className="badge"> {totalQuantity} </span>
              </span>
                        <div className='profile'>
                            <motion.img
                                whileTap={{scale: 1.2}}
                                src={currentUser ? currentUser.photoURL : userIcon}
                                alt=""
                                onClick={toggleProfileAction}
                            />
                            <div className="porfile_actions" ref={profileActionRef} onClick={toggleProfileAction}>
                                {currentUser ? (<span onClick={logout}>Logout</span>) : (
                                    <div className='d-flex align-items-center justify-content-center flex-column'>
                                        <Link to='/signUp'>SignUp</Link>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/dashboard'>Dashboard</Link>
                                    </div>)}
                            </div>
                        </div>


                        <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
                        </div>
                    </div>
                </div>


            </Row>
        </Container>
    </header>);
};

export default Header;
