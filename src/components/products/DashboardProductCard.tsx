import type { DashboardProductCardProps } from "@/lib/types/types";
import { Link } from "@/navigation";
import DeleteProduct from "../buttons/DeleteProduct";
import EditIcon from "@/lib/svg/EditIcon";
import TimeStamp from "@/lib/helpers/TimeStamp";

export default function DashboardProductCard({
  product,
}: DashboardProductCardProps) {
  return (
    <main
      key={product._id}
      className="bg-transparent rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm md:max-w-none mx-auto md:mx-0"
    >
      <section className="relative w-full h-[500px] md:h-[400px] bg-transparent">
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
      <div className="p-4 md:h-[260px] md:mt-0 pt-20">
        <h3 className="text-lg font-medium mb-2 h-10 md:h-auto">
          {product.title.substring(0, 30)} ...
        </h3>
        <p className=" text-sm mb-4 h-10 md:h-auto">
          {product.description.substring(0, 91)} ...
        </p>
        <section className="flex flex-col md:flex-row md:items-center md:justify-between text-center pt-4">
          <TimeStamp time={product.updatedAt} />
          <div className="flex items-center justify-center mt-4 md:mt-0">
            <Link
              href={`/products/${product._id}`}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
            >
              View
            </Link>
            <DeleteProduct id={product._id} />
            <Link
              href={`/edit/${product._id}`}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold p-2 rounded-full text-center ml-2"
            >
              <EditIcon />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
