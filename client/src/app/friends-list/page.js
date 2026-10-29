"use client";

import { useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import { FriendCardSkeleton, NoFriendsMessage } from "@/lib/Skeleton";
import FriendRequest from "./FriendRequest";
import FriendSuggestion from "./FriendSuggestion";

const page = () => {
  const [loading, setLoading] = useState(false);
  const friendRequest = [{}];
  const friendSuggestions = [{}];
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[rgb(36,37,38)]">
      <LeftSidebar />
      <main className="ml-0 md:ml-64 mt-16 p-6">
        <h1 className="text-2xl font-bold mb-6">Friends Requests</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            <FriendCardSkeleton />
          ) : friendRequest.length === 0 ? (
            <NoFriendsMessage
              text="No friend requests"
              description="Looks like you're all caught up! Why not explore and connect with new
      people?"
            />
          ) : (
            friendRequest.map((friend) => <FriendRequest friend={friend} />)
          )}
        </div>

        <h1 className="text-2xl font-bold mb-6">People you may know</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            <FriendCardSkeleton />
          ) : friendSuggestions.length === 0 ? (
            <NoFriendsMessage
              text="
            No friend suggestions"
              description="Looks like you're all caught up! Why not explore and connect with new
      people?"
            />
          ) : (
            friendSuggestions.map((friend) => (
              <FriendSuggestion friend={friend} />
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default page;
