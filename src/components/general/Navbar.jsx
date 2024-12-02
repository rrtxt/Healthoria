import { Icon } from "@iconify/react/dist/iconify.js";

const NavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 h-[100px] flex w-full items-end justify-center">
      <div className="absolute z-0 bg-black1 h-[65px] w-full rounded-tr-[32px]"></div>
      <div className="relative z-1 mb-[30px] flex items-center justify-center gap-[19px]">
        <div className=" bg-blue3 w-[48px] h-[48px] rounded-full flex items-center justify-center">
          <Icon icon="heroicons-outline:menu-alt-2" width="32" height="32" />
        </div>
        <div className=" bg-blue3 w-[48px] h-[48px] rounded-full flex items-center justify-center">
          <Icon icon="solar:shield-user-bold" width="32" height="32" />
        </div>
        <div className=" bg-blue2 w-[72px] h-[72px] rounded-full flex items-center justify-center">
          <Icon icon="ri:sword-fill" width="40" height="40" />
        </div>
        <div className=" bg-yellow2 w-[48px] h-[48px] rounded-full flex items-center justify-center">
          <Icon icon="ph:scroll-fill" width="32" height="32" />
        </div>
        <div className=" bg-blue3 w-[48px] h-[48px] rounded-full flex items-center justify-center">
          <Icon icon="mdi:anvil" width="32" height="32" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
