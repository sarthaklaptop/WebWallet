// import Image from "next/image";
import { LinkPreview } from "./ui/link-preview";


export function Footer() {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <div>
                <div>
                    Designed and Developed by
                </div>
                <LinkPreview url="https://x.com/Sarthak10007" >
                    Sarthak Patil
                </LinkPreview>
                <LinkPreview url="https://google.com" className="font-bold">
                    Sarthak Patil
                </LinkPreview>
            </div>
        </footer>
    )
}