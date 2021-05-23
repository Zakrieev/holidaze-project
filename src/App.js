import React, {useState} from 'react'
import "./sass/style.scss";
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Accommodations from './components/pages/Accommodations';
import Contact from './components/pages/Contact';
import SignIn from './components/pages/SignIn';
import Details from './components/pages/Details';
import { AuthProvider } from './context/AuthContext';
import Admin from './components/pages/admin/Admin';
import Favourites from './components/pages/Favourites';
import Booking from "./components/pages/booking/Booking";
import "./sass/style.scss";
import MessagesList from './components/pages/admin/contactmessages/MessagesList';
import EnquiryList from './components/pages/admin/enquiries/EnquiryList';
import AddEstablishment from './components/pages/admin/establishment/AddEstablishment';


function App() {
  const [favNum, setFavNum] = useState(JSON.parse(localStorage.getItem('favourites'))?.length || 0);
  return (
      <AuthProvider>
      <Router>
        <Navbar favNum={favNum} />
        <Switch>
          <Route path='/' exact><Home setFavNum={setFavNum} />
          </Route>
          <Route path='/accommodations' exact><Accommodations setFavNum={setFavNum} /> 
          </Route>
          <Route path='/accommodation/:id' exact><Details setFavNum={setFavNum} /> 
          </Route>
          <Route path='/contact' exact><Contact />
          </Route>
          <Route path='/signin' exact><SignIn />
          </Route>
          <Route path='/favourites' exact><Favourites setFavNum={setFavNum} />
          </Route>
          <Route path='/admin' exact><Admin />
          </Route>
          <Route path='/booking/:id'>
            <Booking />
          </Route>
          <Route path='/contactmessages' exact>
            <MessagesList />
          </Route>
          <Route path='/enquiries' exact>
            <EnquiryList />
          </Route>
          <Route path='/establishment' exact>
            <AddEstablishment />
          </Route>
        </Switch>
      </Router>
     </AuthProvider> 
     
  );
}

export default App;
