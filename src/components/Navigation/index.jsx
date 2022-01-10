const Navigation = ({ links }) => (
  <nav id="main-menu">
    <ul>
      {links.map((link, index) => <li key={index}><span>{link}</span></li>)}
    </ul>
  </nav>
);

export default Navigation;
