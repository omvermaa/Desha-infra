import { QueryClient, type QueryKey } from "@tanstack/react-query";

async function defaultQueryFn({ queryKey }: { queryKey: QueryKey }) {
  const res = await fetch(queryKey[0] as string);
  if (!res.ok) {
    throw new Error(`${res.status}: ${res.statusText}`);
  }
  return res.json();
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});