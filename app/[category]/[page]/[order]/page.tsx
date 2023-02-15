import { Product } from '../../../../types';

type Props = {
	params: {
		category: string;
		page: string;
		order: string;
	}
};
const ProductsPage = async ({ params }: Props) => {
	let { products } = await import('../../../../data/products.json')
	console.log(typeof products)
	products = products.filter((product: Product) => (String(product.sublevel_id) === params.category))
	console.log(products)
	// products.sort((a: Product, b: Product) =>
	// 	params.order === 'asc'
	// 		? a.price.localeCompare(b.price)
	// 		 b.price.localeCompare(a.price)

	return <div>{`<ProductsPage />`}</div>
}

export default ProductsPage;
