import Image from "next/image";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div>
                    <Image alt="Dogs logo footer" width={28} height={22} src="/assets/dogs.svg" />
                </div>
                <p>Dogs. Alguns direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
