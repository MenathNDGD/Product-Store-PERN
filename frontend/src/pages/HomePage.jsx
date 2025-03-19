import { useEffect } from "react";
import { PlusCircleIcon, RefreshCwIcon } from "lucide-react";

import { useProductStore } from "../hooks/useProductStore";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <button className="btn btn-primary">
          <PlusCircleIcon className="size-5 mr-2" />
          Add Product
        </button>
        <button className="btn btn-primary" onClick={fetchProducts}>
          <RefreshCwIcon className="size-5" />
        </button>
      </div>

      {!loading && products.length === 0 && (
        <div className="alert alert-info mb-8 capitalize text-xl">
          No products found. Add a product to get started.
        </div>
      )}

      {error && (
        <div className="alert alert-error mb-8 text-xl">
          {error} Please try again later.
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loading loading-spinner loading-lg" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
};

export default HomePage;
