import React, { useEffect, useState } from 'react'

function Products({ category }) {

    const [products, setProducts] = useState()

    async function getProducts() {

        let baseUrl = "https://fakestoreapi.com/products"

        if (category) {

            baseUrl = baseUrl + `/category/${category}`
        }

        let res = await fetch(baseUrl)

        let data = await res.json()

        setProducts(data)
    }

    // function getProducts() {

    //     fetch("https://fakestoreapi.com/products").then(res => res.json()).then(data => setProducts(data))
// }

useEffect(() => {
    getProducts()
    console.log("printing inside product componenet", category);
}, [category])

return (
    <div className="container mt-5">
        <div className='row'>

            {products && products.map((p, i) =>
                // <div className="col-6">
                <div class="card" style={{ "width": "30%" }}>
                    <img src={p.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{p.title}</h5>
                        <p class="card-text">{p.price}</p>
                        <p class="card-text">{p.category}</p>
                        <p class="card-text">{p.description}</p>
                        <a href="#" class="btn btn-primary">BUY IT</a>
                    </div>
                </div>
                // </div>
            )}
        </div>
    </div>
)
}

export default Products
