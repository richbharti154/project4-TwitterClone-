import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import CommentBox from './CommentBox';
import {FaRegComment} from 'react-icons/fa'
import dialog from './dialog.module.css'
import {useRecoilState , useRecoilValue} from 'recoil'
import {clickedComment , Data} from '../../Recoil/RecoilAtom'

export default function DialogBox(props) {
  const [open, setOpen] = React.useState(false);
  const usersData = useRecoilValue(Data)
  const [clickedCommentIndex , setClickedCommentIndex] = useRecoilState(clickedComment)
  
  const handleClickOpen = () => {
    setOpen(true);
  setClickedCommentIndex(usersData[props.props] )

  };


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className={dialog.button}  onClick={handleClickOpen}>
      <FaRegComment className={dialog.icon}  />
      </button>
      <Dialog
        open={open}
        onClose={handleClose}     
      >
                <CommentBox  />
                       
      </Dialog>
    </div>
  );
}