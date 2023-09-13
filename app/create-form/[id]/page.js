"use client";
import { useState } from "react";
import Image from "next/image";

// import bg2 from "../../(components)/images/db1.jpg";
// import bg2 from "../../(components)/images/d25.png";
import logo from "../../(components)/images/logo.png";

export default function Home({ params }) {
  const [title, setTitle] = useState("");
  const [formContent, setFormContent] = useState([]);
  const [onEdit, setOnEdit] = useState(false);
  const [textField, setTextField] = useState("");
  const [editedField, setEditedField] = useState("");

  // Capitalize function
  function titleCase(str) {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
  }

  const addQuestion = () => {
    const field = {
      name: `question_${formContent.length}`,
      label: "Untitled question",
      question_type: "name",
      list: [],
    };
    setFormContent([...formContent, field]);
  };

  const editField = (fieldName, fieldLabel) => {
    const formFields = [...formContent];
    const fieldIndex = formFields.findIndex((f) => f.name === fieldName);
    if (fieldIndex > -1) {
      formFields[fieldIndex].label = fieldLabel;
      setFormContent(formFields);
    }
  };

  const editFieldType = (fieldName, fieldLabel) => {
    const formFields = [...formContent];
    const fieldIndex = formFields.findIndex((f) => f.name === fieldName);
    if (fieldIndex > -1) {
      formFields[fieldIndex].question_type = fieldLabel;
      setFormContent(formFields);
    }
  };

  const addFieldOption = (fieldName, option) => {
    const formFields = [...formContent];
    const fieldIndex = formFields.findIndex((f) => f.name === fieldName);
    if (fieldIndex > -1) {
      if (option && option !== "") {
        formFields[fieldIndex].list.push(option);
        setFormContent(formFields);
        setTextField("");
      }
    }
  };

  const createForm = async () => {
    if (title.length <= 0) {
      alert("Form Title is required");
      return;
    }
    const id = params.id;
    const link = `http://localhost:5000/form/${id}`;
    const data = { id, title, form: formContent, link: link };
    console.log(data);
    const response = await fetch(
      "http://localhost:5000/create-form",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    const res = await response.json();
    console.log(res);
    alert("Form Created");
  };

  return (
    <>
      <div className="flex flex-col space-y-10 ">
        <div
          className=" mx-[6%] my-[4px] py-14 rounded-xl border-none  "
          // style={{
          //   backgroundImage: "url(" + `${bg2.src}` + ")",
          //   // width: "100%",
          //   // height: "80%",
          //   position: "sticky",
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          // }}
        >
          <div 
          //   style={{
          //   backgroundImage: "url(" + `${bg2.src}` + ")",
          //   // width: "100%",
          //   // height: "80%",
          //   position: "sticky",
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          // }}
          className="mx-[10%] rounded-2xl py-6 px-6  bg-[#ffffff2a]  shadow-lg ">
            <div className="flex flex-col py-2 space-y-2 p-10 rounded-xl pb-7 shadow-sm bg-[#ffffff39]">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                id="title"
                placeholder="Untitled Form..."
                className="placeholder-gray-700 py-2   rounded-full  bg-transparent text-[150%]  outline-none text-[#111111d4] font-semibold "
                required
              />
              <hr class="h-px my-8  bg-gray-200 border-0 dark:bg-gray-700"></hr>
              <input
                type="Description"
                name="title"
                id="title"
                placeholder="Description.."
                className="placeholder-gray-700 py-2  text-[100%] rounded-full bg-transparent  outline-none text-black"
                required
              />
              <hr class="h-px my-5  bg-gray-200 border-0 dark:bg-gray-600 "></hr>
            </div>

            <div className=" rounded-xl p-8  my-12 bg-[#ffffff39] shadow-sm ">
              <div className="flex flex-col  gap-10  ">
                {formContent.map((field, idx) => {
                  return (
                    <div key={idx}>
                      <div className="flex justify-between items-center space-x-2">
                        <div
                          key={field.name}
                          className="block text-sm font-medium text-gray-700 border border-gray-400 rounded-lg p-3"
                        >
                          {field.question_type === "other" ||
                          field.question_type === "multichoice" ? (
                            onEdit && editedField === field.name ? (
                              <input
                                type="text"
                                className="p-3 outline-none"
                                value={field.label}
                                onChange={(e) =>
                                  editField(field.name, e.target.value)
                                }
                                onBlur={() => {
                                  setOnEdit(false);
                                  setEditedField("");
                                }}
                              />
                            ) : (
                              <label
                                onClick={() => {
                                  setOnEdit(true);
                                  setEditedField(field.name);
                                }}
                                className="p-3 "
                                htmlFor={field.label}
                              >
                                {field.label}
                              </label>
                            )
                          ) : (
                            <label
                              className="p-3"
                              htmlFor={field.question_type}
                            >
                              {titleCase(field.question_type)}
                            </label>
                          )}
                        </div>
                        <div>
                          <select
                            name=""
                            id=""
                            onChange={(e) =>
                              editFieldType(field.name, e.target.value)
                            }
                            className=" bg-transparent "
                          >
                            <option value="name">Name </option>
                            <option value="mobile">Mobile</option>
                            <option value="address">Address</option>
                            <option value="gender">Gender</option>
                            <option value="multichoice">Multichoice</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="my-4">
                        {field.question_type == "name" && (
                          <input
                            type="text"
                            className="p-3 rounded-full w-full bg-transparent outline-none "
                            placeholder={titleCase(field.question_type)}
                          />
                        )}
                        <hr className="h-px my-1  bg-gray-200 border-0 dark:bg-gray-600" />
                        {field.question_type == "mobile" && (
                          <input
                            type="tel"
                            className="p-3 rounded-full w-full bg-transparent outline-none "
                            placeholder={titleCase(field.question_type)}
                          ></input>
                        )}
                        {field.question_type == "address" && (
                          <input
                            type="text"
                            className="p-3 rounded-full w-full bg-transparent outline-none"
                            placeholder={titleCase(field.question_type)}
                          ></input>
                        )}
                        {field.question_type == "gender" && (
                          <input
                            type="text"
                            className="p-3 rounded-full w-full bg-transparent outline-none"
                            placeholder={titleCase(field.question_type)}
                          ></input>
                        )}
                        {field.question_type == "other" && (
                          <input
                            type="text"
                            className="p-3 rounded-full w-full bg-transparent outline-none"
                            placeholder={titleCase(field.question_type)}
                          ></input>
                        )}
                        {field.question_type == "paragraph" && (
                          <textarea
                            rows={4}
                            type="text"
                            className="p-3 rounded-full w-full bg-transparent outline-none"
                            placeholder={field.label}
                          ></textarea>
                        )}
                        {field.question_type == "multichoice" && (
                          <div className="my-4 flex flex-col space-y-2">
                            <select
                              name=""
                              id=""
                              className="p-3 rounded-md w-full block border border-gray-500 outline-none shadow-sm"
                            >
                              {field.list.map((item) => {
                                return (
                                  <option key={item} value={item}>
                                    {item}
                                  </option>
                                );
                              })}
                            </select>
                            <div className="flex gap-3">
                              <input
                                type="text"
                                onChange={(e) => setTextField(e.target.value)}
                                value={textField}
                                placeholder="Add an option"
                                className="px-4 py-2 outline-none border rounded-lg"
                              />
                              <button
                                className="bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
                                onClick={() =>
                                  addFieldOption(field.name, textField)
                                }
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="relative w-full p-5 mt-2">
                <div className="absolute inset-x-3 bottom-0  h-12 flex justify-center">
                  <button
                    onClick={addQuestion}
                    className="inline-flex bg-[#a6792cdd] shadow-md hover:shadow-lg hover:bg-[#b9904af8] duration-300 items-center py-2 px-3 text-[90%]  text-white rounded-full"
                  >
                    Add Question{" "}
                    <span className="ml-2 text-[110%] font-bold">+</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="b mx-[6%] my-[4px] py-12 rounded-lg border-none "
          // style={{
          //   backgroundImage: "url(" + `${bg2.src}` + ")",
          //   // width: "100%",
          //   // height: "80%",
          //   position: "sticky",
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          // }}
        >
          <div  
          className=" mx-[10%] rounded-lg py-6 px-6  bg-[#ffffff2a]">
            <h2 className="text-lg my-4 text-center ">Form Preview</h2>

            <div className="flex flex-col border-t-4 rounded-lg border-gray-700 px-4 py-2">
              <h2 className="text-lg mt-5">{title}</h2>
              <div className="bg-[#ffffff39] shadow-lg rounded-md px-5 py-2 my-10">
                <div className="flex flex-col gap-2">
                  {formContent.map((field) => {
                    return (
                      <div key={field.name}>
                        <div className="flex justify-between items-center space-x-2">
                          <div
                            key={field.name}
                            className="block text-sm font-medium text-gray-700 rounded-lg"
                          >
                            {field.question_type === "other" ||
                            field.question_type === "multichoice" ? (
                              <label
                                onClick={() => {
                                  setOnEdit(true);
                                  setEditedField(field.name);
                                }}
                                className="p-3 "
                                htmlFor={field.label}
                              >
                                {field.label}
                              </label>
                            ) : (
                              <label
                                className="p-3"
                                htmlFor={field.question_type}
                              >
                                {titleCase(field.question_type)}
                              </label>
                            )}
                          </div>
                        </div>

                        <div className="my-4">
                          {field.question_type == "name" && (
                            <input
                              type="text"
                              className="p-3 rounded-md w-full block border border-gray-500 outline-none shadow-sm"
                              placeholder={titleCase(field.question_type)}
                            ></input>
                          )}
                          {field.question_type == "mobile" && (
                            <input
                              type="tel"
                              className="p-3 rounded-md w-full block border border-gray-500 outline-none shadow-sm"
                              placeholder={titleCase(field.question_type)}
                            ></input>
                          )}
                          {field.question_type == "address" && (
                            <input
                              type="text"
                              className="p-3 rounded-md w-full block border border-gray-500 outline-none shadow-sm"
                              placeholder={titleCase(field.question_type)}
                            ></input>
                          )}
                          {field.question_type == "gender" && (
                            <input
                              type="text"
                              className="p-3 rounded-md w-full block border border-gray-500 outline-none shadow-sm"
                              placeholder={titleCase(field.question_type)}
                            ></input>
                          )}
                          {field.question_type == "other" && (
                            <input
                              type="text"
                              className="p-3 rounded-md w-full block border border-gray-500 outline-none shadow-sm"
                              placeholder={titleCase(field.label)}
                            ></input>
                          )}
                          {field.question_type == "paragraph" && (
                            <textarea
                              rows={4}
                              type="text"
                              className="p-3 rounded-md w-full block border border-gray-500 outline-none shadow-sm"
                              placeholder={field.label}
                            ></textarea>
                          )}
                          {field.question_type == "multichoice" && (
                            <select
                              name=""
                              id=""
                              className="p-3 rounded-md w-full block border border-gray-500 outline-none shadow-sm"
                            >
                              {field.list.map((item) => {
                                return (
                                  <option key={item} value={item}>
                                    {item}
                                  </option>
                                );
                              })}
                            </select>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative w-full p-5 mb-12">
              <div className="b-10 h-12 flex justify-center absolute inset-x-3 ">
                <button
                  onClick={createForm}
                  className="inline-flex bg-[#a6792cdd] shadow-md hover:shadow-lg hover:bg-[#b9904af8] duration-300 items-center py-2 px-5 text-[90%]  text-white rounded-full"
                >
                  Create Form
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 text-[80%] text-[rgba(56,56,56,0.93)]">
              <p className="text-center w-[95%]">
                This content is created by the owner of the form. The data you
                submit will be sent to the form owner. Yudiz is not
                responsible for the privacy or security practices of its
                customers, including those of this form owner. Never give out
                your password.
              </p>
              <p className="text-center w-[55%]">
                Powered by Yudiz Forms
                <span className="cursor-pointer hover:underline">
                  | Privacy and cookies | Terms of use
                </span>
                
              </p>
              <Image
                src={logo}
                className="mix-blend-multiply  cursor-pointer h-[12%] w-[18%] max-[650px]:w-[38%] max-[650px]:h-[32%] "
                width={10000}
                height={10000}
                alt="Picture of the Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
