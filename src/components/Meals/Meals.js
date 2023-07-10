import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvaialbleMeals from "./AvailableMeals";

export default function Meals() {
    return (
        <Fragment>
            <MealsSummary/>
            <AvaialbleMeals/>
        </Fragment>
    );
}