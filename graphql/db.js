export const people = [
  {
    id: "1",
    name: "knulps",
    age: 18,
    gender: "female"
  },
  {
    id: "2",
    name: "Jane",
    age: 18,
    gender: "female"
  },
  {
    id: "3",
    name: "Musket",
    age: 12,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
