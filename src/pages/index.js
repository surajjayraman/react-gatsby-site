import * as React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <main>
      <Link to='/about'>About</Link>
      <h1>Hi, welcome to my site!</h1>
    </main>
    
  )
}

export const Head = () => <title>Home Page</title>;
export default IndexPage;