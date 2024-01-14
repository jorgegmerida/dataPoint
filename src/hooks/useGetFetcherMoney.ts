export const useGetFetcherMoney = () => {
  const fetcherMoney = async () => {
    const response = await fetch("/api/dataMoney");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };
  return fetcherMoney;
};
