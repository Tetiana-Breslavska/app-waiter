import { Routes, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound/NotFound.js';
import Home from './components/pages/Home/Home.js';
import Table from './components/pages/Table/Table.js';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header'
import Footer from './components/views/Footer/Footer'

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<Table />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      <Footer />


        

    </Container>
  );
}

export default App;
