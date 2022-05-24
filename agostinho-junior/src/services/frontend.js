class FrontendService{

    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        return `R$ ${val}`
    }
    cat_desc = (a,b) => (a.category < b.category) ? 1 : ((b.category < a.category) ? -1 : 0)
    cat_asc = (a,b) => (a.category > b.category) ? 1 : ((b.category > a.category) ? -1 : 0)
    rate_desc = (a,b) => (a.rating.rate < b.rating.rate) ? 1 : ((b.rating.rate < a.rating.rate) ? -1 : 0)
    rate_asc = (a,b) => (a.rating.rate > b.rating.rate) ? 1 : ((b.rating.rate > a.rating.rate) ? -1 : 0)
}

export default FrontendService