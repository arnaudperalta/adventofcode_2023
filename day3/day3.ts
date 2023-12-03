import { option  } from "fp-ts";
import { Option } from "fp-ts/lib/Option";
import { readFileSync } from "fs";

export function day3() {
  const data: string = readFileSync("day3/full", 'utf-8');
  const lines: string[] = data.split('\n');

  let sum = 0;
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[0].length; j++) {
      if (/[^0-9.]/.test(lines[i][j])) {
        if (i > 0 && j > 0 && /\d/.test(lines[i - 1][j - 1])) {
          // top left
          sum += parseNumberOnPosition(lines, i - 1, j - 1)
        }
        if (i < lines.length - 1 && j > 0 && /\d/.test(lines[i + 1][j - 1])) {
          // // bottom left
          sum += parseNumberOnPosition(lines, i + 1, j - 1)
        }
        if ((i < lines.length - 1 && /\d/.test(lines[i + 1][j])) && !(i < lines.length - 1 && j > 0 && /\d/.test(lines[i + 1][j - 1]))) {
          // bottom
          sum += parseNumberOnPosition(lines, i + 1, j)
        }
        if ((i > 0 && /\d/.test(lines[i - 1][j])) && !(i > 0 && j > 0 && /\d/.test(lines[i - 1][j - 1]))) {
          // top
          sum += parseNumberOnPosition(lines, i - 1, j)
        }
        if (j > 0 && /\d/.test(lines[i][j - 1])) {
          // left
          sum += parseNumberOnPosition(lines, i, j - 1)
        }
        if ((i < lines.length - 1 && j < lines[0].length - 1 && /\d/.test(lines[i + 1][j + 1])) && !(i < lines.length - 1 && /\d/.test(lines[i + 1][j]))) {
          // bottom right
          sum += parseNumberOnPosition(lines, i + 1, j + 1)
        }
        if (j < lines[0].length - 1 && /\d/.test(lines[i][j + 1])) {
          // right
          sum += parseNumberOnPosition(lines, i, j + 1)
        }
        if (i > 0 && j < lines[0].length - 1 && /\d/.test(lines[i - 1][j + 1]) && !(i > 0 && /\d/.test(lines[i - 1][j]))) {
          // top right
          sum += parseNumberOnPosition(lines, i - 1, j + 1)
        }
      }
    }
  }
  console.log(sum);

  sum = 0;
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[0].length; j++) {
      if (/[*]/.test(lines[i][j])) {
        let numberRead = 0;
        let potentialGearRatio = 1;
        if (i > 0 && j > 0 && /\d/.test(lines[i - 1][j - 1])) {
          // top left
          potentialGearRatio *= parseNumberOnPosition(lines, i - 1, j - 1)
          numberRead++
        }
        if (i < lines.length - 1 && j > 0 && /\d/.test(lines[i + 1][j - 1])) {
          // // bottom left
          potentialGearRatio *= parseNumberOnPosition(lines, i + 1, j - 1)
          numberRead++
        }
        if ((i < lines.length - 1 && /\d/.test(lines[i + 1][j])) && !(i < lines.length - 1 && j > 0 && /\d/.test(lines[i + 1][j - 1]))) {
          // bottom
          potentialGearRatio *= parseNumberOnPosition(lines, i + 1, j)
          numberRead++
        }
        if ((i > 0 && /\d/.test(lines[i - 1][j])) && !(i > 0 && j > 0 && /\d/.test(lines[i - 1][j - 1]))) {
          // top
          potentialGearRatio *= parseNumberOnPosition(lines, i - 1, j)
          numberRead++
        }
        if (j > 0 && /\d/.test(lines[i][j - 1])) {
          // left
          potentialGearRatio *= parseNumberOnPosition(lines, i, j - 1)
          numberRead++
        }
        if ((i < lines.length - 1 && j < lines[0].length - 1 && /\d/.test(lines[i + 1][j + 1])) && !(i < lines.length - 1 && /\d/.test(lines[i + 1][j]))) {
          // bottom right
          potentialGearRatio *= parseNumberOnPosition(lines, i + 1, j + 1)
          numberRead++
        }
        if (j < lines[0].length - 1 && /\d/.test(lines[i][j + 1])) {
          // right
          potentialGearRatio *= parseNumberOnPosition(lines, i, j + 1)
          numberRead++
        }
        if (i > 0 && j < lines[0].length - 1 && /\d/.test(lines[i - 1][j + 1]) && !(i > 0 && /\d/.test(lines[i - 1][j]))) {
          // top right
          potentialGearRatio *= parseNumberOnPosition(lines, i - 1, j + 1)
          numberRead++
        }
        if (numberRead === 2) {
          sum += potentialGearRatio;
        }
      }
    }
  }
  console.log(sum);
}

function parseNumberOnPosition(lines: string[], x: number, y: number): number {
  for (let i = y; i >= 0; i--) {
    if (!/\d/.test(lines[x][i]) || i == 0) {
      return parseInt(/\d+/.exec(lines[x].substring(i))![0]);
    }
  }
  return 0
}