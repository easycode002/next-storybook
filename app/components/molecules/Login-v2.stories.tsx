import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { http, HttpResponse, delay } from "msw";
import Login_V2 from "./Login-v2";
const meta: Meta<typeof Login_V2> = {
  component: Login_V2,
  parameters: {},
};
export default meta;

export const MockedError: StoryObj = {
  parameters: {},
};
