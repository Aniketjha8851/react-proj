import"./App.css";
import Herosection from "./compnents/hero";
const App = () => {
    return(

        <div>
       <nav className="container">
        <div className="logo">

        <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>
        <button>login</button>
       </nav>
       <Herosection/>
        </div>
    )
}
export default App;