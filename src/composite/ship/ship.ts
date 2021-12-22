// referência ao parent
// quebra o ISP (interface segregation principle)

export abstract class Bullet_Component {
    protected _parentBullet: Bullet_Component | null = null;
    abstract color: string;
    abstract shoot(): void;

    constructor(protected parentBullet: Bullet_Component | null) {
        this._parentBullet = parentBullet;
    }
}

// leaf
class BulletMini_Leaf extends Bullet_Component {
    constructor(public color: string, parentBullet: Bullet_Component) {
        super(parentBullet);
    }

    shoot(): void {
        console.log(`(${this.color}) Tiro secundario saiu, meu pai é ${this._parentBullet?.color}`);
    }
}

// body
class BulletMain_Composite extends Bullet_Component {
    private childs: Bullet_Component[] = [];

    constructor(public color: string, protected parentBullet: Bullet_Component | null) {
        super(parentBullet);
    }

    addChild(child: Bullet_Component) {
        this.childs.push(child);
    }

    shoot(): void {
        console.log(`[${this.color}] Tiro principal saiu`)
        this.childs.forEach(child => child.shoot());
    }
}

class Ship_Client {
    private bulletMain: BulletMain_Composite = new BulletMain_Composite("Azul", null);

    constructor() {
        this.bulletMain.addChild(new BulletMini_Leaf("Amarelo", this.bulletMain));
    }

    loadBulletsYellow(): void {
        this.bulletMain.addChild(new BulletMini_Leaf("Amarelo", this.bulletMain));
    }

    loadBulletsGreen(): void {
        this.bulletMain.addChild(new BulletMini_Leaf("Verde", this.bulletMain));
    }

    shoot(): void {
        this.bulletMain.shoot();
    }
}

const ship = new Ship_Client();
ship.shoot()