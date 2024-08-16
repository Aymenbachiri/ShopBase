import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { ImageProps } from "next/image";

interface MyImageProps
  extends Omit<ImageProps, "src" | "alt" | "width" | "height" | "sizes"> {
  src: string | StaticImport;
  className?: string | undefined;
  alt: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  sizes?: string | undefined;
}

export default function MyImage({
  src,
  className,
  alt,
  width,
  height,
  sizes,
  ...rest
}: MyImageProps) {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      {...rest}
    />
  );
}
