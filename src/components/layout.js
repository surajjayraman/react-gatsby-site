import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby';
import { container, heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle } from  './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  /* Use the useStaticQuery hook and
    graphql tag to query for data
    (The query gets run at build time) */
  const data = useStaticQuery(graphql`
    query {
      site {
        buildTime
        siteMetadata {
          title
        }
      }          
    }
  `);

  return (
    <div className={container}>
       <header className={siteTitle}>{data.site.siteMetadata.title}</header>       
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout