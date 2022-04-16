import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search';
import Alert from './components/layout/Alert'
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // const getUsers = async() => {
  //   const users = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   setUsers(users.data);
  // };

  useEffect(() => {
  }, [alert])


  const searchUsers = async (text) => {
    console.log("text = " + text);
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUsers(res.data.items);
    setLoading(false);
  }

  // Clear users from 
  const clearUsers = () => {
      setUsers([]);
  }

  const displayAlert = (message, type) => {
    setAlert({message: message, type: type });
    // console.log(alert.message);
    console.log("message = " + message);
    setTimeout(() => setAlert(null), 3000);
  }

    return (
      <div className="App">
        <Navbar title="Github Finder" 
                icon="fab fa-github" />
        <div className='container'>
          <Alert alert={alert} />
          <Search 
            searchUsers={searchUsers} 
            clearUsers={clearUsers}
            showClear={users.length > 0 ? true : false}  
            displayAlert={displayAlert}
          />
          <Users loading={ loading } users={ users }/>
        </div>
      </div>
    );
  }

export default App;
