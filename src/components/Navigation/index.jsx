import {
  Link
} from 'react-router-dom';

const NoLink = ({ children }) => <span>{children}</span>;

const Navigation = ({ links }) => (
  <nav id="main-menu">
    <ul>
      {links.map(({ to, label }, index) => <li key={index}>{to ? <Link to={to}>{label}</Link> : <NoLink>{label}</NoLink>}</li>)}
    </ul>
  </nav>
);

export default Navigation;
