import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NaviBar from './components/NaviBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App'>
      <NaviBar/>
      <Banner/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
