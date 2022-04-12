import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Molecules from "../components/Molecules";

export default {
  title: "Molecules/Molecules",
  component: Molecules,
} as ComponentMeta<typeof Molecules>;

const Template: ComponentStory<typeof Molecules> = (args) => (
  <Molecules {...args} />
);

export const MoleculesOne = Template.bind({});
MoleculesOne.args = {
  text: "متن‌باز و مستقل از سخت‌افزار",
  textSize: "h4",
};
