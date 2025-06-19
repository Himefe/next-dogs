type ErrorProps = {
    error: string;
};

const Error = ({ error }: ErrorProps) => {
    return <p style={{ color: "#f31", margin: "0.5rem 0 1rem 0" }} dangerouslySetInnerHTML={{ __html: error }} />;
};

export default Error;
