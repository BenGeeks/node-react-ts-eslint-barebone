// My Components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// My Constants
const React = require('react');
const ReactDOM = require('react-dom');

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
