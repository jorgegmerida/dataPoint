export const useGetFetcher = () => {
  const fetcher = async () => {
    const response = await fetch("/api/dataCustomers");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };
  return fetcher;
};
