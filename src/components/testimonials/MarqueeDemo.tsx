import Marquee from "./Marquee";
import { ReviewCard } from "./ReviewCard";
import { Reviews } from "./Reviews";

const firstRow = Reviews.slice(0, Reviews.length / 2);
const secondRow = Reviews.slice(Reviews.length / 2);

export default function MarqueeDemo() {
  return (
    <main className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 "></div>
    </main>
  );
}
