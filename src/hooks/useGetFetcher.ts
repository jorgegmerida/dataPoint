export const useGetFetcher = () => {
  const fetcher = async (args: string) => {
    const response = await fetch(args);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };
  return fetcher;
};
