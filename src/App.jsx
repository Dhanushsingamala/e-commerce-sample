import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import useUserStore from './store/userStore';
// import HomePage from './pages/Home';
// import ProductPage from './pages/Product';
// import Cart from './pages/Cart';
// import Checkout from './pages/Checkout';

function App() {
  const { isAuthenticated } = useUserStore();

  console.log({ isAuthenticated})

  return (
    <Router>
      <Routes>
        <Route path="/" element={<>Welcome</>} />
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        */}
        {/* <Route
          path="/checkout"
          element={
            isAuthenticated ? <Checkout /> : <Navigate to="/" replace />
          }
        />  */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
