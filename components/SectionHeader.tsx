/*
 * SectionHeader.tsx
 * ava-dev
 *
 * Next.js
 *
 * Created by Radoslav Bley
 * Copyright © 2026 Radoslav Bley. All Rights Reserved.
 */

// Types
type Props = {
  text: string;
};

export default function SectionHeader({ text }: Props) {
  return (
    <div className="absolute top-0 left-1/2 flex w-full -translate-x-1/2 -translate-y-26 items-center justify-center text-center text-nowrap opacity-5 sm:-translate-y-36">
      <h2 className="bg-clip-text text-5xl font-black text-transparent uppercase sm:text-7xl">
        {text}
      </h2>
    </div>
  );
}
