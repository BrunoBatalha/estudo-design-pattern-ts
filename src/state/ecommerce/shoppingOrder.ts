import { IShoppingOrderState } from './ishoppingOrderState';
import { OrderPending } from './orderPending';

export class ShoppingOrder {
    private state: IShoppingOrderState = new OrderPending(this);

    getState(): IShoppingOrderState {
        return this.state;
    }

    setState(state: IShoppingOrderState): void {
        this.state = state;
        console.log(`O estado do pedido agora é ${this.getStateName()}`);
    }

    getStateName(): string {
        return this.state.getName();
    }

    approvePayment(): void {
        this.state.approvePayment();
    }

    rejectPayment(): void {
        this.state.rejectPayment();
    }

    waitPayment(): void {
        this.state.waitPayment();
    }

    shipOrder(): void {
        // if (order.paymentState === 'Approved') {
        //     doSomething();
        //   } else if (order.paymentState === 'Pending') {
        //     doAnotherThing();
        //   } else if (order.paymentState === 'Rejected') {
        //     doAnotherThing();
        //   }
        this.state.shipOrder();
    }
}