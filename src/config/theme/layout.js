import { Foother, NavBar } from "../../components";

function Layout({children}) {
    return (
        <div className='h-screen'>
        <NavBar/>
         {children}
        <Foother/>
        </div>
    );
}

export default Layout;