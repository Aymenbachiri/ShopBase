import CartCheckout from "./CartCheckout";
import CartProducts from "./CartProducts";

export default function CartUi() {
  return (
    <main className="h-[90vh]  my-[110px]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <section className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-gray-900">My Cart</h1>
        </section>
        <div className="mx-auto mt-8 max-w-2xl md:mt-12">
          <div className="bg-white rounded-md shadow">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
                <CartProducts />
              </div>
              <CartCheckout />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
