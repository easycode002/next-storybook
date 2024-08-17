"use client";
import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

interface ToggleSlideProps {
  selected: string;
  setSelected: (value: string) => void;
  options: Array<{ value: string; label: React.ReactNode; icon: React.ReactNode }>;
  activeColor?: string;
  inactiveColor?: string;
  sliderColor?: string;
  transition?: Object;
  disabled?: boolean;
  className?: string;
}

const baseClass = `!text-sm !p-0 !font-medium !flex !items-center !gap-2 !px-3 !md:pl-3 !md:pr-3.5 !py-3 !md:py-1.5 !transition-colors !relative !z-10`;

const ToggleButton: React.FC = () => {
  const [selected, setSelected] = useState<string>("light");
  return (
    <ToggleSlider
      selected={selected}
      setSelected={setSelected}
      options={[
        { value: "light", label: "Light", icon: <FiMoon /> },
        { value: "dark", label: "Dark", icon: <FiSun /> }
      ]}
      activeColor="text-white"
      inactiveColor="text-slate-800"
      sliderColor="bg-gradient-to-r from-violet-700 to-indigo-800"
      transition={{ type: "spring", damping: 15, stiffness: 250 }}
    />
  );
};

const ToggleSlider: React.FC<ToggleSlideProps> = ({
  selected,
  setSelected,
  options,
  activeColor = "text-white relative z-10",
  inactiveColor = "text-slate-800",
  sliderColor = "bg-gradient-to-r from-violet-700 to-indigo-800",
  transition,
  disabled = false,
  className
}) => {
  return (
    <div className={`relative flex w-fit items-center rounded-full ${className}`}>
      {options.map(option => (
        <Button
          key={option.value}
          className={`${baseClass} !bg-transparent ${selected === option.value ? activeColor : inactiveColor}`}
          isLoading={false}
          onClick={() => {
            if (!disabled) setSelected(option.value);
          }}
          disabled={disabled}
        >
          {option.icon}
          <span className="relative z-10">{option.label}</span>
        </Button>
      ))}
      <div
        className={`absolute inset-0 z-0 flex ${selected === options[1]?.value ? "justify-end" : "justify-start"}`}
      >
        <motion.span
          layout
          transition={transition}
          className={`h-full w-1/2 rounded-full ${sliderColor}`}
        />
      </div>
    </div>
  );
};

export default ToggleButton;
