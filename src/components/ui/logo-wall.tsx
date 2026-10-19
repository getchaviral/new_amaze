import Image from "next/image";

import microlit from "@/assets/clients/microlit.png";
import sssDefence from "@/assets/clients/sss-defence.png";
import royalCanin from "@/assets/clients/royalcanin.svg";
import schiebel from "@/assets/clients/schiebel.png";
import pragati from "@/assets/clients/pragati.png";

/**
 * Client logo wall. Logos use their original brand artwork and colours.
 *
 * Auto heuristic: if the imported filename includes `white`/`light`/`inverse`,
 * the mark is assumed to be a light/white variant and rendered on a dark tile.
 * Otherwise it is shown on the light cream tile so coloured/dark marks keep
 * good contrast.
 */
function isLightLogo(src: unknown) {
  const path =
    typeof src === "string" ? src : (src && (src as { src?: string }).src) || "";
  return /white|light|inverse|negative/i.test(path || "");
}

const CLIENTS = [
  { name: "Microlit", src: microlit, alt: "Microlit" },
  { name: "SSS Defence", src: sssDefence, alt: "SSS Defence" },
  { name: "Royal Canin", src: royalCanin, alt: "Royal Canin" },
  { name: "Schiebel", src: schiebel, alt: "Schiebel" },
  { name: "Pragati Packaging", src: pragati, alt: "Pragati Packaging" },
];

export function LogoWall() {
  return (
    <ul className="grid list-none grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {CLIENTS.map((client) => (
        <li key={client.name}>
          <div
            className={`flex h-[74px] items-center justify-center rounded-xl border px-5 ${
              isLightLogo(client.src) ? "border-ink bg-ink" : "border-line bg-cream"
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
