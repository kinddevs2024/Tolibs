import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout.jsx';
import Home from './Pages/Home/Home.jsx';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;