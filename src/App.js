import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Home></Home>

      <Footer> </Footer>
    </div>
  );
}

export default App;
