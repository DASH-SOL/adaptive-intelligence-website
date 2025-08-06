import Link from "next/link";
import Image from "next/image";

const links = [
  {
    title: "Privacy & Terms.",
    href: "/faq",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

const icons = [
  
  {
    icon: "fab fa-twitter",
    href: "https://twitter.com/aii_agency",
  },
  {
    icon: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/company/adaptiveintelligenceinternational",
  },
  {
    icon: "fab fa-google",
    href: "https://share.google/wqS5CzKTOC81TZj03",
  },
  {
    icon: "/images/icon/upwork.svg",
    href: "https://www.upwork.com/agencies/adaptiveintelligence/",
  },
  {
    icon: "fab fa-spotify",
    href: "https://www.linkedin.com/company/adaptiveintelligenceinternational",
  },
  {
    icon: "fab fa-instagram",
    href: "https://www.linkedin.com/company/adaptiveintelligenceinternational",
  },
];

const LinkItem = ({ title, href }) => {
  return (
    <li>
      <Link href={href}>{title}</Link>
    </li>
  );
};

const IconItem = ({ icon, href }) => {
  if(icon.startsWith("/images/icon/")) {
    return (
      <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Link href={href} target="_blank" rel="noopener noreferrer" className="social-icon-link">
          <Image src={icon} alt={icon} width={24} height={24} style={{ filter: 'brightness(0) invert(1)', transition: 'all 0.3s ease' }} />
        </Link>
      </li>
    );
  } else {
    return (
      <li>
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <i className={icon} />
        </Link>
      </li>
    );
  }

};

const CopyrightFooter = () => {
  return (
    <div className="bottom-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 order-lg-0 mt-15">
            <ul className="d-flex justify-content-center justify-content-lg-start footer-nav style-none">
              {links.map((link, index) => (
                <LinkItem key={index} title={link.title} href={link.href} />
              ))}
            </ul>
          </div>
          <div className="col-lg-4 order-lg-2 mt-15">
            <ul className="d-flex justify-content-center justify-content-lg-end social-icon style-none">
              {icons.map((icon, index) => (
                <IconItem key={index} icon={icon.icon} href={icon.href} />
              ))}
            </ul>
          </div>
          <div className="col-lg-4 order-lg-1 mt-15">
            <p className="copyright text-center m0">
              Copyright © {new Date().getFullYear()}{" "}
              <a
                style={{ color: "inherit" }}
                href="https://adaptiveintelligence.online"
                target="_blank"
                rel="noopener noreferrer"
              >
                Adaptive Intelligence International LLC. All Rights Reserved.
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter;
