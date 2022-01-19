// o mediator deve conhecer todos os envolvidos
// pode receber os envolvidos pelo construtor

import { PersonTensioned } from "./personTensioned";

export class FacilitatorMediator {
    private personTensioneds: PersonTensioned[] = [];

    addPersonTensioned(...personTensioneds: PersonTensioned[]) {
        this.personTensioneds = [...this.personTensioneds, ...personTensioneds];
    }

    processTension(tensionTwoWords: string): Tension | void {
        let tension: Tension | undefined | void;

        for (let index = 0; index < this.personTensioneds.length; index++) {
            tension = this.personTensioneds[index].resolveTension(tensionTwoWords);
            if (tension) {
                console.log('Tensão a ser processada: ', tension.tensionTwoWords);
                console.log('Driver: ', tension.driver);
                console.log('Proposta: ', tension.proposal, '\n');
                return;
            }
        }
        console.log('Não foi encontrado a tensão: ', tensionTwoWords);
    }

    asksTheSecretaryToShowTensions(): void {
        this.personTensioneds.forEach(personTensioned => {
            personTensioned.sayTensions();
        });
    }
}