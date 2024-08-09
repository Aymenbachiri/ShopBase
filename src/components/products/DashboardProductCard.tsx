import type { DashboardProductCardProps } from "@/lib/types/types";
import { Link } from "@/navigation";
import DeleteProductBtn from "../buttons/DeleteProductBtn";
import EditIcon from "@/lib/svg/EditIcon";
import TimeStamp from "@/lib/helpers/TimeStamp";

export default function DashboardProductCard({
  product,
}: DashboardProductCardProps) {
  return (
    <main
      key={product._id}
      className="bg-transparent rounded-lg overflow-hidden my-4 shadow-lg ring-4 ring-red-500 ring-opacity-40 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row">
        <section className="relative w-full sm:w-1/2 h-64 sm:h-auto bg-transparent">
          <img
            loading="lazy"
            className="w-full h-full object-cover bg-transparent"
            src={product.imageurl}
            alt="Product Image"
          />
          <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            {product.price} $
          </div>
          <div className="absolute top-0 left-0 bg-green-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
            {product.category}
          </div>
        </section>
        <div className="p-4 sm:w-1/2 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-medium mb-2 line-clamp-2">
              {product.title}
            </h3>
            <p className="text-sm mb-4 line-clamp-3">{product.description}</p>
          </div>
          <section className="flex flex-col space-y-4">
            <TimeStamp time={product.updatedAt} />
            <nav className="flex items-center justify-between flex-wrap gap-2">
              <Link
                href={`/products/${product._id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm"
              >
                view
              </Link>
              <DeleteProductBtn id={product._id} />
              <Link
                href={`/editProduct/${product._id}`}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold p-2 rounded-full text-center"
              >
                <EditIcon />
              </Link>
            </nav>
          </section>
        </div>
      </div>
    </main>
  );
}
