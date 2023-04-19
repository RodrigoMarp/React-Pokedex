import './App.css';
import Card from './components/poke-card';
import PokeButton from './components/poke-butoon/poke-button';
import { useEffect, useState } from 'react';

function App() {

  useEffect(() => {
    async function fetchData() {
      const getPoke = async (id) => {
        const res = await fetch(`${apiUrl}/${id}`);
        const resp = await res.json();
        
        let types = resp.types.map((t) => t.type.name);
        types = types.join('/');
        
        let img = resp.sprites.other["official-artwork"].front_default;

        const poke = {
          id: resp.id,
          name: resp.name,
          type: types,
          img,
        }
        // console.log(poke);
        return poke;
      }

      const region = [
        {
          regionName: "Kanto",
          pokes: [
            await getPoke(1),
            await getPoke(4),
            await getPoke(7),
          ]
        },
        {
          regionName: "Johto",
          pokes: [
            await getPoke(152),
            await getPoke(155),
            await getPoke(158),
          ]
        },
        {
          regionName: "Hoenn",
          pokes: [
            await getPoke(252),
            await getPoke(255),
            await getPoke(258),
          ]
        },
      ];
      console.log("Been here");
      setRegion(region);
    }
    fetchData();
  }, []);

  const [regionId, setRegionId] = useState(0);
  const [region, setRegion] = useState([]);

  const apiUrl = "https://pokeapi.co/api/v2/pokemon";

  const pokebtnevent = (regionId) => {
    console.log(regionId);
    setRegionId(regionId);
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
          console.log(region[0])
          // region[regionId].pokes.map((poke, index) => {
          //   return (<Card
          //     key={`poke-card-${index}`}
          //     name={ poke.name }
          //     type={ poke.type }
          //     img={ poke.img}
          //   />)
          // })
        }
      </div>
    </div>
    );
}


export default App;
