export interface Category {
	id: number,
	name: string,
	sublevels?: Category[] 
}

export interface Product {
	quantity: string,
	price: string,
	available: false,
	sublevel_id: number,
	name: string,
	id: string
}
