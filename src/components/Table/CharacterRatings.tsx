import { Component } from 'react';
import { Character } from '../../Types/CharacterTypes';

import './character-ratings.css';

type CharactersPropsType = {
  characters: Character[];
};

export class CharacterRatings extends Component<CharactersPropsType> {

  render() {
    const { characters } = this.props;
    
    const sorted = characters.sort((a, b ) => b.votes - a.votes);

    const fiveElementsSorted = sorted.slice(0 ,5);

    return (
      <section id='character-ratings'>
        <h4> Top Characters </h4>
        <table className="characters-table">
        <thead>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
          </thead>
          <tbody>
            {
              fiveElementsSorted.map((character, index) => (
                <tr key={character.name} className={ index%2 === 0 ? 'table-row-color-gray' : ''}>
                  <td>{character.name}</td>
                  <td>{character.skillset}</td>
                  <td>{character.votes}</td>
                </tr>      
              ))
            }
          </tbody>
        </table>
      </section>
    );
  }
}