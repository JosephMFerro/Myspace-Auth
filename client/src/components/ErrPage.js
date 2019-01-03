import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

const ErrPage = () => (
  <div>
    <Header as = 'h2' textAlign = 'center'>
      404: Page Not Found.
      <br />
      <Link to = '/'> Go Back </Link>
    </Header>
  </div>
)

export default ErrPage;