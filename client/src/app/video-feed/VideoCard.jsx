"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, MessageCircle, Share2, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Separator } from "@/components/ui/separator";
import VideoComments from "./VideoComments";
import { useState } from "react";

const VideoCard = ({ post }) => {
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);
  const [showComments, setShowComments] = useState(false);
  return (
    <motion.div
      key={post?._id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-[rgb(36,37,38)] shadow-lg rounded-lg overflow-hidden"
    >
      <div>
        <div className="flex items-center justify-between mb-4 px-4 mt-2">
          <div className="flex items-center">
            <Avatar className="h-10 w-10 rounded mr-3">
              <AvatarImage />
              <AvatarFallback className="dark:bg-gray-400">C</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold dark:text-white">Chandan Bhadrala</p>
            </div>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm ">12-11-2026</span>
          </div>
        </div>
        <div className="relative aspect-video bg-black mb-4">
          {post?.mediaUrl && (
            <video controls className="w-full h-[500px] rounded-lg mb-4">
              <source
                src={post?.mediaUrl}
                type="video/mp4"
                className="w-full h-auto rounded-lg mb-4"
              />
              Your browser does not support the video playback.
            </video>
          )}
        </div>

        <div className="flex justify-between items-center px-2 mb-2">
          <div className="flex space-x-4">
            <Button variant="ghost" className={` dark:hover:bg-gray-600`}>
              <ThumbsUp className="mr-2 h-4 w-4" /> <span>Like</span>
            </Button>
            <Button variant="ghost" className={` dark:hover:bg-gray-600`}>
              <MessageCircle className="mr-2 h-4 w-4" /> <span>Comment</span>
            </Button>
            <Dialog
              open={isShareDialogOpen}
              onOpenChange={setIsShareDialogOpen}
            >
              <DialogTrigger asChild>
                <Button variant="ghost" className=" dark:hover:bg-gray-600">
                  <Share2 className="mr-2 h-4 w-4" />
                  <span> Share</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Share this post</DialogTitle>
                  <DialogDescription>
                    Choose how you want to share this post
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col space-y-4 ">
                  <Button onClick={() => handleShare("facebook")}>
                    Share on Facebook
                  </Button>
                  <Button onClick={() => handleShare("twitter")}>
                    Share on Twitter
                  </Button>
                  <Button onClick={() => handleShare("linkedin")}>
                    Share on Linkedin
                  </Button>
                  <Button onClick={() => handleShare("copy")}>Copy link</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <Button variant="ghost" size="sm">
              3 likes
            </Button>
          </div>
        </div>
        <AnimatePresence>
          {showComments && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <VideoComments post={post} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default VideoCard;
