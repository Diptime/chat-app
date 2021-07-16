import {ChatEngine} from 'react-chat-engine'
import './App.css'
import LoginForm from './components/LoginForm.jsx'
import ChatFeed from './components/ChatFeed.jsx'
function App(){
  if (!localStorage.getItem('username')) return <LoginForm />;
    return(
      <ChatEngine 
      height= "100vh"
      projectID= "1ab4ce76-1881-498b-83b8-cc6a23eaad7e" 
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
      />
    )
}
export default App