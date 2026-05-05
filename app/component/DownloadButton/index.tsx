import { DownloadButtonStyle } from "./style.css";
import Image from "next/image";
import DownloadButtonImage from "../../../public/svg/download.svg";

const DownloadButton = () => {
  return (
    <a
      href="/api/pdf"
      className={DownloadButtonStyle}
    >
      <Image src={DownloadButtonImage} alt="" width={18} height={18} />
    </a>
  );
};

export default DownloadButton;
