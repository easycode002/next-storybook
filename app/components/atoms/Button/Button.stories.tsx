import type { Meta, StoryObj } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import { FiCoffee } from "react-icons/fi";
import { expect, userEvent, within } from "@storybook/test";
const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta<ButtonProps>;

export default meta;

export const Default: StoryObj<ButtonProps> = {
  args: {
    size: "large",
    radius: "large",
    color: "secondary",
    variant: "bordered",
    isDisabled: false,
    isLoading: false,
    children: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    expect(button).toHaveTextContent("Button");
  },
};

// Verify that the loading spinner and text appear together.
export const Loading: StoryObj<ButtonProps> = {
  args: { ...Default.args, isLoading: true, children: "Loading..." },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    expect(button).toHaveTextContent("Loading...");
  },
};

export const IconOnly: StoryObj<ButtonProps> = {
  args: {
    size: "large",
    radius: "large",
    color: "secondary",
    variant: "bordered",
    isIconOnly: true,
    startContent: <FiCoffee />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    expect(button).toContainElement(canvas.getByTestId("icon"));
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    expect(button).toBeDisabled();
    await userEvent.click(button);
    expect(button).toBeDisabled(); // Ensure the button is not clickable
  },
};
