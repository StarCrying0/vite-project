import { useState } from "react";
function Form({ addList, showDialog, setShowDialog, addDetail }) {
  const [id, setId] = useState(4);
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  function addToList(e) {
    e.preventDefault();
    const newList = {
      id: id,
      position: position,
      company: company,
      type: type,
      startDate: startDate,
      endDate: endDate,
      description: description
    };
    const newDetail = {
      id: id,
      position: position,
      type: type,
      startDate: startDate,
      company:company,
      endDate: endDate,
      description: description
    };
    setId(id + 1);
    addList(newList);
    addDetail(newDetail);
    setPosition("");
    setCompany("");
    setType("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setShowDialog(!showDialog);
    document.getElementById("my_modal_1").close();
  }
  return (
    <>
      <dialog
        id="my_modal_1"
        className="w-[30%] bg-white p-4 mx-auto rounded-lg"
      >
        <disv className="w-full h-full bg-cyan-200"></disv>
        <p className="text-center">Input your information</p>
        <button onClick={() => document.getElementById("my_modal_1").close()}>
          <i className="bx bx-x absolute top-3 right-3 bg-gray-200 rounded-full p-2"></i>
        </button>
        <form action="" className="flex flex-col" onSubmit={addToList}>
          <label htmlFor="" className="text-[11px]">
            POSITION
          </label>
          <input
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            type="text"
            name=""
            id=""
            className="rounded-[5px] mt-2 bg-gray-200 py-2 px-4 text-sm border-2 focus:outline-none focus:border-blue-600"
            placeholder="UX-UI Design"
            required
          />
          <label htmlFor="" className="text-[11px] mt-2">
            COMPANY
          </label>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            name=""
            id=""
            className="rounded-[5px] mt-2 bg-gray-200 py-2 px-4 text-sm border-2 focus:outline-none focus:border-blue-600"
            placeholder="KSHRD Center"
            required
          />
          <label htmlFor="type-select" className="text-[13px] mt-2">
            Type
          </label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            name="type"
            className="rounded-[5px] mt-2 bg-gray-200 py-2 px-4 text-sm border-2 focus:outline-none focus:border-blue-600"
          >
            <option value="">--Choose any Option--</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Freelance">Freelance</option>
          </select>

          <div className="flex w-full justify-between">
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-[11px] mt-2">
                START DATE
              </label>
              <input
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                type="date"
                name=""
                id=""
                required
                className="w-[90%] rounded-[5px] mt-2 bg-gray-200 py-2 px-4 text-sm border-2 focus:outline-none focus:border-blue-600"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-[11px] mt-2">
                END DATE
              </label>
              <input
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                type="date"
                name=""
                id=""
                required
                className="w-[90%] rounded-[5px] mt-2 bg-gray-200 py-2 px-4 text-sm border-2 focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          <label htmlFor="" className="text-[11px] mt-2">
            DESCIPTION
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name=""
            id=""
            className="rounded-[5px] mt-2 bg-gray-200 py-2 px-4 text-sm border-2 focus:outline-none focus:border-blue-600 h-[80px] resize-none overflow-auto"
            placeholder="Describe what you do"
            required
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-3 text-white bg-blue-600 p-2 w-20 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}
export default Form;
