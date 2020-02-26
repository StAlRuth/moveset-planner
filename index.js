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

  function getLearnString(method) {
    switch(method.method) {
      case 'E':
        return ' as an Egg Move.';
      case 'D':
        return ' from the Dream World.';
      case 'S':
        return ' from a special event.';
      case 'L':
        const levels = listify(method.extra.map(i => { return i == 0 ? ' upon evolution' : i; }));
        return ` at level ${levels}.`;
      case 'M':
        return ' from a TM or TR.';
      case 'T':
        return ' from a Move Tutor';
      case 'X':
        return ' as an egg, traded back.';
      case 'Y':
        return ' from an event, traded back.';
      case 'V':
        return ' via VC transfer.';
    }
  }

  function listify(words) {
    let result = '';
    words.reverse().forEach((word, pos) => {
      if(pos == 0) {
        result = word;
      } else if (pos == 1) {
        result = word + ' and ' + result;
      } else {
        result = word + ', ' + result;
      }
    });
    return result;
  }

  function getLearnSuffix(moveset, method) {
    let prefix = "";
    if (method["name"].length > 1 || method["name"][0] !== [moveset["name"]][0]) {
      prefix = " as " + listify(method["name"])
    }
    if (method["learnCode"][0] != 8) {
      prefix += " in Generation " + method["learnCode"][0];
    }
    return (prefix + getLearnString(method))
  }

  function getMethods(pokemon, move) {
    let learnset = BattleLearnsets[idify(pokemon)]['learnset'];
    let methods = [];
    let allMethods = learnset[idify(move)];
    if (allMethods === undefined) {
      return methods;
    }

    allMethods.forEach(el => {
    if (el[0] >= document.getElementById('mode-value').value) {
        methods.push({name: [pokemon], learnCode: el, gen: el[0], method: el[1], extra: [el.substring(2)]});
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
    let list = document.getElementById('resultList');
    let line = walkEvoLine(moveset['name'])

    while (list.firstChild) {
      list.firstChild.remove();
    }

    let learnset = BattleLearnsets[idify(moveset['name'])]['learnset'];
    moveset['moves'].forEach((move) => {
      let element = document.createElement('li');
      let methods = [];

      line.forEach(pokemon => {
        getMethods(pokemon, move).forEach(method => {
          methods.push(method);
        });
      });

      collectedMethods = []

      methods.forEach(method => {
        for (i of collectedMethods) {
          if (method.gen === i.gen && method.method === i.method && method.name.join(",") === i.name.join(",")) {
            i.extra = [...method.extra, ...i.extra];
            i.learnCode = i.learnCode.substring(0, 2);
            return;
          }
        }
        collectedMethods.push(method);
      });

      methods = [];
      collectedMethods.forEach(method => {
        for (i of methods) {
          if (method.gen === i.gen && method.method === i.method && method.extra.join(",") === i.extra.join(",")) {
            i.name = [...i.name, ...method.name];
            return;
          }
        }
        methods.push(method);
      });

      if (methods.length == 0) {
        element.textContent = moveset['name'] + ' does not learn ' + move + ' in VGC2020.';
      } else {
        element.appendChild(document.createTextNode(moveset['name'] + ' learns ' + move));
        if (methods.length > 1) {
          element.appendChild(document.createTextNode(':'));
          let ul = document.createElement('ul');
          methods.forEach(el => {
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(getLearnSuffix(moveset, el)));
            ul.appendChild(li);
          });
          element.appendChild(ul);
        } else {
          element.appendChild(document.createTextNode(getLearnSuffix(moveset, methods[0])));
        }
      }
      list.appendChild(element);
    });
    document.getElementById('results').classList.remove('hide');
  }

  document.getElementById('calculate').addEventListener('click', calc);

  function setMinimumGeneration(gen) {
    document.getElementById('mode-value').value = gen;
    document.getElementById('mode-value').disabled = true;
  }

  document.getElementById('mode-vgc').addEventListener('click', () => {setMinimumGeneration(8);});
  document.getElementById('mode-smogon').addEventListener('click', () => {setMinimumGeneration(3);});
  document.getElementById('mode-custom').addEventListener('click', () => {document.getElementById('mode-value').disabled = false;});
}

