import type { Meta, StoryObj } from "@storybook/react";
import { LightThemeDecorator } from "shared/config/storybook/LightThemeDecorator";
import { DarkThemeDecorator } from "shared/config/storybook/DarkThemeDecorator";
import { Button } from "shared/ui/Button/Button";
import { ButtonTheme } from "../Button/types";
import { List } from "../List/List";
import { ListItem } from "../ListItem/ListItem";
import { Tooltip } from "./Tooltip";

const meta = {
    title: "shared/Tooltip",
    component: Tooltip,
    parameters: {
        layout: "centered",
    },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
    decorators: [
        LightThemeDecorator,
    ],
    render: (args) => (
        <Tooltip {...args}>
            <Tooltip.Trigger>
                <Button theme={ButtonTheme.CLEAR}>Tooltip</Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
                <List>
                    <ListItem>
                        Option 1
                    </ListItem>
                    <ListItem>
                        Option 2
                    </ListItem>
                    <ListItem>
                        Option 3
                    </ListItem>
                </List>
            </Tooltip.Content>
        </Tooltip>
    ),
};

export const Dark: Story = {
    decorators: [
        DarkThemeDecorator,
    ],
    render: (args) => (
        <Tooltip {...args}>
            <Tooltip.Trigger>
                <Button theme={ButtonTheme.CLEAR}>Tooltip</Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
                <List>
                    <ListItem>
                        Option 1
                    </ListItem>
                    <ListItem>
                        Option 2
                    </ListItem>
                    <ListItem>
                        Option 3
                    </ListItem>
                </List>
            </Tooltip.Content>
        </Tooltip>
    ),
};
