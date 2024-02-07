const products = [
  {
    id: 1,
    name: "Essential Oil",
    href: "/essential-oils",
    imageSrc:
      "https://i.pinimg.com/564x/81/81/f5/8181f53b138194d46bae3203ec6e494b.jpg",
    imageAlt: "Essential Oil",
    price: "",
    color: "",
  },
  {
    id: 1,
    name: "Absolutes",
    href: "/absolutes",
    imageSrc:
      "https://i.pinimg.com/564x/57/ce/de/57cede663fca27b8a273d5a6d4f922f0.jpg",
    imageAlt: "Absolutes",
    price: "",
    color: "",
  },
  {
    id: 1,
    name: "Aromatherapy Oils",
    href: "/aromatherapy-oils",
    imageSrc:
      "https://i.pinimg.com/564x/ac/3e/ab/ac3eabed4b067a28939dbcb52c5b76e9.jpg",
    imageAlt: "Aromatherapy Oils",
    price: "",
    color: "",
  },
  {
    id: 1,
    name: "Carrier Oils",
    href: "/carrier-oils",
    imageSrc:
      "https://i.pinimg.com/564x/d2/10/f7/d210f7b0144206267125b7dd74f695eb.jpg",
    imageAlt: "Carrier Oils",
    price: "",
    color: "",
  },
  {
    id: 1,
    name: "Flower Oils",
    href: "/flower-oils",
    imageSrc:
      "https://i.pinimg.com/564x/91/34/b8/9134b855d2e487c00bc003513c5c221f.jpg",
    imageAlt: "Flower Oils",
    price: "",
    color: "",
  },
  {
    id: 1,
    name: "Spice Oils",
    href: "/spice-oils",
    imageSrc:
      "https://i.pinimg.com/564x/c9/33/c6/c933c647cc88170fac8eb5872025ba7e.jpg",
    imageAlt: "Spice Oils",
    price: "",
    color: "",
  },
  {
    id: 1,
    name: "Fragrances and Flavours",
    href: "/fragrances-flavours",
    imageSrc:
      "https://i.pinimg.com/564x/81/81/13/8181139a616b8a2e162b7910365c5e45.jpg",
    imageAlt: "Fragrances",
    price: "",
    color: "",
  },

  {
    id: 1,
    name: "Aromatics Chemicals",
    href: "#",
    imageSrc: "https://4.imimg.com/data4/BR/XI/MY-798705/bay-oil-250x250.jpg",
    imageAlt: "Aromatics Chemicals",
    price: "",
    color: "",
  },
  // More products...
];

export default function OurProducts() {
  return (
    <div className="bg-red-50 my-5 pt-6 pb-5">
      <div className="mx-auto my-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold pb-2 text-gray-900">Our Products</h1>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div className="w-full">
                  <h3 className="text-lg md:text-xl shadow-md rounded-md p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg text-center font-bold text-gray-800">
                    <a href={product.href}>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 text-center "
                      />
                      {product.name}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
