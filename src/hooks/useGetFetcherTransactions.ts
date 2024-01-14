export const useGetFetcherTransactions = () => {
  const fetcherTransactions = async () => {
    const response = await fetch("/api/dataTransactions");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };
  return fetcherTransactions;
};
