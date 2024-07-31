import { ErrorBoundary } from "@react-gufo-mf/style-guide-ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import NavigationRoutes from "./routes/NavigationRoutes";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";

export default function Root(props) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
        retry: 1,
        retryDelay: (attempt) => attempt * 1000,
      },
    },
  });

  return (
    <Suspense fallback={<span>Cargando..</span>}>
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          {/* <NavigationRoutes /> */}
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
