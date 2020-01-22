{
  'use strict'

  function parseSpecies(line) {
    const closeBracket = line.lastIndexOf(')');
    const atSymbol = line.lastIndexOf('@');
    if (closeBracket == -1) {
      return atSymbol == -1 ? line.trim() : line.substring(0, atSymbol).trim();
    } else {
      if (atSymbol > closeBracket) {
        line = line.substring(0, atSymbol);
      }
      return line.substring(line.lastIndexOf('(') + 1, closeBracket);
    }
  }

  function parseMove(line) {
    return line.trim().substring(1).trim();
  }

  function parseSet(moveset) {
    let lines = moveset.split('\n');
    let results = {'moves': []};
    results['name'] = parseSpecies(lines[0])
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()[0] == '-') {
        results['moves'].push(parseMove(lines[i]));
      }
    }
    return results;
  }
  
  function idify(string) {
    return string.replace(/[^a-z0-9]/gi, '').toLowerCase();
  }

  function idifySet(reducedSet) {
    let newSet = {'moves': []};
    newSet['name'] = idify(reducedSet['name']);
    reducedSet['moves'].forEach((el) => { newSet['moves'].push(idify(el)); });
    return newSet;
  }

  function getLearnString(learnCode) {
    let method = learnCode[1];
    let extra = learnCode.substring(2);
    switch(method) {
      case 'E':
        return ' as an egg move.';
      case 'D':
        return ' from the dream world for vgc2020???';
      case 'S':
        return ' from a special event.';
      case 'L':
        if (extra == 0) {
          return `upon evolution.`;
        }
        return ` at level  ${extra}.`;
      case 'M':
        return ' from a TM or TR.';
      case 'T':
        return ' from a Move Tutor';
      case 'X':
        return ' as an egg, traded back. lmk if you see this as output @stalruthvgc';
      case 'Y':
        return ' from an event, traded back.  lmk if you get this @stalruthvgc.';
      case 'V':
        return ' VC transfer. idk how that works for VGC20.';
    }
  }

  function getMethods(pokemon, move) {
    let learnset = BattleLearnsets[idify(pokemon)]['learnset'];
    let methods = [];
    let allMethods = learnset[idify(move)];
    if (allMethods === undefined) {
      return methods;
    }

    allMethods.forEach(el => {
    if (el.startsWith('8')) {
        methods.push({name: pokemon, method: getLearnString(el)});
      }
    });
    return methods;
  }

  function walkEvoLine(name) {
    let results = [BattlePokedex[idify(name)]['species']];
    if("prevo" in BattlePokedex[idify(name)]) {
      return results.concat(walkEvoLine(BattlePokedex[idify(name)]['prevo']));
    }
    if("baseForme" in BattlePokedex[idify(name)]) {
      return results.concat(walkEvoLine(BattlePokedex[idify(name)]['baseSpecies']));
    }
    return results;
  }

  function calc() {
    let moveset = parseSet(document.getElementById('moveset').value);
    let ids = idifySet(moveset);
    let list = document.getElementById('resultList');
    let line = walkEvoLine(moveset['name'])

    while (list.firstChild) {
      list.firstChild.remove();
    }

    let learnset = BattleLearnsets[ids['name']]['learnset'];
    ids['moves'].forEach((move, i) => {
      let element = document.createElement('li');
      let methods = [];
      line.forEach(pokemon => {
        methods = methods.concat(getMethods(pokemon, moveset['moves'][i]));
      });
      if (methods.length == 0) {
        element.textContent = moveset['name'] + ' does not learn ' + moveset['moves'][i] + ' in VGC2020.';
      } else {
        element.appendChild(document.createTextNode(moveset['name'] + ' learns ' + moveset['moves'][i]));
        if (methods.length > 1) {
          element.appendChild(document.createTextNode(':'));
          let ul = document.createElement('ul');
          methods.forEach(el => {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode((el["name"] !== moveset["name"] ? " as " + el["name"] : "")
              + el["method"]));
            ul.appendChild(li);
          });
          element.appendChild(ul);
        } else {
          element.appendChild(
            document.createTextNode(
              (methods[0]["name"] !== moveset["name"] ? " as " + methods[0]["name"] : "")
              + methods[0]["method"]
            )
          );
        }
      }
      list.appendChild(element);
    });
    document.getElementById('results').classList.remove('hide');
  }

  document.getElementById('calculate').addEventListener('click', calc);
}
