import { idify } from '../setUtils';

const unsketchable = {
  '2': ['selfdestruct', 'transform', 'explosion', 'metronome', 'mimic', 'sketch'],
  '3': ['mimic', 'sketch'],
  '4': ['mimic', 'sketch', 'chatter'],
  '5': ['mimic', 'sketch', 'chatter'],
  '6': ['mimic', 'sketch', 'chatter'],
  '7': ['mimic', 'sketch', 'chatter'],
  '8': ['mimic', 'sketch', 'chatter'],
};

const pokedex = {};
let isPokedexInit = false;

function initPokedex() {
  if (!isPokedexInit) {
  fetch('/data/learnsets.json')
    .then((response) => { return response.json(); })
    .then((data) => { Object.assign(pokedex, data); isPokedexInit = true; });
  }
}

function walkEvoLine(name) {
  let results = [pokedex[idify(name)]['name']];

  if("baseSpecies" in pokedex[idify(name)]) {
    return results.concat(walkEvoLine(pokedex[idify(name)]['baseSpecies']));
  }
  if("prevo" in pokedex[idify(name)]) {
    return results.concat(walkEvoLine(pokedex[idify(name)]['prevo']));
  }
  if("baseForme" in pokedex[idify(name)]) {
    return results.concat(walkEvoLine(pokedex[idify(name)]['baseForme']));
  }
  return results;
}

function getMethods(pokemon, move, minGen) {
  let learnset = pokedex[idify(pokemon)]['learnset'];

  if (learnset[idify(move)] !== undefined) {
    let methods = [];
    learnset[idify(move)].forEach(el => {
      if (parseInt(el[0]) >= minGen) {
        methods.push({name: [pokemon], learnCode: el, sketch: false});
      }
    });
    return methods;
  }

  if (idify(move) === 'sketch') {
    return [];
  }
  let sketchMethods = getMethods(pokemon, 'Sketch', minGen);
  return sketchMethods.reduce((acc, cur) => {
    if (unsketchable[cur[0]].includes(idify(move))) {
      return acc;
    }
    return [...acc, {...cur, sketch: true}];
  }, []);
}

function getName(pokemon) {
  return pokedex[idify(pokemon)]['name'];
}

export { initPokedex, walkEvoLine, getMethods, getName }
