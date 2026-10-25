import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { MessageCircle, MoreHorizontal, Share2, ThumbsUp } from "lucide-react";

const PostCard = ({ post }) => {
  return (
    <motion.div
      key={post._id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardContent className="p-6 dark:text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3 cursor-pointer">
              <Avatar>
                <AvatarImage />
                <AvatarFallback className="dark:bg-gray-400">C</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold dark:text-white">
                  Chandan Bhadrala
                </p>
                <p className="font-sm text-gray-500">20-06-2026</p>
              </div>
            </div>
            <Button variant="ghost" className="dark:hover:bg-gray-500">
              <MoreHorizontal className="h-4 w-4 dark:text-white" />
            </Button>
          </div>
          <p className="mb-4 dark:text-white">{post?.content}</p>
          {post?.mediaUrl && post.mediaType === "image" && (
            <img
              src={post?.mediaUrl}
              alt="post image"
              className="w-full h-auto rounded-lg mb-4"
            />
          )}
          {post?.mediaUrl && post.mediaType === "video" && (
            <video controls className="w-full h-[500px] rounded-lg mb-4">
              <source
                src={post?.mediaUrl}
                type="video/mp4"
                className="w-full h-auto rounded-lg mb-4"
              />
              Your browser does not support the video playback.
            </video>
          )}
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500 dark:text-gray-400 border-gray-400 hover:border-b-2 cursor-pointer">
              2 likes
            </span>
            <div className=" flex gap-3">
              <span className="text-sm text-gray-500 dark:text-gray-400 border-gray-400 hover:border-b-2 cursor-pointer">
                3 comments
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 border-gray-400 hover:border-b-2 cursor-pointer">
                3 share
              </span>
            </div>
          </div>
          <Separator className="mb-2 dark:bg-gray-400" />

          <div className="flex justify-between mb-2">
            <Button variant="ghost" className={`flex dark:hover:bg-gray-600`}>
              <ThumbsUp className="mr-2 h-4 w-4" /> Like
            </Button>
            <Button variant="ghost" className={`flex dark:hover:bg-gray-600`}>
              <MessageCircle className="mr-2 h-4 w-4" /> Comment
            </Button>
            <Button variant="ghost" className={`flex dark:hover:bg-gray-600`}>
              <Share2 className="mr-2 h-4 w-4" /> Share
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PostCard;
