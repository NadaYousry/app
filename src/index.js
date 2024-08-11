import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    return <div>Something went wrong in the Display App!</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

// If you still want to run this standalone (outside of single-spa):
if (!window.singleSpaNavigate) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
