import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { ImageIcon, Laugh, X } from "lucide-react";

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
                <Separator className="my-2 dark:bg-slate-400" />
                <div className="flex justify-between">
                  <Button
                    variant="ghost"
                    className="flex items-center justify-center"
                  >
                    <ImageIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span className="dark:text-slate-100">Photo</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex items-center justify-center"
                  >
                    <Video className="h-5 w-5 text-red-500 mr-2" />
                    <span className="dark:text-slate-100">Video</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex items-center justify-center"
                  >
                    <Laugh className="h-5 w-5 text-orange-500 mr-2" />
                    <span className="dark:text-slate-100">Feelings</span>
                  </Button>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px] max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-center">Create Post</DialogTitle>
                </DialogHeader>
                <Separator />
                <div className="flex items-center space-x-3 py-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage />
                    <AvatarFallback className="dark:bg-gray-400">
                      C
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Chandan Bhadrala</p>
                  </div>
                </div>
                <Textarea
                  className="min-h-[100px] text-lg"
                  placeholder={`what's on your mind? chandan Bhadrala`}
                />
              </DialogContent>
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="relative mt-4 border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </motion.div>
              </AnimatePresence>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewPostForm;
