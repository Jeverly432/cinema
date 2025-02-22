import type { Meta, StoryObj } from "@storybook/react";
import { LightThemeDecorator } from "shared/config/storybook/LightThemeDecorator";
import { DarkThemeDecorator } from "shared/config/storybook/DarkThemeDecorator";
import { NavBar } from "./NavBar";

const meta = {
    title: "widgets/Navbar",
    component: NavBar,
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        layoutColor: "layout-light",
    },
    decorators: [
        LightThemeDecorator,
    ],
};

export const Dark: Story = {
    args: {
        layoutColor: "layout-dark",
    },
    decorators: [
        DarkThemeDecorator,
    ],
};
