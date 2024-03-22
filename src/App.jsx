import Header from "./Header";
import SideBar from "./SideBar";
import Message from "./Message";
import Card from "./Card";
import Form from "./Form";
import { useState } from "react";
function App() {
  const [project, setProject] = useState([
    {
      id: 1,
      startDate: "12-12-2022",
      endDate: "01-03-2023",
      company: "ABA",
      position: "Web Designing",
      type: "Full Time",
      description:
        "I working on frontend Design using React Js with Tailwind Css",
    },
    {
      id: 2,
      startDate: "01-01-2022",
      endDate: "01-03-2023",
      company: "APD",
      position: "Mobile App",
      type: "Part Time",
      description:
        "I working on frontend Design using React Js with Tailwind Css",
    },
    {
      id: 3,
      startDate: "01-02-2023",
      endDate: "01-03-2024",
      company: "KOSIGN",
      position: "UX-UI Design",
      type: "Freelance",
      description:
        "I working on frontend Design using React Js with Tailwind Css",
    },
  ]);
  const [detail, setDetail] = useState([
    {
      id: 1,
      position: "Web Designing",
      type: "Full Time",
      startDate: "12-12-2022",
      endDate: "01-03-2023",
      company: "ABA",
      description:
        "I'm working on frontEnd Design using ReactJS with TailwindCSS.",
      bg_color: "bg-red-200",
    },
    {
      id: 2,
      position: "Mobile App",
      type: "Part Time",
      startDate: "01-01-2022",
      endDate: "03-04-2022",
      company: "APD",
      description:
        "I am working as a Mobile app developer for an e-commerce project.",
      bg_color: "bg-purple-200",
    },
    {
      id: 3,
      position: "UX-UI Design",
      type: "Freelance",
      startDate: "01-02-2023",
      endDate: "03-04-2024",
      company: "KOSIGN",
      description:
        "I'm working as a UX-UI designer on 2 projects there. One is Leaving management System and another one is E-commerce project.",
      bg_color: "bg-yellow-200",
    },
  ]);
  const addList = (newList) => {
    setProject([...project, newList]);
  };
  const addDetail = (newDetail) => {
    setDetail([...project, newDetail]);
  };
  return (
    <>
      <div className="w-[80%] bg-white mx-auto my-10 rounded-3xl">
        <Header />
        <div className="w-full flex justify-between h-[600px]">
          <SideBar />
          <Card
            info={project}
            addList={addList}
            detail={detail}
            addDetail={addDetail}
          />
          <Message />
        </div>
        {/* <Form addList={addList}/> */}
      </div>
    </>
  );
}
export default App;
