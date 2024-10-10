import { Route, Routes } from 'react-router-dom';
import Home from './pages/Index';
import NotFound from './pages/404';
import Header from './components/organism/Header';

function App() {
  return (
    <>
      {/* 공통 컴포넌트 */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
