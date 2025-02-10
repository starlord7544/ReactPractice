// import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ open, onClose }) => {
  console.log("Sidebar")
  return open ? (
      <div className="w-full h-full flex absolute top-0 left-0 z-[5] bg-transparent">
      <div className="w-full max-w-[100dvw] h-full max-h-[100dvh] absolute top-0 left-0 z-[7] bg-[#000000b0]" onClick={onClose}></div>
      <div className="text-lg absolute top-0 left-0 z-9 w-[364px] h-full bg-white flex flex-col overflow-y-auto overflow-x-hidden--x">
      <button className="min-h-min px-8 py-2 bg-[#222F3E] font-bold text-[19px] leading-[25px] flex gap-2 text-white">

          <img src="" alt="Image" />
          Hello, sign in
        </button>
        {sidebarData.map((data) => (
          <ContentContainer data={data} />
        ))}
      </div>
      <button className="h-10 w-10 aspect-square border border-white rounded-md text-white absolute left-[368px] top-2 z-10 bg-[#00000020] cursor-pointer" onClick={onClose}>X</button>
    </div>
  ) : (
    <></>
  );
};
export default Sidebar;

function ContentContainer({ data }) {
    console.log(data)
  return (
    <div className="flex flex-col px-8 py-2 border-b border-gray-400">
      <div className="text-[18px] leading-6 font-bold text-[#111] py-2">{data?.title}</div>
      <ul className="list-none p-0 m-0 flex flex-col">
        {data?.items?.map((item) => (
          <li className="content">
            <Link to="/" className="text-[14px] leading-4 text-[#111] font-medium cursor-pointer py-3.5 flex items-center justify-between">
              {item?.title} {item?.open ? <img src="" alt="open it" /> : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const sidebarData = [
  {
    title: "Trending",
    items: [
      {
        title: "Best Sellers",
        open: true,
      },
      {
        title: "New Releases",
        open: false,
      },
      {
        title: "Movers & Shakers",
        open: true,
      },
    ],
  },
  {
    title: "Digital Content & Devices",
    items: [
      {
        title: "Amazon Prime Video",
        open: true,
      },
      {
        title: "Kindle eBooks",
        open: false,
      },
      {
        title: "Amazon Prime Music",
        open: true,
      },
      {
        title: "Mobiles, Computers",
        open: true,
      },
    ],
  },
  {
    title: "Fashion",
    items: [
      {
        title: "Amazon Prime Video",
        open: true,
      },
      {
        title: "Kindle eBooks",
        open: false,
      },
      {
        title: "Amazon Prime Music",
        open: true,
      },
      {
        title: "Mobiles, Computers",
        open: true,
      },
    ],
  },
];
