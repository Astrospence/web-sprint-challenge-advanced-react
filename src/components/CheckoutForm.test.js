import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});
    
test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />);
    const firstNameField = screen.getByLabelText("First Name:");
    const lastNameField = screen.getByLabelText("Last Name:");
    const addressField = screen.getByLabelText("Address:");
    const cityField = screen.getByLabelText("City:");
    const stateField = screen.getByLabelText("State:");
    const zipField = screen.getByLabelText("Zip:");
    const submit = screen.queryByRole("button");
    await waitFor(() => {
        const successMessage = screen.queryByTestId("successMessage");
        userEvent.type(firstNameField, "SomeUser");
        userEvent.type(lastNameField, "SomeLastName");
        userEvent.type(addressField, "Test Avenue");
        userEvent.type(cityField, "SomeCity");
        userEvent.type(stateField, "SomeState");
        userEvent.type(zipField, "77777");
        userEvent.click(submit);
        expect(successMessage).toBeTruthy();
        expect(successMessage).toHaveTextContent("You have ordered some plants!");
        expect(successMessage).toHaveTextContent("Your new green friends will be shipped to:");
        expect(successMessage).toHaveTextContent("SomeUser SomeLastName");
        expect(successMessage).toHaveTextContent("Test Avenue");
        expect(successMessage).toHaveTextContent("SomeCity, SomeState 77777");
    });    
});
