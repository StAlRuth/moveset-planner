import { h, Component } from 'preact';

import MoveResult from './moveresult';
import { idify, parseSet } from '../utils/setUtils';
import { initPokedex, walkEvoLine, getMethods, getName } from '../utils/pokedexUtils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      gen: '8',
      mode: 'V',
      moveset: '',

      pokemon: '',
      results: []
    }
  }

  componentDidMount() {
    initPokedex();
  }

  modeChanged = (ev) => {
    const modes = {
      'V': '8',
      'S': '3',
      'C': this.state.gen
    };
    const newMode = ev.target.value;
    const newGen = modes[newMode];
    this.setState((state) => {
      return { mode: newMode, gen: newGen };
    });
  };

  genChanged = (ev) => {
    this.setState((state) => {
      return { gen: ev.target.value };
    });
  };

  setChanged = (ev) => {
    this.setState((state) => {
      return { moveset: ev.target.value };
    });
  };

  onSubmit = (ev) => {
    ev.preventDefault();
    const data = new FormData(ev.target);
    const moveset = parseSet(data.get('moveset'));
    const gen = data.get('gen');
    const line = walkEvoLine(moveset['pokemon']);

    let results = [];

    moveset['moves'].forEach((move) => {
      let name = move;
      let methods = [];
      line.forEach((pokemon) => {
        methods = [...methods, ...getMethods(pokemon, move, gen)];
      });
      results = [...results, {name, methods}];
    });

    this.setState((state) => {
      return {
        gen,
        mode: data.get('mode'),
        moveset: data.get('moveset'),

        pokemon: getName(moveset['pokemon']),
        results
      }
    });
  };

  render = (props, state) => (
    <form id="app" class="grid-container fluid" onSubmit={this.onSubmit}>
      <h1>Pokemon Moveset Planner</h1>
      <div class="grid-x">
        <div class="cell small-12 medium-4">
          <label><input type="radio" name="mode" value={'V'} checked={this.state.mode === 'V'} onClick={this.modeChanged} />VGC Mode</label>
        </div>
        <div class="cell small-12 medium-4">
          <label><input type="radio" name="mode" value={'S'} checked={this.state.mode === 'S'} onClick={this.modeChanged} />Smogon Mode</label>
        </div>
        <div class="cell small-12 medium-4">
          <label><input type="radio" name="mode" value={'C'} checked={this.state.mode === 'C'} onClick={this.modeChanged} />Custom Minimum Generation:</label>
          <input type="number" min={3} max={8} name="gen" value={this.state.gen} readonly={this.state.mode !== 'C'} onInput={this.genChanged} aria-label="Minimum Generation"/>
        </div>
        <div class="cell small-12">
          <label>Moveset:
            <textarea value={this.state.moveset} onInput={this.setChanged} name="moveset" rows="7" />
          </label>
        </div>
        <button type="submit" class="button cell small-12">Calculate</button>
        {state.results.map(item => (
          <MoveResult key={item.name} name={item.name} methods={item.methods} pokemon={this.state.pokemon} />
        ))}
      </div>
    </form>
  );
}

export default App;

