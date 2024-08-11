import { IoCheckmarkDone } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-4 md:mt-10">
      <footer className="grid grid-cols-1 md:grid-cols-4 gap-y-3 md:gap-y-10 px-3 py-2 md:p-10 bg-slate-900 text-white">
        <nav className="flex flex-col">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Hotel</a>
          <a className="link link-hover">Mountain</a>
          <a className="link link-hover">Sea</a>
          <Link to="allGuides" className="link link-hover">Guides</Link>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Company</h6>
          <Link to="/aboutUs" className="link link-hover">
            About us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/blogs" className="link link-hover">Blogs</Link>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav className="flex flex-col">
          <img src="logo-color.png" alt="" width="180" height="180" />
          <p className="text-blue-400 flex items-center gap-1">
            <IoCheckmarkDone />
            The Signature of Reez
          </p>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-slate-900 text-white border-base-300">
        <aside className="items-center font-medium text-lg grid-flow-col">
          <p className="cursor-pointer text-gray-600 hover:text-white">
            PRIVACY
          </p>
          <p>&</p>
          <p className="cursor-pointer text-gray-600 hover:text-white">
            PRIVACY
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <p>© Copyright Reserved by The Reez Family.</p>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
