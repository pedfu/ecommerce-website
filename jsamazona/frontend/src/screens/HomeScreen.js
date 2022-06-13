import data from '../data.js'

const HomeScreen = {
    render: () => {

        const {products} = data

        return `
            <ul class="products">
                ${products.map( product => `
                    <li>
                        <div class="product">
                            <a href="/#/product/${product._id}">
                                <img src=${product.image} alt=${product.name} />
                            </a>
                            <div class="product-name">
                                <a href="/#/product/${product._id}">
                                    ${product.name}
                                </a>
                            </div>                            
                            <div class="product-brand">
                                <a href="/#/product/${product._id}">
                                    ${product.brand}
                                </a>
                            </div>                            
                            <div class="product-price">
                                <a href="/#/product/${product._id}">
                                    $${product.price}
                                </a>
                            </div>                            
                        </div>
                    </li>
                ` ).join('\n')}
            </ul>
        `
    }
}

export default HomeScreen