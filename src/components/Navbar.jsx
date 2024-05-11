import { useState, useEffect, useRef } from "react";

const listmenu = [
  {
    page: "Home",
    path: "/",
  },
  {
    page: "Paket",
    path: "/paket",
  },
  {
    page: "Tentang",
    path: "/about",
  },
  {
    page: "FAQ",
    path: "/faq",
  },
];

const Navbar = ({ className, paddingTop }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const offcanvasRef = useRef(null);

  // close offcanvas when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        offcanvasRef.current &&
        !offcanvasRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // change navbar color when scrolling
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position > 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const padTop = scrollPosition ? "" : paddingTop;
  const backCol = scrollPosition ? "bg-teal-900" : "";

  return (
    <>
      <nav
        className={`fixed top-0 z-[1030] w-full ${backCol} ${className} transition-all duration-300 ${padTop}`}
      >
        <div className="container mx-auto px-4 md:px-16">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a
                href="/"
                className="flex align-middle text-white font-bold text-xl"
              >
                <img
                  src="/images/logo2.png"
                  alt="logo"
                  className="h-8 w-8 inline-block mx-2"
                />
                Badak Gunung
              </a>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-x-8">
                {listmenu.map((item, index) => (
                  <a
                    href={item.path}
                    className="uppercase font-medium text-white hover:text-gray-300 after:content-[''] after:block after:border-b-2 after:transition-all after:duration-300 after:scale-x-0 after:origin-center hover:after:scale-x-100"
                    key={index}
                  >
                    {item.page}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                id="toggleButton"
                className="block lg:hidden text-white focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        id="offcanvas"
        className={`transition-transform duration-300 ease-linear bg-gray-900 text-white fixed top-[4rem] right-0 w-10/12 flex flex-col py-8 px-8 sm:hidden gap-y-6 rounded z-50 ${
          isMenuOpen ? "visible translate-x-0" : "translate-x-[100%] invisible"
        }`}
        ref={offcanvasRef}
      >
        {listmenu.map((item, index) => (
          <a
            href={item.path}
            className="uppercase font-medium text-white text-end bg-gradient-to-r from-teal-500 to-teal-900 px-2 py-2 rounded"
            key={index}
          >
            {item.page}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
