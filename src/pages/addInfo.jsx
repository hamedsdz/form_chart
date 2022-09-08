import { useState } from 'react'
import { Link } from 'react-router-dom'
const AddInfo = () => {

  const SkillsList = [
    "Data structures and algorithms",
    "Database and SQL",
    "Object-oriented programming (OOP) languages",
    "Integrated development environments (IDEs)",
    "Cloud computing",
    "Web development",
    "Containers",
    "Text editors",
    "Git version control"
  ]
  const [editId, setEditId] = useState(-1)
  const [data, setData] = useState((localStorage.getItem('data')) && JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : [])
  const dataTemplate = { firstName: '', lastName: '', age: '', skill: SkillsList[0] }
  const [currentData, setCurrentData] = useState(dataTemplate)

  const inputChangeHandler = (e,field) => {
    setCurrentData({ ...currentData, [field]: e.target.value })
  }

  const submitButtonClickHandler = () => {
    validateData(currentData)
  }

  const validateData = (newData) => {
    if (newData.firstName === '') {
      SaveData(false)
    } else if (newData.lastName === '') {
      SaveData(false)
    } else if (newData.age === '') {
      SaveData(false)
    } else if (newData.skill === '') {
      SaveData(false)
    } else {
      SaveData(true)
    }
  }



  const SaveData = (valid) => {
    if (valid) {
      if (editId !== -1) {
        let newdata = [...data]
        newdata[editId] = currentData
        setData(newdata)
        localStorage.setItem('data', JSON.stringify(newdata))
        setCurrentData({ ...dataTemplate })
        setEditId(-1)
      } else {
        setData([...data, currentData])
        localStorage.setItem('data', JSON.stringify([...data, currentData]))
        setCurrentData({ ...dataTemplate })
      }
    } else {
      alert('Form Data Is Not Valid!')
    }
  }

  const editClickHandler = (id) => {
    setEditId(id)
    setCurrentData(data[id])
  }

  const deleteClickHandler = (id) => {
    let newData = [...data]
    newData.splice(id, 1)
    setData(newData);
    localStorage.setItem('data', JSON.stringify(newData))
  }

  return (
    <div className='bg-slate-300'>
      <div className="md:container md:mx-auto py-10 sm:my-0 min-h-screen h-full p-3">
        <div className="flex-row gap-6 ">
          <div className="md:m-4 sm:m-0">
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="first-name"
                      className="mt-1 block w-full bg-slate-200 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500  py-1 px-2 sm:text-sm"
                      onChange={(e) => inputChangeHandler(e,'firstName')}
                      value={currentData.firstName}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 block w-full bg-slate-200 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500  py-1 px-2 sm:text-sm"
                      onChange={(e) => inputChangeHandler(e,'lastName')}
                      value={currentData.lastName}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      id="age"
                      autoComplete="Age"
                      min={0}
                      className="mt-1 block w-full bg-slate-200 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500  py-1 px-2 sm:text-sm"
                      onChange={(e) => inputChangeHandler(e,'age')}
                      value={currentData.age}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                      Skills
                    </label>
                    <select
                      id="skills"
                      name="skills"
                      autoComplete="skills"
                      className="mt-1 block w-full bg-slate-200 rounded-md border border-gray-300 bg-white py-1 px-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      onChange={(e) => inputChangeHandler(e,'skill')}
                      value={currentData.skill}
                    >
                      {SkillsList.map((skill, idx) => (<option value={skill} key={idx}>{skill}</option>))}
                    </select>
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
              {data &&
                data.length ?
                <>
                  <thead>
                    <tr className='bg-slate-200 border-b border-slate-400'>
                      <th className="p-2">Name</th>
                      <th className="p-2">Age</th>
                      <th className="p-2">Skill</th>
                      <th className="p-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, idx) => (
                      <tr className="odd:bg-white even:bg-slate-50 text-center" key={idx}>
                        <td className="p-2">{item.firstName} {item.lastName}</td>
                        <td className="p-2">{item.age}</td>
                        <td className="p-2">{item.skill}</td>
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
                :
                <tbody>
                  <tr className='bg-white text-center'>
                    <td>
                      <div className='my-6'>No Data Is Available</div>
                    </td>
                  </tr>
                </tbody>
              }
            </table>
          </div>
          <div className="my-4 md:px-4 sm:px-0 text-right">
            <Link
              to={'/charts'}
              className="inline-flex justify-center rounded-md border border-transparent bg-rose-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2"
            >
              Show Charts Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddInfo