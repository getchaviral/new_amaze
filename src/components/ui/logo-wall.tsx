import Image from "next/image";

import microlit from "@/assets/clients/microlit.png";
import sssDefence from "@/assets/clients/sss-defence-white.png";
import royalCanin from "@/assets/clients/royalcanin.svg";
import schiebel from "@/assets/clients/schiebel.png";
import pragati from "@/assets/clients/pragati.png";

/**
 * Client logo wall.
 *
 * Every mark is served in its original brand colours — no filters, no
 * recolouring. Each was pulled from the client's own site and stored locally
 * in `src/assets/clients/` rather than hotlinked.
 *
 * `dark` marks ship white-on-transparent, so they only render on a dark ground.
 * The rest are dark ink or full colour and sit on the cream tile. Every logo
 * therefore shows its true artwork; only the tile behind it differs.
 */
const CLIENTS = [
  { name: "Microlit", src: microlit, alt: "Microlit", dark: true },
  { name: "SSS Defence", src: sssDefence, alt: "SSS Defence", dark: true },
  { name: "Royal Canin", src: royalCanin, alt: "Royal Canin", dark: false },
  { name: "Schiebel", src: schiebel, alt: "Schiebel", dark: false },
  { name: "Pragati Packaging", src: pragati, alt: "Pragati Packaging", dark: false },
];

export function LogoWall() {
  return (
    <ul className="grid list-none grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {CLIENTS.map((client) => (
        <li key={client.name}>
          <div
            className={`flex h-[74px] items-center justify-center rounded-xl border px-5 ${
              client.dark ? "border-ink bg-ink" : "border-line bg-cream"
            }`}
          >
            <Image
              src={client.src}
              alt={client.alt}
              width={240}
              height={74}
              className="h-auto max-h-9 w-auto max-w-full object-contain"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
