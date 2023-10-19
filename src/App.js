import logo from './logo.svg';
// import logo2 from './logoNCC.png'
import './App.css';
import Sidebar from './Componets/Sidebar'
import Content from './Componets/Content'
import Footer from './Componets/Footer';
function App() {
  return (
    <div className="App">
      {/* <img src={logo}/> */}
      <Sidebar/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;
