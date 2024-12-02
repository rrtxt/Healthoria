import { useState } from "react";
import QuestCard from "../components/quest/QuestCard";

const QuestPage = () => {
  const [quests, setQuests] = useState([0, 1, 2]);
  return (
    <div>
      <h1 className="font-sourceSans3 font-semibold italic text-black ml-[32px] mt-[15px]">
        Daily Quest
      </h1>
      <ul className="mt-[28px] flex flex-col justify-center items-center">
        {quests.map((quest, index) => {
          return (
            <li key={index} className="mt-[12px]">
              <QuestCard />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default QuestPage;
