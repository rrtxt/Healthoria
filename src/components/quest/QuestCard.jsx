import { Icon } from "@iconify/react/dist/iconify.js";

const QuestCard = () => {
  return (
    <div
      className="bg-white2 w-[338px] h-[100px] shadow-[0_4px_6px_0px_rgba(20,50,65,0.08)] flex 
      rounded-r-[9px] rounded-tl-[5px] rounded-bl-[30px]">
      <div
        className=" w-[98px] bg-blue2 flex flex-col justify-center items-center
      rounded-r-[9px] rounded-tl-[5px] rounded-bl-[30px]">
        <Icon
          icon="iconamoon:lightning-1-fill"
          width={40}
          height={40}
          className=" text-yellow1"
        />
        <h3 className=" font-sourceSans3">AP +6</h3>
      </div>
      <div className="bg-white2 w-[70%]">
        <h3 className="font-sourceSans3 font-semibold text-[16px] my-[6px] ml-[8px] text-black">
          Run 2 Km
        </h3>
        <div className="h-[2px] bg-blue2 pr-[16px]"></div>
        <p className="text-black font-sourceSans3 text-[12px]">
          Progress 2 Km / 2 Km
        </p>
      </div>
    </div>
  );
};

export default QuestCard;
