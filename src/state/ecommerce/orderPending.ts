import { IShoppingOrderState } from './ishoppingOrderState';
import { ShoppingOrder } from './shoppingOrder';
import { OrderRejected } from './orderRejected';
import { OrderApproved } from './orderApproved';

export class OrderPending implements IShoppingOrderState {
    private name = 'OrderPending';

    constructor(private order: ShoppingOrder) { }

    getName(): string {
        return this.name;
    }

    approvePayment(): void {
        this.order.setState(new OrderApproved(this.order));
    }

    rejectPayment(): void {
        this.order.setState(new OrderRejected(this.order));
    }

    waitPayment(): void {
        console.log('O pedido já está no estado pagamento pendente.');
    }

    shipOrder(): void {
        console.log('Não posso enviar o pedido com pagamento pendente.');
    }
}