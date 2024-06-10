import { Avatar } from "antd";
import { UserOutlined,CalendarOutlined,BellOutlined } from "@ant-design/icons";
import { FaCalendarWeek, FaPhone } from "react-icons/fa6";

const Header = ({ details }) => {
  const types = ["CRM", "RPM", "CGM", "CVM"];
  return (
    <div className="flex justify-center mt-5">
      <div className="">
        <Avatar size={64} icon={<UserOutlined />} className="h-14 p-6  w-14" />
      </div>
      <div className="ml-5">
        <div className="flex items-center gap-4 mb-2">
          <h1 className="heading">{details.name}</h1>
          <FaPhone size={10} />
          <p className="text-sm"> {details.phone}</p>
        </div>
        <div className="flex gap-10">
          {Object.entries(details)
            .filter(
              ([ent]) => ent !== "name" && ent !== "id" && ent !== "phone"
            )
            .map(([key, value]) => (
              <div key={key} className="flex flex-col ">
                <h2 className="font-bold text-lg">{value}</h2>
                <h1>{key}</h1>
              </div>
            ))}
        </div>
      </div>
      <div className="flex gap-4 ml-10">
        {types.map((type,i) => (
          <div className="bg-white font-bold rounded-full h-12  w-20 p-4  pl-5 shadow-xl text-sm" key={i}>
            {type}
          </div>
        ))}
      </div>
      <div className="bg-white  rounded-full h-12 p-3 whitespace-nowrap w-25 ml-10 text-sm shadow-xl">
        This Month
      </div>
      <div className="bg-white  rounded-full h-12 whitespace-nowrap w-25 ml-10 p-3  shadow-xl">
       <CalendarOutlined size={24}/>
      </div>
      <div className="bg-white  rounded-full ml-10 h-12 w-25 p-3 shadow-xl">
       <BellOutlined style={{fontSize:"20px"}}/>
      </div>
      <div className="bg-red-500  rounded-full ml-10 h-12 w-25 p-3 shadow-xl">
        ZV
      </div>
    </div>
  );
};

export default Header;
