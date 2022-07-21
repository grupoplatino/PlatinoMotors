import './App.css';
import {HashRouter } from "react-router-dom";
import Layout from './config/theme/layout';
import Pages from './routes/routes';
import { WhitSplashScreen } from './components';


function App() {
  return (
    <HashRouter>
        <Layout>
             <Pages/>
        </Layout>
    </HashRouter>
  );
}

export default WhitSplashScreen(App);
