import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home'; // Import Home component
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
        <Navbar onLogout={handleLogout} userId={user?.id} /> {/* Pass userId to Navbar */}
        <Switch>
          <Route exact path="/" component={Home} /> {/* Render Home component */}
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
