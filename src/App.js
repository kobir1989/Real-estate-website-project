import './App.css';
import Header from './Component/Header/Header';
import NavManue from './Component/NavManue/NavManue';
function App() {
  return (
    <div id='container__main'>
      <div className='nav__manue-left'>
        <NavManue />
      </div>
      <div className='whole__body'>
        <Header />
      </div>
    </div>
  );
}

export default App;
