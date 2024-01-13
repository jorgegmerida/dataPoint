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
    dataLayer: any;
  }
}
