import React, { Component, PropTypes } from 'react'

const SearchForm = ({
  fetching,
  onChangeUsername,
  onClear,
  onSearchSubmit,
  username
}) => (
  <div>
    <form action="GET" onSubmit={onSearchSubmit}>
      <input
        className="search"
        type="text"
        placeholder="Username"
        value={username}
        onChange={onChangeUsername}
      />
      <div>
        <button
          disabled={ fetching ? 'disabled' : '' }
          className="button button--action"
          type="submit"
        >
          Go!
        </button>
        <button
          disabled={ fetching ? 'disabled' : '' }
          className="button button--reset" 
          type="reset"
          onClick={onClear}
        >
          Clear
        </button>
      </div>
    </form>
  </div>
)


SearchForm.propTypes = {
  fetching: PropTypes.bool.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

export default SearchForm
