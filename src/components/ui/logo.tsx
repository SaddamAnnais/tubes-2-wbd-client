// import logo from '/static/svg/logo-cooklyst.svg';
import logo_src from '/logo-with-bg.png';

import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/' className="w-[10rem] flex flex-row justify-between items-center">
      <img className="h-full aspect-square" src={logo_src} alt="logo" />
      <span className="pl-4 text-xl font-semibold">Cooklyst</span>
      <span className="text-2xl font-light">PRO</span>
    </Link>
  );
};

export default Logo;
