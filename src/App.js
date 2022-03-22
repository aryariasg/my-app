import './scss/app.scss'
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
 
    <>
    <Navbar/>
    <ItemListContainer/>
    <ItemCount />

    </>
  
  );
}

export default App;