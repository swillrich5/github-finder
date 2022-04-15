import React from 'react'
import PropTypes from 'prop-types';

const UserItem = ({ user: { id, login, avatar_url, html_url }}) => {

  return (
    <div key={id} className='card text-center'>
      <img className='round-img' style={{ width: '60px' }} src={ avatar_url } alt="" />
      <h3>{login}</h3>

      <div>
        <a href={ html_url } className="btn btn-dark btn-sm my-1">More</a>
      </div>
    </div>
  )
}

export default UserItem

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

