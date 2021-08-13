import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import Login from './components/Login';

function App() {
  if (!localStorage.getItem('username')) return <Login/>
  return (
    <ChatEngine
    height="100vh"
    projectID="dd4fd4cd-1c2f-4621-9181-f860599298bb"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(props)=><ChatFeed {... props}/>}
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
}

export default App;
