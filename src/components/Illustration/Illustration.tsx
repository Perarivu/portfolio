/**
 * Hand-drawn, black line-art illustration echoing the loose outline
 * style of the reference "kin" team lineup — used in place of the
 * previous neon dev-desk SVG.
 */
export default function Illustration() {
  return (
    <svg
      viewBox="0 0 420 460"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <g fill="none" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* desk */}
        <path d="M40 340 H380" />
        <path d="M60 340 V300 H340 V340" />

        {/* laptop */}
        <path d="M150 300 V255 H270 V300" />
        <path d="M140 300 H280 L268 310 H152 Z" />
        <path d="M170 275 L200 288 L232 272" />

        {/* mug */}
        <path d="M300 300 V270 H326 V300" />
        <path d="M326 278 Q340 278 340 290 Q340 302 326 300" />
        <path d="M308 262 Q311 256 308 250" />
        <path d="M318 262 Q321 256 318 250" />

        {/* chair */}
        <path d="M200 420 V370" />
        <path d="M175 420 H225" />

        {/* torso */}
        <path d="M165 370 Q168 320 210 308 Q252 320 255 370 Z" />

        {/* collar */}
        <path d="M198 308 L210 324 L222 308" />

        {/* neck */}
        <path d="M202 292 V310" />
        <path d="M218 292 V310" />

        {/* head */}
        <ellipse cx="210" cy="258" rx="34" ry="36" />

        {/* hair */}
        <path d="M178 250 Q184 218 210 214 Q236 218 242 250" />

        {/* eyes */}
        <circle cx="199" cy="260" r="2.6" fill="var(--ink)" />
        <circle cx="221" cy="260" r="2.6" fill="var(--ink)" />

        {/* smile */}
        <path d="M198 272 Q210 280 222 272" />

        {/* left arm to laptop */}
        <path d="M168 358 Q140 340 150 305" />

        {/* right arm to mug */}
        <path d="M252 358 Q288 340 302 300" />
      </g>
    </svg>
  );
}
