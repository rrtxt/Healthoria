import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuestPage from "./pages/QuestPage";
import VoucherPage from "./pages/VoucherPage";
import TitlePage from "./pages/TItlePage";

const router = createBrowserRouter([
  { path: "/", element: <TitlePage /> },
  { path: "/quest", element: <QuestPage /> },
  { path: "/voucher", element: <VoucherPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
