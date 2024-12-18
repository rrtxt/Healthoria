import { Icon } from "@iconify/react/dist/iconify.js";

const QuestCard = ({ quest, onClick }) => {
  const theme = quest.isClaimed ? "bg-black2" : "bg-blue2";
  return (
    <div
      className="bg-white2 w-[338px] h-[100px] shadow-[0_4px_6px_0px_rgba(20,50,65,0.08)] flex 
      rounded-r-[9px] rounded-tl-[5px] rounded-bl-[30px]">
      <div
        className={`w-[98px] ${theme} flex flex-col justify-center items-center
      rounded-r-[9px] rounded-tl-[5px] rounded-bl-[30px]`}>
        <Icon
          icon="iconamoon:lightning-1-fill"
          width={40}
          height={40}
          className=" text-yellow1"
        />
        <h3 className=" font-sourceSans3">AP +{quest.reward}</h3>
      </div>
      <div className="bg-white2 w-[70%] rounded-r-[9px]">
        <h3 className="font-sourceSans3 font-semibold text-[16px] my-[6px] ml-[8px] text-black">
          {quest.task}
        </h3>
        <div className="h-[2px] bg-blue2 pr-[16px]"></div>
        <p className="text-black font-sourceSans3 text-[12px] mt-[5px] ml-[8px]">
          {quest.progress}
        </p>
        <div className="flex items-end justify-end">
          <div
            className={`font-sourceSans3 mr-[16px] ${theme} 
          flex items-center justify-center w-[66px] h-[23px]
          rounded-tr-[2px] rounded-tl-[9px] rounded-br-[9px] rounded-bl-[2px]`}
            onClick={onClick}>
            Claim
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestCard;
