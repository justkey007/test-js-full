export interface Message {
  message: string;
}

export interface IOrder {
  id: string;
  amount: number;
  orderTime: string;
  customer: string;
}

export type Turnovers = Record<string, number>;
