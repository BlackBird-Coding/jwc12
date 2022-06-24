import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="tw-bg-transparent tw-border tw-border-white">
        <div className="tw-flex tw-justify-end tw-max-w-screen-lg tw-mx-auto">
          <div className="tw-hidden md:tw-flex tw-gap-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="tw-p-3 tw-text-xl hover:tw-bg-white hover:tw-text-primary">
                  {item.name}
                </button>
              </a>
            ))}
          </div>
          <div className="tw-flex md:tw-hidden">
            <button
              className="tw-text-white tw-p-3 tw-m-1 tw-border tw-rounded-lg hover:tw-bg-white hover:tw-text-primary"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <svg
                className="tw-block tw-h-4 tw-w-4 tw-fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="tw-absolute tw-flex md:tw-hidden tw-flex-col tw-top-[3.25rem] tw-left-0 tw-right-0 tw-bg-primary tw-border-x tw-border-b tw-border-white">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="tw-flex tw-justify-end tw-text-xl tw-w-full hover:tw-bg-white hover:tw-text-primary tw-px-4 tw-py-2">
                {item.name}
              </button>
            </a>
          ))}
        </div>
      )}
    </>
  );
}

const menuItems = [
  {
    name: "เกี่ยวกับหมอหมึก",
    link: "https://www.facebook.com/BlackBird.in.th",
  },
  {
    name: "บทความ",
    link: "https://www.webmaster.or.th/category/articles/website",
  },
  { name: "จองคิว", link: "https://12.jwc.in.th/" },
];
