const StarRating = ({ rating }) => [ 1, 2, 3, 4, 5 ].map(el => <span key={ el }><i className={ rating < el ? (rating > el - 1 ? 'fas fa-star-half-alt' : 'far fa-star') : 'fas fa-star' }></i></span>);

export default StarRating;