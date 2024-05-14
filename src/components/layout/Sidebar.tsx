import React from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { FaHome, FaStar } from 'react-icons/fa';
import { BsHearts } from "react-icons/bs";
import { IoPerson, IoSettings, } from "react-icons/io5";


const Sidebar = () => {
  return (
    <NavigationMenu
      className="fixed h-screen bg-gray-800 text-white flex flex-col justify-start mt-20 rounded-3xl"
    >
        <NavigationMenuItem className="bg-gray-800 text-gray-300 p-4 hover:bg-gray-700 hover:text-white list-none rounded-tr-lg">
            <NavigationMenuLink href="#">
                <FaHome />
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-gray-800 text-gray-300 p-4 hover:bg-gray-700 hover:text-white list-none">
            <NavigationMenuLink href="#">
                <FaStar />
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-gray-800 text-gray-300 p-4 hover:bg-gray-700 hover:text-white list-none">
            <NavigationMenuLink href="#">
                <BsHearts />
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-gray-800 text-gray-300 p-4 hover:bg-gray-700 hover:text-white list-none">
            <NavigationMenuLink href="#">
                <IoPerson />
            </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-gray-800 text-gray-300 p-4 hover:bg-gray-700 hover:text-white list-none">
            <NavigationMenuLink href="#">
                <IoSettings />
            </NavigationMenuLink>
        </NavigationMenuItem>
            
    </NavigationMenu>
  );
};

export default Sidebar;
