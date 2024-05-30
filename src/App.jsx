import React from 'react'
import {useTable} from "react-table"


const data = [

  {
    id:1,
    gender:"Male",
    salary:40000
  },
  {
    id:1,
    gender:"Male",
    salary:40000
  },
  {
    id:1,
    gender:"Male",
    salary:40000
  },
  {
    id:1,
    gender:"Male",
    salary:40000
  },
  {
    id:1,
    gender:"Male",
    salary:40000
  },
  {
    id:1,
    gender:"Male",
    salary:40000
  },

]

const columns = [


  // what is the difference between Header and accessor, Header is see to in the UI, accessor means id 
  // if you want to Header then use the accessor 
  {
    Header:"Id",
    accessor:"id"
  },
  {
    Header:"Gender",
    accessor:"gender"
  },
  {
    Header:"Salary",
    accessor:"salary"
  },



]

const App = () => {

  const {
    getTableProps,
    getTableBodyProps, 
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  })



  return (
    <div className='ccontainer'>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Gender</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((i) => (
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.gender}</td>
                <td>{i.salary}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}

export default App