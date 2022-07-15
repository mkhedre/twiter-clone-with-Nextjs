import React from 'react';
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
} from '@heroicons/react/solid';
import SidebarMenu from './SidebarMenu';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="fixed flex flex-col h-full max-w-xs py-10">
      <div className="flex justify-start p-0 pt-2 pl-2 m-0 hover:bg-blue-100 HoverEffect">
        <HomeIcon className="mb-5 h-7" />
      </div>
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenu Icon={HomeIcon} text={'Home'} active />
        <SidebarMenu Icon={HashtagIcon} text={'explore'} />
        <SidebarMenu Icon={BellIcon} text={'notifications'} />
        <SidebarMenu Icon={InboxIcon} text={'messages'} />
        <SidebarMenu Icon={BookmarkIcon} text={'bookmarks'} />
        <SidebarMenu Icon={ClipboardIcon} text={'lists'} />
        <SidebarMenu Icon={UserIcon} text={'profile'} />
        <SidebarMenu Icon={DotsCircleHorizontalIcon} text={'explore'} />
      </div>

      <button className="flex items-center justify-center hidden w-40 h-12 px-10 py-1 mt-5 text-lg text-white capitalize transition-all bg-blue-400 rounded-full shadow-md md:inline-block md:w-56 hover:bg-blue-600 lg:w-auto">
        tweet
      </button>
      <div className="flex items-center justify-start gap-2 py-5 HoverEffect ">
        <Image
          src="/images/me.jpg"
          alt="me"
          height={50}
          width={50}
          className="rounded-full cursor-pointer"
        />
        <div className="hidden text-gray-700 md:inline-block ">
          <h4 className="capitalize "> mostafa khedre</h4>
          <p>@mkhedre3@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
