import { IMemento } from "./imemento";

export class Memento implements IMemento {
    constructor(private name: string, private personNames: string[]) { }

    getName(): string {
        return this.name;
    }
    getPersonNames(): string[] {
        return this.personNames;
    }
}