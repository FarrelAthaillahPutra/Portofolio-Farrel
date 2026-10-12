// Ilustrasi wireframe untuk tiap proyek. Ganti dengan screenshot asli kalau sudah ada
// (taruh gambarnya di folder public/ lalu pakai <Image> dari next/image).

const common = {
  viewBox: "0 0 320 200",
  preserveAspectRatio: "xMidYMid slice",
  role: "img",
};

function Land() {
  return (
    <svg {...common} aria-label="Wireframe of land parcels with one parcel marked as a token">
      <rect width="320" height="200" fill="#E4EDDF" />
      <g fill="#C9DDBF" stroke="#2E5B3A" strokeWidth="1.5" strokeLinejoin="round">
        <path d="M18 42 118 22 150 88 56 122Z" />
        <path d="M118 22 222 34 242 98 150 88Z" fill="#B3CFA5" />
        <path d="M56 122 150 88 242 98 214 178 76 172Z" />
        <path d="M222 34 302 58 298 142 242 98Z" fill="#D7E6CE" />
      </g>
      <g transform="translate(176 62)">
        <path d="M0-24 21-12v24L0 24-21 12v-24Z" fill="#1D63F0" stroke="#fff" strokeWidth="2" />
        <text y="4" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#fff">
          ICRC-7
        </text>
      </g>
    </svg>
  );
}

function Fit() {
  return (
    <svg {...common} aria-label="Wireframe of a progress ring, activity bars and a chat with a trainer">
      <rect width="320" height="200" fill="#FBE8DA" />
      <circle cx="92" cy="80" r="44" fill="none" stroke="#F0CDB5" strokeWidth="12" />
      <circle
        cx="92"
        cy="80"
        r="44"
        fill="none"
        stroke="#D9531E"
        strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray="188 277"
        transform="rotate(-90 92 80)"
      />
      <g>
        <rect x="170" y="48" width="122" height="10" rx="5" fill="#F0CDB5" />
        <rect x="170" y="48" width="86" height="10" rx="5" fill="#D9531E" />
        <rect x="170" y="76" width="122" height="10" rx="5" fill="#F0CDB5" />
        <rect x="170" y="76" width="104" height="10" rx="5" fill="#D9531E" />
        <rect x="170" y="104" width="122" height="10" rx="5" fill="#F0CDB5" />
        <rect x="170" y="104" width="52" height="10" rx="5" fill="#D9531E" />
      </g>
      <rect x="28" y="146" width="170" height="34" rx="17" fill="#fff" stroke="#E2B89B" strokeWidth="1.5" />
      <g fill="#D9531E">
        <circle cx="58" cy="163" r="4" />
        <circle cx="74" cy="163" r="4" />
        <circle cx="90" cy="163" r="4" />
      </g>
      <rect x="212" y="146" width="80" height="34" rx="17" fill="#D9531E" />
    </svg>
  );
}

function Aspira() {
  return (
    <svg {...common} aria-label="Wireframe of a list of public aspirations with support counters">
      <rect width="320" height="200" fill="#DAEDEE" />
      <g fill="#fff" stroke="#6FA9AD" strokeWidth="1.5">
        <rect x="28" y="22" width="264" height="44" rx="8" />
        <rect x="28" y="78" width="264" height="44" rx="8" />
        <rect x="28" y="134" width="264" height="44" rx="8" />
      </g>
      <g fill="#1F6F78">
        <path d="M46 52l8-12 8 12z" />
        <path d="M46 108l8-12 8 12z" />
        <path d="M46 164l8-12 8 12z" />
        <rect x="250" y="35" width="28" height="18" rx="9" />
        <rect x="250" y="91" width="28" height="18" rx="9" />
        <rect x="250" y="147" width="28" height="18" rx="9" />
      </g>
      <g fill="#A9CFD2">
        <rect x="78" y="34" width="150" height="8" rx="4" />
        <rect x="78" y="48" width="100" height="8" rx="4" />
        <rect x="78" y="90" width="160" height="8" rx="4" />
        <rect x="78" y="104" width="80" height="8" rx="4" />
        <rect x="78" y="146" width="130" height="8" rx="4" />
        <rect x="78" y="160" width="110" height="8" rx="4" />
      </g>
    </svg>
  );
}

function Pos() {
  const keys = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      keys.push(<rect key={`${r}${c}`} x={200 + c * 38} y={20 + r * 38} width="30" height="30" rx="6" />);
    }
  }
  return (
    <svg {...common} aria-label="Wireframe of a point-of-sale screen with a receipt, a keypad and a gem icon">
      <rect width="320" height="200" fill="#F5EBC9" />
      <rect x="24" y="20" width="156" height="160" rx="6" fill="#FFFDF4" stroke="#B8923A" strokeWidth="1.5" />
      <path d="M102 34l17 11-17 22-17-22z" fill="#E8D08A" stroke="#8A6A1E" strokeWidth="1.5" strokeLinejoin="round" />
      <g fill="#E3D4A3">
        <rect x="40" y="84" width="110" height="6" rx="3" />
        <rect x="40" y="100" width="124" height="6" rx="3" />
        <rect x="40" y="116" width="92" height="6" rx="3" />
        <rect x="40" y="132" width="118" height="6" rx="3" />
      </g>
      <rect x="40" y="152" width="124" height="14" rx="4" fill="#8A6A1E" />
      <g fill="#FFFDF4" stroke="#B8923A" strokeWidth="1.5">{keys}</g>
      <rect x="200" y="140" width="106" height="40" rx="8" fill="#1D63F0" />
    </svg>
  );
}

function Warehouse() {
  const xs = [26, 102, 178, 254];
  const ys = [28, 78, 128];
  const pings = [
    [122, 48],
    [274, 98],
    [46, 148],
  ];
  return (
    <svg {...common} aria-label="Wireframe of warehouse shelves with RFID signals on three boxes">
      <rect width="320" height="200" fill="#E1E7F0" />
      <g stroke="#7D8CA6" strokeWidth="1.5">
        <path d="M14 70H306M14 120H306M14 170H306" />
      </g>
      <g fill="#FCFCFD" stroke="#7D8CA6" strokeWidth="1.5">
        {ys.flatMap((y) => xs.map((x) => <rect key={`${x}-${y}`} x={x} y={y} width="40" height="40" rx="4" />))}
      </g>
      <g fill="none" stroke="#1D63F0" strokeWidth="1.5">
        {pings.map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="13" opacity=".6" />
            <circle cx={cx} cy={cy} r="23" opacity=".3" />
          </g>
        ))}
      </g>
      <g fill="#1D63F0">
        {pings.map(([cx, cy]) => (
          <circle key={`d${cx}-${cy}`} cx={cx} cy={cy} r="4" />
        ))}
      </g>
    </svg>
  );
}

const map = { land: Land, fit: Fit, aspira: Aspira, pos: Pos, warehouse: Warehouse };

export default function Thumb({ kind }) {
  const Component = map[kind];
  return <Component />;
}
