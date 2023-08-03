import React from 'react';
import Courselist from './Courselist';
import Courseform from './Courseform';
import Booklist from './Booklist';
import Studentform from './Studentform';
import Studentlist from './Studentlist';
import Navigationbar from './Navigationbar';
import Footer from './Footer';
import {Routes,Route} from 'react-router-dom';
import Middlepart from './Middlepart';
import Bookform from './Bookform';
import Middlelower from './Middlelower';
import Loginform from './Loginform';
import Registrationform from './Registrationform'; 
import Bookedit from './Bookedit';
import Subscribe from './Subscribe';
import Sublist from './Sublist';

const Files = () => {
  return (
    <div>



 

        <Navigationbar></Navigationbar>
        <Routes>
          <Route path='/' element={<Middlepart/>}></Route>
          <Route path='/Courseform' element={<Courseform/>}></Route>
          <Route path='/Courselist' element={<Courselist/>}></Route>
          <Route path='/Booklist' element={<Booklist/>}></Route>
          <Route path='/Bookform' element={<Bookform/>}></Route>
          <Route path='/Studentform' element={<Studentform/>}></Route>
          <Route path='/Studentlist' element={<Studentlist/>}></Route>
          <Route path='/Loginform' element={<Loginform/>}></Route>
          <Route path='/Registrationform' element={<Registrationform/>}></Route>
          <Route path='/Sublist' element={<Sublist/>}></Route>
          
        </Routes>
        <Subscribe></Subscribe>
        <Middlelower></Middlelower>
       <Footer></Footer>
    

    </div>
  )
}

export default Files