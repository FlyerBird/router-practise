import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Contact from './views/Contact';
import Projects from './views/Projects';
import Navbar from './components/Navbar';
import ProjectsGames from './components/ProjectsGames';
import ProjectsApps from './components/ProjectsApps';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="projects" element={<Projects/>} >
          <Route path="games" element={<ProjectsGames />} />
          <Route path="apps" element={<ProjectsApps />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
