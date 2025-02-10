import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ open, onClose }) => {
    return open ? (
        <div className="full-view flex">
            <div className="popup-background" onClick={onClose}></div>
            <div className="sidebar">
                <button className="sign-in-btn-new">
                    <img src="" alt="Image" />
                    Hello, sign in
                </button>
                {sidebarData.map((data) => (
                    <ContentContainer data={data} />
                ))}
            </div>
            <button className="close-sidebar" onClick={onClose}>X</button>
        </div>
    ) : (
        <></>
    );
};
export default Sidebar;

function ContentContainer({ data }) {
    console.log(data)
    return (
        <div className="content-container">
            <div className="container-title">{data?.title}</div>
            <ul className="content-list">
                {data?.items?.map((item) => (
                    <li className="content">
                        <Link to="/">
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