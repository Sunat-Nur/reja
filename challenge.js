const animal_list = ["dog", "cow", "goat", "pick", "deer", "bear", "cock", "mole", "sheep", "lion", "wolf"];

function findAnimals(text) {
    const foundAnimals = [];

    for (const animal of animal_list) {
        const animalFirstLetter = animal.charAt(0);
        if (text.includes(animalFirstLetter)) {
            foundAnimals.push(animal);
        }
    }

    return foundAnimals;
}

const answer = findAnimals('dlwbp');
console.log('Answers:', answer);