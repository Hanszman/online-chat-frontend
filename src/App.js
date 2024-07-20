import { useState } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io.connect('http://localhost:3001');

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const joinRoom = () => {
    if (username && room) {
      
    }
  }
  return (
    <div className="App">
      <h3>Joian A Chat</h3>
      <input
        type="text"
        placeholder="John..."
        onChange={event => {setUsername(event.target.value)}}
      />
      <input
        type="text"
        placeholder="Room ID..."
        onChange={event => {setRoom(event.target.value)}}
      />
      <button>Join A Room</button>
    </div>
  );
}

export default App;
