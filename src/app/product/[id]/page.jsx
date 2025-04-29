export default function ProductDetail() {
    Back to products
    </Link>

    <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/2">
            <Image src={product.image} alt={product.title} className="w-full h-auto rounded-lg object-cover" />

        </div>

        <div className="w-full md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold text-gray-500"> {product.title}</h1>

        <p className="text-lg text-gray-500 ">{product.decription}</p>
        <p className="text-xl font-semibold text-red-600">
            price: {product.price}
        </p>
        <p className="text-gray-500">{product.rating} rating</p>
        <p className="text-sm text-gray-500 italic">
            Category: {product.category}
        </p>

        <button onClick={() => addtocart(product)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            <ShoppingCart className="mr-2" /> Add to Cart

        </button>

        </div>

    </div>
}