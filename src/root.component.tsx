import {
  ErrorBoundary,
  IntlGlobalProvider,
  useTranslations,
} from "@react-gufo-mf/style-guide-ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import NavigationRoutes from "./routes/NavigationRoutes";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import { registerLicense } from "@syncfusion/ej2-base";
import { messages } from "./i18n/locales";

export default function Root(props) {
  const { language } = useTranslations();
  registerLicense(process.env.SYNCFUSION_LICENSE_KEY);

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
        <IntlGlobalProvider locale={language} messages={messages[language]}>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Home />
            </BrowserRouter>
          </QueryClientProvider>
        </IntlGlobalProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
