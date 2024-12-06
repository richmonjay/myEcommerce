import {
  Routes,
  Route,
  BrowserRouter,
  useLocation
} from "react-router-dom"

import React from 'react';
import { Link } from 'react-scroll';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './JSX FILES/header.jsx';
import Body from './JSX FILES/body.jsx';
import Brands from './JSX FILES/brands.jsx';
import Review from './JSX FILES/review.jsx';
import Protection from './JSX FILES/protection.jsx';
import Register from './JSX FILES/register.jsx';
import Rolex from './JSX FILES/rolex.jsx';
import Patek from './JSX FILES/patek.jsx';
import Login from "./JSX FILES/login.jsx";
import Registration from "./JSX FILES/registration.jsx";
import HomepageNav from "./JSX FILES/homepageNav.jsx";
import HomepageBody from "./JSX FILES/homepageBody.jsx";

function Home() {
  return (
    <div id="top">
      <Header />
      <Body />
      <Brands />
      <Review />
      <Protection />
      <div id="rolex-section">
        <Rolex />
      </div>
      <div id="patek-section">
        <Patek />
      </div>
      <Link to="top" smooth={true} duration={500} className="scroll-to-top">
        ↑
      </Link>
    </div>
  ); 
}

function Homepage() {
  return (
    <div>
      <HomepageNav />
      <HomepageBody/>
    </div>
  )
}




function AppContent() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
    // <HomepageNav />
  );
}

export default App;