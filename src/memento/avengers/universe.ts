import { IronManCaretaker } from "./ironManCaretaker";
import { UniverseOriginator } from "./universeOriginator";

const universeOriginator = new UniverseOriginator();
const ironMan = new IronManCaretaker(universeOriginator);

universeOriginator.addPerson('Bruno');
ironMan.backup("Só o bruno");


console.log();
universeOriginator.listPersons();
console.log();

universeOriginator.addPerson('Battle');
ironMan.backup("Bruno e Battle");

console.log();
universeOriginator.listPersons();
console.log();

universeOriginator.thanosSnapFingers();


console.log();
universeOriginator.listPersons();
console.log();

console.log();
ironMan.snapYourFingers();


console.log();
universeOriginator.listPersons();