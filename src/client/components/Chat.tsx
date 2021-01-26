import { useEffect, useRef } from 'react';
import { useImmer } from 'use-immer';

const io = require('socket.io-client');

const socket = io();
const React = require('react');

function Chat() {
  const chatLog = useRef<HTMLDivElement>(null);
  const [state, setState] = useImmer({
    fieldValue: '',
    chatMessage: [],
  });

  function handleFieldChange(e: any) {
    const { value } = e.target;
    setState((draft) => {
      // eslint-disable-next-line no-param-reassign
      draft.fieldValue = value;
    });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    // send message to chat server
    socket.emit('chatFromBrowser', {
      message: state.fieldValue,
      token: 'blahblahblah',
    });
    setState((draft) => {
      // Add message to state collection of messages
      draft.chatMessage.push({ message: draft.fieldValue, username: 'Ben' });
      // eslint-disable-next-line no-param-reassign
      draft.fieldValue = '';
    });
  }

  useEffect(() => {
    socket.on('chatFromServer', (message: any) => {
      setState((draft) => {
        draft.chatMessage.push(message);
      });
    });
  }, []);

  useEffect(() => {
    chatLog.current.scrollTop = chatLog.current.scrollHeight;
  }, [state.chatMessage]);

  return (
    <>
      <div
        id="chat-wrapper"
        className="chat-wrapper shadow border-top border-left border-right"
      >
        <div className="chat-title-bar">
          Chat
          <span
            className="chat-title-bar-close"
            aria-hidden="true"
            onClick={() => {
              document
                .getElementById('chat-wrapper')
                .classList.remove('chat--visible');
            }}
          >
            <i className="fas fa-times-circle" />
          </span>
        </div>
        <div id="chat" className="chat-log" ref={chatLog}>
          {state.chatMessage.map((message, index) => {
            const key = index;
            if (message.username === 'Ben') {
              return (
                <div key={key} className="chat-self">
                  <div className="chat-message">
                    <div className="chat-message-inner">{message.message}</div>
                  </div>
                  <img
                    className="chat-avatar avatar-tiny"
                    src="https://gravatar.com/avatar/f64fc44c03a8a7eb1d52502950879659?s=128"
                    alt=""
                  />
                </div>
              );
            }
            return (
              <div className="chat-other">
                <a href="/">
                  <img
                    className="avatar-tiny"
                    src="https://gravatar.com/avatar/b9216295c1e3931655bae6574ac0e4c2?s=128"
                    alt=""
                  />
                </a>
                <div className="chat-message">
                  <div className="chat-message-inner">
                    <a href="/">
                      <strong>barksalot: </strong>
                    </a>
                    {message.message}
                  </div>
                </div>
              </div>
            );
          })}

          {/* end template */}

          {/* template for messages from others */}
        </div>

        <form
          onSubmit={handleSubmit}
          id="chatForm"
          className="chat-form border-top"
        >
          <input
            value={state.fieldValue}
            onChange={handleFieldChange}
            type="text"
            className="chat-field"
            id="chatField"
            placeholder="Type a message…"
            autoComplete="off"
          />
        </form>
      </div>
    </>
  );
}

export default Chat;
