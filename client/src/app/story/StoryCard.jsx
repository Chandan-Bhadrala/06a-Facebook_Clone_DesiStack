import { Card } from "@/components/ui/card";

const StoryCard = ({ isAddStory, story }) => {
  const handleStoryClick = () => {};

  return (
    <>
      <Card
        classname="w-40 h-60 relative overflow-hidden group cursor-pointer rounded-xl"
        onClick={isAddStory ? undefined : handleStoryClick}
      ></Card>
    </>
  );
};

export default StoryCard;
