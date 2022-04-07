import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";

const CustomButton = styled(Button)(() => ({
    backgroundColor: green["A400"],
    "&:hover": {
        backgroundColor: green["A700"],
    },
}));

export default CustomButton;
