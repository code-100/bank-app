import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Modal from './Modal';
import Dropdowns from './Dropdowns';

const columns = [
  { id: 'bank_name', label: 'Bank', align: 'center', minWidth: 100 },
  { id: 'ifsc', label: 'IFSC', align: 'center', minWidth: 100 },
  {
    id: 'branch',
    label: 'Branch',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'bank_id',
    label: 'Bank ID',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'address',
    label: 'Address',
    minWidth: 200,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
];



function createData(bank_name, ifsc, branch, bank_id, address) {
  return { bank_name, ifsc, branch, bank_id, address };
}


// Styling the components-------------------------------------------------------------------------------

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 700,
  },
  dropdownsAndSearch: {
    position: "fixed",
    top: "0",
    right: "1rem",
    marginTop: "0"
  },
  demoTest: {
    display: "block"
  },
});


function DisplayDetails() {

  // Creating States-------------------------------------------------------------------------------

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [mumbaiData, setMumbaiData] = React.useState([]);
  const [delhiData, setDelhiData] = React.useState([]);
  const [lucknowData, setLucknowData] = React.useState([]);
  const [bangaloreData, setBangaloreData] = React.useState([]);
  const [hyderabadData, setHyderabadData] = React.useState([]);

  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({});

  const [filteredRows, setFilteredRows] = React.useState([]);

  const [city, setCity] = React.useState('MUMBAI');
  const [query, setQuery] = React.useState('ifsc');


  // Fetching data-------------------------------------------------------------------------------

  useEffect(() => {
    fetch(`https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI`)
      .then(res => res.json())
      .then(res => {
        setMumbaiData(res)
      })
  }, []);


  useEffect(() => {
    fetch(`https://vast-shore-74260.herokuapp.com/banks?city=DELHI`)
      .then(res => res.json())
      .then(res => {
        setDelhiData(res)
      })
  }, []);


  useEffect(() => {
    fetch(`https://vast-shore-74260.herokuapp.com/banks?city=LUCKNOW`)
      .then(res => res.json())
      .then(res => {
        setLucknowData(res)
      })
  }, []);


  useEffect(() => {
    fetch(`https://vast-shore-74260.herokuapp.com/banks?city=BANGALORE`)
      .then(res => res.json())
      .then(res => {
        setBangaloreData(res)
      })
  }, []);


  useEffect(() => {
    fetch(`https://vast-shore-74260.herokuapp.com/banks?city=HYDERABAD`)
      .then(res => res.json())
      .then(res => {
        setHyderabadData(res)
      })
  }, []);


  // Filtering rows-------------------------------------------------------------------------------

  const rows = [];

  if (city === "MUMBAI") {
    mumbaiData.forEach((item, i) => {
      rows.push(createData(item.bank_name, item.ifsc, item.branch, item.bank_id, item.address));
    });
  } else if (city === "DELHI") {
    delhiData.forEach((item, i) => {
      rows.push(createData(item.bank_name, item.ifsc, item.branch, item.bank_id, item.address));
    });
  } else if (city === "LUCKNOW") {
    lucknowData.forEach((item, i) => {
      rows.push(createData(item.bank_name, item.ifsc, item.branch, item.bank_id, item.address));
    });
  } else if (city === "BANGALORE") {
    bangaloreData.forEach((item, i) => {
      rows.push(createData(item.bank_name, item.ifsc, item.branch, item.bank_id, item.address));
    });
  } else {
    hyderabadData.forEach((item, i) => {
      rows.push(createData(item.bank_name, item.ifsc, item.branch, item.bank_id, item.address));
    });
  }


  // Event Listeners-------------------------------------------------------------------------------

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function handleClick(row) {
    setOpen(true);
    setModalData(row);
  }

  function handleClose() {
    setOpen(false);
  }

  // Search Query-------------------------------------------------------------------------------

  function onChangeInput(event) {
    var input = event.target.value;

    var filteredArr = [];

    if (city === "MUMBAI") {
      mumbaiData.filter((value) => {
        if (query === "bank_name") {
          if (String(value.bank_name).toLowerCase().startsWith(input) || String(value.bank_name).startsWith(input)) {
            filteredArr.push(value);
          }
        } else if (query === "ifsc") {
          if (String(value.ifsc).toLowerCase().startsWith(input) || String(value.bank_name).startsWith(input)) {
            filteredArr.push(value);
          }
        } else {
          if (String(value.branch).toLowerCase().startsWith(input) || String(value.bank_name).startsWith(input)) {
            filteredArr.push(value);
          }
        }
        return null;

      });
    } else if (city === "DELHI") {
      delhiData.filter((value) => {

        if (query === "bank_name") {
          if (String(value.bank_name).toLowerCase().startsWith(input) || String(value.bank_name).startsWith(input)) {
            filteredArr.push(value);
          }
        } else if (query === "ifsc") {
          if (String(value.ifsc).toLowerCase().startsWith(input) || String(value.bank_name).startsWith(input)) {
            filteredArr.push(value);
          }
        } else {
          if (String(value.branch).toLowerCase().startsWith(input) || String(value.bank_name).startsWith(input)) {
            filteredArr.push(value);
          }
        }
        return null;

      });
    } else if (city === "LUCKNOW") {
      lucknowData.filter((value) => {

        if (query === "bank_name") {
          if (String(value.bank_name).toLowerCase().startsWith(input) || String(value.bank_name).startsWith(input)) {
            filteredArr.push(value);
          }
        } else if (query === "ifsc") {
          if (String(value.ifsc).toLowerCase().startsWith(input) || String(value.bank_name).startsWith(input)) {
            filteredArr.push(value);
          }
        } else {
          if (String(value.branch).toLowerCase().startsWith(input) || String(value.bank_name).startsWith(input)) {
            filteredArr.push(value);
          }
        }
        return null;

      });
    } else if (city === "BANGALORE") {
      bangaloreData.filter((value) => {

        if (query === "bank_name") {
          if (String(value.bank_name).toLowerCase().startsWith(input) || String(value.bank_name).startsWith(input)) {
            filteredArr.push(value);
          }
        } else if (query === "ifsc") {
          if (String(value.ifsc).toLowerCase().startsWith(input) || String(value.bank_name).startsWith(input)) {
            filteredArr.push(value);
          }
        } else {
          if (String(value.branch).toLowerCase().startsWith(input) || String(value.bank_name).startsWith(input)) {
            filteredArr.push(value);
          }
        }
        return null;

      });
    } else {
      hyderabadData.filter((value) => {

        if (query === "bank_name") {
          if (String(value.bank_name).toLowerCase().startsWith(input) || String(value.bank_name).startsWith(input)) {
            filteredArr.push(value);
          }
        } else if (query === "ifsc") {
          if (String(value.ifsc).toLowerCase().startsWith(input) || String(value.bank_name).startsWith(input)) {
            filteredArr.push(value);
          }
        } else {
          if (String(value.branch).toLowerCase().startsWith(input) || String(value.bank_name).startsWith(input)) {
            filteredArr.push(value);
          }
        }
        return null;

      });
    }

    setFilteredRows(filteredArr);
  }


  function handleCChange(city) {
    setCity(city);
  }

  function handleQChange(query) {
    setQuery(query);
  }


  // Creating Table from data-------------------------------------------------------------------------------

  function getTableBody() {
    if (filteredRows.length > 0) {
      return filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={() => { handleClick(row) }}>
            {columns.map((column) => {
              const value = row[column.id];
              return (
                <TableCell key={column.id} align={column.align}>
                  {column.format && typeof value === 'number' ? column.format(value) : value}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })
    } else {
      return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={() => { handleClick(row) }}>
            {columns.map((column) => {
              const value = row[column.id];
              return (
                <TableCell key={column.id} align={column.align}>
                  {column.format && typeof value === 'number' ? column.format(value) : value}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })
    }
  }

  // Rendering Table on the page-------------------------------------------------------------------------------

  return (
    <>
      <div className={classes.dropdownsAndSearch}>
        <Dropdowns
          onSelectCity={
            handleCChange
          }
          onSelectQuery={
            handleQChange
          }
        />
        <form onChange={onChangeInput} noValidate autoComplete="off" onSubmit={e => { e.preventDefault(); }}>
          <TextField id="outlined-basic" label="Query" variant="outlined" />
        </form>
      </div>
      <Paper className={classes.root}>
        <TableContainer className={classes.container} aria-label={city}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {getTableBody()}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <Modal
        open={open}
        close={handleClose}
        modalData={modalData}
      />
    </>
  );
}

export default DisplayDetails;