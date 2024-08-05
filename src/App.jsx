import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUI from './SignUp and SignIn/SignUI';
/* import { HashRouter as Router, Route, Routes } from 'react-router-dom';
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} /> */}
        <Route path="/signin" element={<SignUI />} />
        {/* <Route path="/signup" element={<SignUpPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
