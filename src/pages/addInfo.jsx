import { useState } from "react";
import { Link } from "react-router-dom";
import CustomInput from "../components/form/input/customInput";
import CustomSelect from "../components/form/select/customSelect";
const AddInfo = () => {
  const SkillsListTemplate = [
    "Data structures and algorithms",
    "Database and SQL",
    "Object-oriented programming (OOP) languages",
    "Integrated development environments (IDEs)",
    "Cloud computing",
    "Web development",
    "Containers",
    "Text editors",
    "Git version control",
  ];
  const [editId, setEditId] = useState(-1);
  const [data, setData] = useState(
    localStorage.getItem("data") && JSON.parse(localStorage.getItem("data"))
      ? JSON.parse(localStorage.getItem("data"))
      : []
  );
  const dataTemplate = {
    firstName: "",
    lastName: "",
    age: "",
    skill: [],
  };
  const [currentData, setCurrentData] = useState(dataTemplate);

  const inputChangeHandler = (e, field) => {
    setCurrentData({ ...currentData, [field]: e.target.value });
  };

  const skillAddHandler = (e) => {
    setCurrentData({
      ...currentData,
      skill: [...currentData.skill, e.target.value],
    });
  };

  const skillRemoveHandler = (itemIndex) => {
    let newData = currentData.skill;
    newData.splice(itemIndex, 1);
    setCurrentData({
      ...currentData,
      skill: [...newData],
    });
  };

  const submitButtonClickHandler = () => {
    validateData(currentData);
  };

  const validateData = (newData) => {
    if (newData.firstName === "") {
      SaveData(false);
    } else if (newData.lastName === "") {
      SaveData(false);
    } else if (newData.age === "") {
      SaveData(false);
    } else if (newData.skill === []) {
      SaveData(false);
    } else {
      SaveData(true);
    }
  };

  const SaveData = (valid) => {
    if (valid) {
      if (editId !== -1) {
        let newdata = data;
        newdata[editId] = currentData;
        setData(newdata);
        localStorage.setItem("data", JSON.stringify(newdata));
        setCurrentData({ ...dataTemplate });
        setEditId(-1);
      } else {
        setData([...data, currentData]);
        localStorage.setItem("data", JSON.stringify([...data, currentData]));
        setCurrentData({ ...dataTemplate });
      }
    } else {
      alert("Form Data Is Not Valid!");
    }
  };

  const editClickHandler = (id) => {
    setEditId(id);
    setCurrentData(data[id]);
  };

  const deleteClickHandler = (id) => {
    let newData = [...data];
    newData.splice(id, 1);
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  return (
    <div className="bg-slate-300">
      <div className="md:container md:mx-auto py-10 sm:my-0 min-h-screen h-full p-3">
        <div className="flex-row gap-6 ">
          <div className="md:m-4 sm:m-0">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <CustomInput
                      inputChangeHandler={inputChangeHandler}
                      currentData={currentData}
                      Title={"First name"}
                      Id={"firstName"}
                      Type={"text"}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <CustomInput
                      inputChangeHandler={inputChangeHandler}
                      currentData={currentData}
                      Title={"Last name"}
                      Id={"lastName"}
                      Type={"text"}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <CustomInput
                      inputChangeHandler={inputChangeHandler}
                      currentData={currentData}
                      Title={"Age"}
                      Id={"age"}
                      Type={"number"}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <CustomSelect
                      templateList={SkillsListTemplate}
                      addNewHandler={skillAddHandler}
                      removeItemHandler={skillRemoveHandler}
                      currentData={currentData.skill}
                      id={"skills"}
                      title={"Skills"}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={submitButtonClickHandler}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
          <div className="md:col-span-1 mt-4 md:px-4 sm:px-0">
            <table className="table-auto w-full overflow-hidden shadow sm:rounded-md">
              {data && data.length ? (
                <>
                  <thead>
                    <tr className="bg-slate-200 border-b border-slate-400">
                      <th className="p-2">Name</th>
                      <th className="p-2">Age</th>
                      <th className="p-2">Skill</th>
                      <th className="p-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, idx) => (
                      <tr
                        className="odd:bg-white even:bg-slate-50 text-center"
                        key={idx}
                      >
                        <td className="p-2">
                          {item.firstName} {item.lastName}
                        </td>
                        <td className="p-2">{item.age}</td>
                        <td className="p-2">
                          {item.skill.map((skill, idx) => (
                            <span
                              className="inline-flex justify-center rounded-md border border-transparent bg-slate-200 py-1 px-1.5 text-sm font-medium text-black shadow-sm focus:outline-none focus:ring-2 hover:bg-slate-300 focus:ring-offset-2 my-2 mr-1"
                              key={idx}
                            >
                              {skill}
                            </span>
                          ))}
                        </td>
                        <td className="py-2 text-center">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 m-1"
                            onClick={() => deleteClickHandler(idx)}
                          >
                            Delete
                          </button>
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 m-1"
                            onClick={() => editClickHandler(idx)}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </>
              ) : (
                <tbody>
                  <tr className="bg-white text-center">
                    <td>
                      <div className="my-6">No Data Is Available</div>
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
          <div className="my-4 md:px-4 sm:px-0 text-right">
            <Link
              to={"/charts"}
              className="inline-flex justify-center rounded-md border border-transparent bg-rose-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2"
            >
              Show Charts Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddInfo;
