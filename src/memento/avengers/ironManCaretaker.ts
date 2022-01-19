import { IMemento } from "./imemento";
import { UniverseOriginator } from "./universeOriginator";

// ManagerBackup
export class IronManCaretaker {
    private mementos: IMemento[] = [];

    constructor(private universeOriginator: UniverseOriginator) { }

    backup(nameStateUniverse: string): void {
        console.log('Estado do universo salvo');
        this.mementos.push(this.universeOriginator.saveState(nameStateUniverse));
    }

    // undo
    snapYourFingers(): void {
        const memento = this.mementos.pop();
        if (!memento) {
            console.log('Não tem estado salvo, não possui todas as joias');
            return;
        }

        this.universeOriginator.restore(memento);
        console.log('Eu sou o Homem de Ferro! (estala os dedos), universo ', memento.getName(), ' restaurado');
    }

    showMementos(): void {
        this.mementos.forEach(memento => console.log(memento.getName()));
    }
}