import React from "react";



const EditPageBody = () => {

  return (
    <div className=" max-w-[1240px] mx-auto bg-white py-6">

      <div className="max-w-[1000px] mx-auto py-6">
          <form >
              <div className="mb-6">
                  <label className="mr-9 inline-block  w-[150px]">Username</label>
                  <input className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm" type="text"  placeholder="enter username" />
              </div>

              <div className="mb-6">
                  <label className="mr-9 inline-block w-[150px]">Name</label>
                  <input className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm" type="text"  placeholder="enter Name" />
              </div>

              <div className="mb-6">
                  <label className="mr-9 inline-block w-[150px]">Email</label>
                  <input className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm" type="email"  placeholder="enter email" />
              </div>

              <div className="mb-6">
                  <label className="mr-9 inline-block w-[150px]">Password</label>
                  <input className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm" type="password"  placeholder="enter email" />
              </div>

              <div className="mb-6">
                  <label className="mr-9 inline-block w-[150px]">Confirm Password</label>
                  <input className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm" type="password"  placeholder="enter email" />
              </div>

            <button>Submit</button>
          </form>
        
      </div>

    </div>
  );
};

export default EditPageBody;
