import * as React from  'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => {
    return (
        <div>
            <Layout pageTitle='About Me'>
                <p>I'm a junior react dev, trying to build something!!!</p>
            </Layout>
        </div>
      
    )
  }

export const Head = () => <Seo title="About Me" />;
export default AboutPage;