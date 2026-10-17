import Image from "next/image";

import microlit from "@/assets/clients/microlit.png";
import sssDefence from "@/assets/clients/sss-defence-white.png";
import royalCanin from "@/assets/clients/royalcanin.svg";
import schiebel from "@/assets/clients/schiebel.png";
import pragati from "@/assets/clients/pragati.png";

/**
 * Client logo wall.
 *
 * Each mark was pulled from the client's own site and stored locally in
 * `public/clients/` rather than hotlinked — hotlinked logos break whenever a
 * CDN path changes and are frequently blocked by hotlink protection.
 *
 * They arrive in wildly different treatments: Microlit and SSS Defence are
 * white-on-transparent (invisible on this cream ground), Schiebel is a dark
 * green, Pragati a rainbow and Royal Canin crimson. So every mark is flattened
 * to a single ink tone with `brightness(0)`, which maps any colour — white
 * included — to black while preserving the anti-aliased alpha edge. The result
 * is one consistent wall; hover lifts each back toward its true weight.
 */
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
          <div className="flex h-[74px] items-center justify-center rounded-xl border border-line bg-cream px-5 transition-colors hover:border-line-strong hover:bg-white">
            <Image
              src={client.src}
              alt={client.alt}
              width={240}
              height={74}
              className="h-auto max-h-9 w-auto max-w-full object-contain opacity-60 [filter:brightness(0)] transition-opacity hover:opacity-90"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
