import React from 'react'
import UserItem from "./UserItem";
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'

const Users = ({loading, users}) => {

  console.log("Hello, everybody!!")

  if (loading) {
    return <Spinner />
  } else {
    return (
      <div style={userStyle}>
          {users.map((user) => (
              <div key={user.id}>
                  <UserItem user={user} />
              </div>
          ))}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}