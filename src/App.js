import './App.css';
import {Header ,SubHeader}from './Components/Header/header'
import PokemonList from './Components/PokemonList';
function App() {
  return (
    <div className="App">
      <Header/>
      <SubHeader/>
      <PokemonList/>
    </div>
  );
}

export default App;
