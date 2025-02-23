import type { Meta, StoryObj } from "@storybook/react";
import { LightThemeDecorator } from "shared/config/storybook/LightThemeDecorator";
import { DarkThemeDecorator } from "shared/config/storybook/DarkThemeDecorator";
import { Modal } from "./Modal";

const meta = {
    title: "shared/Modal",
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        children: "Modal",
        open: true,
        setOpen: () => {},
    },
    decorators: [
        LightThemeDecorator,
    ],
};

export const Dark: Story = {
    args: {
        children: "Modal",
        open: true,
        setOpen: () => {},
    },
    decorators: [
        DarkThemeDecorator,
    ],
};
