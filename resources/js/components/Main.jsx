import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Product from './Product';

/* An example React component */
const Main = () => {
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] =useState(null);

    const getProducts = () => {
        fetch('/api/products')
        .then(response => {
            return response.json();
        })
        .then(products => {
            setProducts(products);
        });
    };

    useEffect(() => {
        getProducts();
    }, []);

    const renderProducts = () => {
        return products.map(product => {
            return (
                <li
                    key={ product.id }
                    onClick={() => handleclick(product)}
                >
                    { product.title }
                </li>
            );
        })
    };

    const handleclick = (product) => {
        setCurrentProduct(product)
    };

    return (
        <div>
            <div>
                <h3> All products </h3>
                <ul>
                    { renderProducts() }
                </ul>
            </div>
            <Product product={currentProduct} />
        </div>
    )
}
export default Main;
/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/
if (document.getElementById('root')) {
    const root = createRoot(document.getElementById('root'));
    root.render(<Main />);
}


