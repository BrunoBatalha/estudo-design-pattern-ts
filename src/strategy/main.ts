//  família de algoritmos que implementam a mesma interface 
/**
use quando
você tiver variantes de um mesmo algoritmo e precisa trocar esses algoritmos em tempo de execução;
você precisar isolar a regra de negócio do algoritmo que deve ser aplicado (aplicando o princípio da responsabilidade única)
você perceber que está usando condicionais apenas para trocar o resultado final de um algoritmo
 */

import { DefaultDiscount } from "./defaultDiscount";
import { ECommerceShoppingCart } from "./eCommerceShoppingCart";
import { NewDiscount } from "./newDiscount";

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discount = new DefaultDiscount();
shoppingCart.discount = new NewDiscount();
shoppingCart.addProduct({ name: 'Produto 1', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());