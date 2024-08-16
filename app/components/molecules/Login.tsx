"use client";
import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
export interface LoginFormProps {
  onLogin?: (username: string, password: string) => void;
  isLoading?: boolean;
  isDisabled?: boolean;
}
const Login: React.FC<LoginFormProps> = ({
  onLogin,
  isDisabled,
  isLoading,
}) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoading && !isDisabled) {
      onLogin(username, password);
    }
  };
  return (
    <div className="bg-slate-300 m-40 p-10">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex justify-center font-bold text-2xl">
          <h1>
            <strong>Lo</strong>gin
          </h1>
        </div>
        <div className="flex flex-col gap-6">
          <Input
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            size="md"
            color="primary"
            isDisabled={isDisabled}
            isRequired
            description="Required email"
          />
          <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="md"
            color="primary"
            isDisabled={isDisabled}
            isRequired
            description="Required password"
          />
          <Button
            size="medium"
            color="primary"
            variant="solid"
            isLoading={isLoading}
            isDisabled={isDisabled}
            type="submit"
            className="max-w-full"
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
