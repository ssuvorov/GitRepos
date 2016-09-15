import React, { Component, PropTypes } from 'react';

const Repositories = ({ repositories }) => {
  const renderItems = () => {
    if (!repositories.length) { return }

    return (
      <ul className="repositories">
        {
          repositories.map((item) =>
            <li className="repositories__item" key={item.id}>{ item.name }</li>)
        }
      </ul>
    )
  }

  return (
    <div>
      <h2>Type your <strong>username</strong> to see repositories...</h2>
      { renderItems() }
    </div>
  );
}

Repositories.propTypes = {
  repositories: PropTypes.array.isRequired
}

export default Repositories
