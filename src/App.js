import './App.css';
import {HashRouter } from "react-router-dom";
import Layout from './config/theme/layout';
import Pages from './routes/routes';

function App() {
  return (
    <HashRouter>
        <Layout>
             <Pages/>
        </Layout>
    </HashRouter>
  );
}
export default App;
