import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TablePagination from '@mui/material/TablePagination';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Grid } from '@mui/material';


function StickyHeadTable1() {
  interface Column {
    id: 'name' | 'code' | 'population' | 'size' | 'density';
    label: React.ReactNode;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
  }

  const columns: readonly Column[] = [
    { id: 'name', label: <strong>Bill ID</strong>, minWidth: 170 },
    { id: 'code', label: <strong>Bill Date</strong>, minWidth: 100 },
    {
      id: 'population',
      label: <strong>Due Date</strong>,
      minWidth: 170,
      align: 'right',
      format: (value: number) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: <strong>Amount Due(AED)</strong>,
      minWidth: 170,
      align: 'right',
      format: (value: number) => value.toLocaleString('en-US'),
    },
    {
      id: 'density',
      label: <strong>Action</strong>,
      minWidth: 170,
      align: 'right',
      format: (value: number) => value.toFixed(2),
    },
  ];

  interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: string;
  }

  function createData(name: string, code: string, population: number, size: number): Data {
    const density = ""; 
    return { name, code, population, size, density };
  }

      const rows = [
        createData('India', 'IN', 1324171354, 3287263),
        createData('China', 'CN', 1403500365, 9596961),
        createData('Italy', 'IT', 60483973, 301340),
        createData('United States', 'US', 327167434, 9833520),
        createData('Canada', 'CA', 37602103, 9984670),
        createData('Australia', 'AU', 25475400, 7692024),
        createData('Germany', 'DE', 83019200, 357578),
        createData('Ireland', 'IE', 4857000, 70273),
        createData('Mexico', 'MX', 126577691, 1972550),
        createData('Japan', 'JP', 126317000, 377973),
        createData('France', 'FR', 67022000, 640679),
        createData('United Kingdom', 'GB', 67545757, 242495),
        createData('Russia', 'RU', 146793744, 17098246),
        createData('Nigeria', 'NG', 200962417, 923768),
        createData('Brazil', 'BR', 210147125, 8515767),
      ];
      
  
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return (
      <Paper sx={{ display: 'table', width: '1000px', height: '700px', margin: 'auto', borderRadius: '5px', border: '1px solid rgba(0, 0, 0, 0.12)', background: '#FFF', overflow: 'auto', alignItems: "flex-start", gap: "1px", position: 'relative' }}>
      <TableContainer sx={{ height: 678, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
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
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === 'density' ? (
                              <>
                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                <PrintOutlinedIcon fontSize="small" style={{ marginLeft: '4px', cursor: 'pointer', width: '20px', height: '20px', flexShrink: 0, color: '#982737' }} />
                                <FileDownloadOutlinedIcon fontSize="small" style={{ cursor: 'pointer', width: '20px', height: '20px', flexShrink: 0, color: '#982737' }} />
                              </>
                            ) : (
                              column.format && typeof value === 'number' ? column.format(value) : value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            alignSelf: 'flex-end', overflow:'hidden'
          }}
        />
      </Paper>
    );
}


function generateRandomAmount(): number {
  return Math.floor(Math.random() * 1000 + 1);
}

function StickyHeadTable2() {
  interface Column {
    id: 'paymentId' | 'paymentDate' | 'dueDate' | 'amountDue' | 'action';
    label: React.ReactNode;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
  }


  const columns: readonly Column[] = [
    { id: 'paymentId', label: <strong>Payment ID</strong>, minWidth: 170 },
    { id: 'paymentDate', label: <strong>Payment Date</strong>, minWidth: 100 },
    {
      id: 'dueDate',
      label: <strong>Due Date</strong>,
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'amountDue',
      label: <strong>Amount Due(AED)</strong>,
      minWidth: 170,
      align: 'right',
      format: (value: number) => value.toLocaleString('en-US'),
    },
    {
      id: 'action',
      label: <strong>Action</strong>,
      minWidth: 170,
      align: 'right',
      format: (value: number) => value.toFixed(2),
    },
  ];

  interface PaymentData {
    paymentId: string;
    paymentDate: string;
    dueDate: string;
    amountDue: number;
    action: string
  }

  function createPaymentData(paymentId: string, paymentDate: string, dueDate: string, amountDue: number, action: string): PaymentData {
    return { paymentId, paymentDate, dueDate, amountDue , action};
  }

  const rows = Array.from({ length: 100 }, (_, index) =>
    createPaymentData(`Payment-${index + 1}`, `2023-08-0${index + 1}`, `2023-08-2${index + 1}`, generateRandomAmount() ,'')
  );

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ display: 'flex', width: '1000px', height: '700px', margin: 'auto', flexDirection: 'column', alignItems: 'flex-start', gap: '10px', borderRadius: '5px', border: '1px solid rgba(0, 0, 0, 0.12)', background: '#FFF', overflow: 'hidden', position: 'relative' }}>
    <TableContainer sx={{ maxHeight: 678, width: '100%', position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.paymentId}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                        {column.id === 'action' && (
                          <>
                            <PrintOutlinedIcon
                              fontSize="small"
                              style={{ marginLeft: '1%', cursor: 'pointer', width: '20px', height: '20px', flexShrink: 0, color: '#982737' }}
                            />
                            <FileDownloadOutlinedIcon
                              fontSize="small"
                              style={{ cursor: 'pointer', width: '20px', height: '20px', flexShrink: 0, color: '#982737' }}
                            />
                          </>
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{
          alignSelf: 'flex-end',
          overflow: 'hidden',
        }}
      />
    </Paper>
  );
}

function TabPanelOne() {
  return <StickyHeadTable1 />;
}

function TabPanelTwo() {
  return <StickyHeadTable2 />;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
<Grid container item xs={12}>
    <Box sx={{ width: "1000px", height: "700px", display: "flex", margin: "auto", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", marginTop: "50px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%", marginLeft: "24%", marginTop: "25%" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="BILLING" {...a11yProps(0)} />
          <Tab label="PAYMENTS" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        {value === 0 ? <TabPanelOne /> : <TabPanelTwo />}
      </Box>

    </Box>
    </Grid>

  );
}
