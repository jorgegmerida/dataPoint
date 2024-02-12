export const useWindowDataLayer = () => {
  const windowDataLayer = (eventBody: any) => {
    (window.dataLayer as any[]) = (window.dataLayer as any[]) || [];
    (window.dataLayer as any[]).push(eventBody);
  };

  return windowDataLayer;
};
