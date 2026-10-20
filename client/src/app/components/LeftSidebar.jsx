import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useSidebarStore from "@/store/sidebarStore";
import { Bell, Home, MessageCircle, User, Users, Video } from "lucide-react";

const LeftSidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore();
  return (
    <aside
      className={`fixed top-16 left-0 h-full w-60 p-4 transform transition-transform duration-200 ease-in-out md:translate-x-0 flex flex-col z-50 md:z-0 ${isSidebarOpen ? "translate-x-0 bg-white dark:bg-[rgb(36,37,38)] shadow-lg" : "-translate-x-full"} ${isSidebarOpen?"md:hidden":""} md:bg-transparent md:shadow-none`}
    >
      <div className="flex flex-col h-full overflow-y-auto">
        {/* Navigation Menu */}
        <nav className="space-y-4 flex-grow ">
          <div className="flex items-center space-x-2 cursor-pointer ">
            <Avatar className="h-10 w-10">
              <AvatarImage />
              <AvatarFallback className="dark:bg-gray-400">C</AvatarFallback>
            </Avatar>
            <span className="font-semibold">Chandan Bhadrala</span>
          </div>

          <Button variant="ghost" className="w-full justify-start">
            <Home className="mr-4" /> Home
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-4" /> Friends
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Video className="mr-4" /> Video
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <User className="mr-4" /> Profile
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <MessageCircle className="mr-4" /> Messages
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Bell className="mr-4" />
            Notification
          </Button>
        </nav>

        {/* Footer Section */}
        <div className="mb-16">
          <Separator className="my-4" />
          <div className="flex items-center space-x-2 mb-4 cursor-pointer ">
            <Avatar className="h-10 w-10">
              <AvatarImage />
              <AvatarFallback className="dark:bg-gray-400">C</AvatarFallback>
            </Avatar>
            <span className="font-semibold">Chandan Bhadrala</span>
          </div>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>Privacy · Terms · Advertising ·</p>
            <p>· Meta © 2024</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
