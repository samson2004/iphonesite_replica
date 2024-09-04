import { footerLinks } from "../constants";

const Footer = () => {

    return (
        <footer className="py-5 sm:px-10 px-5">
            <div className="screen-max-width">
                <div>
                    <p className="font-semihold text-gray text-sm">More ways to shop : {' '}
                        <span className="underline text-blue">
                            Find and Apple Store {'   '}
                        </span>
                        or {' '}
                        <span className="underline text-blue">
                            other retailer
                        </span>
                        {'   '} near you.
                    </p>
                    <p className="font-semihold text-gray text-sm"> Or call 1234-1234-1234 </p>
                </div>
                <div className="bg-neutral-700 my-5 h-[1px] w-full"></div>
                <div className="flex md:flex-row flex-col md:items-center justify-between">
                    <p className="font-semihold text-gray text-sm">Copyright @ 2024 Apple Inc. All rights reserved</p>
                </div>
                <div className="flex flex-col sm:flex-row">
                    {

                        footerLinks.map((link) => {
                            <p key={link} className="font-semihold text-gray text-sm">{link}</p>
                        })

                    }
                </div>
            </div>

        </footer>
    );
}

export default Footer;