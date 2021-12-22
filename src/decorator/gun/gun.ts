// quanto mais decorators, mais complexo
// composição é melhor do herança na maioria dos casos
// facil adiciona/remover comportamento de objetos sem tocar em codigo já escrito, possui OCP (open closed principle)
// skin e tiro personalizado
// decorator das linguagens como seria

abstract class GunAbstract_Component {
    abstract name: string;
    abstract shoot(): void;
    abstract getDamage(): number;
}

class DesertEagle_Component extends GunAbstract_Component {
    name: string = "DesertEagle";
    shoot(): void {
        console.log(`[${this.name}] acertou um Headshot e causou ${this.getDamage()} de dano.`)
    }
    getDamage(): number {
        return 10
    }
}

class Awp_Component extends GunAbstract_Component {   
    name: string = "AWP";
    shoot(): void {
        console.log(`[${this.name}] acertou um Headshot e causou ${this.getDamage()} de dano.`)
    }

    getDamage(): number {
        return 50;
    }
}

class GunSkinBeautiful_Decorator extends GunAbstract_Component {
    constructor(protected _gunRef: GunAbstract_Component, public name:string) {
        super();
    }

    shoot(): void {
        console.log(`[${this.name}] acertou um Headshot e causou ${this.getDamage()} de dano.`)
    }

    getDamage(): number {
        return this._gunRef.getDamage() * 10;
    }
}

class GunSkinUgly_Decorator extends GunAbstract_Component {
    constructor(protected _gunRef: GunAbstract_Component, public name:string) {
        super();
    }

    shoot(): void {
        console.log(`[${this.name}] acertou um Headshot e causou ${this.getDamage()} de dano.`)
    }

    getDamage(): number {
        return this._gunRef.getDamage() / 5;
    }
}

class GunHeadShotCustom_Decorator extends GunAbstract_Component {
    constructor(protected _gunRef: GunAbstract_Component, public name:string) {
        super();
    }

    shoot(): void {
        console.log(`[${this.name}] acertou um Headshot e causou ${this.getDamage()} de dano.`)
    }

    getDamage(): number {
        return this._gunRef.getDamage() * 100;
    }
}

const desertEagle = new DesertEagle_Component();
const awp = new Awp_Component();
desertEagle.shoot();
awp.shoot();

console.log('\n\n-------------\nAdiciona skins\n-------------')
const desertEagleWithSkinBeautiful = new GunSkinBeautiful_Decorator(desertEagle, `${desertEagle.name} de skin top`);
const awpWithSkinUgly = new GunSkinUgly_Decorator(desertEagle,`${awp.name} de skin feia`);
desertEagleWithSkinBeautiful.shoot();
awpWithSkinUgly.shoot();


console.log('\n\n-------------\nAdiciona headshot personalizado\n-------------')
const awpWithSkinUglyAndCustomShoot = new GunHeadShotCustom_Decorator(awpWithSkinUgly,`${awp.name} de skin feia, porém headshot personalizado`);
awpWithSkinUglyAndCustomShoot.shoot()