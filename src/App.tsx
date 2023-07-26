import { data } from './fma-data';

import { Header } from './components/Header/Header';
import { CharacterRatings } from './components/Table/CharacterRatings'
import { CharacterCards } from './components/Card/CharacterCards';

function App() {

  return (
    <>
      <Header />
      <CharacterRatings characters={data}/>
      <CharacterCards characters={data}/>
    </>
  )
}

export default App
