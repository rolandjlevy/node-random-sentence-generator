const sentencer = require('sentencer');

const randomNum = (min, max) => Math.floor(Math.random() * (max - min) ) + min;

const getRandomItem = (arr) => arr[randomNum(0, arr.length)];

const list = {
  adjectives: ['cute', 'happy', 'nervous', 'calm', 'mysterious', 'angry', 'confused', 'scared', 'soft', 'sharp', 'weak', 'strong', 'spikey', 'slimey', 'hot', 'cold', 'futuristic', 'ancient', 'kind', 'patient', 'cosmic', 'shiney'],
  nouns: ['boy', 'girl', 'woman', 'man', 'cat', 'mouse', 'dog', 'queen', 'king', 'monster', 'dragon', 'fish', 'robot', 'cyborg', 'astronaut', 'superhero', 'teddy bear'],
  objects: ['bike', 'phone', 'house', 'car', 'apple', 'stick', 'chocolate', 'toy', 'dress', 'fridge', 'lamp', 'boat', 'aquarium', 'banana', 'avocado', 'cake'],
  verbs: ['eat', 'run', 'hide', 'smile', 'fly', 'sleep', 'drive', 'spin', 'jump', 'surf', 'hug', 'frown', 'fight', 'attack', 'dive'],
  styles: ['rembrant oil painting', 'van gogh painting', 'picasso painting', 'high quality photo', 'digital art', 'expressive oil painting', 'vaporwave', 'abstract oil painting', 'oil pastel drawing', '3d render', 'pixel art'],
  places: ['the ocean', 'the sky', 'a forest', 'a beach', 'the amazon', 'a desert', 'outer space', 'the jungle', 'russia', 'china', 'japan', 'a black hole', 'Times Square']
}

sentencer.configure({
  nounList: list.nouns,
  adjectiveList: list.adjectives,
  actions: {
    randomObject: () => getRandomItem(list.objects),
    randomVerb: () => getRandomItem(list.verbs),
    randomStyle: () => getRandomItem(list.styles),
    randomPlace: () => getRandomItem(list.places)
  }
});

const getRandomSentence = async () => {
  return await sentencer.make("{{ an_adjective }} {{ noun }} and {{ an_adjective }} {{ randomObject }} ready to {{ randomVerb }} in {{ randomPlace }}, in the style of {{ randomStyle }}")
}

(async () => {
  const result = await getRandomSentence();
  console.log(result);
})();
