import * as React from 'react';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle='HomePage'>      
      <h1>Hi, welcome to my site!</h1>
    </Layout>    
  )
}

export const Head = () => <title>Home Page</title>;
export default IndexPage;