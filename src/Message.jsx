import React, { useState } from "react";

function Message() {
  const [star, setStar] = useState([
    {
      id: 1,
      img: "./src/Images/ppl1.jpg",
      name: "David",
      message:
        "Hey tell me about progress of project? Waiting for your response",
      date: "21 July",
      like: false,
    },
    {
      id: 2,
      img: "./src/Images/ppl2.jpg",
      name: "Stephanie",
      message:
        "I got your first assignment. It was quite good. You can start work on next assignment",
      date: "19 July",
      like: true,
    },
    {
      id: 3,
      img: "./src/Images/ppl3.jpg",
      name: "William",
      message:
        "I want some changes in previous work you sent me. Waiting for your reply.",
      date: "17 July",
      like: false,
    },
    {
      id: 4,
      img: "./src/Images/ppl4.jpg",
      name: "Alona",
      message: "I am really impressed from your work. Keep doing great work",
      date: "15 July",
      like: true,
    },
    {
      id: 5,
      img: "./src/Images/ppl5.jpg",
      name: "Hira",
      message: "When you start redesign of app? Previous project was perfect.",
      date: "13 July",
      like: false,
    },
    {
      id: 6,
      img: "./src/Images/ppl6.jpg",
      name: "Ghulam",
      message:
        "I want to let you know I am agree on that project. Looking for anther good one.",
      date: "11 July",
      like: false,
    },
    {
      id: 7,
      img: "./src/Images/ppl2.jpg",
      name: "Mina",
      message:
        "You did a great job for the previous project. Looking forward for another one next time.",
      date: "13 July",
      like: true,
    },
    {
      id: 8,
      img: "./src/Images/ppl4.jpg",
      name: "Noona",
      message: "How is the project going? I'm waiting to see...",
      date: "13 July",
      like: true,
    },
  ]);

  const toggleLike = (id) => {
    setStar((e) =>
      e.map((check) =>
        check.id === id ? { ...check, like: !check.like } : check
      )
    );
  };

  return (
    <>
      <div className="w-[30%] overflow-auto">
        <div className="flex justify-between h-[30px] w-full items-center py-8 px-6 sticky top-0 bg-white">
          <p className="font-semibold">Client Message</p>
          <p className="px-10 font-bold text-xl pb-2">...</p>
        </div>
        {star.map((msg) => (
          <div className="w-full" key={msg.id}>
            <div className="border-t-2 border-gray-200 p-4 flex">
              <img
                src={msg.img}
                alt=""
                className="size-14 rounded-full mr-5 mt-2"
              />
              <div className="w-full">
                <div className="flex items-center justify-between w-full">
                  <p className="font-semibold">{msg.name}</p>
                  <i
                    className={
                      msg.like
                        ? "bx bxs-star pr-6 cursor-pointer"
                        : "bx bx-star pr-6 cursor-pointer"
                    }
                    onClick={() => toggleLike(msg.id)}
                  ></i>
                </div>
                <p className="w-[95%] text-[13px] text-gray-500">
                  {msg.message}
                </p>
                <p className="text-sm text-gray-400 text-end pr-6">
                  {msg.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Message;
