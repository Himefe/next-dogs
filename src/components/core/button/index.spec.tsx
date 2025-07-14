import { render } from "@testing-library/react";
import Button from "./index";

describe("<Button />", () => {
    it("should render button element", () => {
        const { getByRole } = render(<Button />);

        expect(getByRole("button")).toBeInTheDocument();
    });

    it("should render button with label", () => {
        const { getByText } = render(<Button>Testing label</Button>);

        expect(getByText("Testing label")).toBeInTheDocument();
    });

    it("should render button with pending label when isLoading is true and pendingLabel is provided", () => {
        const { getByText } = render(
            <Button isLoading pendingLabel="Loading...">
                Submit
            </Button>
        );

        expect(getByText("Loading...")).toBeInTheDocument();
    });

    it("should render disabled button when isLoading is true", () => {
        const { getByRole } = render(<Button isLoading>Submit</Button>);

        expect(getByRole("button")).toBeDisabled();
    });

    it("should render disabled button when disabled is true", () => {
        const { getByRole } = render(<Button disabled>Submit</Button>);

        expect(getByRole("button")).toBeDisabled();
    });

    it("should accept button props", () => {
        const { getByRole } = render(
            <Button type="submit" className="custom-class">
                Submit
            </Button>
        );

        const buttonElement = getByRole("button") as HTMLButtonElement;
        expect(buttonElement.type).toBe("submit");
        expect(buttonElement.className).toContain("custom-class");
    });

    it("should render button and handle click event", () => {
        const handleClick = jest.fn();
        const { getByRole } = render(<Button onClick={handleClick}>Click Me</Button>);

        const buttonElement = getByRole("button");
        buttonElement.click();

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
