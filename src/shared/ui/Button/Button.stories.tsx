import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";
import { ButtonTheme } from "./types";

const meta = {
    title: "shared/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
        children: "Text",
    },
};

export const Secondary: Story = {
    args: {
        theme: ButtonTheme.SECONDARY,
        children: "Text",
    },
};

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: "Text",
    },
};
