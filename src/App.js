import './scss/app.scss'
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
 
    <>
    <Navbar/>
    <ItemListContainer/>
    <ItemDetailContainer/>
    </>
  
  );
}

export default App;