import logo from "../../../assets/logo/toyzone.png"

const Footer = () => {
  return (
    <footer className="mt-12 bg-slate-900 text-white">
      <div className="footer p-8 md:px-24 flex items-center justify-between">
        <div>
          <img
            className="w-20 h-20"
            src={logo}
            alt="logo"
          />
          <p className="text-xl">
            Education Kits
            <br />
            through play!.
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Subscribe to stay inspired!</span>
          <p>We are always up to something good.</p>
          <input type="email" placeholder="Email" className="input input-bordered input-accent w-full max-w-xs text-black" />
          <button className="btn btn-accent text-white">Subscribe</button>
        </div>
      </div>
      <p className="text-center text-sm mt-8 pb-3">
        © 2023 our Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
