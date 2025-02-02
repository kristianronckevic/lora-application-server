import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import PDRProgress from "./PDRProgress";
import { globalStyles } from "../../shared/styles";
import { withStyles } from "@material-ui/core/styles";
import TopList from "./TopList";
import MyMap from "./MyMap";
import DashboardMessages from "./DashboardMessages";

export const Dashboard = ({ refresh, classes }) => {
  const localClasses = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper className={clsx(classes.paper, localClasses.chartPaper)}>
            <MyMap refresh={refresh} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={12}>
              <Paper className={clsx(classes.paper)}>
                <PDRProgress refresh={refresh} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <Paper className={clsx(classes.paper)}>
                <TopList refresh={refresh} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <DashboardMessages />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  chartPaper: {
    height: "100%",
  },
}));

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(globalStyles)(Dashboard));
