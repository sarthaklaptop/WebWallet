import Image from "next/image"
import digitalwallet from "../../public/digital-wallet.png"

export function Header() {
    return (
        <div className="w-full flex items-center gap-2 my-8">
            {/* <img src={digitalwallet} alt="" /> */}
            <Image src={digitalwallet} alt="Logo" width={30} />
            <h1 className="font-bold text-2xl">Soltrek</h1>
        </div>
    )
}