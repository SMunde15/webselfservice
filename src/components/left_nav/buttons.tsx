// import * as React from 'react';
// import './BlockComponents.css';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
// import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
// import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
// import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
// import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';




// interface SelectedListItemProps {
//   selectedIndex: number;
//   onListItemClick: (index: number) => void;
// }

// export default function SelectedListItem(props: SelectedListItemProps) {
//   const { selectedIndex, onListItemClick } = props;

//   const handleListItemClick = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
//     onListItemClick(index);
//   };

//   return (
//     <Box
//       sx={{
//         width: '100%',
//         maxWidth: 360,
//         '@media (max-width: 600px)': { maxWidth: '100%' },
//       }}
//     >
//       <List component="nav" aria-label="main mailbox folders">
//         <ListItemButton
//           selected={selectedIndex === 0}
//           onClick={(event) => handleListItemClick(event, 0)}
//           sx={{
//             display: 'flex',
//             padding: '15px 10px',
//             alignItems: 'center',
//             alignSelf: 'stretch',
//             borderRadius: '7px',
//             backgroundColor: selectedIndex === 0 ? 'rgba(255, 255, 255, 0.26)' : 'transparent',
//             '&:hover': {
//               backgroundColor: 'rgba(255, 255, 255, 0.26)',
//               color: '#ececec',
//             },
//             '&:active': {
//               backgroundColor: 'rgba(255, 255, 255, 0.26)',
//               color: '#ececec',
//             },
//           }}
//         >
//           <ListItemIcon sx={{ color: '#FFFFFF' }}>
//             <DashboardOutlinedIcon />
//           </ListItemIcon>
//           <ListItemText
//             primary="Dashboard"
//             primaryTypographyProps={{
//               style: {
//                 color: '#FFFFFF',
//                 fontSize: '14px',
//                 fontStyle: 'normal',
//                 fontWeight: 400,
//                 lineHeight: '20px',
//               },
//             }}
//           />
//         </ListItemButton>
//         <ListItemButton
//           selected={selectedIndex === 1}
//           onClick={(event) => handleListItemClick(event, 1)}
//           sx={{
//             display: 'flex',
//             padding: '15px 10px',
//             alignItems: 'center',
//             alignSelf: 'stretch',
//             borderRadius: '7px',
//             backgroundColor: selectedIndex === 1 ? '#d6e4ea' : 'transparent',
//             '&:hover': {
//               backgroundColor: 'rgba(255, 255, 255, 0.26)',
//               color: '#6c6c6c',
//             },
//             '&:active': { backgroundColor: '#FFFFFF42', color: '#ececec' },
//           }}
//         >
//           <ListItemIcon sx={{ color: '#FFFFFF' }}>
//             <PaymentsOutlinedIcon />
//           </ListItemIcon>
//           <ListItemText
//             primary="Paybill"
//             primaryTypographyProps={{
//               style: {
//                 color: '#FFF',
//                 fontSize: '14px',
//                 fontStyle: 'normal',
//                 fontWeight: 400,
//                 lineHeight: '20px',
//               },
//             }}
//           />
//         </ListItemButton>
//         <ListItemButton
//           selected={selectedIndex === 2}
//           onClick={(event) => handleListItemClick(event, 2)}
//           sx={{
//             display: 'flex',
//             padding: '15px 10px',
//             alignItems: 'center',
//             alignSelf: 'stretch',
//             borderRadius: '7px',
//             backgroundColor: selectedIndex === 2 ? 'rgba(255, 255, 255, 0.26)' : 'transparent',
//             '&:hover': {
//               backgroundColor: 'rgba(255, 255, 255, 0.26)',
//               color: '#ececec',
//             },
//             '&:active': { backgroundColor: 'rgba(255, 255, 255, 0.26)', color: '#ececec' },
//           }}
//         >
//           <ListItemIcon sx={{ color: '#FFFFFF' }}>
//             <ReceiptLongOutlinedIcon />
//           </ListItemIcon>
//           <ListItemText
//             primary="View Bill"
//             primaryTypographyProps={{
//               style: {
//                 color: '#FFF',
//                 fontSize: '14px',
//                 fontStyle: 'normal',
//                 fontWeight: 400,
//                 lineHeight: '20px',
//               },
//             }}
//           />
//         </ListItemButton>
//         <ListItemButton
//           selected={selectedIndex === 3}
//           onClick={(event) => handleListItemClick(event, 3)}
//           sx={{
//             display: 'flex',
//             padding: '15px 10px',
//             alignItems: 'center',
//             alignSelf: 'stretch',
//             borderRadius: '7px',
//             backgroundColor: selectedIndex === 3 ? 'rgba(255, 255, 255, 0.26)' : 'transparent',
//             '&:hover': {
//               backgroundColor: 'rgba(255, 255, 255, 0.26)',
//               color: '#ececec',
//             },
//             '&:active': { backgroundColor: '#71878f', color: '#972323' },
//           }}
//         >
//           <ListItemIcon sx={{ color: '#FFFFFF' }}>
//             <FolderCopyOutlinedIcon />
//           </ListItemIcon>
//           <ListItemText
//             primary="Bill and Payment History"
//             primaryTypographyProps={{
//               component: 'div',
//               style: {
//                 display: 'inline',
//                 whiteSpace: 'nowrap',
//                 color: '#FFF',
//                 fontSize: '14px',
//                 fontStyle: 'normal',
//                 fontWeight: 400,
//                 lineHeight: '20px',
//               },
//             }}
//           />
//         </ListItemButton>
//       </List>
//       <List component="nav" aria-label="secondary mailbox folder">
//         <ListItemButton
//           selected={selectedIndex === 4}
//           onClick={(event) => handleListItemClick(event, 4)}
//           sx={{
//             marginTop: '180px',
//             display: 'flex',
//             padding: '15px 10px',
//             alignItems: 'center',
//             alignSelf: 'stretch',
//             borderRadius: '7px',
//             backgroundColor: selectedIndex === 4 ? 'rgba(255, 255, 255, 0.26)' : 'transparent',
//             '&:hover': {
//               backgroundColor: 'rgba(255, 255, 255, 0.26)',
//               color: '#ececec',
//             },
//             '&:active': { backgroundColor: '#71878f', color: '#972323' },
//           }}
//         >
//           <ListItemIcon sx={{ color: '#FFFFFF' }}>
//             <Person2OutlinedIcon />
//           </ListItemIcon>
//           <ListItemText
//             primary="Profile"
//             primaryTypographyProps={{
//               style: {
//                 color: '#FFF',
//                 fontSize: '14px',
//                 fontStyle: 'normal',
//                 fontWeight: 400,
//                 lineHeight: '20px',
//               },
//             }}
//           />
//         </ListItemButton>
//         <ListItemButton
//           selected={selectedIndex === 5}
//           onClick={(event) => handleListItemClick(event, 5)}
//           sx={{
//             display: 'flex',
//             padding: '15px 10px',
//             alignItems: 'center',
//             alignSelf: 'stretch',
//             borderRadius: '7px',
//             backgroundColor: selectedIndex === 5 ? 'rgba(255, 255, 255, 0.26)' : 'transparent',
//             '&:hover': {
//               backgroundColor: 'rgba(255, 255, 255, 0.26)',
//               color: '#ececec',
//             },
//             '&:active': { backgroundColor: '#71878f', color: '#972323' },
//           }}
//         >
//           <ListItemIcon sx={{ color: '#e82636' }}>
//             <LogoutOutlinedIcon />
//           </ListItemIcon>
//           <ListItemText
//             primary="Logout"
//             primaryTypographyProps={{
//               style: {
//                 color: '#e82636',
//                 fontSize: '14px',
//                 fontStyle: 'normal',
//                 fontWeight: 400,
//                 lineHeight: '20px',
//               },
//             }}
//           />
//         </ListItemButton>
//       </List>
//     </Box>
//   );
// }


import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {  Grid, Container } from '@mui/material';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import './left_nav.scss'


export default function ButtonList() {
  return (
    <><Stack direction="column" spacing={2}>
      <Button className="normal-button" variant="contained" startIcon={<DashboardOutlinedIcon />}>
      Dashboard
    </Button>
      <Button className="normal-button" variant="contained" startIcon={<PaymentsOutlinedIcon />}>
      Pay Bill
      </Button>
      <Button className="normal-button" variant="contained" startIcon={<ReceiptLongOutlinedIcon />}>
      View Bill
      </Button>
      <Button className="normal-button" variant="contained" startIcon={<FolderCopyOutlinedIcon />}>
      Billing and Payment History
      </Button>
      <Container sx={{ height:{xs : '10rem' , sm : '5rem'}  }} />
      <Button className="normal-button" variant="contained" startIcon={<Person2OutlinedIcon />}>
      Profile
      </Button>
      <Button className="logout" variant="contained" startIcon={<LogoutOutlinedIcon />} color="error">
      Logout
      </Button>
    </Stack>
    <Stack spacing={10}>
    </Stack>
    
    </>
  );
}