import { Link } from "react-router-dom";
import { ArrowRightCircleIcon, Trash2Icon } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure className="relative pt-[56.25%]">
        <img
          src={product.image}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-lg font-semibold capitalize">
          {product.name}
        </h2>
        <p className="text-2xl font-bold text-primary">$ {product.price}</p>

        <div className="card-actions justify-between mt-4">
          <Link
            to={`/product/${product.id}`}
            className="btn btn-sm btn-info btn-outline"
          >
            View Product
            <ArrowRightCircleIcon className="size-4" />
          </Link>
          <button className="btn btn-sm btn-error btn-outline">
            <Trash2Icon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
