import * as React from  'react';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <div>
            <Layout pageTitle='About Me'>
                <p>I'm a junior react dev, trying to build something!!!</p>
            </Layout>
        </div>
      
    )
  }

export const Head = () => <title>About Me</title>;
export default AboutPage;