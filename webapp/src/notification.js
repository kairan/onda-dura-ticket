import React, { Component } from 'react';

import toaster from 'toasted-notes';

const success = (message, title) => toaster.notify(({ onClose }) => 
  <Notification message={message} appearance="success" title={title} close={onClose} />, 
{ position: 'bottom-right', duration: 5000 })

const info = (message, title) => toaster.notify(({ onClose }) => 
  <Notification message={message} appearance="info" title={title} close={onClose} />
, { position: 'bottom-right', duration: 5000 })

const warn = (message, title) => toaster.notify(({ onClose }) => 
  <Notification message={message} appearance="warning" title={title} close={onClose} />
, { position: 'bottom-right', duration: null })

const error = (message, title) => toaster.notify(({ onClose }) => 
  <Notification message={message} appearance="error" title={title} close={onClose} />
, { position: 'bottom-right', duration: null })

class Notification extends Component {

  render() {
    const { appearance, message, title, close } = this.props;
    const isDanger = appearance === 'error',
          isWarning = appearance === 'warning',
          isInfo = appearance === 'info',
          isSuccess = appearance === 'success'

    return (
      <div style={{margin:10, }} className={`notification ${isDanger ? 'is-danger' : isWarning ? 'is-warning' : isInfo ? 'is-link' : isSuccess ? 'is-success' : '' }`}>
        <button className="delete" onClick={close}> </button>
        {title && <div className="title is-5"> 
          {title}
        </div>}
        {message}
      </div>
    );
  }
}

export default {
  success,
  info,
  warn,
  error
}
