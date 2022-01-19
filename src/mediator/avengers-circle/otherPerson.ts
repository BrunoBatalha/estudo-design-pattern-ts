import { FacilitatorMediator } from "./facilitatorMediator";

export class OtherPerson {
    constructor(private facilitatorMediator: FacilitatorMediator) {
    }

    readTensions(): void {
        this.facilitatorMediator.asksTheSecretaryToShowTensions();
    }

    talkAboutTension(tensionTwoWords: string): void {
        this.facilitatorMediator.processTension(tensionTwoWords);
    }
}