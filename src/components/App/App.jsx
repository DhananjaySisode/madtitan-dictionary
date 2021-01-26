import React from 'react';
import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import '../../styles/App.scss'

function App() {
  return (
    <div className='image-div'>
      <NavBar/>
      <div className='app-main-div'>
        <Search/>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
