const fetchProducts = async(url) => {
	const resolve = await fetch(url);
	const result = await resolve.json()
	return result 
}
export default fetchProducts;