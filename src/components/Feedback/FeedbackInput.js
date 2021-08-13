import { TextField } from "@material-ui/core";

function FeedbackInput(props) {
  return <TextField fullWidth multiline variant="outlined" {...props} />;
}

export default FeedbackInput;
