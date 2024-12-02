import { useState } from "react";
import QuestCard from "../components/quest/QuestCard";
import NavBar from "../components/general/Navbar";

const QuestPage = () => {
  const questsContent = [
    {
      id: 1,
      task: "Run 2 Km",
      progress: "Progress 2 Km / 2 Km",
      reward: "6",
      isClaimed: false,
    },
    {
      id: 2,
      task: "Complete 10 push-ups",
      progress: "Progress 10 / 10 push-ups",
      reward: "4",
      isClaimed: true,
    },
    {
      id: 3,
      task: "Complete 10 sit-ups",
      progress: "Progress 5 / 10 sit-up",
      reward: "3",
      isClaimed: false,
    },
  ];
  const [quests, setQuests] = useState(questsContent);
  const claimQuest = (index) => {
    const updatedQuest = [...quests];
    console.log(updatedQuest);
    updatedQuest[index].isClaimed = !updatedQuest[index].isClaimed;
    setQuests(updatedQuest);
  };

  return (
    <div>
      <h1 className="font-sourceSans3 font-semibold italic text-black ml-[32px] mt-[15px]">
        Daily Quest
      </h1>
      <ul className="mt-[28px] flex flex-col justify-center items-center">
        {quests.map((quest, index) => {
          return (
            <li key={index} className="mt-[12px]">
              <QuestCard quest={quest} onClick={() => claimQuest(index)} />
            </li>
          );
        })}
      </ul>
      <NavBar />
    </div>
  );
};

export default QuestPage;
