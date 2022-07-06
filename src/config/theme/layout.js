import { Footer, NavBar } from "../../components";

function Layout({children}) {
    return (
        <div className='h-screen'>
        <NavBar/>
         {children}
        <Footer/>
        </div>
    );
}

export default Layout;