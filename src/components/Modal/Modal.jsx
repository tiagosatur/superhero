import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Modal as MaterialModal, Backdrop, Fade } from "@material-ui/core";

function Modal({
  data: { isModalOpen },
  actions: { handleCloseModal },
  children,
}) {
  const classes = useStyles();

  return (
    <MaterialModal
      open={isModalOpen}
      onClose={handleCloseModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      className={classes.modal}
    >
      <Fade in={isModalOpen}>
        <div className={classes.content}>{children}</div>
      </Fade>
    </MaterialModal>
  );
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    borderRadius: 4,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
}));

export default React.memo(Modal);
