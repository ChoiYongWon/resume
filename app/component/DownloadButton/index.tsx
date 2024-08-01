import Link from "next/link"
import { DownloadButtonStyle } from "./style.css"
import Image from "next/image"
import DownloadButtonImage from "../../../public/svg/download.svg"

const DownloadButton = () => {
    return (
        <Link href={"/file/최용원 이력서 FE.pdf"} download={"최용원 이력서 FE.pdf"} className={DownloadButtonStyle}>
            <Image src={DownloadButtonImage} alt="" width={18} height={18}/>
        </Link>
    )
}

export default DownloadButton