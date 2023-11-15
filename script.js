function reverseVowelsAndReplaceE(inputString) {
    function isVowel(char) {
      return 'aeiouAEIOU'.includes(char);
    }
  
    const characters = inputString.split('');
    const vowels = characters.filter(char => isVowel(char));
  
    vowels.reverse();
  
    for (let i = 0; i < characters.length; i++) {
      if (characters[i] === 'e' || characters[i] === 'E') {
        characters[i] = '3'; // Fix the character replacement here
      }
    }
  
    let vowelIndex = 0;
  
    for (let i = 0; i < characters.length; i++) {
      if (isVowel(characters[i])) {
        characters[i] = vowels[vowelIndex];
        vowelIndex++;
      }
    }
  
    const result = characters.join('');
    return reverseVowelsAndReplaceL(result);
  }
  
  
  function reverseVowelsAndReplaceL(inputString) {
    function isVowel(char) {
      return 'aeiouAEIOU'.includes(char);
    }
  
    const characters = inputString.split('');
    const vowels = characters.filter(char => isVowel(char));
  
    vowels.reverse();
  
    for (let i = 0; i < characters.length; i++) {
      if (characters[i] === 'l'|| characters[i] === 'L') {
        characters[i] = '1'; // character replacement here
      }
    }
  
    let vowelIndex = 0;
  
    for (let i = 0; i < characters.length; i++) {
      if (isVowel(characters[i])) {
        characters[i] = vowels[vowelIndex];
        vowelIndex++;
      }
    }
  
    const result = characters.join('');
    return reverseVowelsAndReplaceO(result);
  }
  
  function reverseVowelsAndReplaceO(inputString) {
    function isVowel(char) {
      return 'aeiouAEIOU'.includes(char);
    }
  
    const characters = inputString.split('');
    const vowels = characters.filter(char => isVowel(char));
  
    vowels.reverse();
  
    for (let i = 0; i < characters.length; i++) {
      if (characters[i] === 'o' || characters[i] === 'O') {
        characters[i] = '0'; // character replacement here
      }
    }
  
    let vowelIndex = 0;
  
    for (let i = 0; i < characters.length; i++) {
      if (isVowel(characters[i])) {
        characters[i] = vowels[vowelIndex];
        vowelIndex++;
      }
    }
  
    const result = characters.join('');
    return reverseVowelsAndReplaceS(result);
  }
  
  function reverseVowelsAndReplaceS(inputString) {
    function isVowel(char) {
      return 'aeiouAEIOU'.includes(char);
    }
  
    const characters = inputString.split('');
    const vowels = characters.filter(char => isVowel(char));
  
    vowels.reverse();
  
    for (let i = 0; i < characters.length; i++) {
      if (characters[i] === 's' || characters[i] === 'S') {
        characters[i] = '5'; // character replacement here
      }
    }
  
    let vowelIndex = 0;
  
    for (let i = 0; i < characters.length; i++) {
      if (isVowel(characters[i])) {
        characters[i] = vowels[vowelIndex];
        vowelIndex++;
      }
    }
  
    const result = characters.join('');
    return result;
  }
  
  console.log(reverseVowelsAndReplaceE('Hello Worlds'));