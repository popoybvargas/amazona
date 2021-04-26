import StarRating from './StarRating';

const CardsList = ({ data }) =>
{
  return (
		<div className="row center">
			{
				data.products.map(product => (
					<div key={ product._id } className="card">
						<a href={ `/products/${product._id}` }>
							<img className="medium" src={ product.image } alt={ product.name }/>
						</a>
						<div className="card-body">
							<a href={ `/products/${product._id}` }>
								<h2>{ product.name }</h2>
							</a>
							<div className="rating">
								<StarRating rating={ product.rating }/>
							</div>
							<div className="price">
								${ product.price }
							</div>
						</div>
					</div>
				))
			}
		</div>
	);
};

export default CardsList;