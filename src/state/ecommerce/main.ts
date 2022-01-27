// intenção 
// Permite que um objeto altere seu 
// comportamento quando seu estado interno muda. 
// cuidado: O objeto parecerá ter mudado sua classe
// se você tem apenas poucas condicionais simples, aplicar 
// este padrão pode deixar o seu código mais complexo do que o necessário
/**
use quando:

o seu objeto pode se comportar de maneira diferente dependendo do seu estado atual
você quer evitar o uso de condicionais que alteram o comportamento da classe de acordo com valores dos seus campos
 */
import { ShoppingOrder } from './shoppingOrder';

const order = new ShoppingOrder(); // Pendente
order.approvePayment(); // Aprovado
order.waitPayment(); // Pendente
order.shipOrder();
// order.rejectPayment(); // Daqui não altera mais o estado
// order.approvePayment(); // n
// order.waitPayment(); // n
// order.approvePayment(); // n
// order.shipOrder(); // n