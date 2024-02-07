export default function Aboutus() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-8xl py-8 sm:px-6 sm:py-8 lg:px-8">
        <div className="relative isolate overflow-hidden bg-white px-6 pt-16   sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">
              Our Story: Crafting Nature's Essence with Passion and Expertise
              <br />
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-500">
              For over two decades, our organization, Crystal Aromatics, have
              been offering high end aroma therapy products to clients spread
              across industry verticals. We have in our collection nearly 150
              varieties of essential oils. Their extensive application as base
              ingredient or fragrance enhancing channel have made them highly
              sought after among our clients.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/products"
                className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute bg-cover bg-center left-0 top-0 w-[48rem] lg:w-[56rem] max-lg:w-[52rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://i.pinimg.com/564x/20/ce/8c/20ce8ced73aedc8769572897c5d4eadb.jpg"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
