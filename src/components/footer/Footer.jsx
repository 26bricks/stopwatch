import logo from '../../logo.ico';

const Footer = () => (
    <div className="footer">
        <p className='footer-heading'><img src={logo} alt="logo" className="logo" />
            Stopwatch
        </p>

        <p className='footer-content'>
            This is a simple stopwatch application.
        </p>

        <p className='footer-content'>
            You can find more information on <a
                className="link"
                href="https://seznam.cz"
                target="_blank"
                rel="noopener noreferrer">
                www.seznam.cz
            </a>
        </p>
    </div>
)

export default Footer
