function listify(words) {
  let result = '';
  words.reverse().forEach((word, pos) => {
    if(pos == 0) {
      result = word;
    } else if (pos == 1) {
      result = word + ' or ' + result;
    } else {
      result = word + ', ' + result;
    }
  });
  return result;
}

export default listify;
