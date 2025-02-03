import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className=" h-16 flex gap-4  ">
        <div className="w-[90%] flex justify-between items-center m-auto">
          <div>
            <img
              src="https://images-platform.99static.com//CSsrGrz0M4afBGYk1e3W1iMEa6c=/1759x1132:2800x2173/fit-in/500x500/projects-files/160/16075/1607511/37cfbdae-164c-4d70-884f-c3d629db72c0.png"
              className="w-8 h-8"
            />
          </div>
          <div className='flex gap-6'>
            <div className="flex gap-6 pt-2">
              <h1 className="">Home</h1>
              <h1 className="">Services</h1>
              <h1 className=" ">Blog</h1>
              <h1 className="">About Us</h1>
              <h1 className="">Contact Us</h1>
            </div>
            <button className="bg-green-600 px-6 py-2 rounded text-white">BOOK A CALL</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar
