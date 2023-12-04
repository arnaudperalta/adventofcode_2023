import { readFileSync } from "fs";

export function day4() {
  const data: string = readFileSync("day4/full", 'utf-8');
  const lines: string[] = data.split('\n');

  console.log(lines.map(getPoints).reduce((acc, val) => acc + val, 0))

  const cardArray: string[] = lines.map(line => line.split(":")[1])

  const thingsToDo: number[] = cardArray.map((_, index) => index)
  let result = 0;

  while (thingsToDo.length) {
    const game = cardArray[thingsToDo.at(-1)!]!;
    const gameNumber = thingsToDo.at(-1)!
    const score = getPointsFromType(game!)
    thingsToDo.pop()
    for (let i = 1; i <= score; i++) {
      thingsToDo.push(gameNumber + i)
    }
    result++;
  }
  console.log(result)
}

function getPoints(line: string): number {
  const winningNumbers = line.split(": ")[1].split(" | ")[0].split(" ").filter(number => number !== "")
  const numbers = line.split(" | ")[1].split(" ").filter(number => number !== "")
  const matchCount = winningNumbers.filter(winningNumber => numbers.includes(winningNumber)).length
  return matchCount === 0 || matchCount === 1 ? matchCount : Math.pow(2, matchCount - 1)
}

function getPointsFromType(line: string): number {
  const winningNumbers = line.split(" | ")[0].split(" ").filter(number => number !== "")
  const numbers = line.split(" | ")[1].split(" ").filter(number => number !== "")
  return winningNumbers.filter(winningNumber => numbers.includes(winningNumber)).length
}
