import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async() => {
    const users = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUsers(users.data);
  };

  useEffect(() => {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    setLoading(true);
    getUsers();
    setLoading(false);
  }, []);

    return (
      <div className="App">
        <Navbar title="Github Finder" 
                icon="fab fa-github" />
        <div className='container'>
          <Users loading={ loading } users={ users }/>
        </div>
      </div>
    );
  }

export default App;
