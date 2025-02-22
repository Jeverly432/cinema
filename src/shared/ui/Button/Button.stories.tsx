import type { Meta, StoryObj } from "@storybook/react";
import { DarkThemeDecorator } from "shared/config/storybook/DarkThemeDecorator";
import { Button } from "./Button";
import { ButtonTheme } from "./types";

const meta = {
    title: "shared/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
        children: "Text",
    },
    decorators: [
        DarkThemeDecorator,
    ],
};

export const Secondary: Story = {
    args: {
        theme: ButtonTheme.SECONDARY,
        children: "Text",
    },
    decorators: [
        DarkThemeDecorator,
    ],
};

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: "Text",
    },
    decorators: [
        DarkThemeDecorator,
    ],
};
