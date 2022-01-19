import { IMemento } from "./imemento";
import { Memento } from "./memento";

export class UniverseOriginator {

    private personNames: string[] = [];

    addPerson(personName: string): void {
        this.personNames.push(personName);
    }

    listPersons(): void {
        console.log("Pessoas: ");
        this.personNames.forEach(personName => console.log(personName));
    }

    saveState(nameState: string): Readonly<IMemento> {
        return new Memento(nameState, this.personNames);
    }

    restore(imemento: IMemento): void {
        const memento = imemento as Memento;
        this.personNames = memento.getPersonNames();
    }

    thanosSnapFingers(): void {
        this.personNames = [];
    }
}