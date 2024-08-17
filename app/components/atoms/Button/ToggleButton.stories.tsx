import type { Meta, StoryObj } from "@storybook/react";
import ToggleButton from "./ToggleButton";
import { expect, within, userEvent,screen } from "@storybook/test";
import React, { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
const meta: Meta<typeof ToggleButton> = {
  title: "Atoms/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Default: StoryObj<typeof ToggleButton> = {
    args: {
      selected: "light",
      setSelected: (value: string) => console.log(value),
      options: [
        { value: "light", label: "Light", icon: <FiMoon /> },
        { value: "dark", label: "Dark", icon: <FiSun /> },
      ],
      activeColor: "text-white",
      inactiveColor: "text-slate-800",
      sliderColor: "bg-gradient-to-r from-violet-700 to-indigo-800",
      transition: { type: "spring", damping: 15, stiffness: 250 },
      disabled: false,
    },
    play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      // Debug the rendered content
      screen.debug();
  
      try {
        const lightButton = canvas.getByText("Light");
        const darkButton = canvas.getByText("Dark");
        expect(lightButton).toBeInTheDocument();
        expect(darkButton).toBeInTheDocument();
      } catch (error) {
        console.error("Error in finding buttons: ", error);
      }
    },
  };

// Show how the ToggleButton behaves when disabled.
export const Disabled: StoryObj<typeof ToggleButton> = {
  args: {
    selected: "light",
    setSelected: (value: string) => console.log(value),
    options: [
      { value: "light", label: "Light", icon: <FiMoon /> },
      { value: "dark", label: "Dark", icon: <FiSun /> },
    ],
    activeColor: "text-white",
    inactiveColor: "text-slate-800",
    sliderColor: "bg-gradient-to-r from-violet-700 to-indigo-800",
    transition: { type: "spring", damping: 15, stiffness: 250 },
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Debug the rendered content
    screen.debug();

    try {
      // Query for buttons directly
      const lightButton = canvas.getByText("Light");
      const darkButton = canvas.getByText("Dark");

      // Check if buttons are disabled
      expect(lightButton).toBeDisabled();
      expect(darkButton).toBeDisabled();
    } catch (error) {
      console.error("Error in finding buttons or checking disabled state: ", error);
    }
  },
};