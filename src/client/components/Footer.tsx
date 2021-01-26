import Chat from './Chat';

const React = require('react');

function Footer() {
  return (
    <div>
      <footer className="border-top text-center small text-muted py-3 my-footer">
        <p className="m-0">
          All rights reserved |
          <a href="/" className="text-muted">
            | Ben Geeks Dot Com |
          </a>
          | Copyright &copy; 2021
        </p>
        <div
          className="chatIcon"
          id="chatIcon"
          aria-hidden="true"
          onClick={() => {
            document
              .getElementById('chat-wrapper')
              .classList.add('chat--visible');
          }}
        >
          <i className="fas fa-comments" />
        </div>
      </footer>
      <Chat />
    </div>
  );
}

export default Footer;
