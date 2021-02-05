function parseSpecies(line) {
  const closeBracket = line.lastIndexOf(')');
  const atSymbol = line.lastIndexOf('@');
  if (closeBracket == -1) {
    return atSymbol == -1 ? line.trim() : line.substring(0, atSymbol).trim();
  } else {
    if (atSymbol > closeBracket) {
      line = line.substring(0, atSymbol);
    }
    // need to suss out gender
    let candidate = line.substring(line.lastIndexOf('(') + 1, closeBracket);
    if (candidate.length == 1) {
      line = line.substring(0, line.lastIndexOf('('));
      candidate = line.substring(line.lastIndexOf('(') + 1, closeBracket);
    }
    return candidate;
  }
}

function parseMove(line) {
  return line.trim().substring(1).trim();
}

function parseSet(moveset) {
  let lines = moveset.split('\n');
  let results = {'moves': []};
  results['pokemon'] = parseSpecies(lines[0])
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

export { parseSet, idify };

