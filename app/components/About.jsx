var React = require('react');

// STATELLES COMPONENT
var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is Weather React application, yeeeea!</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react" target="_blank">
            React JavaScript framework
          </a>
        </li>
        <li>
          <a href="http://openweathermap.com" target="_blank">
            Source of Weather
          </a>
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
