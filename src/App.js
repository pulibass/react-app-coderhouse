import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola desde ItemListContainer"/>
    </div>
  );
}
export default App;
//rfc  crea la estructura de componente