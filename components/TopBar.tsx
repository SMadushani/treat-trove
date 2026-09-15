import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

export default function TopBar() {
  return (
    <div className="bg-[#8B1E2D] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">

        <div className="flex items-center gap-2">
          <IoLocationSharp
            className="text-[#D4A017]"
            size={18}
          />
          <span>Melbourne, Australia</span>
        </div>

        <div className="flex items-center gap-4">

          <a
            href="https://www.facebook.com/share/1NVDB4MG8m/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#D4A017]"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#D4A017]"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://www.tiktok.com/@treat.trove?_r=1&_t=ZS-97NxOz0Xr1U"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#D4A017]"
            aria-label="TikTok"
          >
            <FaTiktok size={20} />
          </a>

        </div>

      </div>
    </div>
  );
}