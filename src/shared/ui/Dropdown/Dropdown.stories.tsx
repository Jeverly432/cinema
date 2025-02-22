import type { Meta, StoryObj } from "@storybook/react";
import { LightThemeDecorator } from "shared/config/storybook/LightThemeDecorator";
import { DarkThemeDecorator } from "shared/config/storybook/DarkThemeDecorator";
import { Button } from "shared/ui/Button/Button";
import { Dropdown } from "./Dropdown";
import { ButtonTheme } from "../Button/types";

const meta = {
    title: "widgets/Dropdown",
    component: Dropdown,
    args: {
        initialOpen: true,
    },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [
        LightThemeDecorator,
    ],
    render: (args) => (
        <Dropdown {...args}>
            <Dropdown.Anchor>
                <Button>Open Dropdown</Button>
            </Dropdown.Anchor>
            <Dropdown.Content>
                <ul>
                    <li>
                        Option 1
                    </li>
                    <li>
                        Option 2
                    </li>
                    <li>
                        Option 3
                    </li>
                </ul>
            </Dropdown.Content>
        </Dropdown>
    ),
};

export const Dark: Story = {
    decorators: [
        DarkThemeDecorator,
    ],
    render: (args) => (
        <Dropdown {...args}>
            <Dropdown.Anchor>
                <Button theme={ButtonTheme.PRIMARY}>Open Dropdown</Button>
            </Dropdown.Anchor>
            <Dropdown.Content>
                <ul>
                    <li>
                        Option 1
                    </li>
                    <li>
                        Option 2
                    </li>
                    <li>
                        Option 3
                    </li>
                </ul>
            </Dropdown.Content>
        </Dropdown>
    ),
};
