import GlobalStyle from './styles/global'

import Header from './components/Header/index.jsx';
import AboutMe from './components/AboutMe/index.jsx'
import Skills from './components/Skills/index.jsx';
import Projects from './components/Projects/index.jsx';
import Formation from './components/Formation/index.jsx';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer/index.jsx';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Formation/>
      <ContactMe/>
      <Footer/>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/><ToastContainer />
    </div>
  );
}

export default App;
