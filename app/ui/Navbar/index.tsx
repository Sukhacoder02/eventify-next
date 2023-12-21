import * as React from 'react';
import { bigShoulders } from './../fonts';

const Navbar: React.FunctionComponent = (): JSX.Element => {
  return (
    <nav className="bg-black flex items-center justify-start pt-[25px] pb-[25px] pl-[200px] pr-[200px]">
      <div className="text-white text-7xl font-black ">
        <h2 className={`${bigShoulders.className} antialiased`}>EVENTIFY</h2>
      </div>
    </nav>
  );
};
export default Navbar;
