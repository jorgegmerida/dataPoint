import { create } from "zustand";

interface IDashboards {
  Dashboards: {
    Customers: boolean;
    Pulso: boolean;
  };
  setDashboard: (Dashboards: { Customers: boolean; Pulso: boolean }) => any;
}

export const useSelectDashboards = create<IDashboards>((set, get) => ({
  Dashboards: {
    Customers: false,
    Pulso: false,
  },
  setDashboard: (dashboard) => {
    set((state) => ({
      ...state,
      Dashboards: dashboard,
    }));
  },
}));
