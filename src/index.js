function capitalize(stringA) {
 	const arrayA = stringA.split(' ');
    const newSentence = []
  
    for (word of arrayA) {
      newSentence.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    return newSentence.join(' ');
}

const sentence = "This is an example of something";

console.log(capitalize(sentence));
