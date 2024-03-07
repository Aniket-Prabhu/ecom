import {
  fireEvent,
  getByLabelText,
  render,
  screen,
} from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("Check if Label with name First Name is present", () => {
  render(<App />);
  const firstNameElement = screen.getByLabelText(/First Name/i);
  expect(firstNameElement).toBeInTheDocument();
});

test("checking if email field is present", () => {
  render(<App />);
  const emailElement = screen.getByLabelText(/Email Address/i);
  expect(emailElement).toBeInTheDocument();
});

test("checking email reg exp", () => {
  const regex = /\S+@\S+\.\S+/;
  render(<App />);
  // const regex = screen.getByText("/\S+@\S+\.\S+/")
  expect("hemang.bhagatgmail.com").toMatch(regex);
});

test("Checking submit button", async () => {
  render(<App />);
  //Finding TextBox Elements on sign up page
  const firstElement = screen.getByLabelText(/First Name/i);
  const lastElement = screen.getByLabelText(/Last Name/i);
  const email = screen.getByLabelText(/Email Address/i);
  const passwordElement = screen.getByLabelText(/Password/i);
  //finding the submit button on sign up page
  const btn = screen.getByRole("button", { type: "text" });
  //inserting values in the elements found
  await userEvent.type(firstElement, "Hemang");
  await userEvent.type(lastElement, "Bhagat");
  await userEvent.type(email, "hemang.bhagat@gmail.com");
  await userEvent.type(passwordElement, "12345678");
  //clicking the submit button
  fireEvent.click(btn);
  //checking if after clicking the submit button it goes to sign in page
  expect(screen.getByText(/sign in/i)).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByLabelText(/Last Name/i);
  expect(linkElement).toBeInTheDocument();
});
