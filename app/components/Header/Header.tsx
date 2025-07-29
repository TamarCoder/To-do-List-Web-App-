import Icon from "../Icon/Icon";
import { IconName } from "../Icon/Icon.types";
import Input from "../Input/Input";
import styles from "./Header.module.scss";
import tailwindcss from "@tailwindcss/vite";

export default function Header() {
  return (
    <header className=" w-full flex flex-col md:flex-row items-center justify-center md:justify-between h-auto p-4 md:p-8 sm:p-2 flex-wrap gap-3 bg-white shadow-md ">
      <div className="md:p-0">
        <h1 className=" text-black  font-sans text-[32px] font-semibold">
          <span className="text-red-400 font-sans text-[32px] font-semibold">Dash</span>board
        </h1>
      </div>
      <div className="w-full md:w-[695px]  h-9 rounded-lg shadow-2xl ">
        <div className="w-full relative">
          <input
            type="search"
            placeholder="Search your task here..."
            name="search"
            id="search"
            className="w-full pt-2.5 pr-10 pb-2.5 pl-3 text-[16px] border-0 rounded-[8px]"
          />
          <Icon
            name={IconName.search}
            width={36}
            height={36}
            alt="search"
            className="absolute right-0 top-[49%] -translate-y-1/2"
          />
        </div>
      </div>
      <div  className="w-full md:w-[202px] h-[36px] flex items-center gap-1.5">
        <Icon name={IconName.bell} width={36} height={36} alt="search" />
        <Icon name={IconName.calendar} width={36} height={36} alt="search" />
        <div  className="flex flex-col gap-1 ml-2.5 text-[14px] font-sans ">
          <p>Tuesday</p>
          <p> 20/06/2023</p>
        </div>
      </div>
    </header>
  );
}
