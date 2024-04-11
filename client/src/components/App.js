import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Signup from './Signup';
import Login from './Login';
import AddNewService from './AddNewService';
import Footer from './Footer';
import ReviewForm from './ReviewForm';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    // Implement logout logic here
    fetch("/logout", {
      method: "DELETE",
    }).then(() => setUser(null)); // Clear user state after logout
  };

  return (
    <div>
      <Router>
        {/* Pass user state and logout function to Navbar */}
        <Navbar user={user} onLogout={handleLogout} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/signup" render={(props) => <Signup {...props} setUser={setUser} />} />
          <Route path="/login" render={(props) => <Login {...props} setUser={setUser} />} />
          <Route path="/add-service" render={(props) => <AddNewService {...props} onAddService={() => {}} />} />
          <Route path="/add-review/:serviceId" render={(props) => <ReviewForm {...props} serviceId={props.match.params.serviceId} />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
