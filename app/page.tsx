"use client";
import { useState } from "react";
import ToggleButton from "./components/atoms/Button/ToggleButton";
import { FiMoon, FiSun } from "react-icons/fi";
export default function Home() {
  const [selected, setSelected] = useState<string>("light");

  return (
    <>
      <div className="bg-slate-400 w-full h-screen">
        <h1 className="font-bold text-5xl mb-10">Main, page</h1>
        <ToggleButton
          selected={selected}
          setSelected={setSelected}
          options={[
            {
              value: "light",
              label: "Light",
              icon: <FiMoon />,
            },
            {
              value: "dark",
              label: "Dark",
              icon: <FiSun />,
            },
          ]}
          activeColor="text-white"
          inactiveColor="text-slate-800"
          sliderColor="bg-gradient-to-r from-violet-700 to-indigo-800"
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 250,
          }}
        />
      </div>
    </>
  );
}
