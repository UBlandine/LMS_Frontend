import './App.css'
<<<<<<< HEAD
import Sinup from './Sinupproject/sinup'
import Profiles from './profile/Profiles'
import non1 from '../public/non1.jpg'
import non2 from '../public/non2.jpg'
import non3 from '../public/non3.jpg'
import non4 from '../public/non4.jpg'
import non5 from '../public/non5.jpg'
import non6 from '../public/non6.jpg'
import non7 from '../public/non7.jpg'
import non8 from '../public/non8.jpg'
import non10 from '../public/non10.jpg'
import non11 from '../public/non11.jpg'
import non12 from '../public/non12.jpg'
import Footer from './Footer/Footer'
import Production from './Production/production'
import Category from './Categories/Categories'
import Newb from './News & Blog/newsb'
import Supportus from './Support Us/supportus'
import Navigation from './components/Navigation'
import About from './components/About'
// <<<<<<< HEAD
import Book from './component/book'
import children0 from '../public/chidren4.png'
import  Children1 from '../public/children1.jpeg'
import Children2 from '../public/children2.jpeg'
import Children4 from '../public/children0.jpeg'
import Children6 from '../public/children6.jpeg'
import Children8 from '../public/children8.jpeg'
import Children10 from '../public/children10.jpeg'
import Children11 from '../public/children11.jpeg'
import Children12 from '../public/children12.jpeg'
import Login from './login/login'
// =======
import Support from './Supportusform/Supportform'
// >>>>>>> 53cb77affbb500e0c2b7cdc95f7fe0427cd0100f

=======
import SinUp from './Sinupproject/sinup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './login/login';
import Support from './Supportusform/Supportform';
import Home from './home';
<<<<<<< HEAD
import Nonfiction from './Non-Fiction/Nonfiction';
import Fiction from './Fiction/Fiction';
=======
>>>>>>> fc2e91551f1bf86461cb6e2548cb5a29c7f339c4
>>>>>>> c125116ea5931a53d33dc9e9589eefc98640608a


function App() {
 

  return (
    <>
<<<<<<< HEAD
    <Navigation/>
    <About/>
    <Category/>
    <Production/>
    <Newb/>
    <Supportus/>
     <Sinup/>
     <Login/>
                   <h1 className='non'>Non Fiction Books</h1>
        <Profiles image={non1} name="Maya Angelou" description= "Maya Angelou (April 4, 1928 – May 28, 2014) was an American poet"  />  
        <Profiles image={non2} name="The Boys in the Boat" description=" the Boys in the Boat is a non-fic2013. ."/>                                                                    
        <Profiles image={non3} name="Other Slavery" description="This novel explores the complex relationships between slaves"  />                                                                                                                           
        <Profiles image={non12} name="Becomming of Michelle Obama" description= " from her childhood in the South Side " />
        <Profiles image={non5} name="The Dairly of A young Girl" description= "This poignant and influential diary is the ."/>
        <Profiles image={non6} name="Maya Angelou" description= "Maya Angelou (April 4, 1928 – May 28, 2014) " />
        <Profiles image={non7} name="All things Bright and Beatiful"description= " recount his experiences with a wide" />
        <Profiles image={non8} name="in the Heart of the Sea" description= "the harrowing true story of the whal Moby-Dick." />
        {/* <Profiles image={non10} name="The Bug of girl" description= " booklife of Maria Merian, a pioneering naturalist" /> */}
        {/* <Profiles image={non11} name="Ghost Of Tsunami" description= " is a recent or niche publication, I recommend checking with local " />
        <Profiles image={non12} name="Becomming of Michelle Obama" description= " from her childhood in the South Side " />
<<<<<<< HEAD
         <button className='btnlibrary'>add new book</button> */}
{/* ======= */}
         {/* <button className='btnlibrary'>add new book</button> */}
{/* <<<<<<< HEAD */}
         <div className='cont'>
          <Book image={children0}  name= " activly book" description =" good night story of children "/>
          <Book image={ Children1} name = "just try one book " description= " for children "/>
          <Book image={ Children4} name = "three night kind " description= " fight for the night story "/>
          </div>


          <div className='cont1'>
          <Book image={ Children2} name = "image of book " description= " just story of children"/>
          <Book image={ Children6} name = "work book" description= " from work  we need funy stories to tell our kids"/>
          <Book image={ Children8} name = "children " description= " go out to trip"/>
          </div>
          <div className='cont2'>
          <Book image={ Children12} name = "brown a boutifull" description= " good girls "/>
          <Book image={ Children10} name = "focus in library" description= " just readry"/>
          <Book image={ Children11} name = "fily book " description= " funy girls "/>
          </div>
          {/* <Book image={ Children1} name = "just try one book " description= " for children "/> */}
{/* ======= */}
{/* >>>>>>> 11eaa23125c8c8051ddaea48756061309018ec5f */}
         <Support/>
{/* >>>>>>> 53cb77affbb500e0c2b7cdc95f7fe0427cd0100f */}
    <Footer/>
       
=======
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SinUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/supportus' element={<Support/>}/>
      <Route path='/non-fiction' element={<Nonfiction/>}/>
      <Route path='/fiction' element={<Fiction/>}/>
      {/* <Route path='/visitus' element={<VisitUs/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/> */}
    </Routes>
    </Router>
>>>>>>> fc2e91551f1bf86461cb6e2548cb5a29c7f339c4
    </>
  );
}
export default App

