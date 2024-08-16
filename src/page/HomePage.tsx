import { ShuffleGrid } from "@/components/home/ShuffleGrid";

export default function HomePage() {
  return (
    <main className="w-full px-8 py-12 mt-[30px] md:mt-[60px] xl:mt-[150px] grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <section>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Let&apos;s change it up a bit
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus ad.
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Find a class
        </button>
      </section>
      <ShuffleGrid />
    </main>
  );
}
