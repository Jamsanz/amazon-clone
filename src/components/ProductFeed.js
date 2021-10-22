import React from 'react'
import Product from './Product'

const ProductFeed = ({products}) => {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 md:-mt-40 lg:grid-cols-3 xl:grid-cols-4">
            {products.slice(0,4).map(({id,title,description,category,price,image,rating})=>(
                <Product
                key={id}
                id={id}
                title={title}
                description={description}
                category={category}
                price={price}
                image={image}
                rating={rating}
                />
            ))}

            <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />
            <div className="md:col-span-2">
            {products.slice(4,5).map(({id,title,description,category,price,image,rating})=>(
                <Product
                key={id}
                id={id}
                title={title}
                description={description}
                category={category}
                price={price}
                image={image}
                rating={rating} 
                />
            ))}
            </div>
            {products.slice(6).map(({id,title,description,category,price,image,rating})=>(
                <Product
                key={id}
                id={id}
                title={title}
                description={description}
                category={category}
                price={price}
                image={image}
                rating={rating} 
                />
            ))}
        </div>
    )
}

export default ProductFeed
