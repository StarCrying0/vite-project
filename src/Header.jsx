function Header() {
  return (
    <>
      <div className="w-full p-5 flex justify-between pb-2">
        <p className="text-2xl font-bold px-24">Portfolio</p>
        <div className="flex gap-3 items-center px-10">
          <div className="relative">
            <i className="bx bx-bell text-3xl"></i>
            <div className="size-2 bg-red-700 absolute top-1 right-1 rounded-full"></div>
          </div>
          <img
            src="./src/Images/pf.jpg"
            alt="profile image"
            className="size-10 rounded-full"
          />
          <p className="font-semibold">Jong Suk</p>
        </div>
      </div>
    </>
  );
}
export default Header;
