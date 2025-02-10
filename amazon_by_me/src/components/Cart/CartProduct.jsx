const CartProduct = ({ data }) => {
	const { title, img, price, quantity } = data;
	return (
		<div className="cart-product">
			<img src={img} />
			<div className="details">
				<div className="info">
					<strong>{title}</strong>
					<strong>{price}</strong>
				</div>
				<div className="controls">
					<select>
						<option>{quantity}</option>
					</select>
				</div>
			</div>
		</div>
	);
};
export default CartProduct;

/*
const sampleProductData = [
  {
	title:
	  "Logitech Combo Touch iPad Pro 13-inch (M4)(2024) Keyboard Case - Detachable Backlit Keyboard with Kickstand, Comfortable Typing, Multi-use Mode - Graphite",
	img: "https://via.placeholder.com/400x400",
	price: 22995,
	mrp_price: 26995,
	rating: 4,
	offer: "15% off",
	inStock: true,
	fastDelivery: true,
	freeShipping: true,
	gift: false,
	quantity: 1,
  },
];

*/