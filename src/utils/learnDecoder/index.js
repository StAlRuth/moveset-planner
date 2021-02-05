function learnDecoder(learnCode, pokemon) {
  let result = "";
  if (learnCode[0] !== '8') {
    result += `In Generation ${learnCode[0]} `;
  }

  switch(learnCode[1]) {
    case 'E':
      result += 'as an Egg Move';
      break;
    case 'D':
      result += 'from the Dream World';
      break;
    case 'S':
      result += 'from a special event';
      break;
    case 'L':
      result += learnCode.substring(2) === '0' ? ' upon evolution' : ` at level ${learnCode.substring(2)}`;
      break;
    case 'M':
      result += 'from a TM or TR';
      break;
    case 'T':
      result += 'from a Move Tutor';
      break;
    case 'X':
      result += 'as an egg, traded back';
      break;
    case 'Y':
      result += 'from an event, traded back';
      break;
    case 'V':
      result += 'via VC transfer';
      break;
  }
  
  return result;
}

export default learnDecoder;
