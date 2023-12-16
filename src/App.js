import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/NavBar';
import {Banners} from './components/Banner';
import Aboutme from './components/Aboutme';
import { Skill } from './components/skills';
import { Projects } from './components/projects';
import {Contacts} from './components/Contacts';
import { Footer } from './components/footer';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banners />
      <Aboutme/>
      <Skill/>
      <Projects/>
      <Contacts/>
      <Footer/>

    </div>
  );
}

export default App;
