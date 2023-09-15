import "./ProductCard.scss";

export const noName = "No Name";
export const noDescription = "No Description";
export const noPrice = "No Price";
export const placeholderImage = "https://placehold.co/276x235";

/**
 * A component to display a product card. To use the component, just import it and add it to your jsx with its correct parameters
 * @param {string} name - The name of the product.
 * @param {string} description - A short description of the product.
 * @param {number} price - The price of the product.
 * @param {string} imgUrl - The URL of the product image.
 */
export const ProductCard = ({
  name = noName,
  description = noDescription,
  price = null,
  imgUrl = placeholderImage,
}) => {
  return (
    <div className="product_card">
      <img className="card-image" src={imgUrl} alt="product" />
      <div className="card-body">
        <div className="upper-part">
          <span className="title">{name}</span>
          <p className="description">{description}</p>
        </div>
        <div className="lower-part">
          <span className="price">{price ? "$" + price : noPrice}</span>
        </div>
      </div>
    </div>
  );
};
