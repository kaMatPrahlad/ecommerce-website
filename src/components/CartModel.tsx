"use client";

import Image from "next/image";

const CartModel = () => {
  const cartItems = true;
  return (
    <div className=" w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <div className="flex gap-4">
          <Image
            src="https://avatars.githubusercontent.com/u/162600820?v=4"
            alt=""
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
          <div className="flex flex-col justify-between w-full">
            {/* TOP */}
            <div className="top"></div>
            {/* TITLE */}
            <div className="tittle">
              <h3>Product name</h3>
              <div className="">$49</div>
            </div>
            {/* DESC */}
            <div className="desc">avilable</div>
            {/* BOTTOM */}
            {/* <div className="bottom"></div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModel;
