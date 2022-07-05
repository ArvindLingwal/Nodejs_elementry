const airline = 'Tap Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B727'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat){
    const s = seat.slice(-1);
    if(s == 'B' || s == 'E')
    console.log('You got the middle seat!!');
    else console.log('You got lucky!!');

}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
console.log(typeof new String('jonas'));
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'arvind'; //Arvind
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase()+passengerLower.slice(1);
console.log(passengerCorrect);

//compare  email
const email = 'hello@arv.io';
const loginEmail = ' Hello@Arv.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEamil = lowerEmail.trim();
console.log(trimmedEamil);
console.log(trimmedEamil === email);

const priceGB = '288,97';
const priceUS = priceGB.replace('2', '3').replace(',', '.');
console.log(priceUS);

//Boolean

const plan = 'Airbus A320neo';
console.log(plan.includes('A32'));
console.log(plan.includes('Boe'));
console.log(plan.startsWith('A'));
console.log(plan.endsWith('eo'));

if(plan.startsWith('Airbus') && plan.endsWith('neo')){
    console.log('Part of the NEW Airbus family.');
}

/* 
1. Write a program that receives a list of variable names written in underscore_case 
and convert them to camelCase.

2. The input will come from a textarea inserted into the DOM (see code below), 
and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable
 name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case
 you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/
const camelcase = function(item){
    const rows = item.split(' ');
    console.log(rows);
    for(const row of rows){
        const[first,second] = row.toLowerCase().trim().split('_');
        // console.log(row, first, second)
        const output = `${first}${second.replace(
            second[0],
            second[0].toUpperCase()
            )}`;  
        console.log(output);
    }
};
const str = 'underscore_case first_name Some_Variable calculate_AGE delayed_departure';
camelcase(str);

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const arr = flights.split('+');
console.log(arr);
const getCode = str => str.slice(0,3).toUpperCase();
for(const flight of flights.split('+')){
    const [type, from, to, time]=flight.split(';');
    // const output = `${type.replaceAll('_',' ')} from ${from.slice(0,3).toUpperCase()} to ${to.toUpperCase().slice(0,3)} (${time.replace(':','h')})`;
    const output = `${type.startsWith('_Delayed') ? '--' : ''}${type.replaceAll('_',' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':','h')})`.padStart(43);
    console.log(output);
}