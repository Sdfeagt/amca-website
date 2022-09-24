import React from 'react'
import {Link, useResolvedPath, useMatch} from 'react-router-dom'

const NavBar = () => {
    const CustomLink = ({to, children, ...props}) =>{
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({path: resolvedPath.pathname, end: true})
        return(
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>
                    {children}
                </Link>
            </li>

        )
    }
  return (
    <nav className='Navbar'>
        <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/join">Join us</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/board">Board</CustomLink>
        <CustomLink to="/Blog">Blog</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        </ul>
    </nav>
  )
}

export default NavBar