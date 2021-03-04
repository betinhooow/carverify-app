import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div>
      <h3>Opa, o que você está tentando buscar não existe )=</h3>
      <h4>
        <Link to=".">Tente novamente</Link>
      </h4>
    </div>
  );
};

export default NotFound;
