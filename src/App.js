import React from 'react'
import Main from './components/Main'
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Switch>
      <Route path="/chat-application/" component={Main}/>
    </Switch>
    </>
  );
}

export default App
