import type { Meta, StoryObj } from "@storybook/react";
import { DarkThemeDecorator } from "shared/config/storybook/DarkThemeDecorator";
import { Button } from "./Button";
import { ButtonSize, ButtonTheme } from "./types";

const meta = {
    title: "shared/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryL: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
        children: "Text",
        size: ButtonSize.L,
    },
    decorators: [
        DarkThemeDecorator,
    ],
};

export const SecondaryL: Story = {
    args: {
        theme: ButtonTheme.SECONDARY,
        size: ButtonSize.L,
        children: "Text",
    },
    decorators: [
        DarkThemeDecorator,
    ],
};

export const ClearL: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        size: ButtonSize.L,
        children: "Text",
    },
    decorators: [
        DarkThemeDecorator,
    ],
};

export const PrimaryM: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
        size: ButtonSize.M,
        children: "Text",
    },
    decorators: [
        DarkThemeDecorator,
    ],
};

export const SecondaryM: Story = {
    args: {
        theme: ButtonTheme.SECONDARY,
        size: ButtonSize.M,
        children: "Text",
    },
    decorators: [
        DarkThemeDecorator,
    ],
};

export const ClearM: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        size: ButtonSize.M,
        children: "Text",
    },
    decorators: [
        DarkThemeDecorator,
    ],
};

export const PrimaryS: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
        size: ButtonSize.S,
        children: "Text",
    },
    decorators: [
        DarkThemeDecorator,
    ],
};

export const SecondaryS: Story = {
    args: {
        theme: ButtonTheme.SECONDARY,
        size: ButtonSize.S,
        children: "Text",
    },
    decorators: [
        DarkThemeDecorator,
    ],
};

export const ClearS: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        size: ButtonSize.S,
        children: "Text",
    },
    decorators: [
        DarkThemeDecorator,
    ],
};
