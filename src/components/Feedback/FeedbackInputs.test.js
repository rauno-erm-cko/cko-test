import React from "react"
import {unmountComponentAtNode, render} from "react-dom";
import {act} from "react-dom/test-utils"
import FeedbackInputs from "./FeedbackInputs";
import {fireEvent, waitFor} from "@testing-library/react";

let container = null;

beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
})

afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
})

describe("Feedback inputs component", () => {
    it("Form inputs should have no initial text", () => {
        act(() => {
            render(<FeedbackInputs/>, container)
        })
        const fullNameInput = document.querySelector("[data-testid=feedback-full-name]")
        const emailInput = document.querySelector("[data-testid=feedback-email]")
        const commentInput = document.querySelector("[data-testid=feedback-comment]")
        const submit = document.querySelector("[data-testid=feedback-submit]")
        expect(fullNameInput.textContent).toBe("")
        expect(emailInput.textContent).toBe("")
        expect(commentInput.textContent).toBe("")
        expect(submit).toHaveClass("Mui-disabled")
    })
    it("Submit button should be disabled when full name isn't entered", async () => {
        render(<FeedbackInputs/>, container)
        const emailInput = document.querySelector("[data-testid=feedback-email]")
        const commentInput = document.querySelector("[data-testid=feedback-comment]")
        const submit = document.querySelector("[data-testid=feedback-submit]")
        fireEvent.change(emailInput, {target: {value: "test@test.ee"}})
        fireEvent.change(commentInput, {target: {value: "Lorem ipsum"}})
        await waitFor(() => {
            expect(submit).toHaveClass("Mui-disabled")
        })
    })
    it("Submit button should be disabled when email isn't entered", async () => {
        render(<FeedbackInputs/>, container)
        const fullNameInput = document.querySelector("[data-testid=feedback-full-name]")
        const commentInput = document.querySelector("[data-testid=feedback-comment]")
        const submit = document.querySelector("[data-testid=feedback-submit]")
        fireEvent.change(fullNameInput, {target: {value: "test@test.ee"}})
        fireEvent.change(commentInput, {target: {value: "Lorem ipsum"}})
        await waitFor(() => {
            expect(submit).toHaveClass("Mui-disabled")
        })
    })
    it("Submit button should NOT be disabled when full name and email are entered, comment isn't necessary", async () => {
        render(<FeedbackInputs/>, container)
        const fullNameInput = document.querySelector("[data-testid=feedback-full-name]")
        const emailInput = document.querySelector("[data-testid=feedback-email]")
        const submit = document.querySelector("[data-testid=feedback-submit]")
        fireEvent.change(emailInput, {target: {value: "test@test.ee"}})
        fireEvent.change(fullNameInput, {target: {value: "Test Name"}})
        await waitFor(() => {
            expect(submit).not.toHaveClass("Mui-disabled")
        })
    })

})