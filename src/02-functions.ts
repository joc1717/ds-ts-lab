import {Friend, Colleague, EmailContact, } from './myTypes'
import { friends, colleagues } from './01-basics'

function older(f: Friend) {
    f.age += 1
    return `${f.name} is now ${f.age}`
}

function allOlder(fs: Friend[]){
    const newage: string[] = []

    fs.forEach(function (friend){
        friend.age += 1
        newage.push(`${friend.name} is now ${friend.age}`)
    })

    return newage
}

function findFriends(
    friends: Friend[],
    filter: (f1: Friend) =>  boolean) {
    const sorted = friends.filter(filter)
    const result = sorted.map((f) => (f.name))
    return result
  }

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }

//Add new colleague
function addColleague(cs: Colleague[], name: string, department: string, email: string) {
    const newExtension: number = 1 + highestExtension(cs).contact.extension
    const newColleague: Colleague = {
        name: name,
        department: department,
        contact: {
            email: email,
            extension: newExtension,
        },
    }

    cs.push(newColleague)
    return newColleague
}
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
  ): EmailContact[] {
    const sorted = colleagues.sort(sorter); // Colleague[] inferred
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result 
  }

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));
  
  //console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
  //console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

//console.log(older(friends[0]))
//console.log(allOlder(friends))
//console.log(highestExtension(colleagues.current))
//console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));