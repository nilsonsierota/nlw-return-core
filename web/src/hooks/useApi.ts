import { useEffect, useState } from "react";
import { api } from "../lib/api";

export function useApi<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null);

  const [isFetching, setIsFetching] = useState(true);

  async function handleFeedbacks() {
    await api
      .get<T>(url)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error))
      .finally(() => setIsFetching(false));
  }

  useEffect(() => {
    handleFeedbacks();
  }, []);

  return { data, isFetching };
}
