import { render } from "@testing-library/react";
import ErrorMessage from "./index";

describe("<ErrorMessage />", () => {
    it("should render error message", () => {
        const { getByText } = render(<ErrorMessage error="This is an <strong>error</strong>" />);

        const errorElement = getByText(/this is an/i);
        expect(errorElement).toBeInTheDocument();

        const strongElement = getByText(/error/i);
        expect(strongElement).toBeInTheDocument();
        expect(strongElement.tagName).toBe("STRONG");
    });
});
