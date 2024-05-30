import React from 'react'
import {useTable, useSortBy, usePagination} from "react-table"


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
    // rows,
    page,    // you should take page if you get the pagination and also map the page not for the row       
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state:{pageIndex},    // if you give the page of index 
    pageCount,             // if you are count the page
    gotoPage,      
  } = useTable({
    columns,
    data,
    initialState:{
      pageSize:5,  // how many pagesize you want 
      // pageIndex:3   // what is you first page index, jab jab reload karenge page number 5 par hi rahega  

    }  
    
  },
useSortBy,
usePagination
)


  const props = getTableProps()
  






  return (
    <div className='ccontainer'>
      <table {...props}>  {/* you can write like this:  <table {...getTableProps()}> what is ... this ? ... -> this is spread  */}
        <thead className='Heading'>

          {/* before <tr> tag i will write the headerGroups  */}
          {
            headerGroups.map((hg) => (

              <tr {...hg.getHeaderGroupProps()}>
                
                {
                  hg.headers.map((header) => (
                    <th {...header.getHeaderProps(header.getSortByToggleProps())} className='content-tag'>
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
            page.map((row) => {
              prepareRow(row);
              return(
                <tr {...row.getRowProps()}>
                  {
                    row.cells.map((cell) => (
                      <td {...cell.getCellProps()} className='content-tag'>
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
      <div>
        <button disabled={pageIndex === 0} onClick={() => gotoPage(0)}>First</button>
        <button disabled={!canPreviousPage} onClick={previousPage}>Prev</button>
        <span>{pageIndex+1} of {pageCount}</span>
        <button disabled={!canNextPage} onClick={nextPage}>Next</button>
        <button disabled={pageIndex === pageCount - 1} onClick={() => gotoPage(pageCount - 1)}>last</button>
      </div>

    </div>
  )
}

export default App