import type { Meta, StoryObj } from "@storybook/react";
import { LightThemeDecorator } from "shared/config/storybook/LightThemeDecorator";
import { DarkThemeDecorator } from "shared/config/storybook/DarkThemeDecorator";
import { Loader } from "./Loader";

const meta = {
    title: "shared/Loader",
    component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [
        LightThemeDecorator,
    ],
};

export const Dark: Story = {
    decorators: [
        DarkThemeDecorator,
    ],
};
