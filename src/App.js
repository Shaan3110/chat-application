import {ChatEngine} from 'react-chat-engine';
import './App.css';
import { ChatFeed } from './components/ChatFeed';

function App() {
  return (
    <ChatEngine
    height="100vh"
    projectID="dd4fd4cd-1c2f-4621-9181-f860599298bb"
    userName="suchintandas"
    userSecret="123"
    renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}/>
  );
}

export default App;
