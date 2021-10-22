import { renderOutput } from "./output.js";
import getDatesDiff from './getDateDiff.js';

const form = document.getElementById("calcDate");

form.onsubmit = (event) => {
    event.preventDefault();

    let {firstDate, secondDate} = event.target.elements;

    const firstDateValue = firstDate.value;
    const secondDateValue = secondDate.value;

    if (!firstDateValue || !secondDateValue) {
        renderOutput("error")

        return;
    }

    const datesDiff = getDatesDiff(firstDateValue, secondDateValue)

    renderOutput(`
        Лет: ${datesDiff.years}
        Месяцев: ${datesDiff.months}
        Дней: ${datesDiff.days}
    `)
};