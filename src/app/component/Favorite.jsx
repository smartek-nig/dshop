import { useState, useEffect } from 'react'

export default function Favorite() {
    const [favorite, setFavorite] = useState([])

    useEffect(() => {
        setFavorite(JSON.parse(localStorage.getItem('favorite')) || [])
    }
    , [])
    return (
        <main className='p-5'>
            <h1 className='text-2xl font-bold'>Favorite items</h1>
            {favorite.length === 0 ? (

            <p>No favorite items</p> 
        ) : (
            <ul>
                {favorite.map((items) => (
                    <li key={items.id}>{items.title}</li>
                ))}
            </ul>
        )}
        </main>
    )
}
