import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';
import Loading from '../assets/loading.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: ${Theme.white};
    color: ${Theme.black};
    -webkit-font-smoothing: antialised;
  }
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }

.loading:before {
  content: '';
  background: white;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

.loading:after {
    content: url(${Loading});
    position: fixed;
    width: 100%;
    top: 30%;
    left: 0;
    z-index: 1001;
    color:black;
    text-align:center;
    font-weight:bold;
    font-size:1.5rem;
}

.backend-error:before {
  content: '';
  background: white;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

.backend-error:after {
  content: 'Opa, seu backend ta rodando? se sim, verifique o cosole D;';
  position: fixed;
  width: 100%;
  top: 30%;
  left: 0;
  z-index: 1001;
  color:black;
  text-align:center;
  font-weight:bold;
  font-size:1.5rem;
}
`;
