import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

const SearchForm = ({ onChangeUsername, onSearchSubmit, username }) => (
  <div>
    <form action="GET" onSubmit={onSearchSubmit}>
      <input
        className="name"
        type="text"
        placeholder="Username"
        value={username}
        onChange={onChangeUsername}
      />
      <div>
        <button className="button button--action" type="submit">Go!</button>
        <button className="button" type="reset">Clear</button>
      </div>
    </form>
  </div>
)


SearchForm.propTypes = {
  onChangeUsername: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

export default SearchForm
