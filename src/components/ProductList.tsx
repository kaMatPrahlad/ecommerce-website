import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="relative w-full h-80">
        <Image
          src="https://avatars.githubusercontent.com/u/162600820?v=4"
          alt=""
          fill
          sizes="25vw"
        />
      </Link>
    </div>
  );
};

export default ProductList;
