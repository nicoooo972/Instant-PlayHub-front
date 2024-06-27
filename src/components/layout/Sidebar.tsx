import { MdDashboard, MdSettings, MdShoppingBag, MdHelp, MdLogout } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button";
import MenuLink from "../menuLink";
import { FaCog, FaComments, FaHashtag, FaHome, FaUser, FaUsers } from "react-icons/fa";
import { useAuth } from '@/provider/authProvider'; // Import the useAuth hook
import { Link } from "react-router-dom";

interface SidebarProps {
    isCollapsed: boolean
}

const Sidebar = ({ isCollapsed }: SidebarProps) => {
    const { token } = useAuth(); // Use the useAuth hook to get the token

    // Function to generate menu items based on the token
    const getMenuItems = (isAuthenticated: boolean) => {
        const items = [
            {
                title: "Home",
                items: [
                    {
                        title: "Home",
                        path: "/",
                        icon: <FaHome size={20} />
                    },
                ],
            },
            {
                title: "Games",
                items: [
                    {
                        title: "Morpion",
                        path: "/morpion",
                        icon: <FaHashtag size={20} />
                    },
                    {
                        title: "Uno",
                        path: "/uno",
                        icon: <FaHashtag size={20} />
                    },
                    {
                        title: "Connect Four",
                        path: "/connect-four",
                        icon: <FaHashtag size={20} />
                    },
                    {
                        title: "Breakout",
                        path: "/breakout",
                        icon: <FaHashtag size={20} />
                    },
                ],
            },
            {
                title: "Autres",
                items: [
                    {
                        title: "Paramètres",
                        path: "/settings",
                        icon: <FaCog size={20} />
                    },
                ],
            }
        ];

        if (isAuthenticated) {
            items.splice(1, 0, {
                title: "User",
                items: [
                    {
                        title: "Account",
                        path: "/account",
                        icon: <FaUser size={20} />
                    },
                    {
                        title: "Friends",
                        path: "/friends",
                        icon: <FaUsers size={20} />
                    },
                    {
                        title: "Chat",
                        path: "/chat",
                        icon: <FaComments size={20} />
                    },
                ],
            });
        }

        return items;
    };

    const menuItems = getMenuItems(Boolean(token));

    return (
        <nav>
            <div className="p-2 flex gap-4 items-center">
                {token ? (
                    <>
                        <Avatar className="w-12 h-12">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>US</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-bold">Username</p>
                            <span className="font-light italic text-xs">Role</span>
                        </div>
                    </>
                ) : (
                    <Link to={"/login"} className="w-full">
                        <Button variant="outline" className="w-full">
                            Login
                        </Button>
                    </Link>
                )}
            </div>
            {menuItems.map((category) => (
                <div key={category.title}>
                    <Separator />
                    <ul className="flex flex-col gap-6 p-2">
                        <li key={category.title} className="flex flex-col gap-3">
                            {category.items.map((item) => (
                                <MenuLink key={item.title} item={item} isCollapsed={isCollapsed} />
                            ))}
                        </li>
                    </ul>
                </div>
            ))}
            {token && (
                !isCollapsed ? (
                    <div className="p-2">
                        <Button className="w-full justify-start gap-2" variant="ghost">
                            <MdLogout size={20} />Déconnexion
                        </Button>
                    </div>
                ) : (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild className="flex">
                                <Button variant="ghost" size="icon" className="m-auto">
                                    <MdLogout size={20} />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <p>Déconnexion</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )
            )}
        </nav>
    )
};

export default Sidebar;
