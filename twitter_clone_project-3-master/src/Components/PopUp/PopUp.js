import * as React from "react";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import {FaUserCircle} from 'react-icons/fa';
import {isLogOut} from '../../Recoil/RecoilAtom'
import {useRecoilState} from 'recoil'


export default function PopUp() {
    const [logOut , setLogOut] = useRecoilState(isLogOut)

  const navigate = useNavigate()
console.log(logOut , "The Log Out status")
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const Details = JSON.parse(localStorage.getItem("list"))


  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  function logOutAndRedirection() {
    setLogOut(true)
    if(logOut){
    navigate("/")
    }
  }
  return (
    <div>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography sx={{ p: 1}}>
                <h4 >
                Add Existing Account
                </h4>
                <h4 style={{cursor : "pointer"}} onClick={logOutAndRedirection} >
                    Logout ({Details.Name})
                </h4>
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>

      <FaUserCircle style={{marginLeft:'1rem' ,fontSize: '2.9rem'}} onClick={handleClick("left")} />
        <div >
        </div>
      
        </div>
  );
}