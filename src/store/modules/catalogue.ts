import { Commit } from 'vuex';
import {
	ProductsDataSevice
} from '@/api/catalogue';


export default {
	namespaced: true,
  state: {
	categories: [],
	products: null,
  },
  getters: {
	getProductById: (state: Record<string,any>) => (product_id: string) => {
		console.log('getter run', state, product_id)
		console.log('state products are', state.products)

		const product = state.products.find((pr: Record<string,any>) => pr.id == product_id)
		if (!product) {
			return null
		}
		return product
	}
  },
  mutations: {
	setCategories(state: Record<string, any>, categories: Array<Record<string,any>>) {
		state.categories = categories;
	},
	setProducts(state: Record<string, any>, products: Array<Record<string,any>>) {
		state.products = products;
	},
  },
  actions: {
	getCategoriesAPI({commit}: {commit: Commit}) {
		const categories: Array<Record<string,any>> = []	
		commit('setCategories', categories)
	},
	async getProductsAPI({commit}: {commit: Commit}) {
		// get all products	
		const products: Array<Record<string,any>> = await ProductsDataSevice.getAll()	
		commit('setProducts', products)
	},
  },
}
