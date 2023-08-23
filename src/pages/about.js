import * as React from  'react';
import { Link } from 'gatsby';

const AboutPage = () => {
    return (
        <div>
            <Link to='/'>Back to Home</Link>
            <h1>I'm a junior react dev, trying to build something!!!</h1>
        </div>
      
    )
  }

export const Head = () => <title>About Me</title>;
export default AboutPage;