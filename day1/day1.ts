import { readFileSync } from "fs";

export function day1() {
  const data: string = readFileSync("day1/full", 'utf-8');
  const lines: string[] = data.split('\n');

  console.log(lines.map(valueOfLine).reduce((acc, val) => acc + val, 0))
}

function valueOfLine(line: string): number {
  return parseInt(firstDigitOfLine(line) + lastDigitOfLine(line))
}

function firstDigitOfLine(line: string): string {
  for (let i = 0; i < line.length; i++) {
    if (/^([1-9]|one|two|three|four|five|six|seven|eight|nine)/.test(line.substring(i))) {
      console.log(line.substring(i))
      if (line.substring(i).startsWith("one"))
        return "1"
      if (line.substring(i).startsWith("two"))
        return "2"
      if (line.substring(i).startsWith("three"))
        return "3"
      if (line.substring(i).startsWith("four"))
        return "4"
      if (line.substring(i).startsWith("five"))
        return "5"
      if (line.substring(i).startsWith("six"))
        return "6"
      if (line.substring(i).startsWith("seven"))
        return "7"
      if (line.substring(i).startsWith("eight"))
        return "8"
      if (line.substring(i).startsWith("nine"))
        return "9"
      return line.charAt(i)
    }
  }
  return "";
}

function lastDigitOfLine(line: string): string {
  for (let i = line.length - 1; i >= 0; i--) {
    if (/^([1-9]|one|two|three|four|five|six|seven|eight|nine)/.test(line.substring(i))) {
      if (line.substring(i).startsWith("one"))
        return "1"
      if (line.substring(i).startsWith("two"))
        return "2"
      if (line.substring(i).startsWith("three"))
        return "3"
      if (line.substring(i).startsWith("four"))
        return "4"
      if (line.substring(i).startsWith("five"))
        return "5"
      if (line.substring(i).startsWith("six"))
        return "6"
      if (line.substring(i).startsWith("seven"))
        return "7"
      if (line.substring(i).startsWith("eight"))
        return "8"
      if (line.substring(i).startsWith("nine"))
        return "9"
      return line.charAt(i)
    }
  }
  return "";
}
