import Logo from './ui/logo.tsx';
import { Separator } from './ui/separator.tsx';

const Navbar = () => {
  return (
    <div className="fixed top-0 bg-white w-full h-24 flex flex-col">
      <div className="w-full h-full py-8 px-16 flex flex-row justify-between">
        <Logo />
        <div>omg</div>
      </div>
      <Separator className="w-screen" />
    </div>
  );
};

export default Navbar;
