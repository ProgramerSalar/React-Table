import React from 'react'
import {useTable, useSortBy} from "react-table"


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
    gender:"feMale",
    salary:20000
  },
  {
    id:10,
    gender:"Robot",
    salary:4
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
    
  },
useSortBy)


  const props = getTableProps()
  






  return (
    <div className='ccontainer'>
      <table {...props}>  {/* you can write like this:  <table {...getTableProps()}> what is ... this ? ... -> this is spread  */}
        <thead>

          {/* before <tr> tag i will write the headerGroups  */}
          {
            headerGroups.map((hg) => (

              <tr {...hg.getHeaderGroupProps()}>
                
                {
                  hg.headers.map((header) => (
                    <th {...header.getHeaderProps(header.getSortByToggleProps())}>
                      {
                        header.render("Header")    //  show the UI in Header  
                      }
                      {
                        header.isSorted && (
                          <span>
                            {
                              header.isSortedDesc ? " D" : " A"
                            }
                          </span>
                        )
                      }
                    </th>
                  ))
                }
            </tr>
            ))
          }




        </thead>
        <tbody {...getTableBodyProps()}>
          {
            rows.map((row) => {
              prepareRow(row);
              return(
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>
                        {
                          cell.render("Cell")
                        }

                      </td>
                    ))
                  }

                </tr>
              )
            })
          }

        </tbody>
        
      </table>

    </div>
  )
}

export default App