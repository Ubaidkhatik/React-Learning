import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
// import About from './components/About'
import './App.css';

function App() {
  return (
    <>
  
<Navbar title="Text2" homeText="Welcome Home"/>
<div className="container my-3">
  <TextForm heading="Enter the text "/>
  </div>
  

    </>
  );
}

export default App;
