import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
