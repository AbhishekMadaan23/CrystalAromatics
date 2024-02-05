const products = [
  {
    id: 1,
    name: "Essential Oil",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/81/81/f5/8181f53b138194d46bae3203ec6e494b.jpg",
    imageAlt: "Essential Oil",
    price: "",
    color: "",
  },
  {
    id: 1,
    name: "Absolutes",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/57/ce/de/57cede663fca27b8a273d5a6d4f922f0.jpg",
    imageAlt: "Absolutes",
    price: "",
    color: "",
  },
  {
    id: 1,
    name: "Aromatherapy Oils",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/ac/3e/ab/ac3eabed4b067a28939dbcb52c5b76e9.jpg",
    imageAlt: "Aromatherapy Oils",
    price: "",
    color: "",
  },
  {
    id: 1,
    name: "Carrier Oils",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/d2/10/f7/d210f7b0144206267125b7dd74f695eb.jpg",
    imageAlt: "Carrier Oils",
    price: "",
    color: "",
  },
  {
    id: 1,
    name: "Flower Oils",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/91/34/b8/9134b855d2e487c00bc003513c5c221f.jpg",
    imageAlt: "Flower Oils",
    price: "",
    color: "",
  },
  {
    id: 1,
    name: "Spice Oils",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/c9/33/c6/c933c647cc88170fac8eb5872025ba7e.jpg",
    imageAlt: "Spice Oils",
    price: "",
    color: "",
  },
  {
    id: 1,
    name: "Fragrances",
    href: "#",
    imageSrc:
      "https://i.pinimg.com/564x/81/81/13/8181139a616b8a2e162b7910365c5e45.jpg",
    imageAlt: "Fragrances",
    price: "",
    color: "",
  },
  {
    id: 1,
    name: "Flavours",
    href: "#",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0330/6249/articles/Flavors_1000x1000.jpg?v=1589999553",
    imageAlt: "Flavours",
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
    <div className="bg-red-50">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold  text-gray-900">Our Products</h1>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg underline font-bold text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0 " />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
