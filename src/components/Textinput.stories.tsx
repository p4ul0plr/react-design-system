import { Textinput, TextInputRootProps } from "./Textinput";
import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";

export default {
  title: "Components/Textinput",
  component: Textinput.Root,
  args: {
    children: [
      <Textinput.Icon>
        <Envelope />
      </Textinput.Icon>,
      <Textinput.Input placeholder="Enter a placeholder text" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <Textinput.Input placeholder="Enter a placeholder text" />,
  },
};
