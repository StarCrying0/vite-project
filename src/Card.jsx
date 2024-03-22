import { useState } from "react";
import Form from "./Form";
import Detail from "./Detail";
function Card({ info, addList, detail, addDetail }) {
  const [showDialog, setShowDialog] = useState(false);

  function toggleDialog() {
    setShowDialog(!showDialog);
  }
  const keepTrack = [
    {
      id: 1,
      img: "bx bx-calendar text-xl p-[2px]",
      info: "Finished Project",
      color: "flex bg-purple-400 items-center w-[25%] p-2 h-full rounded-2xl",
      num: 13,
    },
    {
      id: 2,
      img: "bx bxs-download text-xl p-[2px]",
      info: "Upcoming",
      color: "flex bg-purple-500 items-center w-[25%] p-2 h-full rounded-2xl",
      num: 13,
    },
    {
      id: 3,
      img: "bx bx-menu text-xl p-[2px]",
      info: "Total Project",
      color: "flex bg-pink-600 items-center w-[25%] p-2 h-full rounded-2xl",
      num: 13,
    },
    {
      id: 4,
      img: "bx bx-loader-circle text-xl p-[2px]",
      info: "In progress",
      color: "flex bg-pink-500 items-center w-[25%] p-2 h-full rounded-2xl",
      num: 4,
    },
  ];

  return (
    <>
      <div className="w-[64%] bg-gray-200 h-full rounded-t-3xl px-10 pb-10 pl-14 overflow-auto">
        <div className="sticky top-0 bg-gray-200 pt-6 pb-1">
          <div className="flex justify-between mb-8">
            <p className="text-xl font-bold">Projects</p>
            <button
              className="btn bg-gray-300 p-3 text-[15px] font-semibold rounded-lg hover:-translate-y-1"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Add New Project
            </button>
          </div>
        </div>

        <Form
          addList={addList}
          showDialog={showDialog}
          setShowDialog={setShowDialog}
          addDetail={addDetail}
        />

        <div className="flex gap-5">
          {keepTrack.map((e) => (
            <div className={e.color} key={e.id}>
              <div className="mx-2 bg-gray-200 w-[20%] flex items-center justify-center rounded-md">
                <i className={e.img}></i>
              </div>
              <div className="text-white">
                <p className="text-[10px]">{e.info}</p>
                <p className="text-[13px] font-bold">{e.num}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="gap-5 mt-4 grid grid-cols-3">
          {info.map((e) => (
            <div className="bg-white rounded-xl p-3" key={e.id}>
              <div className="flex justify-between text-[12px] mb-2">
                <p className="text-gray-400">{e.startDate}</p>
                <i className="bx bx-dots-vertical-rounded text-[20px]"></i>
              </div>

              <div className="border-b-1">
                <p className="text-[11px]">{e.company}</p>
                <p className="font-bold">{e.position}</p>
                <div
                  className={`mt-4 rounded-full px-5  inline-block py-1 ${
                    e.type === "Full Time"
                      ? "bg-red-200"
                      : e.type === "Part Time"
                      ? "bg-purple-200"
                      : "bg-yellow-200"
                  }`}
                >
                  <p
                    className={`text-[10px] font-bold ${
                      e.type === "Full Time"
                        ? "text-red-800"
                        : e.type === "Part Time"
                        ? "text-purple-800"
                        : "text-yellow-800"
                    } mx-auto`}
                  >
                    {e.type}
                  </p>
                </div>
              </div>
              <div className="border-t-2 border-gray-200 mt-4"></div>

              <div className="flex mt-2 justify-end">
                <div className="bg-purple-400 mt-3 py-2 px-4 rounded-full">
                  <button
                    onClick={() =>
                      document.getElementById(`modal_${e.id}`).showModal()
                    }
                    className="text-sm text-white"
                  >
                    See Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Detail detail={detail} />
      </div>
    </>
  );
}
export default Card;
