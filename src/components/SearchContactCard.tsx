import { FunctionComponent } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { CircularProgress, Link, Typography } from "@material-ui/core";
// import AddRoundedIcon from "@material-ui/icons/AddRounded";
export interface CardProps {
  userId: number;
  fullName: string;
  profileImageUrl: string;
  trust: number;
}

const purpleColor = (alpha: number) => `rgb(106, 62, 234, ${alpha})`;
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 350,
      borderRadius: 5,
      boxShadow: "none",
      overflow: "visible",
      fontFamily: "inherit",
      margin: "2rem",
    },
    header: {
      padding: "5px",
    },
    headerTitle: {
      fontFamily: "inherit",
      fontSize: "1rem",
      color: "black",
      fontWeight: 600,
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
    subTitle: {
      color: "rgba(0,0,0,.4)",
    },
    headerIcon: {
      backgroundColor: purpleColor(0.2),
      color: purpleColor(0.8),
      border: `1px solid ${purpleColor(0.8)}`,
      borderRadius: "5px",
      width: "40px",
      height: "40px",
      margin: "22.5px 20px",
    },
    avatar: {
      height: "75px",
      width: "75px",
      transform: "translateY(-1rem)",
      position: "relative",
      overflow: "visible",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& img": {
        objectFit: "cover",
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        zIndex: 1,
      },
    },
    trust: {
      position: "absolute",
      top: -15,
      backgroundColor: purpleColor(1),
      fontSize: "1rem",
      width: "30px",
      height: "30px",
      zIndex: 2,
    },
    progress: {
      position: "absolute",
    },
    actions: {
      backgroundColor: purpleColor(0.15),
      justifyContent: "center",
    },
    actionsText: {
      color: purpleColor(0.9),
    },
    actionsLink: {
      fontWeight: 600,
    },
  })
);
const SearchContactCard: FunctionComponent<CardProps> = ({
  userId,
  fullName,
  profileImageUrl,
  trust,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar
            aria-label="search-contact-card-image"
            className={classes.avatar}
          >
            <img src={profileImageUrl} alt="U"></img>
            <Avatar
              aria-label="search-contact-card-trust"
              className={classes.trust}
            >
              {trust < 100 ? (trust > 0 ? trust : 0) : 100}
            </Avatar>
            <CircularProgress
              variant="determinate"
              value={trust < 100 ? (trust > 0 ? trust : 0) : 100}
              className={classes.progress}
              thickness={2.5}
              size={88}
            />
          </Avatar>
        }
        action={
          <IconButton aria-label="add" className={classes.headerIcon}>
            +
          </IconButton>
        }
        title={
          <Typography
            variant="h1"
            component="h1"
            className={classes.headerTitle}
          >
            {fullName.length > 20
              ? `${fullName.substring(0, 20)}...`
              : fullName}
          </Typography>
        }
        subheader={
          <Typography
            variant="subtitle1"
            component="sub"
            className={classes.subTitle}
          >
            nessuna connessione
          </Typography>
        }
      />
      <CardActions className={classes.actions}>
        <Typography
          variant="body2"
          component="p"
          align="center"
          className={classes.actionsText}
        >
          Sta gia condividendo{" "}
          <Link
            href="#hello"
            color="inherit"
            underline="always"
            className={classes.actionsLink}
          >
            Disney Plus
          </Link>
        </Typography>
      </CardActions>
    </Card>
  );
};
export default SearchContactCard;
