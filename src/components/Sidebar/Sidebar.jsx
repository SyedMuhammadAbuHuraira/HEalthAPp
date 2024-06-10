import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { menuOptions } from "../../constants";

const Sidebar = () => {
  return (
    <div className="w-3/12 ml-20 mt-20">
      <div className="flex flex-col justify-center">
      <Avatar size={32} icon={<UserOutlined />} className="h-14 p-6  w-14 bg-[#cc1647] hover:bg-white hover:text-[#cc1647] hover: cursor-pointer" />
        {menuOptions.map((option) => (
          <div key={option.key} className="shadow-2xl rounded-full h-14 p-5  w-14 hover:bg-[#cc1647]
          hover:text-white hover: cursor-pointer">
            <option.Icon className="text-[#cc1647]  hover:text-white" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
