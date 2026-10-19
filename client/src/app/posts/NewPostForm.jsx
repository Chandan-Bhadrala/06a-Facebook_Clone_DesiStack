import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const NewPostForm = (isPostFormOpen, setIsPostFormOpen) => {
  return (
    <div>
      <Card>
        <CardContent className="p-4">
          <div className="flex space-x-4">
            <Avatar>
              <AvatarImage />
              <AvatarFallback className="dark:bg-gray-400">C</AvatarFallback>
            </Avatar>
            <Dialog open={isPostFormOpen} onOpenChange={setIsPostFormOpen}>
              <DialogTrigger className="w-full">
                <Input
                  placeholder={`What's on your mind, Chandan Bhadrala`}
                  readonly
                  className="cursor-pointer rounded-full h-12 dark:bg=[rgb(58,59,60)] placeholder:text-gray-500 dark:placeholder:text-gray-400"
                />
                <Separator className="my-2 dark:bg-slate-400"/>
                <div className="flex justify-between">

                </div>
              </DialogTrigger>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewPostForm;
