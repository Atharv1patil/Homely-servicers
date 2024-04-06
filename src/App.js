import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
// import App from '../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Categoryservices from './components/Categoryservices';
import HealthList from './components/HealthList';


import About from './components/About';
import AdminHome from './components/AdminHome';
import AdminHeader from './components/Adminheader';
import Booking from "./components/Booking";
import BookingApp from './components/Bookingapp';
import Catfornew from "./components/Catfornew";
import CleanerList from './components/CleanerList';
import Contact from './components/Contact';
import Electrician from './components/Electrician';
import Footer from './components/Footer';
import ForgotPass from './components/Forgotpass';
import Gardener from './components/Gardener';
import GeneralPhysician from './components/GeneralPhysician';
import Home from './components/Home';
import HomeCleaner from './components/HomeCleaner';
import Login from './components/Login';
import Login1 from './components/Login1';
import MaintenanceList from './components/MaintenanceList';
import Mechanic from './components/Mechanic';
import OutdoorList from './components/OutdoorList';
import Payment from "./components/Payment";
import Plumber from './components/Plumber';
import ServiceCard from './components/ServiceCard';
import ServiceProviderHome from './components/ServiceProviderHome';
import ServiceProviderPage from './components/ServiceProviderPage';
import ServicesList from './components/ServicesList';
import UserSignUp from './components/UserSignUp';
import UserHeader from './components/UserHeader';
import UserHome from './components/UserHome';
import ViewBooking from './components/ViewBooking';
import ViewUser from './components/Viewuser';
import WindowCleaner from './components/WindowCleaner';
import Service_Provider_signup from './components/Service_Provider_signup';
import SignUp from './components/Signup';
import ServiceProviderHeader from './components/ServiceProviderHeader';
import Serrov from './components/Serrov';
// import Serrr from './components/Serrr';
// import Serrr from './components/Serrr';


//import {  Route, Routes } from "react-router-dom";
function App() {
  return (

   
      
      <BrowserRouter>
    
      <Switch>
        <Route exact={true} path="/forgot_password">
        <Header />
          <ForgotPass />
          <Footer />
        </Route>
        <Route exact={true} path="/">
        <Header />
          <Home />
          <Footer />
        </Route>
        <Route exact={true} path="/about">
        <Header />
          <About />
          <Footer />
        </Route>
        <Route exact={true} path="/contact">
        <Header />
          <Contact />
          <Footer />
        </Route>
        <Route exact={true} path="/login">
        <Header />
          <Login />
          <Footer />
        </Route>

        <Route exact={true} path="/logins">
        <ServiceProviderHeader/>
          <Login1/>
          <Footer />
        </Route>
        <Route exact={true} path="/usersignup">
        <Header />
          <UserSignUp />
          <Footer />
        </Route>
        <Route exact={true} path="/signup">
        <Header />
          <SignUp />
          <Footer />
        </Route>

        {/* <Service_Provider_signup> */}
        <Route exact={true} path="/serviceprovidersignup">
        <ServiceProviderHeader />
          <Service_Provider_signup />
          <Footer />
        </Route>
      

        <Route exact={true} path="/categoryservices">
        <UserHeader />
          <Categoryservices />
          <Footer />
        </Route>

        <Route exact={true} path="/servicecard">
          <UserHeader />
          <ServiceCard />
          <Footer />
        </Route>

        {/* <Route exact = {true} path ="/authcontext">
          <AuthContext/>
        </Route> */}


        <Route exact ={true} path="/bookingapp">
          <BookingApp/>
          
        </Route>


        <Route exact={true} path="/healthlist">
        <UserHeader />
          <HealthList />
          <Footer />
        </Route>

        <Route exact={true} path="/payment">
        <UserHeader />
        <Payment />
          <Footer />
        </Route>
        <Route exact={true} path="/viewbooking">
          <UserHeader/>
         <ViewBooking/>
          <Footer />
        </Route>

        <Route exact={true} path="/maintenancelist">
        <UserHeader />
          <MaintenanceList />
          <Footer />
        </Route>
        <Route exact={true} path="/cleanerlist">
        <UserHeader />
          <CleanerList />
          <Footer />
        </Route>
        <Route exact={true} path="/outdoorlist">
        <UserHeader />
          <OutdoorList />
          <Footer />
        </Route>
        <Route exact={true} path="/serviceproviderhome">
        <ServiceProviderHeader />
          <ServiceProviderHome />
          <Footer />
        </Route>
        <Route exact={true} path="/adminhome">
          <AdminHeader />
          <AdminHome />
          <Footer />
        </Route>

        <Route exact={true} path="/viewuser">
          <AdminHeader />
          <ViewUser />
          <Footer />
        </Route>
        <Route exact ={true} path="/booking">
          <ServiceProviderHeader/>
          <Booking/>
        </Route>
          

        <Route exact={true} path="/catfornew">
          <Catfornew />
          <ServicesList categoryId={104}/>
          <Footer />
        </Route>

        <Route exact={true} path="/viewserviceprovider">
          <AdminHeader />
          <ServiceProviderPage />
          <Footer />
        </Route>
        <Route exact={true} path="/service-providers/1">
          <UserHeader />
          <HomeCleaner specialization={"home cleaner"} />
          <Footer />
        </Route>

        <Route exact={true} path="/service-providers/2">
          <UserHeader />
          <WindowCleaner specialization={"window cleaner"} />
          <Footer />
        </Route>

        <Route exact={true} path="/serviceproviders/1">
          <UserHeader />
          <Electrician specialization={"electrician"} />
          <Footer />
        </Route>

        <Route exact={true} path="/serviceproviders/2">
          <UserHeader />
          <Mechanic specialization={"mechanic"} />
          <Footer />
        </Route>

        <Route exact={true} path="/serviceproviders/3">
          <UserHeader />
          <Plumber specialization={"plumber"} />
          <Footer />
        </Route>
        <Route exact={true} path="/serrr">
          <ServiceProviderHeader />
          <Serrov/>
          <Footer />
        </Route>
       
        <Route exact={true} path="/generalphysician">
          <UserHeader />
          <GeneralPhysician specialization={"general physician"} />
          <Footer />
        </Route>
        <Route exact={true} path="/gardener">
          <UserHeader />
          <Gardener specialization={"gardener"} />
          <Footer />
        </Route>

        <Route exact={true} path="/userhome">
          <UserHeader />
          <UserHome />
          <Footer />
        </Route>
        <Route exact={true} path="/servicecard">
          <UserHeader />
          <ServiceCard />
          <Footer />
        </Route>
       

        <Route exact={true} path="/maintenanceservices">
          <UserHeader />
          <ServicesList categoryId={101}/>
          <Footer />
        </Route>

        <Route exact={true} path="/healthservices">
          <UserHeader />
          <ServicesList categoryId={102}/>
          <Footer />
        </Route>

        <Route exact={true} path="/cleaningservices">
          <UserHeader />
          <ServicesList categoryId={103}/>
          <Footer />
        </Route>

        <Route exact={true} path="/outdoorservices">
          <UserHeader />
          <ServicesList categoryId={104}/>
          <Footer />
        </Route>
      </Switch>

      
      
  </BrowserRouter>
   
  );
}

export default App;
