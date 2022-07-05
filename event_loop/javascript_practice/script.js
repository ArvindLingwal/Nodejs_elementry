/*1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console 
(We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). 
HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players 
who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [i, player] of game.scored.entries()){
    console.log(`Goal ${i+1}: ${player}`)
};

//2. calculate avg.

const odds = Object.values(game.odds);
let avg = 0;
for (const odd of odds){
    avg += odd;
}
console.log(avg/odds.length);

// 3.
for(const [team, odd] of Object.entries(game.odds)){
    const teamStr = team == 'x'? 'draw' :`victory ${game[team]}`
    console.log(`Odd of ${teamStr}: ${odd}.`);
}

const orderSet = new Set([
     'Pasta',
     'Pizza',
     'Rissoto',
     'Pizza',
     'Pasta',
     'Rissoto']);
    
console.log(orderSet);

console.log(new Set('Jonas'));

console.log(orderSet.size);
console.log(orderSet.has('arv'));
orderSet.add('Garlic Bread');
orderSet.delete('Rissoto');
orderSet.clear();

const staff = ['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest.set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Oraganic'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open :)')
.set(false, 'We are closed: (');

console.log(rest.get('name'));
// console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
rest.clear();
console.log(rest);

const arr = [1,2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

