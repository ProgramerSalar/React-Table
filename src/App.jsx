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
    getTableProps,     // this is return to some props 
    getTableBodyProps, 
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  })


  const props = getTableProps()



/


  return (
    <div className='ccontainer'>
      <table {...props}>  {/* you can write like this:  <table {...getTableProps()}> what is ... this ? ... -> this is spread  */}
        <thead>

          {/* before <tr> tag i will write the headerGroups  */}
          {
            headerGroups.map((hg) => (

              <tr {...hg.props}>
            
              <th>Id</th>
              <th>Gender</th>
              <th>Salary</th>
            </tr>
            ))
          }




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