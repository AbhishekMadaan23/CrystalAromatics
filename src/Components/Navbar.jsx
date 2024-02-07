import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Essential Oils",
    description: "",
    href: "/essential-oils",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Absolutes",
    description: "",
    href: "/absolutes",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Arormatherapy Oils",
    description: "",
    href: "/aromatherapy-oils",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Carrier Oils",
    description: "",
    href: "/carrier-oils",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Flower Oils",
    description: "",
    href: "/flower-oils",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Spice Oils",
    description: "",
    href: "/spice-oils",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Fragrances and Flavours",
    description: "",
    href: "/fragrances-flavours",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Aromatic Chemicals",
    description: "",
    href: "/aromatic-chemicals",
    icon: CursorArrowRaysIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsTop(currentScrollPos < 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full  bg-white bg-opacity-80 z-10 shadow ${
        isTop ? "relative" : "fixed"
      } ${isTop ? "top-0" : "top-0"}`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex h-5 w-5 lg:flex-1">
          <div className=" lg:hidden flex h-5 w-5 lg:flex-1">
            <a
              href="/"
              className=""
              style={{
                display: "block",
                width: " 125px",
                height: "25px",
                padding: "1px",
                // background:
                //   "linear-gradient(to bottom right,#7FC7D9, #DCF2F1, white)",
                textAlign: "center",
                // border: "1px solid black",
                borderRadius: "5px",
                color: " Black",
                fontWeight: "bold",
                lineHeight: "25px",
              }}
            >
              Home
            </a>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-lg font-semibold leading-6 text-gray-900">
            Home
          </a>
          <a
            href="/products"
            className="text-lg font-semibold -mr-8 leading-6 text-gray-900"
          >
            Products
          </a>
          <Popover className="relative">
            <Popover.Button className="flex mt-0.5 items-center text-lg font-semibold leading-6 text-gray-900">
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a
            href="/about-us"
            className="text-lg font-semibold leading-6 text-gray-900"
          >
            About us
          </a>
          <a
            href="/get-in-touch"
            className="text-lg font-semibold leading-6 text-gray-900"
          >
            Get in touch
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <h1 className="-m-1.5 p-1.5 text-bold text-lg">
                Crystal Aromatics
              </h1>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <div className="flex hover:bg-gray-50 ">
                        <a
                          className=" rounded-lg px-3 py-2 text-base font-semibold"
                          href="/products"
                        >
                          Products
                        </a>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg  pl-1 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                      </div>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="/about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About us
                </a>
                <a
                  href="/get-in-touch"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
