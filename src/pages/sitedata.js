import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
  <p> { data.site.siteMetadata.title } </p>
  )
}

export default useSiteMetadata