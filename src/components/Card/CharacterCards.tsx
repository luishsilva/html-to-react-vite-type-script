import './character-cards.css';
import { Character } from '../../Types/CharacterTypes';

type CharactersPropsType = {
  characters: Character[];
};

export const CharacterCards = ( { characters }: CharactersPropsType) => (
  <section id="character-cards">
    {
      characters.map((card) => (
        <div className="card" key={card.name}>
            <div className='card-titles'>
              <h3>{card.name}</h3>
              <h4>{card.nickName}</h4>
            </div>
            <div className='card-body'>
              <img src={card.imageUrl} />
              <p>{card.background}</p>
            </div>
          </div>
      ))
    }
    </section>
)