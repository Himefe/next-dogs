import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import Modal from "./index";
import { useState } from "react";

const mockBack = jest.fn();

jest.mock("next/navigation", () => ({
    useRouter: () => ({
        back: mockBack,
    }),
}));

beforeEach(() => {
    const modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(modalRoot);
});

afterEach(() => {
    const modalRoot = document.getElementById("modal-root");
    if (modalRoot) {
        document.body.removeChild(modalRoot);
    }

    mockBack.mockClear();
});

describe("<Modal />", () => {
    it("should render modal", () => {
        const { getByText } = render(<Modal>This is a modal</Modal>);

        expect(getByText("This is a modal")).toBeInTheDocument();
    });

    it("should unmount the modal after onClose is called", async () => {
        const ModalWrapper = () => {
            const [open, setOpen] = useState(true);

            return (
                <>
                    {open && (
                        <Modal onClose={setOpen.bind(this, false)}>
                            <p>Modal Content</p>
                        </Modal>
                    )}
                </>
            );
        };

        const { queryByText } = render(<ModalWrapper />);
        const modalContent = queryByText("Modal Content");

        expect(modalContent).toBeInTheDocument();

        const backdrop = screen.getByTestId("modal");
        fireEvent.click(backdrop);

        await waitFor(() => {
            expect(modalContent).not.toBeInTheDocument();
        });
    });

    it("should call router.back() when clicking on backdrop and onClose is not provided", () => {
        render(<Modal>Modal Content</Modal>);

        const backdrop = screen.getByTestId("modal");
        fireEvent.click(backdrop);

        expect(mockBack).toHaveBeenCalled();
    });

    it("should not call router.back if event.target !== event.currentTarget and onClose is not provided", () => {
        render(
            <Modal>
                <p data-testid="modal-content">Modal Content</p>
            </Modal>
        );

        const content = screen.getByTestId("modal-content");
        fireEvent.click(content);

        expect(mockBack).not.toHaveBeenCalled();
    });

    it("should call router.back when pressing Escape key", () => {
        render(<Modal>Modal Content</Modal>);

        fireEvent.keyDown(document, { key: "Escape" });

        expect(mockBack).toHaveBeenCalled();
    });
});
