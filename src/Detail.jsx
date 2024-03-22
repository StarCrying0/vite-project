function Detail({ detail }) {
  return (
    <>
      {detail.map((e) => (
        <dialog
          id={`modal_${e.id}`}
          className={`w-[30%] p-5 rounded-xl ${
            e.type === "Full Time"
              ? "bg-red-200"
              : e.type === "Part Time"
              ? "bg-purple-200"
              : "bg-yellow-200"
          }`}
          key={e.id}
        >
          <div className="flex items-center justify-between">
            <p className="font-bold">{e.company}</p>
            <button
              onClick={() => document.getElementById(`modal_${e.id}`).close()}
            >
              <i className="bx bx-x absolute top-3 right-3 rounded-full p-2"></i>
            </button>
          </div>
          <p>Position: {e.position}</p>
          <p>
            Duration: from {e.startDate} to {e.endDate}
          </p>
          <p>Description: {e.description}</p>
        </dialog>
      ))}
    </>
  );
}
export default Detail;
