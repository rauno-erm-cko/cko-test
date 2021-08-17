import React, {useState} from "react";
import * as yup from "yup";
import {useFormik} from "formik";
import FeedbackInput from "./FeedbackInput";
import {Box, Button, TextField, Typography} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {Rating} from "@material-ui/lab";


const useStyles = makeStyles({
    button: {
        background: "rgb(30,42,100)",
        border: 0,
        borderRadius: 15,
        color: "white",
        height: 48,
        padding: "0 30px",
    },
    form: {
        textAlign: "center",
        margin: "15px",
    },

});

const labels = {
    1: 'Useless',
    2: 'Poor',
    3: 'Ok',
    4: 'Good',
    5: 'Excellent',
};

const validationSchema = yup.object({
    email: yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    fullName: yup
        .string("Enter your full name")
        .required("Full name is required"),
});

function FeedbackInputs({addNewFeedback, submitHandler}) {
    const [value, setValue] = useState(3);
    const [hover, setHover] = useState(-1);
    const classes = useStyles();


    const formik = useFormik({
        initialValues: {
            id: 0,
            fullName: "",
            email: "",
            rating: 3,
            comment: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, actions) => {
            addNewFeedback(values)
            actions.setSubmitting(false)
            actions.resetForm()
            submitHandler(true)
        },
    });

    function handleRating(event, value) {
        formik.setFieldValue("rating", value);
        setValue(value)
    }


    return (
        <div>
            <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
                <Grid container spacing={3} justifyContent="center">
                    {/* Rating */}
                    <Grid item sm={12}>
                        <Typography gutterBottom>Rate us!</Typography>
                        <Rating
                            value={value}
                            defaultValue={3}
                            name="size-large"
                            size="large"
                            onChange={handleRating}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                        />
                        {value !== null && <Box>{labels[hover !== -1 ? hover : value]}</Box>}
                    </Grid>

                    {/* Full name */}
                    <Grid item sm={8} xs={10}>
                        <FeedbackInput
                            inputProps={{ "data-testid": "feedback-full-name" }}
                            type="text"
                            name="fullName"
                            label="Full name"
                            onChange={formik.handleChange}
                            value={formik.values.fullName}
                            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                            helperText={formik.touched.fullName && formik.errors.fullName}
                        />
                    </Grid>

                    {/* Email */}
                    <Grid item sm={8} xs={10}>
                        <FeedbackInput
                            inputProps={{ "data-testid": "feedback-email" }}
                            name="email"
                            type="email"
                            label="Email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Grid>

                    {/* Comment */}
                    <Grid item sm={8} xs={10}>
                        <TextField
                            inputProps={{ "data-testid": "feedback-comment" }}
                            multiline
                            fullWidth
                            rows={4}
                            label="Comment"
                            variant="outlined"
                            id="comment"
                            name="comment"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.comment}
                        />
                    </Grid>

                    {/* Submit button */}
                    <Grid item sm={12}>
                        <Button
                            disabled={!formik.values.fullName || !formik.values.email }
                            className={classes.button}
                            size="large"
                            variant="contained"
                            color="primary"
                            type="submit"
                            data-testid="feedback-submit"
                        >
                            Send Feedback
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default FeedbackInputs;
