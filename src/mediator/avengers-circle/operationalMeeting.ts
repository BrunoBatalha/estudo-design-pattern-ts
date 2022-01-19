import { FacilitatorMediator } from "./facilitatorMediator";
import { OtherPerson } from "./otherPerson";
import { PersonTensioned } from "./personTensioned";

const facilitator = new FacilitatorMediator();

const DrStranger = new PersonTensioned();
const Thor = new PersonTensioned();

DrStranger.addTension({
    tensionTwoWords: "Thanos",
    driver: "Thanos fez sumir metade do universo",
    proposal: "Capturar a manopla de thanos"
});
DrStranger.addTension({
    tensionTwoWords: "Outras dimensôes",
    driver: "Vilôes de outros universos estão aqui",
    proposal: "Capturar e enviar todos para seus universos"
});

Thor.addTension({
    tensionTwoWords: "Martelo",
    driver: "Perdi o martelo",
    proposal: "Encontrar outro"
});

facilitator.addPersonTensioned(Thor, DrStranger);

const IronMan = new OtherPerson(facilitator);

IronMan.readTensions();
IronMan.talkAboutTension("Martelo");


IronMan.readTensions();