// import Image from "next/image";
import { LinkPreview } from "./ui/link-preview";


export function Footer() {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center p-10">
            <div className="flex w-full">
                <div>
                    Designed and Developed by
                </div>
                &nbsp;
                <LinkPreview className="" url="https://dub.sh/sarthak-portfolio">
                    <p className="text-black underline pacifico">Sarthak Patil</p>
                </LinkPreview>
            </div>
        </footer>
    )
}