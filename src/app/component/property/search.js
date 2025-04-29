export const filterBySearh = ( products, searchTerm ) => {
    return products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
}