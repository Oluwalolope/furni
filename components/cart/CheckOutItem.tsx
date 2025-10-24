import PRODUCTS from "@/data/products";
import currencyFormatter from "@/util/formatting";
import Image from "next/image";

type props = {
    id: string,
    quantity: string | number
}

const CheckOutItem = ({ id, quantity }:props) => {
    const product = PRODUCTS.find((product) => product.id === id);

    if (!product) {
        return
    }

    return (
        <article className="border border-[#CED4DA]/0.5 rounded-md flex flex-row p-4 gap-x-4">
          <div className="border border-[#ACACAC] rounded-md size-[70px]">
            <Image
              src={product.image}
              alt={product.name}
              draggable={false}
              className="w-[120px]"
            />
          </div>

          <div className="flex flex-col justify-between flex-1">
            <h4 className="font-inter font-medium text-[20px] capitalize">
              {product.name}
            </h4>

            <div className="flex flex-row justify-between items-start w-full gap-x-3">
              <p className="font-inter text-[14px] font-normal capitalize">
                price:{" "}
                <span className="font-medium">
                  {currencyFormatter.format(product.price)}
                </span>
              </p>
              <p className="font-inter text-[14px] font-normal capitalize">
                Qty:{" "}
                <span className="font-medium">
                  {quantity}
                </span>
              </p>
            </div>
          </div>
        </article>
    );
}
 
export default CheckOutItem;