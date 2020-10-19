/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

import Navbar from './navbar'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <header className="container flex items-end justify-between px-4 mx-auto my-2">
        <Link to="/" className="text-xl text-green-800 font-bold">
          {data.site.siteMetadata?.title || `Title`}
        </Link>
        <Navbar />
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
