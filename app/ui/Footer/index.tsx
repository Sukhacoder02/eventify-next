import * as React from 'react';
import { themes } from './../../../lib/placeholder-data';

const Footer: React.FunctionComponent = (): JSX.Element => {
  return (
    <div className="bg-black flex items-center justify-start pt-[25px] pb-[25px] pl-[200px] pr-[200px]">
      <div className="flex h-full w-full justify-between">
        <div className="text-white text-xl   ">
          <h2 className="font-sans">THEMES</h2>
        </div>
        <div className="flex-grow ">
          <div className="flex justify-start gap-3 ml-[10px]">
            {themes.map((theme) => {
              return (
                <div
                  key={theme.id}
                  className={`h-[30px] w-[30px] rounded `}
                  style={{
                    backgroundColor: theme.color_hex_code,
                  }}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="bg-white text-black rounded p-[5px] hover:text-white hover:bg-black hover:ease-in duration-100">
          <button type="submit">SAVE THEME</button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
