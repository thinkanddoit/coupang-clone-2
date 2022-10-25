import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

function ReactQueryProvider({ children, dehydratedState }: any) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 300000, // 5 minutes
            cacheTime: 900000, // 15 minutes
            retry: false,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
