import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
	state() {
		return { products: [] }
	},
	actions: {
		addProduct(product) {
			if(!product) return;
			let isInCart = this.products.some(p => {
				if(p.id != product.id) return false;
				p.count++;
				return true;
			})
			if(!isInCart) this.products.push({...product, count: 1})	;
		},
		removeProduct(id) {
			this.products.forEach((p, idx) => {
				if(p.id == id) this.products.splice(idx, 1);
			});
		},
		increaseProductCount(id) {
			this.products.forEach(p => {
				if(p.id != id) return;
				p.count++
			});
		},
		decreaseProductCount(id) {
			this.products.forEach(p => {
				if(p.id != id) return;
				if(p.count == 1) return;
				p.count--;
			});
		},
	}
})