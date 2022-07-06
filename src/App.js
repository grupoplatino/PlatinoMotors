import './App.css';
import {  HashRouter as Router } from "react-router-dom";
import Layout from './config/theme/layout';
import Pages from './routes/routes';
function App() {
  return (
    <Router>
        <Layout>
            <Pages/>
        </Layout>
    </Router>
  );
}
export default App;
