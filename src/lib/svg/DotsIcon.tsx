import { useLocale } from "next-intl";

export default function DotsIcon() {
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  const baseClasses =
    "absolute -top-5 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 dark:text-blue-gray-700 sm:block";
  const rtlClasses = "left-44";
  const ltrClasses = "right-20";
  const lgClasses = "lg:w-32 lg:-ml-28 lg:-mt-10";

  return (
    <svg
      viewBox="0 0 52 24"
      fill="currentColor"
      className={`${baseClasses} ${
        dir === "rtl" ? rtlClasses : ltrClasses
      } ${lgClasses}`}
    >
      <defs>
        <pattern
          id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
          x="0"
          y="0"
          width=".135"
          height=".30"
        >
          <circle cx="1" cy="1" r=".7" />
        </pattern>
      </defs>
      <rect
        fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
        width="52"
        height="24"
      />
    </svg>
  );
}
