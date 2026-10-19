import Image from "next/image";

import microlit from "@/assets/clients/microlit.png";
import sssDefence from "@/assets/clients/sss-defence-lockup.png";
import royalCanin from "@/assets/clients/royalcanin.svg";
import schiebel from "@/assets/clients/schiebel.png";
import pragati from "@/assets/clients/pragati.png";

const CLIENTS = [
  { name: "Microlit", src: microlit, alt: "Microlit" },
  { name: "SSS Defence", src: sssDefence, alt: "SSS Defence" },
  { name: "Royal Canin", src: royalCanin, alt: "Royal Canin" },
  { name: "Schiebel", src: schiebel, alt: "Schiebel" },
  { name: "Pragati Packaging", src: pragati, alt: "Pragati Packaging" },
];

export function LogoWall() {
  return (
    <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 lg:grid-cols-5">
      {CLIENTS.map((client) => (
        <li key={client.name}>
          <div
            className="flex h-[76px] items-center justify-center rounded-2xl border border-line bg-white px-4 shadow-[0_2px_10px_rgba(20,27,43,0.035)] transition-transform duration-200 hover:-translate-y-0.5 sm:h-[84px] sm:px-5"
          >
            <Image
              src={client.src}
              alt={client.alt}
              width={240}
              height={74}
              className="h-auto max-h-11 w-auto max-w-[92%] object-contain sm:max-h-12"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
