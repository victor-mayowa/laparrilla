import React from "react";
// import DataContext from "../store/storeContext";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
// import DataContext from "../store/storeContext";
import AddSelect from "./AddSelect";

const options = [
  { value: "en", label: "English" },
  { value: "zh", label: "Chinese" },
  { value: "da", label: "Danish" },
  { value: "nl", label: "Dutch" },
  { value: "et", label: "Estonian" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "hu", label: "Hungarian" },
  { value: "it", label: "Italian" },
  { value: "ja", label: "Japanese" },
  { value: "ko", label: "Korean" },
  { value: "nn", label: "Norwegian" },
  { value: "pt", label: "Portuguese" },
  { value: "tr", label: "Turkish" },
  { value: "sr", label: "Serbian" },
  { value: "es", label: "Spanish" },
  { value: "sv", label: "Swedish" },
];

const AddUsersBody = () => {
  const navigate = useNavigate();

  // const dataCtx = useContext(DataContext);


  // const dataCtx = useContext(DataContext)
  // const userData = dataCtx.userData
  // const setUserData = dataCtx.setUserData

  // const [userName, setUserName] = useState("")
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [lang, setLang] = useState("")

  // const submitHandler = (e)=>{
  //   e.preventDefault();
  //   const data = {
  //     userName,
  //     name,
  //     email
  //   }
  //   console.log(data)
  //   // setUserData(data)
  //   // navigate("/users")
  // }
  return (
    <Formik
      initialValues={{
        userName: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        language: "en",
      }}

      enableReinitialize
      validationSchema={Yup.object({
        userName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),

        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),

        email: Yup.string().email("Invalid email address").required("Required"),

        password: Yup.string()
          .required("Please enter your password.")
          .min(4, "Your password is too short."),

        confirmPassword: Yup.string()
          .required("Please retype your password.")
          .oneOf([Yup.ref("password")], "Your passwords do not match."),

        language: Yup.string().required("Select language"),
      })}
      onSubmit={(values, { resetForm }) => {
        console.log(JSON.stringify(values, null, 2));
        console.log(values);
        // setUserData(values)
        resetForm();
        navigate("/users");
      }}
    >
      {(formik) => (
        <div className=" max-w-[1240px] mx-auto bg-white py-6">
          <div className="max-w-[1000px] mx-auto p-6 ">
            <form
              className=" max-w-[600px] flex flex-col md:items-center"
              onSubmit={formik.handleSubmit}
            >
              <div className="mb-6 flex">
                <label
                  htmlFor="userName"
                  className="mr-9 inline-block  w-[150px]"
                >
                  Username
                </label>
                <div>
                  <input
                    className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
                    id="userName"
                    name="userName"
                    type="text"
                    placeholder="enter username"
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.userName && formik.touched.userName ? (
                    <div className="text-red-600 text-[14px] mt-3 ml-2">
                      {formik.errors.userName}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mb-6 flex">
                <label htmlFor="name" className="mr-9 inline-block w-[150px]">
                  Name
                </label>
                <div>
                  <input
                    className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="enter Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.name && formik.touched.name ? (
                    <div className="text-red-600 text-[14px] mt-3 ml-2">
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mb-6 flex">
                <label htmlFor="email" className="mr-9 inline-block w-[150px]">
                  Email
                </label>
                <div>
                  <input
                    className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="enter email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <div className="text-red-600 text-[14px] mt-3 ml-2">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mb-6 flex">
                <label
                  htmlFor="password"
                  className="mr-9 inline-block w-[150px]"
                >
                  Password
                </label>
                <div>
                  <input
                    className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="enter password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <div className="text-red-600 text-[14px] mt-3 ml-2">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mb-6 flex">
                <label
                  htmlFor="confirmPassword"
                  className="mr-9 inline-block w-[150px]"
                >
                  Confirm Password
                </label>
                <div>
                  <input
                    className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="confirm password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                  />
                  {formik.errors.confirmPassword &&
                  formik.touched.confirmPassword ? (
                    <div className="text-red-600 text-[14px] mt-3 ml-2">
                      {formik.errors.confirmPassword}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mb-6 flex">
                <label
                  htmlFor="language"
                  className="mr-9 inline-block w-[150px]"
                >
                  Language
                </label>
                <AddSelect
                  id="language"
                  name="language"
                  value={formik.values.language}
                  onChange={(value) =>
                    formik.setFieldValue("language", value.value)
                  }
                  options={options}
                />
                {formik.errors.language ? (
                  <div>{formik.errors.language}</div>
                ) : null}
              </div>

              {/* <div>
              <label className="mr-9 inline-block w-[150px]">Language</label>
              <select  className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm" value={lang} onChange={(e)=>{
                const selected = e.target.value
                setLang(selected)         
              }}>
                <option value={"en"}>English</option>
                <option value={"zh"}>Chinese</option>
                <option value={"da"}>Danish</option>
                <option value={"nl"}>Dutch</option>
                <option value={"et"}>Estonian</option>
                <option value={"fr"}>French</option>
                <option value={"de"}>German</option>
                <option value={"hu"}>Hungarian</option>
                <option value={"it"}>Italian</option>
                <option value={"ja"}>Japanese</option>
                <option value={"ko"}>Korean</option>
                <option value={"nn"}>Norwegian</option>
                <option value={"pt"}>Portuguese</option>
                <option value={"tr"}>Turkish</option>
                <option value={"sr"}>Serbian</option>
                <option value={"es"}>Spanish</option>
                <option value={"sv"}>Swedish</option>
              </select>
            </div> */}

              <div>
                <button
                  className="bg-[#007A7A] text-white text-[14px] p-2 rounded-lg px-6 py-2 mt-6 hover:bg-[#0a8d8d]"
                  type="submit"
                >
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
export default AddUsersBody;

//     <div className=" max-w-[1240px] mx-auto bg-white py-6">
//       <div className="max-w-[1000px] mx-auto p-6 ">
//         <form className=" max-w-[600px] flex flex-col md:items-center" onSubmit={submitHandler}>

//           <div className="mb-6">
//             <label className="mr-9 inline-block  w-[150px]">name</label>
//             <input
//               className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
//               type="text"
//               placeholder="enter username"
//               value={userName}
//               onChange={(e)=>{
//                 setUserName(e.target.value)
//               }}
//             />
//           </div>

//           <div className="mb-6">
//             <label className="mr-9 inline-block w-[150px]">Name</label>
//             <input
//               className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
//               type="text"
//               placeholder="enter Name"
//               value={name}
//               onChange={(e)=>{
//                 setName(e.target.value)
//               }}
//             />
//           </div>

//           <div className="mb-6">
//             <label className="mr-9 inline-block w-[150px]">Email</label>
//             <input
//               className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
//               type="email"
//               placeholder="enter email"
//               value={email}
//               onChange={(e)=>{
//                 setEmail(e.target.value)
//               }}
//             />
//           </div>

//           <div className="mb-6">
//             <label className="mr-9 inline-block w-[150px]">Password</label>
//             <input
//               className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
//               type="password"
//               placeholder="password"
//             />
//           </div>

//           <div className="mb-6">
//             <label className="mr-9 inline-block w-[150px]">
//               Confirm Password
//             </label>
//             <input
//               className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm"
//               type="password"
//               placeholder="confirm password"
//             />
//           </div>

//           {/* <div>
//             <label className="mr-9 inline-block w-[150px]">Language</label>
//             <select  className="py-2 pl-2 w-[400px] border-[1px] border-slate-600 rounded-sm" value={lang} onChange={(e)=>{
//               const selected = e.target.value
//               setLang(selected)
//             }}>
//               <option value={"en"}>English</option>
//               <option value={"zh"}>Chinese</option>
//               <option value={"da"}>Danish</option>
//               <option value={"nl"}>Dutch</option>
//               <option value={"et"}>Estonian</option>
//               <option value={"fr"}>French</option>
//               <option value={"de"}>German</option>
//               <option value={"hu"}>Hungarian</option>
//               <option value={"it"}>Italian</option>
//               <option value={"ja"}>Japanese</option>
//               <option value={"ko"}>Korean</option>
//               <option value={"nn"}>Norwegian</option>
//               <option value={"pt"}>Portuguese</option>
//               <option value={"tr"}>Turkish</option>
//               <option value={"sr"}>Serbian</option>
//               <option value={"es"}>Spanish</option>
//               <option value={"sv"}>Swedish</option>
//             </select>
//           </div> */}

//           <div>
//             <button className="bg-[#007A7A] text-white text-[14px] p-2 rounded-lg px-6 py-2 mt-6 hover:bg-[#0a8d8d]" type="submit">
//               Submit
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };
