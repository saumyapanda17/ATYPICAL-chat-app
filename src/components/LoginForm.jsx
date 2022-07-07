import { useState } from 'react';
import axios from 'axios';

const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': "e0e65dd5-a558-48c4-8dc8-0052f5638d52", 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (error) {
      setError('The username or password is incorrect.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">ATYPICAL</h1>
        
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h3>{error}</h3>
        <h3> TRY THESE GIVEN CREDENTIALS TO ENTER THE CHATROOM: </h3>
        <h3 class="credentials"> Username - accountuser <br /> Password - accountuser123</h3>    
        <h6 class="name">Made by Saumya :) </h6>       

      </div>
      

    </div>

  );
};

export default Modal;