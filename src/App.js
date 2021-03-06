import FeedbackForm from "./components/Feedback/FeedbackForm";
import {useState} from "react";
import FeedbackSummary from "./components/FeedbackSummary/FeedbackSummary";
import {GlassWrapper} from "./components/styling-components/GlassWrapper";
import background from "./img/bilal-o-ljXekphwr40-unsplash.jpg";
import {makeStyles} from "@material-ui/styles";
import SmallBox from "./components/styling-components/SmallBox";
import {Button} from "@material-ui/core";


const useStyles = makeStyles({
    app: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        marginTop: 0,
        marginBottom: "auto"
    }
});

const DUMMY_STATE = [
    {
        id: 0.9666643819932472011,
        fullName: "Testing Name",
        email: "test@test.ee",
        rating: 5,
        comment: "This is a great product!",
    }, {
        id: 0.9712312343819932472011,
        fullName: "Peeter Üks",
        email: "test@test1.ee",
        rating: 1,
        comment: "Worst experience!",
    }, {
        id: 0.97132343819932472011,
        fullName: "Hannes K",
        email: "test@test.ee",
        rating: 4,
        comment: "This is a great product!",
    }, {
        id: 0.972312343819932472011,
        fullName: "Pets P",
        email: "test@test1.ee",
        rating: 1,
        comment: "Bad experience!",
    },
];

function App() {
    const [userFeedback, setUserFeedback] = useState(DUMMY_STATE);
    const [submitted, setIsSubmitted] = useState(false)
    const classes = useStyles()

    function addNewFeedback(feedbackObj) {
        const updateFeedbackArray = [
            ...userFeedback,
            {
                ...feedbackObj,
            },
        ];
        setUserFeedback(updateFeedbackArray);
    }

    function submitHandler(value) {
        setIsSubmitted(value)
    }

    return (
        <div className={classes.app}>
            <div className={classes.container}>
                {submitted && <SmallBox>
                    <Button variant="contained" onClick={() => submitHandler(false)} color="primary" >
                        ADD NEW REVIEW(FOR TESTING ONLY)
                    </Button>
                </SmallBox>}

                <GlassWrapper
                    display="flex"
                    justifyContent="flex-start"
                    flexWrap="wrap"
                >
                    {!submitted && <FeedbackForm addNewFeedback={addNewFeedback} submitHandler={submitHandler}/>}
                    <FeedbackSummary userFeedback={userFeedback} submitted={submitted}/>
                </GlassWrapper>
            </div>
        </div>
    );
}

export default App;
