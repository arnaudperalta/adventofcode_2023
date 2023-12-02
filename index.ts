import { day1 } from "./day1/day1";

const dayNumber: number = parseInt(process.argv.at(-1) ?? "1")

switch (dayNumber) {
  case 1:
    day1()
}