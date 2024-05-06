import {FaFacebook} from "react-icons/fa";
import {NavigationLinks} from "@/lib/NavigationLinks";
import {FaInstagram} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa6";

export function Footer() {
    return (
        <footer className={"border-t"}>
            <div className={"flex flex-col justify-center items-center py-16 px-6 overflow-hidden sm:py-16 space-y-3 lg:px-8"}>
                <nav className={"columns-2 flex justify-center gap-3"}>
                    {
                        NavigationLinks.map((navLink, index) => (
                            <div key={index}>
                                <a href="#">{navLink}</a>
                            </div>
                        ))
                    }
                </nav>
                <div className={"flex flex-wrap justify-center gap-x-6 relative"}>
                    <a href="#">
                        <FaFacebook className={"text-gray-400 text-xl"}/>
                    </a>
                    <a href={"#"}>
                        <FaInstagram className={"text-gray-400 text-xl"}/>
                    </a>
                    <a href={"#"}>
                        <FaLinkedin className={"text-gray-400 text-xl"}/>
                    </a>
                </div>
            </div>
        </footer>
    )
}