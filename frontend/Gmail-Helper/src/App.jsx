import {Routes , Route} from 'react-router-dom';
import OAuth from './components/OAuth.jsx';
import Dashboard from './components/Dashboard.jsx';

function App() {
  
const handleAuthSuccess = (res) =>{
  const accessToken = res.access_token;
  console.log("Access Token : ",accessToken);
}
  return (
   
  <Routes>
    
    <Route path="/" element={<OAuth onSuccess={handleAuthSuccess}/>} />
    <Route path='/dashboard' element={<Dashboard/>}/>
  </Routes>
  )
}

export default App
