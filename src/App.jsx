
import './App.css';
import Header from './components/Header';
import BehanceList from './components/BehanceList';

import Afooter from './components/Afooter';
import Footer from './components/Footer';








function App() {
  return (
    <>
    <div className="main relative overflow-hidden">
 
    <Header/>
   
    <BehanceList/>
    <Afooter/> 
    
    
    <Footer/>
    
  
    </div>
    </>
  );
}

export default App;