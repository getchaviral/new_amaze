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
            className="flex h-[88px] items-center justify-center rounded-2xl border border-line bg-white px-4 shadow-[0_2px_10px_rgba(20,27,43,0.035)] transition-transform duration-200 hover:-translate-y-0.5 sm:h-[96px] sm:px-5"
          >
            <div className="relative h-14 w-full">
              <Image
                src={client.src}
                alt={client.alt}
                fill
                sizes="(max-width: 640px) 42vw, (max-width: 1024px) 28vw, 18vw"
                className="object-contain"
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
