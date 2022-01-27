import { IShoppingOrderState } from './ishoppingOrderState';
import { ShoppingOrder } from './shoppingOrder';
import { OrderPending } from './orderPending';
import { OrderRejected } from './orderRejected';

export class OrderApproved implements IShoppingOrderState {
    private name = 'OrderApproved';

    constructor(private order: ShoppingOrder) { }

    getName(): string {
        return this.name;
    }

    approvePayment(): void {
        console.log('O pedido já está no estado pagamento aprovado.');
    }

    rejectPayment(): void {
        this.order.setState(new OrderRejected(this.order));
    }

    waitPayment(): void {
        this.order.setState(new OrderPending(this.order));
    }

    shipOrder(): void {
        console.log('Enviando pedido para o cliente...');
    }
}