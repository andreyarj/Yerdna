import './App.css';
import '@gabrielfins/ripple-effect';

import About from './CompsPage/About';
import Header from './CompsPage/Header';
import Projects from './CompsPage/Projects';
import Networks from './CompsPage/Networks';

function App() {
  return (
    <>

      <Header />
      <About />
      <Projects />
      <Networks />

    </>
  );
}

export default App;
