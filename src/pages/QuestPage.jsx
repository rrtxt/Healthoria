import QuestCard from "../components/quest/QuestCard";

const QuestPage = () => {
  return (
    <div>
      <h1 className="font-sourceSans3 font-semibold italic text-black ml-[32px] mt-[15px]">
        Daily Quest
      </h1>
      <ul className="mt-[28px] flex flex-col justify-center items-center">
        <li>
          <QuestCard />
        </li>
      </ul>
    </div>
  );
};

export default QuestPage;
