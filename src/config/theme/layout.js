import Foother from '../../components/foother';
import Navbar from '../../components/nav-bar';
function Layout({children}) {
    return (
        <div className='h-screen'>
        <Navbar/>
         {children}
        <Foother/>
        </div>
    );
}

export default Layout;