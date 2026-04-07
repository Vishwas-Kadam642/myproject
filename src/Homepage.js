import React from "react";

function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>the homepage component.</p>
    </div>
  );
}

function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);

  domElement.innerHTML = reactElement.props.children;

  domElement.setAttribute('href', reactElement.props.href);
  domElement.setAttribute('target', reactElement.props.target);

  container.appendChild(domElement);
}

const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank',
  },
  'Google'
);

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer);

export default Homepage;
export { customRender };