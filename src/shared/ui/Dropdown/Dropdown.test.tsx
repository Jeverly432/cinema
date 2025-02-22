import { render, screen } from "@testing-library/react";
import { Dropdown } from "./Dropdown";
import { Button } from "../Button/Button";
import { List } from "../List/List";
import { ListItem } from "../ListItem/ListItem";

describe("Dropdown", () => {
    test("renders dropdown content when open", () => {
        render(
            <Dropdown initialOpen>
                <Dropdown.Anchor>
                    <Button>Open Dropdown</Button>
                </Dropdown.Anchor>
                <Dropdown.Content>
                    <List>
                        <ListItem>Option 1</ListItem>
                        <ListItem>Option 2</ListItem>
                        <ListItem>Option 3</ListItem>
                    </List>
                </Dropdown.Content>
            </Dropdown>,
        );

        expect(screen.getByText("Option 1")).toBeInTheDocument();
        expect(screen.getByText("Option 2")).toBeInTheDocument();
        expect(screen.getByText("Option 3")).toBeInTheDocument();
    });

    test("renders dropdown content when closed", () => {
        render(
            <Dropdown>
                <Dropdown.Anchor>
                    <Button>Open Dropdown</Button>
                </Dropdown.Anchor>
                <Dropdown.Content>
                    <List>
                        <ListItem>Option 1</ListItem>
                        <ListItem>Option 2</ListItem>
                        <ListItem>Option 3</ListItem>
                    </List>
                </Dropdown.Content>
            </Dropdown>,
        );

        expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
        expect(screen.queryByText("Option 2")).not.toBeInTheDocument();
        expect(screen.queryByText("Option 3")).not.toBeInTheDocument();
    });
});
