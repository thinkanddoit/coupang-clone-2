import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

function ReactQueryProvider({ children, dehydratedState }: any) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
