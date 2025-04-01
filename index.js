const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 1) String: Animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2) String: Four traditional animal names
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3) String: Three traditional animal colors
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// 4) Array: Seven rainbow colors
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5) Array: Six rainbow color initials (excluding indigo)
const [r, o, y, g, b, , v] = colors;

// 6) Array: Indigo only
const [ , , , , , indg] = colors;

// 7) Object: Muppet variables
const { muppetName, color, song, job, partner } = muppet;

// 8) Object: Nested variables
const { album: { theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet;
