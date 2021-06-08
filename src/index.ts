import { MatchReader } from './MatchReader';
import { MatchResults } from './MatchResult';

const reader = new MatchReader('football.csv');
reader.read();

console.log(reader.data)

let manUnitedWins = 0;
for (const match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResults.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResults.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} matches.`)

enum Direction {
  Up,
  Down,
  Left,
  Right,
}
console.log('enum.up: ', Direction.Up);