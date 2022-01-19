export class PersonTensioned {
    private tensions: Tension[] = [];

    sayTensions(): void {
        this.tensions.forEach((tension) => {
            console.log("driver: ", tension.driver);
            console.log("proposta: ", tension.proposal, '\n');
        });
    }

    addTension(...tensions: Tension[]): void {
        this.tensions = [...this.tensions, ...tensions];
    }

    resolveTension(tensionTwoWords: string): void | Tension {
        const tensionIndex = this.tensions.findIndex(tension => tension.tensionTwoWords === tensionTwoWords);
        if (tensionIndex == -1) return;

        const tension = this.tensions.splice(tensionIndex, 1);
        return tension[0];
    }
}