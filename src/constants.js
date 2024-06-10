import { FaBars, FaBook, FaCogs, FaRunning } from "react-icons/fa";
import { FaBowlFood, FaCalendar, FaClock, FaComputer } from "react-icons/fa6";

export const menuOptions = [
  {
    key: "Calender",
    path: "/",
    Icon: FaCalendar,
  },
  {
    key: "About",
    path: "/about",
    Icon: FaComputer,
  },
  {
    key: "Profit",
    path: "/profit",
    Icon: FaBars,
  },
  {
    key: "Navigation",
    path: "/navigation",
    Icon: FaBars,
  },
  {
    key: "Book",
    path: "/book",
    Icon: FaBook,
  },
  {
    key: "Settings",
    path: "/settings",
    Icon: FaCogs,
  },
];

export const notesByUser = [
  {
    id: 1,
    userName: "Adam Locker",
    content: "This is the Adam Locker note",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F390194755193238684%2F&psig=AOvVaw3QV9Q2vJ4qJ9VnJ5J6nKcV&ust=1634188926801000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjZw4z7zvMCFQAAAAAdAAAAABAD",
  },
  {
    id: 2,
    userName: "Branda Smith",
    content: "This note belongs to Branda Smith",
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F390194755193238684%2F&psig=AOvVaw3QV9Q2vJ4qJ9VnJ5J6nKcV&ust=1634188926801000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjZw4z7zvMCFQAAAAAdAAAAABAD",
  },
];

export const patient = [
  {
    id: 1,
    name: "John Smith",
    Gender: "Male",
    Age: 72,
    Height: "5'2''",
    Weight: "145lbs",
    Condition: "Diabaetes",
    phone: "1234567890",
  },
];

export const stepsData = [
    {Icon:FaClock, title:"Time", value: "1hr45min"},
    {Icon:FaRunning, title:"Distance", value: "2.98 miles"},
    {Icon:FaBowlFood, title:"kcal", value: "630"},
];
