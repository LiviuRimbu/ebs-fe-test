import AppRoutes from "./routes/AppRoutes";
import {CartProvider} from "./context/CartContext.tsx"

function App() {
  return (
    <div className="flex flex-col items-center">
        <CartProvider>
            <AppRoutes />
        </CartProvider>
    </div>
  );
}

export default App;
