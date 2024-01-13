export const useWindowDataLayer = () => {
  const windowDataLayer = (eventBody: any) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventBody);
  };

  return windowDataLayer;
};
