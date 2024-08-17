import type { Meta, StoryObj } from "@storybook/react";
import Input, { InputProps } from "./Input";
import { userEvent, waitFor, within, expect, fn } from "@storybook/test";
const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onChange: fn(),
  },
} as Meta<InputProps>;
export default meta;

export const Default: StoryObj<InputProps> = {
  args: {
    type: "text",
    label: "Name",
    placeholder: "Enter name here",
    defaultValue: "",
    size: "lg",
    color: "primary",
    variant: "bordered",
    radius: "lg",
    labelPlacement: "outside",
    isDisabled: false,
    isReadOnly: false,
    isRequired: true,
    className: "max-w-full",
    description: "Required input name.",
  },
};

{/* <Button
  size="large"
  radius="large"
  color="secondary"
  variant="bordered"
  isDisabled={false}
  isLoading={false}
  isIconOnly={false}
  startContent={<GrHomeOption />}
  endContent={<FiCoffee />}
  className="bg-blue-600"
>
  Click
</Button>; */}
export const WithInteraction: StoryObj<InputProps> = {
  args: {
    ...Default.args,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const testValue = "Type some text...";

    const input = canvas.getByPlaceholderText("Enter name here");

    await step("Change input", async () => {
      await userEvent.type(input, testValue, { delay: 100 });
    });

    await waitFor(() => {
      // expect(args.onChange).toHaveBeenCalled();
      expect(input).toHaveValue(testValue);
    });
  },
};
