import React from "react";
import { Alert } from "@mui/material";
import { Snackbar } from "@mui/material";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";

const AlertNotification = (props) => {
    return (
        <Snackbar anchorOrigin={{ vertical:'bottom' ,horizontal:'center'}} open onClose={() => {}} autoHideDuration={6000}>
            <Alert severity="info">Alert message</Alert>
        </Snackbar>
    );
};

export default AlertNotification;