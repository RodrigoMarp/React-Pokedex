import logo from './logo.svg';
import './App.css';
import Card from './components/poke-card';
import PokeButton from './components/poke-butoon/poke-button';
import pokeimg1 from "./img/001.png";
import pokeimg7 from "./img/007.png";
import pokeimg4 from "./img/004.png";
import pokeimg152 from "./img/152.png";
import pokeimg155 from "./img/155.png";
import pokeimg158 from "./img/158.png";
import pokeimg252 from "./img/252.png";
import pokeimg255 from "./img/255.png";
import pokeimg258 from "./img/258.png";
import { useState } from 'react';

function App() {

  const [region, setRegion] = useState(0);

  const pokes = [ // pokes[0]
    {
      region: 'Kanto',
      pokes: [
        { id: 1, name: 'Bulbassauro', type: 'Grama/Poison', img: pokeimg1 },
        { id: 4, name: 'Charmander', type: 'Fogo', img: pokeimg4 },
        { id: 7, name: 'Squirtle', type: 'Água', img: pokeimg7 },
      ],
    },
    {
      region: 'Johto',
      pokes: [
        { id: 152, name: 'Chikorita', type: 'Grama', img: pokeimg152 },
        { id: 155, name: 'Cyndaquil', type: 'Fogo', img: pokeimg155},
        { id: 158, name: 'Totodile', type: 'Água', img: pokeimg158},
      ],
    },
    {
      region: 'Hoenn',
      pokes: [
        { id: 252, name: 'Treecko', type: 'Grama', img: pokeimg252 },
        { id: 255, name: 'Torchic', type: 'Fogo', img: pokeimg255 },
        { id: 258, name: 'Mudkip', type: 'Água', img: pokeimg258 },
      ],
    }
  ];

  const pokebtnevent = (regionId) => { 
    setRegion(regionId);
  };

  return (
    <div className="App">
      
      <header className="App-header">
        <div className='R-button'>
          <PokeButton 
            name="Kanto" 
            height={200} 
            width={120}
            onclick={ () => { pokebtnevent(0) } }
          />
          <PokeButton 
            name="Johto" height={200} width={120}
            onclick={ () => { pokebtnevent(1) } }
          />
            
          <PokeButton name="Hoenn" height={200} width={120}
            onclick={ () => { pokebtnevent(2) } }
          />
        </div>
        <h1>Pokémon</h1>
      </header>
      <div className="topnav">
            <form className="Form" action="/action_page.php">
            <input className='seachbar' type="text" placeholder="Search Pokémon" name="search"/>
            </form>
      </div>
      <div className='App-cards'>
        { 
          pokes[region].pokes.map((poke, index) => {
            return (<Card
              key={`poke-card-${index}`}
              name={ poke.name }
              type={ poke.type }
              img={ poke.img}
            />)
          })
        }
      </div>
    </div>
    );
}


export default App;
