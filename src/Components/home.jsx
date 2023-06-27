import Footer from "./footer";
import Login from "./login";
import Navbar from "./navbar";
import Download from "./download";


const Home = () => {
    return ( 
        <div className="home">
            <Navbar/>
              <Login/>
                <Download/>
                <Footer/>
        </div>
     );
}
 
export default Home;