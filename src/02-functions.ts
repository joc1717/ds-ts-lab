import {Friend, Colleague} from './myTypes'
import { friends, colleagues } from './01-basics'

function older(f: Friend) : string{
    f.age += 1
    return `${f.name} is now ${f.age}`
}

function allOlder(fs: Friend[]) : string[]{
    const newage: string[] = []

    fs.forEach(function (friend){
        friend.age += 1
        newage.push(`${friend.name} is now ${friend.age}`)
    })

    return newage
}

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }

function addColleague(cs: Colleague[], name: string, department: string, email: string) : Colleague{
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

//console.log(older(friends[0]))
//console.log(allOlder(friends))
//console.log(highestExtension(colleagues.current))

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));