import { Link } from 'react-scroll';
import Swal from 'sweetalert2';

function Brands() {
    const handleOutOfStock = (event) => {
        document.body.classList.add('no-scroll');
        Swal.fire({
            title: "Out of stock",
            text: "This item is currently out of stock. Please check back later.",
            icon: "error"
        }).then(() => {
            document.body.classList.remove('no-scroll');
        });
    };

    return (
        <div className="brand-container">
            <div className="popular">
                <p className="popular-title">
                    Popular brands
                </p>
            </div>
            <div className="brandName-container">
                <Link to="rolex-section" smooth={true} duration={500}>
                    <button className="watch-name" id="rolex">Rolex</button>
                </Link>
                <Link to="patek-section" smooth={true} duration={500}>
                    <button className="watch-name" id="patek">Patek Philippe</button>
                </Link>
                <button className="watch-name" onClick={handleOutOfStock}>Audemars Piguet</button>
                <button className="watch-name" onClick={handleOutOfStock}>Panerai</button>
                <button className="watch-name" onClick={handleOutOfStock}>Breitling</button>
                <button className="watch-name" onClick={handleOutOfStock}>Omega</button>
                <button className="watch-name" onClick={handleOutOfStock}>Seiko</button>
                <button className="watch-name" onClick={handleOutOfStock}>Cartier</button>
                <button className="watch-name" onClick={handleOutOfStock}>IWC</button>
                <button className="watch-name" onClick={handleOutOfStock}>Tudor</button>
            </div>
        </div>
    );
}

export default Brands;