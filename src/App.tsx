import Admin from "./components/admin/Admin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Admin />
  </QueryClientProvider>
);
