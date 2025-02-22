import type { Meta, StoryObj } from "@storybook/react";
import { LightThemeDecorator } from "shared/config/storybook/LightThemeDecorator";
import { DarkThemeDecorator } from "shared/config/storybook/DarkThemeDecorator";
import { Button } from "shared/ui/Button/Button";
import { Dropdown } from "./Dropdown";
import { ButtonTheme } from "../Button/types";
import { List } from "../List/List";
import { ListItem } from "../ListItem/ListItem";

const meta = {
    title: "shared/Dropdown",
    component: Dropdown,
    parameters: {
        layout: "centered",
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
            </Dropdown.Content>
        </Dropdown>
    ),
};
