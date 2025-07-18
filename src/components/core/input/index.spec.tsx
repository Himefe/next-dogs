import { fireEvent, render } from "@testing-library/react";
import Input from "./index";

describe("<Input />", () => {
    it("should render input element", () => {
        const { getByRole } = render(<Input />);

        expect(getByRole("textbox")).toBeInTheDocument();
    });

    it("should render input with label", () => {
        const { getByLabelText } = render(<Input id="input-label" label="Testing label" />);

        expect(getByLabelText("Testing label")).toBeInTheDocument();
    });

    it("should render input with error message", () => {
        const { getByText } = render(<Input error="This is an error" />);

        expect(getByText("This is an error")).toBeInTheDocument();
    });

    it("should accept input props", () => {
        const { getByRole } = render(<Input type="email" placeholder="Enter your email" />);

        const inputElement = getByRole("textbox") as HTMLInputElement;
        expect(inputElement.type).toBe("email");
        expect(inputElement.placeholder).toBe("Enter your email");
    });

    it("should render input and handle change event", () => {
        const handleChange = jest.fn();
        const { getByRole } = render(<Input onChange={handleChange} />);

        const inputElement = getByRole("textbox") as HTMLInputElement;

        fireEvent.change(inputElement, { target: { value: "New value" } });

        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(inputElement.value).toBe("New value");
    });
});
