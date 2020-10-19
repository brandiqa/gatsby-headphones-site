import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  const routes = [
    {
      label: 'Home',
      to: '/',
    },
    {
      label: 'About',
      to: '/about',
    },
    {
      label: 'Contact',
      to: '/contact',
    },
  ]
  const navLinks = routes.map((route, index) => (
    <Link
      to={route.to}
      key={index}
      className="text-green-900 font-mendium hover:underline hover:text-green-500 active:text-green-400"
    >
      {route.label}
    </Link>
  ))

  return <nav className="space-x-2">{navLinks}</nav>
}

export default Navbar
