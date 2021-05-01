import {ChatEngine} from "react-chat-engine"
import './App.css'
import ChatFeed from "./components/ChatFeed"
import LoginForm from "./components/LoginForm"

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
          height="100vh"
          projectID="a84ba77f-6344-4054-80c7-a2bc1c95a67d"
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps)=><ChatFeed {... chatAppProps} />}  
        />
    )
}

export default App