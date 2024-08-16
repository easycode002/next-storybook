import type { Meta, StoryObj } from "@storybook/react";

import { expect, userEvent, waitFor, within } from "@storybook/test";
import Login, { LoginFormProps } from "./Login";
const meta: Meta<typeof Login> = {
  title: "Moleculs/FormLogin",
  component: Login,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta<LoginFormProps>;

export default meta;
export const Default: StoryObj<LoginFormProps> = {
  args: {
    isLoading: false,
    isDisabled: false,
    onLogin: (username, password) => {
      console.log("Login attempt:", { username, password });
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const usernameInput = canvas.getByPlaceholderText("Username");
    const passwordInput = canvas.getByPlaceholderText("Password");
    const submitButton = canvas.getByRole("button");

    await userEvent.type(usernameInput, "testuser");
    await userEvent.type(passwordInput, "password");
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
  },
};
