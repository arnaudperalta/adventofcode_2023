import { option  } from "fp-ts";
import { Option } from "fp-ts/lib/Option";
import { readFileSync } from "fs";

export function day2() {
  const data: string = readFileSync("day2/full", 'utf-8');
  const lines: string[] = data.split('\n');

  console.log(lines
    .map(isGameImpossible)
    .reduce((acc, val) => acc + option.fold<number, number>(
      () => 0,
      (optionValue) => optionValue
    )(val), 0)
  )

  console.log(lines.map(getPowerOfGame).reduce((acc, val) => acc + val , 0));
}

function isGameImpossible(line: string): Option<number> {
  const gameID = parseInt(line.split("Game ")[1].split(":")[0]);
  const gameDetails = line.split(":")[1];
  for (let i = 0; i < gameDetails.length; i++) {
    const cubeValue = parseInt(gameDetails.substring(i).split(" ")[0])
    if (/\d/.test(gameDetails[i])) {
      if (
        gameDetails.substring(i).split(" ")[1][0] == "b" && cubeValue > 14 ||
        gameDetails.substring(i).split(" ")[1][0] == "r" && cubeValue > 12 ||
        gameDetails.substring(i).split(" ")[1][0] == "g" && cubeValue > 13
      ) {
        return option.none;
      } 
    }
  }
  return option.some(gameID);
}

function getPowerOfGame(line: string): number {
  const gameDetails = line.split(":")[1];
  let maxRed = 0;
  let maxBlue = 0;
  let maxGreen = 0;
  for (let i = 0; i < gameDetails.length; i++) {
    const cubeValue = parseInt(gameDetails.substring(i).split(" ")[0]);
    if (/\d/.test(gameDetails[i])) {
      if (gameDetails.substring(i).split(" ")[1][0] == "b" && cubeValue > maxBlue) {
        maxBlue = cubeValue;
      }
      if (gameDetails.substring(i).split(" ")[1][0] == "r" && cubeValue > maxRed) {
        maxRed = cubeValue;
      }
      if (gameDetails.substring(i).split(" ")[1][0] == "g" && cubeValue > maxGreen) {
        maxGreen = cubeValue;
      }
    }
  }

  return maxBlue * maxRed * maxGreen;
}