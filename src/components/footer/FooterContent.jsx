import Link from "next/link";

const links = [
  {
    title: "Links",
    links: [
      { title: "Home", url: "/" },
      { title: "About", url: "/about" },
      { title: "Services", url: "/services" },
      { title: "Eco", url: "/eco" },
      { title: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Case Studies",
    links: [
      { title: "MyMood AI", url: "/case-studies/mymood-ai-case-study" },
      { title: "InfStones", url: "/case-studies/infstones-case-study" },
      { title: "Market Trend Report", url: "/case-studies/market-trends-2025" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Privacy Policy", url: "/privacy-policy" },
      { title: "Terms & Conditions", url: "/terms-conditions" },
      { title: "Terms of Use", url: "/terms-of-use" },
      { title: "Cookie Policy", url: "/cookie-policy" },
    ],
  },
];

const FooterContent = () => {
  return (
    <>
      {links.map((link, index) => (
        <div key={index} className="col-lg-2 col-sm-4 mb-30">
          <h5 className="footer-title fw-normal">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.links.map((item, i) => (
              <li key={i}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterContent;