import { day1 } from "./day1/day1";
import { day2 } from "./day2/day2";
import { day3 } from "./day3/day3";

const dayNumber: number = parseInt(process.argv.at(-1) ?? "1")

switch (dayNumber) {
  case 1:
    day1()
  case 2:
    day2()
  case 3:
    day3()
}