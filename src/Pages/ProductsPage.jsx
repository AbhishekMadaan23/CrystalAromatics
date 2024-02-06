const callouts = [
  {
    name: "Essential Oil",
    description: "",
    imageSrc:
      "https://i.pinimg.com/564x/81/81/f5/8181f53b138194d46bae3203ec6e494b.jpg",
    imageAlt: "Pure Essential Oils",
    href: "/essential-oils",
  },
  {
    name: "Absolutes",
    description: "",
    imageSrc:
      "https://i.pinimg.com/564x/57/ce/de/57cede663fca27b8a273d5a6d4f922f0.jpg",
    imageAlt: "Absolutes",
    href: "/absolutes",
  },
  {
    name: "Aromatherapy Oils",
    description: "",
    imageSrc:
      "https://i.pinimg.com/564x/ac/3e/ab/ac3eabed4b067a28939dbcb52c5b76e9.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "/aromatherapy-oils",
  },
  {
    name: "Carrier Oils",
    description: "",
    imageSrc:
      "https://i.pinimg.com/564x/d2/10/f7/d210f7b0144206267125b7dd74f695eb.jpg",
    imageAlt: "Carrier Oils",
    href: "/carrier-oils",
  },
  {
    name: "Flower Oils",
    description: "",
    imageSrc:
      "https://i.pinimg.com/564x/91/34/b8/9134b855d2e487c00bc003513c5c221f.jpg",
    imageAlt: "Flower Oils",
    href: "/flower-oils",
  },
  {
    name: "Spice Oils",
    description: "",
    imageSrc:
      "https://i.pinimg.com/564x/c9/33/c6/c933c647cc88170fac8eb5872025ba7e.jpg",
    imageAlt: "Spice Oils",
    href: "/spice-oils",
  },
  {
    name: "Fragrances and Flavours",
    description: "",
    imageSrc:
      "https://i.pinimg.com/564x/81/81/13/8181139a616b8a2e162b7910365c5e45.jpg",
    imageAlt: "Fragrances and Flavours",
    href: "/fragrances-and-flavours",
  },

  {
    name: "Aromatics Chemicals",
    description: "",
    imageSrc: "https://4.imimg.com/data4/BR/XI/MY-798705/bay-oil-250x250.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "/aromatics-chemicals",
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Categories</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
