import './App.css';
import Navbar from './commons/navbar';
import { Requests } from './Requests';
import { SaleDescription } from './SaleDescription';
import { SaleScreen } from './SaleScreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/*<SaleScreen />*/} 
      <SaleDescription />
      <Requests />
    </div>
  );
}

export default App;
