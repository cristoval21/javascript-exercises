const findTheOldest = function(people = []) {
  let oldestAge = 0;
  let currentYear = (new Date()).getFullYear();
  return people.reduce((acc, person) => {
    const age = (person.yearOfDeath ? person.yearOfDeath : currentYear) - person.yearOfBirth;
    if (age > oldestAge) {
      oldestAge = age;
      acc = person;
    }

    return acc
  }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
