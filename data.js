// Id generator

function* createIds() {
  let index = 1;

  while (index < 100) {
    yield index++;
  }
}

const id = createIds();

// create data

const data = [
  {
    name: 'Jhonson James',
    age: 33,
    livedIn: 'Boston MA',
    martialStat: 'Married',
    job: 'Web Developer',
    img: `https://randomuser.me/api/portraits/men/${id.next().value}.jpg`,
  },
  {
    name: 'Marry James',
    age: 28,
    livedIn: 'Los Angeles',
    martialStat: 'Unmarried',
    job: 'Fashion designer',
    img: `https://randomuser.me/api/portraits/women/${id.next().value}.jpg`,
  },
  {
    name: 'Steve Smith',
    age: 30,
    livedIn: 'California',
    martialStat: 'Unmarried',
    job: 'Full stack developer',
    img: `https://randomuser.me/api/portraits/men/${id.next().value}.jpg`,
  },
  {
    name: 'Harry Potter',
    age: 25,
    livedIn: 'Hogwarts',
    martialStat: 'Unarried',
    job: 'Wizard',
    img: `https://randomuser.me/api/portraits/men/${id.next().value}.jpg`,
  },
  {
    name: 'Hermione',
    age: 20,
    livedIn: 'Hogwart',
    martialStat: 'Unmarried',
    job: 'Bussiness',
    img: `https://randomuser.me/api/portraits/women/${id.next().value}.jpg`,
  },
];
