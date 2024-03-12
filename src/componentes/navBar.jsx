import Bebida from "./Bebidas";
import Comida from "./Comida";
import CartWidget from "./CartWidget";
import Nosotros from "./Nosotros";
import Productos from "./Productos";

const NavBar = () => {
    return (
        <div >
            <>
                <ul className="container" >
                <li><h2>TIENDA</h2></li>    
                <li><a href="#" ><Productos /></a></li>
                <li><a href="#" ><Comida /></a></li>
                <li><a href="#" ><Bebida /></a></li>
                <li><a href="#" ><Nosotros /></a></li>
                <li><a href="#" className="cart"><CartWidget /></a></li>
                </ul>
            </>
            
            
            
            
            
        </div>
    )
    
}

export default NavBar;