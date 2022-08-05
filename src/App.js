import './App.scss';
import Header from './Component/Header/Header';
import NavManue from './Component/NavManue/NavManue';
import Feature from './Component/Feature/Feature';
import Story from './Component/Story/Story';
function App() {
  return (
    <div id='container__main'>
      <div className='nav__manue-left'>
        <NavManue />
      </div>
      <div className='whole__body'>
        <Header />
        <Feature />
        <Story />
      </div>
    </div>
  );
}

export default App;
