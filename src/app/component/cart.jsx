import { usestaate, useeffect } from "react";

export default function Cart() {
    const [cart, setCart] = usestaate([])

    useeffect(() => {
        setCart(JSON.parse(localstorage.getitem("cart")) || [])
    }, [])

    return (
        <main className="p-5">
            <h1 className="text-2xl font-bold">Cart items</h1>
            {cart.length === 0 ? (
                <p>No cart items</p>
            ) : (
                <ul>
                    {cart.map((product) => (
                        <li key={product.id}>{product.title} - {product.price}
                        </li>
                    ))}
                </ul>
            )}
        </main>
    )
}