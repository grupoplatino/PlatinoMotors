import './App.css';
import {BrowserRouter } from "react-router-dom";
import Layout from './config/theme/layout';
import Pages from './routes/routes';
function App() {
  return (
    <BrowserRouter>
        <Layout>
            <Pages/>
        </Layout>
    </BrowserRouter>
  );
}
export default App;
