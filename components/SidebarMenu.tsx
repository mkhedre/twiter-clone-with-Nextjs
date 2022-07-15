import React from 'react';
interface Props {
  text: String;
}
// ts-ignore
const SidebarMenu = (Props) => {
  const { Icon, text, active } = Props;
  return (
    <div className="flex items-center gap-2 p-2 text-gray-700 md:p-3 HoverEffect ">
      <Icon className="h-7 " />
      <a
        href="#"
        className={` ${
          active && 'font-bold text-lg'
        } hidden md:inline-flex text-lg`}
      >
        {text}
      </a>
    </div>
  );
};

export default SidebarMenu;
