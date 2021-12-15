import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Login } from "./Login";
import * as Api from "./api/api";

jest.mock("./api/api");
Api.registerUser = jest.fn();

describe("Login Form Test", () => {
  describe("With valid Inputs", () => {
    test("check the type", () => {
      const { getByText, getByLabelText } = render(<Login />);
      const emailLabel = getByText("Email address");
      const passwordLabel = getByText("Password");

      expect(emailLabel).toBeInTheDocument();
      expect(passwordLabel).toBeInTheDocument();

      const email = getByLabelText("Email address");
      const password = getByLabelText("Password");
      expect(email).toHaveAttribute("type", "email");
      expect(password).toHaveAttribute("type", "password");
    });
    test("check should Submit the form", () => {
      const mockOnSubmit = jest.fn();
      render(<Login onSubmit={mockOnSubmit} />);
      const email = screen.getByLabelText("Email address");
      const password = screen.getByLabelText("Password");
      const button = screen.getByRole("button");

      userEvent.type(email, "man@gmail");
      userEvent.type(password, "kshjf12");
      userEvent.click(button);
      expect(Api.registerUser).toHaveBeenCalledTimes(1);
    });
  });
});
