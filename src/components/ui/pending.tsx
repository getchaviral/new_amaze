import type { ReactNode } from "react";

/**
 * A fact the client still has to confirm.
 *
 * The redesign brief is explicit that missing facts stay visible rather than
 * being invented, so these render as a warm gold chip wherever they appear.
 */
export function Pending({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <span
      className={dark ? "pending pending-dark" : "pending"}
      title="Awaiting confirmed content from Amaze Expo"
    >
      {children}
    </span>
  );
}

/**
 * Renders a string in which unconfirmed facts are wrapped in ⟨angle brackets⟩,
 * turning each one into a <Pending /> chip. Plain text passes straight through.
 *
 *   <Marked>{"⟨Show⟩ · ⟨City⟩ · ⟨Year⟩"}</Marked>
 */
export function Marked({
  children,
  dark = false,
}: {
  children: string;
  dark?: boolean;
}) {
  const parts = children.split(/(⟨[^⟩]*⟩)/g).filter(Boolean);

  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("⟨") && part.endsWith("⟩") ? (
          <Pending key={i} dark={dark}>
            {part.slice(1, -1)}
          </Pending>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}
