import * as React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <div>
      <Link to='/about'>About</Link>
      <h1>Hi, welcome to my site!</h1>
    </div>
    
  )
}

export const Head = () => <title>Home Page</title>;
export default IndexPage;