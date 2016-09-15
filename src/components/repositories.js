import React, { PropTypes } from 'react'

import Loader from './loader'

const Repositories = ({ fetching, repositories }) => {
  const renderRepos = () => {
    if (!Object.keys(repositories).length) return (<div>Type username and pres "Go!" to get results</div>)

    if (!repositories.total) { return <div>No repos</div> }

    return (
      <ul className="repositories__list">
        {
          repositories.items.map(item =>
            <li className="repositories__item" key={item.id}>
              <h3>{ item.name }</h3>
              <p>{ item.description }</p>
            </li>)
        }
      </ul>
    )
  }

  return (
    <div className="repositories">
      {
        fetching ? <Loader /> : renderRepos()
      }
    </div>
  )
}

Repositories.propTypes = {
  fetching: PropTypes.bool.isRequired,
  repositories: PropTypes.shape({
    total: PropTypes.number,
    items: PropTypes.array
  }).isRequired
}

export default Repositories
