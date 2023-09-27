import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import "../App.css";
function PaginatedTable() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Number of items per page

  // Sample data (you can replace this with your data source)
  const sampleData = [
    { id: 101, name: 'Company 1' },
    { id: 102, name: 'Company 2' },
    { id: 103, name: ' Company 3' },
    { id: 104, name: ' Company 4' },
    { id: 105, name: ' Company 5' },
    { id: 106, name: ' Company 6' },
    { id: 107, name: ' Company 7' },
    { id: 108, name: ' Company 8' },
    { id: 109, name: ' Company 9' },
    { id: 110, name: ' Company 10' },
    { id: 111, name: ' Company 11' },
    // Add more data as needed
  ];

  useEffect(() => {
    // Calculate the start and end index for the current page
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice the data to get the items for the current page
    const itemsForCurrentPage = sampleData.slice(startIndex, endIndex);

    // eslint-disable-next-line
    setData(itemsForCurrentPage);
    // eslint-disable-next-line
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className=" tbTup  ">
    <div className='tbOup '>
      <table className='   text-center  ' >
        <thead className=' table-active  borderTableth ' >
          <tr className=' borderTable'>
            <th className=' borderTable'>Tender ID</th>
            <th className=' borderTable' >Tender Name</th>
          </tr>
        </thead>
        <tbody className=' table-warning borderTable  table-active'>
          {data.map((item) => (
            <tr className=' borderTable' key={item.id}>
              <td className=' borderTable'>{item.id}</td>
              <td className=' borderTable'>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
      className='pagination text-center mx-2'
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={Math.ceil(sampleData.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
    </div>
  );
}

export default PaginatedTable;
