export {};

export interface evInteraction {
  event: string;
  category: string;
  action: string;
  label: string;
  value: string;
  component: string;
  description: string;
  result?: string;
  destination?: string;
}

declare global {
  interface Window {
    dataLayer: never;
  }
}

export interface ICustomer {
  name: string;
  clientesTotales: number;
  clientesNuevos: number;
  compraron: number;
  noCompraron: number;
}

export interface ICushback {
  column1: [
    {
      name: string;
      cashback: number;
    }
  ];
  column2: [
    {
      name: string;
      cashback: number;
    }
  ];
}

export interface ICashbackDataColumn {
  name: string;
  cashback: number;
}

export interface IMoneyData {
  column1: [
    {
      name: string;
      dinero: number;
    }
  ];
  column2: [
    {
      name: string;
      dinero: number;
    }
  ];
}

export interface ITransactionData {
  days: [
    {
      name: string;
      transaccion: number;
      dinero: number;
    }
  ];
}

export interface ITransactionColumn {
  name: string;
  transaccion: number;
  dinero: number;
}

export interface IMoneyColumn {
  name: string;
  dinero: number;
}

export interface ICustomerData {
  hours: [
    {
      name: string;
      clientesTotales: number;
      clientesNuevos: number;
      compraron: number;
      noCompraron: number;
    }
  ];

  hoursBetween: [
    {
      name: string;
      clientesTotales: number;
      clientesNuevos: number;
      compraron: number;
      noCompraron: number;
    }
  ];
  days: [
    {
      name: string;
      clientesTotales: number;
      clientesNuevos: number;
      compraron: number;
      noCompraron: number;
    }
  ];
  Column1: [
    {
      name: string;
      clientesTotales: number;
      clientesNuevos: number;
      compraron: number;
      noCompraron: number;
    }
  ];
  Column2: [
    {
      name: string;
      clientesTotales: number;
      clientesNuevos: number;
      compraron: number;
      noCompraron: number;
    }
  ];
  Column3: [
    {
      name: string;
      clientesTotales: number;
      clientesNuevos: number;
      compraron: number;
      noCompraron: number;
    }
  ];
}
