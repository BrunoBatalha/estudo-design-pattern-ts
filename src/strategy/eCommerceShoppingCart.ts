import { ECommerceProductProtocol } from './eCommerceProductProtocol';
import { DiscountStrategy } from './discountStrategy';

export class ECommerceShoppingCart {
    private products: ECommerceProductProtocol[] = [];
    private _discountStrategy: DiscountStrategy = new DiscountStrategy();

    addProduct(...products: ECommerceProductProtocol[]): void {
        products.forEach((product) => this.products.push(product));
    }

    getProducts(): ECommerceProductProtocol[] {
        return this.products;
    }

    getTotal(): number {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }

    getTotalWithDiscount(): number {
        // Promoção antiga
        // if (cart.quantity > 3) {
        //   if (cart.total >= 100 && cart.total < 200) {
        //     cart.discount = 10; // 10%
        //   } else if (cart.total >= 200 && cart.total < 300) {
        //     cart.discount = 20; // 20%
        //   } else if (cart.total >= 300) {
        //     cart.discount = 30; // 30%
        //   }
        // }

        // // Nova promoção
        // if (cart.total >= 150) {
        //     cart.discount = 5; // 5%
        //   }
        return this._discountStrategy.getDiscount(this);
    }

    set discount(discount: DiscountStrategy) {
        this._discountStrategy = discount;
    }
}