import React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Copyright = (props) => {
    return (
        <Box sx={{ width: "100%", padding: 3, mt: 3 }}>
            <Typography variant="body2" align="center" {...props}>
                {"Copyright © "}
                <Link color="inherit" href="/">
                    Well Cost Estimator
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        </Box>
    );
};

export default Copyright;
