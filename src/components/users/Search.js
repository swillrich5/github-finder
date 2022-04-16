import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Search(props) {

  const { searchUsers, clearUsers, showClear, displayAlert } = props;

  const [text, setText] = useState('');

  const handleTextChange = (event) => {
      const { name, value } = event.target;
      console.log("text = " + value);
      setText(value);
  }

  const onSubmit = e => {
      e.preventDefault();
      if (text === '') {
          displayAlert('Please enter a github username', 'light');
      } else {
        searchUsers(text);
        setText('');
      }
  }

  return (
    <div>
        <form onSubmit={onSubmit} className="form">
            <input type="text" name={text} placeholder="Search Users..." onChange={handleTextChange} />
            <input type="submit" value="Search" className='btn btn-dark btn-block' />
        </form>
        {showClear &&
            <button className="btn btn-light btn-block"
                onClick={clearUsers}>Clear</button> 
        }
    </div>
  )
}

export default Search

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    displayAlert: PropTypes.func.isRequired
}