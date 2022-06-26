import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup"
import EditSelect from "./EditUserSelect";


const EditUserPageBody = () => {
  const locate = useLocation()
  // console.log(locate)
  
  const accessLevel = [
    {value:90, label:"Admin"},
    {value:30, label:"View only"}
  ]

  const initialValues = {
    userName:"",
    name:"",
    email:"",
    accessLevel:""
  }

  const locateValues = {
    userName:locate.state.userName,
    name:locate.state.name,
    email:locate.state.email,
    accessLevel:locate.state.accessLevel
  }

  const validation = Yup.object({
    userName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),

    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),

    email: Yup.string().email("Invalid email address").required("Required"),

    // password: Yup.string()
    //   .required("Please enter your password.")
    //   .min(4, "Your password is too short."),

    // confirmPassword: Yup.string()
    //   .required("Please retype your password.")
    //   .oneOf([Yup.ref("password")], "Your passwords do not match."),

    accessLevel: Yup.string().required("Select language"),
  })

 const submit = (values, { resetForm }) => {
    console.log(JSON.stringify(values, null, 2));
    resetForm();
  }

  // const {userName,name,email} = locate.state
  // const [userName, setUserName] = useState(locate.state.userName)
  // const [name, setName] = useState(locate.state.name)
  // const [email, setEmail] = useState(locate.state.email)
  // const [accessLevel, setAccessLevel] = useState(locate.state.accessLevel)

// const submitHandler = (e)=>{
//   e.preventDefault();
//   const data = {
//     userName,
//     name,
//     email,
//     accessLevel
//   }
//   console.log(data)
// }

const [stateLocate, setStateLocate] = useState(null)

useEffect(()=>{
setStateLocate(locateValues )
},[])




  return (
    <Formik  
    initialValues={stateLocate || initialValues}
    enableReinitialize
    validationSchema={validation}
    onSubmit={submit}
    >
      {(formik) => (
   <div className=" max-w-[1240px] mx-auto bg-white py-6">
   <div className="max-w-[1000px] mx-auto p-6 ">
     
     <form className=" max-w-[600px] flex flex-col md:items-center" onSubmit={formik.handleSubmit}>

       <div className="mb-6">
         <label className="mr-9 inline-block  w-[150px]" htmlFor="userName">Username</label>
         <input
           className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
           id="userName"
           name="userName"
           type="text"
           placeholder="enter username"
           onBlur={formik.handleBlur}
           onChange={formik.handleChange}
           value={formik.values.userName}
         />
         {formik.errors.userName && formik.touched.userName ? (
           <div>{formik.errors.userName}</div>
         ) : null}
       </div>

       <div className="mb-6">
         <label className="mr-9 inline-block w-[150px]" htmlFor="name">Name</label>
         <input
           className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
           id="name"
           name="name"
           type="text"
           placeholder="enter Name"
           onBlur={formik.handleBlur}
           onChange={formik.handleChange}
          value={formik.values.name}
         />
          {formik.errors.name && formik.touched.name ? (
           <div>{formik.errors.name}</div>
         ) : null}
       </div>

       <div className="mb-6">
         <label className="mr-9 inline-block w-[150px]" htmlFor="email">Email</label>
         <input
           className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
           id="email"
           name="name"
           type="email"
           placeholder="enter email"
           onBlur={formik.handleBlur}
           onChange={formik.handleChange}
          value={formik.values.email}
         />
          {formik.errors.email && formik.touched.email ? (
           <div>{formik.errors.email}</div>
         ) : null}
       </div>

       <div className="mb-6">
         <label className="mr-9 inline-block w-[150px]">Password</label>
         <input
           className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
           type="password"
           placeholder="password"
         />
       </div>

       <div className="mb-6">
         <label className="mr-9 inline-block w-[150px]">
           Confirm Password
         </label>
         <input
           className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
           type="password"
           placeholder="confirm password"
         />
       </div>

       <div className="flex">
         <label className="mr-9 inline-block w-[150px]" htmlFor="accessLevel">AccessLevel</label>
         
         <EditSelect
         id="accessLevel"
         name="accessLevel"
         value={formik.values.accessLevel}
         onChange={(value) =>
          formik.setFieldValue("accessLevel", value.value)
        }
        options={accessLevel}
         />
           {formik.errors.accessLevel ? (
                  <div>{formik.errors.accessLevel}</div>
                ) : null}
       </div>

       {/* <div>
         <label className="mr-9 inline-block w-[150px]">AccessLevel</label>
         <select  className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm" value={accessLevel} onChange={(e)=>{
           const selected = e.target.value
           setAccessLevel(selected)         
         }}>
           <option value={90}>Admin</option>
           <option value={30}>View only</option>
         </select>
       </div> */}

       <div>
         <button className="bg-[#007A7A] text-white text-[14px] p-2 rounded-lg px-6 py-2 mt-6 hover:bg-[#0a8d8d]" type="submit">
           Submit
         </button>
       </div>
       
     </form>
   </div>
 </div>
      )}
    </Formik>
  );
};

export default EditUserPageBody;
