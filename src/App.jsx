import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Message from './Pages/Message';
import Wallet from './Pages/Wallet';
import HelpSupport from './Pages/HelpSupport';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Settings from './Pages/Settings';


function App() {
 
  return (<>
      
<BrowserRouter>
<Routes> 
<Route path='/' element={<Header/>}>
<Route index element={<Home/>}/>
<Route path="/home" element={<Home />} />
<Route path="/message" element={<Message />} />
<Route path="/wallet" element={<Wallet />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/help-support" element={<HelpSupport />} />

<Route path="/profile" element={<Profile />} />
<Route path="/settings" element={<Settings />} />
<Route path='*' element={<Error/>}/>
</Route>

</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
