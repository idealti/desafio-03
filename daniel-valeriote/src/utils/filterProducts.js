const filterProducts = (searchText, productsList) => {
	if(!productsList) return [];
	if(!searchText) return productsList;
	searchText.trim();

	return productsList.filter(p => p.title.toLowerCase().includes(searchText));
}

export default filterProducts