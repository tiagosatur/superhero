import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button,
  Icon,
} from "@material-ui/core";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";

import { useStore } from "../../utils";
import { PowerStatsList, Modal, BarLoader } from "..";

export default function HeroDetailsModal({
  data: { isModalOpen },
  actions: { handleCloseModal },
}) {
  const {
    state: {
      hero: {
        isHeroLoading,
        info: {
          name,
          powerstats,
          biography,
          image,
          appearance,
          work,
          connections,
        },
      },
    },
  } = useStore();
  const classes = useStyles({ url: image && image.url });

  return (
    <Modal
      data={{
        isModalOpen,
      }}
      actions={{
        handleCloseModal,
      }}
    >
      <div className={classes.container}>
        {isHeroLoading ? (
          <BarLoader data={{ width: 100 }} />
        ) : (
          <div className={classes.body}>
            <div className={classes.media} />
            <div className={classes.content}>
              <header className={classes.header}>
                <Typography variant="h3" color="primary">
                  {name}
                </Typography>
                <Button
                  color="primary"
                  className={classes.btn}
                  onClick={handleCloseModal}
                >
                  <Icon
                    component={CloseIcon}
                    className={`${classes.closeIcon}`}
                  />
                </Button>
              </header>
              <Table className={classes.table}>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography>Publisher</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>
                        {biography && biography.publisher}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>Appearance</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>
                        Gender: {appearance && appearance.gender}
                      </Typography>
                      <Typography>
                        Race: {appearance && appearance.race}
                      </Typography>
                      <Typography>
                        Height: {appearance && appearance.height[1]}
                      </Typography>
                      <Typography>
                        Weight: {appearance && appearance.weight[1]}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography>Work base</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{work && work.base}</Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <Typography>Relatives</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>
                        {connections && connections.relatives}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <PowerStatsList
                data={{
                  list: powerstats,
                }}
              />
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    minHeight: 300,
    minWidth: 300,

    [theme.breakpoints.up("md")]: {
      minWidth: 500,
    },
  },
  body: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  media: {
    backgroundImage: ({ url }) => `url(${url})`,
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: 200,
    width: "auto",
    [theme.breakpoints.up("md")]: {
      height: "auto",
      width: 300,
    },
  },
  content: {
    padding: [[20, 16]],
    minWidth: 300,
  },
  table: {
    marginBottom: 16,
  },
  closeIcon: {
    height: 30,
    width: 30,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
