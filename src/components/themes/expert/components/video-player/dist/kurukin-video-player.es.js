import { jsx as Y, jsxs as Xe } from "react/jsx-runtime";
import { forwardRef as Wa, createElement as dn, useState as Ye, useEffect as Ie, useRef as Ve, useCallback as Ce } from "react";
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uc = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), qa = (...i) => i.filter((e, t, s) => !!e && e.trim() !== "" && s.indexOf(e) === t).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var hc = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dc = Wa(
  ({
    color: i = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: s,
    className: n = "",
    children: r,
    iconNode: a,
    ...o
  }, c) => dn(
    "svg",
    {
      ref: c,
      ...hc,
      width: e,
      height: e,
      stroke: i,
      strokeWidth: s ? Number(t) * 24 / Number(e) : t,
      className: qa("lucide", n),
      ...o
    },
    [
      ...a.map(([l, u]) => dn(l, u)),
      ...Array.isArray(r) ? r : [r]
    ]
  )
);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zt = (i, e) => {
  const t = Wa(
    ({ className: s, ...n }, r) => dn(dc, {
      ref: r,
      iconNode: e,
      className: qa(`lucide-${uc(i)}`, s),
      ...n
    })
  );
  return t.displayName = `${i}`, t;
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fc = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], gc = Zt("ExternalLink", fc);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mc = [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
], pc = Zt("Pause", mc);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yc = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]], _i = Zt("Play", yc);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tc = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
], Ec = Zt("RotateCcw", Tc);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vc = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
  ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]
], Bn = Zt("Volume2", vc);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bc = [
  [
    "path",
    {
      d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
      key: "uqj9uw"
    }
  ],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
], Sc = Zt("VolumeX", bc);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xc = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ac = Zt("X", xc);
function Lc({ callToAction: i, onDismiss: e }) {
  return /* @__PURE__ */ Y("div", { className: "absolute inset-0 z-30 flex items-center justify-center bg-black/70 px-6", children: /* @__PURE__ */ Xe("div", { className: "relative w-full max-w-lg rounded-3xl border border-white/15 bg-zinc-950/95 p-6 text-center text-white shadow-2xl", children: [
    i.isDismissible ? /* @__PURE__ */ Y(
      "button",
      {
        type: "button",
        onClick: e,
        className: "absolute right-3 top-3 rounded-full p-1.5 text-white/70 transition hover:bg-white/10 hover:text-white",
        "aria-label": "Cerrar",
        children: /* @__PURE__ */ Y(Ac, { className: "h-5 w-5" })
      }
    ) : null,
    /* @__PURE__ */ Y("p", { className: "text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80", children: "Oferta activa" }),
    /* @__PURE__ */ Y("h3", { className: "mt-3 text-2xl font-bold leading-tight", children: i.headline }),
    /* @__PURE__ */ Xe(
      "a",
      {
        href: i.buttonUrl,
        target: "_blank",
        rel: "noreferrer",
        className: "mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3 text-base font-semibold text-black transition hover:bg-emerald-300",
        children: [
          i.buttonText,
          /* @__PURE__ */ Y(gc, { className: "h-4 w-4" })
        ]
      }
    )
  ] }) });
}
function Ic(i, e, t) {
  return Math.min(Math.max(i, e), t);
}
function Rc(i, e) {
  const t = Number.isFinite(i) ? Math.max(i, 0) : 0, s = e > 0 ? e : 1e3;
  let n = 0;
  if (t <= 20)
    n = t / 20 * 30;
  else if (t <= s * 0.5) {
    const r = Math.max(s * 0.5 - 20, 1);
    n = 30 + (t - 20) / r * 40;
  } else {
    const r = Math.max(s * 0.5, 1);
    n = 70 + (t - s * 0.5) / r * 28;
  }
  return Ic(n, 0, 98);
}
function _c({ color: i, currentTime: e, duration: t }) {
  const s = Rc(e, t);
  return /* @__PURE__ */ Y("div", { className: "pointer-events-none absolute bottom-0 left-0 right-0 z-[60] h-[6px] w-full overflow-hidden bg-black/20", "aria-hidden": "true", children: /* @__PURE__ */ Y(
    "div",
    {
      className: "h-full transition-all duration-300 ease-linear rounded-r-full",
      style: {
        width: `${s}%`,
        backgroundColor: i || "#10b981"
      }
    }
  ) });
}
const kc = {
  center: "items-center justify-center",
  "top-left": "items-start justify-start p-6",
  "top-right": "items-start justify-end p-6",
  "bottom-left": "items-end justify-start p-6",
  "bottom-right": "items-end justify-end p-6"
};
function Cc({ config: i, onActivateSound: e }) {
  const [t, s] = Ye(!1), n = i.overlayPosition || "center";
  return Ie(() => {
    s(!1);
  }, [i.overlayImageUrl]), /* @__PURE__ */ Y(
    "button",
    {
      type: "button",
      onClick: e,
      className: `absolute inset-0 z-20 flex bg-black/30 ${kc[n]}`,
      children: i.overlayImageUrl && !t ? /* @__PURE__ */ Y(
        "img",
        {
          src: i.overlayImageUrl,
          alt: i.buttonText || "Activar sonido",
          className: "h-auto w-auto max-h-full max-w-full object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105",
          onError: () => s(!0)
        }
      ) : /* @__PURE__ */ Xe("div", { className: "flex items-center gap-3 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-left backdrop-blur-md", children: [
        /* @__PURE__ */ Y(
          "div",
          {
            className: "flex h-12 w-12 items-center justify-center rounded-full animate-pulse",
            style: {
              backgroundColor: i.fallbackColor || "#f39c12",
              boxShadow: `0 0 20px ${i.fallbackColor || "#f39c12"}66`
            },
            children: /* @__PURE__ */ Y(Bn, { className: "h-6 w-6 text-white", fill: "currentColor" })
          }
        ),
        /* @__PURE__ */ Xe("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ Y("span", { className: "text-sm font-extrabold tracking-[0.16em] text-white", children: i.fallbackText1 || "CLICK PARA" }),
          /* @__PURE__ */ Y("span", { className: "mt-1 text-sm font-extrabold tracking-[0.16em] text-white", children: i.fallbackText2 || "ACTIVAR SONIDO" })
        ] })
      ] })
    }
  );
}
function Tr(i) {
  if (!Number.isFinite(i) || i <= 0)
    return "0:00";
  const e = Math.floor(i), t = Math.floor(e / 60), s = e % 60;
  return `${t}:${s.toString().padStart(2, "0")}`;
}
function wc({
  currentTime: i,
  duration: e,
  isMuted: t,
  isPlaying: s,
  onRestart: n,
  onSeek: r,
  onToggleMute: a,
  onTogglePlay: o,
  variant: c = "standard"
}) {
  const l = e > 0 ? e : Math.max(i, 1), u = c === "minimal";
  return /* @__PURE__ */ Y(
    "div",
    {
      className: u ? "kurukin-vsl-controls absolute inset-x-0 bottom-0 z-10 flex justify-center bg-gradient-to-t from-black/55 via-black/10 to-transparent px-4 pb-4 pt-10" : "absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/82 via-black/38 to-transparent px-3 pb-3 pt-7",
      children: /* @__PURE__ */ Xe(
        "div",
        {
          className: u ? "inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-2.5 py-2 text-white backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.24)]" : "rounded-2xl border border-white/10 bg-black/28 px-3 py-2.5 backdrop-blur-md",
          children: [
            u ? null : /* @__PURE__ */ Y(
              "input",
              {
                type: "range",
                min: 0,
                max: l,
                step: 0.1,
                value: Math.min(i, l),
                onChange: (h) => r(Number(h.target.value)),
                className: "h-1 w-full cursor-pointer accent-white/90",
                "aria-label": "Buscar en el video"
              }
            ),
            /* @__PURE__ */ Xe("div", { className: u ? "flex items-center gap-2 text-white" : "mt-2.5 flex flex-wrap items-center gap-2 text-white", children: [
              /* @__PURE__ */ Y(
                "button",
                {
                  type: "button",
                  onClick: o,
                  className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/10 transition hover:bg-white/15",
                  "aria-label": s ? "Pausar video" : "Reproducir video",
                  children: s ? /* @__PURE__ */ Y(pc, { className: "h-4 w-4" }) : /* @__PURE__ */ Y(_i, { className: "ml-0.5 h-4 w-4", fill: "currentColor" })
                }
              ),
              /* @__PURE__ */ Y(
                "button",
                {
                  type: "button",
                  onClick: a,
                  className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/10 transition hover:bg-white/15",
                  "aria-label": t ? "Activar sonido" : "Silenciar video",
                  children: t ? /* @__PURE__ */ Y(Sc, { className: "h-4 w-4" }) : /* @__PURE__ */ Y(Bn, { className: "h-4 w-4" })
                }
              ),
              u ? null : /* @__PURE__ */ Y(
                "button",
                {
                  type: "button",
                  onClick: n,
                  className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/10 transition hover:bg-white/15",
                  "aria-label": "Reiniciar video",
                  children: /* @__PURE__ */ Y(Ec, { className: "h-3.5 w-3.5" })
                }
              ),
              u ? null : /* @__PURE__ */ Xe("div", { className: "ml-auto text-xs font-medium text-white/72", children: [
                Tr(i),
                " / ",
                Tr(e)
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function Dc({
  imageUrl: i,
  eyebrow: e,
  title: t,
  description: s,
  buttonText: n,
  visible: r,
  onPlay: a
}) {
  return /* @__PURE__ */ Xe(
    "button",
    {
      type: "button",
      onClick: a,
      className: [
        "absolute inset-0 z-20 overflow-hidden transition duration-300",
        r ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      ].join(" "),
      children: [
        i ? /* @__PURE__ */ Y("img", { src: i, alt: t, className: "absolute inset-0 h-full w-full object-cover" }) : null,
        /* @__PURE__ */ Y("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.25),transparent_45%),linear-gradient(135deg,rgba(9,9,11,0.88),rgba(9,9,11,0.96))]" }),
        /* @__PURE__ */ Y("div", { className: "absolute inset-0 bg-black/35" }),
        /* @__PURE__ */ Xe("div", { className: "relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center text-white", children: [
          /* @__PURE__ */ Y("span", { className: "flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm", children: /* @__PURE__ */ Y(_i, { className: "ml-1 h-10 w-10 fill-white text-white" }) }),
          e ? /* @__PURE__ */ Y("span", { className: "mt-6 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300", children: e }) : null,
          /* @__PURE__ */ Y("h3", { className: "mt-3 max-w-2xl text-2xl font-bold md:text-3xl", children: t }),
          /* @__PURE__ */ Y("p", { className: "mt-3 max-w-xl text-sm text-white/80 md:text-base", children: s }),
          /* @__PURE__ */ Y("span", { className: "mt-6 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur-sm", children: n })
        ] })
      ]
    }
  );
}
function Pc({ onUnmute: i }) {
  return /* @__PURE__ */ Xe(
    "button",
    {
      type: "button",
      onClick: i,
      "aria-label": "Activar sonido",
      className: "group absolute inset-0 z-50 cursor-pointer",
      children: [
        /* @__PURE__ */ Xe(
          "span",
          {
            className: "pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-left shadow-[0_10px_28px_rgba(0,0,0,0.22)] ring-1 ring-white/10 backdrop-blur-sm",
            style: { backgroundColor: "rgba(0, 0, 0, 0.4)" },
            children: [
              /* @__PURE__ */ Y("span", { className: "flex h-7 w-7 items-center justify-center rounded-full bg-white/5", style: { color: "#f5c96b" }, children: /* @__PURE__ */ Y(Bn, { className: "h-4 w-4 animate-pulse", fill: "currentColor" }) }),
              /* @__PURE__ */ Y("span", { className: "text-[11px] font-light uppercase tracking-[0.14em] sm:text-xs", style: { color: "#f5c96b" }, children: "CLIC PARA ACTIVAR SONIDO" })
            ]
          }
        ),
        /* @__PURE__ */ Y("span", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ Y(
          "span",
          {
            className: "flex h-28 w-28 items-center justify-center rounded-full ring-1 ring-white/10 backdrop-blur-[2px] transition-transform duration-200 ease-out motion-safe:group-hover:scale-105 sm:h-32 sm:w-32",
            style: { backgroundColor: "rgba(255, 255, 255, 0.04)", color: "rgba(255, 255, 255, 0.15)" },
            children: /* @__PURE__ */ Y(_i, { className: "ml-1 h-14 w-14 fill-current drop-shadow-[0_8px_18px_rgba(0,0,0,0.18)] sm:h-16 sm:w-16" })
          }
        ) })
      ]
    }
  );
}
const G = Number.isFinite || function(i) {
  return typeof i == "number" && isFinite(i);
}, Oc = Number.isSafeInteger || function(i) {
  return typeof i == "number" && Math.abs(i) <= Mc;
}, Mc = Number.MAX_SAFE_INTEGER || 9007199254740991;
let q = /* @__PURE__ */ (function(i) {
  return i.NETWORK_ERROR = "networkError", i.MEDIA_ERROR = "mediaError", i.KEY_SYSTEM_ERROR = "keySystemError", i.MUX_ERROR = "muxError", i.OTHER_ERROR = "otherError", i;
})({}), C = /* @__PURE__ */ (function(i) {
  return i.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", i.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", i.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", i.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", i.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", i.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", i.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", i.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", i.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", i.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", i.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR = "keySystemDestroyMediaKeysError", i.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR = "keySystemDestroyCloseSessionError", i.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR = "keySystemDestroyRemoveSessionError", i.MANIFEST_LOAD_ERROR = "manifestLoadError", i.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", i.MANIFEST_PARSING_ERROR = "manifestParsingError", i.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", i.LEVEL_EMPTY_ERROR = "levelEmptyError", i.LEVEL_LOAD_ERROR = "levelLoadError", i.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", i.LEVEL_PARSING_ERROR = "levelParsingError", i.LEVEL_SWITCH_ERROR = "levelSwitchError", i.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", i.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", i.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", i.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", i.FRAG_LOAD_ERROR = "fragLoadError", i.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", i.FRAG_DECRYPT_ERROR = "fragDecryptError", i.FRAG_PARSING_ERROR = "fragParsingError", i.FRAG_GAP = "fragGap", i.REMUX_ALLOC_ERROR = "remuxAllocError", i.KEY_LOAD_ERROR = "keyLoadError", i.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", i.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", i.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", i.BUFFER_APPEND_ERROR = "bufferAppendError", i.BUFFER_APPENDING_ERROR = "bufferAppendingError", i.BUFFER_STALLED_ERROR = "bufferStalledError", i.BUFFER_FULL_ERROR = "bufferFullError", i.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", i.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", i.ASSET_LIST_LOAD_ERROR = "assetListLoadError", i.ASSET_LIST_LOAD_TIMEOUT = "assetListLoadTimeout", i.ASSET_LIST_PARSING_ERROR = "assetListParsingError", i.INTERSTITIAL_ASSET_ITEM_ERROR = "interstitialAssetItemError", i.INTERNAL_EXCEPTION = "internalException", i.INTERNAL_ABORTED = "aborted", i.ATTACH_MEDIA_ERROR = "attachMediaError", i.UNKNOWN = "unknown", i;
})({}), y = /* @__PURE__ */ (function(i) {
  return i.MEDIA_ATTACHING = "hlsMediaAttaching", i.MEDIA_ATTACHED = "hlsMediaAttached", i.MEDIA_DETACHING = "hlsMediaDetaching", i.MEDIA_DETACHED = "hlsMediaDetached", i.MEDIA_ENDED = "hlsMediaEnded", i.STALL_RESOLVED = "hlsStallResolved", i.BUFFER_RESET = "hlsBufferReset", i.BUFFER_CODECS = "hlsBufferCodecs", i.BUFFER_CREATED = "hlsBufferCreated", i.BUFFER_APPENDING = "hlsBufferAppending", i.BUFFER_APPENDED = "hlsBufferAppended", i.BUFFER_EOS = "hlsBufferEos", i.BUFFERED_TO_END = "hlsBufferedToEnd", i.BUFFER_FLUSHING = "hlsBufferFlushing", i.BUFFER_FLUSHED = "hlsBufferFlushed", i.MANIFEST_LOADING = "hlsManifestLoading", i.MANIFEST_LOADED = "hlsManifestLoaded", i.MANIFEST_PARSED = "hlsManifestParsed", i.LEVEL_SWITCHING = "hlsLevelSwitching", i.LEVEL_SWITCHED = "hlsLevelSwitched", i.LEVEL_LOADING = "hlsLevelLoading", i.LEVEL_LOADED = "hlsLevelLoaded", i.LEVEL_UPDATED = "hlsLevelUpdated", i.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", i.LEVELS_UPDATED = "hlsLevelsUpdated", i.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", i.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", i.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", i.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", i.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", i.AUDIO_TRACK_UPDATED = "hlsAudioTrackUpdated", i.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", i.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", i.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", i.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", i.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", i.SUBTITLE_TRACK_UPDATED = "hlsSubtitleTrackUpdated", i.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", i.CUES_PARSED = "hlsCuesParsed", i.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", i.INIT_PTS_FOUND = "hlsInitPtsFound", i.FRAG_LOADING = "hlsFragLoading", i.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", i.FRAG_LOADED = "hlsFragLoaded", i.FRAG_DECRYPTED = "hlsFragDecrypted", i.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", i.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", i.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", i.FRAG_PARSED = "hlsFragParsed", i.FRAG_BUFFERED = "hlsFragBuffered", i.FRAG_CHANGED = "hlsFragChanged", i.FPS_DROP = "hlsFpsDrop", i.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", i.MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated", i.ERROR = "hlsError", i.DESTROYING = "hlsDestroying", i.KEY_LOADING = "hlsKeyLoading", i.KEY_LOADED = "hlsKeyLoaded", i.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", i.BACK_BUFFER_REACHED = "hlsBackBufferReached", i.STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded", i.ASSET_LIST_LOADING = "hlsAssetListLoading", i.ASSET_LIST_LOADED = "hlsAssetListLoaded", i.INTERSTITIALS_UPDATED = "hlsInterstitialsUpdated", i.INTERSTITIALS_BUFFERED_TO_BOUNDARY = "hlsInterstitialsBufferedToBoundary", i.INTERSTITIAL_ASSET_PLAYER_CREATED = "hlsInterstitialAssetPlayerCreated", i.INTERSTITIAL_STARTED = "hlsInterstitialStarted", i.INTERSTITIAL_ASSET_STARTED = "hlsInterstitialAssetStarted", i.INTERSTITIAL_ASSET_ENDED = "hlsInterstitialAssetEnded", i.INTERSTITIAL_ASSET_ERROR = "hlsInterstitialAssetError", i.INTERSTITIAL_ENDED = "hlsInterstitialEnded", i.INTERSTITIALS_PRIMARY_RESUMED = "hlsInterstitialsPrimaryResumed", i.PLAYOUT_LIMIT_REACHED = "hlsPlayoutLimitReached", i.EVENT_CUE_ENTER = "hlsEventCueEnter", i;
})({});
var re = {
  MANIFEST: "manifest",
  LEVEL: "level",
  AUDIO_TRACK: "audioTrack",
  SUBTITLE_TRACK: "subtitleTrack"
}, j = {
  MAIN: "main",
  AUDIO: "audio",
  SUBTITLE: "subtitle"
};
class es {
  //  About half of the estimated value will be from the last |halfLife| samples by weight.
  constructor(e, t = 0, s = 0) {
    this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = e, this.alpha_ = e ? Math.exp(Math.log(0.5) / e) : 0, this.estimate_ = t, this.totalWeight_ = s;
  }
  sample(e, t) {
    const s = Math.pow(this.alpha_, e);
    this.estimate_ = t * (1 - s) + s * this.estimate_, this.totalWeight_ += e;
  }
  getTotalWeight() {
    return this.totalWeight_;
  }
  getEstimate() {
    if (this.alpha_) {
      const e = 1 - Math.pow(this.alpha_, this.totalWeight_);
      if (e)
        return this.estimate_ / e;
    }
    return this.estimate_;
  }
}
class Fc {
  constructor(e, t, s, n = 100) {
    this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = s, this.minWeight_ = 1e-3, this.minDelayMs_ = 50, this.slow_ = new es(e), this.fast_ = new es(t), this.defaultTTFB_ = n, this.ttfb_ = new es(e);
  }
  update(e, t) {
    const {
      slow_: s,
      fast_: n,
      ttfb_: r
    } = this;
    s.halfLife !== e && (this.slow_ = new es(e, s.getEstimate(), s.getTotalWeight())), n.halfLife !== t && (this.fast_ = new es(t, n.getEstimate(), n.getTotalWeight())), r.halfLife !== e && (this.ttfb_ = new es(e, r.getEstimate(), r.getTotalWeight()));
  }
  sample(e, t) {
    e = Math.max(e, this.minDelayMs_);
    const s = 8 * t, n = e / 1e3, r = s / n;
    this.fast_.sample(n, r), this.slow_.sample(n, r);
  }
  sampleTTFB(e) {
    const t = e / 1e3, s = Math.sqrt(2) * Math.exp(-Math.pow(t, 2) / 2);
    this.ttfb_.sample(s, Math.max(e, 5));
  }
  canEstimate() {
    return this.fast_.getTotalWeight() >= this.minWeight_;
  }
  getEstimate() {
    return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
  }
  getEstimateTTFB() {
    return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_;
  }
  get defaultEstimate() {
    return this.defaultEstimate_;
  }
  destroy() {
  }
}
function Nc(i, e, t) {
  return (e = Bc(e)) in i ? Object.defineProperty(i, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[e] = t, i;
}
function pe() {
  return pe = Object.assign ? Object.assign.bind() : function(i) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var s in t) ({}).hasOwnProperty.call(t, s) && (i[s] = t[s]);
    }
    return i;
  }, pe.apply(null, arguments);
}
function Er(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(i);
    e && (s = s.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), t.push.apply(t, s);
  }
  return t;
}
function fe(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Er(Object(t), !0).forEach(function(s) {
      Nc(i, s, t[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : Er(Object(t)).forEach(function(s) {
      Object.defineProperty(i, s, Object.getOwnPropertyDescriptor(t, s));
    });
  }
  return i;
}
function $c(i, e) {
  if (typeof i != "object" || !i) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var s = t.call(i, e);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(i);
}
function Bc(i) {
  var e = $c(i, "string");
  return typeof e == "symbol" ? e : e + "";
}
class rt {
  constructor(e, t) {
    this.trace = void 0, this.debug = void 0, this.log = void 0, this.warn = void 0, this.info = void 0, this.error = void 0;
    const s = `[${e}]:`;
    this.trace = Ot, this.debug = t.debug.bind(null, s), this.log = t.log.bind(null, s), this.warn = t.warn.bind(null, s), this.info = t.info.bind(null, s), this.error = t.error.bind(null, s);
  }
}
const Ot = function() {
}, Uc = {
  trace: Ot,
  debug: Ot,
  log: Ot,
  warn: Ot,
  info: Ot,
  error: Ot
};
function fn() {
  return pe({}, Uc);
}
function Gc(i, e) {
  const t = self.console[i];
  return t ? t.bind(self.console, `${e ? "[" + e + "] " : ""}[${i}] >`) : Ot;
}
function vr(i, e, t) {
  return e[i] ? e[i].bind(e) : Gc(i, t);
}
const gn = fn();
function Kc(i, e, t) {
  const s = fn();
  if (typeof console == "object" && i === !0 || typeof i == "object") {
    const n = [
      // Remove out from list here to hard-disable a log-level
      // 'trace',
      "debug",
      "log",
      "info",
      "warn",
      "error"
    ];
    n.forEach((r) => {
      s[r] = vr(r, i, t);
    });
    try {
      s.log(`Debug logs enabled for "${e}" in hls.js version 1.6.15`);
    } catch {
      return fn();
    }
    n.forEach((r) => {
      gn[r] = vr(r, i);
    });
  } else
    pe(gn, s);
  return s;
}
const ge = gn;
function Bt(i = !0) {
  return typeof self > "u" ? void 0 : (i || !self.MediaSource) && self.ManagedMediaSource || self.MediaSource || self.WebKitMediaSource;
}
function Vc(i) {
  return typeof self < "u" && i === self.ManagedMediaSource;
}
function Ya(i, e) {
  const t = Object.keys(i), s = Object.keys(e), n = t.length, r = s.length;
  return !n || !r || n === r && !t.some((a) => s.indexOf(a) === -1);
}
function it(i, e = !1) {
  if (typeof TextDecoder < "u") {
    const l = new TextDecoder("utf-8").decode(i);
    if (e) {
      const u = l.indexOf("\0");
      return u !== -1 ? l.substring(0, u) : l;
    }
    return l.replace(/\0/g, "");
  }
  const t = i.length;
  let s, n, r, a = "", o = 0;
  for (; o < t; ) {
    if (s = i[o++], s === 0 && e)
      return a;
    if (s === 0 || s === 3)
      continue;
    switch (s >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        a += String.fromCharCode(s);
        break;
      case 12:
      case 13:
        n = i[o++], a += String.fromCharCode((s & 31) << 6 | n & 63);
        break;
      case 14:
        n = i[o++], r = i[o++], a += String.fromCharCode((s & 15) << 12 | (n & 63) << 6 | (r & 63) << 0);
        break;
    }
  }
  return a;
}
function Be(i) {
  let e = "";
  for (let t = 0; t < i.length; t++) {
    let s = i[t].toString(16);
    s.length < 2 && (s = "0" + s), e += s;
  }
  return e;
}
function za(i) {
  return Uint8Array.from(i.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer;
}
function Hc(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Ni = { exports: {} }, br;
function jc() {
  return br || (br = 1, (function(i, e) {
    (function(t) {
      var s = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, n = /^(?=([^\/?#]*))\1([^]*)$/, r = /(?:\/|^)\.(?=\/)/g, a = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, o = {
        // If opts.alwaysNormalize is true then the path will always be normalized even when it starts with / or //
        // E.g
        // With opts.alwaysNormalize = false (default, spec compliant)
        // http://a.com/b/cd + /e/f/../g => http://a.com/e/f/../g
        // With opts.alwaysNormalize = true (not spec compliant)
        // http://a.com/b/cd + /e/f/../g => http://a.com/e/g
        buildAbsoluteURL: function(c, l, u) {
          if (u = u || {}, c = c.trim(), l = l.trim(), !l) {
            if (!u.alwaysNormalize)
              return c;
            var h = o.parseURL(c);
            if (!h)
              throw new Error("Error trying to parse base URL.");
            return h.path = o.normalizePath(
              h.path
            ), o.buildURLFromParts(h);
          }
          var d = o.parseURL(l);
          if (!d)
            throw new Error("Error trying to parse relative URL.");
          if (d.scheme)
            return u.alwaysNormalize ? (d.path = o.normalizePath(d.path), o.buildURLFromParts(d)) : l;
          var g = o.parseURL(c);
          if (!g)
            throw new Error("Error trying to parse base URL.");
          if (!g.netLoc && g.path && g.path[0] !== "/") {
            var f = n.exec(g.path);
            g.netLoc = f[1], g.path = f[2];
          }
          g.netLoc && !g.path && (g.path = "/");
          var m = {
            // 2c) Otherwise, the embedded URL inherits the scheme of
            // the base URL.
            scheme: g.scheme,
            netLoc: d.netLoc,
            path: null,
            params: d.params,
            query: d.query,
            fragment: d.fragment
          };
          if (!d.netLoc && (m.netLoc = g.netLoc, d.path[0] !== "/"))
            if (!d.path)
              m.path = g.path, d.params || (m.params = g.params, d.query || (m.query = g.query));
            else {
              var p = g.path, T = p.substring(0, p.lastIndexOf("/") + 1) + d.path;
              m.path = o.normalizePath(T);
            }
          return m.path === null && (m.path = u.alwaysNormalize ? o.normalizePath(d.path) : d.path), o.buildURLFromParts(m);
        },
        parseURL: function(c) {
          var l = s.exec(c);
          return l ? {
            scheme: l[1] || "",
            netLoc: l[2] || "",
            path: l[3] || "",
            params: l[4] || "",
            query: l[5] || "",
            fragment: l[6] || ""
          } : null;
        },
        normalizePath: function(c) {
          for (c = c.split("").reverse().join("").replace(r, ""); c.length !== (c = c.replace(a, "")).length; )
            ;
          return c.split("").reverse().join("");
        },
        buildURLFromParts: function(c) {
          return c.scheme + c.netLoc + c.path + c.params + c.query + c.fragment;
        }
      };
      i.exports = o;
    })();
  })(Ni)), Ni.exports;
}
var Un = jc();
class Gn {
  constructor() {
    this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
      start: 0,
      first: 0,
      end: 0
    }, this.parsing = {
      start: 0,
      end: 0
    }, this.buffering = {
      start: 0,
      first: 0,
      end: 0
    };
  }
}
var ye = {
  AUDIO: "audio",
  VIDEO: "video",
  AUDIOVIDEO: "audiovideo"
};
class Xa {
  constructor(e) {
    this._byteRange = null, this._url = null, this._stats = null, this._streams = null, this.base = void 0, this.relurl = void 0, typeof e == "string" && (e = {
      url: e
    }), this.base = e, qc(this, "stats");
  }
  // setByteRange converts a EXT-X-BYTERANGE attribute into a two element array
  setByteRange(e, t) {
    const s = e.split("@", 2);
    let n;
    s.length === 1 ? n = (t == null ? void 0 : t.byteRangeEndOffset) || 0 : n = parseInt(s[1]), this._byteRange = [n, parseInt(s[0]) + n];
  }
  get baseurl() {
    return this.base.url;
  }
  get byteRange() {
    return this._byteRange === null ? [] : this._byteRange;
  }
  get byteRangeStartOffset() {
    return this.byteRange[0];
  }
  get byteRangeEndOffset() {
    return this.byteRange[1];
  }
  get elementaryStreams() {
    return this._streams === null && (this._streams = {
      [ye.AUDIO]: null,
      [ye.VIDEO]: null,
      [ye.AUDIOVIDEO]: null
    }), this._streams;
  }
  set elementaryStreams(e) {
    this._streams = e;
  }
  get hasStats() {
    return this._stats !== null;
  }
  get hasStreams() {
    return this._streams !== null;
  }
  get stats() {
    return this._stats === null && (this._stats = new Gn()), this._stats;
  }
  set stats(e) {
    this._stats = e;
  }
  get url() {
    return !this._url && this.baseurl && this.relurl && (this._url = Un.buildAbsoluteURL(this.baseurl, this.relurl, {
      alwaysNormalize: !0
    })), this._url || "";
  }
  set url(e) {
    this._url = e;
  }
  clearElementaryStreamInfo() {
    const {
      elementaryStreams: e
    } = this;
    e[ye.AUDIO] = null, e[ye.VIDEO] = null, e[ye.AUDIOVIDEO] = null;
  }
}
function Le(i) {
  return i.sn !== "initSegment";
}
class $i extends Xa {
  constructor(e, t) {
    super(t), this._decryptdata = null, this._programDateTime = null, this._ref = null, this._bitrate = void 0, this.rawProgramDateTime = null, this.tagList = [], this.duration = 0, this.sn = 0, this.levelkeys = void 0, this.type = void 0, this.loader = null, this.keyLoader = null, this.level = -1, this.cc = 0, this.startPTS = void 0, this.endPTS = void 0, this.startDTS = void 0, this.endDTS = void 0, this.start = 0, this.playlistOffset = 0, this.deltaPTS = void 0, this.maxStartPTS = void 0, this.minEndPTS = void 0, this.data = void 0, this.bitrateTest = !1, this.title = null, this.initSegment = null, this.endList = void 0, this.gap = void 0, this.urlId = 0, this.type = e;
  }
  get byteLength() {
    if (this.hasStats) {
      const e = this.stats.total;
      if (e)
        return e;
    }
    if (this.byteRange.length) {
      const e = this.byteRange[0], t = this.byteRange[1];
      if (G(e) && G(t))
        return t - e;
    }
    return null;
  }
  get bitrate() {
    return this.byteLength ? this.byteLength * 8 / this.duration : this._bitrate ? this._bitrate : null;
  }
  set bitrate(e) {
    this._bitrate = e;
  }
  get decryptdata() {
    var e;
    const {
      levelkeys: t
    } = this;
    if (!t || t.NONE)
      return null;
    if (t.identity)
      this._decryptdata || (this._decryptdata = t.identity.getDecryptData(this.sn));
    else if (!((e = this._decryptdata) != null && e.keyId)) {
      const s = Object.keys(t);
      if (s.length === 1) {
        const n = this._decryptdata = t[s[0]] || null;
        n && (this._decryptdata = n.getDecryptData(this.sn, t));
      }
    }
    return this._decryptdata;
  }
  get end() {
    return this.start + this.duration;
  }
  get endProgramDateTime() {
    if (this.programDateTime === null)
      return null;
    const e = G(this.duration) ? this.duration : 0;
    return this.programDateTime + e * 1e3;
  }
  get encrypted() {
    var e;
    if ((e = this._decryptdata) != null && e.encrypted)
      return !0;
    if (this.levelkeys) {
      var t;
      const s = Object.keys(this.levelkeys), n = s.length;
      if (n > 1 || n === 1 && (t = this.levelkeys[s[0]]) != null && t.encrypted)
        return !0;
    }
    return !1;
  }
  get programDateTime() {
    return this._programDateTime === null && this.rawProgramDateTime && (this.programDateTime = Date.parse(this.rawProgramDateTime)), this._programDateTime;
  }
  set programDateTime(e) {
    if (!G(e)) {
      this._programDateTime = this.rawProgramDateTime = null;
      return;
    }
    this._programDateTime = e;
  }
  get ref() {
    return Le(this) ? (this._ref || (this._ref = {
      base: this.base,
      start: this.start,
      duration: this.duration,
      sn: this.sn,
      programDateTime: this.programDateTime
    }), this._ref) : null;
  }
  addStart(e) {
    this.setStart(this.start + e);
  }
  setStart(e) {
    this.start = e, this._ref && (this._ref.start = e);
  }
  setDuration(e) {
    this.duration = e, this._ref && (this._ref.duration = e);
  }
  setKeyFormat(e) {
    const t = this.levelkeys;
    if (t) {
      var s;
      const n = t[e];
      n && !((s = this._decryptdata) != null && s.keyId) && (this._decryptdata = n.getDecryptData(this.sn, t));
    }
  }
  abortRequests() {
    var e, t;
    (e = this.loader) == null || e.abort(), (t = this.keyLoader) == null || t.abort();
  }
  setElementaryStreamInfo(e, t, s, n, r, a = !1) {
    const {
      elementaryStreams: o
    } = this, c = o[e];
    if (!c) {
      o[e] = {
        startPTS: t,
        endPTS: s,
        startDTS: n,
        endDTS: r,
        partial: a
      };
      return;
    }
    c.startPTS = Math.min(c.startPTS, t), c.endPTS = Math.max(c.endPTS, s), c.startDTS = Math.min(c.startDTS, n), c.endDTS = Math.max(c.endDTS, r);
  }
}
class Wc extends Xa {
  constructor(e, t, s, n, r) {
    super(s), this.fragOffset = 0, this.duration = 0, this.gap = !1, this.independent = !1, this.relurl = void 0, this.fragment = void 0, this.index = void 0, this.duration = e.decimalFloatingPoint("DURATION"), this.gap = e.bool("GAP"), this.independent = e.bool("INDEPENDENT"), this.relurl = e.enumeratedString("URI"), this.fragment = t, this.index = n;
    const a = e.enumeratedString("BYTERANGE");
    a && this.setByteRange(a, r), r && (this.fragOffset = r.fragOffset + r.duration);
  }
  get start() {
    return this.fragment.start + this.fragOffset;
  }
  get end() {
    return this.start + this.duration;
  }
  get loaded() {
    const {
      elementaryStreams: e
    } = this;
    return !!(e.audio || e.video || e.audiovideo);
  }
}
function Qa(i, e) {
  const t = Object.getPrototypeOf(i);
  if (t) {
    const s = Object.getOwnPropertyDescriptor(t, e);
    return s || Qa(t, e);
  }
}
function qc(i, e) {
  const t = Qa(i, e);
  t && (t.enumerable = !0, Object.defineProperty(i, e, t));
}
const Sr = Math.pow(2, 32) - 1, Yc = [].push, Za = {
  video: 1,
  audio: 2,
  id3: 3,
  text: 4
};
function De(i) {
  return String.fromCharCode.apply(null, i);
}
function Ja(i, e) {
  const t = i[e] << 8 | i[e + 1];
  return t < 0 ? 65536 + t : t;
}
function ee(i, e) {
  const t = eo(i, e);
  return t < 0 ? 4294967296 + t : t;
}
function xr(i, e) {
  let t = ee(i, e);
  return t *= Math.pow(2, 32), t += ee(i, e + 4), t;
}
function eo(i, e) {
  return i[e] << 24 | i[e + 1] << 16 | i[e + 2] << 8 | i[e + 3];
}
function zc(i) {
  const e = i.byteLength;
  for (let t = 0; t < e; ) {
    const s = ee(i, t);
    if (s > 8 && i[t + 4] === 109 && i[t + 5] === 111 && i[t + 6] === 111 && i[t + 7] === 102)
      return !0;
    t = s > 1 ? t + s : e;
  }
  return !1;
}
function ne(i, e) {
  const t = [];
  if (!e.length)
    return t;
  const s = i.byteLength;
  for (let n = 0; n < s; ) {
    const r = ee(i, n), a = De(i.subarray(n + 4, n + 8)), o = r > 1 ? n + r : s;
    if (a === e[0])
      if (e.length === 1)
        t.push(i.subarray(n + 8, o));
      else {
        const c = ne(i.subarray(n + 8, o), e.slice(1));
        c.length && Yc.apply(t, c);
      }
    n = o;
  }
  return t;
}
function Xc(i) {
  const e = [], t = i[0];
  let s = 8;
  const n = ee(i, s);
  s += 4;
  let r = 0, a = 0;
  t === 0 ? (r = ee(i, s), a = ee(i, s + 4), s += 8) : (r = xr(i, s), a = xr(i, s + 8), s += 16), s += 2;
  let o = i.length + a;
  const c = Ja(i, s);
  s += 2;
  for (let l = 0; l < c; l++) {
    let u = s;
    const h = ee(i, u);
    u += 4;
    const d = h & 2147483647;
    if ((h & 2147483648) >>> 31 === 1)
      return ge.warn("SIDX has hierarchical references (not supported)"), null;
    const f = ee(i, u);
    u += 4, e.push({
      referenceSize: d,
      subsegmentDuration: f,
      // unscaled
      info: {
        duration: f / n,
        start: o,
        end: o + d - 1
      }
    }), o += d, u += 4, s = u;
  }
  return {
    earliestPresentationTime: r,
    timescale: n,
    version: t,
    referencesCount: c,
    references: e
  };
}
function to(i) {
  const e = [], t = ne(i, ["moov", "trak"]);
  for (let n = 0; n < t.length; n++) {
    const r = t[n], a = ne(r, ["tkhd"])[0];
    if (a) {
      let o = a[0];
      const c = ee(a, o === 0 ? 12 : 20), l = ne(r, ["mdia", "mdhd"])[0];
      if (l) {
        o = l[0];
        const u = ee(l, o === 0 ? 12 : 20), h = ne(r, ["mdia", "hdlr"])[0];
        if (h) {
          const d = De(h.subarray(8, 12)), g = {
            soun: ye.AUDIO,
            vide: ye.VIDEO
          }[d], f = ne(r, ["mdia", "minf", "stbl", "stsd"])[0], m = Qc(f);
          g ? (e[c] = {
            timescale: u,
            type: g,
            stsd: m
          }, e[g] = fe({
            timescale: u,
            id: c
          }, m)) : e[c] = {
            timescale: u,
            type: d,
            stsd: m
          };
        }
      }
    }
  }
  return ne(i, ["moov", "mvex", "trex"]).forEach((n) => {
    const r = ee(n, 4), a = e[r];
    a && (a.default = {
      duration: ee(n, 12),
      flags: ee(n, 20)
    });
  }), e;
}
function Qc(i) {
  const e = i.subarray(8), t = e.subarray(86), s = De(e.subarray(4, 8));
  let n = s, r;
  const a = s === "enca" || s === "encv";
  if (a) {
    const l = ne(e, [s])[0].subarray(s === "enca" ? 28 : 78);
    ne(l, ["sinf"]).forEach((h) => {
      const d = ne(h, ["schm"])[0];
      if (d) {
        const g = De(d.subarray(4, 8));
        if (g === "cbcs" || g === "cenc") {
          const f = ne(h, ["frma"])[0];
          f && (n = De(f));
        }
      }
    });
  }
  const o = n;
  switch (n) {
    case "avc1":
    case "avc2":
    case "avc3":
    case "avc4": {
      const c = ne(t, ["avcC"])[0];
      c && c.length > 3 && (n += "." + Gs(c[1]) + Gs(c[2]) + Gs(c[3]), r = Us(o === "avc1" ? "dva1" : "dvav", t));
      break;
    }
    case "mp4a": {
      const c = ne(e, [s])[0], l = ne(c.subarray(28), ["esds"])[0];
      if (l && l.length > 7) {
        let u = 4;
        if (l[u++] !== 3)
          break;
        u = Bi(l, u), u += 2;
        const h = l[u++];
        if (h & 128 && (u += 2), h & 64 && (u += l[u++]), l[u++] !== 4)
          break;
        u = Bi(l, u);
        const d = l[u++];
        if (d === 64)
          n += "." + Gs(d);
        else
          break;
        if (u += 12, l[u++] !== 5)
          break;
        u = Bi(l, u);
        const g = l[u++];
        let f = (g & 248) >> 3;
        f === 31 && (f += 1 + ((g & 7) << 3) + ((l[u] & 224) >> 5)), n += "." + f;
      }
      break;
    }
    case "hvc1":
    case "hev1": {
      const c = ne(t, ["hvcC"])[0];
      if (c && c.length > 12) {
        const l = c[1], u = ["", "A", "B", "C"][l >> 6], h = l & 31, d = ee(c, 2), g = (l & 32) >> 5 ? "H" : "L", f = c[12], m = c.subarray(6, 12);
        n += "." + u + h, n += "." + Zc(d).toString(16).toUpperCase(), n += "." + g + f;
        let p = "";
        for (let T = m.length; T--; ) {
          const E = m[T];
          (E || p) && (p = "." + E.toString(16).toUpperCase() + p);
        }
        n += p;
      }
      r = Us(o == "hev1" ? "dvhe" : "dvh1", t);
      break;
    }
    case "dvh1":
    case "dvhe":
    case "dvav":
    case "dva1":
    case "dav1": {
      n = Us(n, t) || n;
      break;
    }
    case "vp09": {
      const c = ne(t, ["vpcC"])[0];
      if (c && c.length > 6) {
        const l = c[4], u = c[5], h = c[6] >> 4 & 15;
        n += "." + ft(l) + "." + ft(u) + "." + ft(h);
      }
      break;
    }
    case "av01": {
      const c = ne(t, ["av1C"])[0];
      if (c && c.length > 2) {
        const l = c[1] >>> 5, u = c[1] & 31, h = c[2] >>> 7 ? "H" : "M", d = (c[2] & 64) >> 6, g = (c[2] & 32) >> 5, f = l === 2 && d ? g ? 12 : 10 : d ? 10 : 8, m = (c[2] & 16) >> 4, p = (c[2] & 8) >> 3, T = (c[2] & 4) >> 2, E = c[2] & 3;
        n += "." + l + "." + ft(u) + h + "." + ft(f) + "." + m + "." + p + T + E + "." + ft(1) + "." + ft(1) + "." + ft(1) + "." + 0, r = Us("dav1", t);
      }
      break;
    }
  }
  return {
    codec: n,
    encrypted: a,
    supplemental: r
  };
}
function Us(i, e) {
  const t = ne(e, ["dvvC"]), s = t.length ? t[0] : ne(e, ["dvcC"])[0];
  if (s) {
    const n = s[2] >> 1 & 127, r = s[2] << 5 & 32 | s[3] >> 3 & 31;
    return i + "." + ft(n) + "." + ft(r);
  }
}
function Zc(i) {
  let e = 0;
  for (let t = 0; t < 32; t++)
    e |= (i >> t & 1) << 31 - t;
  return e >>> 0;
}
function Bi(i, e) {
  const t = e + 5;
  for (; i[e++] & 128 && e < t; )
    ;
  return e;
}
function Gs(i) {
  return ("0" + i.toString(16).toUpperCase()).slice(-2);
}
function ft(i) {
  return (i < 10 ? "0" : "") + i;
}
function Jc(i, e) {
  if (!i || !e)
    return;
  const t = e.keyId;
  t && e.isCommonEncryption && so(i, (s, n) => {
    const r = s.subarray(8, 24);
    r.some((a) => a !== 0) || (ge.log(`[eme] Patching keyId in 'enc${n ? "a" : "v"}>sinf>>tenc' box: ${Be(r)} -> ${Be(t)}`), s.set(t, 8));
  });
}
function eu(i) {
  const e = [];
  return so(i, (t) => e.push(t.subarray(8, 24))), e;
}
function so(i, e) {
  ne(i, ["moov", "trak"]).forEach((s) => {
    const n = ne(s, ["mdia", "minf", "stbl", "stsd"])[0];
    if (!n) return;
    const r = n.subarray(8);
    let a = ne(r, ["enca"]);
    const o = a.length > 0;
    o || (a = ne(r, ["encv"])), a.forEach((c) => {
      const l = o ? c.subarray(28) : c.subarray(78);
      ne(l, ["sinf"]).forEach((h) => {
        const d = io(h);
        d && e(d, o);
      });
    });
  });
}
function io(i) {
  const e = ne(i, ["schm"])[0];
  if (e) {
    const t = De(e.subarray(4, 8));
    if (t === "cbcs" || t === "cenc") {
      const s = ne(i, ["schi", "tenc"])[0];
      if (s)
        return s;
    }
  }
}
function tu(i, e, t) {
  const s = {}, n = ne(i, ["moof", "traf"]);
  for (let r = 0; r < n.length; r++) {
    const a = n[r], o = ne(a, ["tfhd"])[0], c = ee(o, 4), l = e[c];
    if (!l)
      continue;
    s[c] || (s[c] = {
      start: NaN,
      duration: 0,
      sampleCount: 0,
      timescale: l.timescale,
      type: l.type
    });
    const u = s[c], h = ne(a, ["tfdt"])[0];
    if (h) {
      const v = h[0];
      let x = ee(h, 4);
      v === 1 && (x === Sr ? t.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time") : (x *= Sr + 1, x += ee(h, 8))), G(x) && (!G(u.start) || x < u.start) && (u.start = x);
    }
    const d = l.default, g = ee(o, 0) | (d == null ? void 0 : d.flags);
    let f = (d == null ? void 0 : d.duration) || 0;
    g & 8 && (g & 2 ? f = ee(o, 12) : f = ee(o, 8));
    const m = ne(a, ["trun"]);
    let p = u.start || 0, T = 0, E = f;
    for (let v = 0; v < m.length; v++) {
      const x = m[v], A = ee(x, 4), _ = u.sampleCount;
      u.sampleCount += A;
      const S = x[3] & 1, L = x[3] & 4, I = x[2] & 1, R = x[2] & 2, w = x[2] & 4, O = x[2] & 8;
      let K = 8, W = A;
      for (S && (K += 4), L && A && (!(x[K + 1] & 1) && u.keyFrameIndex === void 0 && (u.keyFrameIndex = _), K += 4, I ? (E = ee(x, K), K += 4) : E = f, R && (K += 4), O && (K += 4), p += E, T += E, W--); W--; )
        I ? (E = ee(x, K), K += 4) : E = f, R && (K += 4), w && (x[K + 1] & 1 || u.keyFrameIndex === void 0 && (u.keyFrameIndex = u.sampleCount - (W + 1), u.keyFrameStart = p), K += 4), O && (K += 4), p += E, T += E;
      !T && f && (T += f * A);
    }
    u.duration += T;
  }
  if (!Object.keys(s).some((r) => s[r].duration)) {
    let r = 1 / 0, a = 0;
    const o = ne(i, ["sidx"]);
    for (let c = 0; c < o.length; c++) {
      const l = Xc(o[c]);
      if (l != null && l.references) {
        r = Math.min(r, l.earliestPresentationTime / l.timescale);
        const u = l.references.reduce((h, d) => h + d.info.duration || 0, 0);
        a = Math.max(a, u + l.earliestPresentationTime / l.timescale);
      }
    }
    a && G(a) && Object.keys(s).forEach((c) => {
      s[c].duration || (s[c].duration = a * s[c].timescale - s[c].start);
    });
  }
  return s;
}
function su(i) {
  const e = {
    valid: null,
    remainder: null
  }, t = ne(i, ["moof"]);
  if (t.length < 2)
    return e.remainder = i, e;
  const s = t[t.length - 1];
  return e.valid = i.slice(0, s.byteOffset - 8), e.remainder = i.slice(s.byteOffset - 8), e;
}
function nt(i, e) {
  const t = new Uint8Array(i.length + e.length);
  return t.set(i), t.set(e, i.length), t;
}
function Ar(i, e) {
  const t = [], s = e.samples, n = e.timescale, r = e.id;
  let a = !1;
  return ne(s, ["moof"]).map((c) => {
    const l = c.byteOffset - 8;
    ne(c, ["traf"]).map((h) => {
      const d = ne(h, ["tfdt"]).map((g) => {
        const f = g[0];
        let m = ee(g, 4);
        return f === 1 && (m *= Math.pow(2, 32), m += ee(g, 8)), m / n;
      })[0];
      return d !== void 0 && (i = d), ne(h, ["tfhd"]).map((g) => {
        const f = ee(g, 4), m = ee(g, 0) & 16777215, p = (m & 1) !== 0, T = (m & 2) !== 0, E = (m & 8) !== 0;
        let v = 0;
        const x = (m & 16) !== 0;
        let A = 0;
        const _ = (m & 32) !== 0;
        let S = 8;
        f === r && (p && (S += 8), T && (S += 4), E && (v = ee(g, S), S += 4), x && (A = ee(g, S), S += 4), _ && (S += 4), e.type === "video" && (a = ki(e.codec)), ne(h, ["trun"]).map((L) => {
          const I = L[0], R = ee(L, 0) & 16777215, w = (R & 1) !== 0;
          let O = 0;
          const K = (R & 4) !== 0, W = (R & 256) !== 0;
          let B = 0;
          const P = (R & 512) !== 0;
          let V = 0;
          const N = (R & 1024) !== 0, H = (R & 2048) !== 0;
          let X = 0;
          const F = ee(L, 4);
          let M = 8;
          w && (O = ee(L, M), M += 4), K && (M += 4);
          let te = O + l;
          for (let oe = 0; oe < F; oe++) {
            if (W ? (B = ee(L, M), M += 4) : B = v, P ? (V = ee(L, M), M += 4) : V = A, N && (M += 4), H && (I === 0 ? X = ee(L, M) : X = eo(L, M), M += 4), e.type === ye.VIDEO) {
              let Q = 0;
              for (; Q < V; ) {
                const ie = ee(s, te);
                if (te += 4, iu(a, s[te])) {
                  const ke = s.subarray(te, te + ie);
                  Kn(ke, a ? 2 : 1, i + X / n, t);
                }
                te += ie, Q += ie + 4;
              }
            }
            i += B / n;
          }
        }));
      });
    });
  }), t;
}
function ki(i) {
  if (!i)
    return !1;
  const e = i.substring(0, 4);
  return e === "hvc1" || e === "hev1" || // Dolby Vision
  e === "dvh1" || e === "dvhe";
}
function iu(i, e) {
  if (i) {
    const t = e >> 1 & 63;
    return t === 39 || t === 40;
  } else
    return (e & 31) === 6;
}
function Kn(i, e, t, s) {
  const n = no(i);
  let r = 0;
  r += e;
  let a = 0, o = 0, c = 0;
  for (; r < n.length; ) {
    a = 0;
    do {
      if (r >= n.length)
        break;
      c = n[r++], a += c;
    } while (c === 255);
    o = 0;
    do {
      if (r >= n.length)
        break;
      c = n[r++], o += c;
    } while (c === 255);
    const l = n.length - r;
    let u = r;
    if (o < l)
      r += o;
    else if (o > l) {
      ge.error(`Malformed SEI payload. ${o} is too small, only ${l} bytes left to parse.`);
      break;
    }
    if (a === 4) {
      if (n[u++] === 181) {
        const d = Ja(n, u);
        if (u += 2, d === 49) {
          const g = ee(n, u);
          if (u += 4, g === 1195456820) {
            const f = n[u++];
            if (f === 3) {
              const m = n[u++], p = 31 & m, T = 64 & m, E = T ? 2 + p * 3 : 0, v = new Uint8Array(E);
              if (T) {
                v[0] = m;
                for (let x = 1; x < E; x++)
                  v[x] = n[u++];
              }
              s.push({
                type: f,
                payloadType: a,
                pts: t,
                bytes: v
              });
            }
          }
        }
      }
    } else if (a === 5 && o > 16) {
      const h = [];
      for (let f = 0; f < 16; f++) {
        const m = n[u++].toString(16);
        h.push(m.length == 1 ? "0" + m : m), (f === 3 || f === 5 || f === 7 || f === 9) && h.push("-");
      }
      const d = o - 16, g = new Uint8Array(d);
      for (let f = 0; f < d; f++)
        g[f] = n[u++];
      s.push({
        payloadType: a,
        pts: t,
        uuid: h.join(""),
        userData: it(g),
        userDataBytes: g
      });
    }
  }
}
function no(i) {
  const e = i.byteLength, t = [];
  let s = 1;
  for (; s < e - 2; )
    i[s] === 0 && i[s + 1] === 0 && i[s + 2] === 3 ? (t.push(s + 2), s += 2) : s++;
  if (t.length === 0)
    return i;
  const n = e - t.length, r = new Uint8Array(n);
  let a = 0;
  for (s = 0; s < n; a++, s++)
    a === t[0] && (a++, t.shift()), r[s] = i[a];
  return r;
}
function nu(i) {
  const e = i[0];
  let t = "", s = "", n = 0, r = 0, a = 0, o = 0, c = 0, l = 0;
  if (e === 0) {
    for (; De(i.subarray(l, l + 1)) !== "\0"; )
      t += De(i.subarray(l, l + 1)), l += 1;
    for (t += De(i.subarray(l, l + 1)), l += 1; De(i.subarray(l, l + 1)) !== "\0"; )
      s += De(i.subarray(l, l + 1)), l += 1;
    s += De(i.subarray(l, l + 1)), l += 1, n = ee(i, 12), r = ee(i, 16), o = ee(i, 20), c = ee(i, 24), l = 28;
  } else if (e === 1) {
    l += 4, n = ee(i, l), l += 4;
    const h = ee(i, l);
    l += 4;
    const d = ee(i, l);
    for (l += 4, a = 2 ** 32 * h + d, Oc(a) || (a = Number.MAX_SAFE_INTEGER, ge.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o = ee(i, l), l += 4, c = ee(i, l), l += 4; De(i.subarray(l, l + 1)) !== "\0"; )
      t += De(i.subarray(l, l + 1)), l += 1;
    for (t += De(i.subarray(l, l + 1)), l += 1; De(i.subarray(l, l + 1)) !== "\0"; )
      s += De(i.subarray(l, l + 1)), l += 1;
    s += De(i.subarray(l, l + 1)), l += 1;
  }
  const u = i.subarray(l, i.byteLength);
  return {
    schemeIdUri: t,
    value: s,
    timeScale: n,
    presentationTime: a,
    presentationTimeDelta: r,
    eventDuration: o,
    id: c,
    payload: u
  };
}
function ru(i, ...e) {
  const t = e.length;
  let s = 8, n = t;
  for (; n--; )
    s += e[n].byteLength;
  const r = new Uint8Array(s);
  for (r[0] = s >> 24 & 255, r[1] = s >> 16 & 255, r[2] = s >> 8 & 255, r[3] = s & 255, r.set(i, 4), n = 0, s = 8; n < t; n++)
    r.set(e[n], s), s += e[n].byteLength;
  return r;
}
function au(i, e, t) {
  if (i.byteLength !== 16)
    throw new RangeError("Invalid system id");
  let s, n;
  s = 0, n = new Uint8Array();
  let r;
  s > 0 ? (r = new Uint8Array(4), e.length > 0 && new DataView(r.buffer).setUint32(0, e.length, !1)) : r = new Uint8Array();
  const a = new Uint8Array(4);
  return t.byteLength > 0 && new DataView(a.buffer).setUint32(0, t.byteLength, !1), ru(
    [112, 115, 115, 104],
    new Uint8Array([
      s,
      0,
      0,
      0
      // Flags
    ]),
    i,
    // 16 bytes
    r,
    n,
    a,
    t
  );
}
function ou(i) {
  const e = [];
  if (i instanceof ArrayBuffer) {
    const t = i.byteLength;
    let s = 0;
    for (; s + 32 < t; ) {
      const n = new DataView(i, s), r = lu(n);
      e.push(r), s += r.size;
    }
  }
  return e;
}
function lu(i) {
  const e = i.getUint32(0), t = i.byteOffset, s = i.byteLength;
  if (s < e)
    return {
      offset: t,
      size: s
    };
  if (i.getUint32(4) !== 1886614376)
    return {
      offset: t,
      size: e
    };
  const r = i.getUint32(8) >>> 24;
  if (r !== 0 && r !== 1)
    return {
      offset: t,
      size: e
    };
  const a = i.buffer, o = Be(new Uint8Array(a, t + 12, 16));
  let c = null, l = null, u = 0;
  if (r === 0)
    u = 28;
  else {
    const d = i.getUint32(28);
    if (!d || s < 32 + d * 16)
      return {
        offset: t,
        size: e
      };
    c = [];
    for (let g = 0; g < d; g++)
      c.push(new Uint8Array(a, t + 32 + g * 16, 16));
    u = 32 + d * 16;
  }
  if (!u)
    return {
      offset: t,
      size: e
    };
  const h = i.getUint32(u);
  return e - 32 < h ? {
    offset: t,
    size: e
  } : (l = new Uint8Array(a, t + u + 4, h), {
    version: r,
    systemId: o,
    kids: c,
    data: l,
    offset: t,
    size: e
  });
}
const ro = () => /\(Windows.+Firefox\//i.test(navigator.userAgent), hs = {
  audio: {
    a3ds: 1,
    "ac-3": 0.95,
    "ac-4": 1,
    alac: 0.9,
    alaw: 1,
    dra1: 1,
    "dts+": 1,
    "dts-": 1,
    dtsc: 1,
    dtse: 1,
    dtsh: 1,
    "ec-3": 0.9,
    enca: 1,
    fLaC: 0.9,
    // MP4-RA listed codec entry for FLAC
    flac: 0.9,
    // legacy browser codec name for FLAC
    FLAC: 0.9,
    // some manifests may list "FLAC" with Apple's tools
    g719: 1,
    g726: 1,
    m4ae: 1,
    mha1: 1,
    mha2: 1,
    mhm1: 1,
    mhm2: 1,
    mlpa: 1,
    mp4a: 1,
    "raw ": 1,
    Opus: 1,
    opus: 1,
    // browsers expect this to be lowercase despite MP4RA says 'Opus'
    samr: 1,
    sawb: 1,
    sawp: 1,
    sevc: 1,
    sqcp: 1,
    ssmv: 1,
    twos: 1,
    ulaw: 1
  },
  video: {
    avc1: 1,
    avc2: 1,
    avc3: 1,
    avc4: 1,
    avcp: 1,
    av01: 0.8,
    dav1: 0.8,
    drac: 1,
    dva1: 1,
    dvav: 1,
    dvh1: 0.7,
    dvhe: 0.7,
    encv: 1,
    hev1: 0.75,
    hvc1: 0.75,
    mjp2: 1,
    mp4v: 1,
    mvc1: 1,
    mvc2: 1,
    mvc3: 1,
    mvc4: 1,
    resv: 1,
    rv60: 1,
    s263: 1,
    svc1: 1,
    svc2: 1,
    "vc-1": 1,
    vp08: 1,
    vp09: 0.9
  },
  text: {
    stpp: 1,
    wvtt: 1
  }
};
function Vn(i, e) {
  const t = hs[e];
  return !!t && !!t[i.slice(0, 4)];
}
function As(i, e, t = !0) {
  return !i.split(",").some((s) => !Hn(s, e, t));
}
function Hn(i, e, t = !0) {
  var s;
  const n = Bt(t);
  return (s = n == null ? void 0 : n.isTypeSupported(Ls(i, e))) != null ? s : !1;
}
function Ls(i, e) {
  return `${e}/mp4;codecs=${i}`;
}
function Lr(i) {
  if (i) {
    const e = i.substring(0, 4);
    return hs.video[e];
  }
  return 2;
}
function gi(i) {
  const e = ro();
  return i.split(",").reduce((t, s) => {
    const r = e && ki(s) ? 9 : hs.video[s];
    return r ? (r * 2 + t) / (t ? 3 : 2) : (hs.audio[s] + t) / (t ? 2 : 1);
  }, 0);
}
const Ui = {};
function cu(i, e = !0) {
  if (Ui[i])
    return Ui[i];
  const t = {
    // Idealy fLaC and Opus would be first (spec-compliant) but
    // some browsers will report that fLaC is supported then fail.
    // see: https://bugs.chromium.org/p/chromium/issues/detail?id=1422728
    flac: ["flac", "fLaC", "FLAC"],
    opus: ["opus", "Opus"],
    // Replace audio codec info if browser does not support mp4a.40.34,
    // and demuxer can fallback to 'audio/mpeg' or 'audio/mp4;codecs="mp3"'
    "mp4a.40.34": ["mp3"]
  }[i];
  for (let n = 0; n < t.length; n++) {
    var s;
    if (Hn(t[n], "audio", e))
      return Ui[i] = t[n], t[n];
    if (t[n] === "mp3" && (s = Bt(e)) != null && s.isTypeSupported("audio/mpeg"))
      return "";
  }
  return i;
}
const uu = /flac|opus|mp4a\.40\.34/i;
function mi(i, e = !0) {
  return i.replace(uu, (t) => cu(t.toLowerCase(), e));
}
function hu(i, e) {
  const t = [];
  if (i) {
    const s = i.split(",");
    for (let n = 0; n < s.length; n++)
      Vn(s[n], "video") || t.push(s[n]);
  }
  return e && t.push(e), t.join(",");
}
function si(i, e) {
  if (i && (i.length > 4 || ["ac-3", "ec-3", "alac", "fLaC", "Opus"].indexOf(i) !== -1) && (Ir(i, "audio") || Ir(i, "video")))
    return i;
  if (e) {
    const t = e.split(",");
    if (t.length > 1) {
      if (i) {
        for (let s = t.length; s--; )
          if (t[s].substring(0, 4) === i.substring(0, 4))
            return t[s];
      }
      return t[0];
    }
  }
  return e || i;
}
function Ir(i, e) {
  return Vn(i, e) && Hn(i, e);
}
function du(i) {
  const e = i.split(",");
  for (let t = 0; t < e.length; t++) {
    const s = e[t].split(".");
    s.length > 2 && s[0] === "avc1" && (e[t] = `avc1.${parseInt(s[1]).toString(16)}${("000" + parseInt(s[2]).toString(16)).slice(-4)}`);
  }
  return e.join(",");
}
function fu(i) {
  if (i.startsWith("av01.")) {
    const e = i.split("."), t = ["0", "111", "01", "01", "01", "0"];
    for (let s = e.length; s > 4 && s < 10; s++)
      e[s] = t[s - 4];
    return e.join(".");
  }
  return i;
}
function Rr(i) {
  const e = Bt(i) || {
    isTypeSupported: () => !1
  };
  return {
    mpeg: e.isTypeSupported("audio/mpeg"),
    mp3: e.isTypeSupported('audio/mp4; codecs="mp3"'),
    ac3: e.isTypeSupported('audio/mp4; codecs="ac-3"')
  };
}
function mn(i) {
  return i.replace(/^.+codecs=["']?([^"']+).*$/, "$1");
}
const gu = {
  supported: !0,
  powerEfficient: !0,
  smooth: !0
  // keySystemAccess: null,
}, mu = {
  supported: !1,
  smooth: !1,
  powerEfficient: !1
  // keySystemAccess: null,
}, ao = {
  supported: !0,
  configurations: [],
  decodingInfoResults: [gu]
};
function oo(i, e) {
  return {
    supported: !1,
    configurations: e,
    decodingInfoResults: [mu],
    error: i
  };
}
function pu(i, e, t, s, n, r) {
  const a = i.videoCodec, o = i.audioCodec ? i.audioGroups : null, c = r == null ? void 0 : r.audioCodec, l = r == null ? void 0 : r.channels, u = l ? parseInt(l) : c ? 1 / 0 : 2;
  let h = null;
  if (o != null && o.length)
    try {
      o.length === 1 && o[0] ? h = e.groups[o[0]].channels : h = o.reduce((d, g) => {
        if (g) {
          const f = e.groups[g];
          if (!f)
            throw new Error(`Audio track group ${g} not found`);
          Object.keys(f.channels).forEach((m) => {
            d[m] = (d[m] || 0) + f.channels[m];
          });
        }
        return d;
      }, {
        2: 0
      });
    } catch {
      return !0;
    }
  return a !== void 0 && // Force media capabilities check for HEVC to avoid failure on Windows
  (a.split(",").some((d) => ki(d)) || i.width > 1920 && i.height > 1088 || i.height > 1920 && i.width > 1088 || i.frameRate > Math.max(s, 30) || i.videoRange !== "SDR" && i.videoRange !== t || i.bitrate > Math.max(n, 8e6)) || !!h && G(u) && Object.keys(h).some((d) => parseInt(d) > u);
}
function lo(i, e, t, s = {}) {
  const n = i.videoCodec;
  if (!n && !i.audioCodec || !t)
    return Promise.resolve(ao);
  const r = [], a = yu(i), o = a.length, c = Tu(i, e, o > 0), l = c.length;
  for (let u = o || 1 * l || 1; u--; ) {
    const h = {
      type: "media-source"
    };
    if (o && (h.video = a[u % o]), l) {
      h.audio = c[u % l];
      const d = h.audio.bitrate;
      h.video && d && (h.video.bitrate -= d);
    }
    r.push(h);
  }
  if (n) {
    const u = navigator.userAgent;
    if (n.split(",").some((h) => ki(h)) && ro())
      return Promise.resolve(oo(new Error(`Overriding Windows Firefox HEVC MediaCapabilities result based on user-agent string: (${u})`), r));
  }
  return Promise.all(r.map((u) => {
    const h = vu(u);
    return s[h] || (s[h] = t.decodingInfo(u));
  })).then((u) => ({
    supported: !u.some((h) => !h.supported),
    configurations: r,
    decodingInfoResults: u
  })).catch((u) => ({
    supported: !1,
    configurations: r,
    decodingInfoResults: [],
    error: u
  }));
}
function yu(i) {
  var e;
  const t = (e = i.videoCodec) == null ? void 0 : e.split(","), s = co(i), n = i.width || 640, r = i.height || 480, a = i.frameRate || 30, o = i.videoRange.toLowerCase();
  return t ? t.map((c) => {
    const l = {
      contentType: Ls(fu(c), "video"),
      width: n,
      height: r,
      bitrate: s,
      framerate: a
    };
    return o !== "sdr" && (l.transferFunction = o), l;
  }) : [];
}
function Tu(i, e, t) {
  var s;
  const n = (s = i.audioCodec) == null ? void 0 : s.split(","), r = co(i);
  return n && i.audioGroups ? i.audioGroups.reduce((a, o) => {
    var c;
    const l = o ? (c = e.groups[o]) == null ? void 0 : c.tracks : null;
    return l ? l.reduce((u, h) => {
      if (h.groupId === o) {
        const d = parseFloat(h.channels || "");
        n.forEach((g) => {
          const f = {
            contentType: Ls(g, "audio"),
            bitrate: t ? Eu(g, r) : r
          };
          d && (f.channels = "" + d), u.push(f);
        });
      }
      return u;
    }, a) : a;
  }, []) : [];
}
function Eu(i, e) {
  if (e <= 1)
    return 1;
  let t = 128e3;
  return i === "ec-3" ? t = 768e3 : i === "ac-3" && (t = 64e4), Math.min(e / 2, t);
}
function co(i) {
  return Math.ceil(Math.max(i.bitrate * 0.9, i.averageBitrate) / 1e3) * 1e3 || 1;
}
function vu(i) {
  let e = "";
  const {
    audio: t,
    video: s
  } = i;
  if (s) {
    const n = mn(s.contentType);
    e += `${n}_r${s.height}x${s.width}f${Math.ceil(s.framerate)}${s.transferFunction || "sd"}_${Math.ceil(s.bitrate / 1e5)}`;
  }
  if (t) {
    const n = mn(t.contentType);
    e += `${s ? "_" : ""}${n}_c${t.channels}`;
  }
  return e;
}
const pn = ["NONE", "TYPE-0", "TYPE-1", null];
function bu(i) {
  return pn.indexOf(i) > -1;
}
const pi = ["SDR", "PQ", "HLG"];
function Su(i) {
  return !!i && pi.indexOf(i) > -1;
}
var ii = {
  No: "",
  Yes: "YES",
  v2: "v2"
};
function _r(i) {
  const {
    canSkipUntil: e,
    canSkipDateRanges: t,
    age: s
  } = i, n = s < e / 2;
  return e && n ? t ? ii.v2 : ii.Yes : ii.No;
}
class kr {
  constructor(e, t, s) {
    this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = e, this.part = t, this.skip = s;
  }
  addDirectives(e) {
    const t = new self.URL(e);
    return this.msn !== void 0 && t.searchParams.set("_HLS_msn", this.msn.toString()), this.part !== void 0 && t.searchParams.set("_HLS_part", this.part.toString()), this.skip && t.searchParams.set("_HLS_skip", this.skip), t.href;
  }
}
class Is {
  constructor(e) {
    if (this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.url = void 0, this.frameRate = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.supplemental = void 0, this.videoCodec = void 0, this.width = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.supportedPromise = void 0, this.supportedResult = void 0, this._avgBitrate = 0, this._audioGroups = void 0, this._subtitleGroups = void 0, this._urlId = 0, this.url = [e.url], this._attrs = [e.attrs], this.bitrate = e.bitrate, e.details && (this.details = e.details), this.id = e.id || 0, this.name = e.name, this.width = e.width || 0, this.height = e.height || 0, this.frameRate = e.attrs.optionalFloat("FRAME-RATE", 0), this._avgBitrate = e.attrs.decimalInteger("AVERAGE-BANDWIDTH"), this.audioCodec = e.audioCodec, this.videoCodec = e.videoCodec, this.codecSet = [e.videoCodec, e.audioCodec].filter((s) => !!s).map((s) => s.substring(0, 4)).join(","), "supplemental" in e) {
      var t;
      this.supplemental = e.supplemental;
      const s = (t = e.supplemental) == null ? void 0 : t.videoCodec;
      s && s !== e.videoCodec && (this.codecSet += `,${s.substring(0, 4)}`);
    }
    this.addGroupId("audio", e.attrs.AUDIO), this.addGroupId("text", e.attrs.SUBTITLES);
  }
  get maxBitrate() {
    return Math.max(this.realBitrate, this.bitrate);
  }
  get averageBitrate() {
    return this._avgBitrate || this.realBitrate || this.bitrate;
  }
  get attrs() {
    return this._attrs[0];
  }
  get codecs() {
    return this.attrs.CODECS || "";
  }
  get pathwayId() {
    return this.attrs["PATHWAY-ID"] || ".";
  }
  get videoRange() {
    return this.attrs["VIDEO-RANGE"] || "SDR";
  }
  get score() {
    return this.attrs.optionalFloat("SCORE", 0);
  }
  get uri() {
    return this.url[0] || "";
  }
  hasAudioGroup(e) {
    return Cr(this._audioGroups, e);
  }
  hasSubtitleGroup(e) {
    return Cr(this._subtitleGroups, e);
  }
  get audioGroups() {
    return this._audioGroups;
  }
  get subtitleGroups() {
    return this._subtitleGroups;
  }
  addGroupId(e, t) {
    if (t) {
      if (e === "audio") {
        let s = this._audioGroups;
        s || (s = this._audioGroups = []), s.indexOf(t) === -1 && s.push(t);
      } else if (e === "text") {
        let s = this._subtitleGroups;
        s || (s = this._subtitleGroups = []), s.indexOf(t) === -1 && s.push(t);
      }
    }
  }
  // Deprecated methods (retained for backwards compatibility)
  get urlId() {
    return 0;
  }
  set urlId(e) {
  }
  get audioGroupIds() {
    return this.audioGroups ? [this.audioGroupId] : void 0;
  }
  get textGroupIds() {
    return this.subtitleGroups ? [this.textGroupId] : void 0;
  }
  get audioGroupId() {
    var e;
    return (e = this.audioGroups) == null ? void 0 : e[0];
  }
  get textGroupId() {
    var e;
    return (e = this.subtitleGroups) == null ? void 0 : e[0];
  }
  addFallback() {
  }
}
function Cr(i, e) {
  return !e || !i ? !1 : i.indexOf(e) !== -1;
}
function xu() {
  if (typeof matchMedia == "function") {
    const i = matchMedia("(dynamic-range: high)"), e = matchMedia("bad query");
    if (i.media !== e.media)
      return i.matches === !0;
  }
  return !1;
}
function Au(i, e) {
  let t = !1, s = [];
  if (i && (t = i !== "SDR", s = [i]), e) {
    s = e.allowedVideoRanges || pi.slice(0);
    const n = s.join("") !== "SDR" && !e.videoCodec;
    t = e.preferHDR !== void 0 ? e.preferHDR : n && xu(), t || (s = ["SDR"]);
  }
  return {
    preferHDR: t,
    allowedVideoRanges: s
  };
}
const Lu = (i) => {
  const e = /* @__PURE__ */ new WeakSet();
  return (t, s) => {
    if (i && (s = i(t, s)), typeof s == "object" && s !== null) {
      if (e.has(s))
        return;
      e.add(s);
    }
    return s;
  };
}, Te = (i, e) => JSON.stringify(i, Lu(e));
function Iu(i, e, t, s, n) {
  const r = Object.keys(i), a = s == null ? void 0 : s.channels, o = s == null ? void 0 : s.audioCodec, c = n == null ? void 0 : n.videoCodec, l = a && parseInt(a) === 2;
  let u = !1, h = !1, d = 1 / 0, g = 1 / 0, f = 1 / 0, m = 1 / 0, p = 0, T = [];
  const {
    preferHDR: E,
    allowedVideoRanges: v
  } = Au(e, n);
  for (let L = r.length; L--; ) {
    const I = i[r[L]];
    u || (u = I.channels[2] > 0), d = Math.min(d, I.minHeight), g = Math.min(g, I.minFramerate), f = Math.min(f, I.minBitrate), v.filter((w) => I.videoRanges[w] > 0).length > 0 && (h = !0);
  }
  d = G(d) ? d : 0, g = G(g) ? g : 0;
  const x = Math.max(1080, d), A = Math.max(30, g);
  f = G(f) ? f : t, t = Math.max(f, t), h || (e = void 0);
  const _ = r.length > 1;
  return {
    codecSet: r.reduce((L, I) => {
      const R = i[I];
      if (I === L)
        return L;
      if (T = h ? v.filter((w) => R.videoRanges[w] > 0) : [], _) {
        if (R.minBitrate > t)
          return ht(I, `min bitrate of ${R.minBitrate} > current estimate of ${t}`), L;
        if (!R.hasDefaultAudio)
          return ht(I, "no renditions with default or auto-select sound found"), L;
        if (o && I.indexOf(o.substring(0, 4)) % 5 !== 0)
          return ht(I, `audio codec preference "${o}" not found`), L;
        if (a && !l) {
          if (!R.channels[a])
            return ht(I, `no renditions with ${a} channel sound found (channels options: ${Object.keys(R.channels)})`), L;
        } else if ((!o || l) && u && R.channels[2] === 0)
          return ht(I, "no renditions with stereo sound found"), L;
        if (R.minHeight > x)
          return ht(I, `min resolution of ${R.minHeight} > maximum of ${x}`), L;
        if (R.minFramerate > A)
          return ht(I, `min framerate of ${R.minFramerate} > maximum of ${A}`), L;
        if (!T.some((w) => R.videoRanges[w] > 0))
          return ht(I, `no variants with VIDEO-RANGE of ${Te(T)} found`), L;
        if (c && I.indexOf(c.substring(0, 4)) % 5 !== 0)
          return ht(I, `video codec preference "${c}" not found`), L;
        if (R.maxScore < p)
          return ht(I, `max score of ${R.maxScore} < selected max of ${p}`), L;
      }
      return L && (gi(I) >= gi(L) || R.fragmentError > i[L].fragmentError) ? L : (m = R.minIndex, p = R.maxScore, I);
    }, void 0),
    videoRanges: T,
    preferHDR: E,
    minFramerate: g,
    minBitrate: f,
    minIndex: m
  };
}
function ht(i, e) {
  ge.log(`[abr] start candidates with "${i}" ignored because ${e}`);
}
function uo(i) {
  return i.reduce((e, t) => {
    let s = e.groups[t.groupId];
    s || (s = e.groups[t.groupId] = {
      tracks: [],
      channels: {
        2: 0
      },
      hasDefault: !1,
      hasAutoSelect: !1
    }), s.tracks.push(t);
    const n = t.channels || "2";
    return s.channels[n] = (s.channels[n] || 0) + 1, s.hasDefault = s.hasDefault || t.default, s.hasAutoSelect = s.hasAutoSelect || t.autoselect, s.hasDefault && (e.hasDefaultAudio = !0), s.hasAutoSelect && (e.hasAutoSelectAudio = !0), e;
  }, {
    hasDefaultAudio: !1,
    hasAutoSelectAudio: !1,
    groups: {}
  });
}
function Ru(i, e, t, s) {
  return i.slice(t, s + 1).reduce((n, r, a) => {
    if (!r.codecSet)
      return n;
    const o = r.audioGroups;
    let c = n[r.codecSet];
    c || (n[r.codecSet] = c = {
      minBitrate: 1 / 0,
      minHeight: 1 / 0,
      minFramerate: 1 / 0,
      minIndex: a,
      maxScore: 0,
      videoRanges: {
        SDR: 0
      },
      channels: {
        2: 0
      },
      hasDefaultAudio: !o,
      fragmentError: 0
    }), c.minBitrate = Math.min(c.minBitrate, r.bitrate);
    const l = Math.min(r.height, r.width);
    return c.minHeight = Math.min(c.minHeight, l), c.minFramerate = Math.min(c.minFramerate, r.frameRate), c.minIndex = Math.min(c.minIndex, a), c.maxScore = Math.max(c.maxScore, r.score), c.fragmentError += r.fragmentError, c.videoRanges[r.videoRange] = (c.videoRanges[r.videoRange] || 0) + 1, o && o.forEach((u) => {
      if (!u)
        return;
      const h = e.groups[u];
      h && (c.hasDefaultAudio = c.hasDefaultAudio || e.hasDefaultAudio ? h.hasDefault : h.hasAutoSelect || !e.hasDefaultAudio && !e.hasAutoSelectAudio, Object.keys(h.channels).forEach((d) => {
        c.channels[d] = (c.channels[d] || 0) + h.channels[d];
      }));
    }), n;
  }, {});
}
function wr(i) {
  if (!i)
    return i;
  const {
    lang: e,
    assocLang: t,
    characteristics: s,
    channels: n,
    audioCodec: r
  } = i;
  return {
    lang: e,
    assocLang: t,
    characteristics: s,
    channels: n,
    audioCodec: r
  };
}
function yt(i, e, t) {
  if ("attrs" in i) {
    const s = e.indexOf(i);
    if (s !== -1)
      return s;
  }
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    if (Xt(i, n, t))
      return s;
  }
  return -1;
}
function Xt(i, e, t) {
  const {
    groupId: s,
    name: n,
    lang: r,
    assocLang: a,
    default: o
  } = i, c = i.forced;
  return (s === void 0 || e.groupId === s) && (n === void 0 || e.name === n) && (r === void 0 || _u(r, e.lang)) && (r === void 0 || e.assocLang === a) && (o === void 0 || e.default === o) && (c === void 0 || e.forced === c) && (!("characteristics" in i) || ku(i.characteristics || "", e.characteristics)) && (t === void 0 || t(i, e));
}
function _u(i, e = "--") {
  return i.length === e.length ? i === e : i.startsWith(e) || e.startsWith(i);
}
function ku(i, e = "") {
  const t = i.split(","), s = e.split(",");
  return t.length === s.length && !t.some((n) => s.indexOf(n) === -1);
}
function Yt(i, e) {
  const {
    audioCodec: t,
    channels: s
  } = i;
  return (t === void 0 || (e.audioCodec || "").substring(0, 4) === t.substring(0, 4)) && (s === void 0 || s === (e.channels || "2"));
}
function Cu(i, e, t, s, n) {
  const r = e[s], o = e.reduce((d, g, f) => {
    const m = g.uri;
    return (d[m] || (d[m] = [])).push(f), d;
  }, {})[r.uri];
  o.length > 1 && (s = Math.max.apply(Math, o));
  const c = r.videoRange, l = r.frameRate, u = r.codecSet.substring(0, 4), h = Dr(e, s, (d) => {
    if (d.videoRange !== c || d.frameRate !== l || d.codecSet.substring(0, 4) !== u)
      return !1;
    const g = d.audioGroups, f = t.filter((m) => !g || g.indexOf(m.groupId) !== -1);
    return yt(i, f, n) > -1;
  });
  return h > -1 ? h : Dr(e, s, (d) => {
    const g = d.audioGroups, f = t.filter((m) => !g || g.indexOf(m.groupId) !== -1);
    return yt(i, f, n) > -1;
  });
}
function Dr(i, e, t) {
  for (let s = e; s > -1; s--)
    if (t(i[s]))
      return s;
  for (let s = e + 1; s < i.length; s++)
    if (t(i[s]))
      return s;
  return -1;
}
function yi(i, e) {
  var t;
  return !!i && i !== ((t = e.loadLevelObj) == null ? void 0 : t.uri);
}
class wu extends rt {
  constructor(e) {
    super("abr", e.logger), this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = -1, this.firstSelection = -1, this._nextAutoLevel = -1, this.nextAutoLevelKey = "", this.audioTracksByGroup = null, this.codecTiers = null, this.timer = -1, this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.rebufferNotice = -1, this.supportedCache = {}, this.bwEstimator = void 0, this._abandonRulesCheck = (t) => {
      var s;
      const {
        fragCurrent: n,
        partCurrent: r,
        hls: a
      } = this, {
        autoLevelEnabled: o,
        media: c
      } = a;
      if (!n || !c)
        return;
      const l = performance.now(), u = r ? r.stats : n.stats, h = r ? r.duration : n.duration, d = l - u.loading.start, g = a.minAutoLevel, f = n.level, m = this._nextAutoLevel;
      if (u.aborted || u.loaded && u.loaded === u.total || f <= g) {
        this.clearTimer(), this._nextAutoLevel = -1;
        return;
      }
      if (!o)
        return;
      const p = m > -1 && m !== f, T = !!t || p;
      if (!T && (c.paused || !c.playbackRate || !c.readyState))
        return;
      const E = a.mainForwardBufferInfo;
      if (!T && E === null)
        return;
      const v = this.bwEstimator.getEstimateTTFB(), x = Math.abs(c.playbackRate);
      if (d <= Math.max(v, 1e3 * (h / (x * 2))))
        return;
      const A = E ? E.len / x : 0, _ = u.loading.first ? u.loading.first - u.loading.start : -1, S = u.loaded && _ > -1, L = this.getBwEstimate(), I = a.levels, R = I[f], w = Math.max(u.loaded, Math.round(h * (n.bitrate || R.averageBitrate) / 8));
      let O = S ? d - _ : d;
      O < 1 && S && (O = Math.min(d, u.loaded * 8 / L));
      const K = S ? u.loaded * 1e3 / O : 0, W = v / 1e3, B = K ? (w - u.loaded) / K : w * 8 / L + W;
      if (B <= A)
        return;
      const P = K ? K * 8 : L, V = ((s = (t == null ? void 0 : t.details) || this.hls.latestLevelDetails) == null ? void 0 : s.live) === !0, N = this.hls.config.abrBandWidthUpFactor;
      let H = Number.POSITIVE_INFINITY, X;
      for (X = f - 1; X > g; X--) {
        const oe = I[X].maxBitrate, Q = !I[X].details || V;
        if (H = this.getTimeToLoadFrag(W, P, h * oe, Q), H < Math.min(A, h + W))
          break;
      }
      if (H >= B || H > h * 10)
        return;
      S ? this.bwEstimator.sample(d - Math.min(v, _), u.loaded) : this.bwEstimator.sampleTTFB(d);
      const F = I[X].maxBitrate;
      this.getBwEstimate() * N > F && this.resetEstimator(F);
      const M = this.findBestLevel(F, g, X, 0, A, 1, 1);
      M > -1 && (X = M), this.warn(`Fragment ${n.sn}${r ? " part " + r.index : ""} of level ${f} is loading too slowly;
      Fragment duration: ${n.duration.toFixed(3)}
      Time to underbuffer: ${A.toFixed(3)} s
      Estimated load time for current fragment: ${B.toFixed(3)} s
      Estimated load time for down switch fragment: ${H.toFixed(3)} s
      TTFB estimate: ${_ | 0} ms
      Current BW estimate: ${G(L) ? L | 0 : "Unknown"} bps
      New BW estimate: ${this.getBwEstimate() | 0} bps
      Switching to level ${X} @ ${F | 0} bps`), a.nextLoadLevel = a.nextAutoLevel = X, this.clearTimer();
      const te = () => {
        if (this.clearTimer(), this.fragCurrent === n && this.hls.loadLevel === X && X > 0) {
          const oe = this.getStarvationDelay();
          if (this.warn(`Aborting inflight request ${X > 0 ? "and switching down" : ""}
      Fragment duration: ${n.duration.toFixed(3)} s
      Time to underbuffer: ${oe.toFixed(3)} s`), n.abortRequests(), this.fragCurrent = this.partCurrent = null, X > g) {
            let Q = this.findBestLevel(this.hls.levels[g].bitrate, g, X, 0, oe, 1, 1);
            Q === -1 && (Q = g), this.hls.nextLoadLevel = this.hls.nextAutoLevel = Q, this.resetEstimator(this.hls.levels[Q].bitrate);
          }
        }
      };
      p || B > H * 2 ? te() : this.timer = self.setInterval(te, H * 1e3), a.trigger(y.FRAG_LOAD_EMERGENCY_ABORTED, {
        frag: n,
        part: r,
        stats: u
      });
    }, this.hls = e, this.bwEstimator = this.initEstimator(), this.registerListeners();
  }
  resetEstimator(e) {
    e && (this.log(`setting initial bwe to ${e}`), this.hls.config.abrEwmaDefaultEstimate = e), this.firstSelection = -1, this.bwEstimator = this.initEstimator();
  }
  initEstimator() {
    const e = this.hls.config;
    return new Fc(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate);
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.FRAG_LOADING, this.onFragLoading, this), e.on(y.FRAG_LOADED, this.onFragLoaded, this), e.on(y.FRAG_BUFFERED, this.onFragBuffered, this), e.on(y.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(y.LEVEL_LOADED, this.onLevelLoaded, this), e.on(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(y.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e.on(y.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.FRAG_LOADING, this.onFragLoading, this), e.off(y.FRAG_LOADED, this.onFragLoaded, this), e.off(y.FRAG_BUFFERED, this.onFragBuffered, this), e.off(y.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(y.LEVEL_LOADED, this.onLevelLoaded, this), e.off(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(y.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e.off(y.ERROR, this.onError, this));
  }
  destroy() {
    this.unregisterListeners(), this.clearTimer(), this.hls = this._abandonRulesCheck = this.supportedCache = null, this.fragCurrent = this.partCurrent = null;
  }
  onManifestLoading(e, t) {
    this.lastLoadedFragLevel = -1, this.firstSelection = -1, this.lastLevelLoadSec = 0, this.supportedCache = {}, this.fragCurrent = this.partCurrent = null, this.onLevelsUpdated(), this.clearTimer();
  }
  onLevelsUpdated() {
    this.lastLoadedFragLevel > -1 && this.fragCurrent && (this.lastLoadedFragLevel = this.fragCurrent.level), this._nextAutoLevel = -1, this.onMaxAutoLevelUpdated(), this.codecTiers = null, this.audioTracksByGroup = null;
  }
  onMaxAutoLevelUpdated() {
    this.firstSelection = -1, this.nextAutoLevelKey = "";
  }
  onFragLoading(e, t) {
    const s = t.frag;
    if (!this.ignoreFragment(s)) {
      if (!s.bitrateTest) {
        var n;
        this.fragCurrent = s, this.partCurrent = (n = t.part) != null ? n : null;
      }
      this.clearTimer(), this.timer = self.setInterval(this._abandonRulesCheck, 100);
    }
  }
  onLevelSwitching(e, t) {
    this.clearTimer();
  }
  onError(e, t) {
    if (!t.fatal)
      switch (t.details) {
        case C.BUFFER_ADD_CODEC_ERROR:
        case C.BUFFER_APPEND_ERROR:
          this.lastLoadedFragLevel = -1, this.firstSelection = -1;
          break;
        case C.FRAG_LOAD_TIMEOUT: {
          const s = t.frag, {
            fragCurrent: n,
            partCurrent: r
          } = this;
          if (s && n && s.sn === n.sn && s.level === n.level) {
            const a = performance.now(), o = r ? r.stats : s.stats, c = a - o.loading.start, l = o.loading.first ? o.loading.first - o.loading.start : -1;
            if (o.loaded && l > -1) {
              const h = this.bwEstimator.getEstimateTTFB();
              this.bwEstimator.sample(c - Math.min(h, l), o.loaded);
            } else
              this.bwEstimator.sampleTTFB(c);
          }
          break;
        }
      }
  }
  getTimeToLoadFrag(e, t, s, n) {
    const r = e + s / t, a = n ? e + this.lastLevelLoadSec : 0;
    return r + a;
  }
  onLevelLoaded(e, t) {
    const s = this.hls.config, {
      loading: n
    } = t.stats, r = n.end - n.first;
    G(r) && (this.lastLevelLoadSec = r / 1e3), t.details.live ? this.bwEstimator.update(s.abrEwmaSlowLive, s.abrEwmaFastLive) : this.bwEstimator.update(s.abrEwmaSlowVoD, s.abrEwmaFastVoD), this.timer > -1 && this._abandonRulesCheck(t.levelInfo);
  }
  onFragLoaded(e, {
    frag: t,
    part: s
  }) {
    const n = s ? s.stats : t.stats;
    if (t.type === j.MAIN && this.bwEstimator.sampleTTFB(n.loading.first - n.loading.start), !this.ignoreFragment(t)) {
      if (this.clearTimer(), t.level === this._nextAutoLevel && (this._nextAutoLevel = -1), this.firstSelection = -1, this.hls.config.abrMaxWithRealBitrate) {
        const r = s ? s.duration : t.duration, a = this.hls.levels[t.level], o = (a.loaded ? a.loaded.bytes : 0) + n.loaded, c = (a.loaded ? a.loaded.duration : 0) + r;
        a.loaded = {
          bytes: o,
          duration: c
        }, a.realBitrate = Math.round(8 * o / c);
      }
      if (t.bitrateTest) {
        const r = {
          stats: n,
          frag: t,
          part: s,
          id: t.type
        };
        this.onFragBuffered(y.FRAG_BUFFERED, r), t.bitrateTest = !1;
      } else
        this.lastLoadedFragLevel = t.level;
    }
  }
  onFragBuffered(e, t) {
    const {
      frag: s,
      part: n
    } = t, r = n != null && n.stats.loaded ? n.stats : s.stats;
    if (r.aborted || this.ignoreFragment(s))
      return;
    const a = r.parsing.end - r.loading.start - Math.min(r.loading.first - r.loading.start, this.bwEstimator.getEstimateTTFB());
    this.bwEstimator.sample(a, r.loaded), r.bwEstimate = this.getBwEstimate(), s.bitrateTest ? this.bitrateTestDelay = a / 1e3 : this.bitrateTestDelay = 0;
  }
  ignoreFragment(e) {
    return e.type !== j.MAIN || e.sn === "initSegment";
  }
  clearTimer() {
    this.timer > -1 && (self.clearInterval(this.timer), this.timer = -1);
  }
  get firstAutoLevel() {
    const {
      maxAutoLevel: e,
      minAutoLevel: t
    } = this.hls, s = this.getBwEstimate(), n = this.hls.config.maxStarvationDelay, r = this.findBestLevel(s, t, e, 0, n, 1, 1);
    if (r > -1)
      return r;
    const a = this.hls.firstLevel, o = Math.min(Math.max(a, t), e);
    return this.warn(`Could not find best starting auto level. Defaulting to first in playlist ${a} clamped to ${o}`), o;
  }
  get forcedAutoLevel() {
    return this.nextAutoLevelKey ? -1 : this._nextAutoLevel;
  }
  // return next auto level
  get nextAutoLevel() {
    const e = this.forcedAutoLevel, s = this.bwEstimator.canEstimate(), n = this.lastLoadedFragLevel > -1;
    if (e !== -1 && (!s || !n || this.nextAutoLevelKey === this.getAutoLevelKey()))
      return e;
    const r = s && n ? this.getNextABRAutoLevel() : this.firstAutoLevel;
    if (e !== -1) {
      const a = this.hls.levels;
      if (a.length > Math.max(e, r) && a[e].loadError <= a[r].loadError)
        return e;
    }
    return this._nextAutoLevel = r, this.nextAutoLevelKey = this.getAutoLevelKey(), r;
  }
  getAutoLevelKey() {
    return `${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`;
  }
  getNextABRAutoLevel() {
    const {
      fragCurrent: e,
      partCurrent: t,
      hls: s
    } = this;
    if (s.levels.length <= 1)
      return s.loadLevel;
    const {
      maxAutoLevel: n,
      config: r,
      minAutoLevel: a
    } = s, o = t ? t.duration : e ? e.duration : 0, c = this.getBwEstimate(), l = this.getStarvationDelay();
    let u = r.abrBandWidthFactor, h = r.abrBandWidthUpFactor;
    if (l) {
      const p = this.findBestLevel(c, a, n, l, 0, u, h);
      if (p >= 0)
        return this.rebufferNotice = -1, p;
    }
    let d = o ? Math.min(o, r.maxStarvationDelay) : r.maxStarvationDelay;
    if (!l) {
      const p = this.bitrateTestDelay;
      p && (d = (o ? Math.min(o, r.maxLoadingDelay) : r.maxLoadingDelay) - p, this.info(`bitrate test took ${Math.round(1e3 * p)}ms, set first fragment max fetchDuration to ${Math.round(1e3 * d)} ms`), u = h = 1);
    }
    const g = this.findBestLevel(c, a, n, l, d, u, h);
    if (this.rebufferNotice !== g && (this.rebufferNotice = g, this.info(`${l ? "rebuffering expected" : "buffer is empty"}, optimal quality level ${g}`)), g > -1)
      return g;
    const f = s.levels[a], m = s.loadLevelObj;
    return m && (f == null ? void 0 : f.bitrate) < m.bitrate ? a : s.loadLevel;
  }
  getStarvationDelay() {
    const e = this.hls, t = e.media;
    if (!t)
      return 1 / 0;
    const s = t && t.playbackRate !== 0 ? Math.abs(t.playbackRate) : 1, n = e.mainForwardBufferInfo;
    return (n ? n.len : 0) / s;
  }
  getBwEstimate() {
    return this.bwEstimator.canEstimate() ? this.bwEstimator.getEstimate() : this.hls.config.abrEwmaDefaultEstimate;
  }
  findBestLevel(e, t, s, n, r, a, o) {
    var c;
    const l = n + r, u = this.lastLoadedFragLevel, h = u === -1 ? this.hls.firstLevel : u, {
      fragCurrent: d,
      partCurrent: g
    } = this, {
      levels: f,
      allAudioTracks: m,
      loadLevel: p,
      config: T
    } = this.hls;
    if (f.length === 1)
      return 0;
    const E = f[h], v = !!((c = this.hls.latestLevelDetails) != null && c.live), x = p === -1 || u === -1;
    let A, _ = "SDR", S = (E == null ? void 0 : E.frameRate) || 0;
    const {
      audioPreference: L,
      videoPreference: I
    } = T, R = this.audioTracksByGroup || (this.audioTracksByGroup = uo(m));
    let w = -1;
    if (x) {
      if (this.firstSelection !== -1)
        return this.firstSelection;
      const P = this.codecTiers || (this.codecTiers = Ru(f, R, t, s)), V = Iu(P, _, e, L, I), {
        codecSet: N,
        videoRanges: H,
        minFramerate: X,
        minBitrate: F,
        minIndex: M,
        preferHDR: te
      } = V;
      w = M, A = N, _ = te ? H[H.length - 1] : H[0], S = X, e = Math.max(e, F), this.log(`picked start tier ${Te(V)}`);
    } else
      A = E == null ? void 0 : E.codecSet, _ = E == null ? void 0 : E.videoRange;
    const O = g ? g.duration : d ? d.duration : 0, K = this.bwEstimator.getEstimateTTFB() / 1e3, W = [];
    for (let P = s; P >= t; P--) {
      var B;
      const V = f[P], N = P > h;
      if (!V)
        continue;
      if (T.useMediaCapabilities && !V.supportedResult && !V.supportedPromise) {
        const Q = navigator.mediaCapabilities;
        typeof (Q == null ? void 0 : Q.decodingInfo) == "function" && pu(V, R, _, S, e, L) ? (V.supportedPromise = lo(V, R, Q, this.supportedCache), V.supportedPromise.then((ie) => {
          if (!this.hls)
            return;
          V.supportedResult = ie;
          const ke = this.hls.levels, Re = ke.indexOf(V);
          ie.error ? this.warn(`MediaCapabilities decodingInfo error: "${ie.error}" for level ${Re} ${Te(ie)}`) : ie.supported ? ie.decodingInfoResults.some((be) => be.smooth === !1 || be.powerEfficient === !1) && this.log(`MediaCapabilities decodingInfo for level ${Re} not smooth or powerEfficient: ${Te(ie)}`) : (this.warn(`Unsupported MediaCapabilities decodingInfo result for level ${Re} ${Te(ie)}`), Re > -1 && ke.length > 1 && (this.log(`Removing unsupported level ${Re}`), this.hls.removeLevel(Re), this.hls.loadLevel === -1 && (this.hls.nextLoadLevel = 0)));
        }).catch((ie) => {
          this.warn(`Error handling MediaCapabilities decodingInfo: ${ie}`);
        })) : V.supportedResult = ao;
      }
      if ((A && V.codecSet !== A || _ && V.videoRange !== _ || N && S > V.frameRate || !N && S > 0 && S < V.frameRate || (B = V.supportedResult) != null && (B = B.decodingInfoResults) != null && B.some((Q) => Q.smooth === !1)) && (!x || P !== w)) {
        W.push(P);
        continue;
      }
      const H = V.details, X = (g ? H == null ? void 0 : H.partTarget : H == null ? void 0 : H.averagetargetduration) || O;
      let F;
      N ? F = o * e : F = a * e;
      const M = O && n >= O * 2 && r === 0 ? V.averageBitrate : V.maxBitrate, te = this.getTimeToLoadFrag(K, F, M * X, H === void 0);
      if (
        // if adjusted bw is greater than level bitrate AND
        F >= M && // no level change, or new level has no error history
        (P === u || V.loadError === 0 && V.fragmentError === 0) && // fragment fetchDuration unknown OR live stream OR fragment fetchDuration less than max allowed fetch duration, then this level matches
        // we don't account for max Fetch Duration for live streams, this is to avoid switching down when near the edge of live sliding window ...
        // special case to support startLevel = -1 (bitrateTest) on live streams : in that case we should not exit loop so that findBestLevel will return -1
        (te <= K || !G(te) || v && !this.bitrateTestDelay || te < l)
      ) {
        const Q = this.forcedAutoLevel;
        return P !== p && (Q === -1 || Q !== p) && (W.length && this.trace(`Skipped level(s) ${W.join(",")} of ${s} max with CODECS and VIDEO-RANGE:"${f[W[0]].codecs}" ${f[W[0]].videoRange}; not compatible with "${A}" ${_}`), this.info(`switch candidate:${h}->${P} adjustedbw(${Math.round(F)})-bitrate=${Math.round(F - M)} ttfb:${K.toFixed(1)} avgDuration:${X.toFixed(1)} maxFetchDuration:${l.toFixed(1)} fetchDuration:${te.toFixed(1)} firstSelection:${x} codecSet:${V.codecSet} videoRange:${V.videoRange} hls.loadLevel:${p}`)), x && (this.firstSelection = P), P;
      }
    }
    return -1;
  }
  set nextAutoLevel(e) {
    const t = this.deriveNextAutoLevel(e);
    this._nextAutoLevel !== t && (this.nextAutoLevelKey = "", this._nextAutoLevel = t);
  }
  deriveNextAutoLevel(e) {
    const {
      maxAutoLevel: t,
      minAutoLevel: s
    } = this.hls;
    return Math.min(Math.max(e, s), t);
  }
}
const ho = {
  /**
   * Searches for an item in an array which matches a certain condition.
   * This requires the condition to only match one item in the array,
   * and for the array to be ordered.
   *
   * @param list The array to search.
   * @param comparisonFn
   *      Called and provided a candidate item as the first argument.
   *      Should return:
   *          > -1 if the item should be located at a lower index than the provided item.
   *          > 1 if the item should be located at a higher index than the provided item.
   *          > 0 if the item is the item you're looking for.
   *
   * @returns the object if found, otherwise returns null
   */
  search: function(i, e) {
    let t = 0, s = i.length - 1, n = null, r = null;
    for (; t <= s; ) {
      n = (t + s) / 2 | 0, r = i[n];
      const a = e(r);
      if (a > 0)
        t = n + 1;
      else if (a < 0)
        s = n - 1;
      else
        return r;
    }
    return null;
  }
};
function Du(i, e, t) {
  if (e === null || !Array.isArray(i) || !i.length || !G(e))
    return null;
  const s = i[0].programDateTime;
  if (e < (s || 0))
    return null;
  const n = i[i.length - 1].endProgramDateTime;
  if (e >= (n || 0))
    return null;
  for (let r = 0; r < i.length; ++r) {
    const a = i[r];
    if (Ou(e, t, a))
      return a;
  }
  return null;
}
function Qt(i, e, t = 0, s = 0, n = 5e-3) {
  let r = null;
  if (i) {
    r = e[1 + i.sn - e[0].sn] || null;
    const o = i.endDTS - t;
    o > 0 && o < 15e-7 && (t += 15e-7), r && i.level !== r.level && r.end <= i.end && (r = e[2 + i.sn - e[0].sn] || null);
  } else t === 0 && e[0].start === 0 && (r = e[0]);
  if (r && ((!i || i.level === r.level) && Pr(t, s, r) === 0 || Pu(r, i, Math.min(n, s))))
    return r;
  const a = ho.search(e, Pr.bind(null, t, s));
  return a && (a !== i || !r) ? a : r;
}
function Pu(i, e, t) {
  if (e && e.start === 0 && e.level < i.level && (e.endPTS || 0) > 0) {
    const s = e.tagList.reduce((n, r) => (r[0] === "INF" && (n += parseFloat(r[1])), n), t);
    return i.start <= s;
  }
  return !1;
}
function Pr(i = 0, e = 0, t) {
  if (t.start <= i && t.start + t.duration > i)
    return 0;
  const s = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0));
  return t.start + t.duration - s <= i ? 1 : t.start - s > i && t.start ? -1 : 0;
}
function Ou(i, e, t) {
  const s = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0)) * 1e3;
  return (t.endProgramDateTime || 0) - s > i;
}
function fo(i, e, t) {
  if (i && i.startCC <= e && i.endCC >= e) {
    let s = i.fragments;
    const {
      fragmentHint: n
    } = i;
    n && (s = s.concat(n));
    let r;
    return ho.search(s, (a) => a.cc < e ? 1 : a.cc > e ? -1 : (r = a, a.end <= t ? 1 : a.start > t ? -1 : 0)), r || null;
  }
  return null;
}
function Ti(i) {
  switch (i.details) {
    case C.FRAG_LOAD_TIMEOUT:
    case C.KEY_LOAD_TIMEOUT:
    case C.LEVEL_LOAD_TIMEOUT:
    case C.MANIFEST_LOAD_TIMEOUT:
      return !0;
  }
  return !1;
}
function go(i) {
  return i.details.startsWith("key");
}
function mo(i) {
  return go(i) && !!i.frag && !i.frag.decryptdata;
}
function Or(i, e) {
  const t = Ti(e);
  return i.default[`${t ? "timeout" : "error"}Retry`];
}
function jn(i, e) {
  const t = i.backoff === "linear" ? 1 : Math.pow(2, e);
  return Math.min(t * i.retryDelayMs, i.maxRetryDelayMs);
}
function Mr(i) {
  return fe(fe({}, i), {
    errorRetry: null,
    timeoutRetry: null
  });
}
function Ei(i, e, t, s) {
  if (!i)
    return !1;
  const n = s == null ? void 0 : s.code, r = e < i.maxNumRetry && (Mu(n) || !!t);
  return i.shouldRetry ? i.shouldRetry(i, e, t, s, r) : r;
}
function Mu(i) {
  return yn(i) || !!i && (i < 400 || i > 499);
}
function yn(i) {
  return i === 0 && navigator.onLine === !1;
}
var $e = {
  DoNothing: 0,
  SendAlternateToPenaltyBox: 2,
  RemoveAlternatePermanently: 3,
  RetryRequest: 5
}, et = {
  None: 0,
  MoveAllAlternatesMatchingHost: 1,
  MoveAllAlternatesMatchingHDCP: 2,
  MoveAllAlternatesMatchingKey: 4
};
class Fu extends rt {
  constructor(e) {
    super("error-controller", e.logger), this.hls = void 0, this.playlistError = 0, this.hls = e, this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e.on(y.ERROR, this.onError, this), e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e && (e.off(y.ERROR, this.onError, this), e.off(y.ERROR, this.onErrorOut, this), e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.LEVEL_UPDATED, this.onLevelUpdated, this));
  }
  destroy() {
    this.unregisterListeners(), this.hls = null;
  }
  startLoad(e) {
  }
  stopLoad() {
    this.playlistError = 0;
  }
  getVariantLevelIndex(e) {
    return (e == null ? void 0 : e.type) === j.MAIN ? e.level : this.getVariantIndex();
  }
  getVariantIndex() {
    var e;
    const t = this.hls, s = t.currentLevel;
    return (e = t.loadLevelObj) != null && e.details || s === -1 ? t.loadLevel : s;
  }
  variantHasKey(e, t) {
    if (e) {
      var s;
      if ((s = e.details) != null && s.hasKey(t))
        return !0;
      const n = e.audioGroups;
      if (n)
        return this.hls.allAudioTracks.filter((a) => n.indexOf(a.groupId) >= 0).some((a) => {
          var o;
          return (o = a.details) == null ? void 0 : o.hasKey(t);
        });
    }
    return !1;
  }
  onManifestLoading() {
    this.playlistError = 0;
  }
  onLevelUpdated() {
    this.playlistError = 0;
  }
  onError(e, t) {
    var s;
    if (t.fatal)
      return;
    const n = this.hls, r = t.context;
    switch (t.details) {
      case C.FRAG_LOAD_ERROR:
      case C.FRAG_LOAD_TIMEOUT:
      case C.KEY_LOAD_ERROR:
      case C.KEY_LOAD_TIMEOUT:
        t.errorAction = this.getFragRetryOrSwitchAction(t);
        return;
      case C.FRAG_PARSING_ERROR:
        if ((s = t.frag) != null && s.gap) {
          t.errorAction = os();
          return;
        }
      // falls through
      case C.FRAG_GAP:
      case C.FRAG_DECRYPT_ERROR: {
        t.errorAction = this.getFragRetryOrSwitchAction(t), t.errorAction.action = $e.SendAlternateToPenaltyBox;
        return;
      }
      case C.LEVEL_EMPTY_ERROR:
      case C.LEVEL_PARSING_ERROR:
        {
          var a;
          const c = t.parent === j.MAIN ? t.level : n.loadLevel;
          t.details === C.LEVEL_EMPTY_ERROR && ((a = t.context) != null && (a = a.levelDetails) != null && a.live) ? t.errorAction = this.getPlaylistRetryOrSwitchAction(t, c) : (t.levelRetry = !1, t.errorAction = this.getLevelSwitchAction(t, c));
        }
        return;
      case C.LEVEL_LOAD_ERROR:
      case C.LEVEL_LOAD_TIMEOUT:
        typeof (r == null ? void 0 : r.level) == "number" && (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, r.level));
        return;
      case C.AUDIO_TRACK_LOAD_ERROR:
      case C.AUDIO_TRACK_LOAD_TIMEOUT:
      case C.SUBTITLE_LOAD_ERROR:
      case C.SUBTITLE_TRACK_LOAD_TIMEOUT:
        if (r) {
          const c = n.loadLevelObj;
          if (c && (r.type === re.AUDIO_TRACK && c.hasAudioGroup(r.groupId) || r.type === re.SUBTITLE_TRACK && c.hasSubtitleGroup(r.groupId))) {
            t.errorAction = this.getPlaylistRetryOrSwitchAction(t, n.loadLevel), t.errorAction.action = $e.SendAlternateToPenaltyBox, t.errorAction.flags = et.MoveAllAlternatesMatchingHost;
            return;
          }
        }
        return;
      case C.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
        t.errorAction = {
          action: $e.SendAlternateToPenaltyBox,
          flags: et.MoveAllAlternatesMatchingHDCP
        };
        return;
      case C.KEY_SYSTEM_SESSION_UPDATE_FAILED:
      case C.KEY_SYSTEM_STATUS_INTERNAL_ERROR:
      case C.KEY_SYSTEM_NO_SESSION:
        t.errorAction = {
          action: $e.SendAlternateToPenaltyBox,
          flags: et.MoveAllAlternatesMatchingKey
        };
        return;
      case C.BUFFER_ADD_CODEC_ERROR:
      case C.REMUX_ALLOC_ERROR:
      case C.BUFFER_APPEND_ERROR:
        if (!t.errorAction) {
          var o;
          t.errorAction = this.getLevelSwitchAction(t, (o = t.level) != null ? o : n.loadLevel);
        }
        return;
      case C.INTERNAL_EXCEPTION:
      case C.BUFFER_APPENDING_ERROR:
      case C.BUFFER_FULL_ERROR:
      case C.LEVEL_SWITCH_ERROR:
      case C.BUFFER_STALLED_ERROR:
      case C.BUFFER_SEEK_OVER_HOLE:
      case C.BUFFER_NUDGE_ON_STALL:
        t.errorAction = os();
        return;
    }
    t.type === q.KEY_SYSTEM_ERROR && (t.levelRetry = !1, t.errorAction = os());
  }
  getPlaylistRetryOrSwitchAction(e, t) {
    const s = this.hls, n = Or(s.config.playlistLoadPolicy, e), r = this.playlistError++;
    if (Ei(n, r, Ti(e), e.response))
      return {
        action: $e.RetryRequest,
        flags: et.None,
        retryConfig: n,
        retryCount: r
      };
    const o = this.getLevelSwitchAction(e, t);
    return n && (o.retryConfig = n, o.retryCount = r), o;
  }
  getFragRetryOrSwitchAction(e) {
    const t = this.hls, s = this.getVariantLevelIndex(e.frag), n = t.levels[s], {
      fragLoadPolicy: r,
      keyLoadPolicy: a
    } = t.config, o = Or(go(e) ? a : r, e), c = t.levels.reduce((u, h) => u + h.fragmentError, 0);
    if (n && (e.details !== C.FRAG_GAP && n.fragmentError++, !mo(e) && Ei(o, c, Ti(e), e.response)))
      return {
        action: $e.RetryRequest,
        flags: et.None,
        retryConfig: o,
        retryCount: c
      };
    const l = this.getLevelSwitchAction(e, s);
    return o && (l.retryConfig = o, l.retryCount = c), l;
  }
  getLevelSwitchAction(e, t) {
    const s = this.hls;
    t == null && (t = s.loadLevel);
    const n = this.hls.levels[t];
    if (n) {
      var r, a;
      const l = e.details;
      n.loadError++, l === C.BUFFER_APPEND_ERROR && n.fragmentError++;
      let u = -1;
      const {
        levels: h,
        loadLevel: d,
        minAutoLevel: g,
        maxAutoLevel: f
      } = s;
      !s.autoLevelEnabled && !s.config.preserveManualLevelOnError && (s.loadLevel = -1);
      const m = (r = e.frag) == null ? void 0 : r.type, T = (m === j.AUDIO && l === C.FRAG_PARSING_ERROR || e.sourceBufferName === "audio" && (l === C.BUFFER_ADD_CODEC_ERROR || l === C.BUFFER_APPEND_ERROR)) && h.some(({
        audioCodec: _
      }) => n.audioCodec !== _), v = e.sourceBufferName === "video" && (l === C.BUFFER_ADD_CODEC_ERROR || l === C.BUFFER_APPEND_ERROR) && h.some(({
        codecSet: _,
        audioCodec: S
      }) => n.codecSet !== _ && n.audioCodec === S), {
        type: x,
        groupId: A
      } = (a = e.context) != null ? a : {};
      for (let _ = h.length; _--; ) {
        const S = (_ + d) % h.length;
        if (S !== d && S >= g && S <= f && h[S].loadError === 0) {
          var o, c;
          const L = h[S];
          if (l === C.FRAG_GAP && m === j.MAIN && e.frag) {
            const I = h[S].details;
            if (I) {
              const R = Qt(e.frag, I.fragments, e.frag.start);
              if (R != null && R.gap)
                continue;
            }
          } else {
            if (x === re.AUDIO_TRACK && L.hasAudioGroup(A) || x === re.SUBTITLE_TRACK && L.hasSubtitleGroup(A))
              continue;
            if (m === j.AUDIO && (o = n.audioGroups) != null && o.some((I) => L.hasAudioGroup(I)) || m === j.SUBTITLE && (c = n.subtitleGroups) != null && c.some((I) => L.hasSubtitleGroup(I)) || T && n.audioCodec === L.audioCodec || v && n.codecSet === L.codecSet || !T && n.codecSet !== L.codecSet)
              continue;
          }
          u = S;
          break;
        }
      }
      if (u > -1 && s.loadLevel !== u)
        return e.levelRetry = !0, this.playlistError = 0, {
          action: $e.SendAlternateToPenaltyBox,
          flags: et.None,
          nextAutoLevel: u
        };
    }
    return {
      action: $e.SendAlternateToPenaltyBox,
      flags: et.MoveAllAlternatesMatchingHost
    };
  }
  onErrorOut(e, t) {
    var s;
    switch ((s = t.errorAction) == null ? void 0 : s.action) {
      case $e.DoNothing:
        break;
      case $e.SendAlternateToPenaltyBox:
        this.sendAlternateToPenaltyBox(t), !t.errorAction.resolved && t.details !== C.FRAG_GAP ? t.fatal = !0 : /MediaSource readyState: ended/.test(t.error.message) && (this.warn(`MediaSource ended after "${t.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`), this.hls.recoverMediaError());
        break;
    }
    if (t.fatal) {
      this.hls.stopLoad();
      return;
    }
  }
  sendAlternateToPenaltyBox(e) {
    const t = this.hls, s = e.errorAction;
    if (!s)
      return;
    const {
      flags: n
    } = s, r = s.nextAutoLevel;
    switch (n) {
      case et.None:
        this.switchLevel(e, r);
        break;
      case et.MoveAllAlternatesMatchingHDCP: {
        const c = this.getVariantLevelIndex(e.frag), l = t.levels[c], u = l == null ? void 0 : l.attrs["HDCP-LEVEL"];
        if (s.hdcpLevel = u, u === "NONE")
          this.warn("HDCP policy resticted output with HDCP-LEVEL=NONE");
        else if (u) {
          t.maxHdcpLevel = pn[pn.indexOf(u) - 1], s.resolved = !0, this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);
          break;
        }
      }
      // eslint-disable-next-line no-fallthrough
      case et.MoveAllAlternatesMatchingKey: {
        const c = e.decryptdata;
        if (c) {
          const l = this.hls.levels, u = l.length;
          for (let d = u; d--; )
            if (this.variantHasKey(l[d], c)) {
              var a, o;
              this.log(`Banned key found in level ${d} (${l[d].bitrate}bps) or audio group "${(a = l[d].audioGroups) == null ? void 0 : a.join(",")}" (${(o = e.frag) == null ? void 0 : o.type} fragment) ${Be(c.keyId || [])}`), l[d].fragmentError++, l[d].loadError++, this.log(`Removing level ${d} with key error (${e.error})`), this.hls.removeLevel(d);
            }
          const h = e.frag;
          if (this.hls.levels.length < u)
            s.resolved = !0;
          else if (h && h.type !== j.MAIN) {
            const d = h.decryptdata;
            d && !c.matches(d) && (s.resolved = !0);
          }
        }
        break;
      }
    }
    s.resolved || this.switchLevel(e, r);
  }
  switchLevel(e, t) {
    if (t !== void 0 && e.errorAction && (this.warn(`switching to level ${t} after ${e.details}`), this.hls.nextAutoLevel = t, e.errorAction.resolved = !0, this.hls.nextLoadLevel = this.hls.nextAutoLevel, e.details === C.BUFFER_ADD_CODEC_ERROR && e.mimeType && e.sourceBufferName !== "audiovideo")) {
      const s = mn(e.mimeType), n = this.hls.levels;
      for (let r = n.length; r--; )
        n[r][`${e.sourceBufferName}Codec`] === s && (this.log(`Removing level ${r} for ${e.details} ("${s}" not supported)`), this.hls.removeLevel(r));
    }
  }
}
function os(i) {
  const e = {
    action: $e.DoNothing,
    flags: et.None
  };
  return i && (e.resolved = !0), e;
}
var Pe = {
  NOT_LOADED: "NOT_LOADED",
  APPENDING: "APPENDING",
  PARTIAL: "PARTIAL",
  OK: "OK"
};
class Nu {
  constructor(e) {
    this.activePartLists = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.fragments = /* @__PURE__ */ Object.create(null), this.timeRanges = /* @__PURE__ */ Object.create(null), this.bufferPadding = 0.2, this.hls = void 0, this.hasGaps = !1, this.hls = e, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e && (e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.BUFFER_APPENDED, this.onBufferAppended, this), e.on(y.FRAG_BUFFERED, this.onFragBuffered, this), e.on(y.FRAG_LOADED, this.onFragLoaded, this));
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.BUFFER_APPENDED, this.onBufferAppended, this), e.off(y.FRAG_BUFFERED, this.onFragBuffered, this), e.off(y.FRAG_LOADED, this.onFragLoaded, this));
  }
  destroy() {
    this._unregisterListeners(), this.hls = // @ts-ignore
    this.fragments = // @ts-ignore
    this.activePartLists = // @ts-ignore
    this.endListFragments = this.timeRanges = null;
  }
  /**
   * Return a Fragment or Part with an appended range that matches the position and levelType
   * Otherwise, return null
   */
  getAppendedFrag(e, t) {
    const s = this.activePartLists[t];
    if (s)
      for (let n = s.length; n--; ) {
        const r = s[n];
        if (!r)
          break;
        if (r.start <= e && e <= r.end && r.loaded)
          return r;
      }
    return this.getBufferedFrag(e, t);
  }
  /**
   * Return a buffered Fragment that matches the position and levelType.
   * A buffered Fragment is one whose loading, parsing and appending is done (completed or "partial" meaning aborted).
   * If not found any Fragment, return null
   */
  getBufferedFrag(e, t) {
    return this.getFragAtPos(e, t, !0);
  }
  getFragAtPos(e, t, s) {
    const {
      fragments: n
    } = this, r = Object.keys(n);
    for (let a = r.length; a--; ) {
      const o = n[r[a]];
      if ((o == null ? void 0 : o.body.type) === t && (!s || o.buffered)) {
        const c = o.body;
        if (c.start <= e && e <= c.end)
          return c;
      }
    }
    return null;
  }
  /**
   * Partial fragments effected by coded frame eviction will be removed
   * The browser will unload parts of the buffer to free up memory for new buffer data
   * Fragments will need to be reloaded when the buffer is freed up, removing partial fragments will allow them to reload(since there might be parts that are still playable)
   */
  detectEvictedFragments(e, t, s, n, r) {
    this.timeRanges && (this.timeRanges[e] = t);
    const a = (n == null ? void 0 : n.fragment.sn) || -1;
    Object.keys(this.fragments).forEach((o) => {
      const c = this.fragments[o];
      if (!c || a >= c.body.sn)
        return;
      if (!c.buffered && (!c.loaded || r)) {
        c.body.type === s && this.removeFragment(c.body);
        return;
      }
      const l = c.range[e];
      if (l) {
        if (l.time.length === 0) {
          this.removeFragment(c.body);
          return;
        }
        l.time.some((u) => {
          const h = !this.isTimeBuffered(u.startPTS, u.endPTS, t);
          return h && this.removeFragment(c.body), h;
        });
      }
    });
  }
  /**
   * Checks if the fragment passed in is loaded in the buffer properly
   * Partially loaded fragments will be registered as a partial fragment
   */
  detectPartialFragments(e) {
    const t = this.timeRanges;
    if (!t || e.frag.sn === "initSegment")
      return;
    const s = e.frag, n = ts(s), r = this.fragments[n];
    if (!r || r.buffered && s.gap)
      return;
    const a = !s.relurl;
    Object.keys(t).forEach((o) => {
      const c = s.elementaryStreams[o];
      if (!c)
        return;
      const l = t[o], u = a || c.partial === !0;
      r.range[o] = this.getBufferedTimes(s, e.part, u, l);
    }), r.loaded = null, Object.keys(r.range).length ? (this.bufferedEnd(r, s), Ks(r) || this.removeParts(s.sn - 1, s.type)) : this.removeFragment(r.body);
  }
  bufferedEnd(e, t) {
    e.buffered = !0, (e.body.endList = t.endList || e.body.endList) && (this.endListFragments[e.body.type] = e);
  }
  removeParts(e, t) {
    const s = this.activePartLists[t];
    s && (this.activePartLists[t] = Fr(s, (n) => n.fragment.sn >= e));
  }
  fragBuffered(e, t) {
    const s = ts(e);
    let n = this.fragments[s];
    !n && t && (n = this.fragments[s] = {
      body: e,
      appendedPTS: null,
      loaded: null,
      buffered: !1,
      range: /* @__PURE__ */ Object.create(null)
    }, e.gap && (this.hasGaps = !0)), n && (n.loaded = null, this.bufferedEnd(n, e));
  }
  getBufferedTimes(e, t, s, n) {
    const r = {
      time: [],
      partial: s
    }, a = e.start, o = e.end, c = e.minEndPTS || o, l = e.maxStartPTS || a;
    for (let u = 0; u < n.length; u++) {
      const h = n.start(u) - this.bufferPadding, d = n.end(u) + this.bufferPadding;
      if (l >= h && c <= d) {
        r.time.push({
          startPTS: Math.max(a, n.start(u)),
          endPTS: Math.min(o, n.end(u))
        });
        break;
      } else if (a < d && o > h) {
        const g = Math.max(a, n.start(u)), f = Math.min(o, n.end(u));
        f > g && (r.partial = !0, r.time.push({
          startPTS: g,
          endPTS: f
        }));
      } else if (o <= h)
        break;
    }
    return r;
  }
  /**
   * Gets the partial fragment for a certain time
   */
  getPartialFragment(e) {
    let t = null, s, n, r, a = 0;
    const {
      bufferPadding: o,
      fragments: c
    } = this;
    return Object.keys(c).forEach((l) => {
      const u = c[l];
      u && Ks(u) && (n = u.body.start - o, r = u.body.end + o, e >= n && e <= r && (s = Math.min(e - n, r - e), a <= s && (t = u.body, a = s)));
    }), t;
  }
  isEndListAppended(e) {
    const t = this.endListFragments[e];
    return t !== void 0 && (t.buffered || Ks(t));
  }
  getState(e) {
    const t = ts(e), s = this.fragments[t];
    return s ? s.buffered ? Ks(s) ? Pe.PARTIAL : Pe.OK : Pe.APPENDING : Pe.NOT_LOADED;
  }
  isTimeBuffered(e, t, s) {
    let n, r;
    for (let a = 0; a < s.length; a++) {
      if (n = s.start(a) - this.bufferPadding, r = s.end(a) + this.bufferPadding, e >= n && t <= r)
        return !0;
      if (t <= n)
        return !1;
    }
    return !1;
  }
  onManifestLoading() {
    this.removeAllFragments();
  }
  onFragLoaded(e, t) {
    if (t.frag.sn === "initSegment" || t.frag.bitrateTest)
      return;
    const s = t.frag, n = t.part ? null : t, r = ts(s);
    this.fragments[r] = {
      body: s,
      appendedPTS: null,
      loaded: n,
      buffered: !1,
      range: /* @__PURE__ */ Object.create(null)
    };
  }
  onBufferAppended(e, t) {
    const {
      frag: s,
      part: n,
      timeRanges: r,
      type: a
    } = t;
    if (s.sn === "initSegment")
      return;
    const o = s.type;
    if (n) {
      let l = this.activePartLists[o];
      l || (this.activePartLists[o] = l = []), l.push(n);
    }
    this.timeRanges = r;
    const c = r[a];
    this.detectEvictedFragments(a, c, o, n);
  }
  onFragBuffered(e, t) {
    this.detectPartialFragments(t);
  }
  hasFragment(e) {
    const t = ts(e);
    return !!this.fragments[t];
  }
  hasFragments(e) {
    const {
      fragments: t
    } = this, s = Object.keys(t);
    if (!e)
      return s.length > 0;
    for (let n = s.length; n--; ) {
      const r = t[s[n]];
      if ((r == null ? void 0 : r.body.type) === e)
        return !0;
    }
    return !1;
  }
  hasParts(e) {
    var t;
    return !!((t = this.activePartLists[e]) != null && t.length);
  }
  removeFragmentsInRange(e, t, s, n, r) {
    n && !this.hasGaps || Object.keys(this.fragments).forEach((a) => {
      const o = this.fragments[a];
      if (!o)
        return;
      const c = o.body;
      c.type !== s || n && !c.gap || c.start < t && c.end > e && (o.buffered || r) && this.removeFragment(c);
    });
  }
  removeFragment(e) {
    const t = ts(e);
    e.clearElementaryStreamInfo();
    const s = this.activePartLists[e.type];
    if (s) {
      const n = e.sn;
      this.activePartLists[e.type] = Fr(s, (r) => r.fragment.sn !== n);
    }
    delete this.fragments[t], e.endList && delete this.endListFragments[e.type];
  }
  removeAllFragments() {
    var e;
    this.fragments = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.activePartLists = /* @__PURE__ */ Object.create(null), this.hasGaps = !1;
    const t = (e = this.hls) == null || (e = e.latestLevelDetails) == null ? void 0 : e.partList;
    t && t.forEach((s) => s.clearElementaryStreamInfo());
  }
}
function Ks(i) {
  var e, t, s;
  return i.buffered && !!(i.body.gap || (e = i.range.video) != null && e.partial || (t = i.range.audio) != null && t.partial || (s = i.range.audiovideo) != null && s.partial);
}
function ts(i) {
  return `${i.type}_${i.level}_${i.sn}`;
}
function Fr(i, e) {
  return i.filter((t) => {
    const s = e(t);
    return s || t.clearElementaryStreamInfo(), s;
  });
}
var Ut = {
  cbc: 0,
  ctr: 1
};
class $u {
  constructor(e, t, s) {
    this.subtle = void 0, this.aesIV = void 0, this.aesMode = void 0, this.subtle = e, this.aesIV = t, this.aesMode = s;
  }
  decrypt(e, t) {
    switch (this.aesMode) {
      case Ut.cbc:
        return this.subtle.decrypt({
          name: "AES-CBC",
          iv: this.aesIV
        }, t, e);
      case Ut.ctr:
        return this.subtle.decrypt(
          {
            name: "AES-CTR",
            counter: this.aesIV,
            length: 64
          },
          //64 : NIST SP800-38A standard suggests that the counter should occupy half of the counter block
          t,
          e
        );
      default:
        throw new Error(`[AESCrypto] invalid aes mode ${this.aesMode}`);
    }
  }
}
function Bu(i) {
  const e = i.byteLength, t = e && new DataView(i.buffer).getUint8(e - 1);
  return t ? i.slice(0, e - t) : i;
}
class Uu {
  constructor() {
    this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable();
  }
  // Using view.getUint32() also swaps the byte order.
  uint8ArrayToUint32Array_(e) {
    const t = new DataView(e), s = new Uint32Array(4);
    for (let n = 0; n < 4; n++)
      s[n] = t.getUint32(n * 4);
    return s;
  }
  initTable() {
    const e = this.sBox, t = this.invSBox, s = this.subMix, n = s[0], r = s[1], a = s[2], o = s[3], c = this.invSubMix, l = c[0], u = c[1], h = c[2], d = c[3], g = new Uint32Array(256);
    let f = 0, m = 0, p = 0;
    for (p = 0; p < 256; p++)
      p < 128 ? g[p] = p << 1 : g[p] = p << 1 ^ 283;
    for (p = 0; p < 256; p++) {
      let T = m ^ m << 1 ^ m << 2 ^ m << 3 ^ m << 4;
      T = T >>> 8 ^ T & 255 ^ 99, e[f] = T, t[T] = f;
      const E = g[f], v = g[E], x = g[v];
      let A = g[T] * 257 ^ T * 16843008;
      n[f] = A << 24 | A >>> 8, r[f] = A << 16 | A >>> 16, a[f] = A << 8 | A >>> 24, o[f] = A, A = x * 16843009 ^ v * 65537 ^ E * 257 ^ f * 16843008, l[T] = A << 24 | A >>> 8, u[T] = A << 16 | A >>> 16, h[T] = A << 8 | A >>> 24, d[T] = A, f ? (f = E ^ g[g[g[x ^ E]]], m ^= g[g[m]]) : f = m = 1;
    }
  }
  expandKey(e) {
    const t = this.uint8ArrayToUint32Array_(e);
    let s = !0, n = 0;
    for (; n < t.length && s; )
      s = t[n] === this.key[n], n++;
    if (s)
      return;
    this.key = t;
    const r = this.keySize = t.length;
    if (r !== 4 && r !== 6 && r !== 8)
      throw new Error("Invalid aes key size=" + r);
    const a = this.ksRows = (r + 6 + 1) * 4;
    let o, c;
    const l = this.keySchedule = new Uint32Array(a), u = this.invKeySchedule = new Uint32Array(a), h = this.sBox, d = this.rcon, g = this.invSubMix, f = g[0], m = g[1], p = g[2], T = g[3];
    let E, v;
    for (o = 0; o < a; o++) {
      if (o < r) {
        E = l[o] = t[o];
        continue;
      }
      v = E, o % r === 0 ? (v = v << 8 | v >>> 24, v = h[v >>> 24] << 24 | h[v >>> 16 & 255] << 16 | h[v >>> 8 & 255] << 8 | h[v & 255], v ^= d[o / r | 0] << 24) : r > 6 && o % r === 4 && (v = h[v >>> 24] << 24 | h[v >>> 16 & 255] << 16 | h[v >>> 8 & 255] << 8 | h[v & 255]), l[o] = E = (l[o - r] ^ v) >>> 0;
    }
    for (c = 0; c < a; c++)
      o = a - c, c & 3 ? v = l[o] : v = l[o - 4], c < 4 || o <= 4 ? u[c] = v : u[c] = f[h[v >>> 24]] ^ m[h[v >>> 16 & 255]] ^ p[h[v >>> 8 & 255]] ^ T[h[v & 255]], u[c] = u[c] >>> 0;
  }
  // Adding this as a method greatly improves performance.
  networkToHostOrderSwap(e) {
    return e << 24 | (e & 65280) << 8 | (e & 16711680) >> 8 | e >>> 24;
  }
  decrypt(e, t, s) {
    const n = this.keySize + 6, r = this.invKeySchedule, a = this.invSBox, o = this.invSubMix, c = o[0], l = o[1], u = o[2], h = o[3], d = this.uint8ArrayToUint32Array_(s);
    let g = d[0], f = d[1], m = d[2], p = d[3];
    const T = new Int32Array(e), E = new Int32Array(T.length);
    let v, x, A, _, S, L, I, R, w, O, K, W, B, P;
    const V = this.networkToHostOrderSwap;
    for (; t < T.length; ) {
      for (w = V(T[t]), O = V(T[t + 1]), K = V(T[t + 2]), W = V(T[t + 3]), S = w ^ r[0], L = W ^ r[1], I = K ^ r[2], R = O ^ r[3], B = 4, P = 1; P < n; P++)
        v = c[S >>> 24] ^ l[L >> 16 & 255] ^ u[I >> 8 & 255] ^ h[R & 255] ^ r[B], x = c[L >>> 24] ^ l[I >> 16 & 255] ^ u[R >> 8 & 255] ^ h[S & 255] ^ r[B + 1], A = c[I >>> 24] ^ l[R >> 16 & 255] ^ u[S >> 8 & 255] ^ h[L & 255] ^ r[B + 2], _ = c[R >>> 24] ^ l[S >> 16 & 255] ^ u[L >> 8 & 255] ^ h[I & 255] ^ r[B + 3], S = v, L = x, I = A, R = _, B = B + 4;
      v = a[S >>> 24] << 24 ^ a[L >> 16 & 255] << 16 ^ a[I >> 8 & 255] << 8 ^ a[R & 255] ^ r[B], x = a[L >>> 24] << 24 ^ a[I >> 16 & 255] << 16 ^ a[R >> 8 & 255] << 8 ^ a[S & 255] ^ r[B + 1], A = a[I >>> 24] << 24 ^ a[R >> 16 & 255] << 16 ^ a[S >> 8 & 255] << 8 ^ a[L & 255] ^ r[B + 2], _ = a[R >>> 24] << 24 ^ a[S >> 16 & 255] << 16 ^ a[L >> 8 & 255] << 8 ^ a[I & 255] ^ r[B + 3], E[t] = V(v ^ g), E[t + 1] = V(_ ^ f), E[t + 2] = V(A ^ m), E[t + 3] = V(x ^ p), g = w, f = O, m = K, p = W, t = t + 4;
    }
    return E.buffer;
  }
}
class Gu {
  constructor(e, t, s) {
    this.subtle = void 0, this.key = void 0, this.aesMode = void 0, this.subtle = e, this.key = t, this.aesMode = s;
  }
  expandKey() {
    const e = Ku(this.aesMode);
    return this.subtle.importKey("raw", this.key, {
      name: e
    }, !1, ["encrypt", "decrypt"]);
  }
}
function Ku(i) {
  switch (i) {
    case Ut.cbc:
      return "AES-CBC";
    case Ut.ctr:
      return "AES-CTR";
    default:
      throw new Error(`[FastAESKey] invalid aes mode ${i}`);
  }
}
const Vu = 16;
class Wn {
  constructor(e, {
    removePKCS7Padding: t = !0
  } = {}) {
    if (this.logEnabled = !0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.enableSoftwareAES = void 0, this.enableSoftwareAES = e.enableSoftwareAES, this.removePKCS7Padding = t, t)
      try {
        const s = self.crypto;
        s && (this.subtle = s.subtle || s.webkitSubtle);
      } catch {
      }
    this.useSoftware = !this.subtle;
  }
  destroy() {
    this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null;
  }
  isSync() {
    return this.useSoftware;
  }
  flush() {
    const {
      currentResult: e,
      remainderData: t
    } = this;
    if (!e || t)
      return this.reset(), null;
    const s = new Uint8Array(e);
    return this.reset(), this.removePKCS7Padding ? Bu(s) : s;
  }
  reset() {
    this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null);
  }
  decrypt(e, t, s, n) {
    return this.useSoftware ? new Promise((r, a) => {
      const o = ArrayBuffer.isView(e) ? e : new Uint8Array(e);
      this.softwareDecrypt(o, t, s, n);
      const c = this.flush();
      c ? r(c.buffer) : a(new Error("[softwareDecrypt] Failed to decrypt data"));
    }) : this.webCryptoDecrypt(new Uint8Array(e), t, s, n);
  }
  // Software decryption is progressive. Progressive decryption may not return a result on each call. Any cached
  // data is handled in the flush() call
  softwareDecrypt(e, t, s, n) {
    const {
      currentIV: r,
      currentResult: a,
      remainderData: o
    } = this;
    if (n !== Ut.cbc || t.byteLength !== 16)
      return ge.warn("SoftwareDecrypt: can only handle AES-128-CBC"), null;
    this.logOnce("JS AES decrypt"), o && (e = nt(o, e), this.remainderData = null);
    const c = this.getValidChunk(e);
    if (!c.length)
      return null;
    r && (s = r);
    let l = this.softwareDecrypter;
    l || (l = this.softwareDecrypter = new Uu()), l.expandKey(t);
    const u = a;
    return this.currentResult = l.decrypt(c.buffer, 0, s), this.currentIV = c.slice(-16).buffer, u || null;
  }
  webCryptoDecrypt(e, t, s, n) {
    if (this.key !== t || !this.fastAesKey) {
      if (!this.subtle)
        return Promise.resolve(this.onWebCryptoError(e, t, s, n));
      this.key = t, this.fastAesKey = new Gu(this.subtle, t, n);
    }
    return this.fastAesKey.expandKey().then((r) => this.subtle ? (this.logOnce("WebCrypto AES decrypt"), new $u(this.subtle, new Uint8Array(s), n).decrypt(e.buffer, r)) : Promise.reject(new Error("web crypto not initialized"))).catch((r) => (ge.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${r.name}: ${r.message}`), this.onWebCryptoError(e, t, s, n)));
  }
  onWebCryptoError(e, t, s, n) {
    const r = this.enableSoftwareAES;
    if (r) {
      this.useSoftware = !0, this.logEnabled = !0, this.softwareDecrypt(e, t, s, n);
      const a = this.flush();
      if (a)
        return a.buffer;
    }
    throw new Error("WebCrypto" + (r ? " and softwareDecrypt" : "") + ": failed to decrypt data");
  }
  getValidChunk(e) {
    let t = e;
    const s = e.length - e.length % Vu;
    return s !== e.length && (t = e.slice(0, s), this.remainderData = e.slice(s)), t;
  }
  logOnce(e) {
    this.logEnabled && (ge.log(`[decrypter]: ${e}`), this.logEnabled = !1);
  }
}
const Nr = Math.pow(2, 17);
class Hu {
  constructor(e) {
    this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = e;
  }
  destroy() {
    this.loader && (this.loader.destroy(), this.loader = null);
  }
  abort() {
    this.loader && this.loader.abort();
  }
  load(e, t) {
    const s = e.url;
    if (!s)
      return Promise.reject(new It({
        type: q.NETWORK_ERROR,
        details: C.FRAG_LOAD_ERROR,
        fatal: !1,
        frag: e,
        error: new Error(`Fragment does not have a ${s ? "part list" : "url"}`),
        networkDetails: null
      }));
    this.abort();
    const n = this.config, r = n.fLoader, a = n.loader;
    return new Promise((o, c) => {
      if (this.loader && this.loader.destroy(), e.gap)
        if (e.tagList.some((f) => f[0] === "GAP")) {
          c(Br(e));
          return;
        } else
          e.gap = !1;
      const l = this.loader = r ? new r(n) : new a(n), u = $r(e);
      e.loader = l;
      const h = Mr(n.fragLoadPolicy.default), d = {
        loadPolicy: h,
        timeout: h.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0,
        highWaterMark: e.sn === "initSegment" ? 1 / 0 : Nr
      };
      e.stats = l.stats;
      const g = {
        onSuccess: (f, m, p, T) => {
          this.resetLoader(e, l);
          let E = f.data;
          p.resetIV && e.decryptdata && (e.decryptdata.iv = new Uint8Array(E.slice(0, 16)), E = E.slice(16)), o({
            frag: e,
            part: null,
            payload: E,
            networkDetails: T
          });
        },
        onError: (f, m, p, T) => {
          this.resetLoader(e, l), c(new It({
            type: q.NETWORK_ERROR,
            details: C.FRAG_LOAD_ERROR,
            fatal: !1,
            frag: e,
            response: fe({
              url: s,
              data: void 0
            }, f),
            error: new Error(`HTTP Error ${f.code} ${f.text}`),
            networkDetails: p,
            stats: T
          }));
        },
        onAbort: (f, m, p) => {
          this.resetLoader(e, l), c(new It({
            type: q.NETWORK_ERROR,
            details: C.INTERNAL_ABORTED,
            fatal: !1,
            frag: e,
            error: new Error("Aborted"),
            networkDetails: p,
            stats: f
          }));
        },
        onTimeout: (f, m, p) => {
          this.resetLoader(e, l), c(new It({
            type: q.NETWORK_ERROR,
            details: C.FRAG_LOAD_TIMEOUT,
            fatal: !1,
            frag: e,
            error: new Error(`Timeout after ${d.timeout}ms`),
            networkDetails: p,
            stats: f
          }));
        }
      };
      t && (g.onProgress = (f, m, p, T) => t({
        frag: e,
        part: null,
        payload: p,
        networkDetails: T
      })), l.load(u, d, g);
    });
  }
  loadPart(e, t, s) {
    this.abort();
    const n = this.config, r = n.fLoader, a = n.loader;
    return new Promise((o, c) => {
      if (this.loader && this.loader.destroy(), e.gap || t.gap) {
        c(Br(e, t));
        return;
      }
      const l = this.loader = r ? new r(n) : new a(n), u = $r(e, t);
      e.loader = l;
      const h = Mr(n.fragLoadPolicy.default), d = {
        loadPolicy: h,
        timeout: h.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0,
        highWaterMark: Nr
      };
      t.stats = l.stats, l.load(u, d, {
        onSuccess: (g, f, m, p) => {
          this.resetLoader(e, l), this.updateStatsFromPart(e, t);
          const T = {
            frag: e,
            part: t,
            payload: g.data,
            networkDetails: p
          };
          s(T), o(T);
        },
        onError: (g, f, m, p) => {
          this.resetLoader(e, l), c(new It({
            type: q.NETWORK_ERROR,
            details: C.FRAG_LOAD_ERROR,
            fatal: !1,
            frag: e,
            part: t,
            response: fe({
              url: u.url,
              data: void 0
            }, g),
            error: new Error(`HTTP Error ${g.code} ${g.text}`),
            networkDetails: m,
            stats: p
          }));
        },
        onAbort: (g, f, m) => {
          e.stats.aborted = t.stats.aborted, this.resetLoader(e, l), c(new It({
            type: q.NETWORK_ERROR,
            details: C.INTERNAL_ABORTED,
            fatal: !1,
            frag: e,
            part: t,
            error: new Error("Aborted"),
            networkDetails: m,
            stats: g
          }));
        },
        onTimeout: (g, f, m) => {
          this.resetLoader(e, l), c(new It({
            type: q.NETWORK_ERROR,
            details: C.FRAG_LOAD_TIMEOUT,
            fatal: !1,
            frag: e,
            part: t,
            error: new Error(`Timeout after ${d.timeout}ms`),
            networkDetails: m,
            stats: g
          }));
        }
      });
    });
  }
  updateStatsFromPart(e, t) {
    const s = e.stats, n = t.stats, r = n.total;
    if (s.loaded += n.loaded, r) {
      const c = Math.round(e.duration / t.duration), l = Math.min(Math.round(s.loaded / r), c), h = (c - l) * Math.round(s.loaded / l);
      s.total = s.loaded + h;
    } else
      s.total = Math.max(s.loaded, s.total);
    const a = s.loading, o = n.loading;
    a.start ? a.first += o.first - o.start : (a.start = o.start, a.first = o.first), a.end = o.end;
  }
  resetLoader(e, t) {
    e.loader = null, this.loader === t && (self.clearTimeout(this.partLoadTimeout), this.loader = null), t.destroy();
  }
}
function $r(i, e = null) {
  const t = e || i, s = {
    frag: i,
    part: e,
    responseType: "arraybuffer",
    url: t.url,
    headers: {},
    rangeStart: 0,
    rangeEnd: 0
  }, n = t.byteRangeStartOffset, r = t.byteRangeEndOffset;
  if (G(n) && G(r)) {
    var a;
    let o = n, c = r;
    if (i.sn === "initSegment" && ju((a = i.decryptdata) == null ? void 0 : a.method)) {
      const l = r - n;
      l % 16 && (c = r + (16 - l % 16)), n !== 0 && (s.resetIV = !0, o = n - 16);
    }
    s.rangeStart = o, s.rangeEnd = c;
  }
  return s;
}
function Br(i, e) {
  const t = new Error(`GAP ${i.gap ? "tag" : "attribute"} found`), s = {
    type: q.MEDIA_ERROR,
    details: C.FRAG_GAP,
    fatal: !1,
    frag: i,
    error: t,
    networkDetails: null
  };
  return e && (s.part = e), (e || i).stats.aborted = !0, new It(s);
}
function ju(i) {
  return i === "AES-128" || i === "AES-256";
}
class It extends Error {
  constructor(e) {
    super(e.error.message), this.data = void 0, this.data = e;
  }
}
class po extends rt {
  constructor(e, t) {
    super(e, t), this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this);
  }
  destroy() {
    this.onHandlerDestroying(), this.onHandlerDestroyed();
  }
  onHandlerDestroying() {
    this.clearNextTick(), this.clearInterval();
  }
  onHandlerDestroyed() {
  }
  hasInterval() {
    return !!this._tickInterval;
  }
  hasNextTick() {
    return !!this._tickTimer;
  }
  /**
   * @param millis - Interval time (ms)
   * @eturns True when interval has been scheduled, false when already scheduled (no effect)
   */
  setInterval(e) {
    return this._tickInterval ? !1 : (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, e), !0);
  }
  /**
   * @returns True when interval was cleared, false when none was set (no effect)
   */
  clearInterval() {
    return this._tickInterval ? (self.clearInterval(this._tickInterval), this._tickInterval = null, !0) : !1;
  }
  /**
   * @returns True when timeout was cleared, false when none was set (no effect)
   */
  clearNextTick() {
    return this._tickTimer ? (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0) : !1;
  }
  /**
   * Will call the subclass doTick implementation in this main loop tick
   * or in the next one (via setTimeout(,0)) in case it has already been called
   * in this tick (in case this is a re-entrant call).
   */
  tick() {
    this._tickCallCount++, this._tickCallCount === 1 && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0);
  }
  tickImmediate() {
    this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0);
  }
  /**
   * For subclass to implement task logic
   * @abstract
   */
  doTick() {
  }
}
class qn {
  constructor(e, t, s, n = 0, r = -1, a = !1) {
    this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = Vs(), this.buffering = {
      audio: Vs(),
      video: Vs(),
      audiovideo: Vs()
    }, this.level = e, this.sn = t, this.id = s, this.size = n, this.part = r, this.partial = a;
  }
}
function Vs() {
  return {
    start: 0,
    executeStart: 0,
    executeEnd: 0,
    end: 0
  };
}
const Ur = {
  length: 0,
  start: () => 0,
  end: () => 0
};
class se {
  /**
   * Return true if `media`'s buffered include `position`
   */
  static isBuffered(e, t) {
    if (e) {
      const s = se.getBuffered(e);
      for (let n = s.length; n--; )
        if (t >= s.start(n) && t <= s.end(n))
          return !0;
    }
    return !1;
  }
  static bufferedRanges(e) {
    if (e) {
      const t = se.getBuffered(e);
      return se.timeRangesToArray(t);
    }
    return [];
  }
  static timeRangesToArray(e) {
    const t = [];
    for (let s = 0; s < e.length; s++)
      t.push({
        start: e.start(s),
        end: e.end(s)
      });
    return t;
  }
  static bufferInfo(e, t, s) {
    if (e) {
      const n = se.bufferedRanges(e);
      if (n.length)
        return se.bufferedInfo(n, t, s);
    }
    return {
      len: 0,
      start: t,
      end: t,
      bufferedIndex: -1
    };
  }
  static bufferedInfo(e, t, s) {
    t = Math.max(0, t), e.length > 1 && e.sort((u, h) => u.start - h.start || h.end - u.end);
    let n = -1, r = [];
    if (s)
      for (let u = 0; u < e.length; u++) {
        t >= e[u].start && t <= e[u].end && (n = u);
        const h = r.length;
        if (h) {
          const d = r[h - 1].end;
          e[u].start - d < s ? e[u].end > d && (r[h - 1].end = e[u].end) : r.push(e[u]);
        } else
          r.push(e[u]);
      }
    else
      r = e;
    let a = 0, o, c = t, l = t;
    for (let u = 0; u < r.length; u++) {
      const h = r[u].start, d = r[u].end;
      if (n === -1 && t >= h && t <= d && (n = u), t + s >= h && t < d)
        c = h, l = d, a = l - t;
      else if (t + s < h) {
        o = h;
        break;
      }
    }
    return {
      len: a,
      start: c || 0,
      end: l || 0,
      nextStart: o,
      buffered: e,
      bufferedIndex: n
    };
  }
  /**
   * Safe method to get buffered property.
   * SourceBuffer.buffered may throw if SourceBuffer is removed from it's MediaSource
   */
  static getBuffered(e) {
    try {
      return e.buffered || Ur;
    } catch (t) {
      return ge.log("failed to get media.buffered", t), Ur;
    }
  }
}
const yo = /\{\$([a-zA-Z0-9-_]+)\}/g;
function Gr(i) {
  return yo.test(i);
}
function Tn(i, e) {
  if (i.variableList !== null || i.hasVariableRefs) {
    const t = i.variableList;
    return e.replace(yo, (s) => {
      const n = s.substring(2, s.length - 1), r = t == null ? void 0 : t[n];
      return r === void 0 ? (i.playlistParsingError || (i.playlistParsingError = new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${n}"`)), s) : r;
    });
  }
  return e;
}
function Kr(i, e, t) {
  let s = i.variableList;
  s || (i.variableList = s = {});
  let n, r;
  if ("QUERYPARAM" in e) {
    n = e.QUERYPARAM;
    try {
      const a = new self.URL(t).searchParams;
      if (a.has(n))
        r = a.get(n);
      else
        throw new Error(`"${n}" does not match any query parameter in URI: "${t}"`);
    } catch (a) {
      i.playlistParsingError || (i.playlistParsingError = new Error(`EXT-X-DEFINE QUERYPARAM: ${a.message}`));
    }
  } else
    n = e.NAME, r = e.VALUE;
  n in s ? i.playlistParsingError || (i.playlistParsingError = new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${n}"`)) : s[n] = r || "";
}
function Wu(i, e, t) {
  const s = e.IMPORT;
  if (t && s in t) {
    let n = i.variableList;
    n || (i.variableList = n = {}), n[s] = t[s];
  } else
    i.playlistParsingError || (i.playlistParsingError = new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${s}"`));
}
const qu = /^(\d+)x(\d+)$/, Vr = /(.+?)=(".*?"|.*?)(?:,|$)/g;
class Ee {
  constructor(e, t) {
    typeof e == "string" && (e = Ee.parseAttrList(e, t)), pe(this, e);
  }
  get clientAttrs() {
    return Object.keys(this).filter((e) => e.substring(0, 2) === "X-");
  }
  decimalInteger(e) {
    const t = parseInt(this[e], 10);
    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
  }
  hexadecimalInteger(e) {
    if (this[e]) {
      let t = (this[e] || "0x").slice(2);
      t = (t.length & 1 ? "0" : "") + t;
      const s = new Uint8Array(t.length / 2);
      for (let n = 0; n < t.length / 2; n++)
        s[n] = parseInt(t.slice(n * 2, n * 2 + 2), 16);
      return s;
    }
    return null;
  }
  hexadecimalIntegerAsNumber(e) {
    const t = parseInt(this[e], 16);
    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
  }
  decimalFloatingPoint(e) {
    return parseFloat(this[e]);
  }
  optionalFloat(e, t) {
    const s = this[e];
    return s ? parseFloat(s) : t;
  }
  enumeratedString(e) {
    return this[e];
  }
  enumeratedStringList(e, t) {
    const s = this[e];
    return (s ? s.split(/[ ,]+/) : []).reduce((n, r) => (n[r.toLowerCase()] = !0, n), t);
  }
  bool(e) {
    return this[e] === "YES";
  }
  decimalResolution(e) {
    const t = qu.exec(this[e]);
    if (t !== null)
      return {
        width: parseInt(t[1], 10),
        height: parseInt(t[2], 10)
      };
  }
  static parseAttrList(e, t) {
    let s;
    const n = {};
    for (Vr.lastIndex = 0; (s = Vr.exec(e)) !== null; ) {
      const a = s[1].trim();
      let o = s[2];
      const c = o.indexOf('"') === 0 && o.lastIndexOf('"') === o.length - 1;
      let l = !1;
      if (c)
        o = o.slice(1, -1);
      else
        switch (a) {
          case "IV":
          case "SCTE35-CMD":
          case "SCTE35-IN":
          case "SCTE35-OUT":
            l = !0;
        }
      if (t && (c || l))
        o = Tn(t, o);
      else if (!l && !c)
        switch (a) {
          case "CLOSED-CAPTIONS":
            if (o === "NONE")
              break;
          // falls through
          case "ALLOWED-CPC":
          case "CLASS":
          case "ASSOC-LANGUAGE":
          case "AUDIO":
          case "BYTERANGE":
          case "CHANNELS":
          case "CHARACTERISTICS":
          case "CODECS":
          case "DATA-ID":
          case "END-DATE":
          case "GROUP-ID":
          case "ID":
          case "IMPORT":
          case "INSTREAM-ID":
          case "KEYFORMAT":
          case "KEYFORMATVERSIONS":
          case "LANGUAGE":
          case "NAME":
          case "PATHWAY-ID":
          case "QUERYPARAM":
          case "RECENTLY-REMOVED-DATERANGES":
          case "SERVER-URI":
          case "STABLE-RENDITION-ID":
          case "STABLE-VARIANT-ID":
          case "START-DATE":
          case "SUBTITLES":
          case "SUPPLEMENTAL-CODECS":
          case "URI":
          case "VALUE":
          case "VIDEO":
          case "X-ASSET-LIST":
          case "X-ASSET-URI":
            ge.warn(`${e}: attribute ${a} is missing quotes`);
        }
      n[a] = o;
    }
    return n;
  }
}
const Yu = "com.apple.hls.interstitial";
function zu(i) {
  return i !== "ID" && i !== "CLASS" && i !== "CUE" && i !== "START-DATE" && i !== "DURATION" && i !== "END-DATE" && i !== "END-ON-NEXT";
}
function Xu(i) {
  return i === "SCTE35-OUT" || i === "SCTE35-IN" || i === "SCTE35-CMD";
}
class To {
  constructor(e, t, s = 0) {
    var n;
    if (this.attr = void 0, this.tagAnchor = void 0, this.tagOrder = void 0, this._startDate = void 0, this._endDate = void 0, this._dateAtEnd = void 0, this._cue = void 0, this._badValueForSameId = void 0, this.tagAnchor = (t == null ? void 0 : t.tagAnchor) || null, this.tagOrder = (n = t == null ? void 0 : t.tagOrder) != null ? n : s, t) {
      const r = t.attr;
      for (const a in r)
        if (Object.prototype.hasOwnProperty.call(e, a) && e[a] !== r[a]) {
          ge.warn(`DATERANGE tag attribute: "${a}" does not match for tags with ID: "${e.ID}"`), this._badValueForSameId = a;
          break;
        }
      e = pe(new Ee({}), r, e);
    }
    if (this.attr = e, t ? (this._startDate = t._startDate, this._cue = t._cue, this._endDate = t._endDate, this._dateAtEnd = t._dateAtEnd) : this._startDate = new Date(e["START-DATE"]), "END-DATE" in this.attr) {
      const r = (t == null ? void 0 : t.endDate) || new Date(this.attr["END-DATE"]);
      G(r.getTime()) && (this._endDate = r);
    }
  }
  get id() {
    return this.attr.ID;
  }
  get class() {
    return this.attr.CLASS;
  }
  get cue() {
    const e = this._cue;
    return e === void 0 ? this._cue = this.attr.enumeratedStringList(this.attr.CUE ? "CUE" : "X-CUE", {
      pre: !1,
      post: !1,
      once: !1
    }) : e;
  }
  get startTime() {
    const {
      tagAnchor: e
    } = this;
    return e === null || e.programDateTime === null ? (ge.warn(`Expected tagAnchor Fragment with PDT set for DateRange "${this.id}": ${e}`), NaN) : e.start + (this.startDate.getTime() - e.programDateTime) / 1e3;
  }
  get startDate() {
    return this._startDate;
  }
  get endDate() {
    const e = this._endDate || this._dateAtEnd;
    if (e)
      return e;
    const t = this.duration;
    return t !== null ? this._dateAtEnd = new Date(this._startDate.getTime() + t * 1e3) : null;
  }
  get duration() {
    if ("DURATION" in this.attr) {
      const e = this.attr.decimalFloatingPoint("DURATION");
      if (G(e))
        return e;
    } else if (this._endDate)
      return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
    return null;
  }
  get plannedDuration() {
    return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null;
  }
  get endOnNext() {
    return this.attr.bool("END-ON-NEXT");
  }
  get isInterstitial() {
    return this.class === Yu;
  }
  get isValid() {
    return !!this.id && !this._badValueForSameId && G(this.startDate.getTime()) && (this.duration === null || this.duration >= 0) && (!this.endOnNext || !!this.class) && (!this.attr.CUE || !this.cue.pre && !this.cue.post || this.cue.pre !== this.cue.post) && (!this.isInterstitial || "X-ASSET-URI" in this.attr || "X-ASSET-LIST" in this.attr);
  }
}
const Qu = 10;
class Zu {
  constructor(e) {
    this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.dateRangeTagCount = 0, this.live = !0, this.requestScheduled = -1, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = void 0, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = !1, this.appliedTimelineOffset = void 0, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = e;
  }
  reloaded(e) {
    if (!e) {
      this.advanced = !0, this.updated = !0;
      return;
    }
    const t = this.lastPartSn - e.lastPartSn, s = this.lastPartIndex - e.lastPartIndex;
    this.updated = this.endSN !== e.endSN || !!s || !!t || !this.live, this.advanced = this.endSN > e.endSN || t > 0 || t === 0 && s > 0, this.updated || this.advanced ? this.misses = Math.floor(e.misses * 0.6) : this.misses = e.misses + 1;
  }
  hasKey(e) {
    return this.encryptedFragments.some((t) => {
      let s = t.decryptdata;
      return s || (t.setKeyFormat(e.keyFormat), s = t.decryptdata), !!s && e.matches(s);
    });
  }
  get hasProgramDateTime() {
    return this.fragments.length ? G(this.fragments[this.fragments.length - 1].programDateTime) : !1;
  }
  get levelTargetDuration() {
    return this.averagetargetduration || this.targetduration || Qu;
  }
  get drift() {
    const e = this.driftEndTime - this.driftStartTime;
    return e > 0 ? (this.driftEnd - this.driftStart) * 1e3 / e : 1;
  }
  get edge() {
    return this.partEnd || this.fragmentEnd;
  }
  get partEnd() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd;
  }
  get fragmentEnd() {
    return this.fragments.length ? this.fragments[this.fragments.length - 1].end : 0;
  }
  get fragmentStart() {
    return this.fragments.length ? this.fragments[0].start : 0;
  }
  get age() {
    return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
  }
  get lastPartIndex() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].index : -1;
  }
  get maxPartIndex() {
    const e = this.partList;
    if (e) {
      const t = this.lastPartIndex;
      if (t !== -1) {
        for (let s = e.length; s--; )
          if (e[s].index > t)
            return e[s].index;
        return t;
      }
    }
    return 0;
  }
  get lastPartSn() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN;
  }
  get expired() {
    if (this.live && this.age && this.misses < 3) {
      const e = this.partEnd - this.fragmentStart;
      return this.age > Math.max(e, this.totalduration) + this.levelTargetDuration;
    }
    return !1;
  }
}
function vi(i, e) {
  return i.length === e.length ? !i.some((t, s) => t !== e[s]) : !1;
}
function Hr(i, e) {
  return !i && !e ? !0 : !i || !e ? !1 : vi(i, e);
}
function ls(i) {
  return i === "AES-128" || i === "AES-256" || i === "AES-256-CTR";
}
function Yn(i) {
  switch (i) {
    case "AES-128":
    case "AES-256":
      return Ut.cbc;
    case "AES-256-CTR":
      return Ut.ctr;
    default:
      throw new Error(`invalid full segment method ${i}`);
  }
}
function zn(i) {
  return Uint8Array.from(atob(i), (e) => e.charCodeAt(0));
}
function En(i) {
  return Uint8Array.from(unescape(encodeURIComponent(i)), (e) => e.charCodeAt(0));
}
function Ju(i) {
  const e = En(i).subarray(0, 16), t = new Uint8Array(16);
  return t.set(e, 16 - e.length), t;
}
function Eo(i) {
  const e = function(s, n, r) {
    const a = s[n];
    s[n] = s[r], s[r] = a;
  };
  e(i, 0, 3), e(i, 1, 2), e(i, 4, 5), e(i, 6, 7);
}
function vo(i) {
  const e = i.split(":");
  let t = null;
  if (e[0] === "data" && e.length === 2) {
    const s = e[1].split(";"), n = s[s.length - 1].split(",");
    if (n.length === 2) {
      const r = n[0] === "base64", a = n[1];
      r ? (s.splice(-1, 1), t = zn(a)) : t = Ju(a);
    }
  }
  return t;
}
const bi = typeof self < "u" ? self : void 0;
var ve = {
  CLEARKEY: "org.w3.clearkey",
  FAIRPLAY: "com.apple.fps",
  PLAYREADY: "com.microsoft.playready",
  WIDEVINE: "com.widevine.alpha"
}, Ge = {
  CLEARKEY: "org.w3.clearkey",
  FAIRPLAY: "com.apple.streamingkeydelivery",
  PLAYREADY: "com.microsoft.playready",
  WIDEVINE: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"
};
function ni(i) {
  switch (i) {
    case Ge.FAIRPLAY:
      return ve.FAIRPLAY;
    case Ge.PLAYREADY:
      return ve.PLAYREADY;
    case Ge.WIDEVINE:
      return ve.WIDEVINE;
    case Ge.CLEARKEY:
      return ve.CLEARKEY;
  }
}
function Gi(i) {
  switch (i) {
    case ve.FAIRPLAY:
      return Ge.FAIRPLAY;
    case ve.PLAYREADY:
      return Ge.PLAYREADY;
    case ve.WIDEVINE:
      return Ge.WIDEVINE;
    case ve.CLEARKEY:
      return Ge.CLEARKEY;
  }
}
function Es(i) {
  const {
    drmSystems: e,
    widevineLicenseUrl: t
  } = i, s = e ? [ve.FAIRPLAY, ve.WIDEVINE, ve.PLAYREADY, ve.CLEARKEY].filter((n) => !!e[n]) : [];
  return !s[ve.WIDEVINE] && t && s.push(ve.WIDEVINE), s;
}
const bo = (function(i) {
  return bi != null && (i = bi.navigator) != null && i.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
})();
function eh(i, e, t, s) {
  let n;
  switch (i) {
    case ve.FAIRPLAY:
      n = ["cenc", "sinf"];
      break;
    case ve.WIDEVINE:
    case ve.PLAYREADY:
      n = ["cenc"];
      break;
    case ve.CLEARKEY:
      n = ["cenc", "keyids"];
      break;
    default:
      throw new Error(`Unknown key-system: ${i}`);
  }
  return th(n, e, t, s);
}
function th(i, e, t, s) {
  return [{
    initDataTypes: i,
    persistentState: s.persistentState || "optional",
    distinctiveIdentifier: s.distinctiveIdentifier || "optional",
    sessionTypes: s.sessionTypes || [s.sessionType || "temporary"],
    audioCapabilities: e.map((r) => ({
      contentType: `audio/mp4; codecs=${r}`,
      robustness: s.audioRobustness || "",
      encryptionScheme: s.audioEncryptionScheme || null
    })),
    videoCapabilities: t.map((r) => ({
      contentType: `video/mp4; codecs=${r}`,
      robustness: s.videoRobustness || "",
      encryptionScheme: s.videoEncryptionScheme || null
    }))
  }];
}
function sh(i) {
  var e;
  return !!i && (i.sessionType === "persistent-license" || !!((e = i.sessionTypes) != null && e.some((t) => t === "persistent-license")));
}
function So(i) {
  const e = new Uint16Array(i.buffer, i.byteOffset, i.byteLength / 2), t = String.fromCharCode.apply(null, Array.from(e)), s = t.substring(t.indexOf("<"), t.length), a = new DOMParser().parseFromString(s, "text/xml").getElementsByTagName("KID")[0];
  if (a) {
    const o = a.childNodes[0] ? a.childNodes[0].nodeValue : a.getAttribute("VALUE");
    if (o) {
      const c = zn(o).subarray(0, 16);
      return Eo(c), c;
    }
  }
  return null;
}
let ss = {};
class $t {
  static clearKeyUriToKeyIdMap() {
    ss = {};
  }
  static setKeyIdForUri(e, t) {
    ss[e] = t;
  }
  static addKeyIdForUri(e) {
    const t = Object.keys(ss).length % Number.MAX_SAFE_INTEGER, s = new Uint8Array(16);
    return new DataView(s.buffer, 12, 4).setUint32(0, t), ss[e] = s, s;
  }
  constructor(e, t, s, n = [1], r = null, a) {
    this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = e, this.uri = t, this.keyFormat = s, this.keyFormatVersions = n, this.iv = r, this.encrypted = e ? e !== "NONE" : !1, this.isCommonEncryption = this.encrypted && !ls(e), a != null && a.startsWith("0x") && (this.keyId = new Uint8Array(za(a)));
  }
  matches(e) {
    return e.uri === this.uri && e.method === this.method && e.encrypted === this.encrypted && e.keyFormat === this.keyFormat && vi(e.keyFormatVersions, this.keyFormatVersions) && Hr(e.iv, this.iv) && Hr(e.keyId, this.keyId);
  }
  isSupported() {
    if (this.method) {
      if (ls(this.method) || this.method === "NONE")
        return !0;
      if (this.keyFormat === "identity")
        return this.method === "SAMPLE-AES";
      switch (this.keyFormat) {
        case Ge.FAIRPLAY:
        case Ge.WIDEVINE:
        case Ge.PLAYREADY:
        case Ge.CLEARKEY:
          return ["SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method) !== -1;
      }
    }
    return !1;
  }
  getDecryptData(e, t) {
    if (!this.encrypted || !this.uri)
      return null;
    if (ls(this.method)) {
      let r = this.iv;
      return r || (typeof e != "number" && (ge.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`), e = 0), r = nh(e)), new $t(this.method, this.uri, "identity", this.keyFormatVersions, r);
    }
    if (this.keyId) {
      const r = ss[this.uri];
      if (r && !vi(this.keyId, r) && $t.setKeyIdForUri(this.uri, this.keyId), this.pssh)
        return this;
    }
    const s = vo(this.uri);
    if (s)
      switch (this.keyFormat) {
        case Ge.WIDEVINE:
          if (this.pssh = s, !this.keyId) {
            const r = ou(s.buffer);
            if (r.length) {
              var n;
              const a = r[0];
              this.keyId = (n = a.kids) != null && n.length ? a.kids[0] : null;
            }
          }
          this.keyId || (this.keyId = jr(t));
          break;
        case Ge.PLAYREADY: {
          const r = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
          this.pssh = au(r, null, s), this.keyId = So(s);
          break;
        }
        default: {
          let r = s.subarray(0, 16);
          if (r.length !== 16) {
            const a = new Uint8Array(16);
            a.set(r, 16 - r.length), r = a;
          }
          this.keyId = r;
          break;
        }
      }
    if (!this.keyId || this.keyId.byteLength !== 16) {
      let r;
      r = ih(t), r || (r = jr(t), r || (r = ss[this.uri])), r && (this.keyId = r, $t.setKeyIdForUri(this.uri, r));
    }
    return this;
  }
}
function ih(i) {
  const e = i == null ? void 0 : i[Ge.WIDEVINE];
  return e ? e.keyId : null;
}
function jr(i) {
  const e = i == null ? void 0 : i[Ge.PLAYREADY];
  if (e) {
    const t = vo(e.uri);
    if (t)
      return So(t);
  }
  return null;
}
function nh(i) {
  const e = new Uint8Array(16);
  for (let t = 12; t < 16; t++)
    e[t] = i >> 8 * (15 - t) & 255;
  return e;
}
const Wr = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g, qr = /#EXT-X-MEDIA:(.*)/g, rh = /^#EXT(?:INF|-X-TARGETDURATION):/m, Ki = new RegExp([
  /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
  // duration (#EXTINF:<duration>,<title>), group 1 => duration, group 2 => title
  /(?!#) *(\S[^\r\n]*)/.source,
  // segment URI, group 3 => the URI (note newline is not eaten)
  /#.*/.source
  // All other non-segment oriented tags will match with all groups empty
].join("|"), "g"), ah = new RegExp([/#EXT-X-(PROGRAM-DATE-TIME|BYTERANGE|DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|"));
class Tt {
  static findGroup(e, t) {
    for (let s = 0; s < e.length; s++) {
      const n = e[s];
      if (n.id === t)
        return n;
    }
  }
  static resolve(e, t) {
    return Un.buildAbsoluteURL(t, e, {
      alwaysNormalize: !0
    });
  }
  static isMediaPlaylist(e) {
    return rh.test(e);
  }
  static parseMasterPlaylist(e, t) {
    const s = Gr(e), n = {
      contentSteering: null,
      levels: [],
      playlistParsingError: null,
      sessionData: null,
      sessionKeys: null,
      startTimeOffset: null,
      variableList: null,
      hasVariableRefs: s
    }, r = [];
    if (Wr.lastIndex = 0, !e.startsWith("#EXTM3U"))
      return n.playlistParsingError = new Error("no EXTM3U delimiter"), n;
    let a;
    for (; (a = Wr.exec(e)) != null; )
      if (a[1]) {
        var o;
        const l = new Ee(a[1], n), u = Tn(n, a[2]), h = {
          attrs: l,
          bitrate: l.decimalInteger("BANDWIDTH") || l.decimalInteger("AVERAGE-BANDWIDTH"),
          name: l.NAME,
          url: Tt.resolve(u, t)
        }, d = l.decimalResolution("RESOLUTION");
        d && (h.width = d.width, h.height = d.height), Xr(l.CODECS, h);
        const g = l["SUPPLEMENTAL-CODECS"];
        g && (h.supplemental = {}, Xr(g, h.supplemental)), (o = h.unknownCodecs) != null && o.length || r.push(h), n.levels.push(h);
      } else if (a[3]) {
        const l = a[3], u = a[4];
        switch (l) {
          case "SESSION-DATA": {
            const h = new Ee(u, n), d = h["DATA-ID"];
            d && (n.sessionData === null && (n.sessionData = {}), n.sessionData[d] = h);
            break;
          }
          case "SESSION-KEY": {
            const h = Yr(u, t, n);
            h.encrypted && h.isSupported() ? (n.sessionKeys === null && (n.sessionKeys = []), n.sessionKeys.push(h)) : ge.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${u}"`);
            break;
          }
          case "DEFINE": {
            {
              const h = new Ee(u, n);
              Kr(n, h, t);
            }
            break;
          }
          case "CONTENT-STEERING": {
            const h = new Ee(u, n);
            n.contentSteering = {
              uri: Tt.resolve(h["SERVER-URI"], t),
              pathwayId: h["PATHWAY-ID"] || "."
            };
            break;
          }
          case "START": {
            n.startTimeOffset = zr(u);
            break;
          }
        }
      }
    const c = r.length > 0 && r.length < n.levels.length;
    return n.levels = c ? r : n.levels, n.levels.length === 0 && (n.playlistParsingError = new Error("no levels found in manifest")), n;
  }
  static parseMasterPlaylistMedia(e, t, s) {
    let n;
    const r = {}, a = s.levels, o = {
      AUDIO: a.map((l) => ({
        id: l.attrs.AUDIO,
        audioCodec: l.audioCodec
      })),
      SUBTITLES: a.map((l) => ({
        id: l.attrs.SUBTITLES,
        textCodec: l.textCodec
      })),
      "CLOSED-CAPTIONS": []
    };
    let c = 0;
    for (qr.lastIndex = 0; (n = qr.exec(e)) !== null; ) {
      const l = new Ee(n[1], s), u = l.TYPE;
      if (u) {
        const h = o[u], d = r[u] || [];
        r[u] = d;
        const g = l.LANGUAGE, f = l["ASSOC-LANGUAGE"], m = l.CHANNELS, p = l.CHARACTERISTICS, T = l["INSTREAM-ID"], E = {
          attrs: l,
          bitrate: 0,
          id: c++,
          groupId: l["GROUP-ID"] || "",
          name: l.NAME || g || "",
          type: u,
          default: l.bool("DEFAULT"),
          autoselect: l.bool("AUTOSELECT"),
          forced: l.bool("FORCED"),
          lang: g,
          url: l.URI ? Tt.resolve(l.URI, t) : ""
        };
        if (f && (E.assocLang = f), m && (E.channels = m), p && (E.characteristics = p), T && (E.instreamId = T), h != null && h.length) {
          const v = Tt.findGroup(h, E.groupId) || h[0];
          Qr(E, v, "audioCodec"), Qr(E, v, "textCodec");
        }
        d.push(E);
      }
    }
    return r;
  }
  static parseLevelPlaylist(e, t, s, n, r, a) {
    var o;
    const c = {
      url: t
    }, l = new Zu(t), u = l.fragments, h = [];
    let d = null, g = 0, f = 0, m = 0, p = 0, T = 0, E = null, v = new $i(n, c), x, A, _, S = -1, L = !1, I = null, R;
    if (Ki.lastIndex = 0, l.m3u8 = e, l.hasVariableRefs = Gr(e), ((o = Ki.exec(e)) == null ? void 0 : o[0]) !== "#EXTM3U")
      return l.playlistParsingError = new Error("Missing format identifier #EXTM3U"), l;
    for (; (x = Ki.exec(e)) !== null; ) {
      L && (L = !1, v = new $i(n, c), v.playlistOffset = m, v.setStart(m), v.sn = g, v.cc = p, T && (v.bitrate = T), v.level = s, d && (v.initSegment = d, d.rawProgramDateTime && (v.rawProgramDateTime = d.rawProgramDateTime, d.rawProgramDateTime = null), I && (v.setByteRange(I), I = null)));
      const W = x[1];
      if (W) {
        v.duration = parseFloat(W);
        const B = (" " + x[2]).slice(1);
        v.title = B || null, v.tagList.push(B ? ["INF", W, B] : ["INF", W]);
      } else if (x[3]) {
        if (G(v.duration)) {
          v.playlistOffset = m, v.setStart(m), _ && Jr(v, _, l), v.sn = g, v.level = s, v.cc = p, u.push(v);
          const B = (" " + x[3]).slice(1);
          v.relurl = Tn(l, B), vn(v, E, h), E = v, m += v.duration, g++, f = 0, L = !0;
        }
      } else {
        if (x = x[0].match(ah), !x) {
          ge.warn("No matches on slow regex match for level playlist!");
          continue;
        }
        for (A = 1; A < x.length && x[A] === void 0; A++)
          ;
        const B = (" " + x[A]).slice(1), P = (" " + x[A + 1]).slice(1), V = x[A + 2] ? (" " + x[A + 2]).slice(1) : null;
        switch (B) {
          case "BYTERANGE":
            E ? v.setByteRange(P, E) : v.setByteRange(P);
            break;
          case "PROGRAM-DATE-TIME":
            v.rawProgramDateTime = P, v.tagList.push(["PROGRAM-DATE-TIME", P]), S === -1 && (S = u.length);
            break;
          case "PLAYLIST-TYPE":
            l.type && At(l, B, x), l.type = P.toUpperCase();
            break;
          case "MEDIA-SEQUENCE":
            l.startSN !== 0 ? At(l, B, x) : u.length > 0 && ea(l, B, x), g = l.startSN = parseInt(P);
            break;
          case "SKIP": {
            l.skippedSegments && At(l, B, x);
            const N = new Ee(P, l), H = N.decimalInteger("SKIPPED-SEGMENTS");
            if (G(H)) {
              l.skippedSegments += H;
              for (let F = H; F--; )
                u.push(null);
              g += H;
            }
            const X = N.enumeratedString("RECENTLY-REMOVED-DATERANGES");
            X && (l.recentlyRemovedDateranges = (l.recentlyRemovedDateranges || []).concat(X.split("	")));
            break;
          }
          case "TARGETDURATION":
            l.targetduration !== 0 && At(l, B, x), l.targetduration = Math.max(parseInt(P), 1);
            break;
          case "VERSION":
            l.version !== null && At(l, B, x), l.version = parseInt(P);
            break;
          case "INDEPENDENT-SEGMENTS":
            break;
          case "ENDLIST":
            l.live || At(l, B, x), l.live = !1;
            break;
          case "#":
            (P || V) && v.tagList.push(V ? [P, V] : [P]);
            break;
          case "DISCONTINUITY":
            p++, v.tagList.push(["DIS"]);
            break;
          case "GAP":
            v.gap = !0, v.tagList.push([B]);
            break;
          case "BITRATE":
            v.tagList.push([B, P]), T = parseInt(P) * 1e3, G(T) ? v.bitrate = T : T = 0;
            break;
          case "DATERANGE": {
            const N = new Ee(P, l), H = new To(N, l.dateRanges[N.ID], l.dateRangeTagCount);
            l.dateRangeTagCount++, H.isValid || l.skippedSegments ? l.dateRanges[H.id] = H : ge.warn(`Ignoring invalid DATERANGE tag: "${P}"`), v.tagList.push(["EXT-X-DATERANGE", P]);
            break;
          }
          case "DEFINE": {
            {
              const N = new Ee(P, l);
              "IMPORT" in N ? Wu(l, N, a) : Kr(l, N, t);
            }
            break;
          }
          case "DISCONTINUITY-SEQUENCE":
            l.startCC !== 0 ? At(l, B, x) : u.length > 0 && ea(l, B, x), l.startCC = p = parseInt(P);
            break;
          case "KEY": {
            const N = Yr(P, t, l);
            if (N.isSupported()) {
              if (N.method === "NONE") {
                _ = void 0;
                break;
              }
              _ || (_ = {});
              const H = _[N.keyFormat];
              H != null && H.matches(N) || (H && (_ = pe({}, _)), _[N.keyFormat] = N);
            } else
              ge.warn(`[Keys] Ignoring unsupported EXT-X-KEY tag: "${P}"`);
            break;
          }
          case "START":
            l.startTimeOffset = zr(P);
            break;
          case "MAP": {
            const N = new Ee(P, l);
            if (v.duration) {
              const H = new $i(n, c);
              Zr(H, N, s, _), d = H, v.initSegment = d, d.rawProgramDateTime && !v.rawProgramDateTime && (v.rawProgramDateTime = d.rawProgramDateTime);
            } else {
              const H = v.byteRangeEndOffset;
              if (H) {
                const X = v.byteRangeStartOffset;
                I = `${H - X}@${X}`;
              } else
                I = null;
              Zr(v, N, s, _), d = v, L = !0;
            }
            d.cc = p;
            break;
          }
          case "SERVER-CONTROL": {
            R && At(l, B, x), R = new Ee(P), l.canBlockReload = R.bool("CAN-BLOCK-RELOAD"), l.canSkipUntil = R.optionalFloat("CAN-SKIP-UNTIL", 0), l.canSkipDateRanges = l.canSkipUntil > 0 && R.bool("CAN-SKIP-DATERANGES"), l.partHoldBack = R.optionalFloat("PART-HOLD-BACK", 0), l.holdBack = R.optionalFloat("HOLD-BACK", 0);
            break;
          }
          case "PART-INF": {
            l.partTarget && At(l, B, x);
            const N = new Ee(P);
            l.partTarget = N.decimalFloatingPoint("PART-TARGET");
            break;
          }
          case "PART": {
            let N = l.partList;
            N || (N = l.partList = []);
            const H = f > 0 ? N[N.length - 1] : void 0, X = f++, F = new Ee(P, l), M = new Wc(F, v, c, X, H);
            N.push(M), v.duration += M.duration;
            break;
          }
          case "PRELOAD-HINT": {
            const N = new Ee(P, l);
            l.preloadHint = N;
            break;
          }
          case "RENDITION-REPORT": {
            const N = new Ee(P, l);
            l.renditionReports = l.renditionReports || [], l.renditionReports.push(N);
            break;
          }
          default:
            ge.warn(`line parsed but not handled: ${x}`);
            break;
        }
      }
    }
    E && !E.relurl ? (u.pop(), m -= E.duration, l.partList && (l.fragmentHint = E)) : l.partList && (vn(v, E, h), v.cc = p, l.fragmentHint = v, _ && Jr(v, _, l)), l.targetduration || (l.playlistParsingError = new Error("Missing Target Duration"));
    const w = u.length, O = u[0], K = u[w - 1];
    if (m += l.skippedSegments * l.targetduration, m > 0 && w && K) {
      l.averagetargetduration = m / w;
      const W = K.sn;
      l.endSN = W !== "initSegment" ? W : 0, l.live || (K.endList = !0), S > 0 && (lh(u, S), O && h.unshift(O));
    }
    return l.fragmentHint && (m += l.fragmentHint.duration), l.totalduration = m, h.length && l.dateRangeTagCount && O && xo(h, l), l.endCC = p, l;
  }
}
function xo(i, e) {
  let t = i.length;
  if (!t)
    if (e.hasProgramDateTime) {
      const o = e.fragments[e.fragments.length - 1];
      i.push(o), t++;
    } else
      return;
  const s = i[t - 1], n = e.live ? 1 / 0 : e.totalduration, r = Object.keys(e.dateRanges);
  for (let o = r.length; o--; ) {
    const c = e.dateRanges[r[o]], l = c.startDate.getTime();
    c.tagAnchor = s.ref;
    for (let u = t; u--; ) {
      var a;
      if (((a = i[u]) == null ? void 0 : a.sn) < e.startSN)
        break;
      const h = oh(e, l, i, u, n);
      if (h !== -1) {
        c.tagAnchor = e.fragments[h].ref;
        break;
      }
    }
  }
}
function oh(i, e, t, s, n) {
  const r = t[s];
  if (r) {
    const o = r.programDateTime;
    if (e >= o || s === 0) {
      var a;
      const c = (((a = t[s + 1]) == null ? void 0 : a.start) || n) - r.start;
      if (e <= o + c * 1e3) {
        const l = t[s].sn - i.startSN;
        if (l < 0)
          return -1;
        const u = i.fragments;
        if (u.length > t.length) {
          const d = (t[s + 1] || u[u.length - 1]).sn - i.startSN;
          for (let g = d; g > l; g--) {
            const f = u[g].programDateTime;
            if (e >= f && e < f + u[g].duration * 1e3)
              return g;
          }
        }
        return l;
      }
    }
  }
  return -1;
}
function Yr(i, e, t) {
  var s, n;
  const r = new Ee(i, t), a = (s = r.METHOD) != null ? s : "", o = r.URI, c = r.hexadecimalInteger("IV"), l = r.KEYFORMATVERSIONS, u = (n = r.KEYFORMAT) != null ? n : "identity";
  o && r.IV && !c && ge.error(`Invalid IV: ${r.IV}`);
  const h = o ? Tt.resolve(o, e) : "", d = (l || "1").split("/").map(Number).filter(Number.isFinite);
  return new $t(a, h, u, d, c, r.KEYID);
}
function zr(i) {
  const t = new Ee(i).decimalFloatingPoint("TIME-OFFSET");
  return G(t) ? t : null;
}
function Xr(i, e) {
  let t = (i || "").split(/[ ,]+/).filter((s) => s);
  ["video", "audio", "text"].forEach((s) => {
    const n = t.filter((r) => Vn(r, s));
    n.length && (e[`${s}Codec`] = n.map((r) => r.split("/")[0]).join(","), t = t.filter((r) => n.indexOf(r) === -1));
  }), e.unknownCodecs = t;
}
function Qr(i, e, t) {
  const s = e[t];
  s && (i[t] = s);
}
function lh(i, e) {
  let t = i[e];
  for (let s = e; s--; ) {
    const n = i[s];
    if (!n)
      return;
    n.programDateTime = t.programDateTime - n.duration * 1e3, t = n;
  }
}
function vn(i, e, t) {
  i.rawProgramDateTime ? t.push(i) : e != null && e.programDateTime && (i.programDateTime = e.endProgramDateTime);
}
function Zr(i, e, t, s) {
  i.relurl = e.URI, e.BYTERANGE && i.setByteRange(e.BYTERANGE), i.level = t, i.sn = "initSegment", s && (i.levelkeys = s), i.initSegment = null;
}
function Jr(i, e, t) {
  i.levelkeys = e;
  const {
    encryptedFragments: s
  } = t;
  (!s.length || s[s.length - 1].levelkeys !== e) && Object.keys(e).some((n) => e[n].isCommonEncryption) && s.push(i);
}
function At(i, e, t) {
  i.playlistParsingError = new Error(`#EXT-X-${e} must not appear more than once (${t[0]})`);
}
function ea(i, e, t) {
  i.playlistParsingError = new Error(`#EXT-X-${e} must appear before the first Media Segment (${t[0]})`);
}
function Vi(i, e) {
  const t = e.startPTS;
  if (G(t)) {
    let s = 0, n;
    e.sn > i.sn ? (s = t - i.start, n = i) : (s = i.start - t, n = e), n.duration !== s && n.setDuration(s);
  } else e.sn > i.sn ? i.cc === e.cc && i.minEndPTS ? e.setStart(i.start + (i.minEndPTS - i.start)) : e.setStart(i.start + i.duration) : e.setStart(Math.max(i.start - e.duration, 0));
}
function Ao(i, e, t, s, n, r, a) {
  s - t <= 0 && (a.warn("Fragment should have a positive duration", e), s = t + e.duration, r = n + e.duration);
  let c = t, l = s;
  const u = e.startPTS, h = e.endPTS;
  if (G(u)) {
    const T = Math.abs(u - t);
    i && T > i.totalduration ? a.warn(`media timestamps and playlist times differ by ${T}s for level ${e.level} ${i.url}`) : G(e.deltaPTS) ? e.deltaPTS = Math.max(T, e.deltaPTS) : e.deltaPTS = T, c = Math.max(t, u), t = Math.min(t, u), n = e.startDTS !== void 0 ? Math.min(n, e.startDTS) : n, l = Math.min(s, h), s = Math.max(s, h), r = e.endDTS !== void 0 ? Math.max(r, e.endDTS) : r;
  }
  const d = t - e.start;
  e.start !== 0 && e.setStart(t), e.setDuration(s - e.start), e.startPTS = t, e.maxStartPTS = c, e.startDTS = n, e.endPTS = s, e.minEndPTS = l, e.endDTS = r;
  const g = e.sn;
  if (!i || g < i.startSN || g > i.endSN)
    return 0;
  let f;
  const m = g - i.startSN, p = i.fragments;
  for (p[m] = e, f = m; f > 0; f--)
    Vi(p[f], p[f - 1]);
  for (f = m; f < p.length - 1; f++)
    Vi(p[f], p[f + 1]);
  return i.fragmentHint && Vi(p[p.length - 1], i.fragmentHint), i.PTSKnown = i.alignedSliding = !0, d;
}
function ch(i, e, t) {
  if (i === e)
    return;
  let s = null;
  const n = i.fragments;
  for (let u = n.length - 1; u >= 0; u--) {
    const h = n[u].initSegment;
    if (h) {
      s = h;
      break;
    }
  }
  i.fragmentHint && delete i.fragmentHint.endPTS;
  let r;
  dh(i, e, (u, h, d, g) => {
    if ((!e.startCC || e.skippedSegments) && h.cc !== u.cc) {
      const f = u.cc - h.cc;
      for (let m = d; m < g.length; m++)
        g[m].cc += f;
      e.endCC = g[g.length - 1].cc;
    }
    G(u.startPTS) && G(u.endPTS) && (h.setStart(h.startPTS = u.startPTS), h.startDTS = u.startDTS, h.maxStartPTS = u.maxStartPTS, h.endPTS = u.endPTS, h.endDTS = u.endDTS, h.minEndPTS = u.minEndPTS, h.setDuration(u.endPTS - u.startPTS), h.duration && (r = h), e.PTSKnown = e.alignedSliding = !0), u.hasStreams && (h.elementaryStreams = u.elementaryStreams), h.loader = u.loader, u.hasStats && (h.stats = u.stats), u.initSegment && (h.initSegment = u.initSegment, s = u.initSegment);
  });
  const a = e.fragments, o = e.fragmentHint ? a.concat(e.fragmentHint) : a;
  if (s && o.forEach((u) => {
    var h;
    u && (!u.initSegment || u.initSegment.relurl === ((h = s) == null ? void 0 : h.relurl)) && (u.initSegment = s);
  }), e.skippedSegments) {
    if (e.deltaUpdateFailed = a.some((u) => !u), e.deltaUpdateFailed) {
      t.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
      for (let u = e.skippedSegments; u--; )
        a.shift();
      e.startSN = a[0].sn;
    } else {
      e.canSkipDateRanges && (e.dateRanges = uh(i.dateRanges, e, t));
      const u = i.fragments.filter((h) => h.rawProgramDateTime);
      if (i.hasProgramDateTime && !e.hasProgramDateTime)
        for (let h = 1; h < o.length; h++)
          o[h].programDateTime === null && vn(o[h], o[h - 1], u);
      xo(u, e);
    }
    e.endCC = a[a.length - 1].cc;
  }
  if (!e.startCC) {
    var c;
    const u = Ro(i, e.startSN - 1);
    e.startCC = (c = u == null ? void 0 : u.cc) != null ? c : a[0].cc;
  }
  hh(i.partList, e.partList, (u, h) => {
    h.elementaryStreams = u.elementaryStreams, h.stats = u.stats;
  }), r ? Ao(e, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS, t) : Lo(i, e), a.length && (e.totalduration = e.edge - a[0].start), e.driftStartTime = i.driftStartTime, e.driftStart = i.driftStart;
  const l = e.advancedDateTime;
  if (e.advanced && l) {
    const u = e.edge;
    e.driftStart || (e.driftStartTime = l, e.driftStart = u), e.driftEndTime = l, e.driftEnd = u;
  } else
    e.driftEndTime = i.driftEndTime, e.driftEnd = i.driftEnd, e.advancedDateTime = i.advancedDateTime;
  e.requestScheduled === -1 && (e.requestScheduled = i.requestScheduled);
}
function uh(i, e, t) {
  const {
    dateRanges: s,
    recentlyRemovedDateranges: n
  } = e, r = pe({}, i);
  n && n.forEach((c) => {
    delete r[c];
  });
  const o = Object.keys(r).length;
  return o ? (Object.keys(s).forEach((c) => {
    const l = r[c], u = new To(s[c].attr, l);
    u.isValid ? (r[c] = u, l || (u.tagOrder += o)) : t.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${Te(s[c].attr)}"`);
  }), r) : s;
}
function hh(i, e, t) {
  if (i && e) {
    let s = 0;
    for (let n = 0, r = i.length; n <= r; n++) {
      const a = i[n], o = e[n + s];
      a && o && a.index === o.index && a.fragment.sn === o.fragment.sn ? t(a, o) : s--;
    }
  }
}
function dh(i, e, t) {
  const s = e.skippedSegments, n = Math.max(i.startSN, e.startSN) - e.startSN, r = (i.fragmentHint ? 1 : 0) + (s ? e.endSN : Math.min(i.endSN, e.endSN)) - e.startSN, a = e.startSN - i.startSN, o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments, c = i.fragmentHint ? i.fragments.concat(i.fragmentHint) : i.fragments;
  for (let l = n; l <= r; l++) {
    const u = c[a + l];
    let h = o[l];
    if (s && !h && u && (h = e.fragments[l] = u), u && h) {
      t(u, h, l, o);
      const d = u.relurl, g = h.relurl;
      if (d && fh(d, g)) {
        e.playlistParsingError = ta(`media sequence mismatch ${h.sn}:`, i, e, u, h);
        return;
      } else if (u.cc !== h.cc) {
        e.playlistParsingError = ta(`discontinuity sequence mismatch (${u.cc}!=${h.cc})`, i, e, u, h);
        return;
      }
    }
  }
}
function ta(i, e, t, s, n) {
  return new Error(`${i} ${n.url}
Playlist starting @${e.startSN}
${e.m3u8}

Playlist starting @${t.startSN}
${t.m3u8}`);
}
function Lo(i, e, t = !0) {
  const s = e.startSN + e.skippedSegments - i.startSN, n = i.fragments, r = s >= 0;
  let a = 0;
  if (r && s < n.length)
    a = n[s].start;
  else if (r && e.startSN === i.endSN + 1)
    a = i.fragmentEnd;
  else if (r && t)
    a = i.fragmentStart + s * e.levelTargetDuration;
  else if (!e.skippedSegments && e.fragmentStart === 0)
    a = i.fragmentStart;
  else
    return;
  bn(e, a);
}
function bn(i, e) {
  if (e) {
    const t = i.fragments;
    for (let s = i.skippedSegments; s < t.length; s++)
      t[s].addStart(e);
    i.fragmentHint && i.fragmentHint.addStart(e);
  }
}
function Io(i, e = 1 / 0) {
  let t = 1e3 * i.targetduration;
  if (i.updated) {
    const s = i.fragments;
    if (s.length && t * 4 > e) {
      const r = s[s.length - 1].duration * 1e3;
      r < t && (t = r);
    }
  } else
    t /= 2;
  return Math.round(t);
}
function Ro(i, e, t) {
  if (!i)
    return null;
  let s = i.fragments[e - i.startSN];
  return s || (s = i.fragmentHint, s && s.sn === e) ? s : e < i.startSN && t && t.sn === e ? t : null;
}
function sa(i, e, t) {
  return i ? _o(i.partList, e, t) : null;
}
function _o(i, e, t) {
  if (i)
    for (let s = i.length; s--; ) {
      const n = i[s];
      if (n.index === t && n.fragment.sn === e)
        return n;
    }
  return null;
}
function ko(i) {
  i.forEach((e, t) => {
    var s;
    (s = e.details) == null || s.fragments.forEach((n) => {
      n.level = t, n.initSegment && (n.initSegment.level = t);
    });
  });
}
function fh(i, e) {
  return i !== e && e ? ia(i) !== ia(e) : !1;
}
function ia(i) {
  return i.replace(/\?[^?]*$/, "");
}
function vs(i, e) {
  for (let s = 0, n = i.length; s < n; s++) {
    var t;
    if (((t = i[s]) == null ? void 0 : t.cc) === e)
      return i[s];
  }
  return null;
}
function gh(i, e) {
  return !!(i && e.startCC < i.endCC && e.endCC > i.startCC);
}
function na(i, e) {
  const t = i.start + e;
  i.startPTS = t, i.setStart(t), i.endPTS = t + i.duration;
}
function Co(i, e) {
  const t = e.fragments;
  for (let s = 0, n = t.length; s < n; s++)
    na(t[s], i);
  e.fragmentHint && na(e.fragmentHint, i), e.alignedSliding = !0;
}
function mh(i, e) {
  i && (wo(e, i), e.alignedSliding || Si(e, i), !e.alignedSliding && !e.skippedSegments && Lo(i, e, !1));
}
function wo(i, e) {
  if (!gh(e, i))
    return;
  const t = Math.min(e.endCC, i.endCC), s = vs(e.fragments, t), n = vs(i.fragments, t);
  if (!s || !n)
    return;
  ge.log(`Aligning playlist at start of dicontinuity sequence ${t}`);
  const r = s.start - n.start;
  Co(r, i);
}
function Si(i, e) {
  if (!i.hasProgramDateTime || !e.hasProgramDateTime)
    return;
  const t = i.fragments, s = e.fragments;
  if (!t.length || !s.length)
    return;
  let n, r;
  const a = Math.min(e.endCC, i.endCC);
  e.startCC < a && i.startCC < a && (n = vs(s, a), r = vs(t, a)), (!n || !r) && (n = s[Math.floor(s.length / 2)], r = vs(t, n.cc) || t[Math.floor(t.length / 2)]);
  const o = n.programDateTime, c = r.programDateTime;
  if (!o || !c)
    return;
  const l = (c - o) / 1e3 - (r.start - n.start);
  Co(l, i);
}
function He(i, e, t) {
  ze(i, e, t), i.addEventListener(e, t);
}
function ze(i, e, t) {
  i.removeEventListener(e, t);
}
const ph = {
  toString: function(i) {
    let e = "";
    const t = i.length;
    for (let s = 0; s < t; s++)
      e += `[${i.start(s).toFixed(3)}-${i.end(s).toFixed(3)}]`;
    return e;
  }
}, D = {
  STOPPED: "STOPPED",
  IDLE: "IDLE",
  KEY_LOADING: "KEY_LOADING",
  FRAG_LOADING: "FRAG_LOADING",
  FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
  WAITING_TRACK: "WAITING_TRACK",
  PARSING: "PARSING",
  PARSED: "PARSED",
  ENDED: "ENDED",
  ERROR: "ERROR",
  WAITING_INIT_PTS: "WAITING_INIT_PTS",
  WAITING_LEVEL: "WAITING_LEVEL"
};
class Xn extends po {
  constructor(e, t, s, n, r) {
    super(n, e.logger), this.hls = void 0, this.fragPrevious = null, this.fragCurrent = null, this.fragmentTracker = void 0, this.transmuxer = null, this._state = D.STOPPED, this.playlistType = void 0, this.media = null, this.mediaBuffer = null, this.config = void 0, this.bitrateTest = !1, this.lastCurrentTime = 0, this.nextLoadPosition = 0, this.startPosition = 0, this.startTimeOffset = null, this.retryDate = 0, this.levels = null, this.fragmentLoader = void 0, this.keyLoader = void 0, this.levelLastLoaded = null, this.startFragRequested = !1, this.decrypter = void 0, this.initPTS = [], this.buffering = !0, this.loadingParts = !1, this.loopSn = void 0, this.onMediaSeeking = () => {
      const {
        config: a,
        fragCurrent: o,
        media: c,
        mediaBuffer: l,
        state: u
      } = this, h = c ? c.currentTime : 0, d = se.bufferInfo(l || c, h, a.maxBufferHole), g = !d.len;
      if (this.log(`Media seeking to ${G(h) ? h.toFixed(3) : h}, state: ${u}, ${g ? "out of" : "in"} buffer`), this.state === D.ENDED)
        this.resetLoadingState();
      else if (o) {
        const f = a.maxFragLookUpTolerance, m = o.start - f, p = o.start + o.duration + f;
        if (g || p < d.start || m > d.end) {
          const T = h > p;
          (h < m || T) && (T && o.loader && (this.log(`Cancelling fragment load for seek (sn: ${o.sn})`), o.abortRequests(), this.resetLoadingState()), this.fragPrevious = null);
        }
      }
      if (c) {
        this.fragmentTracker.removeFragmentsInRange(h, 1 / 0, this.playlistType, !0);
        const f = this.lastCurrentTime;
        if (h > f && (this.lastCurrentTime = h), !this.loadingParts) {
          const m = Math.max(d.end, h), p = this.shouldLoadParts(this.getLevelDetails(), m);
          p && (this.log(`LL-Part loading ON after seeking to ${h.toFixed(2)} with buffer @${m.toFixed(2)}`), this.loadingParts = p);
        }
      }
      this.hls.hasEnoughToStart || (this.log(`Setting ${g ? "startPosition" : "nextLoadPosition"} to ${h} for seek without enough to start`), this.nextLoadPosition = h, g && (this.startPosition = h)), g && this.state === D.IDLE && this.tickImmediate();
    }, this.onMediaEnded = () => {
      this.log("setting startPosition to 0 because media ended"), this.startPosition = this.lastCurrentTime = 0;
    }, this.playlistType = r, this.hls = e, this.fragmentLoader = new Hu(e.config), this.keyLoader = s, this.fragmentTracker = t, this.config = e.config, this.decrypter = new Wn(e.config);
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(y.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(y.ERROR, this.onError, this);
  }
  doTick() {
    this.onTickEnd();
  }
  onTickEnd() {
  }
  startLoad(e) {
  }
  stopLoad() {
    if (this.state === D.STOPPED)
      return;
    this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
    const e = this.fragCurrent;
    e != null && e.loader && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = D.STOPPED;
  }
  get startPositionValue() {
    const {
      nextLoadPosition: e,
      startPosition: t
    } = this;
    return t === -1 && e ? e : t;
  }
  get bufferingEnabled() {
    return this.buffering;
  }
  pauseBuffering() {
    this.buffering = !1;
  }
  resumeBuffering() {
    this.buffering = !0;
  }
  get inFlightFrag() {
    return {
      frag: this.fragCurrent,
      state: this.state
    };
  }
  _streamEnded(e, t) {
    if (t.live || !this.media)
      return !1;
    const s = e.end || 0, n = this.config.timelineOffset || 0;
    if (s <= n)
      return !1;
    const r = e.buffered;
    this.config.maxBufferHole && r && r.length > 1 && (e = se.bufferedInfo(r, e.start, 0));
    const a = e.nextStart;
    if (a && a > n && a < t.edge || this.media.currentTime < e.start)
      return !1;
    const c = t.partList;
    if (c != null && c.length) {
      const u = c[c.length - 1];
      return se.isBuffered(this.media, u.start + u.duration / 2);
    }
    const l = t.fragments[t.fragments.length - 1].type;
    return this.fragmentTracker.isEndListAppended(l);
  }
  getLevelDetails() {
    if (this.levels && this.levelLastLoaded !== null)
      return this.levelLastLoaded.details;
  }
  get timelineOffset() {
    const e = this.config.timelineOffset;
    if (e) {
      var t;
      return ((t = this.getLevelDetails()) == null ? void 0 : t.appliedTimelineOffset) || e;
    }
    return 0;
  }
  onMediaAttached(e, t) {
    const s = this.media = this.mediaBuffer = t.media;
    He(s, "seeking", this.onMediaSeeking), He(s, "ended", this.onMediaEnded);
    const n = this.config;
    this.levels && n.autoStartLoad && this.state === D.STOPPED && this.startLoad(n.startPosition);
  }
  onMediaDetaching(e, t) {
    const s = !!t.transferMedia, n = this.media;
    if (n !== null) {
      if (n.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), ze(n, "seeking", this.onMediaSeeking), ze(n, "ended", this.onMediaEnded), this.keyLoader && !s && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loopSn = void 0, s) {
        this.resetLoadingState(), this.resetTransmuxer();
        return;
      }
      this.loadingParts = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad();
    }
  }
  onManifestLoading() {
    this.initPTS = [], this.levels = this.levelLastLoaded = this.fragCurrent = null, this.lastCurrentTime = this.startPosition = 0, this.startFragRequested = !1;
  }
  onError(e, t) {
  }
  onManifestLoaded(e, t) {
    this.startTimeOffset = t.startTimeOffset;
  }
  onHandlerDestroying() {
    this.stopLoad(), this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null), super.onHandlerDestroying(), this.hls = this.onMediaSeeking = this.onMediaEnded = null;
  }
  onHandlerDestroyed() {
    this.state = D.STOPPED, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, super.onHandlerDestroyed();
  }
  loadFragment(e, t, s) {
    this.startFragRequested = !0, this._loadFragForPlayback(e, t, s);
  }
  _loadFragForPlayback(e, t, s) {
    const n = (r) => {
      const a = r.frag;
      if (this.fragContextChanged(a)) {
        this.warn(`${a.type} sn: ${a.sn}${r.part ? " part: " + r.part.index : ""} of ${this.fragInfo(a, !1, r.part)}) was dropped during download.`), this.fragmentTracker.removeFragment(a);
        return;
      }
      a.stats.chunkCount++, this._handleFragmentLoadProgress(r);
    };
    this._doFragLoad(e, t, s, n).then((r) => {
      if (!r)
        return;
      const a = this.state, o = r.frag;
      if (this.fragContextChanged(o)) {
        (a === D.FRAG_LOADING || !this.fragCurrent && a === D.PARSING) && (this.fragmentTracker.removeFragment(o), this.state = D.IDLE);
        return;
      }
      "payload" in r && (this.log(`Loaded ${o.type} sn: ${o.sn} of ${this.playlistLabel()} ${o.level}`), this.hls.trigger(y.FRAG_LOADED, r)), this._handleFragmentLoadComplete(r);
    }).catch((r) => {
      this.state === D.STOPPED || this.state === D.ERROR || (this.warn(`Frag error: ${(r == null ? void 0 : r.message) || r}`), this.resetFragmentLoading(e));
    });
  }
  clearTrackerIfNeeded(e) {
    var t;
    const {
      fragmentTracker: s
    } = this;
    if (s.getState(e) === Pe.APPENDING) {
      const r = e.type, a = this.getFwdBufferInfo(this.mediaBuffer, r), o = Math.max(e.duration, a ? a.len : this.config.maxBufferLength), c = this.backtrackFragment;
      ((c ? e.sn - c.sn : 0) === 1 || this.reduceMaxBufferLength(o, e.duration)) && s.removeFragment(e);
    } else ((t = this.mediaBuffer) == null ? void 0 : t.buffered.length) === 0 ? s.removeAllFragments() : s.hasParts(e.type) && (s.detectPartialFragments({
      frag: e,
      part: null,
      stats: e.stats,
      id: e.type
    }), s.getState(e) === Pe.PARTIAL && s.removeFragment(e));
  }
  checkLiveUpdate(e) {
    if (e.updated && !e.live) {
      const t = e.fragments[e.fragments.length - 1];
      this.fragmentTracker.detectPartialFragments({
        frag: t,
        part: null,
        stats: t.stats,
        id: t.type
      });
    }
    e.fragments[0] || (e.deltaUpdateFailed = !0);
  }
  waitForLive(e) {
    const t = e.details;
    return (t == null ? void 0 : t.live) && t.type !== "EVENT" && (this.levelLastLoaded !== e || t.expired);
  }
  flushMainBuffer(e, t, s = null) {
    if (!(e - t))
      return;
    const n = {
      startOffset: e,
      endOffset: t,
      type: s
    };
    this.hls.trigger(y.BUFFER_FLUSHING, n);
  }
  _loadInitSegment(e, t) {
    this._doFragLoad(e, t).then((s) => {
      const n = s == null ? void 0 : s.frag;
      if (!n || this.fragContextChanged(n) || !this.levels)
        throw new Error("init load aborted");
      return s;
    }).then((s) => {
      const {
        hls: n
      } = this, {
        frag: r,
        payload: a
      } = s, o = r.decryptdata;
      if (a && a.byteLength > 0 && o != null && o.key && o.iv && ls(o.method)) {
        const c = self.performance.now();
        return this.decrypter.decrypt(new Uint8Array(a), o.key.buffer, o.iv.buffer, Yn(o.method)).catch((l) => {
          throw n.trigger(y.ERROR, {
            type: q.MEDIA_ERROR,
            details: C.FRAG_DECRYPT_ERROR,
            fatal: !1,
            error: l,
            reason: l.message,
            frag: r
          }), l;
        }).then((l) => {
          const u = self.performance.now();
          return n.trigger(y.FRAG_DECRYPTED, {
            frag: r,
            payload: l,
            stats: {
              tstart: c,
              tdecrypt: u
            }
          }), s.payload = l, this.completeInitSegmentLoad(s);
        });
      }
      return this.completeInitSegmentLoad(s);
    }).catch((s) => {
      this.state === D.STOPPED || this.state === D.ERROR || (this.warn(s), this.resetFragmentLoading(e));
    });
  }
  completeInitSegmentLoad(e) {
    const {
      levels: t
    } = this;
    if (!t)
      throw new Error("init load aborted, missing levels");
    const s = e.frag.stats;
    this.state !== D.STOPPED && (this.state = D.IDLE), e.frag.data = new Uint8Array(e.payload), s.parsing.start = s.buffering.start = self.performance.now(), s.parsing.end = s.buffering.end = self.performance.now(), this.tick();
  }
  unhandledEncryptionError(e, t) {
    var s, n;
    const r = e.tracks;
    if (r && !t.encrypted && ((s = r.audio) != null && s.encrypted || (n = r.video) != null && n.encrypted) && (!this.config.emeEnabled || !this.keyLoader.emeController)) {
      const a = this.media, o = new Error(`Encrypted track with no key in ${this.fragInfo(t)} (media ${a ? "attached mediaKeys: " + a.mediaKeys : "detached"})`);
      return this.warn(o.message), !a || a.mediaKeys ? !1 : (this.hls.trigger(y.ERROR, {
        type: q.KEY_SYSTEM_ERROR,
        details: C.KEY_SYSTEM_NO_KEYS,
        fatal: !1,
        error: o,
        frag: t
      }), this.resetTransmuxer(), !0);
    }
    return !1;
  }
  fragContextChanged(e) {
    const {
      fragCurrent: t
    } = this;
    return !e || !t || e.sn !== t.sn || e.level !== t.level;
  }
  fragBufferedComplete(e, t) {
    const s = this.mediaBuffer ? this.mediaBuffer : this.media;
    if (this.log(`Buffered ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.fragInfo(e, !1, t)} > buffer:${s ? ph.toString(se.getBuffered(s)) : "(detached)"})`), Le(e)) {
      var n;
      if (e.type !== j.SUBTITLE) {
        const a = e.elementaryStreams;
        if (!Object.keys(a).some((o) => !!a[o])) {
          this.state = D.IDLE;
          return;
        }
      }
      const r = (n = this.levels) == null ? void 0 : n[e.level];
      r != null && r.fragmentError && (this.log(`Resetting level fragment error count of ${r.fragmentError} on frag buffered`), r.fragmentError = 0);
    }
    this.state = D.IDLE;
  }
  _handleFragmentLoadComplete(e) {
    const {
      transmuxer: t
    } = this;
    if (!t)
      return;
    const {
      frag: s,
      part: n,
      partsLoaded: r
    } = e, a = !r || r.length === 0 || r.some((c) => !c), o = new qn(s.level, s.sn, s.stats.chunkCount + 1, 0, n ? n.index : -1, !a);
    t.flush(o);
  }
  _handleFragmentLoadProgress(e) {
  }
  _doFragLoad(e, t, s = null, n) {
    var r;
    this.fragCurrent = e;
    const a = t.details;
    if (!this.levels || !a)
      throw new Error(`frag load aborted, missing level${a ? "" : " detail"}s`);
    let o = null;
    if (e.encrypted && !((r = e.decryptdata) != null && r.key)) {
      if (this.log(`Loading key for ${e.sn} of [${a.startSN}-${a.endSN}], ${this.playlistLabel()} ${e.level}`), this.state = D.KEY_LOADING, this.fragCurrent = e, o = this.keyLoader.load(e).then((d) => {
        if (!this.fragContextChanged(d.frag))
          return this.hls.trigger(y.KEY_LOADED, d), this.state === D.KEY_LOADING && (this.state = D.IDLE), d;
      }), this.hls.trigger(y.KEY_LOADING, {
        frag: e
      }), this.fragCurrent === null)
        return this.log("context changed in KEY_LOADING"), Promise.resolve(null);
    } else e.encrypted || (o = this.keyLoader.loadClear(e, a.encryptedFragments, this.startFragRequested), o && this.log("[eme] blocking frag load until media-keys acquired"));
    const c = this.fragPrevious;
    if (Le(e) && (!c || e.sn !== c.sn)) {
      const d = this.shouldLoadParts(t.details, e.end);
      d !== this.loadingParts && (this.log(`LL-Part loading ${d ? "ON" : "OFF"} loading sn ${c == null ? void 0 : c.sn}->${e.sn}`), this.loadingParts = d);
    }
    if (s = Math.max(e.start, s || 0), this.loadingParts && Le(e)) {
      const d = a.partList;
      if (d && n) {
        s > a.fragmentEnd && a.fragmentHint && (e = a.fragmentHint);
        const g = this.getNextPart(d, e, s);
        if (g > -1) {
          const f = d[g];
          e = this.fragCurrent = f.fragment, this.log(`Loading ${e.type} sn: ${e.sn} part: ${f.index} (${g}/${d.length - 1}) of ${this.fragInfo(e, !1, f)}) cc: ${e.cc} [${a.startSN}-${a.endSN}], target: ${parseFloat(s.toFixed(3))}`), this.nextLoadPosition = f.start + f.duration, this.state = D.FRAG_LOADING;
          let m;
          return o ? m = o.then((p) => !p || this.fragContextChanged(p.frag) ? null : this.doFragPartsLoad(e, f, t, n)).catch((p) => this.handleFragLoadError(p)) : m = this.doFragPartsLoad(e, f, t, n).catch((p) => this.handleFragLoadError(p)), this.hls.trigger(y.FRAG_LOADING, {
            frag: e,
            part: f,
            targetBufferTime: s
          }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")) : m;
        } else if (!e.url || this.loadedEndOfParts(d, s))
          return Promise.resolve(null);
      }
    }
    if (Le(e) && this.loadingParts) {
      var l;
      this.log(`LL-Part loading OFF after next part miss @${s.toFixed(2)} Check buffer at sn: ${e.sn} loaded parts: ${(l = a.partList) == null ? void 0 : l.filter((d) => d.loaded).map((d) => `[${d.start}-${d.end}]`)}`), this.loadingParts = !1;
    } else if (!e.url)
      return Promise.resolve(null);
    this.log(`Loading ${e.type} sn: ${e.sn} of ${this.fragInfo(e, !1)}) cc: ${e.cc} ${"[" + a.startSN + "-" + a.endSN + "]"}, target: ${parseFloat(s.toFixed(3))}`), G(e.sn) && !this.bitrateTest && (this.nextLoadPosition = e.start + e.duration), this.state = D.FRAG_LOADING;
    const u = this.config.progressive && e.type !== j.SUBTITLE;
    let h;
    return u && o ? h = o.then((d) => !d || this.fragContextChanged(d.frag) ? null : this.fragmentLoader.load(e, n)).catch((d) => this.handleFragLoadError(d)) : h = Promise.all([this.fragmentLoader.load(e, u ? n : void 0), o]).then(([d]) => (!u && n && n(d), d)).catch((d) => this.handleFragLoadError(d)), this.hls.trigger(y.FRAG_LOADING, {
      frag: e,
      targetBufferTime: s
    }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")) : h;
  }
  doFragPartsLoad(e, t, s, n) {
    return new Promise((r, a) => {
      var o;
      const c = [], l = (o = s.details) == null ? void 0 : o.partList, u = (h) => {
        this.fragmentLoader.loadPart(e, h, n).then((d) => {
          c[h.index] = d;
          const g = d.part;
          this.hls.trigger(y.FRAG_LOADED, d);
          const f = sa(s.details, e.sn, h.index + 1) || _o(l, e.sn, h.index + 1);
          if (f)
            u(f);
          else
            return r({
              frag: e,
              part: g,
              partsLoaded: c
            });
        }).catch(a);
      };
      u(t);
    });
  }
  handleFragLoadError(e) {
    if ("data" in e) {
      const t = e.data;
      t.frag && t.details === C.INTERNAL_ABORTED ? this.handleFragLoadAborted(t.frag, t.part) : t.frag && t.type === q.KEY_SYSTEM_ERROR ? (t.frag.abortRequests(), this.resetStartWhenNotLoaded(), this.resetFragmentLoading(t.frag)) : this.hls.trigger(y.ERROR, t);
    } else
      this.hls.trigger(y.ERROR, {
        type: q.OTHER_ERROR,
        details: C.INTERNAL_EXCEPTION,
        err: e,
        error: e,
        fatal: !0
      });
    return null;
  }
  _handleTransmuxerFlush(e) {
    const t = this.getCurrentContext(e);
    if (!t || this.state !== D.PARSING) {
      !this.fragCurrent && this.state !== D.STOPPED && this.state !== D.ERROR && (this.state = D.IDLE);
      return;
    }
    const {
      frag: s,
      part: n,
      level: r
    } = t, a = self.performance.now();
    s.stats.parsing.end = a, n && (n.stats.parsing.end = a);
    const o = this.getLevelDetails(), l = o && s.sn > o.endSN || this.shouldLoadParts(o, s.end);
    l !== this.loadingParts && (this.log(`LL-Part loading ${l ? "ON" : "OFF"} after parsing segment ending @${s.end.toFixed(2)}`), this.loadingParts = l), this.updateLevelTiming(s, n, r, e.partial);
  }
  shouldLoadParts(e, t) {
    if (this.config.lowLatencyMode) {
      if (!e)
        return this.loadingParts;
      if (e.partList) {
        var s;
        const r = e.partList[0];
        if (r.fragment.type === j.SUBTITLE)
          return !1;
        const a = r.end + (((s = e.fragmentHint) == null ? void 0 : s.duration) || 0);
        if (t >= a) {
          var n;
          if ((this.hls.hasEnoughToStart ? ((n = this.media) == null ? void 0 : n.currentTime) || this.lastCurrentTime : this.getLoadPosition()) > r.start - r.fragment.duration)
            return !0;
        }
      }
    }
    return !1;
  }
  getCurrentContext(e) {
    const {
      levels: t,
      fragCurrent: s
    } = this, {
      level: n,
      sn: r,
      part: a
    } = e;
    if (!(t != null && t[n]))
      return this.warn(`Levels object was unset while buffering fragment ${r} of ${this.playlistLabel()} ${n}. The current chunk will not be buffered.`), null;
    const o = t[n], c = o.details, l = a > -1 ? sa(c, r, a) : null, u = l ? l.fragment : Ro(c, r, s);
    return u ? (s && s !== u && (u.stats = s.stats), {
      frag: u,
      part: l,
      level: o
    }) : null;
  }
  bufferFragmentData(e, t, s, n, r) {
    if (this.state !== D.PARSING)
      return;
    const {
      data1: a,
      data2: o
    } = e;
    let c = a;
    if (o && (c = nt(a, o)), !c.length)
      return;
    const l = this.initPTS[t.cc], u = l ? -l.baseTime / l.timescale : void 0, h = {
      type: e.type,
      frag: t,
      part: s,
      chunkMeta: n,
      offset: u,
      parent: t.type,
      data: c
    };
    if (this.hls.trigger(y.BUFFER_APPENDING, h), e.dropped && e.independent && !s) {
      if (r)
        return;
      this.flushBufferGap(t);
    }
  }
  flushBufferGap(e) {
    const t = this.media;
    if (!t)
      return;
    if (!se.isBuffered(t, t.currentTime)) {
      this.flushMainBuffer(0, e.start);
      return;
    }
    const s = t.currentTime, n = se.bufferInfo(t, s, 0), r = e.duration, a = Math.min(this.config.maxFragLookUpTolerance * 2, r * 0.25), o = Math.max(Math.min(e.start - a, n.end - a), s + a);
    e.start - o > a && this.flushMainBuffer(o, e.start);
  }
  getFwdBufferInfo(e, t) {
    var s;
    const n = this.getLoadPosition();
    if (!G(n))
      return null;
    const a = this.lastCurrentTime > n || (s = this.media) != null && s.paused ? 0 : this.config.maxBufferHole;
    return this.getFwdBufferInfoAtPos(e, n, t, a);
  }
  getFwdBufferInfoAtPos(e, t, s, n) {
    const r = se.bufferInfo(e, t, n);
    if (r.len === 0 && r.nextStart !== void 0) {
      const a = this.fragmentTracker.getBufferedFrag(t, s);
      if (a && (r.nextStart <= a.end || a.gap)) {
        const o = Math.max(Math.min(r.nextStart, a.end) - t, n);
        return se.bufferInfo(e, t, o);
      }
    }
    return r;
  }
  getMaxBufferLength(e) {
    const {
      config: t
    } = this;
    let s;
    return e ? s = Math.max(8 * t.maxBufferSize / e, t.maxBufferLength) : s = t.maxBufferLength, Math.min(s, t.maxMaxBufferLength);
  }
  reduceMaxBufferLength(e, t) {
    const s = this.config, n = Math.max(Math.min(e - t, s.maxBufferLength), t), r = Math.max(e - t * 3, s.maxMaxBufferLength / 2, n);
    return r >= n ? (s.maxMaxBufferLength = r, this.warn(`Reduce max buffer length to ${r}s`), !0) : !1;
  }
  getAppendedFrag(e, t = j.MAIN) {
    const s = this.fragmentTracker ? this.fragmentTracker.getAppendedFrag(e, t) : null;
    return s && "fragment" in s ? s.fragment : s;
  }
  getNextFragment(e, t) {
    const s = t.fragments, n = s.length;
    if (!n)
      return null;
    const {
      config: r
    } = this, a = s[0].start, o = r.lowLatencyMode && !!t.partList;
    let c = null;
    if (t.live) {
      const h = r.initialLiveManifestSize;
      if (n < h)
        return this.warn(`Not enough fragments to start playback (have: ${n}, need: ${h})`), null;
      if (!t.PTSKnown && !this.startFragRequested && this.startPosition === -1 || e < a) {
        var l;
        o && !this.loadingParts && (this.log("LL-Part loading ON for initial live fragment"), this.loadingParts = !0), c = this.getInitialLiveFragment(t);
        const d = this.hls.startPosition, g = this.hls.liveSyncPosition, f = c ? (d !== -1 && d >= a ? d : g) || c.start : e;
        this.log(`Setting startPosition to ${f} to match start frag at live edge. mainStart: ${d} liveSyncPosition: ${g} frag.start: ${(l = c) == null ? void 0 : l.start}`), this.startPosition = this.nextLoadPosition = f;
      }
    } else e <= a && (c = s[0]);
    if (!c) {
      const h = this.loadingParts ? t.partEnd : t.fragmentEnd;
      c = this.getFragmentAtPosition(e, h, t);
    }
    let u = this.filterReplacedPrimary(c, t);
    if (!u && c) {
      const h = c.sn - t.startSN;
      u = this.filterReplacedPrimary(s[h + 1] || null, t);
    }
    return this.mapToInitFragWhenRequired(u);
  }
  isLoopLoading(e, t) {
    const s = this.fragmentTracker.getState(e);
    return (s === Pe.OK || s === Pe.PARTIAL && !!e.gap) && this.nextLoadPosition > t;
  }
  getNextFragmentLoopLoading(e, t, s, n, r) {
    let a = null;
    if (e.gap && (a = this.getNextFragment(this.nextLoadPosition, t), a && !a.gap && s.nextStart)) {
      const o = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, s.nextStart, n, 0);
      if (o !== null && s.len + o.len >= r) {
        const c = a.sn;
        return this.loopSn !== c && (this.log(`buffer full after gaps in "${n}" playlist starting at sn: ${c}`), this.loopSn = c), null;
      }
    }
    return this.loopSn = void 0, a;
  }
  get primaryPrefetch() {
    if (ra(this.config)) {
      var e;
      if ((e = this.hls.interstitialsManager) == null || (e = e.playingItem) == null ? void 0 : e.event)
        return !0;
    }
    return !1;
  }
  filterReplacedPrimary(e, t) {
    if (!e)
      return e;
    if (ra(this.config) && e.type !== j.SUBTITLE) {
      const s = this.hls.interstitialsManager, n = s == null ? void 0 : s.bufferingItem;
      if (n) {
        const a = n.event;
        if (a) {
          if (a.appendInPlace || Math.abs(e.start - n.start) > 1 || n.start === 0)
            return null;
        } else if (e.end <= n.start && (t == null ? void 0 : t.live) === !1 || e.start > n.end && n.nextEvent && (n.nextEvent.appendInPlace || e.start - n.end > 1))
          return null;
      }
      const r = s == null ? void 0 : s.playerQueue;
      if (r)
        for (let a = r.length; a--; ) {
          const o = r[a].interstitial;
          if (o.appendInPlace && e.start >= o.startTime && e.end <= o.resumeTime)
            return null;
        }
    }
    return e;
  }
  mapToInitFragWhenRequired(e) {
    return e != null && e.initSegment && !e.initSegment.data && !this.bitrateTest ? e.initSegment : e;
  }
  getNextPart(e, t, s) {
    let n = -1, r = !1, a = !0;
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o];
      if (a = a && !l.independent, n > -1 && s < l.start)
        break;
      const u = l.loaded;
      u ? n = -1 : (r || (l.independent || a) && l.fragment === t) && (l.fragment !== t && this.warn(`Need buffer at ${s} but next unloaded part starts at ${l.start}`), n = o), r = u;
    }
    return n;
  }
  loadedEndOfParts(e, t) {
    let s;
    for (let n = e.length; n--; ) {
      if (s = e[n], !s.loaded)
        return !1;
      if (t > s.start)
        return !0;
    }
    return !1;
  }
  /*
   This method is used find the best matching first fragment for a live playlist. This fragment is used to calculate the
   "sliding" of the playlist, which is its offset from the start of playback. After sliding we can compute the real
   start and end times for each fragment in the playlist (after which this method will not need to be called).
  */
  getInitialLiveFragment(e) {
    const t = e.fragments, s = this.fragPrevious;
    let n = null;
    if (s) {
      if (e.hasProgramDateTime && (this.log(`Live playlist, switching playlist, load frag with same PDT: ${s.programDateTime}`), n = Du(t, s.endProgramDateTime, this.config.maxFragLookUpTolerance)), !n) {
        const r = s.sn + 1;
        if (r >= e.startSN && r <= e.endSN) {
          const a = t[r - e.startSN];
          s.cc === a.cc && (n = a, this.log(`Live playlist, switching playlist, load frag with next SN: ${n.sn}`));
        }
        n || (n = fo(e, s.cc, s.end), n && this.log(`Live playlist, switching playlist, load frag with same CC: ${n.sn}`));
      }
    } else {
      const r = this.hls.liveSyncPosition;
      r !== null && (n = this.getFragmentAtPosition(r, this.bitrateTest ? e.fragmentEnd : e.edge, e));
    }
    return n;
  }
  /*
  This method finds the best matching fragment given the provided position.
   */
  getFragmentAtPosition(e, t, s) {
    const {
      config: n
    } = this;
    let {
      fragPrevious: r
    } = this, {
      fragments: a,
      endSN: o
    } = s;
    const {
      fragmentHint: c
    } = s, {
      maxFragLookUpTolerance: l
    } = n, u = s.partList, h = !!(this.loadingParts && u != null && u.length && c);
    h && !this.bitrateTest && u[u.length - 1].fragment.sn === c.sn && (a = a.concat(c), o = c.sn);
    let d;
    if (e < t) {
      var g;
      const m = e < this.lastCurrentTime || e > t - l || (g = this.media) != null && g.paused || !this.startFragRequested ? 0 : l;
      d = Qt(r, a, e, m);
    } else
      d = a[a.length - 1];
    if (d) {
      const f = d.sn - s.startSN, m = this.fragmentTracker.getState(d);
      if ((m === Pe.OK || m === Pe.PARTIAL && d.gap) && (r = d), r && d.sn === r.sn && (!h || u[0].fragment.sn > d.sn || !s.live) && d.level === r.level) {
        const T = a[f + 1];
        d.sn < o && this.fragmentTracker.getState(T) !== Pe.OK ? d = T : d = null;
      }
    }
    return d;
  }
  alignPlaylists(e, t, s) {
    const n = e.fragments.length;
    if (!n)
      return this.warn("No fragments in live playlist"), 0;
    const r = e.fragmentStart, a = !t, o = e.alignedSliding && G(r);
    if (a || !o && !r) {
      mh(s, e);
      const c = e.fragmentStart;
      return this.log(`Live playlist sliding: ${c.toFixed(2)} start-sn: ${t ? t.startSN : "na"}->${e.startSN} fragments: ${n}`), c;
    }
    return r;
  }
  waitForCdnTuneIn(e) {
    return e.live && e.canBlockReload && e.partTarget && e.tuneInGoal > Math.max(e.partHoldBack, e.partTarget * 3);
  }
  setStartPosition(e, t) {
    let s = this.startPosition;
    s < t && (s = -1);
    const n = this.timelineOffset;
    if (s === -1) {
      const r = this.startTimeOffset !== null, a = r ? this.startTimeOffset : e.startTimeOffset;
      a !== null && G(a) ? (s = t + a, a < 0 && (s += e.edge), s = Math.min(Math.max(t, s), t + e.totalduration), this.log(`Setting startPosition to ${s} for start time offset ${a} found in ${r ? "multivariant" : "media"} playlist`), this.startPosition = s) : e.live ? (s = this.hls.liveSyncPosition || t, this.log(`Setting startPosition to -1 to start at live edge ${s}`), this.startPosition = -1) : (this.log("setting startPosition to 0 by default"), this.startPosition = s = 0), this.lastCurrentTime = s + n;
    }
    this.nextLoadPosition = s + n;
  }
  getLoadPosition() {
    var e;
    const {
      media: t
    } = this;
    let s = 0;
    return (e = this.hls) != null && e.hasEnoughToStart && t ? s = t.currentTime : this.nextLoadPosition >= 0 && (s = this.nextLoadPosition), s;
  }
  handleFragLoadAborted(e, t) {
    this.transmuxer && e.type === this.playlistType && Le(e) && e.stats.aborted && (this.log(`Fragment ${e.sn}${t ? " part " + t.index : ""} of ${this.playlistLabel()} ${e.level} was aborted`), this.resetFragmentLoading(e));
  }
  resetFragmentLoading(e) {
    (!this.fragCurrent || !this.fragContextChanged(e) && this.state !== D.FRAG_LOADING_WAITING_RETRY) && (this.state = D.IDLE);
  }
  onFragmentOrKeyLoadError(e, t) {
    var s;
    if (t.chunkMeta && !t.frag) {
      const T = this.getCurrentContext(t.chunkMeta);
      T && (t.frag = T.frag);
    }
    const n = t.frag;
    if (!n || n.type !== e || !this.levels)
      return;
    if (this.fragContextChanged(n)) {
      var r;
      this.warn(`Frag load error must match current frag to retry ${n.url} > ${(r = this.fragCurrent) == null ? void 0 : r.url}`);
      return;
    }
    const a = t.details === C.FRAG_GAP;
    a && this.fragmentTracker.fragBuffered(n, !0);
    const o = t.errorAction;
    if (!o) {
      this.state = D.ERROR;
      return;
    }
    const {
      action: c,
      flags: l,
      retryCount: u = 0,
      retryConfig: h
    } = o, d = !!h, g = d && c === $e.RetryRequest, f = d && !o.resolved && l === et.MoveAllAlternatesMatchingHost, m = (s = this.hls.latestLevelDetails) == null ? void 0 : s.live;
    if (!g && f && Le(n) && !n.endList && m && !mo(t))
      this.resetFragmentErrors(e), this.treatAsGap(n), o.resolved = !0;
    else if ((g || f) && u < h.maxNumRetry) {
      var p;
      const T = yn((p = t.response) == null ? void 0 : p.code), E = jn(h, u);
      if (this.resetStartWhenNotLoaded(), this.retryDate = self.performance.now() + E, this.state = D.FRAG_LOADING_WAITING_RETRY, o.resolved = !0, T) {
        this.log("Waiting for connection (offline)"), this.retryDate = 1 / 0, t.reason = "offline";
        return;
      }
      this.warn(`Fragment ${n.sn} of ${e} ${n.level} errored with ${t.details}, retrying loading ${u + 1}/${h.maxNumRetry} in ${E}ms`);
    } else if (h)
      if (this.resetFragmentErrors(e), u < h.maxNumRetry)
        !a && c !== $e.RemoveAlternatePermanently && (o.resolved = !0);
      else {
        this.warn(`${t.details} reached or exceeded max retry (${u})`);
        return;
      }
    else c === $e.SendAlternateToPenaltyBox ? this.state = D.WAITING_LEVEL : this.state = D.ERROR;
    this.tickImmediate();
  }
  checkRetryDate() {
    const e = self.performance.now(), t = this.retryDate, s = t === 1 / 0;
    (!t || e >= t || s && !yn(0)) && (s && this.log("Connection restored (online)"), this.resetStartWhenNotLoaded(), this.state = D.IDLE);
  }
  reduceLengthAndFlushBuffer(e) {
    if (this.state === D.PARSING || this.state === D.PARSED) {
      const t = e.frag, s = e.parent, n = this.getFwdBufferInfo(this.mediaBuffer, s), r = n && n.len > 0.5;
      r && this.reduceMaxBufferLength(n.len, (t == null ? void 0 : t.duration) || 10);
      const a = !r;
      return a && this.warn(`Buffer full error while media.currentTime (${this.getLoadPosition()}) is not buffered, flush ${s} buffer`), t && (this.fragmentTracker.removeFragment(t), this.nextLoadPosition = t.start), this.resetLoadingState(), a;
    }
    return !1;
  }
  resetFragmentErrors(e) {
    e === j.AUDIO && (this.fragCurrent = null), this.hls.hasEnoughToStart || (this.startFragRequested = !1), this.state !== D.STOPPED && (this.state = D.IDLE);
  }
  afterBufferFlushed(e, t, s) {
    if (!e)
      return;
    const n = se.getBuffered(e);
    this.fragmentTracker.detectEvictedFragments(t, n, s), this.state === D.ENDED && this.resetLoadingState();
  }
  resetLoadingState() {
    this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state !== D.STOPPED && (this.state = D.IDLE);
  }
  resetStartWhenNotLoaded() {
    if (!this.hls.hasEnoughToStart) {
      this.startFragRequested = !1;
      const e = this.levelLastLoaded, t = e ? e.details : null;
      t != null && t.live ? (this.log("resetting startPosition for live start"), this.startPosition = -1, this.setStartPosition(t, t.fragmentStart), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition;
    }
  }
  resetWhenMissingContext(e) {
    this.log(`Loading context changed while buffering sn ${e.sn} of ${this.playlistLabel()} ${e.level === -1 ? "<removed>" : e.level}. This chunk will not be buffered.`), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(), this.resetLoadingState();
  }
  removeUnbufferedFrags(e = 0) {
    this.fragmentTracker.removeFragmentsInRange(e, 1 / 0, this.playlistType, !1, !0);
  }
  updateLevelTiming(e, t, s, n) {
    const r = s.details;
    if (!r) {
      this.warn("level.details undefined");
      return;
    }
    if (!Object.keys(e.elementaryStreams).reduce((c, l) => {
      const u = e.elementaryStreams[l];
      if (u) {
        const h = u.endPTS - u.startPTS;
        if (h <= 0)
          return this.warn(`Could not parse fragment ${e.sn} ${l} duration reliably (${h})`), c || !1;
        const d = n ? 0 : Ao(r, e, u.startPTS, u.endPTS, u.startDTS, u.endDTS, this);
        return this.hls.trigger(y.LEVEL_PTS_UPDATED, {
          details: r,
          level: s,
          drift: d,
          type: l,
          frag: e,
          start: u.startPTS,
          end: u.endPTS
        }), !0;
      }
      return c;
    }, !1)) {
      var o;
      const c = ((o = this.transmuxer) == null ? void 0 : o.error) === null;
      if ((s.fragmentError === 0 || c && (s.fragmentError < 2 || e.endList)) && this.treatAsGap(e, s), c) {
        const l = new Error(`Found no media in fragment ${e.sn} of ${this.playlistLabel()} ${e.level} resetting transmuxer to fallback to playlist timing`);
        if (this.warn(l.message), this.hls.trigger(y.ERROR, {
          type: q.MEDIA_ERROR,
          details: C.FRAG_PARSING_ERROR,
          fatal: !1,
          error: l,
          frag: e,
          reason: `Found no media in msn ${e.sn} of ${this.playlistLabel()} "${s.url}"`
        }), !this.hls)
          return;
        this.resetTransmuxer();
      }
    }
    this.state = D.PARSED, this.log(`Parsed ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.fragInfo(e, !1, t)})`), this.hls.trigger(y.FRAG_PARSED, {
      frag: e,
      part: t
    });
  }
  playlistLabel() {
    return this.playlistType === j.MAIN ? "level" : "track";
  }
  fragInfo(e, t = !0, s) {
    var n, r;
    return `${this.playlistLabel()} ${e.level} (${s ? "part" : "frag"}:[${((n = t && !s ? e.startPTS : (s || e).start) != null ? n : NaN).toFixed(3)}-${((r = t && !s ? e.endPTS : (s || e).end) != null ? r : NaN).toFixed(3)}]${s && e.type === "main" ? "INDEPENDENT=" + (s.independent ? "YES" : "NO") : ""}`;
  }
  treatAsGap(e, t) {
    t && t.fragmentError++, e.gap = !0, this.fragmentTracker.removeFragment(e), this.fragmentTracker.fragBuffered(e, !0);
  }
  resetTransmuxer() {
    var e;
    (e = this.transmuxer) == null || e.reset();
  }
  recoverWorkerError(e) {
    e.event === "demuxerWorker" && (this.fragmentTracker.removeAllFragments(), this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null), this.resetStartWhenNotLoaded(), this.resetLoadingState());
  }
  set state(e) {
    const t = this._state;
    t !== e && (this._state = e, this.log(`${t}->${e}`));
  }
  get state() {
    return this._state;
  }
}
function ra(i) {
  return !!i.interstitialsController && i.enableInterstitialPlayback !== !1;
}
class Do {
  constructor() {
    this.chunks = [], this.dataLength = 0;
  }
  push(e) {
    this.chunks.push(e), this.dataLength += e.length;
  }
  flush() {
    const {
      chunks: e,
      dataLength: t
    } = this;
    let s;
    if (e.length)
      e.length === 1 ? s = e[0] : s = yh(e, t);
    else return new Uint8Array(0);
    return this.reset(), s;
  }
  reset() {
    this.chunks.length = 0, this.dataLength = 0;
  }
}
function yh(i, e) {
  const t = new Uint8Array(e);
  let s = 0;
  for (let n = 0; n < i.length; n++) {
    const r = i[n];
    t.set(r, s), s += r.length;
  }
  return t;
}
var Hi = { exports: {} }, aa;
function Th() {
  return aa || (aa = 1, (function(i) {
    var e = Object.prototype.hasOwnProperty, t = "~";
    function s() {
    }
    Object.create && (s.prototype = /* @__PURE__ */ Object.create(null), new s().__proto__ || (t = !1));
    function n(c, l, u) {
      this.fn = c, this.context = l, this.once = u || !1;
    }
    function r(c, l, u, h, d) {
      if (typeof u != "function")
        throw new TypeError("The listener must be a function");
      var g = new n(u, h || c, d), f = t ? t + l : l;
      return c._events[f] ? c._events[f].fn ? c._events[f] = [c._events[f], g] : c._events[f].push(g) : (c._events[f] = g, c._eventsCount++), c;
    }
    function a(c, l) {
      --c._eventsCount === 0 ? c._events = new s() : delete c._events[l];
    }
    function o() {
      this._events = new s(), this._eventsCount = 0;
    }
    o.prototype.eventNames = function() {
      var l = [], u, h;
      if (this._eventsCount === 0) return l;
      for (h in u = this._events)
        e.call(u, h) && l.push(t ? h.slice(1) : h);
      return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(u)) : l;
    }, o.prototype.listeners = function(l) {
      var u = t ? t + l : l, h = this._events[u];
      if (!h) return [];
      if (h.fn) return [h.fn];
      for (var d = 0, g = h.length, f = new Array(g); d < g; d++)
        f[d] = h[d].fn;
      return f;
    }, o.prototype.listenerCount = function(l) {
      var u = t ? t + l : l, h = this._events[u];
      return h ? h.fn ? 1 : h.length : 0;
    }, o.prototype.emit = function(l, u, h, d, g, f) {
      var m = t ? t + l : l;
      if (!this._events[m]) return !1;
      var p = this._events[m], T = arguments.length, E, v;
      if (p.fn) {
        switch (p.once && this.removeListener(l, p.fn, void 0, !0), T) {
          case 1:
            return p.fn.call(p.context), !0;
          case 2:
            return p.fn.call(p.context, u), !0;
          case 3:
            return p.fn.call(p.context, u, h), !0;
          case 4:
            return p.fn.call(p.context, u, h, d), !0;
          case 5:
            return p.fn.call(p.context, u, h, d, g), !0;
          case 6:
            return p.fn.call(p.context, u, h, d, g, f), !0;
        }
        for (v = 1, E = new Array(T - 1); v < T; v++)
          E[v - 1] = arguments[v];
        p.fn.apply(p.context, E);
      } else {
        var x = p.length, A;
        for (v = 0; v < x; v++)
          switch (p[v].once && this.removeListener(l, p[v].fn, void 0, !0), T) {
            case 1:
              p[v].fn.call(p[v].context);
              break;
            case 2:
              p[v].fn.call(p[v].context, u);
              break;
            case 3:
              p[v].fn.call(p[v].context, u, h);
              break;
            case 4:
              p[v].fn.call(p[v].context, u, h, d);
              break;
            default:
              if (!E) for (A = 1, E = new Array(T - 1); A < T; A++)
                E[A - 1] = arguments[A];
              p[v].fn.apply(p[v].context, E);
          }
      }
      return !0;
    }, o.prototype.on = function(l, u, h) {
      return r(this, l, u, h, !1);
    }, o.prototype.once = function(l, u, h) {
      return r(this, l, u, h, !0);
    }, o.prototype.removeListener = function(l, u, h, d) {
      var g = t ? t + l : l;
      if (!this._events[g]) return this;
      if (!u)
        return a(this, g), this;
      var f = this._events[g];
      if (f.fn)
        f.fn === u && (!d || f.once) && (!h || f.context === h) && a(this, g);
      else {
        for (var m = 0, p = [], T = f.length; m < T; m++)
          (f[m].fn !== u || d && !f[m].once || h && f[m].context !== h) && p.push(f[m]);
        p.length ? this._events[g] = p.length === 1 ? p[0] : p : a(this, g);
      }
      return this;
    }, o.prototype.removeAllListeners = function(l) {
      var u;
      return l ? (u = t ? t + l : l, this._events[u] && a(this, u)) : (this._events = new s(), this._eventsCount = 0), this;
    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = t, o.EventEmitter = o, i.exports = o;
  })(Hi)), Hi.exports;
}
var Eh = Th(), Qn = /* @__PURE__ */ Hc(Eh);
const Rs = "1.6.15", ds = {};
function vh() {
  return typeof __HLS_WORKER_BUNDLE__ == "function";
}
function bh() {
  const i = ds[Rs];
  if (i)
    return i.clientCount++, i;
  const e = new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`], {
    type: "text/javascript"
  }), t = self.URL.createObjectURL(e), n = {
    worker: new self.Worker(t),
    objectURL: t,
    clientCount: 1
  };
  return ds[Rs] = n, n;
}
function Sh(i) {
  const e = ds[i];
  if (e)
    return e.clientCount++, e;
  const t = new self.URL(i, self.location.href).href, n = {
    worker: new self.Worker(t),
    scriptURL: t,
    clientCount: 1
  };
  return ds[i] = n, n;
}
function xh(i) {
  const e = ds[i || Rs];
  if (e && e.clientCount-- === 1) {
    const {
      worker: s,
      objectURL: n
    } = e;
    delete ds[i || Rs], n && self.URL.revokeObjectURL(n), s.terminate();
  }
}
function Po(i, e) {
  return e + 10 <= i.length && i[e] === 51 && i[e + 1] === 68 && i[e + 2] === 73 && i[e + 3] < 255 && i[e + 4] < 255 && i[e + 6] < 128 && i[e + 7] < 128 && i[e + 8] < 128 && i[e + 9] < 128;
}
function Zn(i, e) {
  return e + 10 <= i.length && i[e] === 73 && i[e + 1] === 68 && i[e + 2] === 51 && i[e + 3] < 255 && i[e + 4] < 255 && i[e + 6] < 128 && i[e + 7] < 128 && i[e + 8] < 128 && i[e + 9] < 128;
}
function Ci(i, e) {
  let t = 0;
  return t = (i[e] & 127) << 21, t |= (i[e + 1] & 127) << 14, t |= (i[e + 2] & 127) << 7, t |= i[e + 3] & 127, t;
}
function _s(i, e) {
  const t = e;
  let s = 0;
  for (; Zn(i, e); ) {
    s += 10;
    const n = Ci(i, e + 6);
    s += n, Po(i, e + 10) && (s += 10), e += s;
  }
  if (s > 0)
    return i.subarray(t, t + s);
}
function Ah(i, e, t, s) {
  const n = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], r = e[t + 2], a = r >> 2 & 15;
  if (a > 12) {
    const g = new Error(`invalid ADTS sampling index:${a}`);
    i.emit(y.ERROR, y.ERROR, {
      type: q.MEDIA_ERROR,
      details: C.FRAG_PARSING_ERROR,
      fatal: !0,
      error: g,
      reason: g.message
    });
    return;
  }
  const o = (r >> 6 & 3) + 1, c = e[t + 3] >> 6 & 3 | (r & 1) << 2, l = "mp4a.40." + o, u = n[a];
  let h = a;
  (o === 5 || o === 29) && (h -= 3);
  const d = [o << 3 | (h & 14) >> 1, (h & 1) << 7 | c << 3];
  return ge.log(`manifest codec:${s}, parsed codec:${l}, channels:${c}, rate:${u} (ADTS object type:${o} sampling index:${a})`), {
    config: d,
    samplerate: u,
    channelCount: c,
    codec: l,
    parsedCodec: l,
    manifestCodec: s
  };
}
function Oo(i, e) {
  return i[e] === 255 && (i[e + 1] & 246) === 240;
}
function Mo(i, e) {
  return i[e + 1] & 1 ? 7 : 9;
}
function Jn(i, e) {
  return (i[e + 3] & 3) << 11 | i[e + 4] << 3 | (i[e + 5] & 224) >>> 5;
}
function Lh(i, e) {
  return e + 5 < i.length;
}
function xi(i, e) {
  return e + 1 < i.length && Oo(i, e);
}
function Ih(i, e) {
  return Lh(i, e) && Oo(i, e) && Jn(i, e) <= i.length - e;
}
function Rh(i, e) {
  if (xi(i, e)) {
    const t = Mo(i, e);
    if (e + t >= i.length)
      return !1;
    const s = Jn(i, e);
    if (s <= t)
      return !1;
    const n = e + s;
    return n === i.length || xi(i, n);
  }
  return !1;
}
function Fo(i, e, t, s, n) {
  if (!i.samplerate) {
    const r = Ah(e, t, s, n);
    if (!r)
      return;
    pe(i, r);
  }
}
function No(i) {
  return 1024 * 9e4 / i;
}
function _h(i, e) {
  const t = Mo(i, e);
  if (e + t <= i.length) {
    const s = Jn(i, e) - t;
    if (s > 0)
      return {
        headerLength: t,
        frameLength: s
      };
  }
}
function $o(i, e, t, s, n) {
  const r = No(i.samplerate), a = s + n * r, o = _h(e, t);
  let c;
  if (o) {
    const {
      frameLength: h,
      headerLength: d
    } = o, g = d + h, f = Math.max(0, t + g - e.length);
    f ? (c = new Uint8Array(g - d), c.set(e.subarray(t + d, e.length), 0)) : c = e.subarray(t + d, t + g);
    const m = {
      unit: c,
      pts: a
    };
    return f || i.samples.push(m), {
      sample: m,
      length: g,
      missing: f
    };
  }
  const l = e.length - t;
  return c = new Uint8Array(l), c.set(e.subarray(t, e.length), 0), {
    sample: {
      unit: c,
      pts: a
    },
    length: l,
    missing: -1
  };
}
function kh(i, e) {
  return Zn(i, e) && Ci(i, e + 6) + 10 <= i.length - e;
}
function Ch(i) {
  return i instanceof ArrayBuffer ? i : i.byteOffset == 0 && i.byteLength == i.buffer.byteLength ? i.buffer : new Uint8Array(i).buffer;
}
function ji(i, e = 0, t = 1 / 0) {
  return wh(i, e, t, Uint8Array);
}
function wh(i, e, t, s) {
  const n = Dh(i);
  let r = 1;
  "BYTES_PER_ELEMENT" in s && (r = s.BYTES_PER_ELEMENT);
  const a = Ph(i) ? i.byteOffset : 0, o = (a + i.byteLength) / r, c = (a + e) / r, l = Math.floor(Math.max(0, Math.min(c, o))), u = Math.floor(Math.min(l + Math.max(t, 0), o));
  return new s(n, l, u - l);
}
function Dh(i) {
  return i instanceof ArrayBuffer ? i : i.buffer;
}
function Ph(i) {
  return i && i.buffer instanceof ArrayBuffer && i.byteLength !== void 0 && i.byteOffset !== void 0;
}
function Oh(i) {
  const e = {
    key: i.type,
    description: "",
    data: "",
    mimeType: null,
    pictureType: null
  }, t = 3;
  if (i.size < 2)
    return;
  if (i.data[0] !== t) {
    console.log("Ignore frame with unrecognized character encoding");
    return;
  }
  const s = i.data.subarray(1).indexOf(0);
  if (s === -1)
    return;
  const n = it(ji(i.data, 1, s)), r = i.data[2 + s], a = i.data.subarray(3 + s).indexOf(0);
  if (a === -1)
    return;
  const o = it(ji(i.data, 3 + s, a));
  let c;
  return n === "-->" ? c = it(ji(i.data, 4 + s + a)) : c = Ch(i.data.subarray(4 + s + a)), e.mimeType = n, e.pictureType = r, e.description = o, e.data = c, e;
}
function Mh(i) {
  if (i.size < 2)
    return;
  const e = it(i.data, !0), t = new Uint8Array(i.data.subarray(e.length + 1));
  return {
    key: i.type,
    info: e,
    data: t.buffer
  };
}
function Fh(i) {
  if (i.size < 2)
    return;
  if (i.type === "TXXX") {
    let t = 1;
    const s = it(i.data.subarray(t), !0);
    t += s.length + 1;
    const n = it(i.data.subarray(t));
    return {
      key: i.type,
      info: s,
      data: n
    };
  }
  const e = it(i.data.subarray(1));
  return {
    key: i.type,
    info: "",
    data: e
  };
}
function Nh(i) {
  if (i.type === "WXXX") {
    if (i.size < 2)
      return;
    let t = 1;
    const s = it(i.data.subarray(t), !0);
    t += s.length + 1;
    const n = it(i.data.subarray(t));
    return {
      key: i.type,
      info: s,
      data: n
    };
  }
  const e = it(i.data);
  return {
    key: i.type,
    info: "",
    data: e
  };
}
function $h(i) {
  return i.type === "PRIV" ? Mh(i) : i.type[0] === "W" ? Nh(i) : i.type === "APIC" ? Oh(i) : Fh(i);
}
function Bh(i) {
  const e = String.fromCharCode(i[0], i[1], i[2], i[3]), t = Ci(i, 4), s = 10;
  return {
    type: e,
    size: t,
    data: i.subarray(s, s + t)
  };
}
const Hs = 10, Uh = 10;
function Bo(i) {
  let e = 0;
  const t = [];
  for (; Zn(i, e); ) {
    const s = Ci(i, e + 6);
    i[e + 5] >> 6 & 1 && (e += Hs), e += Hs;
    const n = e + s;
    for (; e + Uh < n; ) {
      const r = Bh(i.subarray(e)), a = $h(r);
      a && t.push(a), e += r.size + Hs;
    }
    Po(i, e) && (e += Hs);
  }
  return t;
}
function Uo(i) {
  return i && i.key === "PRIV" && i.info === "com.apple.streaming.transportStreamTimestamp";
}
function Gh(i) {
  if (i.data.byteLength === 8) {
    const e = new Uint8Array(i.data), t = e[3] & 1;
    let s = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
    return s /= 45, t && (s += 4772185884e-2), Math.round(s);
  }
}
function er(i) {
  const e = Bo(i);
  for (let t = 0; t < e.length; t++) {
    const s = e[t];
    if (Uo(s))
      return Gh(s);
  }
}
let st = /* @__PURE__ */ (function(i) {
  return i.audioId3 = "org.id3", i.dateRange = "com.apple.quicktime.HLS", i.emsg = "https://aomedia.org/emsg/ID3", i.misbklv = "urn:misb:KLV:bin:1910.1", i;
})({});
function mt(i = "", e = 9e4) {
  return {
    type: i,
    id: -1,
    pid: -1,
    inputTimeScale: e,
    sequenceNumber: -1,
    samples: [],
    dropped: 0
  };
}
class tr {
  constructor() {
    this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null;
  }
  resetInitSegment(e, t, s, n) {
    this._id3Track = {
      type: "id3",
      id: 3,
      pid: -1,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0
    };
  }
  resetTimeStamp(e) {
    this.initPTS = e, this.resetContiguity();
  }
  resetContiguity() {
    this.basePTS = null, this.lastPTS = null, this.frameIndex = 0;
  }
  canParse(e, t) {
    return !1;
  }
  appendFrame(e, t, s) {
  }
  // feed incoming data to the front of the parsing pipeline
  demux(e, t) {
    this.cachedData && (e = nt(this.cachedData, e), this.cachedData = null);
    let s = _s(e, 0), n = s ? s.length : 0, r;
    const a = this._audioTrack, o = this._id3Track, c = s ? er(s) : void 0, l = e.length;
    for ((this.basePTS === null || this.frameIndex === 0 && G(c)) && (this.basePTS = Kh(c, t, this.initPTS), this.lastPTS = this.basePTS), this.lastPTS === null && (this.lastPTS = this.basePTS), s && s.length > 0 && o.samples.push({
      pts: this.lastPTS,
      dts: this.lastPTS,
      data: s,
      type: st.audioId3,
      duration: Number.POSITIVE_INFINITY
    }); n < l; ) {
      if (this.canParse(e, n)) {
        const u = this.appendFrame(a, e, n);
        u ? (this.frameIndex++, this.lastPTS = u.sample.pts, n += u.length, r = n) : n = l;
      } else kh(e, n) ? (s = _s(e, n), o.samples.push({
        pts: this.lastPTS,
        dts: this.lastPTS,
        data: s,
        type: st.audioId3,
        duration: Number.POSITIVE_INFINITY
      }), n += s.length, r = n) : n++;
      if (n === l && r !== l) {
        const u = e.slice(r);
        this.cachedData ? this.cachedData = nt(this.cachedData, u) : this.cachedData = u;
      }
    }
    return {
      audioTrack: a,
      videoTrack: mt(),
      id3Track: o,
      textTrack: mt()
    };
  }
  demuxSampleAes(e, t, s) {
    return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`));
  }
  flush(e) {
    const t = this.cachedData;
    return t && (this.cachedData = null, this.demux(t, 0)), {
      audioTrack: this._audioTrack,
      videoTrack: mt(),
      id3Track: this._id3Track,
      textTrack: mt()
    };
  }
  destroy() {
    this.cachedData = null, this._audioTrack = this._id3Track = void 0;
  }
}
const Kh = (i, e, t) => {
  if (G(i))
    return i * 90;
  const s = t ? t.baseTime * 9e4 / t.timescale : 0;
  return e * 9e4 + s;
};
let js = null;
const Vh = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], Hh = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], jh = [
  // MPEG 2.5
  [
    0,
    // Reserved
    72,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ],
  // Reserved
  [
    0,
    // Reserved
    0,
    // Layer3
    0,
    // Layer2
    0
    // Layer1
  ],
  // MPEG 2
  [
    0,
    // Reserved
    72,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ],
  // MPEG 1
  [
    0,
    // Reserved
    144,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ]
], Wh = [
  0,
  // Reserved
  1,
  // Layer3
  1,
  // Layer2
  4
  // Layer1
];
function Go(i, e, t, s, n) {
  if (t + 24 > e.length)
    return;
  const r = Ko(e, t);
  if (r && t + r.frameLength <= e.length) {
    const a = r.samplesPerFrame * 9e4 / r.sampleRate, o = s + n * a, c = {
      unit: e.subarray(t, t + r.frameLength),
      pts: o,
      dts: o
    };
    return i.config = [], i.channelCount = r.channelCount, i.samplerate = r.sampleRate, i.samples.push(c), {
      sample: c,
      length: r.frameLength,
      missing: 0
    };
  }
}
function Ko(i, e) {
  const t = i[e + 1] >> 3 & 3, s = i[e + 1] >> 1 & 3, n = i[e + 2] >> 4 & 15, r = i[e + 2] >> 2 & 3;
  if (t !== 1 && n !== 0 && n !== 15 && r !== 3) {
    const a = i[e + 2] >> 1 & 1, o = i[e + 3] >> 6, c = t === 3 ? 3 - s : s === 3 ? 3 : 4, l = Vh[c * 14 + n - 1] * 1e3, h = Hh[(t === 3 ? 0 : t === 2 ? 1 : 2) * 3 + r], d = o === 3 ? 1 : 2, g = jh[t][s], f = Wh[s], m = g * 8 * f, p = Math.floor(g * l / h + a) * f;
    if (js === null) {
      const v = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      js = v ? parseInt(v[1]) : 0;
    }
    return !!js && js <= 87 && s === 2 && l >= 224e3 && o === 0 && (i[e + 3] = i[e + 3] | 128), {
      sampleRate: h,
      channelCount: d,
      frameLength: p,
      samplesPerFrame: m
    };
  }
}
function sr(i, e) {
  return i[e] === 255 && (i[e + 1] & 224) === 224 && (i[e + 1] & 6) !== 0;
}
function Vo(i, e) {
  return e + 1 < i.length && sr(i, e);
}
function qh(i, e) {
  return sr(i, e) && 4 <= i.length - e;
}
function Ho(i, e) {
  if (e + 1 < i.length && sr(i, e)) {
    const s = Ko(i, e);
    let n = 4;
    s != null && s.frameLength && (n = s.frameLength);
    const r = e + n;
    return r === i.length || Vo(i, r);
  }
  return !1;
}
class Yh extends tr {
  constructor(e, t) {
    super(), this.observer = void 0, this.config = void 0, this.observer = e, this.config = t;
  }
  resetInitSegment(e, t, s, n) {
    super.resetInitSegment(e, t, s, n), this._audioTrack = {
      container: "audio/adts",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "aac",
      samples: [],
      manifestCodec: t,
      duration: n,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  // Source for probe info - https://wiki.multimedia.cx/index.php?title=ADTS
  static probe(e, t) {
    if (!e)
      return !1;
    const s = _s(e, 0);
    let n = (s == null ? void 0 : s.length) || 0;
    if (Ho(e, n))
      return !1;
    for (let r = e.length; n < r; n++)
      if (Rh(e, n))
        return t.log("ADTS sync word found !"), !0;
    return !1;
  }
  canParse(e, t) {
    return Ih(e, t);
  }
  appendFrame(e, t, s) {
    Fo(e, this.observer, t, s, e.manifestCodec);
    const n = $o(e, t, s, this.basePTS, this.frameIndex);
    if (n && n.missing === 0)
      return n;
  }
}
const jo = (i, e) => {
  let t = 0, s = 5;
  e += s;
  const n = new Uint32Array(1), r = new Uint32Array(1), a = new Uint8Array(1);
  for (; s > 0; ) {
    a[0] = i[e];
    const o = Math.min(s, 8), c = 8 - o;
    r[0] = 4278190080 >>> 24 + c << c, n[0] = (a[0] & r[0]) >> c, t = t ? t << o | n[0] : n[0], e += 1, s -= o;
  }
  return t;
};
class zh extends tr {
  constructor(e) {
    super(), this.observer = void 0, this.observer = e;
  }
  resetInitSegment(e, t, s, n) {
    super.resetInitSegment(e, t, s, n), this._audioTrack = {
      container: "audio/ac-3",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "ac3",
      samples: [],
      manifestCodec: t,
      duration: n,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  canParse(e, t) {
    return t + 64 < e.length;
  }
  appendFrame(e, t, s) {
    const n = Wo(e, t, s, this.basePTS, this.frameIndex);
    if (n !== -1)
      return {
        sample: e.samples[e.samples.length - 1],
        length: n,
        missing: 0
      };
  }
  static probe(e) {
    if (!e)
      return !1;
    const t = _s(e, 0);
    if (!t)
      return !1;
    const s = t.length;
    return e[s] === 11 && e[s + 1] === 119 && er(t) !== void 0 && // check the bsid to confirm ac-3
    jo(e, s) < 16;
  }
}
function Wo(i, e, t, s, n) {
  if (t + 8 > e.length || e[t] !== 11 || e[t + 1] !== 119)
    return -1;
  const r = e[t + 4] >> 6;
  if (r >= 3)
    return -1;
  const o = [48e3, 44100, 32e3][r], c = e[t + 4] & 63, u = [64, 69, 96, 64, 70, 96, 80, 87, 120, 80, 88, 120, 96, 104, 144, 96, 105, 144, 112, 121, 168, 112, 122, 168, 128, 139, 192, 128, 140, 192, 160, 174, 240, 160, 175, 240, 192, 208, 288, 192, 209, 288, 224, 243, 336, 224, 244, 336, 256, 278, 384, 256, 279, 384, 320, 348, 480, 320, 349, 480, 384, 417, 576, 384, 418, 576, 448, 487, 672, 448, 488, 672, 512, 557, 768, 512, 558, 768, 640, 696, 960, 640, 697, 960, 768, 835, 1152, 768, 836, 1152, 896, 975, 1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1115, 1536, 1152, 1253, 1728, 1152, 1254, 1728, 1280, 1393, 1920, 1280, 1394, 1920][c * 3 + r] * 2;
  if (t + u > e.length)
    return -1;
  const h = e[t + 6] >> 5;
  let d = 0;
  h === 2 ? d += 2 : (h & 1 && h !== 1 && (d += 2), h & 4 && (d += 2));
  const g = (e[t + 6] << 8 | e[t + 7]) >> 12 - d & 1, m = [2, 1, 2, 3, 3, 4, 4, 5][h] + g, p = e[t + 5] >> 3, T = e[t + 5] & 7, E = new Uint8Array([r << 6 | p << 1 | T >> 2, (T & 3) << 6 | h << 3 | g << 2 | c >> 4, c << 4 & 224]), v = 1536 / o * 9e4, x = s + n * v, A = e.subarray(t, t + u);
  return i.config = E, i.channelCount = m, i.samplerate = o, i.samples.push({
    unit: A,
    pts: x
  }), u;
}
class Xh extends tr {
  resetInitSegment(e, t, s, n) {
    super.resetInitSegment(e, t, s, n), this._audioTrack = {
      container: "audio/mpeg",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "mp3",
      samples: [],
      manifestCodec: t,
      duration: n,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  static probe(e) {
    if (!e)
      return !1;
    const t = _s(e, 0);
    let s = (t == null ? void 0 : t.length) || 0;
    if (t && e[s] === 11 && e[s + 1] === 119 && er(t) !== void 0 && // check the bsid to confirm ac-3 or ec-3 (not mp3)
    jo(e, s) <= 16)
      return !1;
    for (let n = e.length; s < n; s++)
      if (Ho(e, s))
        return ge.log("MPEG Audio sync word found !"), !0;
    return !1;
  }
  canParse(e, t) {
    return qh(e, t);
  }
  appendFrame(e, t, s) {
    if (this.basePTS !== null)
      return Go(e, t, s, this.basePTS, this.frameIndex);
  }
}
const Qh = /\/emsg[-/]ID3/i;
class Zh {
  constructor(e, t) {
    this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = t;
  }
  resetTimeStamp() {
  }
  resetInitSegment(e, t, s, n) {
    const r = this.videoTrack = mt("video", 1), a = this.audioTrack = mt("audio", 1), o = this.txtTrack = mt("text", 1);
    if (this.id3Track = mt("id3", 1), this.timeOffset = 0, !(e != null && e.byteLength))
      return;
    const c = to(e);
    if (c.video) {
      const {
        id: l,
        timescale: u,
        codec: h,
        supplemental: d
      } = c.video;
      r.id = l, r.timescale = o.timescale = u, r.codec = h, r.supplemental = d;
    }
    if (c.audio) {
      const {
        id: l,
        timescale: u,
        codec: h
      } = c.audio;
      a.id = l, a.timescale = u, a.codec = h;
    }
    o.id = Za.text, r.sampleDuration = 0, r.duration = a.duration = n;
  }
  resetContiguity() {
    this.remainderData = null;
  }
  static probe(e) {
    return zc(e);
  }
  demux(e, t) {
    this.timeOffset = t;
    let s = e;
    const n = this.videoTrack, r = this.txtTrack;
    if (this.config.progressive) {
      this.remainderData && (s = nt(this.remainderData, e));
      const o = su(s);
      this.remainderData = o.remainder, n.samples = o.valid || new Uint8Array();
    } else
      n.samples = s;
    const a = this.extractID3Track(n, t);
    return r.samples = Ar(t, n), {
      videoTrack: n,
      audioTrack: this.audioTrack,
      id3Track: a,
      textTrack: this.txtTrack
    };
  }
  flush() {
    const e = this.timeOffset, t = this.videoTrack, s = this.txtTrack;
    t.samples = this.remainderData || new Uint8Array(), this.remainderData = null;
    const n = this.extractID3Track(t, this.timeOffset);
    return s.samples = Ar(e, t), {
      videoTrack: t,
      audioTrack: mt(),
      id3Track: n,
      textTrack: mt()
    };
  }
  extractID3Track(e, t) {
    const s = this.id3Track;
    if (e.samples.length) {
      const n = ne(e.samples, ["emsg"]);
      n && n.forEach((r) => {
        const a = nu(r);
        if (Qh.test(a.schemeIdUri)) {
          const o = oa(a, t);
          let c = a.eventDuration === 4294967295 ? Number.POSITIVE_INFINITY : a.eventDuration / a.timeScale;
          c <= 1e-3 && (c = Number.POSITIVE_INFINITY);
          const l = a.payload;
          s.samples.push({
            data: l,
            len: l.byteLength,
            dts: o,
            pts: o,
            type: st.emsg,
            duration: c
          });
        } else if (this.config.enableEmsgKLVMetadata && a.schemeIdUri.startsWith("urn:misb:KLV:bin:1910.1")) {
          const o = oa(a, t);
          s.samples.push({
            data: a.payload,
            len: a.payload.byteLength,
            dts: o,
            pts: o,
            type: st.misbklv,
            duration: Number.POSITIVE_INFINITY
          });
        }
      });
    }
    return s;
  }
  demuxSampleAes(e, t, s) {
    return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
  }
  destroy() {
    this.config = null, this.remainderData = null, this.videoTrack = this.audioTrack = this.id3Track = this.txtTrack = void 0;
  }
}
function oa(i, e) {
  return G(i.presentationTime) ? i.presentationTime / i.timeScale : e + i.presentationTimeDelta / i.timeScale;
}
class Jh {
  constructor(e, t, s) {
    this.keyData = void 0, this.decrypter = void 0, this.keyData = s, this.decrypter = new Wn(t, {
      removePKCS7Padding: !1
    });
  }
  decryptBuffer(e) {
    return this.decrypter.decrypt(e, this.keyData.key.buffer, this.keyData.iv.buffer, Ut.cbc);
  }
  // AAC - encrypt all full 16 bytes blocks starting from offset 16
  decryptAacSample(e, t, s) {
    const n = e[t].unit;
    if (n.length <= 16)
      return;
    const r = n.subarray(16, n.length - n.length % 16), a = r.buffer.slice(r.byteOffset, r.byteOffset + r.length);
    this.decryptBuffer(a).then((o) => {
      const c = new Uint8Array(o);
      n.set(c, 16), this.decrypter.isSync() || this.decryptAacSamples(e, t + 1, s);
    }).catch(s);
  }
  decryptAacSamples(e, t, s) {
    for (; ; t++) {
      if (t >= e.length) {
        s();
        return;
      }
      if (!(e[t].unit.length < 32) && (this.decryptAacSample(e, t, s), !this.decrypter.isSync()))
        return;
    }
  }
  // AVC - encrypt one 16 bytes block out of ten, starting from offset 32
  getAvcEncryptedData(e) {
    const t = Math.floor((e.length - 48) / 160) * 16 + 16, s = new Int8Array(t);
    let n = 0;
    for (let r = 32; r < e.length - 16; r += 160, n += 16)
      s.set(e.subarray(r, r + 16), n);
    return s;
  }
  getAvcDecryptedUnit(e, t) {
    const s = new Uint8Array(t);
    let n = 0;
    for (let r = 32; r < e.length - 16; r += 160, n += 16)
      e.set(s.subarray(n, n + 16), r);
    return e;
  }
  decryptAvcSample(e, t, s, n, r) {
    const a = no(r.data), o = this.getAvcEncryptedData(a);
    this.decryptBuffer(o.buffer).then((c) => {
      r.data = this.getAvcDecryptedUnit(a, c), this.decrypter.isSync() || this.decryptAvcSamples(e, t, s + 1, n);
    }).catch(n);
  }
  decryptAvcSamples(e, t, s, n) {
    if (e instanceof Uint8Array)
      throw new Error("Cannot decrypt samples of type Uint8Array");
    for (; ; t++, s = 0) {
      if (t >= e.length) {
        n();
        return;
      }
      const r = e[t].units;
      for (; !(s >= r.length); s++) {
        const a = r[s];
        if (!(a.data.length <= 48 || a.type !== 1 && a.type !== 5) && (this.decryptAvcSample(e, t, s, n, a), !this.decrypter.isSync()))
          return;
      }
    }
  }
}
class qo {
  constructor() {
    this.VideoSample = null;
  }
  createVideoSample(e, t, s) {
    return {
      key: e,
      frame: !1,
      pts: t,
      dts: s,
      units: [],
      length: 0
    };
  }
  getLastNalUnit(e) {
    var t;
    let s = this.VideoSample, n;
    if ((!s || s.units.length === 0) && (s = e[e.length - 1]), (t = s) != null && t.units) {
      const r = s.units;
      n = r[r.length - 1];
    }
    return n;
  }
  pushAccessUnit(e, t) {
    if (e.units.length && e.frame) {
      if (e.pts === void 0) {
        const s = t.samples, n = s.length;
        if (n) {
          const r = s[n - 1];
          e.pts = r.pts, e.dts = r.dts;
        } else {
          t.dropped++;
          return;
        }
      }
      t.samples.push(e);
    }
  }
  parseNALu(e, t, s) {
    const n = t.byteLength;
    let r = e.naluState || 0;
    const a = r, o = [];
    let c = 0, l, u, h, d = -1, g = 0;
    for (r === -1 && (d = 0, g = this.getNALuType(t, 0), r = 0, c = 1); c < n; ) {
      if (l = t[c++], !r) {
        r = l ? 0 : 1;
        continue;
      }
      if (r === 1) {
        r = l ? 0 : 2;
        continue;
      }
      if (!l)
        r = 3;
      else if (l === 1) {
        if (u = c - r - 1, d >= 0) {
          const f = {
            data: t.subarray(d, u),
            type: g
          };
          o.push(f);
        } else {
          const f = this.getLastNalUnit(e.samples);
          f && (a && c <= 4 - a && f.state && (f.data = f.data.subarray(0, f.data.byteLength - a)), u > 0 && (f.data = nt(f.data, t.subarray(0, u)), f.state = 0));
        }
        c < n ? (h = this.getNALuType(t, c), d = c, g = h, r = 0) : r = -1;
      } else
        r = 0;
    }
    if (d >= 0 && r >= 0) {
      const f = {
        data: t.subarray(d, n),
        type: g,
        state: r
      };
      o.push(f);
    }
    if (o.length === 0) {
      const f = this.getLastNalUnit(e.samples);
      f && (f.data = nt(f.data, t));
    }
    return e.naluState = r, o;
  }
}
class bs {
  constructor(e) {
    this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0;
  }
  // ():void
  loadWord() {
    const e = this.data, t = this.bytesAvailable, s = e.byteLength - t, n = new Uint8Array(4), r = Math.min(4, t);
    if (r === 0)
      throw new Error("no bytes available");
    n.set(e.subarray(s, s + r)), this.word = new DataView(n.buffer).getUint32(0), this.bitsAvailable = r * 8, this.bytesAvailable -= r;
  }
  // (count:int):void
  skipBits(e) {
    let t;
    e = Math.min(e, this.bytesAvailable * 8 + this.bitsAvailable), this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, t = e >> 3, e -= t << 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e);
  }
  // (size:int):uint
  readBits(e) {
    let t = Math.min(this.bitsAvailable, e);
    const s = this.word >>> 32 - t;
    if (e > 32 && ge.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0)
      this.word <<= t;
    else if (this.bytesAvailable > 0)
      this.loadWord();
    else
      throw new Error("no bits available");
    return t = e - t, t > 0 && this.bitsAvailable ? s << t | this.readBits(t) : s;
  }
  // ():uint
  skipLZ() {
    let e;
    for (e = 0; e < this.bitsAvailable; ++e)
      if ((this.word & 2147483648 >>> e) !== 0)
        return this.word <<= e, this.bitsAvailable -= e, e;
    return this.loadWord(), e + this.skipLZ();
  }
  // ():void
  skipUEG() {
    this.skipBits(1 + this.skipLZ());
  }
  // ():void
  skipEG() {
    this.skipBits(1 + this.skipLZ());
  }
  // ():uint
  readUEG() {
    const e = this.skipLZ();
    return this.readBits(e + 1) - 1;
  }
  // ():int
  readEG() {
    const e = this.readUEG();
    return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1);
  }
  // Some convenience functions
  // :Boolean
  readBoolean() {
    return this.readBits(1) === 1;
  }
  // ():int
  readUByte() {
    return this.readBits(8);
  }
  // ():int
  readUShort() {
    return this.readBits(16);
  }
  // ():int
  readUInt() {
    return this.readBits(32);
  }
}
class ed extends qo {
  parsePES(e, t, s, n) {
    const r = this.parseNALu(e, s.data, n);
    let a = this.VideoSample, o, c = !1;
    s.data = null, a && r.length && !e.audFound && (this.pushAccessUnit(a, e), a = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts)), r.forEach((l) => {
      var u, h;
      switch (l.type) {
        // NDR
        case 1: {
          let m = !1;
          o = !0;
          const p = l.data;
          if (c && p.length > 4) {
            const T = this.readSliceType(p);
            (T === 2 || T === 4 || T === 7 || T === 9) && (m = !0);
          }
          if (m) {
            var d;
            (d = a) != null && d.frame && !a.key && (this.pushAccessUnit(a, e), a = this.VideoSample = null);
          }
          a || (a = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), a.frame = !0, a.key = m;
          break;
        }
        case 5:
          o = !0, (u = a) != null && u.frame && !a.key && (this.pushAccessUnit(a, e), a = this.VideoSample = null), a || (a = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), a.key = !0, a.frame = !0;
          break;
        // SEI
        case 6: {
          o = !0, Kn(l.data, 1, s.pts, t.samples);
          break;
        }
        case 7: {
          var g, f;
          o = !0, c = !0;
          const m = l.data, p = this.readSPS(m);
          if (!e.sps || e.width !== p.width || e.height !== p.height || ((g = e.pixelRatio) == null ? void 0 : g[0]) !== p.pixelRatio[0] || ((f = e.pixelRatio) == null ? void 0 : f[1]) !== p.pixelRatio[1]) {
            e.width = p.width, e.height = p.height, e.pixelRatio = p.pixelRatio, e.sps = [m];
            const T = m.subarray(1, 4);
            let E = "avc1.";
            for (let v = 0; v < 3; v++) {
              let x = T[v].toString(16);
              x.length < 2 && (x = "0" + x), E += x;
            }
            e.codec = E;
          }
          break;
        }
        // PPS
        case 8:
          o = !0, e.pps = [l.data];
          break;
        // AUD
        case 9:
          o = !0, e.audFound = !0, (h = a) != null && h.frame && (this.pushAccessUnit(a, e), a = null), a || (a = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts));
          break;
        // Filler Data
        case 12:
          o = !0;
          break;
        default:
          o = !1;
          break;
      }
      a && o && a.units.push(l);
    }), n && a && (this.pushAccessUnit(a, e), this.VideoSample = null);
  }
  getNALuType(e, t) {
    return e[t] & 31;
  }
  readSliceType(e) {
    const t = new bs(e);
    return t.readUByte(), t.readUEG(), t.readUEG();
  }
  /**
   * The scaling list is optionally transmitted as part of a sequence parameter
   * set and is not relevant to transmuxing.
   * @param count the number of entries in this scaling list
   * @see Recommendation ITU-T H.264, Section 7.3.2.1.1.1
   */
  skipScalingList(e, t) {
    let s = 8, n = 8, r;
    for (let a = 0; a < e; a++)
      n !== 0 && (r = t.readEG(), n = (s + r + 256) % 256), s = n === 0 ? s : n;
  }
  /**
   * Read a sequence parameter set and return some interesting video
   * properties. A sequence parameter set is the H264 metadata that
   * describes the properties of upcoming video frames.
   * @returns an object with configuration parsed from the
   * sequence parameter set, including the dimensions of the
   * associated video frames.
   */
  readSPS(e) {
    const t = new bs(e);
    let s = 0, n = 0, r = 0, a = 0, o, c, l;
    const u = t.readUByte.bind(t), h = t.readBits.bind(t), d = t.readUEG.bind(t), g = t.readBoolean.bind(t), f = t.skipBits.bind(t), m = t.skipEG.bind(t), p = t.skipUEG.bind(t), T = this.skipScalingList.bind(this);
    u();
    const E = u();
    if (h(5), f(3), u(), p(), E === 100 || E === 110 || E === 122 || E === 244 || E === 44 || E === 83 || E === 86 || E === 118 || E === 128) {
      const L = d();
      if (L === 3 && f(1), p(), p(), f(1), g())
        for (c = L !== 3 ? 8 : 12, l = 0; l < c; l++)
          g() && (l < 6 ? T(16, t) : T(64, t));
    }
    p();
    const v = d();
    if (v === 0)
      d();
    else if (v === 1)
      for (f(1), m(), m(), o = d(), l = 0; l < o; l++)
        m();
    p(), f(1);
    const x = d(), A = d(), _ = h(1);
    _ === 0 && f(1), f(1), g() && (s = d(), n = d(), r = d(), a = d());
    let S = [1, 1];
    if (g() && g())
      switch (u()) {
        case 1:
          S = [1, 1];
          break;
        case 2:
          S = [12, 11];
          break;
        case 3:
          S = [10, 11];
          break;
        case 4:
          S = [16, 11];
          break;
        case 5:
          S = [40, 33];
          break;
        case 6:
          S = [24, 11];
          break;
        case 7:
          S = [20, 11];
          break;
        case 8:
          S = [32, 11];
          break;
        case 9:
          S = [80, 33];
          break;
        case 10:
          S = [18, 11];
          break;
        case 11:
          S = [15, 11];
          break;
        case 12:
          S = [64, 33];
          break;
        case 13:
          S = [160, 99];
          break;
        case 14:
          S = [4, 3];
          break;
        case 15:
          S = [3, 2];
          break;
        case 16:
          S = [2, 1];
          break;
        case 255: {
          S = [u() << 8 | u(), u() << 8 | u()];
          break;
        }
      }
    return {
      width: Math.ceil((x + 1) * 16 - s * 2 - n * 2),
      height: (2 - _) * (A + 1) * 16 - (_ ? 2 : 4) * (r + a),
      pixelRatio: S
    };
  }
}
class td extends qo {
  constructor(...e) {
    super(...e), this.initVPS = null;
  }
  parsePES(e, t, s, n) {
    const r = this.parseNALu(e, s.data, n);
    let a = this.VideoSample, o, c = !1;
    s.data = null, a && r.length && !e.audFound && (this.pushAccessUnit(a, e), a = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts)), r.forEach((l) => {
      var u, h;
      switch (l.type) {
        // NON-IDR, NON RANDOM ACCESS SLICE
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          a || (a = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts)), a.frame = !0, o = !0;
          break;
        // CRA, BLA (random access picture)
        case 16:
        case 17:
        case 18:
        case 21:
          if (o = !0, c) {
            var d;
            (d = a) != null && d.frame && !a.key && (this.pushAccessUnit(a, e), a = this.VideoSample = null);
          }
          a || (a = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), a.key = !0, a.frame = !0;
          break;
        // IDR
        case 19:
        case 20:
          o = !0, (u = a) != null && u.frame && !a.key && (this.pushAccessUnit(a, e), a = this.VideoSample = null), a || (a = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), a.key = !0, a.frame = !0;
          break;
        // SEI
        case 39:
          o = !0, Kn(
            l.data,
            2,
            // NALu header size
            s.pts,
            t.samples
          );
          break;
        // VPS
        case 32:
          o = !0, e.vps || (typeof e.params != "object" && (e.params = {}), e.params = pe(e.params, this.readVPS(l.data)), this.initVPS = l.data), e.vps = [l.data];
          break;
        // SPS
        case 33:
          if (o = !0, c = !0, e.vps !== void 0 && e.vps[0] !== this.initVPS && e.sps !== void 0 && !this.matchSPS(e.sps[0], l.data) && (this.initVPS = e.vps[0], e.sps = e.pps = void 0), !e.sps) {
            const g = this.readSPS(l.data);
            e.width = g.width, e.height = g.height, e.pixelRatio = g.pixelRatio, e.codec = g.codecString, e.sps = [], typeof e.params != "object" && (e.params = {});
            for (const f in g.params)
              e.params[f] = g.params[f];
          }
          this.pushParameterSet(e.sps, l.data, e.vps), a || (a = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), a.key = !0;
          break;
        // PPS
        case 34:
          if (o = !0, typeof e.params == "object") {
            if (!e.pps) {
              e.pps = [];
              const g = this.readPPS(l.data);
              for (const f in g)
                e.params[f] = g[f];
            }
            this.pushParameterSet(e.pps, l.data, e.vps);
          }
          break;
        // ACCESS UNIT DELIMITER
        case 35:
          o = !0, e.audFound = !0, (h = a) != null && h.frame && (this.pushAccessUnit(a, e), a = null), a || (a = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts));
          break;
        default:
          o = !1;
          break;
      }
      a && o && a.units.push(l);
    }), n && a && (this.pushAccessUnit(a, e), this.VideoSample = null);
  }
  pushParameterSet(e, t, s) {
    (s && s[0] === this.initVPS || !s && !e.length) && e.push(t);
  }
  getNALuType(e, t) {
    return (e[t] & 126) >>> 1;
  }
  ebsp2rbsp(e) {
    const t = new Uint8Array(e.byteLength);
    let s = 0;
    for (let n = 0; n < e.byteLength; n++)
      n >= 2 && e[n] === 3 && e[n - 1] === 0 && e[n - 2] === 0 || (t[s] = e[n], s++);
    return new Uint8Array(t.buffer, 0, s);
  }
  pushAccessUnit(e, t) {
    super.pushAccessUnit(e, t), this.initVPS && (this.initVPS = null);
  }
  readVPS(e) {
    const t = new bs(e);
    t.readUByte(), t.readUByte(), t.readBits(4), t.skipBits(2), t.readBits(6);
    const s = t.readBits(3), n = t.readBoolean();
    return {
      numTemporalLayers: s + 1,
      temporalIdNested: n
    };
  }
  readSPS(e) {
    const t = new bs(this.ebsp2rbsp(e));
    t.readUByte(), t.readUByte(), t.readBits(4);
    const s = t.readBits(3);
    t.readBoolean();
    const n = t.readBits(2), r = t.readBoolean(), a = t.readBits(5), o = t.readUByte(), c = t.readUByte(), l = t.readUByte(), u = t.readUByte(), h = t.readUByte(), d = t.readUByte(), g = t.readUByte(), f = t.readUByte(), m = t.readUByte(), p = t.readUByte(), T = t.readUByte(), E = [], v = [];
    for (let ce = 0; ce < s; ce++)
      E.push(t.readBoolean()), v.push(t.readBoolean());
    if (s > 0)
      for (let ce = s; ce < 8; ce++)
        t.readBits(2);
    for (let ce = 0; ce < s; ce++)
      E[ce] && (t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte()), v[ce] && t.readUByte();
    t.readUEG();
    const x = t.readUEG();
    x == 3 && t.skipBits(1);
    const A = t.readUEG(), _ = t.readUEG(), S = t.readBoolean();
    let L = 0, I = 0, R = 0, w = 0;
    S && (L += t.readUEG(), I += t.readUEG(), R += t.readUEG(), w += t.readUEG());
    const O = t.readUEG(), K = t.readUEG(), W = t.readUEG(), B = t.readBoolean();
    for (let ce = B ? 0 : s; ce <= s; ce++)
      t.skipUEG(), t.skipUEG(), t.skipUEG();
    if (t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.readBoolean() && t.readBoolean())
      for (let Oe = 0; Oe < 4; Oe++)
        for (let We = 0; We < (Oe === 3 ? 2 : 6); We++)
          if (!t.readBoolean())
            t.readUEG();
          else {
            const Ze = Math.min(64, 1 << 4 + (Oe << 1));
            Oe > 1 && t.readEG();
            for (let wt = 0; wt < Ze; wt++)
              t.readEG();
          }
    t.readBoolean(), t.readBoolean(), t.readBoolean() && (t.readUByte(), t.skipUEG(), t.skipUEG(), t.readBoolean());
    const N = t.readUEG();
    let H = 0;
    for (let ce = 0; ce < N; ce++) {
      let Oe = !1;
      if (ce !== 0 && (Oe = t.readBoolean()), Oe) {
        ce === N && t.readUEG(), t.readBoolean(), t.readUEG();
        let We = 0;
        for (let bt = 0; bt <= H; bt++) {
          const Ze = t.readBoolean();
          let wt = !1;
          Ze || (wt = t.readBoolean()), (Ze || wt) && We++;
        }
        H = We;
      } else {
        const We = t.readUEG(), bt = t.readUEG();
        H = We + bt;
        for (let Ze = 0; Ze < We; Ze++)
          t.readUEG(), t.readBoolean();
        for (let Ze = 0; Ze < bt; Ze++)
          t.readUEG(), t.readBoolean();
      }
    }
    if (t.readBoolean()) {
      const ce = t.readUEG();
      for (let Oe = 0; Oe < ce; Oe++) {
        for (let We = 0; We < W + 4; We++)
          t.readBits(1);
        t.readBits(1);
      }
    }
    let F = 0, M = 1, te = 1, oe = !0, Q = 1, ie = 0;
    t.readBoolean(), t.readBoolean();
    let ke = !1;
    if (t.readBoolean()) {
      if (t.readBoolean()) {
        const St = t.readUByte(), le = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2], xt = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];
        St > 0 && St < 16 ? (M = le[St - 1], te = xt[St - 1]) : St === 255 && (M = t.readBits(16), te = t.readBits(16));
      }
      if (t.readBoolean() && t.readBoolean(), t.readBoolean() && (t.readBits(3), t.readBoolean(), t.readBoolean() && (t.readUByte(), t.readUByte(), t.readUByte())), t.readBoolean() && (t.readUEG(), t.readUEG()), t.readBoolean(), t.readBoolean(), t.readBoolean(), ke = t.readBoolean(), ke && (t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG()), t.readBoolean() && (Q = t.readBits(32), ie = t.readBits(32), t.readBoolean() && t.readUEG(), t.readBoolean())) {
        const xt = t.readBoolean(), _e = t.readBoolean();
        let Kt = !1;
        (xt || _e) && (Kt = t.readBoolean(), Kt && (t.readUByte(), t.readBits(5), t.readBoolean(), t.readBits(5)), t.readBits(4), t.readBits(4), Kt && t.readBits(4), t.readBits(5), t.readBits(5), t.readBits(5));
        for (let $s = 0; $s <= s; $s++) {
          oe = t.readBoolean();
          const Mi = oe || t.readBoolean();
          let Bs = !1;
          Mi ? t.readEG() : Bs = t.readBoolean();
          const gs = Bs ? 1 : t.readUEG() + 1;
          if (xt)
            for (let Vt = 0; Vt < gs; Vt++)
              t.readUEG(), t.readUEG(), Kt && (t.readUEG(), t.readUEG()), t.skipBits(1);
          if (_e)
            for (let Vt = 0; Vt < gs; Vt++)
              t.readUEG(), t.readUEG(), Kt && (t.readUEG(), t.readUEG()), t.skipBits(1);
        }
      }
      t.readBoolean() && (t.readBoolean(), t.readBoolean(), t.readBoolean(), F = t.readUEG());
    }
    let be = A, je = _;
    if (S) {
      let ce = 1, Oe = 1;
      x === 1 ? ce = Oe = 2 : x == 2 && (ce = 2), be = A - ce * I - ce * L, je = _ - Oe * w - Oe * R;
    }
    const Qe = n ? ["A", "B", "C"][n] : "", Gt = o << 24 | c << 16 | l << 8 | u;
    let Ct = 0;
    for (let ce = 0; ce < 32; ce++)
      Ct = (Ct | (Gt >> ce & 1) << 31 - ce) >>> 0;
    let ut = Ct.toString(16);
    return a === 1 && ut === "2" && (ut = "6"), {
      codecString: `hvc1.${Qe}${a}.${ut}.${r ? "H" : "L"}${T}.B0`,
      params: {
        general_tier_flag: r,
        general_profile_idc: a,
        general_profile_space: n,
        general_profile_compatibility_flags: [o, c, l, u],
        general_constraint_indicator_flags: [h, d, g, f, m, p],
        general_level_idc: T,
        bit_depth: O + 8,
        bit_depth_luma_minus8: O,
        bit_depth_chroma_minus8: K,
        min_spatial_segmentation_idc: F,
        chroma_format_idc: x,
        frame_rate: {
          fixed: oe,
          fps: ie / Q
        }
      },
      width: be,
      height: je,
      pixelRatio: [M, te]
    };
  }
  readPPS(e) {
    const t = new bs(this.ebsp2rbsp(e));
    t.readUByte(), t.readUByte(), t.skipUEG(), t.skipUEG(), t.skipBits(2), t.skipBits(3), t.skipBits(2), t.skipUEG(), t.skipUEG(), t.skipEG(), t.skipBits(2), t.readBoolean() && t.skipUEG(), t.skipEG(), t.skipEG(), t.skipBits(4);
    const n = t.readBoolean(), r = t.readBoolean();
    let a = 1;
    return r && n ? a = 0 : r ? a = 3 : n && (a = 2), {
      parallelismType: a
    };
  }
  matchSPS(e, t) {
    return String.fromCharCode.apply(null, e).substr(3) === String.fromCharCode.apply(null, t).substr(3);
  }
}
const Me = 188;
class Mt {
  constructor(e, t, s, n) {
    this.logger = void 0, this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._pmtId = -1, this._videoTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.remainderData = null, this.videoParser = void 0, this.observer = e, this.config = t, this.typeSupported = s, this.logger = n, this.videoParser = null;
  }
  static probe(e, t) {
    const s = Mt.syncOffset(e);
    return s > 0 && t.warn(`MPEG2-TS detected but first sync word found @ offset ${s}`), s !== -1;
  }
  static syncOffset(e) {
    const t = e.length;
    let s = Math.min(Me * 5, t - Me) + 1, n = 0;
    for (; n < s; ) {
      let r = !1, a = -1, o = 0;
      for (let c = n; c < t; c += Me)
        if (e[c] === 71 && (t - c === Me || e[c + Me] === 71)) {
          if (o++, a === -1 && (a = c, a !== 0 && (s = Math.min(a + Me * 99, e.length - Me) + 1)), r || (r = Sn(e, c) === 0), r && o > 1 && (a === 0 && o > 2 || c + Me > s))
            return a;
        } else {
          if (o)
            return -1;
          break;
        }
      n++;
    }
    return -1;
  }
  /**
   * Creates a track model internal to demuxer used to drive remuxing input
   */
  static createTrack(e, t) {
    return {
      container: e === "video" || e === "audio" ? "video/mp2t" : void 0,
      type: e,
      id: Za[e],
      pid: -1,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0,
      duration: e === "audio" ? t : void 0
    };
  }
  /**
   * Initializes a new init segment on the demuxer/remuxer interface. Needed for discontinuities/track-switches (or at stream start)
   * Resets all internal track instances of the demuxer.
   */
  resetInitSegment(e, t, s, n) {
    this.pmtParsed = !1, this._pmtId = -1, this._videoTrack = Mt.createTrack("video"), this._videoTrack.duration = n, this._audioTrack = Mt.createTrack("audio", n), this._id3Track = Mt.createTrack("id3"), this._txtTrack = Mt.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.videoParser = null, this.aacOverFlow = null, this.remainderData = null, this.audioCodec = t, this.videoCodec = s;
  }
  resetTimeStamp() {
  }
  resetContiguity() {
    const {
      _audioTrack: e,
      _videoTrack: t,
      _id3Track: s
    } = this;
    e && (e.pesData = null), t && (t.pesData = null), s && (s.pesData = null), this.aacOverFlow = null, this.remainderData = null;
  }
  demux(e, t, s = !1, n = !1) {
    s || (this.sampleAes = null);
    let r;
    const a = this._videoTrack, o = this._audioTrack, c = this._id3Track, l = this._txtTrack;
    let u = a.pid, h = a.pesData, d = o.pid, g = c.pid, f = o.pesData, m = c.pesData, p = null, T = this.pmtParsed, E = this._pmtId, v = e.length;
    if (this.remainderData && (e = nt(this.remainderData, e), v = e.length, this.remainderData = null), v < Me && !n)
      return this.remainderData = e, {
        audioTrack: o,
        videoTrack: a,
        id3Track: c,
        textTrack: l
      };
    const x = Math.max(0, Mt.syncOffset(e));
    v -= (v - x) % Me, v < e.byteLength && !n && (this.remainderData = new Uint8Array(e.buffer, v, e.buffer.byteLength - v));
    let A = 0;
    for (let S = x; S < v; S += Me)
      if (e[S] === 71) {
        const L = !!(e[S + 1] & 64), I = Sn(e, S), R = (e[S + 3] & 48) >> 4;
        let w;
        if (R > 1) {
          if (w = S + 5 + e[S + 4], w === S + Me)
            continue;
        } else
          w = S + 4;
        switch (I) {
          case u:
            L && (h && (r = is(h, this.logger)) && (this.readyVideoParser(a.segmentCodec), this.videoParser !== null && this.videoParser.parsePES(a, l, r, !1)), h = {
              data: [],
              size: 0
            }), h && (h.data.push(e.subarray(w, S + Me)), h.size += S + Me - w);
            break;
          case d:
            if (L) {
              if (f && (r = is(f, this.logger)))
                switch (o.segmentCodec) {
                  case "aac":
                    this.parseAACPES(o, r);
                    break;
                  case "mp3":
                    this.parseMPEGPES(o, r);
                    break;
                  case "ac3":
                    this.parseAC3PES(o, r);
                    break;
                }
              f = {
                data: [],
                size: 0
              };
            }
            f && (f.data.push(e.subarray(w, S + Me)), f.size += S + Me - w);
            break;
          case g:
            L && (m && (r = is(m, this.logger)) && this.parseID3PES(c, r), m = {
              data: [],
              size: 0
            }), m && (m.data.push(e.subarray(w, S + Me)), m.size += S + Me - w);
            break;
          case 0:
            L && (w += e[w] + 1), E = this._pmtId = sd(e, w);
            break;
          case E: {
            L && (w += e[w] + 1);
            const O = id(e, w, this.typeSupported, s, this.observer, this.logger);
            u = O.videoPid, u > 0 && (a.pid = u, a.segmentCodec = O.segmentVideoCodec), d = O.audioPid, d > 0 && (o.pid = d, o.segmentCodec = O.segmentAudioCodec), g = O.id3Pid, g > 0 && (c.pid = g), p !== null && !T && (this.logger.warn(`MPEG-TS PMT found at ${S} after unknown PID '${p}'. Backtracking to sync byte @${x} to parse all TS packets.`), p = null, S = x - 188), T = this.pmtParsed = !0;
            break;
          }
          case 17:
          case 8191:
            break;
          default:
            p = I;
            break;
        }
      } else
        A++;
    A > 0 && xn(this.observer, new Error(`Found ${A} TS packet/s that do not start with 0x47`), void 0, this.logger), a.pesData = h, o.pesData = f, c.pesData = m;
    const _ = {
      audioTrack: o,
      videoTrack: a,
      id3Track: c,
      textTrack: l
    };
    return n && this.extractRemainingSamples(_), _;
  }
  flush() {
    const {
      remainderData: e
    } = this;
    this.remainderData = null;
    let t;
    return e ? t = this.demux(e, -1, !1, !0) : t = {
      videoTrack: this._videoTrack,
      audioTrack: this._audioTrack,
      id3Track: this._id3Track,
      textTrack: this._txtTrack
    }, this.extractRemainingSamples(t), this.sampleAes ? this.decrypt(t, this.sampleAes) : t;
  }
  extractRemainingSamples(e) {
    const {
      audioTrack: t,
      videoTrack: s,
      id3Track: n,
      textTrack: r
    } = e, a = s.pesData, o = t.pesData, c = n.pesData;
    let l;
    if (a && (l = is(a, this.logger)) ? (this.readyVideoParser(s.segmentCodec), this.videoParser !== null && (this.videoParser.parsePES(s, r, l, !0), s.pesData = null)) : s.pesData = a, o && (l = is(o, this.logger))) {
      switch (t.segmentCodec) {
        case "aac":
          this.parseAACPES(t, l);
          break;
        case "mp3":
          this.parseMPEGPES(t, l);
          break;
        case "ac3":
          this.parseAC3PES(t, l);
          break;
      }
      t.pesData = null;
    } else
      o != null && o.size && this.logger.log("last AAC PES packet truncated,might overlap between fragments"), t.pesData = o;
    c && (l = is(c, this.logger)) ? (this.parseID3PES(n, l), n.pesData = null) : n.pesData = c;
  }
  demuxSampleAes(e, t, s) {
    const n = this.demux(e, s, !0, !this.config.progressive), r = this.sampleAes = new Jh(this.observer, this.config, t);
    return this.decrypt(n, r);
  }
  readyVideoParser(e) {
    this.videoParser === null && (e === "avc" ? this.videoParser = new ed() : e === "hevc" && (this.videoParser = new td()));
  }
  decrypt(e, t) {
    return new Promise((s) => {
      const {
        audioTrack: n,
        videoTrack: r
      } = e;
      n.samples && n.segmentCodec === "aac" ? t.decryptAacSamples(n.samples, 0, () => {
        r.samples ? t.decryptAvcSamples(r.samples, 0, 0, () => {
          s(e);
        }) : s(e);
      }) : r.samples && t.decryptAvcSamples(r.samples, 0, 0, () => {
        s(e);
      });
    });
  }
  destroy() {
    this.observer && this.observer.removeAllListeners(), this.config = this.logger = this.observer = null, this.aacOverFlow = this.videoParser = this.remainderData = this.sampleAes = null, this._videoTrack = this._audioTrack = this._id3Track = this._txtTrack = void 0;
  }
  parseAACPES(e, t) {
    let s = 0;
    const n = this.aacOverFlow;
    let r = t.data;
    if (n) {
      this.aacOverFlow = null;
      const h = n.missing, d = n.sample.unit.byteLength;
      if (h === -1)
        r = nt(n.sample.unit, r);
      else {
        const g = d - h;
        n.sample.unit.set(r.subarray(0, h), g), e.samples.push(n.sample), s = n.missing;
      }
    }
    let a, o;
    for (a = s, o = r.length; a < o - 1 && !xi(r, a); a++)
      ;
    if (a !== s) {
      let h;
      const d = a < o - 1;
      if (d ? h = `AAC PES did not start with ADTS header,offset:${a}` : h = "No ADTS header found in AAC PES", xn(this.observer, new Error(h), d, this.logger), !d)
        return;
    }
    Fo(e, this.observer, r, a, this.audioCodec);
    let c;
    if (t.pts !== void 0)
      c = t.pts;
    else if (n) {
      const h = No(e.samplerate);
      c = n.sample.pts + h;
    } else {
      this.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
      return;
    }
    let l = 0, u;
    for (; a < o; )
      if (u = $o(e, r, a, c, l), a += u.length, u.missing) {
        this.aacOverFlow = u;
        break;
      } else
        for (l++; a < o - 1 && !xi(r, a); a++)
          ;
  }
  parseMPEGPES(e, t) {
    const s = t.data, n = s.length;
    let r = 0, a = 0;
    const o = t.pts;
    if (o === void 0) {
      this.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
      return;
    }
    for (; a < n; )
      if (Vo(s, a)) {
        const c = Go(e, s, a, o, r);
        if (c)
          a += c.length, r++;
        else
          break;
      } else
        a++;
  }
  parseAC3PES(e, t) {
    {
      const s = t.data, n = t.pts;
      if (n === void 0) {
        this.logger.warn("[tsdemuxer]: AC3 PES unknown PTS");
        return;
      }
      const r = s.length;
      let a = 0, o = 0, c;
      for (; o < r && (c = Wo(e, s, o, n, a++)) > 0; )
        o += c;
    }
  }
  parseID3PES(e, t) {
    if (t.pts === void 0) {
      this.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
      return;
    }
    const s = pe({}, t, {
      type: this._videoTrack ? st.emsg : st.audioId3,
      duration: Number.POSITIVE_INFINITY
    });
    e.samples.push(s);
  }
}
function Sn(i, e) {
  return ((i[e + 1] & 31) << 8) + i[e + 2];
}
function sd(i, e) {
  return (i[e + 10] & 31) << 8 | i[e + 11];
}
function id(i, e, t, s, n, r) {
  const a = {
    audioPid: -1,
    videoPid: -1,
    id3Pid: -1,
    segmentVideoCodec: "avc",
    segmentAudioCodec: "aac"
  }, o = (i[e + 1] & 15) << 8 | i[e + 2], c = e + 3 + o - 4, l = (i[e + 10] & 15) << 8 | i[e + 11];
  for (e += 12 + l; e < c; ) {
    const u = Sn(i, e), h = (i[e + 3] & 15) << 8 | i[e + 4];
    switch (i[e]) {
      case 207:
        if (!s) {
          Wi("ADTS AAC", r);
          break;
        }
      /* falls through */
      case 15:
        a.audioPid === -1 && (a.audioPid = u);
        break;
      // Packetized metadata (ID3)
      case 21:
        a.id3Pid === -1 && (a.id3Pid = u);
        break;
      case 219:
        if (!s) {
          Wi("H.264", r);
          break;
        }
      /* falls through */
      case 27:
        a.videoPid === -1 && (a.videoPid = u);
        break;
      // ISO/IEC 11172-3 (MPEG-1 audio)
      // or ISO/IEC 13818-3 (MPEG-2 halved sample rate audio)
      case 3:
      case 4:
        !t.mpeg && !t.mp3 ? r.log("MPEG audio found, not supported in this browser") : a.audioPid === -1 && (a.audioPid = u, a.segmentAudioCodec = "mp3");
        break;
      case 193:
        if (!s) {
          Wi("AC-3", r);
          break;
        }
      /* falls through */
      case 129:
        t.ac3 ? a.audioPid === -1 && (a.audioPid = u, a.segmentAudioCodec = "ac3") : r.log("AC-3 audio found, not supported in this browser");
        break;
      case 6:
        if (a.audioPid === -1 && h > 0) {
          let d = e + 5, g = h;
          for (; g > 2; ) {
            switch (i[d]) {
              case 106:
                t.ac3 !== !0 ? r.log("AC-3 audio found, not supported in this browser for now") : (a.audioPid = u, a.segmentAudioCodec = "ac3");
                break;
            }
            const m = i[d + 1] + 2;
            d += m, g -= m;
          }
        }
        break;
      case 194:
      // SAMPLE-AES EC3
      /* falls through */
      case 135:
        return xn(n, new Error("Unsupported EC-3 in M2TS found"), void 0, r), a;
      case 36:
        a.videoPid === -1 && (a.videoPid = u, a.segmentVideoCodec = "hevc", r.log("HEVC in M2TS found"));
        break;
    }
    e += h + 5;
  }
  return a;
}
function xn(i, e, t, s) {
  s.warn(`parsing error: ${e.message}`), i.emit(y.ERROR, y.ERROR, {
    type: q.MEDIA_ERROR,
    details: C.FRAG_PARSING_ERROR,
    fatal: !1,
    levelRetry: t,
    error: e,
    reason: e.message
  });
}
function Wi(i, e) {
  e.log(`${i} with AES-128-CBC encryption found in unencrypted stream`);
}
function is(i, e) {
  let t = 0, s, n, r, a, o;
  const c = i.data;
  if (!i || i.size === 0)
    return null;
  for (; c[0].length < 19 && c.length > 1; )
    c[0] = nt(c[0], c[1]), c.splice(1, 1);
  if (s = c[0], (s[0] << 16) + (s[1] << 8) + s[2] === 1) {
    if (n = (s[4] << 8) + s[5], n && n > i.size - 6)
      return null;
    const u = s[7];
    u & 192 && (a = (s[9] & 14) * 536870912 + // 1 << 29
    (s[10] & 255) * 4194304 + // 1 << 22
    (s[11] & 254) * 16384 + // 1 << 14
    (s[12] & 255) * 128 + // 1 << 7
    (s[13] & 254) / 2, u & 64 ? (o = (s[14] & 14) * 536870912 + // 1 << 29
    (s[15] & 255) * 4194304 + // 1 << 22
    (s[16] & 254) * 16384 + // 1 << 14
    (s[17] & 255) * 128 + // 1 << 7
    (s[18] & 254) / 2, a - o > 60 * 9e4 && (e.warn(`${Math.round((a - o) / 9e4)}s delta between PTS and DTS, align them`), a = o)) : o = a), r = s[8];
    let h = r + 9;
    if (i.size <= h)
      return null;
    i.size -= h;
    const d = new Uint8Array(i.size);
    for (let g = 0, f = c.length; g < f; g++) {
      s = c[g];
      let m = s.byteLength;
      if (h)
        if (h > m) {
          h -= m;
          continue;
        } else
          s = s.subarray(h), m -= h, h = 0;
      d.set(s, t), t += m;
    }
    return n && (n -= r + 3), {
      data: d,
      pts: a,
      dts: o,
      len: n
    };
  }
  return null;
}
class nd {
  static getSilentFrame(e, t) {
    switch (e) {
      case "mp4a.40.2":
        if (t === 1)
          return new Uint8Array([0, 200, 0, 128, 35, 128]);
        if (t === 2)
          return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
        if (t === 3)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
        if (t === 4)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
        if (t === 5)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
        if (t === 6)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
        break;
      // handle HE-AAC below (mp4a.40.5 / mp4a.40.29)
      default:
        if (t === 1)
          return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        if (t === 2)
          return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        if (t === 3)
          return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        break;
    }
  }
}
const Dt = Math.pow(2, 32) - 1;
class k {
  static init() {
    k.types = {
      avc1: [],
      // codingname
      avcC: [],
      hvc1: [],
      hvcC: [],
      btrt: [],
      dinf: [],
      dref: [],
      esds: [],
      ftyp: [],
      hdlr: [],
      mdat: [],
      mdhd: [],
      mdia: [],
      mfhd: [],
      minf: [],
      moof: [],
      moov: [],
      mp4a: [],
      ".mp3": [],
      dac3: [],
      "ac-3": [],
      mvex: [],
      mvhd: [],
      pasp: [],
      sdtp: [],
      stbl: [],
      stco: [],
      stsc: [],
      stsd: [],
      stsz: [],
      stts: [],
      tfdt: [],
      tfhd: [],
      traf: [],
      trak: [],
      trun: [],
      trex: [],
      tkhd: [],
      vmhd: [],
      smhd: []
    };
    let e;
    for (e in k.types)
      k.types.hasOwnProperty(e) && (k.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
    const t = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // pre_defined
      118,
      105,
      100,
      101,
      // handler_type: 'vide'
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      86,
      105,
      100,
      101,
      111,
      72,
      97,
      110,
      100,
      108,
      101,
      114,
      0
      // name: 'VideoHandler'
    ]), s = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // pre_defined
      115,
      111,
      117,
      110,
      // handler_type: 'soun'
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      83,
      111,
      117,
      110,
      100,
      72,
      97,
      110,
      100,
      108,
      101,
      114,
      0
      // name: 'SoundHandler'
    ]);
    k.HDLR_TYPES = {
      video: t,
      audio: s
    };
    const n = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      1,
      // entry_count
      0,
      0,
      0,
      12,
      // entry_size
      117,
      114,
      108,
      32,
      // 'url' type
      0,
      // version 0
      0,
      0,
      1
      // entry_flags
    ]), r = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0
      // entry_count
    ]);
    k.STTS = k.STSC = k.STCO = r, k.STSZ = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // sample_size
      0,
      0,
      0,
      0
      // sample_count
    ]), k.VMHD = new Uint8Array([
      0,
      // version
      0,
      0,
      1,
      // flags
      0,
      0,
      // graphicsmode
      0,
      0,
      0,
      0,
      0,
      0
      // opcolor
    ]), k.SMHD = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      // balance
      0,
      0
      // reserved
    ]), k.STSD = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      1
    ]);
    const a = new Uint8Array([105, 115, 111, 109]), o = new Uint8Array([97, 118, 99, 49]), c = new Uint8Array([0, 0, 0, 1]);
    k.FTYP = k.box(k.types.ftyp, a, c, a, o), k.DINF = k.box(k.types.dinf, k.box(k.types.dref, n));
  }
  static box(e, ...t) {
    let s = 8, n = t.length;
    const r = n;
    for (; n--; )
      s += t[n].byteLength;
    const a = new Uint8Array(s);
    for (a[0] = s >> 24 & 255, a[1] = s >> 16 & 255, a[2] = s >> 8 & 255, a[3] = s & 255, a.set(e, 4), n = 0, s = 8; n < r; n++)
      a.set(t[n], s), s += t[n].byteLength;
    return a;
  }
  static hdlr(e) {
    return k.box(k.types.hdlr, k.HDLR_TYPES[e]);
  }
  static mdat(e) {
    return k.box(k.types.mdat, e);
  }
  static mdhd(e, t) {
    t *= e;
    const s = Math.floor(t / (Dt + 1)), n = Math.floor(t % (Dt + 1));
    return k.box(k.types.mdhd, new Uint8Array([
      1,
      // version 1
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255,
      // timescale
      s >> 24,
      s >> 16 & 255,
      s >> 8 & 255,
      s & 255,
      n >> 24,
      n >> 16 & 255,
      n >> 8 & 255,
      n & 255,
      85,
      196,
      // 'und' language (undetermined)
      0,
      0
    ]));
  }
  static mdia(e) {
    return k.box(k.types.mdia, k.mdhd(e.timescale || 0, e.duration || 0), k.hdlr(e.type), k.minf(e));
  }
  static mfhd(e) {
    return k.box(k.types.mfhd, new Uint8Array([
      0,
      0,
      0,
      0,
      // flags
      e >> 24,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255
      // sequence_number
    ]));
  }
  static minf(e) {
    return e.type === "audio" ? k.box(k.types.minf, k.box(k.types.smhd, k.SMHD), k.DINF, k.stbl(e)) : k.box(k.types.minf, k.box(k.types.vmhd, k.VMHD), k.DINF, k.stbl(e));
  }
  static moof(e, t, s) {
    return k.box(k.types.moof, k.mfhd(e), k.traf(s, t));
  }
  static moov(e) {
    let t = e.length;
    const s = [];
    for (; t--; )
      s[t] = k.trak(e[t]);
    return k.box.apply(null, [k.types.moov, k.mvhd(e[0].timescale || 0, e[0].duration || 0)].concat(s).concat(k.mvex(e)));
  }
  static mvex(e) {
    let t = e.length;
    const s = [];
    for (; t--; )
      s[t] = k.trex(e[t]);
    return k.box.apply(null, [k.types.mvex, ...s]);
  }
  static mvhd(e, t) {
    t *= e;
    const s = Math.floor(t / (Dt + 1)), n = Math.floor(t % (Dt + 1)), r = new Uint8Array([
      1,
      // version 1
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255,
      // timescale
      s >> 24,
      s >> 16 & 255,
      s >> 8 & 255,
      s & 255,
      n >> 24,
      n >> 16 & 255,
      n >> 8 & 255,
      n & 255,
      0,
      1,
      0,
      0,
      // 1.0 rate
      1,
      0,
      // 1.0 volume
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      64,
      0,
      0,
      0,
      // transformation: unity matrix
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // pre_defined
      255,
      255,
      255,
      255
      // next_track_ID
    ]);
    return k.box(k.types.mvhd, r);
  }
  static sdtp(e) {
    const t = e.samples || [], s = new Uint8Array(4 + t.length);
    let n, r;
    for (n = 0; n < t.length; n++)
      r = t[n].flags, s[n + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
    return k.box(k.types.sdtp, s);
  }
  static stbl(e) {
    return k.box(k.types.stbl, k.stsd(e), k.box(k.types.stts, k.STTS), k.box(k.types.stsc, k.STSC), k.box(k.types.stsz, k.STSZ), k.box(k.types.stco, k.STCO));
  }
  static avc1(e) {
    let t = [], s = [], n, r, a;
    for (n = 0; n < e.sps.length; n++)
      r = e.sps[n], a = r.byteLength, t.push(a >>> 8 & 255), t.push(a & 255), t = t.concat(Array.prototype.slice.call(r));
    for (n = 0; n < e.pps.length; n++)
      r = e.pps[n], a = r.byteLength, s.push(a >>> 8 & 255), s.push(a & 255), s = s.concat(Array.prototype.slice.call(r));
    const o = k.box(k.types.avcC, new Uint8Array([
      1,
      // version
      t[3],
      // profile
      t[4],
      // profile compat
      t[5],
      // level
      255,
      // lengthSizeMinusOne, hard-coded to 4 bytes
      224 | e.sps.length
      // 3bit reserved (111) + numOfSequenceParameterSets
    ].concat(t).concat([
      e.pps.length
      // numOfPictureParameterSets
    ]).concat(s))), c = e.width, l = e.height, u = e.pixelRatio[0], h = e.pixelRatio[1];
    return k.box(
      k.types.avc1,
      new Uint8Array([
        0,
        0,
        0,
        // reserved
        0,
        0,
        0,
        // reserved
        0,
        1,
        // data_reference_index
        0,
        0,
        // pre_defined
        0,
        0,
        // reserved
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // pre_defined
        c >> 8 & 255,
        c & 255,
        // width
        l >> 8 & 255,
        l & 255,
        // height
        0,
        72,
        0,
        0,
        // horizresolution
        0,
        72,
        0,
        0,
        // vertresolution
        0,
        0,
        0,
        0,
        // reserved
        0,
        1,
        // frame_count
        18,
        100,
        97,
        105,
        108,
        // dailymotion/hls.js
        121,
        109,
        111,
        116,
        105,
        111,
        110,
        47,
        104,
        108,
        115,
        46,
        106,
        115,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // compressorname
        0,
        24,
        // depth = 24
        17,
        17
      ]),
      // pre_defined = -1
      o,
      k.box(k.types.btrt, new Uint8Array([
        0,
        28,
        156,
        128,
        // bufferSizeDB
        0,
        45,
        198,
        192,
        // maxBitrate
        0,
        45,
        198,
        192
      ])),
      // avgBitrate
      k.box(k.types.pasp, new Uint8Array([
        u >> 24,
        // hSpacing
        u >> 16 & 255,
        u >> 8 & 255,
        u & 255,
        h >> 24,
        // vSpacing
        h >> 16 & 255,
        h >> 8 & 255,
        h & 255
      ]))
    );
  }
  static esds(e) {
    const t = e.config;
    return new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      3,
      // descriptor_type
      25,
      // length
      0,
      1,
      // es_id
      0,
      // stream_priority
      4,
      // descriptor_type
      17,
      // length
      64,
      // codec : mpeg4_audio
      21,
      // stream_type
      0,
      0,
      0,
      // buffer_size
      0,
      0,
      0,
      0,
      // maxBitrate
      0,
      0,
      0,
      0,
      // avgBitrate
      5,
      // descriptor_type
      2,
      // length
      ...t,
      6,
      1,
      2
      // GASpecificConfig)); // length + audio config descriptor
    ]);
  }
  static audioStsd(e) {
    const t = e.samplerate || 0;
    return new Uint8Array([
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      // reserved
      0,
      1,
      // data_reference_index
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // reserved
      0,
      e.channelCount || 0,
      // channelcount
      0,
      16,
      // sampleSize:16bits
      0,
      0,
      0,
      0,
      // reserved2
      t >> 8 & 255,
      t & 255,
      //
      0,
      0
    ]);
  }
  static mp4a(e) {
    return k.box(k.types.mp4a, k.audioStsd(e), k.box(k.types.esds, k.esds(e)));
  }
  static mp3(e) {
    return k.box(k.types[".mp3"], k.audioStsd(e));
  }
  static ac3(e) {
    return k.box(k.types["ac-3"], k.audioStsd(e), k.box(k.types.dac3, e.config));
  }
  static stsd(e) {
    const {
      segmentCodec: t
    } = e;
    if (e.type === "audio") {
      if (t === "aac")
        return k.box(k.types.stsd, k.STSD, k.mp4a(e));
      if (t === "ac3" && e.config)
        return k.box(k.types.stsd, k.STSD, k.ac3(e));
      if (t === "mp3" && e.codec === "mp3")
        return k.box(k.types.stsd, k.STSD, k.mp3(e));
    } else if (e.pps && e.sps) {
      if (t === "avc")
        return k.box(k.types.stsd, k.STSD, k.avc1(e));
      if (t === "hevc" && e.vps)
        return k.box(k.types.stsd, k.STSD, k.hvc1(e));
    } else
      throw new Error("video track missing pps or sps");
    throw new Error(`unsupported ${e.type} segment codec (${t}/${e.codec})`);
  }
  static tkhd(e) {
    const t = e.id, s = (e.duration || 0) * (e.timescale || 0), n = e.width || 0, r = e.height || 0, a = Math.floor(s / (Dt + 1)), o = Math.floor(s % (Dt + 1));
    return k.box(k.types.tkhd, new Uint8Array([
      1,
      // version 1
      0,
      0,
      7,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      t >> 24 & 255,
      t >> 16 & 255,
      t >> 8 & 255,
      t & 255,
      // track_ID
      0,
      0,
      0,
      0,
      // reserved
      a >> 24,
      a >> 16 & 255,
      a >> 8 & 255,
      a & 255,
      o >> 24,
      o >> 16 & 255,
      o >> 8 & 255,
      o & 255,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      // layer
      0,
      0,
      // alternate_group
      0,
      0,
      // non-audio track volume
      0,
      0,
      // reserved
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      64,
      0,
      0,
      0,
      // transformation: unity matrix
      n >> 8 & 255,
      n & 255,
      0,
      0,
      // width
      r >> 8 & 255,
      r & 255,
      0,
      0
      // height
    ]));
  }
  static traf(e, t) {
    const s = k.sdtp(e), n = e.id, r = Math.floor(t / (Dt + 1)), a = Math.floor(t % (Dt + 1));
    return k.box(
      k.types.traf,
      k.box(k.types.tfhd, new Uint8Array([
        0,
        // version 0
        0,
        0,
        0,
        // flags
        n >> 24,
        n >> 16 & 255,
        n >> 8 & 255,
        n & 255
        // track_ID
      ])),
      k.box(k.types.tfdt, new Uint8Array([
        1,
        // version 1
        0,
        0,
        0,
        // flags
        r >> 24,
        r >> 16 & 255,
        r >> 8 & 255,
        r & 255,
        a >> 24,
        a >> 16 & 255,
        a >> 8 & 255,
        a & 255
      ])),
      k.trun(e, s.length + 16 + // tfhd
      20 + // tfdt
      8 + // traf header
      16 + // mfhd
      8 + // moof header
      8),
      // mdat header
      s
    );
  }
  /**
   * Generate a track box.
   * @param track a track definition
   */
  static trak(e) {
    return e.duration = e.duration || 4294967295, k.box(k.types.trak, k.tkhd(e), k.mdia(e));
  }
  static trex(e) {
    const t = e.id;
    return k.box(k.types.trex, new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      t >> 24,
      t >> 16 & 255,
      t >> 8 & 255,
      t & 255,
      // track_ID
      0,
      0,
      0,
      1,
      // default_sample_description_index
      0,
      0,
      0,
      0,
      // default_sample_duration
      0,
      0,
      0,
      0,
      // default_sample_size
      0,
      1,
      0,
      1
      // default_sample_flags
    ]));
  }
  static trun(e, t) {
    const s = e.samples || [], n = s.length, r = 12 + 16 * n, a = new Uint8Array(r);
    let o, c, l, u, h, d;
    for (t += 8 + r, a.set([
      e.type === "video" ? 1 : 0,
      // version 1 for video with signed-int sample_composition_time_offset
      0,
      15,
      1,
      // flags
      n >>> 24 & 255,
      n >>> 16 & 255,
      n >>> 8 & 255,
      n & 255,
      // sample_count
      t >>> 24 & 255,
      t >>> 16 & 255,
      t >>> 8 & 255,
      t & 255
      // data_offset
    ], 0), o = 0; o < n; o++)
      c = s[o], l = c.duration, u = c.size, h = c.flags, d = c.cts, a.set([
        l >>> 24 & 255,
        l >>> 16 & 255,
        l >>> 8 & 255,
        l & 255,
        // sample_duration
        u >>> 24 & 255,
        u >>> 16 & 255,
        u >>> 8 & 255,
        u & 255,
        // sample_size
        h.isLeading << 2 | h.dependsOn,
        h.isDependedOn << 6 | h.hasRedundancy << 4 | h.paddingValue << 1 | h.isNonSync,
        h.degradPrio & 61440,
        h.degradPrio & 15,
        // sample_flags
        d >>> 24 & 255,
        d >>> 16 & 255,
        d >>> 8 & 255,
        d & 255
        // sample_composition_time_offset
      ], 12 + 16 * o);
    return k.box(k.types.trun, a);
  }
  static initSegment(e) {
    k.types || k.init();
    const t = k.moov(e);
    return nt(k.FTYP, t);
  }
  static hvc1(e) {
    const t = e.params, s = [e.vps, e.sps, e.pps], n = 4, r = new Uint8Array([1, t.general_profile_space << 6 | (t.general_tier_flag ? 32 : 0) | t.general_profile_idc, t.general_profile_compatibility_flags[0], t.general_profile_compatibility_flags[1], t.general_profile_compatibility_flags[2], t.general_profile_compatibility_flags[3], t.general_constraint_indicator_flags[0], t.general_constraint_indicator_flags[1], t.general_constraint_indicator_flags[2], t.general_constraint_indicator_flags[3], t.general_constraint_indicator_flags[4], t.general_constraint_indicator_flags[5], t.general_level_idc, 240 | t.min_spatial_segmentation_idc >> 8, 255 & t.min_spatial_segmentation_idc, 252 | t.parallelismType, 252 | t.chroma_format_idc, 248 | t.bit_depth_luma_minus8, 248 | t.bit_depth_chroma_minus8, 0, parseInt(t.frame_rate.fps), n - 1 | t.temporal_id_nested << 2 | t.num_temporal_layers << 3 | (t.frame_rate.fixed ? 64 : 0), s.length]);
    let a = r.length;
    for (let f = 0; f < s.length; f += 1) {
      a += 3;
      for (let m = 0; m < s[f].length; m += 1)
        a += 2 + s[f][m].length;
    }
    const o = new Uint8Array(a);
    o.set(r, 0), a = r.length;
    const c = s.length - 1;
    for (let f = 0; f < s.length; f += 1) {
      o.set(new Uint8Array([32 + f | (f === c ? 128 : 0), 0, s[f].length]), a), a += 3;
      for (let m = 0; m < s[f].length; m += 1)
        o.set(new Uint8Array([s[f][m].length >> 8, s[f][m].length & 255]), a), a += 2, o.set(s[f][m], a), a += s[f][m].length;
    }
    const l = k.box(k.types.hvcC, o), u = e.width, h = e.height, d = e.pixelRatio[0], g = e.pixelRatio[1];
    return k.box(
      k.types.hvc1,
      new Uint8Array([
        0,
        0,
        0,
        // reserved
        0,
        0,
        0,
        // reserved
        0,
        1,
        // data_reference_index
        0,
        0,
        // pre_defined
        0,
        0,
        // reserved
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // pre_defined
        u >> 8 & 255,
        u & 255,
        // width
        h >> 8 & 255,
        h & 255,
        // height
        0,
        72,
        0,
        0,
        // horizresolution
        0,
        72,
        0,
        0,
        // vertresolution
        0,
        0,
        0,
        0,
        // reserved
        0,
        1,
        // frame_count
        18,
        100,
        97,
        105,
        108,
        // dailymotion/hls.js
        121,
        109,
        111,
        116,
        105,
        111,
        110,
        47,
        104,
        108,
        115,
        46,
        106,
        115,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // compressorname
        0,
        24,
        // depth = 24
        17,
        17
      ]),
      // pre_defined = -1
      l,
      k.box(k.types.btrt, new Uint8Array([
        0,
        28,
        156,
        128,
        // bufferSizeDB
        0,
        45,
        198,
        192,
        // maxBitrate
        0,
        45,
        198,
        192
      ])),
      // avgBitrate
      k.box(k.types.pasp, new Uint8Array([
        d >> 24,
        // hSpacing
        d >> 16 & 255,
        d >> 8 & 255,
        d & 255,
        g >> 24,
        // vSpacing
        g >> 16 & 255,
        g >> 8 & 255,
        g & 255
      ]))
    );
  }
}
k.types = void 0;
k.HDLR_TYPES = void 0;
k.STTS = void 0;
k.STSC = void 0;
k.STCO = void 0;
k.STSZ = void 0;
k.VMHD = void 0;
k.SMHD = void 0;
k.STSD = void 0;
k.FTYP = void 0;
k.DINF = void 0;
const Yo = 9e4;
function ir(i, e, t = 1, s = !1) {
  const n = i * e * t;
  return s ? Math.round(n) : n;
}
function rd(i, e, t = 1, s = !1) {
  return ir(i, e, 1 / t, s);
}
function ps(i, e = !1) {
  return ir(i, 1e3, 1 / Yo, e);
}
function ad(i, e = 1) {
  return ir(i, Yo, 1 / e);
}
function la(i) {
  const {
    baseTime: e,
    timescale: t,
    trackId: s
  } = i;
  return `${e / t} (${e}/${t}) trackId: ${s}`;
}
const od = 10 * 1e3, ld = 1024, cd = 1152, ud = 1536;
let ns = null, qi = null;
function ca(i, e, t, s) {
  return {
    duration: e,
    size: t,
    cts: s,
    flags: {
      isLeading: 0,
      isDependedOn: 0,
      hasRedundancy: 0,
      degradPrio: 0,
      dependsOn: i ? 2 : 1,
      isNonSync: i ? 0 : 1
    }
  };
}
class ri extends rt {
  constructor(e, t, s, n) {
    if (super("mp4-remuxer", n), this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = null, this._initDTS = null, this.nextVideoTs = null, this.nextAudioTs = null, this.videoSampleDuration = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.videoTrackConfig = void 0, this.observer = e, this.config = t, this.typeSupported = s, this.ISGenerated = !1, ns === null) {
      const a = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      ns = a ? parseInt(a[1]) : 0;
    }
    if (qi === null) {
      const r = navigator.userAgent.match(/Safari\/(\d+)/i);
      qi = r ? parseInt(r[1]) : 0;
    }
  }
  destroy() {
    this.config = this.videoTrackConfig = this._initPTS = this._initDTS = null;
  }
  resetTimeStamp(e) {
    const t = this._initPTS;
    (!t || !e || e.trackId !== t.trackId || e.baseTime !== t.baseTime || e.timescale !== t.timescale) && this.log(`Reset initPTS: ${t && la(t)} > ${e && la(e)}`), this._initPTS = this._initDTS = e;
  }
  resetNextTimestamp() {
    this.log("reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1;
  }
  resetInitSegment() {
    this.log("ISGenerated flag reset"), this.ISGenerated = !1, this.videoTrackConfig = void 0;
  }
  getVideoStartPts(e) {
    let t = !1;
    const s = e[0].pts, n = e.reduce((r, a) => {
      let o = a.pts, c = o - r;
      return c < -4294967296 && (t = !0, o = tt(o, s), c = o - r), c > 0 ? r : o;
    }, s);
    return t && this.debug("PTS rollover detected"), n;
  }
  remux(e, t, s, n, r, a, o, c) {
    let l, u, h, d, g, f, m = r, p = r;
    const T = e.pid > -1, E = t.pid > -1, v = t.samples.length, x = e.samples.length > 0, A = o && v > 0 || v > 1;
    if ((!T || x) && (!E || A) || this.ISGenerated || o) {
      if (this.ISGenerated) {
        var S, L, I, R;
        const W = this.videoTrackConfig;
        (W && (t.width !== W.width || t.height !== W.height || ((S = t.pixelRatio) == null ? void 0 : S[0]) !== ((L = W.pixelRatio) == null ? void 0 : L[0]) || ((I = t.pixelRatio) == null ? void 0 : I[1]) !== ((R = W.pixelRatio) == null ? void 0 : R[1])) || !W && A || this.nextAudioTs === null && x) && this.resetInitSegment();
      }
      this.ISGenerated || (h = this.generateIS(e, t, r, a));
      const w = this.isVideoContiguous;
      let O = -1, K;
      if (A && (O = hd(t.samples), !w && this.config.forceKeyFrameOnDiscontinuity))
        if (f = !0, O > 0) {
          this.warn(`Dropped ${O} out of ${v} video samples due to a missing keyframe`);
          const W = this.getVideoStartPts(t.samples);
          t.samples = t.samples.slice(O), t.dropped += O, p += (t.samples[0].pts - W) / t.inputTimeScale, K = p;
        } else O === -1 && (this.warn(`No keyframe found out of ${v} video samples`), f = !1);
      if (this.ISGenerated) {
        if (x && A) {
          const W = this.getVideoStartPts(t.samples), P = (tt(e.samples[0].pts, W) - W) / t.inputTimeScale;
          m += Math.max(0, P), p += Math.max(0, -P);
        }
        if (x) {
          if (e.samplerate || (this.warn("regenerate InitSegment as audio detected"), h = this.generateIS(e, t, r, a)), u = this.remuxAudio(e, m, this.isAudioContiguous, a, E || A || c === j.AUDIO ? p : void 0), A) {
            const W = u ? u.endPTS - u.startPTS : 0;
            t.inputTimeScale || (this.warn("regenerate InitSegment as video detected"), h = this.generateIS(e, t, r, a)), l = this.remuxVideo(t, p, w, W);
          }
        } else A && (l = this.remuxVideo(t, p, w, 0));
        l && (l.firstKeyFrame = O, l.independent = O !== -1, l.firstKeyFramePTS = K);
      }
    }
    return this.ISGenerated && this._initPTS && this._initDTS && (s.samples.length && (g = zo(s, r, this._initPTS, this._initDTS)), n.samples.length && (d = Xo(n, r, this._initPTS))), {
      audio: u,
      video: l,
      initSegment: h,
      independent: f,
      text: d,
      id3: g
    };
  }
  computeInitPts(e, t, s, n) {
    const r = Math.round(s * t);
    let a = tt(e, r);
    if (a < r + t)
      for (this.log(`Adjusting PTS for rollover in timeline near ${(r - a) / t} ${n}`); a < r + t; )
        a += 8589934592;
    return a - r;
  }
  generateIS(e, t, s, n) {
    const r = e.samples, a = t.samples, o = this.typeSupported, c = {}, l = this._initPTS;
    let u = !l || n, h = "audio/mp4", d, g, f, m = -1;
    if (u && (d = g = 1 / 0), e.config && r.length) {
      switch (e.timescale = e.samplerate, e.segmentCodec) {
        case "mp3":
          o.mpeg ? (h = "audio/mpeg", e.codec = "") : o.mp3 && (e.codec = "mp3");
          break;
        case "ac3":
          e.codec = "ac-3";
          break;
      }
      c.audio = {
        id: "audio",
        container: h,
        codec: e.codec,
        initSegment: e.segmentCodec === "mp3" && o.mpeg ? new Uint8Array(0) : k.initSegment([e]),
        metadata: {
          channelCount: e.channelCount
        }
      }, u && (m = e.id, f = e.inputTimeScale, !l || f !== l.timescale ? d = g = this.computeInitPts(r[0].pts, f, s, "audio") : u = !1);
    }
    if (t.sps && t.pps && a.length) {
      if (t.timescale = t.inputTimeScale, c.video = {
        id: "main",
        container: "video/mp4",
        codec: t.codec,
        initSegment: k.initSegment([t]),
        metadata: {
          width: t.width,
          height: t.height
        }
      }, u)
        if (m = t.id, f = t.inputTimeScale, !l || f !== l.timescale) {
          const p = this.getVideoStartPts(a), T = tt(a[0].dts, p), E = this.computeInitPts(T, f, s, "video"), v = this.computeInitPts(p, f, s, "video");
          g = Math.min(g, E), d = Math.min(d, v);
        } else
          u = !1;
      this.videoTrackConfig = {
        width: t.width,
        height: t.height,
        pixelRatio: t.pixelRatio
      };
    }
    if (Object.keys(c).length)
      return this.ISGenerated = !0, u ? (l && this.warn(`Timestamps at playlist time: ${n ? "" : "~"}${s} ${d / f} != initPTS: ${l.baseTime / l.timescale} (${l.baseTime}/${l.timescale}) trackId: ${l.trackId}`), this.log(`Found initPTS at playlist time: ${s} offset: ${d / f} (${d}/${f}) trackId: ${m}`), this._initPTS = {
        baseTime: d,
        timescale: f,
        trackId: m
      }, this._initDTS = {
        baseTime: g,
        timescale: f,
        trackId: m
      }) : d = f = void 0, {
        tracks: c,
        initPTS: d,
        timescale: f,
        trackId: m
      };
  }
  remuxVideo(e, t, s, n) {
    const r = e.inputTimeScale, a = e.samples, o = [], c = a.length, l = this._initPTS, u = l.baseTime * r / l.timescale;
    let h = this.nextVideoTs, d = 8, g = this.videoSampleDuration, f, m, p = Number.POSITIVE_INFINITY, T = Number.NEGATIVE_INFINITY, E = !1;
    if (!s || h === null) {
      const F = u + t * r, M = a[0].pts - tt(a[0].dts, a[0].pts);
      ns && h !== null && Math.abs(F - M - (h + u)) < 15e3 ? s = !0 : h = F - M - u;
    }
    const v = h + u;
    for (let F = 0; F < c; F++) {
      const M = a[F];
      M.pts = tt(M.pts, v), M.dts = tt(M.dts, v), M.dts < a[F > 0 ? F - 1 : F].dts && (E = !0);
    }
    E && a.sort(function(F, M) {
      const te = F.dts - M.dts, oe = F.pts - M.pts;
      return te || oe;
    }), f = a[0].dts, m = a[a.length - 1].dts;
    const x = m - f, A = x ? Math.round(x / (c - 1)) : g || e.inputTimeScale / 30;
    if (s) {
      const F = f - v, M = F > A, te = F < -1;
      if ((M || te) && (M ? this.warn(`${(e.segmentCodec || "").toUpperCase()}: ${ps(F, !0)} ms (${F}dts) hole between fragments detected at ${t.toFixed(3)}`) : this.warn(`${(e.segmentCodec || "").toUpperCase()}: ${ps(-F, !0)} ms (${F}dts) overlapping between fragments detected at ${t.toFixed(3)}`), !te || v >= a[0].pts || ns)) {
        f = v;
        const oe = a[0].pts - F;
        if (M)
          a[0].dts = f, a[0].pts = oe;
        else {
          let Q = !0;
          for (let ie = 0; ie < a.length && !(a[ie].dts > oe && Q); ie++) {
            const ke = a[ie].pts;
            if (a[ie].dts -= F, a[ie].pts -= F, ie < a.length - 1) {
              const Re = a[ie + 1].pts, be = a[ie].pts, je = Re <= be, Qe = Re <= ke;
              Q = je == Qe;
            }
          }
        }
        this.log(`Video: Initial PTS/DTS adjusted: ${ps(oe, !0)}/${ps(f, !0)}, delta: ${ps(F, !0)} ms`);
      }
    }
    f = Math.max(0, f);
    let _ = 0, S = 0, L = f;
    for (let F = 0; F < c; F++) {
      const M = a[F], te = M.units, oe = te.length;
      let Q = 0;
      for (let ie = 0; ie < oe; ie++)
        Q += te[ie].data.length;
      S += Q, _ += oe, M.length = Q, M.dts < L ? (M.dts = L, L += A / 4 | 0 || 1) : L = M.dts, p = Math.min(M.pts, p), T = Math.max(M.pts, T);
    }
    m = a[c - 1].dts;
    const I = S + 4 * _ + 8;
    let R;
    try {
      R = new Uint8Array(I);
    } catch (F) {
      this.observer.emit(y.ERROR, y.ERROR, {
        type: q.MUX_ERROR,
        details: C.REMUX_ALLOC_ERROR,
        fatal: !1,
        error: F,
        bytes: I,
        reason: `fail allocating video mdat ${I}`
      });
      return;
    }
    const w = new DataView(R.buffer);
    w.setUint32(0, I), R.set(k.types.mdat, 4);
    let O = !1, K = Number.POSITIVE_INFINITY, W = Number.POSITIVE_INFINITY, B = Number.NEGATIVE_INFINITY, P = Number.NEGATIVE_INFINITY;
    for (let F = 0; F < c; F++) {
      const M = a[F], te = M.units;
      let oe = 0;
      for (let ke = 0, Re = te.length; ke < Re; ke++) {
        const be = te[ke], je = be.data, Qe = be.data.byteLength;
        w.setUint32(d, Qe), d += 4, R.set(je, d), d += Qe, oe += 4 + Qe;
      }
      let Q;
      if (F < c - 1)
        g = a[F + 1].dts - M.dts, Q = a[F + 1].pts - M.pts;
      else {
        const ke = this.config, Re = F > 0 ? M.dts - a[F - 1].dts : A;
        if (Q = F > 0 ? M.pts - a[F - 1].pts : A, ke.stretchShortVideoTrack && this.nextAudioTs !== null) {
          const be = Math.floor(ke.maxBufferHole * r), je = (n ? p + n * r : this.nextAudioTs + u) - M.pts;
          je > be ? (g = je - Re, g < 0 ? g = Re : O = !0, this.log(`It is approximately ${je / 90} ms to the next segment; using duration ${g / 90} ms for the last video frame.`)) : g = Re;
        } else
          g = Re;
      }
      const ie = Math.round(M.pts - M.dts);
      K = Math.min(K, g), B = Math.max(B, g), W = Math.min(W, Q), P = Math.max(P, Q), o.push(ca(M.key, g, oe, ie));
    }
    if (o.length) {
      if (ns) {
        if (ns < 70) {
          const F = o[0].flags;
          F.dependsOn = 2, F.isNonSync = 0;
        }
      } else if (qi && P - W < B - K && A / B < 0.025 && o[0].cts === 0) {
        this.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
        let F = f;
        for (let M = 0, te = o.length; M < te; M++) {
          const oe = F + o[M].duration, Q = F + o[M].cts;
          if (M < te - 1) {
            const ie = oe + o[M + 1].cts;
            o[M].duration = ie - Q;
          } else
            o[M].duration = M ? o[M - 1].duration : A;
          o[M].cts = 0, F = oe;
        }
      }
    }
    g = O || !g ? A : g;
    const V = m + g;
    this.nextVideoTs = h = V - u, this.videoSampleDuration = g, this.isVideoContiguous = !0;
    const X = {
      data1: k.moof(e.sequenceNumber++, f, pe(e, {
        samples: o
      })),
      data2: R,
      startPTS: (p - u) / r,
      endPTS: (T + g - u) / r,
      startDTS: (f - u) / r,
      endDTS: h / r,
      type: "video",
      hasAudio: !1,
      hasVideo: !0,
      nb: o.length,
      dropped: e.dropped
    };
    return e.samples = [], e.dropped = 0, X;
  }
  getSamplesPerFrame(e) {
    switch (e.segmentCodec) {
      case "mp3":
        return cd;
      case "ac3":
        return ud;
      default:
        return ld;
    }
  }
  remuxAudio(e, t, s, n, r) {
    const a = e.inputTimeScale, o = e.samplerate ? e.samplerate : a, c = a / o, l = this.getSamplesPerFrame(e), u = l * c, h = this._initPTS, d = e.segmentCodec === "mp3" && this.typeSupported.mpeg, g = [], f = r !== void 0;
    let m = e.samples, p = d ? 0 : 8, T = this.nextAudioTs || -1;
    const E = h.baseTime * a / h.timescale, v = E + t * a;
    if (this.isAudioContiguous = s = s || m.length && T > 0 && (n && Math.abs(v - (T + E)) < 9e3 || Math.abs(tt(m[0].pts, v) - (T + E)) < 20 * u), m.forEach(function(P) {
      P.pts = tt(P.pts, v);
    }), !s || T < 0) {
      const P = m.length;
      if (m = m.filter((V) => V.pts >= 0), P !== m.length && this.warn(`Removed ${m.length - P} of ${P} samples (initPTS ${E} / ${a})`), !m.length)
        return;
      r === 0 ? T = 0 : n && !f ? T = Math.max(0, v - E) : T = m[0].pts - E;
    }
    if (e.segmentCodec === "aac") {
      const P = this.config.maxAudioFramesDrift;
      for (let V = 0, N = T + E; V < m.length; V++) {
        const H = m[V], X = H.pts, F = X - N, M = Math.abs(1e3 * F / a);
        if (F <= -P * u && f)
          V === 0 && (this.warn(`Audio frame @ ${(X / a).toFixed(3)}s overlaps marker by ${Math.round(1e3 * F / a)} ms.`), this.nextAudioTs = T = X - E, N = X);
        else if (F >= P * u && M < od && f) {
          let te = Math.round(F / u);
          for (N = X - te * u; N < 0 && te && u; )
            te--, N += u;
          V === 0 && (this.nextAudioTs = T = N - E), this.warn(`Injecting ${te} audio frames @ ${((N - E) / a).toFixed(3)}s due to ${Math.round(1e3 * F / a)} ms gap.`);
          for (let oe = 0; oe < te; oe++) {
            let Q = nd.getSilentFrame(e.parsedCodec || e.manifestCodec || e.codec, e.channelCount);
            Q || (this.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), Q = H.unit.subarray()), m.splice(V, 0, {
              unit: Q,
              pts: N
            }), N += u, V++;
          }
        }
        H.pts = N, N += u;
      }
    }
    let x = null, A = null, _, S = 0, L = m.length;
    for (; L--; )
      S += m[L].unit.byteLength;
    for (let P = 0, V = m.length; P < V; P++) {
      const N = m[P], H = N.unit;
      let X = N.pts;
      if (A !== null) {
        const M = g[P - 1];
        M.duration = Math.round((X - A) / c);
      } else if (s && e.segmentCodec === "aac" && (X = T + E), x = X, S > 0) {
        S += p;
        try {
          _ = new Uint8Array(S);
        } catch (M) {
          this.observer.emit(y.ERROR, y.ERROR, {
            type: q.MUX_ERROR,
            details: C.REMUX_ALLOC_ERROR,
            fatal: !1,
            error: M,
            bytes: S,
            reason: `fail allocating audio mdat ${S}`
          });
          return;
        }
        d || (new DataView(_.buffer).setUint32(0, S), _.set(k.types.mdat, 4));
      } else
        return;
      _.set(H, p);
      const F = H.byteLength;
      p += F, g.push(ca(!0, l, F, 0)), A = X;
    }
    const I = g.length;
    if (!I)
      return;
    const R = g[g.length - 1];
    T = A - E, this.nextAudioTs = T + c * R.duration;
    const w = d ? new Uint8Array(0) : k.moof(e.sequenceNumber++, x / c, pe({}, e, {
      samples: g
    }));
    e.samples = [];
    const O = (x - E) / a, K = this.nextAudioTs / a, B = {
      data1: w,
      data2: _,
      startPTS: O,
      endPTS: K,
      startDTS: O,
      endDTS: K,
      type: "audio",
      hasAudio: !0,
      hasVideo: !1,
      nb: I
    };
    return this.isAudioContiguous = !0, B;
  }
}
function tt(i, e) {
  let t;
  if (e === null)
    return i;
  for (e < i ? t = -8589934592 : t = 8589934592; Math.abs(i - e) > 4294967296; )
    i += t;
  return i;
}
function hd(i) {
  for (let e = 0; e < i.length; e++)
    if (i[e].key)
      return e;
  return -1;
}
function zo(i, e, t, s) {
  const n = i.samples.length;
  if (!n)
    return;
  const r = i.inputTimeScale;
  for (let o = 0; o < n; o++) {
    const c = i.samples[o];
    c.pts = tt(c.pts - t.baseTime * r / t.timescale, e * r) / r, c.dts = tt(c.dts - s.baseTime * r / s.timescale, e * r) / r;
  }
  const a = i.samples;
  return i.samples = [], {
    samples: a
  };
}
function Xo(i, e, t) {
  const s = i.samples.length;
  if (!s)
    return;
  const n = i.inputTimeScale;
  for (let a = 0; a < s; a++) {
    const o = i.samples[a];
    o.pts = tt(o.pts - t.baseTime * n / t.timescale, e * n) / n;
  }
  i.samples.sort((a, o) => a.pts - o.pts);
  const r = i.samples;
  return i.samples = [], {
    samples: r
  };
}
class dd extends rt {
  constructor(e, t, s, n) {
    super("passthrough-remuxer", n), this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = null, this.initTracks = void 0, this.lastEndTime = null, this.isVideoContiguous = !1;
  }
  destroy() {
  }
  resetTimeStamp(e) {
    this.lastEndTime = null;
    const t = this.initPTS;
    t && e && t.baseTime === e.baseTime && t.timescale === e.timescale || (this.initPTS = e);
  }
  resetNextTimestamp() {
    this.isVideoContiguous = !1, this.lastEndTime = null;
  }
  resetInitSegment(e, t, s, n) {
    this.audioCodec = t, this.videoCodec = s, this.generateInitSegment(e, n), this.emitInitSegment = !0;
  }
  generateInitSegment(e, t) {
    let {
      audioCodec: s,
      videoCodec: n
    } = this;
    if (!(e != null && e.byteLength)) {
      this.initTracks = void 0, this.initData = void 0;
      return;
    }
    const {
      audio: r,
      video: a
    } = this.initData = to(e);
    if (t)
      Jc(e, t);
    else {
      const c = r || a;
      c != null && c.encrypted && this.warn(`Init segment with encrypted track with has no key ("${c.codec}")!`);
    }
    r && (s = ua(r, ye.AUDIO, this)), a && (n = ua(a, ye.VIDEO, this));
    const o = {};
    r && a ? o.audiovideo = {
      container: "video/mp4",
      codec: s + "," + n,
      supplemental: a.supplemental,
      encrypted: a.encrypted,
      initSegment: e,
      id: "main"
    } : r ? o.audio = {
      container: "audio/mp4",
      codec: s,
      encrypted: r.encrypted,
      initSegment: e,
      id: "audio"
    } : a ? o.video = {
      container: "video/mp4",
      codec: n,
      supplemental: a.supplemental,
      encrypted: a.encrypted,
      initSegment: e,
      id: "main"
    } : this.warn("initSegment does not contain moov or trak boxes."), this.initTracks = o;
  }
  remux(e, t, s, n, r, a) {
    var o, c;
    let {
      initPTS: l,
      lastEndTime: u
    } = this;
    const h = {
      audio: void 0,
      video: void 0,
      text: n,
      id3: s,
      initSegment: void 0
    };
    G(u) || (u = this.lastEndTime = r || 0);
    const d = t.samples;
    if (!d.length)
      return h;
    const g = {
      initPTS: void 0,
      timescale: void 0,
      trackId: void 0
    };
    let f = this.initData;
    if ((o = f) != null && o.length || (this.generateInitSegment(d), f = this.initData), !((c = f) != null && c.length))
      return this.warn("Failed to generate initSegment."), h;
    this.emitInitSegment && (g.tracks = this.initTracks, this.emitInitSegment = !1);
    const m = tu(d, f, this), p = f.audio ? m[f.audio.id] : null, T = f.video ? m[f.video.id] : null, E = Ws(T, 1 / 0), v = Ws(p, 1 / 0), x = Ws(T, 0, !0), A = Ws(p, 0, !0);
    let _ = r, S = 0;
    const L = p && (!T || !l && v < E || l && l.trackId === f.audio.id), I = L ? p : T;
    if (I) {
      const N = I.timescale, H = I.start - r * N, X = L ? f.audio.id : f.video.id;
      _ = I.start / N, S = L ? A - v : x - E, (a || !l) && (fd(l, _, r, S) || N !== l.timescale) && (l && this.warn(`Timestamps at playlist time: ${a ? "" : "~"}${r} ${H / N} != initPTS: ${l.baseTime / l.timescale} (${l.baseTime}/${l.timescale}) trackId: ${l.trackId}`), this.log(`Found initPTS at playlist time: ${r} offset: ${_ - r} (${H}/${N}) trackId: ${X}`), l = null, g.initPTS = H, g.timescale = N, g.trackId = X);
    } else
      this.warn(`No audio or video samples found for initPTS at playlist time: ${r}`);
    l ? (g.initPTS = l.baseTime, g.timescale = l.timescale, g.trackId = l.trackId) : ((!g.timescale || g.trackId === void 0 || g.initPTS === void 0) && (this.warn("Could not set initPTS"), g.initPTS = _, g.timescale = 1, g.trackId = -1), this.initPTS = l = {
      baseTime: g.initPTS,
      timescale: g.timescale,
      trackId: g.trackId
    });
    const R = _ - l.baseTime / l.timescale, w = R + S;
    S > 0 ? this.lastEndTime = w : (this.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
    const O = !!f.audio, K = !!f.video;
    let W = "";
    O && (W += "audio"), K && (W += "video");
    const B = (f.audio ? f.audio.encrypted : !1) || (f.video ? f.video.encrypted : !1), P = {
      data1: d,
      startPTS: R,
      startDTS: R,
      endPTS: w,
      endDTS: w,
      type: W,
      hasAudio: O,
      hasVideo: K,
      nb: 1,
      dropped: 0,
      encrypted: B
    };
    h.audio = O && !K ? P : void 0, h.video = K ? P : void 0;
    const V = T == null ? void 0 : T.sampleCount;
    if (V) {
      const N = T.keyFrameIndex, H = N !== -1;
      P.nb = V, P.dropped = N === 0 || this.isVideoContiguous ? 0 : H ? N : V, P.independent = H, P.firstKeyFrame = N, H && T.keyFrameStart && (P.firstKeyFramePTS = (T.keyFrameStart - l.baseTime) / l.timescale), this.isVideoContiguous || (h.independent = H), this.isVideoContiguous || (this.isVideoContiguous = H), P.dropped && this.warn(`fmp4 does not start with IDR: firstIDR ${N}/${V} dropped: ${P.dropped} start: ${P.firstKeyFramePTS || "NA"}`);
    }
    return h.initSegment = g, h.id3 = zo(s, r, l, l), n.samples.length && (h.text = Xo(n, r, l)), h;
  }
}
function Ws(i, e, t = !1) {
  return (i == null ? void 0 : i.start) !== void 0 ? (i.start + (t ? i.duration : 0)) / i.timescale : e;
}
function fd(i, e, t, s) {
  if (i === null)
    return !0;
  const n = Math.max(s, 1), r = e - i.baseTime / i.timescale;
  return Math.abs(r - t) > n;
}
function ua(i, e, t) {
  const s = i.codec;
  return s && s.length > 4 ? s : e === ye.AUDIO ? s === "ec-3" || s === "ac-3" || s === "alac" ? s : s === "fLaC" || s === "Opus" ? mi(s, !1) : (t.warn(`Unhandled audio codec "${s}" in mp4 MAP`), s || "mp4a") : (t.warn(`Unhandled video codec "${s}" in mp4 MAP`), s || "avc1");
}
let Rt;
try {
  Rt = self.performance.now.bind(self.performance);
} catch {
  Rt = Date.now;
}
const ai = [{
  demux: Zh,
  remux: dd
}, {
  demux: Mt,
  remux: ri
}, {
  demux: Yh,
  remux: ri
}, {
  demux: Xh,
  remux: ri
}];
ai.splice(2, 0, {
  demux: zh,
  remux: ri
});
class ha {
  constructor(e, t, s, n, r, a) {
    this.asyncResult = !1, this.logger = void 0, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = e, this.typeSupported = t, this.config = s, this.id = r, this.logger = a;
  }
  configure(e) {
    this.transmuxConfig = e, this.decrypter && this.decrypter.reset();
  }
  push(e, t, s, n) {
    const r = s.transmuxing;
    r.executeStart = Rt();
    let a = new Uint8Array(e);
    const {
      currentTransmuxState: o,
      transmuxConfig: c
    } = this;
    n && (this.currentTransmuxState = n);
    const {
      contiguous: l,
      discontinuity: u,
      trackSwitch: h,
      accurateTimeOffset: d,
      timeOffset: g,
      initSegmentChange: f
    } = n || o, {
      audioCodec: m,
      videoCodec: p,
      defaultInitPts: T,
      duration: E,
      initSegmentData: v
    } = c, x = gd(a, t);
    if (x && ls(x.method)) {
      const L = this.getDecrypter(), I = Yn(x.method);
      if (L.isSync()) {
        let R = L.softwareDecrypt(a, x.key.buffer, x.iv.buffer, I);
        if (s.part > -1) {
          const O = L.flush();
          R = O && O.buffer;
        }
        if (!R)
          return r.executeEnd = Rt(), Yi(s);
        a = new Uint8Array(R);
      } else
        return this.asyncResult = !0, this.decryptionPromise = L.webCryptoDecrypt(a, x.key.buffer, x.iv.buffer, I).then((R) => {
          const w = this.push(R, null, s);
          return this.decryptionPromise = null, w;
        }), this.decryptionPromise;
    }
    const A = this.needsProbing(u, h);
    if (A) {
      const L = this.configureTransmuxer(a);
      if (L)
        return this.logger.warn(`[transmuxer] ${L.message}`), this.observer.emit(y.ERROR, y.ERROR, {
          type: q.MEDIA_ERROR,
          details: C.FRAG_PARSING_ERROR,
          fatal: !1,
          error: L,
          reason: L.message
        }), r.executeEnd = Rt(), Yi(s);
    }
    (u || h || f || A) && this.resetInitSegment(v, m, p, E, t), (u || f || A) && this.resetInitialTimestamp(T), l || this.resetContiguity();
    const _ = this.transmux(a, x, g, d, s);
    this.asyncResult = ks(_);
    const S = this.currentTransmuxState;
    return S.contiguous = !0, S.discontinuity = !1, S.trackSwitch = !1, r.executeEnd = Rt(), _;
  }
  // Due to data caching, flush calls can produce more than one TransmuxerResult (hence the Array type)
  flush(e) {
    const t = e.transmuxing;
    t.executeStart = Rt();
    const {
      decrypter: s,
      currentTransmuxState: n,
      decryptionPromise: r
    } = this;
    if (r)
      return this.asyncResult = !0, r.then(() => this.flush(e));
    const a = [], {
      timeOffset: o
    } = n;
    if (s) {
      const h = s.flush();
      h && a.push(this.push(h.buffer, null, e));
    }
    const {
      demuxer: c,
      remuxer: l
    } = this;
    if (!c || !l) {
      t.executeEnd = Rt();
      const h = [Yi(e)];
      return this.asyncResult ? Promise.resolve(h) : h;
    }
    const u = c.flush(o);
    return ks(u) ? (this.asyncResult = !0, u.then((h) => (this.flushRemux(a, h, e), a))) : (this.flushRemux(a, u, e), this.asyncResult ? Promise.resolve(a) : a);
  }
  flushRemux(e, t, s) {
    const {
      audioTrack: n,
      videoTrack: r,
      id3Track: a,
      textTrack: o
    } = t, {
      accurateTimeOffset: c,
      timeOffset: l
    } = this.currentTransmuxState;
    this.logger.log(`[transmuxer.ts]: Flushed ${this.id} sn: ${s.sn}${s.part > -1 ? " part: " + s.part : ""} of ${this.id === j.MAIN ? "level" : "track"} ${s.level}`);
    const u = this.remuxer.remux(n, r, a, o, l, c, !0, this.id);
    e.push({
      remuxResult: u,
      chunkMeta: s
    }), s.transmuxing.executeEnd = Rt();
  }
  resetInitialTimestamp(e) {
    const {
      demuxer: t,
      remuxer: s
    } = this;
    !t || !s || (t.resetTimeStamp(e), s.resetTimeStamp(e));
  }
  resetContiguity() {
    const {
      demuxer: e,
      remuxer: t
    } = this;
    !e || !t || (e.resetContiguity(), t.resetNextTimestamp());
  }
  resetInitSegment(e, t, s, n, r) {
    const {
      demuxer: a,
      remuxer: o
    } = this;
    !a || !o || (a.resetInitSegment(e, t, s, n), o.resetInitSegment(e, t, s, r));
  }
  destroy() {
    this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0);
  }
  transmux(e, t, s, n, r) {
    let a;
    return t && t.method === "SAMPLE-AES" ? a = this.transmuxSampleAes(e, t, s, n, r) : a = this.transmuxUnencrypted(e, s, n, r), a;
  }
  transmuxUnencrypted(e, t, s, n) {
    const {
      audioTrack: r,
      videoTrack: a,
      id3Track: o,
      textTrack: c
    } = this.demuxer.demux(e, t, !1, !this.config.progressive);
    return {
      remuxResult: this.remuxer.remux(r, a, o, c, t, s, !1, this.id),
      chunkMeta: n
    };
  }
  transmuxSampleAes(e, t, s, n, r) {
    return this.demuxer.demuxSampleAes(e, t, s).then((a) => ({
      remuxResult: this.remuxer.remux(a.audioTrack, a.videoTrack, a.id3Track, a.textTrack, s, n, !1, this.id),
      chunkMeta: r
    }));
  }
  configureTransmuxer(e) {
    const {
      config: t,
      observer: s,
      typeSupported: n
    } = this;
    let r;
    for (let h = 0, d = ai.length; h < d; h++) {
      var a;
      if ((a = ai[h].demux) != null && a.probe(e, this.logger)) {
        r = ai[h];
        break;
      }
    }
    if (!r)
      return new Error("Failed to find demuxer by probing fragment data");
    const o = this.demuxer, c = this.remuxer, l = r.remux, u = r.demux;
    (!c || !(c instanceof l)) && (this.remuxer = new l(s, t, n, this.logger)), (!o || !(o instanceof u)) && (this.demuxer = new u(s, t, n, this.logger), this.probe = u.probe);
  }
  needsProbing(e, t) {
    return !this.demuxer || !this.remuxer || e || t;
  }
  getDecrypter() {
    let e = this.decrypter;
    return e || (e = this.decrypter = new Wn(this.config)), e;
  }
}
function gd(i, e) {
  let t = null;
  return i.byteLength > 0 && (e == null ? void 0 : e.key) != null && e.iv !== null && e.method != null && (t = e), t;
}
const Yi = (i) => ({
  remuxResult: {},
  chunkMeta: i
});
function ks(i) {
  return "then" in i && i.then instanceof Function;
}
class md {
  constructor(e, t, s, n, r) {
    this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = e, this.videoCodec = t, this.initSegmentData = s, this.duration = n, this.defaultInitPts = r || null;
  }
}
class pd {
  constructor(e, t, s, n, r, a) {
    this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = e, this.contiguous = t, this.accurateTimeOffset = s, this.trackSwitch = n, this.timeOffset = r, this.initSegmentChange = a;
  }
}
let da = 0;
class Qo {
  constructor(e, t, s, n) {
    this.error = null, this.hls = void 0, this.id = void 0, this.instanceNo = da++, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0, this.onWorkerMessage = (c) => {
      const l = c.data, u = this.hls;
      if (!(!u || !(l != null && l.event) || l.instanceNo !== this.instanceNo))
        switch (l.event) {
          case "init": {
            var h;
            const d = (h = this.workerContext) == null ? void 0 : h.objectURL;
            d && self.URL.revokeObjectURL(d);
            break;
          }
          case "transmuxComplete": {
            this.handleTransmuxComplete(l.data);
            break;
          }
          case "flush": {
            this.onFlush(l.data);
            break;
          }
          // pass logs from the worker thread to the main logger
          case "workerLog": {
            u.logger[l.data.logType] && u.logger[l.data.logType](l.data.message);
            break;
          }
          default: {
            l.data = l.data || {}, l.data.frag = this.frag, l.data.part = this.part, l.data.id = this.id, u.trigger(l.event, l.data);
            break;
          }
        }
    }, this.onWorkerError = (c) => {
      if (!this.hls)
        return;
      const l = new Error(`${c.message}  (${c.filename}:${c.lineno})`);
      this.hls.config.enableWorker = !1, this.hls.logger.warn(`Error in "${this.id}" Web Worker, fallback to inline`), this.hls.trigger(y.ERROR, {
        type: q.OTHER_ERROR,
        details: C.INTERNAL_EXCEPTION,
        fatal: !1,
        event: "demuxerWorker",
        error: l
      });
    };
    const r = e.config;
    this.hls = e, this.id = t, this.useWorker = !!r.enableWorker, this.onTransmuxComplete = s, this.onFlush = n;
    const a = (c, l) => {
      l = l || {}, l.frag = this.frag || void 0, c === y.ERROR && (l = l, l.parent = this.id, l.part = this.part, this.error = l.error), this.hls.trigger(c, l);
    };
    this.observer = new Qn(), this.observer.on(y.FRAG_DECRYPTED, a), this.observer.on(y.ERROR, a);
    const o = Rr(r.preferManagedMediaSource);
    if (this.useWorker && typeof Worker < "u") {
      const c = this.hls.logger;
      if (r.workerPath || vh()) {
        try {
          r.workerPath ? (c.log(`loading Web Worker ${r.workerPath} for "${t}"`), this.workerContext = Sh(r.workerPath)) : (c.log(`injecting Web Worker for "${t}"`), this.workerContext = bh());
          const {
            worker: u
          } = this.workerContext;
          u.addEventListener("message", this.onWorkerMessage), u.addEventListener("error", this.onWorkerError), u.postMessage({
            instanceNo: this.instanceNo,
            cmd: "init",
            typeSupported: o,
            id: t,
            config: Te(r)
          });
        } catch (u) {
          c.warn(`Error setting up "${t}" Web Worker, fallback to inline`, u), this.terminateWorker(), this.error = null, this.transmuxer = new ha(this.observer, o, r, "", t, e.logger);
        }
        return;
      }
    }
    this.transmuxer = new ha(this.observer, o, r, "", t, e.logger);
  }
  reset() {
    if (this.frag = null, this.part = null, this.workerContext) {
      const e = this.instanceNo;
      this.instanceNo = da++;
      const t = this.hls.config, s = Rr(t.preferManagedMediaSource);
      this.workerContext.worker.postMessage({
        instanceNo: this.instanceNo,
        cmd: "reset",
        resetNo: e,
        typeSupported: s,
        id: this.id,
        config: Te(t)
      });
    }
  }
  terminateWorker() {
    if (this.workerContext) {
      const {
        worker: e
      } = this.workerContext;
      this.workerContext = null, e.removeEventListener("message", this.onWorkerMessage), e.removeEventListener("error", this.onWorkerError), xh(this.hls.config.workerPath);
    }
  }
  destroy() {
    if (this.workerContext)
      this.terminateWorker(), this.onWorkerMessage = this.onWorkerError = null;
    else {
      const t = this.transmuxer;
      t && (t.destroy(), this.transmuxer = null);
    }
    const e = this.observer;
    e && e.removeAllListeners(), this.frag = null, this.part = null, this.observer = null, this.hls = null;
  }
  push(e, t, s, n, r, a, o, c, l, u) {
    var h, d;
    l.transmuxing.start = self.performance.now();
    const {
      instanceNo: g,
      transmuxer: f
    } = this, m = a ? a.start : r.start, p = r.decryptdata, T = this.frag, E = !(T && r.cc === T.cc), v = !(T && l.level === T.level), x = T ? l.sn - T.sn : -1, A = this.part ? l.part - this.part.index : -1, _ = x === 0 && l.id > 1 && l.id === (T == null ? void 0 : T.stats.chunkCount), S = !v && (x === 1 || x === 0 && (A === 1 || _ && A <= 0)), L = self.performance.now();
    (v || x || r.stats.parsing.start === 0) && (r.stats.parsing.start = L), a && (A || !S) && (a.stats.parsing.start = L);
    const I = !(T && ((h = r.initSegment) == null ? void 0 : h.url) === ((d = T.initSegment) == null ? void 0 : d.url)), R = new pd(E, S, c, v, m, I);
    if (!S || E || I) {
      this.hls.logger.log(`[transmuxer-interface]: Starting new transmux session for ${r.type} sn: ${l.sn}${l.part > -1 ? " part: " + l.part : ""} ${this.id === j.MAIN ? "level" : "track"}: ${l.level} id: ${l.id}
        discontinuity: ${E}
        trackSwitch: ${v}
        contiguous: ${S}
        accurateTimeOffset: ${c}
        timeOffset: ${m}
        initSegmentChange: ${I}`);
      const w = new md(s, n, t, o, u);
      this.configureTransmuxer(w);
    }
    if (this.frag = r, this.part = a, this.workerContext)
      this.workerContext.worker.postMessage({
        instanceNo: g,
        cmd: "demux",
        data: e,
        decryptdata: p,
        chunkMeta: l,
        state: R
      }, e instanceof ArrayBuffer ? [e] : []);
    else if (f) {
      const w = f.push(e, p, l, R);
      ks(w) ? w.then((O) => {
        this.handleTransmuxComplete(O);
      }).catch((O) => {
        this.transmuxerError(O, l, "transmuxer-interface push error");
      }) : this.handleTransmuxComplete(w);
    }
  }
  flush(e) {
    e.transmuxing.start = self.performance.now();
    const {
      instanceNo: t,
      transmuxer: s
    } = this;
    if (this.workerContext)
      this.workerContext.worker.postMessage({
        instanceNo: t,
        cmd: "flush",
        chunkMeta: e
      });
    else if (s) {
      const n = s.flush(e);
      ks(n) ? n.then((r) => {
        this.handleFlushResult(r, e);
      }).catch((r) => {
        this.transmuxerError(r, e, "transmuxer-interface flush error");
      }) : this.handleFlushResult(n, e);
    }
  }
  transmuxerError(e, t, s) {
    this.hls && (this.error = e, this.hls.trigger(y.ERROR, {
      type: q.MEDIA_ERROR,
      details: C.FRAG_PARSING_ERROR,
      chunkMeta: t,
      frag: this.frag || void 0,
      part: this.part || void 0,
      fatal: !1,
      error: e,
      err: e,
      reason: s
    }));
  }
  handleFlushResult(e, t) {
    e.forEach((s) => {
      this.handleTransmuxComplete(s);
    }), this.onFlush(t);
  }
  configureTransmuxer(e) {
    const {
      instanceNo: t,
      transmuxer: s
    } = this;
    this.workerContext ? this.workerContext.worker.postMessage({
      instanceNo: t,
      cmd: "configure",
      config: e
    }) : s && s.configure(e);
  }
  handleTransmuxComplete(e) {
    e.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(e);
  }
}
const fa = 100;
class yd extends Xn {
  constructor(e, t, s) {
    super(e, t, s, "audio-stream-controller", j.AUDIO), this.mainAnchor = null, this.mainFragLoading = null, this.audioOnly = !1, this.bufferedTrack = null, this.switchingTrack = null, this.trackId = -1, this.waitingData = null, this.mainDetails = null, this.flushing = !1, this.bufferFlushed = !1, this.cachedTrackLoadedData = null, this.registerListeners();
  }
  onHandlerDestroying() {
    this.unregisterListeners(), super.onHandlerDestroying(), this.resetItem();
  }
  resetItem() {
    this.mainDetails = this.mainAnchor = this.mainFragLoading = this.bufferedTrack = this.switchingTrack = this.waitingData = this.cachedTrackLoadedData = null;
  }
  registerListeners() {
    super.registerListeners();
    const {
      hls: e
    } = this;
    e.on(y.LEVEL_LOADED, this.onLevelLoaded, this), e.on(y.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.on(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(y.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(y.BUFFER_RESET, this.onBufferReset, this), e.on(y.BUFFER_CREATED, this.onBufferCreated, this), e.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(y.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(y.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(y.FRAG_LOADING, this.onFragLoading, this), e.on(y.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (super.unregisterListeners(), e.off(y.LEVEL_LOADED, this.onLevelLoaded, this), e.off(y.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.off(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(y.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(y.BUFFER_RESET, this.onBufferReset, this), e.off(y.BUFFER_CREATED, this.onBufferCreated, this), e.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(y.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(y.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(y.FRAG_LOADING, this.onFragLoading, this), e.off(y.FRAG_BUFFERED, this.onFragBuffered, this));
  }
  // INIT_PTS_FOUND is triggered when the video track parsed in the stream-controller has a new PTS value
  onInitPtsFound(e, {
    frag: t,
    id: s,
    initPTS: n,
    timescale: r,
    trackId: a
  }) {
    if (s === j.MAIN) {
      const o = t.cc, c = this.fragCurrent;
      if (this.initPTS[o] = {
        baseTime: n,
        timescale: r,
        trackId: a
      }, this.log(`InitPTS for cc: ${o} found from main: ${n / r} (${n}/${r}) trackId: ${a}`), this.mainAnchor = t, this.state === D.WAITING_INIT_PTS) {
        const l = this.waitingData;
        (!l && !this.loadingParts || l && l.frag.cc !== o) && this.syncWithAnchor(t, l == null ? void 0 : l.frag);
      } else !this.hls.hasEnoughToStart && c && c.cc !== o ? (c.abortRequests(), this.syncWithAnchor(t, c)) : this.state === D.IDLE && this.tick();
    }
  }
  getLoadPosition() {
    return !this.startFragRequested && this.nextLoadPosition >= 0 ? this.nextLoadPosition : super.getLoadPosition();
  }
  syncWithAnchor(e, t) {
    var s;
    const n = ((s = this.mainFragLoading) == null ? void 0 : s.frag) || null;
    if (t && (n == null ? void 0 : n.cc) === t.cc)
      return;
    const r = (n || e).cc, a = this.getLevelDetails(), o = this.getLoadPosition(), c = fo(a, r, o);
    c && (this.log(`Syncing with main frag at ${c.start} cc ${c.cc}`), this.startFragRequested = !1, this.nextLoadPosition = c.start, this.resetLoadingState(), this.state === D.IDLE && this.doTickIdle());
  }
  startLoad(e, t) {
    if (!this.levels) {
      this.startPosition = e, this.state = D.STOPPED;
      return;
    }
    const s = this.lastCurrentTime;
    this.stopLoad(), this.setInterval(fa), s > 0 && e === -1 ? (this.log(`Override startPosition with lastCurrentTime @${s.toFixed(3)}`), e = s, this.state = D.IDLE) : this.state = D.WAITING_TRACK, this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset, this.startPosition = t ? -1 : e, this.tick();
  }
  doTick() {
    switch (this.state) {
      case D.IDLE:
        this.doTickIdle();
        break;
      case D.WAITING_TRACK: {
        const {
          levels: e,
          trackId: t
        } = this, s = e == null ? void 0 : e[t], n = s == null ? void 0 : s.details;
        if (n && !this.waitForLive(s)) {
          if (this.waitForCdnTuneIn(n))
            break;
          this.state = D.WAITING_INIT_PTS;
        }
        break;
      }
      case D.FRAG_LOADING_WAITING_RETRY: {
        this.checkRetryDate();
        break;
      }
      case D.WAITING_INIT_PTS: {
        const e = this.waitingData;
        if (e) {
          const {
            frag: t,
            part: s,
            cache: n,
            complete: r
          } = e, a = this.mainAnchor;
          if (this.initPTS[t.cc] !== void 0) {
            this.waitingData = null, this.state = D.FRAG_LOADING;
            const o = n.flush().buffer, c = {
              frag: t,
              part: s,
              payload: o,
              networkDetails: null
            };
            this._handleFragmentLoadProgress(c), r && super._handleFragmentLoadComplete(c);
          } else a && a.cc !== e.frag.cc && this.syncWithAnchor(a, e.frag);
        } else
          this.state = D.IDLE;
      }
    }
    this.onTickEnd();
  }
  resetLoadingState() {
    const e = this.waitingData;
    e && (this.fragmentTracker.removeFragment(e.frag), this.waitingData = null), super.resetLoadingState();
  }
  onTickEnd() {
    const {
      media: e
    } = this;
    e != null && e.readyState && (this.lastCurrentTime = e.currentTime);
  }
  doTickIdle() {
    var e;
    const {
      hls: t,
      levels: s,
      media: n,
      trackId: r
    } = this, a = t.config;
    if (!this.buffering || !n && !this.primaryPrefetch && (this.startFragRequested || !a.startFragPrefetch) || !(s != null && s[r]))
      return;
    const o = s[r], c = o.details;
    if (!c || this.waitForLive(o) || this.waitForCdnTuneIn(c)) {
      this.state = D.WAITING_TRACK, this.startFragRequested = !1;
      return;
    }
    const l = this.mediaBuffer ? this.mediaBuffer : this.media;
    this.bufferFlushed && l && (this.bufferFlushed = !1, this.afterBufferFlushed(l, ye.AUDIO, j.AUDIO));
    const u = this.getFwdBufferInfo(l, j.AUDIO);
    if (u === null)
      return;
    if (!this.switchingTrack && this._streamEnded(u, c)) {
      t.trigger(y.BUFFER_EOS, {
        type: "audio"
      }), this.state = D.ENDED;
      return;
    }
    const h = u.len, d = t.maxBufferLength, g = c.fragments, f = g[0].start, m = this.getLoadPosition(), p = this.flushing ? m : u.end;
    if (this.switchingTrack && n) {
      const v = m;
      c.PTSKnown && v < f && (u.end > f || u.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), n.currentTime = f + 0.05);
    }
    if (h >= d && !this.switchingTrack && p < g[g.length - 1].start)
      return;
    let T = this.getNextFragment(p, c);
    if (T && this.isLoopLoading(T, p) && (T = this.getNextFragmentLoopLoading(T, c, u, j.MAIN, d)), !T) {
      this.bufferFlushed = !0;
      return;
    }
    let E = ((e = this.mainFragLoading) == null ? void 0 : e.frag) || null;
    if (!this.audioOnly && this.startFragRequested && E && Le(T) && !T.endList && (!c.live || !this.loadingParts && p < this.hls.liveSyncPosition) && (this.fragmentTracker.getState(E) === Pe.OK && (this.mainFragLoading = E = null), E && Le(E))) {
      if (T.start > E.end) {
        const x = this.fragmentTracker.getFragAtPos(p, j.MAIN);
        x && x.end > E.end && (E = x, this.mainFragLoading = {
          frag: x,
          targetBufferTime: null
        });
      }
      if (T.start > E.end)
        return;
    }
    this.loadFragment(T, o, p);
  }
  onMediaDetaching(e, t) {
    this.bufferFlushed = this.flushing = !1, super.onMediaDetaching(e, t);
  }
  onAudioTracksUpdated(e, {
    audioTracks: t
  }) {
    this.resetTransmuxer(), this.levels = t.map((s) => new Is(s));
  }
  onAudioTrackSwitching(e, t) {
    const s = !!t.url;
    this.trackId = t.id;
    const {
      fragCurrent: n
    } = this;
    n && (n.abortRequests(), this.removeUnbufferedFrags(n.start)), this.resetLoadingState(), s ? (this.switchingTrack = t, this.flushAudioIfNeeded(t), this.state !== D.STOPPED && (this.setInterval(fa), this.state = D.IDLE, this.tick())) : (this.resetTransmuxer(), this.switchingTrack = null, this.bufferedTrack = t, this.clearInterval());
  }
  onManifestLoading() {
    super.onManifestLoading(), this.bufferFlushed = this.flushing = this.audioOnly = !1, this.resetItem(), this.trackId = -1;
  }
  onLevelLoaded(e, t) {
    this.mainDetails = t.details;
    const s = this.cachedTrackLoadedData;
    s && (this.cachedTrackLoadedData = null, this.onAudioTrackLoaded(y.AUDIO_TRACK_LOADED, s));
  }
  onAudioTrackLoaded(e, t) {
    var s;
    const {
      levels: n
    } = this, {
      details: r,
      id: a,
      groupId: o,
      track: c
    } = t;
    if (!n) {
      this.warn(`Audio tracks reset while loading track ${a} "${c.name}" of "${o}"`);
      return;
    }
    const l = this.mainDetails;
    if (!l || r.endCC > l.endCC || l.expired) {
      this.cachedTrackLoadedData = t, this.state !== D.STOPPED && (this.state = D.WAITING_TRACK);
      return;
    }
    this.cachedTrackLoadedData = null, this.log(`Audio track ${a} "${c.name}" of "${o}" loaded [${r.startSN},${r.endSN}]${r.lastPartSn ? `[part-${r.lastPartSn}-${r.lastPartIndex}]` : ""},duration:${r.totalduration}`);
    const u = n[a];
    let h = 0;
    if (r.live || (s = u.details) != null && s.live) {
      if (this.checkLiveUpdate(r), r.deltaUpdateFailed)
        return;
      if (u.details) {
        var d;
        h = this.alignPlaylists(r, u.details, (d = this.levelLastLoaded) == null ? void 0 : d.details);
      }
      r.alignedSliding || (wo(r, l), r.alignedSliding || Si(r, l), h = r.fragmentStart);
    }
    u.details = r, this.levelLastLoaded = u, this.startFragRequested || this.setStartPosition(l, h), this.hls.trigger(y.AUDIO_TRACK_UPDATED, {
      details: r,
      id: a,
      groupId: t.groupId
    }), this.state === D.WAITING_TRACK && !this.waitForCdnTuneIn(r) && (this.state = D.IDLE), this.tick();
  }
  _handleFragmentLoadProgress(e) {
    var t;
    const s = e.frag, {
      part: n,
      payload: r
    } = e, {
      config: a,
      trackId: o,
      levels: c
    } = this;
    if (!c) {
      this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
      return;
    }
    const l = c[o];
    if (!l) {
      this.warn("Audio track is undefined on fragment load progress");
      return;
    }
    const u = l.details;
    if (!u) {
      this.warn("Audio track details undefined on fragment load progress"), this.removeUnbufferedFrags(s.start);
      return;
    }
    const h = a.defaultAudioCodec || l.audioCodec || "mp4a.40.2";
    let d = this.transmuxer;
    d || (d = this.transmuxer = new Qo(this.hls, j.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
    const g = this.initPTS[s.cc], f = (t = s.initSegment) == null ? void 0 : t.data;
    if (g !== void 0) {
      const p = n ? n.index : -1, T = p !== -1, E = new qn(s.level, s.sn, s.stats.chunkCount, r.byteLength, p, T);
      d.push(r, f, h, "", s, n, u.totalduration, !1, E, g);
    } else {
      this.log(`Unknown video PTS for cc ${s.cc}, waiting for video PTS before demuxing audio frag ${s.sn} of [${u.startSN} ,${u.endSN}],track ${o}`);
      const {
        cache: m
      } = this.waitingData = this.waitingData || {
        frag: s,
        part: n,
        cache: new Do(),
        complete: !1
      };
      m.push(new Uint8Array(r)), this.state !== D.STOPPED && (this.state = D.WAITING_INIT_PTS);
    }
  }
  _handleFragmentLoadComplete(e) {
    if (this.waitingData) {
      this.waitingData.complete = !0;
      return;
    }
    super._handleFragmentLoadComplete(e);
  }
  onBufferReset() {
    this.mediaBuffer = null;
  }
  onBufferCreated(e, t) {
    this.bufferFlushed = this.flushing = !1;
    const s = t.tracks.audio;
    s && (this.mediaBuffer = s.buffer || null);
  }
  onFragLoading(e, t) {
    !this.audioOnly && t.frag.type === j.MAIN && Le(t.frag) && (this.mainFragLoading = t, this.state === D.IDLE && this.tick());
  }
  onFragBuffered(e, t) {
    const {
      frag: s,
      part: n
    } = t;
    if (s.type !== j.AUDIO) {
      !this.audioOnly && s.type === j.MAIN && !s.elementaryStreams.video && !s.elementaryStreams.audiovideo && (this.audioOnly = !0, this.mainFragLoading = null);
      return;
    }
    if (this.fragContextChanged(s)) {
      this.warn(`Fragment ${s.sn}${n ? " p: " + n.index : ""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack ? this.switchingTrack.name : "false"}`);
      return;
    }
    if (Le(s)) {
      this.fragPrevious = s;
      const r = this.switchingTrack;
      r && (this.bufferedTrack = r, this.switchingTrack = null, this.hls.trigger(y.AUDIO_TRACK_SWITCHED, fe({}, r)));
    }
    this.fragBufferedComplete(s, n), this.media && this.tick();
  }
  onError(e, t) {
    var s;
    if (t.fatal) {
      this.state = D.ERROR;
      return;
    }
    switch (t.details) {
      case C.FRAG_GAP:
      case C.FRAG_PARSING_ERROR:
      case C.FRAG_DECRYPT_ERROR:
      case C.FRAG_LOAD_ERROR:
      case C.FRAG_LOAD_TIMEOUT:
      case C.KEY_LOAD_ERROR:
      case C.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(j.AUDIO, t);
        break;
      case C.AUDIO_TRACK_LOAD_ERROR:
      case C.AUDIO_TRACK_LOAD_TIMEOUT:
      case C.LEVEL_PARSING_ERROR:
        !t.levelRetry && this.state === D.WAITING_TRACK && ((s = t.context) == null ? void 0 : s.type) === re.AUDIO_TRACK && (this.state = D.IDLE);
        break;
      case C.BUFFER_ADD_CODEC_ERROR:
      case C.BUFFER_APPEND_ERROR:
        if (t.parent !== "audio")
          return;
        this.reduceLengthAndFlushBuffer(t) || this.resetLoadingState();
        break;
      case C.BUFFER_FULL_ERROR:
        if (t.parent !== "audio")
          return;
        this.reduceLengthAndFlushBuffer(t) && (this.bufferedTrack = null, super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"));
        break;
      case C.INTERNAL_EXCEPTION:
        this.recoverWorkerError(t);
        break;
    }
  }
  onBufferFlushing(e, {
    type: t
  }) {
    t !== ye.VIDEO && (this.flushing = !0);
  }
  onBufferFlushed(e, {
    type: t
  }) {
    if (t !== ye.VIDEO) {
      this.flushing = !1, this.bufferFlushed = !0, this.state === D.ENDED && (this.state = D.IDLE);
      const s = this.mediaBuffer || this.media;
      s && (this.afterBufferFlushed(s, t, j.AUDIO), this.tick());
    }
  }
  _handleTransmuxComplete(e) {
    var t;
    const s = "audio", {
      hls: n
    } = this, {
      remuxResult: r,
      chunkMeta: a
    } = e, o = this.getCurrentContext(a);
    if (!o) {
      this.resetWhenMissingContext(a);
      return;
    }
    const {
      frag: c,
      part: l,
      level: u
    } = o, {
      details: h
    } = u, {
      audio: d,
      text: g,
      id3: f,
      initSegment: m
    } = r;
    if (this.fragContextChanged(c) || !h) {
      this.fragmentTracker.removeFragment(c);
      return;
    }
    if (this.state = D.PARSING, this.switchingTrack && d && this.completeAudioSwitch(this.switchingTrack), m != null && m.tracks) {
      const p = c.initSegment || c;
      if (this.unhandledEncryptionError(m, c))
        return;
      this._bufferInitSegment(u, m.tracks, p, a), n.trigger(y.FRAG_PARSING_INIT_SEGMENT, {
        frag: p,
        id: s,
        tracks: m.tracks
      });
    }
    if (d) {
      const {
        startPTS: p,
        endPTS: T,
        startDTS: E,
        endDTS: v
      } = d;
      l && (l.elementaryStreams[ye.AUDIO] = {
        startPTS: p,
        endPTS: T,
        startDTS: E,
        endDTS: v
      }), c.setElementaryStreamInfo(ye.AUDIO, p, T, E, v), this.bufferFragmentData(d, c, l, a);
    }
    if (f != null && (t = f.samples) != null && t.length) {
      const p = pe({
        id: s,
        frag: c,
        details: h
      }, f);
      n.trigger(y.FRAG_PARSING_METADATA, p);
    }
    if (g) {
      const p = pe({
        id: s,
        frag: c,
        details: h
      }, g);
      n.trigger(y.FRAG_PARSING_USERDATA, p);
    }
  }
  _bufferInitSegment(e, t, s, n) {
    if (this.state !== D.PARSING || (t.video && delete t.video, t.audiovideo && delete t.audiovideo, !t.audio))
      return;
    const r = t.audio;
    r.id = j.AUDIO;
    const a = e.audioCodec;
    this.log(`Init audio buffer, container:${r.container}, codecs[level/parsed]=[${a}/${r.codec}]`), a && a.split(",").length === 1 && (r.levelCodec = a), this.hls.trigger(y.BUFFER_CODECS, t);
    const o = r.initSegment;
    if (o != null && o.byteLength) {
      const c = {
        type: "audio",
        frag: s,
        part: null,
        chunkMeta: n,
        parent: s.type,
        data: o
      };
      this.hls.trigger(y.BUFFER_APPENDING, c);
    }
    this.tickImmediate();
  }
  loadFragment(e, t, s) {
    const n = this.fragmentTracker.getState(e);
    if (this.switchingTrack || n === Pe.NOT_LOADED || n === Pe.PARTIAL) {
      var r;
      if (!Le(e))
        this._loadInitSegment(e, t);
      else if ((r = t.details) != null && r.live && !this.initPTS[e.cc]) {
        this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`), this.state = D.WAITING_INIT_PTS;
        const a = this.mainDetails;
        a && a.fragmentStart !== t.details.fragmentStart && Si(t.details, a);
      } else
        super.loadFragment(e, t, s);
    } else
      this.clearTrackerIfNeeded(e);
  }
  flushAudioIfNeeded(e) {
    if (this.media && this.bufferedTrack) {
      const {
        name: t,
        lang: s,
        assocLang: n,
        characteristics: r,
        audioCodec: a,
        channels: o
      } = this.bufferedTrack;
      Xt({
        name: t,
        lang: s,
        assocLang: n,
        characteristics: r,
        audioCodec: a,
        channels: o
      }, e, Yt) || (yi(e.url, this.hls) ? (this.log("Switching audio track : flushing all audio"), super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"), this.bufferedTrack = null) : this.bufferedTrack = e);
    }
  }
  completeAudioSwitch(e) {
    const {
      hls: t
    } = this;
    this.flushAudioIfNeeded(e), this.bufferedTrack = e, this.switchingTrack = null, t.trigger(y.AUDIO_TRACK_SWITCHED, fe({}, e));
  }
}
class nr extends rt {
  constructor(e, t) {
    super(t, e.logger), this.hls = void 0, this.canLoad = !1, this.timer = -1, this.hls = e;
  }
  destroy() {
    this.clearTimer(), this.hls = this.log = this.warn = null;
  }
  clearTimer() {
    this.timer !== -1 && (self.clearTimeout(this.timer), this.timer = -1);
  }
  startLoad() {
    this.canLoad = !0, this.loadPlaylist();
  }
  stopLoad() {
    this.canLoad = !1, this.clearTimer();
  }
  switchParams(e, t, s) {
    const n = t == null ? void 0 : t.renditionReports;
    if (n) {
      let r = -1;
      for (let a = 0; a < n.length; a++) {
        const o = n[a];
        let c;
        try {
          c = new self.URL(o.URI, t.url).href;
        } catch (l) {
          this.warn(`Could not construct new URL for Rendition Report: ${l}`), c = o.URI || "";
        }
        if (c === e) {
          r = a;
          break;
        } else c === e.substring(0, c.length) && (r = a);
      }
      if (r !== -1) {
        const a = n[r], o = parseInt(a["LAST-MSN"]) || t.lastPartSn;
        let c = parseInt(a["LAST-PART"]) || t.lastPartIndex;
        if (this.hls.config.lowLatencyMode) {
          const u = Math.min(t.age - t.partTarget, t.targetduration);
          c >= 0 && u > t.partTarget && (c += 1);
        }
        const l = s && _r(s);
        return new kr(o, c >= 0 ? c : void 0, l);
      }
    }
  }
  loadPlaylist(e) {
    this.clearTimer();
  }
  loadingPlaylist(e, t) {
    this.clearTimer();
  }
  shouldLoadPlaylist(e) {
    return this.canLoad && !!e && !!e.url && (!e.details || e.details.live);
  }
  getUrlWithDirectives(e, t) {
    if (t)
      try {
        return t.addDirectives(e);
      } catch (s) {
        this.warn(`Could not construct new URL with HLS Delivery Directives: ${s}`);
      }
    return e;
  }
  playlistLoaded(e, t, s) {
    const {
      details: n,
      stats: r
    } = t, a = self.performance.now(), o = r.loading.first ? Math.max(0, a - r.loading.first) : 0;
    n.advancedDateTime = Date.now() - o;
    const c = this.hls.config.timelineOffset;
    if (c !== n.appliedTimelineOffset) {
      const u = Math.max(c || 0, 0);
      n.appliedTimelineOffset = u, n.fragments.forEach((h) => {
        h.setStart(h.playlistOffset + u);
      });
    }
    if (n.live || s != null && s.live) {
      const u = "levelInfo" in t ? t.levelInfo : t.track;
      if (n.reloaded(s), s && n.fragments.length > 0) {
        ch(s, n, this);
        const E = n.playlistParsingError;
        if (E) {
          this.warn(E);
          const v = this.hls;
          if (!v.config.ignorePlaylistParsingErrors) {
            var l;
            const {
              networkDetails: x
            } = t;
            v.trigger(y.ERROR, {
              type: q.NETWORK_ERROR,
              details: C.LEVEL_PARSING_ERROR,
              fatal: !1,
              url: n.url,
              error: E,
              reason: E.message,
              level: t.level || void 0,
              parent: (l = n.fragments[0]) == null ? void 0 : l.type,
              networkDetails: x,
              stats: r
            });
            return;
          }
          n.playlistParsingError = null;
        }
      }
      n.requestScheduled === -1 && (n.requestScheduled = r.loading.start);
      const h = this.hls.mainForwardBufferInfo, d = h ? h.end - h.len : 0, g = (n.edge - d) * 1e3, f = Io(n, g);
      if (n.requestScheduled + f < a ? n.requestScheduled = a : n.requestScheduled += f, this.log(`live playlist ${e} ${n.advanced ? "REFRESHED " + n.lastPartSn + "-" + n.lastPartIndex : n.updated ? "UPDATED" : "MISSED"}`), !this.canLoad || !n.live)
        return;
      let m, p, T;
      if (n.canBlockReload && n.endSN && n.advanced) {
        const E = this.hls.config.lowLatencyMode, v = n.lastPartSn, x = n.endSN, A = n.lastPartIndex, _ = A !== -1, S = v === x;
        _ ? S ? (p = x + 1, T = E ? 0 : A) : (p = v, T = E ? A + 1 : n.maxPartIndex) : p = x + 1;
        const L = n.age, I = L + n.ageHeader;
        let R = Math.min(I - n.partTarget, n.targetduration * 1.5);
        if (R > 0) {
          if (I > n.targetduration * 3)
            this.log(`Playlist last advanced ${L.toFixed(2)}s ago. Omitting segment and part directives.`), p = void 0, T = void 0;
          else if (s != null && s.tuneInGoal && I - n.partTarget > s.tuneInGoal)
            this.warn(`CDN Tune-in goal increased from: ${s.tuneInGoal} to: ${R} with playlist age: ${n.age}`), R = 0;
          else {
            const w = Math.floor(R / n.targetduration);
            if (p += w, T !== void 0) {
              const O = Math.round(R % n.targetduration / n.partTarget);
              T += O;
            }
            this.log(`CDN Tune-in age: ${n.ageHeader}s last advanced ${L.toFixed(2)}s goal: ${R} skip sn ${w} to part ${T}`);
          }
          n.tuneInGoal = R;
        }
        if (m = this.getDeliveryDirectives(n, t.deliveryDirectives, p, T), E || !S) {
          n.requestScheduled = a, this.loadingPlaylist(u, m);
          return;
        }
      } else (n.canBlockReload || n.canSkipUntil) && (m = this.getDeliveryDirectives(n, t.deliveryDirectives, p, T));
      m && p !== void 0 && n.canBlockReload && (n.requestScheduled = r.loading.first + Math.max(f - o * 2, f / 2)), this.scheduleLoading(u, m, n);
    } else
      this.clearTimer();
  }
  scheduleLoading(e, t, s) {
    const n = s || e.details;
    if (!n) {
      this.loadingPlaylist(e, t);
      return;
    }
    const r = self.performance.now(), a = n.requestScheduled;
    if (r >= a) {
      this.loadingPlaylist(e, t);
      return;
    }
    const o = a - r;
    this.log(`reload live playlist ${e.name || e.bitrate + "bps"} in ${Math.round(o)} ms`), this.clearTimer(), this.timer = self.setTimeout(() => this.loadingPlaylist(e, t), o);
  }
  getDeliveryDirectives(e, t, s, n) {
    let r = _r(e);
    return t != null && t.skip && e.deltaUpdateFailed && (s = t.msn, n = t.part, r = ii.No), new kr(s, n, r);
  }
  checkRetry(e) {
    const t = e.details, s = Ti(e), n = e.errorAction, {
      action: r,
      retryCount: a = 0,
      retryConfig: o
    } = n || {}, c = !!n && !!o && (r === $e.RetryRequest || !n.resolved && r === $e.SendAlternateToPenaltyBox);
    if (c) {
      var l;
      if (a >= o.maxNumRetry)
        return !1;
      if (s && (l = e.context) != null && l.deliveryDirectives)
        this.warn(`Retrying playlist loading ${a + 1}/${o.maxNumRetry} after "${t}" without delivery-directives`), this.loadPlaylist();
      else {
        const u = jn(o, a);
        this.clearTimer(), this.timer = self.setTimeout(() => this.loadPlaylist(), u), this.warn(`Retrying playlist loading ${a + 1}/${o.maxNumRetry} after "${t}" in ${u}ms`);
      }
      e.levelRetry = !0, n.resolved = !0;
    }
    return c;
  }
}
function Zo(i, e) {
  if (i.length !== e.length)
    return !1;
  for (let t = 0; t < i.length; t++)
    if (!Cs(i[t].attrs, e[t].attrs))
      return !1;
  return !0;
}
function Cs(i, e, t) {
  const s = i["STABLE-RENDITION-ID"];
  return s && !t ? s === e["STABLE-RENDITION-ID"] : !(t || ["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED", "ASSOC-LANGUAGE"]).some((n) => i[n] !== e[n]);
}
function An(i, e) {
  return e.label.toLowerCase() === i.name.toLowerCase() && (!e.language || e.language.toLowerCase() === (i.lang || "").toLowerCase());
}
class Td extends nr {
  constructor(e) {
    super(e, "audio-track-controller"), this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.registerListeners();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.MANIFEST_PARSED, this.onManifestParsed, this), e.on(y.LEVEL_LOADING, this.onLevelLoading, this), e.on(y.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(y.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(y.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.MANIFEST_PARSED, this.onManifestParsed, this), e.off(y.LEVEL_LOADING, this.onLevelLoading, this), e.off(y.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(y.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(y.ERROR, this.onError, this);
  }
  destroy() {
    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, super.destroy();
  }
  onManifestLoading() {
    this.tracks = [], this.tracksInGroup = [], this.groupIds = null, this.currentTrack = null, this.trackId = -1, this.selectDefaultTrack = !0;
  }
  onManifestParsed(e, t) {
    this.tracks = t.audioTracks || [];
  }
  onAudioTrackLoaded(e, t) {
    const {
      id: s,
      groupId: n,
      details: r
    } = t, a = this.tracksInGroup[s];
    if (!a || a.groupId !== n) {
      this.warn(`Audio track with id:${s} and group:${n} not found in active group ${a == null ? void 0 : a.groupId}`);
      return;
    }
    const o = a.details;
    a.details = t.details, this.log(`Audio track ${s} "${a.name}" lang:${a.lang} group:${n} loaded [${r.startSN}-${r.endSN}]`), s === this.trackId && this.playlistLoaded(s, t, o);
  }
  onLevelLoading(e, t) {
    this.switchLevel(t.level);
  }
  onLevelSwitching(e, t) {
    this.switchLevel(t.level);
  }
  switchLevel(e) {
    const t = this.hls.levels[e];
    if (!t)
      return;
    const s = t.audioGroups || null, n = this.groupIds;
    let r = this.currentTrack;
    if (!s || (n == null ? void 0 : n.length) !== (s == null ? void 0 : s.length) || s != null && s.some((o) => (n == null ? void 0 : n.indexOf(o)) === -1)) {
      this.groupIds = s, this.trackId = -1, this.currentTrack = null;
      const o = this.tracks.filter((d) => !s || s.indexOf(d.groupId) !== -1);
      if (o.length)
        this.selectDefaultTrack && !o.some((d) => d.default) && (this.selectDefaultTrack = !1), o.forEach((d, g) => {
          d.id = g;
        });
      else if (!r && !this.tracksInGroup.length)
        return;
      this.tracksInGroup = o;
      const c = this.hls.config.audioPreference;
      if (!r && c) {
        const d = yt(c, o, Yt);
        if (d > -1)
          r = o[d];
        else {
          const g = yt(c, this.tracks);
          r = this.tracks[g];
        }
      }
      let l = this.findTrackId(r);
      l === -1 && r && (l = this.findTrackId(null));
      const u = {
        audioTracks: o
      };
      this.log(`Updating audio tracks, ${o.length} track(s) found in group(s): ${s == null ? void 0 : s.join(",")}`), this.hls.trigger(y.AUDIO_TRACKS_UPDATED, u);
      const h = this.trackId;
      if (l !== -1 && h === -1)
        this.setAudioTrack(l);
      else if (o.length && h === -1) {
        var a;
        const d = new Error(`No audio track selected for current audio group-ID(s): ${(a = this.groupIds) == null ? void 0 : a.join(",")} track count: ${o.length}`);
        this.warn(d.message), this.hls.trigger(y.ERROR, {
          type: q.MEDIA_ERROR,
          details: C.AUDIO_TRACK_LOAD_ERROR,
          fatal: !0,
          error: d
        });
      }
    }
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === re.AUDIO_TRACK && t.context.id === this.trackId && (!this.groupIds || this.groupIds.indexOf(t.context.groupId) !== -1) && this.checkRetry(t);
  }
  get allAudioTracks() {
    return this.tracks;
  }
  get audioTracks() {
    return this.tracksInGroup;
  }
  get audioTrack() {
    return this.trackId;
  }
  set audioTrack(e) {
    this.selectDefaultTrack = !1, this.setAudioTrack(e);
  }
  setAudioOption(e) {
    const t = this.hls;
    if (t.config.audioPreference = e, e) {
      const s = this.allAudioTracks;
      if (this.selectDefaultTrack = !1, s.length) {
        const n = this.currentTrack;
        if (n && Xt(e, n, Yt))
          return n;
        const r = yt(e, this.tracksInGroup, Yt);
        if (r > -1) {
          const a = this.tracksInGroup[r];
          return this.setAudioTrack(r), a;
        } else if (n) {
          let a = t.loadLevel;
          a === -1 && (a = t.firstAutoLevel);
          const o = Cu(e, t.levels, s, a, Yt);
          if (o === -1)
            return null;
          t.nextLoadLevel = o;
        }
        if (e.channels || e.audioCodec) {
          const a = yt(e, s);
          if (a > -1)
            return s[a];
        }
      }
    }
    return null;
  }
  setAudioTrack(e) {
    const t = this.tracksInGroup;
    if (e < 0 || e >= t.length) {
      this.warn(`Invalid audio track id: ${e}`);
      return;
    }
    this.selectDefaultTrack = !1;
    const s = this.currentTrack, n = t[e], r = n.details && !n.details.live;
    if (e === this.trackId && n === s && r || (this.log(`Switching to audio-track ${e} "${n.name}" lang:${n.lang} group:${n.groupId} channels:${n.channels}`), this.trackId = e, this.currentTrack = n, this.hls.trigger(y.AUDIO_TRACK_SWITCHING, fe({}, n)), r))
      return;
    const a = this.switchParams(n.url, s == null ? void 0 : s.details, n.details);
    this.loadPlaylist(a);
  }
  findTrackId(e) {
    const t = this.tracksInGroup;
    for (let s = 0; s < t.length; s++) {
      const n = t[s];
      if (!(this.selectDefaultTrack && !n.default) && (!e || Xt(e, n, Yt)))
        return s;
    }
    if (e) {
      const {
        name: s,
        lang: n,
        assocLang: r,
        characteristics: a,
        audioCodec: o,
        channels: c
      } = e;
      for (let l = 0; l < t.length; l++) {
        const u = t[l];
        if (Xt({
          name: s,
          lang: n,
          assocLang: r,
          characteristics: a,
          audioCodec: o,
          channels: c
        }, u, Yt))
          return l;
      }
      for (let l = 0; l < t.length; l++) {
        const u = t[l];
        if (Cs(e.attrs, u.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))
          return l;
      }
      for (let l = 0; l < t.length; l++) {
        const u = t[l];
        if (Cs(e.attrs, u.attrs, ["LANGUAGE"]))
          return l;
      }
    }
    return -1;
  }
  loadPlaylist(e) {
    super.loadPlaylist();
    const t = this.currentTrack;
    this.shouldLoadPlaylist(t) && yi(t.url, this.hls) && this.scheduleLoading(t, e);
  }
  loadingPlaylist(e, t) {
    super.loadingPlaylist(e, t);
    const s = e.id, n = e.groupId, r = this.getUrlWithDirectives(e.url, t), a = e.details, o = a == null ? void 0 : a.age;
    this.log(`Loading audio-track ${s} "${e.name}" lang:${e.lang} group:${n}${(t == null ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${o && a.live ? " age " + o.toFixed(1) + (a.type && " " + a.type || "") : ""} ${r}`), this.hls.trigger(y.AUDIO_TRACK_LOADING, {
      url: r,
      id: s,
      groupId: n,
      deliveryDirectives: t || null,
      track: e
    });
  }
}
class Ed {
  constructor(e) {
    this.tracks = void 0, this.queues = {
      video: [],
      audio: [],
      audiovideo: []
    }, this.tracks = e;
  }
  destroy() {
    this.tracks = this.queues = null;
  }
  append(e, t, s) {
    if (this.queues === null || this.tracks === null)
      return;
    const n = this.queues[t];
    n.push(e), n.length === 1 && !s && this.executeNext(t);
  }
  appendBlocker(e) {
    return new Promise((t) => {
      const s = {
        label: "async-blocker",
        execute: t,
        onStart: () => {
        },
        onComplete: () => {
        },
        onError: () => {
        }
      };
      this.append(s, e);
    });
  }
  prependBlocker(e) {
    return new Promise((t) => {
      if (this.queues) {
        const s = {
          label: "async-blocker-prepend",
          execute: t,
          onStart: () => {
          },
          onComplete: () => {
          },
          onError: () => {
          }
        };
        this.queues[e].unshift(s);
      }
    });
  }
  removeBlockers() {
    this.queues !== null && [this.queues.video, this.queues.audio, this.queues.audiovideo].forEach((e) => {
      var t;
      const s = (t = e[0]) == null ? void 0 : t.label;
      (s === "async-blocker" || s === "async-blocker-prepend") && (e[0].execute(), e.splice(0, 1));
    });
  }
  unblockAudio(e) {
    if (this.queues === null)
      return;
    this.queues.audio[0] === e && this.shiftAndExecuteNext("audio");
  }
  executeNext(e) {
    if (this.queues === null || this.tracks === null)
      return;
    const t = this.queues[e];
    if (t.length) {
      const n = t[0];
      try {
        n.execute();
      } catch (r) {
        var s;
        if (n.onError(r), this.queues === null || this.tracks === null)
          return;
        const a = (s = this.tracks[e]) == null ? void 0 : s.buffer;
        a != null && a.updating || this.shiftAndExecuteNext(e);
      }
    }
  }
  shiftAndExecuteNext(e) {
    this.queues !== null && (this.queues[e].shift(), this.executeNext(e));
  }
  current(e) {
    var t;
    return ((t = this.queues) == null ? void 0 : t[e][0]) || null;
  }
  toString() {
    const {
      queues: e,
      tracks: t
    } = this;
    return e === null || t === null ? "<destroyed>" : `
${this.list("video")}
${this.list("audio")}
${this.list("audiovideo")}}`;
  }
  list(e) {
    var t, s;
    return (t = this.queues) != null && t[e] || (s = this.tracks) != null && s[e] ? `${e}: (${this.listSbInfo(e)}) ${this.listOps(e)}` : "";
  }
  listSbInfo(e) {
    var t;
    const s = (t = this.tracks) == null ? void 0 : t[e], n = s == null ? void 0 : s.buffer;
    return n ? `SourceBuffer${n.updating ? " updating" : ""}${s.ended ? " ended" : ""}${s.ending ? " ending" : ""}` : "none";
  }
  listOps(e) {
    var t;
    return ((t = this.queues) == null ? void 0 : t[e].map((s) => s.label).join(", ")) || "";
  }
}
const ga = /(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/, Jo = "HlsJsTrackRemovedError";
class vd extends Error {
  constructor(e) {
    super(e), this.name = Jo;
  }
}
class bd extends rt {
  constructor(e, t) {
    super("buffer-controller", e.logger), this.hls = void 0, this.fragmentTracker = void 0, this.details = null, this._objectUrl = null, this.operationQueue = null, this.bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.blockedAudioAppend = null, this.lastVideoAppendEnd = 0, this.appendSource = void 0, this.transferData = void 0, this.overrides = void 0, this.appendErrors = {
      audio: 0,
      video: 0,
      audiovideo: 0
    }, this.tracks = {}, this.sourceBuffers = [[null, null], [null, null]], this._onEndStreaming = (s) => {
      var n;
      this.hls && ((n = this.mediaSource) == null ? void 0 : n.readyState) === "open" && this.hls.pauseBuffering();
    }, this._onStartStreaming = (s) => {
      this.hls && this.hls.resumeBuffering();
    }, this._onMediaSourceOpen = (s) => {
      const {
        media: n,
        mediaSource: r
      } = this;
      s && this.log("Media source opened"), !(!n || !r) && (r.removeEventListener("sourceopen", this._onMediaSourceOpen), n.removeEventListener("emptied", this._onMediaEmptied), this.updateDuration(), this.hls.trigger(y.MEDIA_ATTACHED, {
        media: n,
        mediaSource: r
      }), this.mediaSource !== null && this.checkPendingTracks());
    }, this._onMediaSourceClose = () => {
      this.log("Media source closed");
    }, this._onMediaSourceEnded = () => {
      this.log("Media source ended");
    }, this._onMediaEmptied = () => {
      const {
        mediaSrc: s,
        _objectUrl: n
      } = this;
      s !== n && this.error(`Media element src was set while attaching MediaSource (${n} > ${s})`);
    }, this.hls = e, this.fragmentTracker = t, this.appendSource = Vc(Bt(e.config.preferManagedMediaSource)), this.initTracks(), this.registerListeners();
  }
  hasSourceTypes() {
    return Object.keys(this.tracks).length > 0;
  }
  destroy() {
    this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = this.blockedAudioAppend = null, this.transferData = this.overrides = void 0, this.operationQueue && (this.operationQueue.destroy(), this.operationQueue = null), this.hls = this.fragmentTracker = null, this._onMediaSourceOpen = this._onMediaSourceClose = null, this._onMediaSourceEnded = null, this._onStartStreaming = this._onEndStreaming = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.MANIFEST_PARSED, this.onManifestParsed, this), e.on(y.BUFFER_RESET, this.onBufferReset, this), e.on(y.BUFFER_APPENDING, this.onBufferAppending, this), e.on(y.BUFFER_CODECS, this.onBufferCodecs, this), e.on(y.BUFFER_EOS, this.onBufferEos, this), e.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(y.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(y.FRAG_PARSED, this.onFragParsed, this), e.on(y.FRAG_CHANGED, this.onFragChanged, this), e.on(y.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.MANIFEST_PARSED, this.onManifestParsed, this), e.off(y.BUFFER_RESET, this.onBufferReset, this), e.off(y.BUFFER_APPENDING, this.onBufferAppending, this), e.off(y.BUFFER_CODECS, this.onBufferCodecs, this), e.off(y.BUFFER_EOS, this.onBufferEos, this), e.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(y.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(y.FRAG_PARSED, this.onFragParsed, this), e.off(y.FRAG_CHANGED, this.onFragChanged, this), e.off(y.ERROR, this.onError, this);
  }
  transferMedia() {
    const {
      media: e,
      mediaSource: t
    } = this;
    if (!e)
      return null;
    const s = {};
    if (this.operationQueue) {
      const r = this.isUpdating();
      r || this.operationQueue.removeBlockers();
      const a = this.isQueued();
      (r || a) && this.warn(`Transfering MediaSource with${a ? " operations in queue" : ""}${r ? " updating SourceBuffer(s)" : ""} ${this.operationQueue}`), this.operationQueue.destroy();
    }
    const n = this.transferData;
    return !this.sourceBufferCount && n && n.mediaSource === t ? pe(s, n.tracks) : this.sourceBuffers.forEach((r) => {
      const [a] = r;
      a && (s[a] = pe({}, this.tracks[a]), this.removeBuffer(a)), r[0] = r[1] = null;
    }), {
      media: e,
      mediaSource: t,
      tracks: s
    };
  }
  initTracks() {
    const e = {};
    this.sourceBuffers = [[null, null], [null, null]], this.tracks = e, this.resetQueue(), this.resetAppendErrors(), this.lastMpegAudioChunk = this.blockedAudioAppend = null, this.lastVideoAppendEnd = 0;
  }
  onManifestLoading() {
    this.bufferCodecEventsTotal = 0, this.details = null;
  }
  onManifestParsed(e, t) {
    var s;
    let n = 2;
    (t.audio && !t.video || !t.altAudio) && (n = 1), this.bufferCodecEventsTotal = n, this.log(`${n} bufferCodec event(s) expected.`), (s = this.transferData) != null && s.mediaSource && this.sourceBufferCount && n && this.bufferCreated();
  }
  onMediaAttaching(e, t) {
    const s = this.media = t.media;
    this.transferData = this.overrides = void 0;
    const n = Bt(this.appendSource);
    if (n) {
      const r = !!t.mediaSource;
      (r || t.overrides) && (this.transferData = t, this.overrides = t.overrides);
      const a = this.mediaSource = t.mediaSource || new n();
      if (this.assignMediaSource(a), r)
        this._objectUrl = s.src, this.attachTransferred();
      else {
        const o = this._objectUrl = self.URL.createObjectURL(a);
        if (this.appendSource)
          try {
            s.removeAttribute("src");
            const c = self.ManagedMediaSource;
            s.disableRemotePlayback = s.disableRemotePlayback || c && a instanceof c, ma(s), Sd(s, o), s.load();
          } catch {
            s.src = o;
          }
        else
          s.src = o;
      }
      s.addEventListener("emptied", this._onMediaEmptied);
    }
  }
  assignMediaSource(e) {
    var t, s;
    this.log(`${((t = this.transferData) == null ? void 0 : t.mediaSource) === e ? "transferred" : "created"} media source: ${(s = e.constructor) == null ? void 0 : s.name}`), e.addEventListener("sourceopen", this._onMediaSourceOpen), e.addEventListener("sourceended", this._onMediaSourceEnded), e.addEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (e.addEventListener("startstreaming", this._onStartStreaming), e.addEventListener("endstreaming", this._onEndStreaming));
  }
  attachTransferred() {
    const e = this.media, t = this.transferData;
    if (!t || !e)
      return;
    const s = this.tracks, n = t.tracks, r = n ? Object.keys(n) : null, a = r ? r.length : 0, o = () => {
      Promise.resolve().then(() => {
        this.media && this.mediaSourceOpenOrEnded && this._onMediaSourceOpen();
      });
    };
    if (n && r && a) {
      if (!this.tracksReady) {
        this.hls.config.startFragPrefetch = !0, this.log("attachTransferred: waiting for SourceBuffer track info");
        return;
      }
      if (this.log(`attachTransferred: (bufferCodecEventsTotal ${this.bufferCodecEventsTotal})
required tracks: ${Te(s, (c, l) => c === "initSegment" ? void 0 : l)};
transfer tracks: ${Te(n, (c, l) => c === "initSegment" ? void 0 : l)}}`), !Ya(n, s)) {
        t.mediaSource = null, t.tracks = void 0;
        const c = e.currentTime, l = this.details, u = Math.max(c, (l == null ? void 0 : l.fragments[0].start) || 0);
        if (u - c > 1) {
          this.log(`attachTransferred: waiting for playback to reach new tracks start time ${c} -> ${u}`);
          return;
        }
        this.warn(`attachTransferred: resetting MediaSource for incompatible tracks ("${Object.keys(n)}"->"${Object.keys(s)}") start time: ${u} currentTime: ${c}`), this.onMediaDetaching(y.MEDIA_DETACHING, {}), this.onMediaAttaching(y.MEDIA_ATTACHING, t), e.currentTime = u;
        return;
      }
      this.transferData = void 0, r.forEach((c) => {
        const l = c, u = n[l];
        if (u) {
          const h = u.buffer;
          if (h) {
            const d = this.fragmentTracker, g = u.id;
            if (d.hasFragments(g) || d.hasParts(g)) {
              const p = se.getBuffered(h);
              d.detectEvictedFragments(l, p, g, null, !0);
            }
            const f = zi(l), m = [l, h];
            this.sourceBuffers[f] = m, h.updating && this.operationQueue && this.operationQueue.prependBlocker(l), this.trackSourceBuffer(l, u);
          }
        }
      }), o(), this.bufferCreated();
    } else
      this.log("attachTransferred: MediaSource w/o SourceBuffers"), o();
  }
  get mediaSourceOpenOrEnded() {
    var e;
    const t = (e = this.mediaSource) == null ? void 0 : e.readyState;
    return t === "open" || t === "ended";
  }
  onMediaDetaching(e, t) {
    const s = !!t.transferMedia;
    this.transferData = this.overrides = void 0;
    const {
      media: n,
      mediaSource: r,
      _objectUrl: a
    } = this;
    if (r) {
      if (this.log(`media source ${s ? "transferring" : "detaching"}`), s)
        this.sourceBuffers.forEach(([o]) => {
          o && this.removeBuffer(o);
        }), this.resetQueue();
      else {
        if (this.mediaSourceOpenOrEnded) {
          const o = r.readyState === "open";
          try {
            const c = r.sourceBuffers;
            for (let l = c.length; l--; )
              o && c[l].abort(), r.removeSourceBuffer(c[l]);
            o && r.endOfStream();
          } catch (c) {
            this.warn(`onMediaDetaching: ${c.message} while calling endOfStream`);
          }
        }
        this.sourceBufferCount && this.onBufferReset();
      }
      r.removeEventListener("sourceopen", this._onMediaSourceOpen), r.removeEventListener("sourceended", this._onMediaSourceEnded), r.removeEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (r.removeEventListener("startstreaming", this._onStartStreaming), r.removeEventListener("endstreaming", this._onEndStreaming)), this.mediaSource = null, this._objectUrl = null;
    }
    n && (n.removeEventListener("emptied", this._onMediaEmptied), s || (a && self.URL.revokeObjectURL(a), this.mediaSrc === a ? (n.removeAttribute("src"), this.appendSource && ma(n), n.load()) : this.warn("media|source.src was changed by a third party - skip cleanup")), this.media = null), this.hls.trigger(y.MEDIA_DETACHED, t);
  }
  onBufferReset() {
    this.sourceBuffers.forEach(([e]) => {
      e && this.resetBuffer(e);
    }), this.initTracks();
  }
  resetBuffer(e) {
    var t;
    const s = (t = this.tracks[e]) == null ? void 0 : t.buffer;
    if (this.removeBuffer(e), s)
      try {
        var n;
        (n = this.mediaSource) != null && n.sourceBuffers.length && this.mediaSource.removeSourceBuffer(s);
      } catch (r) {
        this.warn(`onBufferReset ${e}`, r);
      }
    delete this.tracks[e];
  }
  removeBuffer(e) {
    this.removeBufferListeners(e), this.sourceBuffers[zi(e)] = [null, null];
    const t = this.tracks[e];
    t && (t.buffer = void 0);
  }
  resetQueue() {
    this.operationQueue && this.operationQueue.destroy(), this.operationQueue = new Ed(this.tracks);
  }
  onBufferCodecs(e, t) {
    var s;
    const n = this.tracks, r = Object.keys(t);
    this.log(`BUFFER_CODECS: "${r}" (current SB count ${this.sourceBufferCount})`);
    const a = "audiovideo" in t && (n.audio || n.video) || n.audiovideo && ("audio" in t || "video" in t), o = !a && this.sourceBufferCount && this.media && r.some((c) => !n[c]);
    if (a || o) {
      this.warn(`Unsupported transition between "${Object.keys(n)}" and "${r}" SourceBuffers`);
      return;
    }
    r.forEach((c) => {
      var l, u;
      const h = t[c], {
        id: d,
        codec: g,
        levelCodec: f,
        container: m,
        metadata: p,
        supplemental: T
      } = h;
      let E = n[c];
      const v = (l = this.transferData) == null || (l = l.tracks) == null ? void 0 : l[c], x = v != null && v.buffer ? v : E, A = (x == null ? void 0 : x.pendingCodec) || (x == null ? void 0 : x.codec), _ = x == null ? void 0 : x.levelCodec;
      E || (E = n[c] = {
        buffer: void 0,
        listeners: [],
        codec: g,
        supplemental: T,
        container: m,
        levelCodec: f,
        metadata: p,
        id: d
      });
      const S = si(A, _), L = S == null ? void 0 : S.replace(ga, "$1");
      let I = si(g, f);
      const R = (u = I) == null ? void 0 : u.replace(ga, "$1");
      I && S && L !== R && (c.slice(0, 5) === "audio" && (I = mi(I, this.appendSource)), this.log(`switching codec ${A} to ${I}`), I !== (E.pendingCodec || E.codec) && (E.pendingCodec = I), E.container = m, this.appendChangeType(c, m, I));
    }), (this.tracksReady || this.sourceBufferCount) && (t.tracks = this.sourceBufferTracks), !this.sourceBufferCount && (this.bufferCodecEventsTotal > 1 && !this.tracks.video && !t.video && ((s = t.audio) == null ? void 0 : s.id) === "main" && (this.log("Main audio-only"), this.bufferCodecEventsTotal = 1), this.mediaSourceOpenOrEnded && this.checkPendingTracks());
  }
  get sourceBufferTracks() {
    return Object.keys(this.tracks).reduce((e, t) => {
      const s = this.tracks[t];
      return e[t] = {
        id: s.id,
        container: s.container,
        codec: s.codec,
        levelCodec: s.levelCodec
      }, e;
    }, {});
  }
  appendChangeType(e, t, s) {
    const n = `${t};codecs=${s}`, r = {
      label: `change-type=${n}`,
      execute: () => {
        const a = this.tracks[e];
        if (a) {
          const o = a.buffer;
          o != null && o.changeType && (this.log(`changing ${e} sourceBuffer type to ${n}`), o.changeType(n), a.codec = s, a.container = t);
        }
        this.shiftAndExecuteNext(e);
      },
      onStart: () => {
      },
      onComplete: () => {
      },
      onError: (a) => {
        this.warn(`Failed to change ${e} SourceBuffer type`, a);
      }
    };
    this.append(r, e, this.isPending(this.tracks[e]));
  }
  blockAudio(e) {
    var t;
    const s = e.start, n = s + e.duration * 0.05;
    if (((t = this.fragmentTracker.getAppendedFrag(s, j.MAIN)) == null ? void 0 : t.gap) === !0)
      return;
    const a = {
      label: "block-audio",
      execute: () => {
        var o;
        const c = this.tracks.video;
        (this.lastVideoAppendEnd > n || c != null && c.buffer && se.isBuffered(c.buffer, n) || ((o = this.fragmentTracker.getAppendedFrag(n, j.MAIN)) == null ? void 0 : o.gap) === !0) && (this.blockedAudioAppend = null, this.shiftAndExecuteNext("audio"));
      },
      onStart: () => {
      },
      onComplete: () => {
      },
      onError: (o) => {
        this.warn("Error executing block-audio operation", o);
      }
    };
    this.blockedAudioAppend = {
      op: a,
      frag: e
    }, this.append(a, "audio", !0);
  }
  unblockAudio() {
    const {
      blockedAudioAppend: e,
      operationQueue: t
    } = this;
    e && t && (this.blockedAudioAppend = null, t.unblockAudio(e.op));
  }
  onBufferAppending(e, t) {
    const {
      tracks: s
    } = this, {
      data: n,
      type: r,
      parent: a,
      frag: o,
      part: c,
      chunkMeta: l,
      offset: u
    } = t, h = l.buffering[r], {
      sn: d,
      cc: g
    } = o, f = self.performance.now();
    h.start = f;
    const m = o.stats.buffering, p = c ? c.stats.buffering : null;
    m.start === 0 && (m.start = f), p && p.start === 0 && (p.start = f);
    const T = s.audio;
    let E = !1;
    r === "audio" && (T == null ? void 0 : T.container) === "audio/mpeg" && (E = !this.lastMpegAudioChunk || l.id === 1 || this.lastMpegAudioChunk.sn !== l.sn, this.lastMpegAudioChunk = l);
    const v = s.video, x = v == null ? void 0 : v.buffer;
    if (x && d !== "initSegment") {
      const S = c || o, L = this.blockedAudioAppend;
      if (r === "audio" && a !== "main" && !this.blockedAudioAppend && !(v.ending || v.ended)) {
        const R = S.start + S.duration * 0.05, w = x.buffered, O = this.currentOp("video");
        !w.length && !O ? this.blockAudio(S) : !O && !se.isBuffered(x, R) && this.lastVideoAppendEnd < R && this.blockAudio(S);
      } else if (r === "video") {
        const I = S.end;
        if (L) {
          const R = L.frag.start;
          (I > R || I < this.lastVideoAppendEnd || se.isBuffered(x, R)) && this.unblockAudio();
        }
        this.lastVideoAppendEnd = I;
      }
    }
    const A = (c || o).start, _ = {
      label: `append-${r}`,
      execute: () => {
        var S;
        h.executeStart = self.performance.now();
        const L = (S = this.tracks[r]) == null ? void 0 : S.buffer;
        L && (E ? this.updateTimestampOffset(L, A, 0.1, r, d, g) : u !== void 0 && G(u) && this.updateTimestampOffset(L, u, 1e-6, r, d, g)), this.appendExecutor(n, r);
      },
      onStart: () => {
      },
      onComplete: () => {
        const S = self.performance.now();
        h.executeEnd = h.end = S, m.first === 0 && (m.first = S), p && p.first === 0 && (p.first = S);
        const L = {};
        this.sourceBuffers.forEach(([I, R]) => {
          I && (L[I] = se.getBuffered(R));
        }), this.appendErrors[r] = 0, r === "audio" || r === "video" ? this.appendErrors.audiovideo = 0 : (this.appendErrors.audio = 0, this.appendErrors.video = 0), this.hls.trigger(y.BUFFER_APPENDED, {
          type: r,
          frag: o,
          part: c,
          chunkMeta: l,
          parent: o.type,
          timeRanges: L
        });
      },
      onError: (S) => {
        var L;
        const I = {
          type: q.MEDIA_ERROR,
          parent: o.type,
          details: C.BUFFER_APPEND_ERROR,
          sourceBufferName: r,
          frag: o,
          part: c,
          chunkMeta: l,
          error: S,
          err: S,
          fatal: !1
        }, R = (L = this.media) == null ? void 0 : L.error;
        if (S.code === DOMException.QUOTA_EXCEEDED_ERR || S.name == "QuotaExceededError" || "quota" in S)
          I.details = C.BUFFER_FULL_ERROR;
        else if (S.code === DOMException.INVALID_STATE_ERR && this.mediaSourceOpenOrEnded && !R)
          I.errorAction = os(!0);
        else if (S.name === Jo && this.sourceBufferCount === 0)
          I.errorAction = os(!0);
        else {
          const w = ++this.appendErrors[r];
          this.warn(`Failed ${w}/${this.hls.config.appendErrorMaxRetry} times to append segment in "${r}" sourceBuffer (${R || "no media error"})`), (w >= this.hls.config.appendErrorMaxRetry || R) && (I.fatal = !0);
        }
        this.hls.trigger(y.ERROR, I);
      }
    };
    this.log(`queuing "${r}" append sn: ${d}${c ? " p: " + c.index : ""} of ${o.type === j.MAIN ? "level" : "track"} ${o.level} cc: ${g}`), this.append(_, r, this.isPending(this.tracks[r]));
  }
  getFlushOp(e, t, s) {
    return this.log(`queuing "${e}" remove ${t}-${s}`), {
      label: "remove",
      execute: () => {
        this.removeExecutor(e, t, s);
      },
      onStart: () => {
      },
      onComplete: () => {
        this.hls.trigger(y.BUFFER_FLUSHED, {
          type: e
        });
      },
      onError: (n) => {
        this.warn(`Failed to remove ${t}-${s} from "${e}" SourceBuffer`, n);
      }
    };
  }
  onBufferFlushing(e, t) {
    const {
      type: s,
      startOffset: n,
      endOffset: r
    } = t;
    s ? this.append(this.getFlushOp(s, n, r), s) : this.sourceBuffers.forEach(([a]) => {
      a && this.append(this.getFlushOp(a, n, r), a);
    });
  }
  onFragParsed(e, t) {
    const {
      frag: s,
      part: n
    } = t, r = [], a = n ? n.elementaryStreams : s.elementaryStreams;
    a[ye.AUDIOVIDEO] ? r.push("audiovideo") : (a[ye.AUDIO] && r.push("audio"), a[ye.VIDEO] && r.push("video"));
    const o = () => {
      const c = self.performance.now();
      s.stats.buffering.end = c, n && (n.stats.buffering.end = c);
      const l = n ? n.stats : s.stats;
      this.hls.trigger(y.FRAG_BUFFERED, {
        frag: s,
        part: n,
        stats: l,
        id: s.type
      });
    };
    r.length === 0 && this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${s.type} level: ${s.level} sn: ${s.sn}`), this.blockBuffers(o, r).catch((c) => {
      this.warn(`Fragment buffered callback ${c}`), this.stepOperationQueue(this.sourceBufferTypes);
    });
  }
  onFragChanged(e, t) {
    this.trimBuffers();
  }
  get bufferedToEnd() {
    return this.sourceBufferCount > 0 && !this.sourceBuffers.some(([e]) => {
      if (e) {
        const t = this.tracks[e];
        if (t)
          return !t.ended || t.ending;
      }
      return !1;
    });
  }
  // on BUFFER_EOS mark matching sourcebuffer(s) as "ending" and "ended" and queue endOfStream after remaining operations(s)
  // an undefined data.type will mark all buffers as EOS.
  onBufferEos(e, t) {
    var s;
    this.sourceBuffers.forEach(([a]) => {
      if (a) {
        const o = this.tracks[a];
        (!t.type || t.type === a) && (o.ending = !0, o.ended || (o.ended = !0, this.log(`${a} buffer reached EOS`)));
      }
    });
    const n = ((s = this.overrides) == null ? void 0 : s.endOfStream) !== !1;
    this.sourceBufferCount > 0 && !this.sourceBuffers.some(([a]) => {
      var o;
      return a && !((o = this.tracks[a]) != null && o.ended);
    }) ? n ? (this.log("Queueing EOS"), this.blockUntilOpen(() => {
      this.tracksEnded();
      const {
        mediaSource: a
      } = this;
      if (!a || a.readyState !== "open") {
        a && this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${a.readyState}`);
        return;
      }
      this.log("Calling mediaSource.endOfStream()"), a.endOfStream(), this.hls.trigger(y.BUFFERED_TO_END, void 0);
    })) : (this.tracksEnded(), this.hls.trigger(y.BUFFERED_TO_END, void 0)) : t.type === "video" && this.unblockAudio();
  }
  tracksEnded() {
    this.sourceBuffers.forEach(([e]) => {
      if (e !== null) {
        const t = this.tracks[e];
        t && (t.ending = !1);
      }
    });
  }
  onLevelUpdated(e, {
    details: t
  }) {
    t.fragments.length && (this.details = t, this.updateDuration());
  }
  updateDuration() {
    this.blockUntilOpen(() => {
      const e = this.getDurationAndRange();
      e && this.updateMediaSource(e);
    });
  }
  onError(e, t) {
    if (t.details === C.BUFFER_APPEND_ERROR && t.frag) {
      var s;
      const n = (s = t.errorAction) == null ? void 0 : s.nextAutoLevel;
      G(n) && n !== t.frag.level && this.resetAppendErrors();
    }
  }
  resetAppendErrors() {
    this.appendErrors = {
      audio: 0,
      video: 0,
      audiovideo: 0
    };
  }
  trimBuffers() {
    const {
      hls: e,
      details: t,
      media: s
    } = this;
    if (!s || t === null || !this.sourceBufferCount)
      return;
    const n = e.config, r = s.currentTime, a = t.levelTargetDuration, o = t.live && n.liveBackBufferLength !== null ? n.liveBackBufferLength : n.backBufferLength;
    if (G(o) && o >= 0) {
      const l = Math.max(o, a), u = Math.floor(r / a) * a - l;
      this.flushBackBuffer(r, a, u);
    }
    const c = n.frontBufferFlushThreshold;
    if (G(c) && c > 0) {
      const l = Math.max(n.maxBufferLength, c), u = Math.max(l, a), h = Math.floor(r / a) * a + u;
      this.flushFrontBuffer(r, a, h);
    }
  }
  flushBackBuffer(e, t, s) {
    this.sourceBuffers.forEach(([n, r]) => {
      if (r) {
        const o = se.getBuffered(r);
        if (o.length > 0 && s > o.start(0)) {
          var a;
          this.hls.trigger(y.BACK_BUFFER_REACHED, {
            bufferEnd: s
          });
          const c = this.tracks[n];
          if ((a = this.details) != null && a.live)
            this.hls.trigger(y.LIVE_BACK_BUFFER_REACHED, {
              bufferEnd: s
            });
          else if (c != null && c.ended) {
            this.log(`Cannot flush ${n} back buffer while SourceBuffer is in ended state`);
            return;
          }
          this.hls.trigger(y.BUFFER_FLUSHING, {
            startOffset: 0,
            endOffset: s,
            type: n
          });
        }
      }
    });
  }
  flushFrontBuffer(e, t, s) {
    this.sourceBuffers.forEach(([n, r]) => {
      if (r) {
        const a = se.getBuffered(r), o = a.length;
        if (o < 2)
          return;
        const c = a.start(o - 1), l = a.end(o - 1);
        if (s > c || e >= c && e <= l)
          return;
        this.hls.trigger(y.BUFFER_FLUSHING, {
          startOffset: c,
          endOffset: 1 / 0,
          type: n
        });
      }
    });
  }
  /**
   * Update Media Source duration to current level duration or override to Infinity if configuration parameter
   * 'liveDurationInfinity` is set to `true`
   * More details: https://github.com/video-dev/hls.js/issues/355
   */
  getDurationAndRange() {
    var e;
    const {
      details: t,
      mediaSource: s
    } = this;
    if (!t || !this.media || (s == null ? void 0 : s.readyState) !== "open")
      return null;
    const n = t.edge;
    if (t.live && this.hls.config.liveDurationInfinity) {
      if (t.fragments.length && s.setLiveSeekableRange) {
        const l = Math.max(0, t.fragmentStart), u = Math.max(l, n);
        return {
          duration: 1 / 0,
          start: l,
          end: u
        };
      }
      return {
        duration: 1 / 0
      };
    }
    const r = (e = this.overrides) == null ? void 0 : e.duration;
    if (r)
      return G(r) ? {
        duration: r
      } : null;
    const a = this.media.duration, o = G(s.duration) ? s.duration : 0;
    return n > o && n > a || !G(a) ? {
      duration: n
    } : null;
  }
  updateMediaSource({
    duration: e,
    start: t,
    end: s
  }) {
    const n = this.mediaSource;
    !this.media || !n || n.readyState !== "open" || (n.duration !== e && (G(e) && this.log(`Updating MediaSource duration to ${e.toFixed(3)}`), n.duration = e), t !== void 0 && s !== void 0 && (this.log(`MediaSource duration is set to ${n.duration}. Setting seekable range to ${t}-${s}.`), n.setLiveSeekableRange(t, s)));
  }
  get tracksReady() {
    const e = this.pendingTrackCount;
    return e > 0 && (e >= this.bufferCodecEventsTotal || this.isPending(this.tracks.audiovideo));
  }
  checkPendingTracks() {
    const {
      bufferCodecEventsTotal: e,
      pendingTrackCount: t,
      tracks: s
    } = this;
    if (this.log(`checkPendingTracks (pending: ${t} codec events expected: ${e}) ${Te(s)}`), this.tracksReady) {
      var n;
      const r = (n = this.transferData) == null ? void 0 : n.tracks;
      r && Object.keys(r).length ? this.attachTransferred() : this.createSourceBuffers();
    }
  }
  bufferCreated() {
    if (this.sourceBufferCount) {
      const e = {};
      this.sourceBuffers.forEach(([t, s]) => {
        if (t) {
          const n = this.tracks[t];
          e[t] = {
            buffer: s,
            container: n.container,
            codec: n.codec,
            supplemental: n.supplemental,
            levelCodec: n.levelCodec,
            id: n.id,
            metadata: n.metadata
          };
        }
      }), this.hls.trigger(y.BUFFER_CREATED, {
        tracks: e
      }), this.log(`SourceBuffers created. Running queue: ${this.operationQueue}`), this.sourceBuffers.forEach(([t]) => {
        this.executeNext(t);
      });
    } else {
      const e = new Error("could not create source buffer for media codec(s)");
      this.hls.trigger(y.ERROR, {
        type: q.MEDIA_ERROR,
        details: C.BUFFER_INCOMPATIBLE_CODECS_ERROR,
        fatal: !0,
        error: e,
        reason: e.message
      });
    }
  }
  createSourceBuffers() {
    const {
      tracks: e,
      sourceBuffers: t,
      mediaSource: s
    } = this;
    if (!s)
      throw new Error("createSourceBuffers called when mediaSource was null");
    for (const r in e) {
      const a = r, o = e[a];
      if (this.isPending(o)) {
        const c = this.getTrackCodec(o, a), l = `${o.container};codecs=${c}`;
        o.codec = c, this.log(`creating sourceBuffer(${l})${this.currentOp(a) ? " Queued" : ""} ${Te(o)}`);
        try {
          const u = s.addSourceBuffer(l), h = zi(a), d = [a, u];
          t[h] = d, o.buffer = u;
        } catch (u) {
          var n;
          this.error(`error while trying to add sourceBuffer: ${u.message}`), this.shiftAndExecuteNext(a), (n = this.operationQueue) == null || n.removeBlockers(), delete this.tracks[a], this.hls.trigger(y.ERROR, {
            type: q.MEDIA_ERROR,
            details: C.BUFFER_ADD_CODEC_ERROR,
            fatal: !1,
            error: u,
            sourceBufferName: a,
            mimeType: l,
            parent: o.id
          });
          return;
        }
        this.trackSourceBuffer(a, o);
      }
    }
    this.bufferCreated();
  }
  getTrackCodec(e, t) {
    const s = e.supplemental;
    let n = e.codec;
    s && (t === "video" || t === "audiovideo") && As(s, "video") && (n = hu(n, s));
    const r = si(n, e.levelCodec);
    return r ? t.slice(0, 5) === "audio" ? mi(r, this.appendSource) : r : "";
  }
  trackSourceBuffer(e, t) {
    const s = t.buffer;
    if (!s)
      return;
    const n = this.getTrackCodec(t, e);
    this.tracks[e] = {
      buffer: s,
      codec: n,
      container: t.container,
      levelCodec: t.levelCodec,
      supplemental: t.supplemental,
      metadata: t.metadata,
      id: t.id,
      listeners: []
    }, this.removeBufferListeners(e), this.addBufferListener(e, "updatestart", this.onSBUpdateStart), this.addBufferListener(e, "updateend", this.onSBUpdateEnd), this.addBufferListener(e, "error", this.onSBUpdateError), this.appendSource && this.addBufferListener(e, "bufferedchange", (r, a) => {
      const o = a.removedRanges;
      o != null && o.length && this.hls.trigger(y.BUFFER_FLUSHED, {
        type: r
      });
    });
  }
  get mediaSrc() {
    var e, t;
    const s = ((e = this.media) == null || (t = e.querySelector) == null ? void 0 : t.call(e, "source")) || this.media;
    return s == null ? void 0 : s.src;
  }
  onSBUpdateStart(e) {
    const t = this.currentOp(e);
    t && t.onStart();
  }
  onSBUpdateEnd(e) {
    var t;
    if (((t = this.mediaSource) == null ? void 0 : t.readyState) === "closed") {
      this.resetBuffer(e);
      return;
    }
    const s = this.currentOp(e);
    s && (s.onComplete(), this.shiftAndExecuteNext(e));
  }
  onSBUpdateError(e, t) {
    var s;
    const n = new Error(`${e} SourceBuffer error. MediaSource readyState: ${(s = this.mediaSource) == null ? void 0 : s.readyState}`);
    this.error(`${n}`, t), this.hls.trigger(y.ERROR, {
      type: q.MEDIA_ERROR,
      details: C.BUFFER_APPENDING_ERROR,
      sourceBufferName: e,
      error: n,
      fatal: !1
    });
    const r = this.currentOp(e);
    r && r.onError(n);
  }
  updateTimestampOffset(e, t, s, n, r, a) {
    const o = t - e.timestampOffset;
    Math.abs(o) >= s && (this.log(`Updating ${n} SourceBuffer timestampOffset to ${t} (sn: ${r} cc: ${a})`), e.timestampOffset = t);
  }
  // This method must result in an updateend event; if remove is not called, onSBUpdateEnd must be called manually
  removeExecutor(e, t, s) {
    const {
      media: n,
      mediaSource: r
    } = this, a = this.tracks[e], o = a == null ? void 0 : a.buffer;
    if (!n || !r || !o) {
      this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`), this.shiftAndExecuteNext(e);
      return;
    }
    const c = G(n.duration) ? n.duration : 1 / 0, l = G(r.duration) ? r.duration : 1 / 0, u = Math.max(0, t), h = Math.min(s, c, l);
    h > u && (!a.ending || a.ended) ? (a.ended = !1, this.log(`Removing [${u},${h}] from the ${e} SourceBuffer`), o.remove(u, h)) : this.shiftAndExecuteNext(e);
  }
  // This method must result in an updateend event; if append is not called, onSBUpdateEnd must be called manually
  appendExecutor(e, t) {
    const s = this.tracks[t], n = s == null ? void 0 : s.buffer;
    if (!n)
      throw new vd(`Attempting to append to the ${t} SourceBuffer, but it does not exist`);
    s.ending = !1, s.ended = !1, n.appendBuffer(e);
  }
  blockUntilOpen(e) {
    if (this.isUpdating() || this.isQueued())
      this.blockBuffers(e).catch((t) => {
        this.warn(`SourceBuffer blocked callback ${t}`), this.stepOperationQueue(this.sourceBufferTypes);
      });
    else
      try {
        e();
      } catch (t) {
        this.warn(`Callback run without blocking ${this.operationQueue} ${t}`);
      }
  }
  isUpdating() {
    return this.sourceBuffers.some(([e, t]) => e && t.updating);
  }
  isQueued() {
    return this.sourceBuffers.some(([e]) => e && !!this.currentOp(e));
  }
  isPending(e) {
    return !!e && !e.buffer;
  }
  // Enqueues an operation to each SourceBuffer queue which, upon execution, resolves a promise. When all promises
  // resolve, the onUnblocked function is executed. Functions calling this method do not need to unblock the queue
  // upon completion, since we already do it here
  blockBuffers(e, t = this.sourceBufferTypes) {
    if (!t.length)
      return this.log("Blocking operation requested, but no SourceBuffers exist"), Promise.resolve().then(e);
    const {
      operationQueue: s
    } = this, n = t.map((a) => this.appendBlocker(a));
    return t.length > 1 && !!this.blockedAudioAppend && this.unblockAudio(), Promise.all(n).then((a) => {
      s === this.operationQueue && (e(), this.stepOperationQueue(this.sourceBufferTypes));
    });
  }
  stepOperationQueue(e) {
    e.forEach((t) => {
      var s;
      const n = (s = this.tracks[t]) == null ? void 0 : s.buffer;
      !n || n.updating || this.shiftAndExecuteNext(t);
    });
  }
  append(e, t, s) {
    this.operationQueue && this.operationQueue.append(e, t, s);
  }
  appendBlocker(e) {
    if (this.operationQueue)
      return this.operationQueue.appendBlocker(e);
  }
  currentOp(e) {
    return this.operationQueue ? this.operationQueue.current(e) : null;
  }
  executeNext(e) {
    e && this.operationQueue && this.operationQueue.executeNext(e);
  }
  shiftAndExecuteNext(e) {
    this.operationQueue && this.operationQueue.shiftAndExecuteNext(e);
  }
  get pendingTrackCount() {
    return Object.keys(this.tracks).reduce((e, t) => e + (this.isPending(this.tracks[t]) ? 1 : 0), 0);
  }
  get sourceBufferCount() {
    return this.sourceBuffers.reduce((e, [t]) => e + (t ? 1 : 0), 0);
  }
  get sourceBufferTypes() {
    return this.sourceBuffers.map(([e]) => e).filter((e) => !!e);
  }
  addBufferListener(e, t, s) {
    const n = this.tracks[e];
    if (!n)
      return;
    const r = n.buffer;
    if (!r)
      return;
    const a = s.bind(this, e);
    n.listeners.push({
      event: t,
      listener: a
    }), r.addEventListener(t, a);
  }
  removeBufferListeners(e) {
    const t = this.tracks[e];
    if (!t)
      return;
    const s = t.buffer;
    s && (t.listeners.forEach((n) => {
      s.removeEventListener(n.event, n.listener);
    }), t.listeners.length = 0);
  }
}
function ma(i) {
  const e = i.querySelectorAll("source");
  [].slice.call(e).forEach((t) => {
    i.removeChild(t);
  });
}
function Sd(i, e) {
  const t = self.document.createElement("source");
  t.type = "video/mp4", t.src = e, i.appendChild(t);
}
function zi(i) {
  return i === "audio" ? 1 : 0;
}
class rr {
  constructor(e) {
    this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = e, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners();
  }
  setStreamController(e) {
    this.streamController = e;
  }
  destroy() {
    this.hls && this.unregisterListener(), this.timer && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(y.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(y.MANIFEST_PARSED, this.onManifestParsed, this), e.on(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(y.BUFFER_CODECS, this.onBufferCodecs, this), e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  unregisterListener() {
    const {
      hls: e
    } = this;
    e.off(y.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(y.MANIFEST_PARSED, this.onManifestParsed, this), e.off(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(y.BUFFER_CODECS, this.onBufferCodecs, this), e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  onFpsDropLevelCapping(e, t) {
    const s = this.hls.levels[t.droppedLevel];
    this.isLevelAllowed(s) && this.restrictedLevels.push({
      bitrate: s.bitrate,
      height: s.height,
      width: s.width
    });
  }
  onMediaAttaching(e, t) {
    this.media = t.media instanceof HTMLVideoElement ? t.media : null, this.clientRect = null, this.timer && this.hls.levels.length && this.detectPlayerSize();
  }
  onManifestParsed(e, t) {
    const s = this.hls;
    this.restrictedLevels = [], this.firstLevel = t.firstLevel, s.config.capLevelToPlayerSize && t.video && this.startCapping();
  }
  onLevelsUpdated(e, t) {
    this.timer && G(this.autoLevelCapping) && this.detectPlayerSize();
  }
  // Only activate capping when playing a video stream; otherwise, multi-bitrate audio-only streams will be restricted
  // to the first level
  onBufferCodecs(e, t) {
    this.hls.config.capLevelToPlayerSize && t.video && this.startCapping();
  }
  onMediaDetaching() {
    this.stopCapping(), this.media = null;
  }
  detectPlayerSize() {
    if (this.media) {
      if (this.mediaHeight <= 0 || this.mediaWidth <= 0) {
        this.clientRect = null;
        return;
      }
      const e = this.hls.levels;
      if (e.length) {
        const t = this.hls, s = this.getMaxLevel(e.length - 1);
        s !== this.autoLevelCapping && t.logger.log(`Setting autoLevelCapping to ${s}: ${e[s].height}p@${e[s].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`), t.autoLevelCapping = s, t.autoLevelEnabled && t.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping;
      }
    }
  }
  /*
   * returns level should be the one with the dimensions equal or greater than the media (player) dimensions (so the video will be downscaled)
   */
  getMaxLevel(e) {
    const t = this.hls.levels;
    if (!t.length)
      return -1;
    const s = t.filter((n, r) => this.isLevelAllowed(n) && r <= e);
    return this.clientRect = null, rr.getMaxLevelByMediaSize(s, this.mediaWidth, this.mediaHeight);
  }
  startCapping() {
    this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
  }
  stopCapping() {
    this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0);
  }
  getDimensions() {
    if (this.clientRect)
      return this.clientRect;
    const e = this.media, t = {
      width: 0,
      height: 0
    };
    if (e) {
      const s = e.getBoundingClientRect();
      t.width = s.width, t.height = s.height, !t.width && !t.height && (t.width = s.right - s.left || e.width || 0, t.height = s.bottom - s.top || e.height || 0);
    }
    return this.clientRect = t, t;
  }
  get mediaWidth() {
    return this.getDimensions().width * this.contentScaleFactor;
  }
  get mediaHeight() {
    return this.getDimensions().height * this.contentScaleFactor;
  }
  get contentScaleFactor() {
    let e = 1;
    if (!this.hls.config.ignoreDevicePixelRatio)
      try {
        e = self.devicePixelRatio;
      } catch {
      }
    return Math.min(e, this.hls.config.maxDevicePixelRatio);
  }
  isLevelAllowed(e) {
    return !this.restrictedLevels.some((s) => e.bitrate === s.bitrate && e.width === s.width && e.height === s.height);
  }
  static getMaxLevelByMediaSize(e, t, s) {
    if (!(e != null && e.length))
      return -1;
    const n = (o, c) => c ? o.width !== c.width || o.height !== c.height : !0;
    let r = e.length - 1;
    const a = Math.max(t, s);
    for (let o = 0; o < e.length; o += 1) {
      const c = e[o];
      if ((c.width >= a || c.height >= a) && n(c, e[o + 1])) {
        r = o;
        break;
      }
    }
    return r;
  }
}
const xd = {
  /**
   * text file, such as a manifest or playlist
   */
  MANIFEST: "m",
  /**
   * audio only
   */
  AUDIO: "a",
  /**
   * video only
   */
  VIDEO: "v",
  /**
   * muxed audio and video
   */
  MUXED: "av",
  /**
   * init segment
   */
  INIT: "i",
  /**
   * caption or subtitle
   */
  CAPTION: "c",
  /**
   * ISOBMFF timed text track
   */
  TIMED_TEXT: "tt",
  /**
   * cryptographic key, license or certificate.
   */
  KEY: "k",
  /**
   * other
   */
  OTHER: "o"
}, qe = xd, Ad = {
  /**
   * HTTP Live Streaming (HLS)
   */
  HLS: "h"
}, Ld = Ad;
class Et {
  constructor(e, t) {
    Array.isArray(e) && (e = e.map((s) => s instanceof Et ? s : new Et(s))), this.value = e, this.params = t;
  }
}
const Id = "Dict";
function Rd(i) {
  return Array.isArray(i) ? JSON.stringify(i) : i instanceof Map ? "Map{}" : i instanceof Set ? "Set{}" : typeof i == "object" ? JSON.stringify(i) : String(i);
}
function _d(i, e, t, s) {
  return new Error(`failed to ${i} "${Rd(e)}" as ${t}`, {
    cause: s
  });
}
function vt(i, e, t) {
  return _d("serialize", i, e, t);
}
class el {
  constructor(e) {
    this.description = e;
  }
}
const pa = "Bare Item", kd = "Boolean";
function Cd(i) {
  if (typeof i != "boolean")
    throw vt(i, kd);
  return i ? "?1" : "?0";
}
function wd(i) {
  return btoa(String.fromCharCode(...i));
}
const Dd = "Byte Sequence";
function Pd(i) {
  if (ArrayBuffer.isView(i) === !1)
    throw vt(i, Dd);
  return `:${wd(i)}:`;
}
const Od = "Integer";
function Md(i) {
  return i < -999999999999999 || 999999999999999 < i;
}
function tl(i) {
  if (Md(i))
    throw vt(i, Od);
  return i.toString();
}
function Fd(i) {
  return `@${tl(i.getTime() / 1e3)}`;
}
function sl(i, e) {
  if (i < 0)
    return -sl(-i, e);
  const t = Math.pow(10, e);
  if (Math.abs(i * t % 1 - 0.5) < Number.EPSILON) {
    const n = Math.floor(i * t);
    return (n % 2 === 0 ? n : n + 1) / t;
  } else
    return Math.round(i * t) / t;
}
const Nd = "Decimal";
function $d(i) {
  const e = sl(i, 3);
  if (Math.floor(Math.abs(e)).toString().length > 12)
    throw vt(i, Nd);
  const t = e.toString();
  return t.includes(".") ? t : `${t}.0`;
}
const Bd = "String", Ud = /[\x00-\x1f\x7f]+/;
function Gd(i) {
  if (Ud.test(i))
    throw vt(i, Bd);
  return `"${i.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}
function Kd(i) {
  return i.description || i.toString().slice(7, -1);
}
const Vd = "Token";
function ya(i) {
  const e = Kd(i);
  if (/^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(e) === !1)
    throw vt(e, Vd);
  return e;
}
function Ln(i) {
  switch (typeof i) {
    case "number":
      if (!G(i))
        throw vt(i, pa);
      return Number.isInteger(i) ? tl(i) : $d(i);
    case "string":
      return Gd(i);
    case "symbol":
      return ya(i);
    case "boolean":
      return Cd(i);
    case "object":
      if (i instanceof Date)
        return Fd(i);
      if (i instanceof Uint8Array)
        return Pd(i);
      if (i instanceof el)
        return ya(i);
    default:
      throw vt(i, pa);
  }
}
const Hd = "Key";
function In(i) {
  if (/^[a-z*][a-z0-9\-_.*]*$/.test(i) === !1)
    throw vt(i, Hd);
  return i;
}
function ar(i) {
  return i == null ? "" : Object.entries(i).map(([e, t]) => t === !0 ? `;${In(e)}` : `;${In(e)}=${Ln(t)}`).join("");
}
function il(i) {
  return i instanceof Et ? `${Ln(i.value)}${ar(i.params)}` : Ln(i);
}
function jd(i) {
  return `(${i.value.map(il).join(" ")})${ar(i.params)}`;
}
function Wd(i, e = {
  whitespace: !0
}) {
  if (typeof i != "object" || i == null)
    throw vt(i, Id);
  const t = i instanceof Map ? i.entries() : Object.entries(i), s = e != null && e.whitespace ? " " : "";
  return Array.from(t).map(([n, r]) => {
    r instanceof Et || (r = new Et(r));
    let a = In(n);
    return r.value === !0 ? a += ar(r.params) : (a += "=", Array.isArray(r.value) ? a += jd(r) : a += il(r)), a;
  }).join(`,${s}`);
}
function nl(i, e) {
  return Wd(i, e);
}
const dt = "CMCD-Object", Se = "CMCD-Request", Ht = "CMCD-Session", Pt = "CMCD-Status", qd = {
  // Object
  br: dt,
  ab: dt,
  d: dt,
  ot: dt,
  tb: dt,
  tpb: dt,
  lb: dt,
  tab: dt,
  lab: dt,
  url: dt,
  // Request
  pb: Se,
  bl: Se,
  tbl: Se,
  dl: Se,
  ltc: Se,
  mtp: Se,
  nor: Se,
  nrr: Se,
  rc: Se,
  sn: Se,
  sta: Se,
  su: Se,
  ttfb: Se,
  ttfbb: Se,
  ttlb: Se,
  cmsdd: Se,
  cmsds: Se,
  smrt: Se,
  df: Se,
  cs: Se,
  // TODO: Which header to put the `ts` field is not defined yet.
  ts: Se,
  // Session
  cid: Ht,
  pr: Ht,
  sf: Ht,
  sid: Ht,
  st: Ht,
  v: Ht,
  msd: Ht,
  // Status
  bs: Pt,
  bsd: Pt,
  cdn: Pt,
  rtp: Pt,
  bg: Pt,
  pt: Pt,
  ec: Pt,
  e: Pt
}, Yd = {
  /**
   * keys whose values vary with each request.
   */
  REQUEST: Se
};
function zd(i) {
  return Object.keys(i).reduce((e, t) => {
    var s;
    return (s = i[t]) === null || s === void 0 || s.forEach((n) => e[n] = t), e;
  }, {});
}
function Xd(i, e) {
  const t = {};
  if (!i)
    return t;
  const s = Object.keys(i), n = e ? zd(e) : {};
  return s.reduce((r, a) => {
    var o;
    const c = qd[a] || n[a] || Yd.REQUEST, l = (o = r[c]) !== null && o !== void 0 ? o : r[c] = {};
    return l[a] = i[a], r;
  }, t);
}
function Qd(i) {
  return ["ot", "sf", "st", "e", "sta"].includes(i);
}
function Zd(i) {
  return typeof i == "number" ? G(i) : i != null && i !== "" && i !== !1;
}
const rl = "event";
function Jd(i, e) {
  const t = new URL(i), s = new URL(e);
  if (t.origin !== s.origin)
    return i;
  const n = t.pathname.split("/").slice(1), r = s.pathname.split("/").slice(1, -1);
  for (; n[0] === r[0]; )
    n.shift(), r.shift();
  for (; r.length; )
    r.shift(), n.unshift("..");
  return n.join("/") + t.search + t.hash;
}
const oi = (i) => Math.round(i), Rn = (i, e) => Array.isArray(i) ? i.map((t) => Rn(t, e)) : i instanceof Et && typeof i.value == "string" ? new Et(Rn(i.value, e), i.params) : (e.baseUrl && (i = Jd(i, e.baseUrl)), e.version === 1 ? encodeURIComponent(i) : i), qs = (i) => oi(i / 100) * 100, ef = (i, e) => {
  let t = i;
  return e.version >= 2 && (i instanceof Et && typeof i.value == "string" ? t = new Et([i]) : typeof i == "string" && (t = [i])), Rn(t, e);
}, tf = {
  /**
   * Bitrate (kbps) rounded integer
   */
  br: oi,
  /**
   * Duration (milliseconds) rounded integer
   */
  d: oi,
  /**
   * Buffer Length (milliseconds) rounded nearest 100ms
   */
  bl: qs,
  /**
   * Deadline (milliseconds) rounded nearest 100ms
   */
  dl: qs,
  /**
   * Measured Throughput (kbps) rounded nearest 100kbps
   */
  mtp: qs,
  /**
   * Next Object Request URL encoded
   */
  nor: ef,
  /**
   * Requested maximum throughput (kbps) rounded nearest 100kbps
   */
  rtp: qs,
  /**
   * Top Bitrate (kbps) rounded integer
   */
  tb: oi
}, al = "request", ol = "response", or = ["ab", "bg", "bl", "br", "bs", "bsd", "cdn", "cid", "cs", "df", "ec", "lab", "lb", "ltc", "msd", "mtp", "pb", "pr", "pt", "sf", "sid", "sn", "st", "sta", "tab", "tb", "tbl", "tpb", "ts", "v"], sf = ["e"], nf = /^[a-zA-Z0-9-.]+-[a-zA-Z0-9-.]+$/;
function wi(i) {
  return nf.test(i);
}
function rf(i) {
  return or.includes(i) || sf.includes(i) || wi(i);
}
const ll = ["d", "dl", "nor", "ot", "rtp", "su"];
function af(i) {
  return or.includes(i) || ll.includes(i) || wi(i);
}
const of = ["cmsdd", "cmsds", "rc", "smrt", "ttfb", "ttfbb", "ttlb", "url"];
function lf(i) {
  return or.includes(i) || ll.includes(i) || of.includes(i) || wi(i);
}
const cf = ["bl", "br", "bs", "cid", "d", "dl", "mtp", "nor", "nrr", "ot", "pr", "rtp", "sf", "sid", "st", "su", "tb", "v"];
function uf(i) {
  return cf.includes(i) || wi(i);
}
const hf = {
  [ol]: lf,
  [rl]: rf,
  [al]: af
};
function cl(i, e = {}) {
  const t = {};
  if (i == null || typeof i != "object")
    return t;
  const s = e.version || i.v || 1, n = e.reportingMode || al, r = s === 1 ? uf : hf[n];
  let a = Object.keys(i).filter(r);
  const o = e.filter;
  typeof o == "function" && (a = a.filter(o));
  const c = n === ol || n === rl;
  c && !a.includes("ts") && a.push("ts"), s > 1 && !a.includes("v") && a.push("v");
  const l = pe({}, tf, e.formatters), u = {
    version: s,
    reportingMode: n,
    baseUrl: e.baseUrl
  };
  return a.sort().forEach((h) => {
    let d = i[h];
    const g = l[h];
    if (typeof g == "function" && (d = g(d, u)), h === "v") {
      if (s === 1)
        return;
      d = s;
    }
    h == "pr" && d === 1 || (c && h === "ts" && !G(d) && (d = Date.now()), Zd(d) && (Qd(h) && typeof d == "string" && (d = new el(d)), t[h] = d));
  }), t;
}
function df(i, e = {}) {
  const t = {};
  if (!i)
    return t;
  const s = cl(i, e), n = Xd(s, e == null ? void 0 : e.customHeaderMap);
  return Object.entries(n).reduce((r, [a, o]) => {
    const c = nl(o, {
      whitespace: !1
    });
    return c && (r[a] = c), r;
  }, t);
}
function ff(i, e, t) {
  return pe(i, df(e, t));
}
const gf = "CMCD";
function mf(i, e = {}) {
  return i ? nl(cl(i, e), {
    whitespace: !1
  }) : "";
}
function pf(i, e = {}) {
  if (!i)
    return "";
  const t = mf(i, e);
  return encodeURIComponent(t);
}
function yf(i, e = {}) {
  if (!i)
    return "";
  const t = pf(i, e);
  return `${gf}=${t}`;
}
const Ta = /CMCD=[^&#]+/;
function Tf(i, e, t) {
  const s = yf(e, t);
  if (!s)
    return i;
  if (Ta.test(i))
    return i.replace(Ta, s);
  const n = i.includes("?") ? "&" : "?";
  return `${i}${n}${s}`;
}
class Ef {
  constructor(e) {
    this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.includeKeys = void 0, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = () => {
      this.initialized && (this.starved = !0), this.buffering = !0;
    }, this.onPlaying = () => {
      this.initialized || (this.initialized = !0), this.buffering = !1;
    }, this.applyPlaylistData = (n) => {
      try {
        this.apply(n, {
          ot: qe.MANIFEST,
          su: !this.initialized
        });
      } catch (r) {
        this.hls.logger.warn("Could not generate manifest CMCD data.", r);
      }
    }, this.applyFragmentData = (n) => {
      try {
        const {
          frag: r,
          part: a
        } = n, o = this.hls.levels[r.level], c = this.getObjectType(r), l = {
          d: (a || r).duration * 1e3,
          ot: c
        };
        (c === qe.VIDEO || c === qe.AUDIO || c == qe.MUXED) && (l.br = o.bitrate / 1e3, l.tb = this.getTopBandwidth(c) / 1e3, l.bl = this.getBufferLength(c));
        const u = a ? this.getNextPart(a) : this.getNextFrag(r);
        u != null && u.url && u.url !== r.url && (l.nor = u.url), this.apply(n, l);
      } catch (r) {
        this.hls.logger.warn("Could not generate segment CMCD data.", r);
      }
    }, this.hls = e;
    const t = this.config = e.config, {
      cmcd: s
    } = t;
    s != null && (t.pLoader = this.createPlaylistLoader(), t.fLoader = this.createFragmentLoader(), this.sid = s.sessionId || e.sessionId, this.cid = s.contentId, this.useHeaders = s.useHeaders === !0, this.includeKeys = s.includeKeys, this.registerListeners());
  }
  registerListeners() {
    const e = this.hls;
    e.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(y.MEDIA_DETACHED, this.onMediaDetached, this), e.on(y.BUFFER_CREATED, this.onBufferCreated, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(y.MEDIA_DETACHED, this.onMediaDetached, this), e.off(y.BUFFER_CREATED, this.onBufferCreated, this);
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetached(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null, this.onWaiting = this.onPlaying = this.media = null;
  }
  onMediaAttached(e, t) {
    this.media = t.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying);
  }
  onMediaDetached() {
    this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null);
  }
  onBufferCreated(e, t) {
    var s, n;
    this.audioBuffer = (s = t.tracks.audio) == null ? void 0 : s.buffer, this.videoBuffer = (n = t.tracks.video) == null ? void 0 : n.buffer;
  }
  /**
   * Create baseline CMCD data
   */
  createData() {
    var e;
    return {
      v: 1,
      sf: Ld.HLS,
      sid: this.sid,
      cid: this.cid,
      pr: (e = this.media) == null ? void 0 : e.playbackRate,
      mtp: this.hls.bandwidthEstimate / 1e3
    };
  }
  /**
   * Apply CMCD data to a request.
   */
  apply(e, t = {}) {
    pe(t, this.createData());
    const s = t.ot === qe.INIT || t.ot === qe.VIDEO || t.ot === qe.MUXED;
    this.starved && s && (t.bs = !0, t.su = !0, this.starved = !1), t.su == null && (t.su = this.buffering);
    const {
      includeKeys: n
    } = this;
    n && (t = Object.keys(t).reduce((a, o) => (n.includes(o) && (a[o] = t[o]), a), {}));
    const r = {
      baseUrl: e.url
    };
    this.useHeaders ? (e.headers || (e.headers = {}), ff(e.headers, t, r)) : e.url = Tf(e.url, t, r);
  }
  getNextFrag(e) {
    var t;
    const s = (t = this.hls.levels[e.level]) == null ? void 0 : t.details;
    if (s) {
      const n = e.sn - s.startSN;
      return s.fragments[n + 1];
    }
  }
  getNextPart(e) {
    var t;
    const {
      index: s,
      fragment: n
    } = e, r = (t = this.hls.levels[n.level]) == null || (t = t.details) == null ? void 0 : t.partList;
    if (r) {
      const {
        sn: a
      } = n;
      for (let o = r.length - 1; o >= 0; o--) {
        const c = r[o];
        if (c.index === s && c.fragment.sn === a)
          return r[o + 1];
      }
    }
  }
  /**
   * The CMCD object type.
   */
  getObjectType(e) {
    const {
      type: t
    } = e;
    if (t === "subtitle")
      return qe.TIMED_TEXT;
    if (e.sn === "initSegment")
      return qe.INIT;
    if (t === "audio")
      return qe.AUDIO;
    if (t === "main")
      return this.hls.audioTracks.length ? qe.VIDEO : qe.MUXED;
  }
  /**
   * Get the highest bitrate.
   */
  getTopBandwidth(e) {
    let t = 0, s;
    const n = this.hls;
    if (e === qe.AUDIO)
      s = n.audioTracks;
    else {
      const r = n.maxAutoLevel, a = r > -1 ? r + 1 : n.levels.length;
      s = n.levels.slice(0, a);
    }
    return s.forEach((r) => {
      r.bitrate > t && (t = r.bitrate);
    }), t > 0 ? t : NaN;
  }
  /**
   * Get the buffer length for a media type in milliseconds
   */
  getBufferLength(e) {
    const t = this.media, s = e === qe.AUDIO ? this.audioBuffer : this.videoBuffer;
    return !s || !t ? NaN : se.bufferInfo(s, t.currentTime, this.config.maxBufferHole).len * 1e3;
  }
  /**
   * Create a playlist loader
   */
  createPlaylistLoader() {
    const {
      pLoader: e
    } = this.config, t = this.applyPlaylistData, s = e || this.config.loader;
    return class {
      constructor(r) {
        this.loader = void 0, this.loader = new s(r);
      }
      get stats() {
        return this.loader.stats;
      }
      get context() {
        return this.loader.context;
      }
      destroy() {
        this.loader.destroy();
      }
      abort() {
        this.loader.abort();
      }
      load(r, a, o) {
        t(r), this.loader.load(r, a, o);
      }
    };
  }
  /**
   * Create a playlist loader
   */
  createFragmentLoader() {
    const {
      fLoader: e
    } = this.config, t = this.applyFragmentData, s = e || this.config.loader;
    return class {
      constructor(r) {
        this.loader = void 0, this.loader = new s(r);
      }
      get stats() {
        return this.loader.stats;
      }
      get context() {
        return this.loader.context;
      }
      destroy() {
        this.loader.destroy();
      }
      abort() {
        this.loader.abort();
      }
      load(r, a, o) {
        t(r), this.loader.load(r, a, o);
      }
    };
  }
}
const vf = 3e5;
class bf extends rt {
  constructor(e) {
    super("content-steering", e.logger), this.hls = void 0, this.loader = null, this.uri = null, this.pathwayId = ".", this._pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = -1, this.updated = 0, this.started = !1, this.enabled = !0, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = e, this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(y.MANIFEST_PARSED, this.onManifestParsed, this), e.on(y.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e && (e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(y.MANIFEST_PARSED, this.onManifestParsed, this), e.off(y.ERROR, this.onError, this));
  }
  pathways() {
    return (this.levels || []).reduce((e, t) => (e.indexOf(t.pathwayId) === -1 && e.push(t.pathwayId), e), []);
  }
  get pathwayPriority() {
    return this._pathwayPriority;
  }
  set pathwayPriority(e) {
    this.updatePathwayPriority(e);
  }
  startLoad() {
    if (this.started = !0, this.clearTimeout(), this.enabled && this.uri) {
      if (this.updated) {
        const e = this.timeToLoad * 1e3 - (performance.now() - this.updated);
        if (e > 0) {
          this.scheduleRefresh(this.uri, e);
          return;
        }
      }
      this.loadSteeringManifest(this.uri);
    }
  }
  stopLoad() {
    this.started = !1, this.loader && (this.loader.destroy(), this.loader = null), this.clearTimeout();
  }
  clearTimeout() {
    this.reloadTimer !== -1 && (self.clearTimeout(this.reloadTimer), this.reloadTimer = -1);
  }
  destroy() {
    this.unregisterListeners(), this.stopLoad(), this.hls = null, this.levels = this.audioTracks = this.subtitleTracks = null;
  }
  removeLevel(e) {
    const t = this.levels;
    t && (this.levels = t.filter((s) => s !== e));
  }
  onManifestLoading() {
    this.stopLoad(), this.enabled = !0, this.timeToLoad = 300, this.updated = 0, this.uri = null, this.pathwayId = ".", this.levels = this.audioTracks = this.subtitleTracks = null;
  }
  onManifestLoaded(e, t) {
    const {
      contentSteering: s
    } = t;
    s !== null && (this.pathwayId = s.pathwayId, this.uri = s.uri, this.started && this.startLoad());
  }
  onManifestParsed(e, t) {
    this.audioTracks = t.audioTracks, this.subtitleTracks = t.subtitleTracks;
  }
  onError(e, t) {
    const {
      errorAction: s
    } = t;
    if ((s == null ? void 0 : s.action) === $e.SendAlternateToPenaltyBox && s.flags === et.MoveAllAlternatesMatchingHost) {
      const n = this.levels;
      let r = this._pathwayPriority, a = this.pathwayId;
      if (t.context) {
        const {
          groupId: o,
          pathwayId: c,
          type: l
        } = t.context;
        o && n ? a = this.getPathwayForGroupId(o, l, a) : c && (a = c);
      }
      a in this.penalizedPathways || (this.penalizedPathways[a] = performance.now()), !r && n && (r = this.pathways()), r && r.length > 1 && (this.updatePathwayPriority(r), s.resolved = this.pathwayId !== a), t.details === C.BUFFER_APPEND_ERROR && !t.fatal ? s.resolved = !0 : s.resolved || this.warn(`Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${a} levels: ${n && n.length} priorities: ${Te(r)} penalized: ${Te(this.penalizedPathways)}`);
    }
  }
  filterParsedLevels(e) {
    this.levels = e;
    let t = this.getLevelsForPathway(this.pathwayId);
    if (t.length === 0) {
      const s = e[0].pathwayId;
      this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${s}"`), t = this.getLevelsForPathway(s), this.pathwayId = s;
    }
    return t.length !== e.length && this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`), t;
  }
  getLevelsForPathway(e) {
    return this.levels === null ? [] : this.levels.filter((t) => e === t.pathwayId);
  }
  updatePathwayPriority(e) {
    this._pathwayPriority = e;
    let t;
    const s = this.penalizedPathways, n = performance.now();
    Object.keys(s).forEach((r) => {
      n - s[r] > vf && delete s[r];
    });
    for (let r = 0; r < e.length; r++) {
      const a = e[r];
      if (a in s)
        continue;
      if (a === this.pathwayId)
        return;
      const o = this.hls.nextLoadLevel, c = this.hls.levels[o];
      if (t = this.getLevelsForPathway(a), t.length > 0) {
        this.log(`Setting Pathway to "${a}"`), this.pathwayId = a, ko(t), this.hls.trigger(y.LEVELS_UPDATED, {
          levels: t
        });
        const l = this.hls.levels[o];
        c && l && this.levels && (l.attrs["STABLE-VARIANT-ID"] !== c.attrs["STABLE-VARIANT-ID"] && l.bitrate !== c.bitrate && this.log(`Unstable Pathways change from bitrate ${c.bitrate} to ${l.bitrate}`), this.hls.nextLoadLevel = o);
        break;
      }
    }
  }
  getPathwayForGroupId(e, t, s) {
    const n = this.getLevelsForPathway(s).concat(this.levels || []);
    for (let r = 0; r < n.length; r++)
      if (t === re.AUDIO_TRACK && n[r].hasAudioGroup(e) || t === re.SUBTITLE_TRACK && n[r].hasSubtitleGroup(e))
        return n[r].pathwayId;
    return s;
  }
  clonePathways(e) {
    const t = this.levels;
    if (!t)
      return;
    const s = {}, n = {};
    e.forEach((r) => {
      const {
        ID: a,
        "BASE-ID": o,
        "URI-REPLACEMENT": c
      } = r;
      if (t.some((u) => u.pathwayId === a))
        return;
      const l = this.getLevelsForPathway(o).map((u) => {
        const h = new Ee(u.attrs);
        h["PATHWAY-ID"] = a;
        const d = h.AUDIO && `${h.AUDIO}_clone_${a}`, g = h.SUBTITLES && `${h.SUBTITLES}_clone_${a}`;
        d && (s[h.AUDIO] = d, h.AUDIO = d), g && (n[h.SUBTITLES] = g, h.SUBTITLES = g);
        const f = ul(u.uri, h["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", c), m = new Is({
          attrs: h,
          audioCodec: u.audioCodec,
          bitrate: u.bitrate,
          height: u.height,
          name: u.name,
          url: f,
          videoCodec: u.videoCodec,
          width: u.width
        });
        if (u.audioGroups)
          for (let p = 1; p < u.audioGroups.length; p++)
            m.addGroupId("audio", `${u.audioGroups[p]}_clone_${a}`);
        if (u.subtitleGroups)
          for (let p = 1; p < u.subtitleGroups.length; p++)
            m.addGroupId("text", `${u.subtitleGroups[p]}_clone_${a}`);
        return m;
      });
      t.push(...l), Ea(this.audioTracks, s, c, a), Ea(this.subtitleTracks, n, c, a);
    });
  }
  loadSteeringManifest(e) {
    const t = this.hls.config, s = t.loader;
    this.loader && this.loader.destroy(), this.loader = new s(t);
    let n;
    try {
      n = new self.URL(e);
    } catch {
      this.enabled = !1, this.log(`Failed to parse Steering Manifest URI: ${e}`);
      return;
    }
    if (n.protocol !== "data:") {
      const u = (this.hls.bandwidthEstimate || t.abrEwmaDefaultEstimate) | 0;
      n.searchParams.set("_HLS_pathway", this.pathwayId), n.searchParams.set("_HLS_throughput", "" + u);
    }
    const r = {
      responseType: "json",
      url: n.href
    }, a = t.steeringManifestLoadPolicy.default, o = a.errorRetry || a.timeoutRetry || {}, c = {
      loadPolicy: a,
      timeout: a.maxLoadTimeMs,
      maxRetry: o.maxNumRetry || 0,
      retryDelay: o.retryDelayMs || 0,
      maxRetryDelay: o.maxRetryDelayMs || 0
    }, l = {
      onSuccess: (u, h, d, g) => {
        this.log(`Loaded steering manifest: "${n}"`);
        const f = u.data;
        if ((f == null ? void 0 : f.VERSION) !== 1) {
          this.log(`Steering VERSION ${f.VERSION} not supported!`);
          return;
        }
        this.updated = performance.now(), this.timeToLoad = f.TTL;
        const {
          "RELOAD-URI": m,
          "PATHWAY-CLONES": p,
          "PATHWAY-PRIORITY": T
        } = f;
        if (m)
          try {
            this.uri = new self.URL(m, n).href;
          } catch {
            this.enabled = !1, this.log(`Failed to parse Steering Manifest RELOAD-URI: ${m}`);
            return;
          }
        this.scheduleRefresh(this.uri || d.url), p && this.clonePathways(p);
        const E = {
          steeringManifest: f,
          url: n.toString()
        };
        this.hls.trigger(y.STEERING_MANIFEST_LOADED, E), T && this.updatePathwayPriority(T);
      },
      onError: (u, h, d, g) => {
        if (this.log(`Error loading steering manifest: ${u.code} ${u.text} (${h.url})`), this.stopLoad(), u.code === 410) {
          this.enabled = !1, this.log(`Steering manifest ${h.url} no longer available`);
          return;
        }
        let f = this.timeToLoad * 1e3;
        if (u.code === 429) {
          const m = this.loader;
          if (typeof (m == null ? void 0 : m.getResponseHeader) == "function") {
            const p = m.getResponseHeader("Retry-After");
            p && (f = parseFloat(p) * 1e3);
          }
          this.log(`Steering manifest ${h.url} rate limited`);
          return;
        }
        this.scheduleRefresh(this.uri || h.url, f);
      },
      onTimeout: (u, h, d) => {
        this.log(`Timeout loading steering manifest (${h.url})`), this.scheduleRefresh(this.uri || h.url);
      }
    };
    this.log(`Requesting steering manifest: ${n}`), this.loader.load(r, c, l);
  }
  scheduleRefresh(e, t = this.timeToLoad * 1e3) {
    this.clearTimeout(), this.reloadTimer = self.setTimeout(() => {
      var s;
      const n = (s = this.hls) == null ? void 0 : s.media;
      if (n && !n.ended) {
        this.loadSteeringManifest(e);
        return;
      }
      this.scheduleRefresh(e, this.timeToLoad * 1e3);
    }, t);
  }
}
function Ea(i, e, t, s) {
  i && Object.keys(e).forEach((n) => {
    const r = i.filter((a) => a.groupId === n).map((a) => {
      const o = pe({}, a);
      return o.details = void 0, o.attrs = new Ee(o.attrs), o.url = o.attrs.URI = ul(a.url, a.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", t), o.groupId = o.attrs["GROUP-ID"] = e[n], o.attrs["PATHWAY-ID"] = s, o;
    });
    i.push(...r);
  });
}
function ul(i, e, t, s) {
  const {
    HOST: n,
    PARAMS: r,
    [t]: a
  } = s;
  let o;
  e && (o = a == null ? void 0 : a[e], o && (i = o));
  const c = new self.URL(i);
  return n && !o && (c.host = n), r && Object.keys(r).sort().forEach((l) => {
    l && c.searchParams.set(l, r[l]);
  }), c.href;
}
class cs extends rt {
  constructor(e) {
    super("eme", e.logger), this.hls = void 0, this.config = void 0, this.media = null, this.mediaResolved = void 0, this.keyFormatPromise = null, this.keySystemAccessPromises = {}, this._requestLicenseFailureCount = 0, this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, this.mediaKeys = null, this.setMediaKeysQueue = cs.CDMCleanupPromise ? [cs.CDMCleanupPromise] : [], this.bannedKeyIds = {}, this.onMediaEncrypted = (t) => {
      const {
        initDataType: s,
        initData: n
      } = t, r = `"${t.type}" event: init data type: "${s}"`;
      if (this.debug(r), n !== null) {
        if (!this.keyFormatPromise) {
          let a = Object.keys(this.keySystemAccessPromises);
          a.length || (a = Es(this.config));
          const o = a.map(Gi).filter((c) => !!c);
          this.keyFormatPromise = this.getKeyFormatPromise(o);
        }
        this.keyFormatPromise.then((a) => {
          const o = ni(a);
          if (s !== "sinf" || o !== ve.FAIRPLAY) {
            this.log(`Ignoring "${t.type}" event with init data type: "${s}" for selected key-system ${o}`);
            return;
          }
          let c;
          try {
            const g = De(new Uint8Array(n)), f = zn(JSON.parse(g).sinf), m = io(f);
            if (!m)
              throw new Error("'schm' box missing or not cbcs/cenc with schi > tenc");
            c = new Uint8Array(m.subarray(8, 24));
          } catch (g) {
            this.warn(`${r} Failed to parse sinf: ${g}`);
            return;
          }
          const l = Be(c), {
            keyIdToKeySessionPromise: u,
            mediaKeySessions: h
          } = this;
          let d = u[l];
          for (let g = 0; g < h.length; g++) {
            const f = h[g], m = f.decryptdata;
            if (!m.keyId)
              continue;
            const p = Be(m.keyId);
            if (vi(c, m.keyId) || m.uri.replace(/-/g, "").indexOf(l) !== -1) {
              if (d = u[p], !d)
                continue;
              if (m.pssh)
                break;
              delete u[p], m.pssh = new Uint8Array(n), m.keyId = c, d = u[l] = d.then(() => this.generateRequestWithPreferredKeySession(f, s, n, "encrypted-event-key-match")), d.catch((T) => this.handleError(T));
              break;
            }
          }
          d || this.handleError(new Error(`Key ID ${l} not encountered in playlist. Key-system sessions ${h.length}.`));
        }).catch((a) => this.handleError(a));
      }
    }, this.onWaitingForKey = (t) => {
      this.log(`"${t.type}" event`);
    }, this.hls = e, this.config = e.config, this.registerListeners();
  }
  destroy() {
    this.onDestroying(), this.onMediaDetached();
    const e = this.config;
    e.requestMediaKeySystemAccessFunc = null, e.licenseXhrSetup = e.licenseResponseCallback = void 0, e.drmSystems = e.drmSystemOptions = {}, this.hls = this.config = this.keyIdToKeySessionPromise = null, this.onMediaEncrypted = this.onWaitingForKey = null;
  }
  registerListeners() {
    this.hls.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(y.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(y.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(y.MANIFEST_LOADED, this.onManifestLoaded, this), this.hls.on(y.DESTROYING, this.onDestroying, this);
  }
  unregisterListeners() {
    this.hls.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(y.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(y.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(y.MANIFEST_LOADED, this.onManifestLoaded, this), this.hls.off(y.DESTROYING, this.onDestroying, this);
  }
  getLicenseServerUrl(e) {
    const {
      drmSystems: t,
      widevineLicenseUrl: s
    } = this.config, n = t == null ? void 0 : t[e];
    if (n)
      return n.licenseUrl;
    if (e === ve.WIDEVINE && s)
      return s;
  }
  getLicenseServerUrlOrThrow(e) {
    const t = this.getLicenseServerUrl(e);
    if (t === void 0)
      throw new Error(`no license server URL configured for key-system "${e}"`);
    return t;
  }
  getServerCertificateUrl(e) {
    const {
      drmSystems: t
    } = this.config, s = t == null ? void 0 : t[e];
    if (s)
      return s.serverCertificateUrl;
    this.log(`No Server Certificate in config.drmSystems["${e}"]`);
  }
  attemptKeySystemAccess(e) {
    const t = this.hls.levels, s = (a, o, c) => !!a && c.indexOf(a) === o, n = t.map((a) => a.audioCodec).filter(s), r = t.map((a) => a.videoCodec).filter(s);
    return n.length + r.length === 0 && r.push("avc1.42e01e"), new Promise((a, o) => {
      const c = (l) => {
        const u = l.shift();
        this.getMediaKeysPromise(u, n, r).then((h) => a({
          keySystem: u,
          mediaKeys: h
        })).catch((h) => {
          l.length ? c(l) : h instanceof Je ? o(h) : o(new Je({
            type: q.KEY_SYSTEM_ERROR,
            details: C.KEY_SYSTEM_NO_ACCESS,
            error: h,
            fatal: !0
          }, h.message));
        });
      };
      c(e);
    });
  }
  requestMediaKeySystemAccess(e, t) {
    const {
      requestMediaKeySystemAccessFunc: s
    } = this.config;
    if (typeof s != "function") {
      let n = `Configured requestMediaKeySystemAccess is not a function ${s}`;
      return bo === null && self.location.protocol === "http:" && (n = `navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`), Promise.reject(new Error(n));
    }
    return s(e, t);
  }
  getMediaKeysPromise(e, t, s) {
    var n;
    const r = eh(e, t, s, this.config.drmSystemOptions || {});
    let a = this.keySystemAccessPromises[e], o = (n = a) == null ? void 0 : n.keySystemAccess;
    if (!o) {
      this.log(`Requesting encrypted media "${e}" key-system access with config: ${Te(r)}`), o = this.requestMediaKeySystemAccess(e, r);
      const c = a = this.keySystemAccessPromises[e] = {
        keySystemAccess: o
      };
      return o.catch((l) => {
        this.log(`Failed to obtain access to key-system "${e}": ${l}`);
      }), o.then((l) => {
        this.log(`Access for key-system "${l.keySystem}" obtained`);
        const u = this.fetchServerCertificate(e);
        this.log(`Create media-keys for "${e}"`);
        const h = c.mediaKeys = l.createMediaKeys().then((d) => (this.log(`Media-keys created for "${e}"`), c.hasMediaKeys = !0, u.then((g) => g ? this.setMediaKeysServerCertificate(d, e, g) : d)));
        return h.catch((d) => {
          this.error(`Failed to create media-keys for "${e}"}: ${d}`);
        }), h;
      });
    }
    return o.then(() => a.mediaKeys);
  }
  createMediaKeySessionContext({
    decryptdata: e,
    keySystem: t,
    mediaKeys: s
  }) {
    this.log(`Creating key-system session "${t}" keyId: ${Be(e.keyId || [])} keyUri: ${e.uri}`);
    const n = s.createSession(), r = {
      decryptdata: e,
      keySystem: t,
      mediaKeys: s,
      mediaKeysSession: n,
      keyStatus: "status-pending"
    };
    return this.mediaKeySessions.push(r), r;
  }
  renewKeySession(e) {
    const t = e.decryptdata;
    if (t.pssh) {
      const s = this.createMediaKeySessionContext(e), n = Ys(t), r = "cenc";
      this.keyIdToKeySessionPromise[n] = this.generateRequestWithPreferredKeySession(s, r, t.pssh.buffer, "expired");
    } else
      this.warn("Could not renew expired session. Missing pssh initData.");
    this.removeSession(e);
  }
  updateKeySession(e, t) {
    const s = e.mediaKeysSession;
    return this.log(`Updating key-session "${s.sessionId}" for keyId ${Be(e.decryptdata.keyId || [])}
      } (data length: ${t.byteLength})`), s.update(t);
  }
  getSelectedKeySystemFormats() {
    return Object.keys(this.keySystemAccessPromises).map((e) => ({
      keySystem: e,
      hasMediaKeys: this.keySystemAccessPromises[e].hasMediaKeys
    })).filter(({
      hasMediaKeys: e
    }) => !!e).map(({
      keySystem: e
    }) => Gi(e)).filter((e) => !!e);
  }
  getKeySystemAccess(e) {
    return this.getKeySystemSelectionPromise(e).then(({
      keySystem: t,
      mediaKeys: s
    }) => this.attemptSetMediaKeys(t, s));
  }
  selectKeySystem(e) {
    return new Promise((t, s) => {
      this.getKeySystemSelectionPromise(e).then(({
        keySystem: n
      }) => {
        const r = Gi(n);
        r ? t(r) : s(new Error(`Unable to find format for key-system "${n}"`));
      }).catch(s);
    });
  }
  selectKeySystemFormat(e) {
    const t = Object.keys(e.levelkeys || {});
    return this.keyFormatPromise || (this.log(`Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(t)), this.keyFormatPromise;
  }
  getKeyFormatPromise(e) {
    const t = Es(this.config), s = e.map(ni).filter((n) => !!n && t.indexOf(n) !== -1);
    return this.selectKeySystem(s);
  }
  getKeyStatus(e) {
    const {
      mediaKeySessions: t
    } = this;
    for (let s = 0; s < t.length; s++) {
      const n = Sf(e, t[s]);
      if (n)
        return n;
    }
  }
  loadKey(e) {
    const t = e.keyInfo.decryptdata, s = Ys(t), n = this.bannedKeyIds[s];
    if (n || this.getKeyStatus(t) === "internal-error") {
      const o = va(n || "internal-error", t);
      return this.handleError(o, e.frag), Promise.reject(o);
    }
    const r = `(keyId: ${s} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;
    this.log(`Starting session for key ${r}`);
    const a = this.keyIdToKeySessionPromise[s];
    if (!a) {
      const o = this.getKeySystemForKeyPromise(t).then(({
        keySystem: c,
        mediaKeys: l
      }) => (this.throwIfDestroyed(), this.log(`Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${r}`), this.attemptSetMediaKeys(c, l).then(() => (this.throwIfDestroyed(), this.createMediaKeySessionContext({
        keySystem: c,
        mediaKeys: l,
        decryptdata: t
      }))))).then((c) => {
        const l = "cenc", u = t.pssh ? t.pssh.buffer : null;
        return this.generateRequestWithPreferredKeySession(c, l, u, "playlist-key");
      });
      return o.catch((c) => this.handleError(c, e.frag)), this.keyIdToKeySessionPromise[s] = o, o;
    }
    return a.catch((o) => {
      if (o instanceof Je) {
        const c = fe({}, o.data);
        this.getKeyStatus(t) === "internal-error" && (c.decryptdata = t);
        const l = new Je(c, o.message);
        this.handleError(l, e.frag);
      }
    }), a;
  }
  throwIfDestroyed(e = "Invalid state") {
    if (!this.hls)
      throw new Error("invalid state");
  }
  handleError(e, t) {
    if (this.hls)
      if (e instanceof Je) {
        t && (e.data.frag = t);
        const s = e.data.decryptdata;
        this.error(`${e.message}${s ? ` (${Be(s.keyId || [])})` : ""}`), this.hls.trigger(y.ERROR, e.data);
      } else
        this.error(e.message), this.hls.trigger(y.ERROR, {
          type: q.KEY_SYSTEM_ERROR,
          details: C.KEY_SYSTEM_NO_KEYS,
          error: e,
          fatal: !0
        });
  }
  getKeySystemForKeyPromise(e) {
    const t = Ys(e), s = this.keyIdToKeySessionPromise[t];
    if (!s) {
      const n = ni(e.keyFormat), r = n ? [n] : Es(this.config);
      return this.attemptKeySystemAccess(r);
    }
    return s;
  }
  getKeySystemSelectionPromise(e) {
    if (e.length || (e = Es(this.config)), e.length === 0)
      throw new Je({
        type: q.KEY_SYSTEM_ERROR,
        details: C.KEY_SYSTEM_NO_CONFIGURED_LICENSE,
        fatal: !0
      }, `Missing key-system license configuration options ${Te({
        drmSystems: this.config.drmSystems
      })}`);
    return this.attemptKeySystemAccess(e);
  }
  attemptSetMediaKeys(e, t) {
    if (this.mediaResolved = void 0, this.mediaKeys === t)
      return Promise.resolve();
    const s = this.setMediaKeysQueue.slice();
    this.log(`Setting media-keys for "${e}"`);
    const n = Promise.all(s).then(() => this.media ? this.media.setMediaKeys(t) : new Promise((r, a) => {
      this.mediaResolved = () => {
        if (this.mediaResolved = void 0, !this.media)
          return a(new Error("Attempted to set mediaKeys without media element attached"));
        this.mediaKeys = t, this.media.setMediaKeys(t).then(r).catch(a);
      };
    }));
    return this.mediaKeys = t, this.setMediaKeysQueue.push(n), n.then(() => {
      this.log(`Media-keys set for "${e}"`), s.push(n), this.setMediaKeysQueue = this.setMediaKeysQueue.filter((r) => s.indexOf(r) === -1);
    });
  }
  generateRequestWithPreferredKeySession(e, t, s, n) {
    var r;
    const a = (r = this.config.drmSystems) == null || (r = r[e.keySystem]) == null ? void 0 : r.generateRequest;
    if (a)
      try {
        const f = a.call(this.hls, t, s, e);
        if (!f)
          throw new Error("Invalid response from configured generateRequest filter");
        t = f.initDataType, s = f.initData ? f.initData : null, e.decryptdata.pssh = s ? new Uint8Array(s) : null;
      } catch (f) {
        if (this.warn(f.message), this.hls && this.hls.config.debug)
          throw f;
      }
    if (s === null)
      return this.log(`Skipping key-session request for "${n}" (no initData)`), Promise.resolve(e);
    const o = Ys(e.decryptdata), c = e.decryptdata.uri;
    this.log(`Generating key-session request for "${n}" keyId: ${o} URI: ${c} (init data type: ${t} length: ${s.byteLength})`);
    const l = new Qn(), u = e._onmessage = (f) => {
      const m = e.mediaKeysSession;
      if (!m) {
        l.emit("error", new Error("invalid state"));
        return;
      }
      const {
        messageType: p,
        message: T
      } = f;
      this.log(`"${p}" message event for session "${m.sessionId}" message size: ${T.byteLength}`), p === "license-request" || p === "license-renewal" ? this.renewLicense(e, T).catch((E) => {
        l.eventNames().length ? l.emit("error", E) : this.handleError(E);
      }) : p === "license-release" ? e.keySystem === ve.FAIRPLAY && this.updateKeySession(e, En("acknowledged")).then(() => this.removeSession(e)).catch((E) => this.handleError(E)) : this.warn(`unhandled media key message type "${p}"`);
    }, h = (f, m) => {
      m.keyStatus = f;
      let p;
      f.startsWith("usable") ? l.emit("resolved") : f === "internal-error" || f === "output-restricted" || f === "output-downscaled" ? p = va(f, m.decryptdata) : f === "expired" ? p = new Error(`key expired (keyId: ${o})`) : f === "released" ? p = new Error("key released") : f === "status-pending" || this.warn(`unhandled key status change "${f}" (keyId: ${o})`), p && (l.eventNames().length ? l.emit("error", p) : this.handleError(p));
    }, d = e._onkeystatuseschange = (f) => {
      if (!e.mediaKeysSession) {
        l.emit("error", new Error("invalid state"));
        return;
      }
      const p = this.getKeyStatuses(e);
      if (!Object.keys(p).some((x) => p[x] !== "status-pending"))
        return;
      if (p[o] === "expired") {
        this.log(`Expired key ${Te(p)} in key-session "${e.mediaKeysSession.sessionId}"`), this.renewKeySession(e);
        return;
      }
      let E = p[o];
      if (E)
        h(E, e);
      else {
        var v;
        e.keyStatusTimeouts || (e.keyStatusTimeouts = {}), (v = e.keyStatusTimeouts)[o] || (v[o] = self.setTimeout(() => {
          if (!e.mediaKeysSession || !this.mediaKeys)
            return;
          const A = this.getKeyStatus(e.decryptdata);
          if (A && A !== "status-pending")
            return this.log(`No status for keyId ${o} in key-session "${e.mediaKeysSession.sessionId}". Using session key-status ${A} from other session.`), h(A, e);
          this.log(`key status for ${o} in key-session "${e.mediaKeysSession.sessionId}" timed out after 1000ms`), E = "internal-error", h(E, e);
        }, 1e3)), this.log(`No status for keyId ${o} (${Te(p)}).`);
      }
    };
    He(e.mediaKeysSession, "message", u), He(e.mediaKeysSession, "keystatuseschange", d);
    const g = new Promise((f, m) => {
      l.on("error", m), l.on("resolved", f);
    });
    return e.mediaKeysSession.generateRequest(t, s).then(() => {
      this.log(`Request generated for key-session "${e.mediaKeysSession.sessionId}" keyId: ${o} URI: ${c}`);
    }).catch((f) => {
      throw new Je({
        type: q.KEY_SYSTEM_ERROR,
        details: C.KEY_SYSTEM_NO_SESSION,
        error: f,
        decryptdata: e.decryptdata,
        fatal: !1
      }, `Error generating key-session request: ${f}`);
    }).then(() => g).catch((f) => (l.removeAllListeners(), this.removeSession(e).then(() => {
      throw f;
    }))).then(() => (l.removeAllListeners(), e));
  }
  getKeyStatuses(e) {
    const t = {};
    return e.mediaKeysSession.keyStatuses.forEach((s, n) => {
      if (typeof n == "string" && typeof s == "object") {
        const o = n;
        n = s, s = o;
      }
      const r = "buffer" in n ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : new Uint8Array(n);
      if (e.keySystem === ve.PLAYREADY && r.length === 16) {
        const o = Be(r);
        t[o] = s, Eo(r);
      }
      const a = Be(r);
      s === "internal-error" && (this.bannedKeyIds[a] = s), this.log(`key status change "${s}" for keyStatuses keyId: ${a} key-session "${e.mediaKeysSession.sessionId}"`), t[a] = s;
    }), t;
  }
  fetchServerCertificate(e) {
    const t = this.config, s = t.loader, n = new s(t), r = this.getServerCertificateUrl(e);
    return r ? (this.log(`Fetching server certificate for "${e}"`), new Promise((a, o) => {
      const c = {
        responseType: "arraybuffer",
        url: r
      }, l = t.certLoadPolicy.default, u = {
        loadPolicy: l,
        timeout: l.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0
      }, h = {
        onSuccess: (d, g, f, m) => {
          a(d.data);
        },
        onError: (d, g, f, m) => {
          o(new Je({
            type: q.KEY_SYSTEM_ERROR,
            details: C.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
            fatal: !0,
            networkDetails: f,
            response: fe({
              url: c.url,
              data: void 0
            }, d)
          }, `"${e}" certificate request failed (${r}). Status: ${d.code} (${d.text})`));
        },
        onTimeout: (d, g, f) => {
          o(new Je({
            type: q.KEY_SYSTEM_ERROR,
            details: C.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
            fatal: !0,
            networkDetails: f,
            response: {
              url: c.url,
              data: void 0
            }
          }, `"${e}" certificate request timed out (${r})`));
        },
        onAbort: (d, g, f) => {
          o(new Error("aborted"));
        }
      };
      n.load(c, u, h);
    })) : Promise.resolve();
  }
  setMediaKeysServerCertificate(e, t, s) {
    return new Promise((n, r) => {
      e.setServerCertificate(s).then((a) => {
        this.log(`setServerCertificate ${a ? "success" : "not supported by CDM"} (${s.byteLength}) on "${t}"`), n(e);
      }).catch((a) => {
        r(new Je({
          type: q.KEY_SYSTEM_ERROR,
          details: C.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,
          error: a,
          fatal: !0
        }, a.message));
      });
    });
  }
  renewLicense(e, t) {
    return this.requestLicense(e, new Uint8Array(t)).then((s) => this.updateKeySession(e, new Uint8Array(s)).catch((n) => {
      throw new Je({
        type: q.KEY_SYSTEM_ERROR,
        details: C.KEY_SYSTEM_SESSION_UPDATE_FAILED,
        decryptdata: e.decryptdata,
        error: n,
        fatal: !1
      }, n.message);
    }));
  }
  unpackPlayReadyKeyMessage(e, t) {
    const s = String.fromCharCode.apply(null, new Uint16Array(t.buffer));
    if (!s.includes("PlayReadyKeyMessage"))
      return e.setRequestHeader("Content-Type", "text/xml; charset=utf-8"), t;
    const n = new DOMParser().parseFromString(s, "application/xml"), r = n.querySelectorAll("HttpHeader");
    if (r.length > 0) {
      let u;
      for (let h = 0, d = r.length; h < d; h++) {
        var a, o;
        u = r[h];
        const g = (a = u.querySelector("name")) == null ? void 0 : a.textContent, f = (o = u.querySelector("value")) == null ? void 0 : o.textContent;
        g && f && e.setRequestHeader(g, f);
      }
    }
    const c = n.querySelector("Challenge"), l = c == null ? void 0 : c.textContent;
    if (!l)
      throw new Error("Cannot find <Challenge> in key message");
    return En(atob(l));
  }
  setupLicenseXHR(e, t, s, n) {
    const r = this.config.licenseXhrSetup;
    return r ? Promise.resolve().then(() => {
      if (!s.decryptdata)
        throw new Error("Key removed");
      return r.call(this.hls, e, t, s, n);
    }).catch((a) => {
      if (!s.decryptdata)
        throw a;
      return e.open("POST", t, !0), r.call(this.hls, e, t, s, n);
    }).then((a) => (e.readyState || e.open("POST", t, !0), {
      xhr: e,
      licenseChallenge: a || n
    })) : (e.open("POST", t, !0), Promise.resolve({
      xhr: e,
      licenseChallenge: n
    }));
  }
  requestLicense(e, t) {
    const s = this.config.keyLoadPolicy.default;
    return new Promise((n, r) => {
      const a = this.getLicenseServerUrlOrThrow(e.keySystem);
      this.log(`Sending license request to URL: ${a}`);
      const o = new XMLHttpRequest();
      o.responseType = "arraybuffer", o.onreadystatechange = () => {
        if (!this.hls || !e.mediaKeysSession)
          return r(new Error("invalid state"));
        if (o.readyState === 4)
          if (o.status === 200) {
            this._requestLicenseFailureCount = 0;
            let c = o.response;
            this.log(`License received ${c instanceof ArrayBuffer ? c.byteLength : c}`);
            const l = this.config.licenseResponseCallback;
            if (l)
              try {
                c = l.call(this.hls, o, a, e);
              } catch (u) {
                this.error(u);
              }
            n(c);
          } else {
            const c = s.errorRetry, l = c ? c.maxNumRetry : 0;
            if (this._requestLicenseFailureCount++, this._requestLicenseFailureCount > l || o.status >= 400 && o.status < 500)
              r(new Je({
                type: q.KEY_SYSTEM_ERROR,
                details: C.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                decryptdata: e.decryptdata,
                fatal: !0,
                networkDetails: o,
                response: {
                  url: a,
                  data: void 0,
                  code: o.status,
                  text: o.statusText
                }
              }, `License Request XHR failed (${a}). Status: ${o.status} (${o.statusText})`));
            else {
              const u = l - this._requestLicenseFailureCount + 1;
              this.warn(`Retrying license request, ${u} attempts left`), this.requestLicense(e, t).then(n, r);
            }
          }
      }, e.licenseXhr && e.licenseXhr.readyState !== XMLHttpRequest.DONE && e.licenseXhr.abort(), e.licenseXhr = o, this.setupLicenseXHR(o, a, e, t).then(({
        xhr: c,
        licenseChallenge: l
      }) => {
        e.keySystem == ve.PLAYREADY && (l = this.unpackPlayReadyKeyMessage(c, l)), c.send(l);
      }).catch(r);
    });
  }
  onDestroying() {
    this.unregisterListeners(), this._clear();
  }
  onMediaAttached(e, t) {
    if (!this.config.emeEnabled)
      return;
    const s = t.media;
    this.media = s, He(s, "encrypted", this.onMediaEncrypted), He(s, "waitingforkey", this.onWaitingForKey);
    const n = this.mediaResolved;
    n ? n() : this.mediaKeys = s.mediaKeys;
  }
  onMediaDetached() {
    const e = this.media;
    e && (ze(e, "encrypted", this.onMediaEncrypted), ze(e, "waitingforkey", this.onWaitingForKey), this.media = null, this.mediaKeys = null);
  }
  _clear() {
    var e;
    this._requestLicenseFailureCount = 0, this.keyIdToKeySessionPromise = {}, this.bannedKeyIds = {};
    const t = this.mediaResolved;
    if (t && t(), !this.mediaKeys && !this.mediaKeySessions.length)
      return;
    const s = this.media, n = this.mediaKeySessions.slice();
    this.mediaKeySessions = [], this.mediaKeys = null, $t.clearKeyUriToKeyIdMap();
    const r = n.length;
    cs.CDMCleanupPromise = Promise.all(n.map((a) => this.removeSession(a)).concat((s == null || (e = s.setMediaKeys(null)) == null ? void 0 : e.catch((a) => {
      this.log(`Could not clear media keys: ${a}`), this.hls && this.hls.trigger(y.ERROR, {
        type: q.OTHER_ERROR,
        details: C.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR,
        fatal: !1,
        error: new Error(`Could not clear media keys: ${a}`)
      });
    })) || Promise.resolve())).catch((a) => {
      this.log(`Could not close sessions and clear media keys: ${a}`), this.hls && this.hls.trigger(y.ERROR, {
        type: q.OTHER_ERROR,
        details: C.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR,
        fatal: !1,
        error: new Error(`Could not close sessions and clear media keys: ${a}`)
      });
    }).then(() => {
      r && this.log("finished closing key sessions and clearing media keys");
    });
  }
  onManifestLoading() {
    this._clear();
  }
  onManifestLoaded(e, {
    sessionKeys: t
  }) {
    if (!(!t || !this.config.emeEnabled) && !this.keyFormatPromise) {
      const s = t.reduce((n, r) => (n.indexOf(r.keyFormat) === -1 && n.push(r.keyFormat), n), []);
      this.log(`Selecting key-system from session-keys ${s.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(s);
    }
  }
  removeSession(e) {
    const {
      mediaKeysSession: t,
      licenseXhr: s,
      decryptdata: n
    } = e;
    if (t) {
      this.log(`Remove licenses and keys and close session "${t.sessionId}" keyId: ${Be((n == null ? void 0 : n.keyId) || [])}`), e._onmessage && (t.removeEventListener("message", e._onmessage), e._onmessage = void 0), e._onkeystatuseschange && (t.removeEventListener("keystatuseschange", e._onkeystatuseschange), e._onkeystatuseschange = void 0), s && s.readyState !== XMLHttpRequest.DONE && s.abort(), e.mediaKeysSession = e.decryptdata = e.licenseXhr = void 0;
      const r = this.mediaKeySessions.indexOf(e);
      r > -1 && this.mediaKeySessions.splice(r, 1);
      const {
        keyStatusTimeouts: a
      } = e;
      a && Object.keys(a).forEach((l) => self.clearTimeout(a[l]));
      const {
        drmSystemOptions: o
      } = this.config;
      return (sh(o) ? new Promise((l, u) => {
        self.setTimeout(() => u(new Error("MediaKeySession.remove() timeout")), 8e3), t.remove().then(l).catch(u);
      }) : Promise.resolve()).catch((l) => {
        this.log(`Could not remove session: ${l}`), this.hls && this.hls.trigger(y.ERROR, {
          type: q.OTHER_ERROR,
          details: C.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR,
          fatal: !1,
          error: new Error(`Could not remove session: ${l}`)
        });
      }).then(() => t.close()).catch((l) => {
        this.log(`Could not close session: ${l}`), this.hls && this.hls.trigger(y.ERROR, {
          type: q.OTHER_ERROR,
          details: C.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR,
          fatal: !1,
          error: new Error(`Could not close session: ${l}`)
        });
      });
    }
    return Promise.resolve();
  }
}
cs.CDMCleanupPromise = void 0;
function Ys(i) {
  if (!i)
    throw new Error("Could not read keyId of undefined decryptdata");
  if (i.keyId === null)
    throw new Error("keyId is null");
  return Be(i.keyId);
}
function Sf(i, e) {
  if (i.keyId && e.mediaKeysSession.keyStatuses.has(i.keyId))
    return e.mediaKeysSession.keyStatuses.get(i.keyId);
  if (i.matches(e.decryptdata))
    return e.keyStatus;
}
class Je extends Error {
  constructor(e, t) {
    super(t), this.data = void 0, e.error || (e.error = new Error(t)), this.data = e, e.err = e.error;
  }
}
function va(i, e) {
  const t = i === "output-restricted", s = t ? C.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED : C.KEY_SYSTEM_STATUS_INTERNAL_ERROR;
  return new Je({
    type: q.KEY_SYSTEM_ERROR,
    details: s,
    fatal: !1,
    decryptdata: e
  }, t ? "HDCP level output restricted" : `key status changed to "${i}"`);
}
class xf {
  constructor(e) {
    this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = e, this.registerListeners();
  }
  setStreamController(e) {
    this.streamController = e;
  }
  registerListeners() {
    this.hls.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this), this.hls.on(y.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  unregisterListeners() {
    this.hls.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this), this.hls.off(y.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  destroy() {
    this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null;
  }
  onMediaAttaching(e, t) {
    const s = this.hls.config;
    if (s.capLevelOnFPSDrop) {
      const n = t.media instanceof self.HTMLVideoElement ? t.media : null;
      this.media = n, n && typeof n.getVideoPlaybackQuality == "function" && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), s.fpsDroppedMonitoringPeriod);
    }
  }
  onMediaDetaching() {
    this.media = null;
  }
  checkFPS(e, t, s) {
    const n = performance.now();
    if (t) {
      if (this.lastTime) {
        const r = n - this.lastTime, a = s - this.lastDroppedFrames, o = t - this.lastDecodedFrames, c = 1e3 * a / r, l = this.hls;
        if (l.trigger(y.FPS_DROP, {
          currentDropped: a,
          currentDecoded: o,
          totalDroppedFrames: s
        }), c > 0 && a > l.config.fpsDroppedMonitoringThreshold * o) {
          let u = l.currentLevel;
          l.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + u), u > 0 && (l.autoLevelCapping === -1 || l.autoLevelCapping >= u) && (u = u - 1, l.trigger(y.FPS_DROP_LEVEL_CAPPING, {
            level: u,
            droppedLevel: l.currentLevel
          }), l.autoLevelCapping = u, this.streamController.nextLevelSwitch());
        }
      }
      this.lastTime = n, this.lastDroppedFrames = s, this.lastDecodedFrames = t;
    }
  }
  checkFPSInterval() {
    const e = this.media;
    if (e)
      if (this.isVideoPlaybackQualityAvailable) {
        const t = e.getVideoPlaybackQuality();
        this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames);
      } else
        this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount);
  }
}
function hl(i, e) {
  let t;
  try {
    t = new Event("addtrack");
  } catch {
    t = document.createEvent("Event"), t.initEvent("addtrack", !1, !1);
  }
  t.track = i, e.dispatchEvent(t);
}
function dl(i, e) {
  const t = i.mode;
  if (t === "disabled" && (i.mode = "hidden"), i.cues && !i.cues.getCueById(e.id))
    try {
      if (i.addCue(e), !i.cues.getCueById(e.id))
        throw new Error(`addCue is failed for: ${e}`);
    } catch (s) {
      ge.debug(`[texttrack-utils]: ${s}`);
      try {
        const n = new self.TextTrackCue(e.startTime, e.endTime, e.text);
        n.id = e.id, i.addCue(n);
      } catch (n) {
        ge.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${n}`);
      }
    }
  t === "disabled" && (i.mode = t);
}
function as(i, e) {
  const t = i.mode;
  if (t === "disabled" && (i.mode = "hidden"), i.cues)
    for (let s = i.cues.length; s--; )
      e && i.cues[s].removeEventListener("enter", e), i.removeCue(i.cues[s]);
  t === "disabled" && (i.mode = t);
}
function _n(i, e, t, s) {
  const n = i.mode;
  if (n === "disabled" && (i.mode = "hidden"), i.cues && i.cues.length > 0) {
    const r = Lf(i.cues, e, t);
    for (let a = 0; a < r.length; a++)
      (!s || s(r[a])) && i.removeCue(r[a]);
  }
  n === "disabled" && (i.mode = n);
}
function Af(i, e) {
  if (e <= i[0].startTime)
    return 0;
  const t = i.length - 1;
  if (e > i[t].endTime)
    return -1;
  let s = 0, n = t, r;
  for (; s <= n; )
    if (r = Math.floor((n + s) / 2), e < i[r].startTime)
      n = r - 1;
    else if (e > i[r].startTime && s < t)
      s = r + 1;
    else
      return r;
  return i[s].startTime - e < e - i[n].startTime ? s : n;
}
function Lf(i, e, t) {
  const s = [], n = Af(i, e);
  if (n > -1)
    for (let r = n, a = i.length; r < a; r++) {
      const o = i[r];
      if (o.startTime >= e && o.endTime <= t)
        s.push(o);
      else if (o.startTime > t)
        return s;
    }
  return s;
}
function li(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) {
    const s = i[t];
    (s.kind === "subtitles" || s.kind === "captions") && s.label && e.push(i[t]);
  }
  return e;
}
class If extends nr {
  constructor(e) {
    super(e, "subtitle-track-controller"), this.media = null, this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.queuedDefaultTrack = -1, this.useTextTrackPolling = !1, this.subtitlePollingInterval = -1, this._subtitleDisplay = !0, this.asyncPollTrackChange = () => this.pollTrackChange(0), this.onTextTracksChanged = () => {
      if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), !this.media || !this.hls.config.renderTextTracksNatively)
        return;
      let t = null;
      const s = li(this.media.textTracks);
      for (let r = 0; r < s.length; r++)
        if (s[r].mode === "hidden")
          t = s[r];
        else if (s[r].mode === "showing") {
          t = s[r];
          break;
        }
      const n = this.findTrackForTextTrack(t);
      this.subtitleTrack !== n && this.setSubtitleTrack(n);
    }, this.registerListeners();
  }
  destroy() {
    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, this.onTextTracksChanged = this.asyncPollTrackChange = null, super.destroy();
  }
  get subtitleDisplay() {
    return this._subtitleDisplay;
  }
  set subtitleDisplay(e) {
    this._subtitleDisplay = e, this.trackId > -1 && this.toggleTrackModes();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.MANIFEST_PARSED, this.onManifestParsed, this), e.on(y.LEVEL_LOADING, this.onLevelLoading, this), e.on(y.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(y.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(y.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.MANIFEST_PARSED, this.onManifestParsed, this), e.off(y.LEVEL_LOADING, this.onLevelLoading, this), e.off(y.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(y.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(y.ERROR, this.onError, this);
  }
  // Listen for subtitle track change, then extract the current track ID.
  onMediaAttached(e, t) {
    this.media = t.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange));
  }
  pollTrackChange(e) {
    self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.onTextTracksChanged, e);
  }
  onMediaDetaching(e, t) {
    const s = this.media;
    if (!s)
      return;
    const n = !!t.transferMedia;
    if (self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || s.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), this.subtitleTrack = -1, this.media = null, n)
      return;
    li(s.textTracks).forEach((a) => {
      as(a);
    });
  }
  onManifestLoading() {
    this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0;
  }
  // Fired whenever a new manifest is loaded.
  onManifestParsed(e, t) {
    this.tracks = t.subtitleTracks;
  }
  onSubtitleTrackLoaded(e, t) {
    const {
      id: s,
      groupId: n,
      details: r
    } = t, a = this.tracksInGroup[s];
    if (!a || a.groupId !== n) {
      this.warn(`Subtitle track with id:${s} and group:${n} not found in active group ${a == null ? void 0 : a.groupId}`);
      return;
    }
    const o = a.details;
    a.details = t.details, this.log(`Subtitle track ${s} "${a.name}" lang:${a.lang} group:${n} loaded [${r.startSN}-${r.endSN}]`), s === this.trackId && this.playlistLoaded(s, t, o);
  }
  onLevelLoading(e, t) {
    this.switchLevel(t.level);
  }
  onLevelSwitching(e, t) {
    this.switchLevel(t.level);
  }
  switchLevel(e) {
    const t = this.hls.levels[e];
    if (!t)
      return;
    const s = t.subtitleGroups || null, n = this.groupIds;
    let r = this.currentTrack;
    if (!s || (n == null ? void 0 : n.length) !== (s == null ? void 0 : s.length) || s != null && s.some((a) => (n == null ? void 0 : n.indexOf(a)) === -1)) {
      this.groupIds = s, this.trackId = -1, this.currentTrack = null;
      const a = this.tracks.filter((u) => !s || s.indexOf(u.groupId) !== -1);
      if (a.length)
        this.selectDefaultTrack && !a.some((u) => u.default) && (this.selectDefaultTrack = !1), a.forEach((u, h) => {
          u.id = h;
        });
      else if (!r && !this.tracksInGroup.length)
        return;
      this.tracksInGroup = a;
      const o = this.hls.config.subtitlePreference;
      if (!r && o) {
        this.selectDefaultTrack = !1;
        const u = yt(o, a);
        if (u > -1)
          r = a[u];
        else {
          const h = yt(o, this.tracks);
          r = this.tracks[h];
        }
      }
      let c = this.findTrackId(r);
      c === -1 && r && (c = this.findTrackId(null));
      const l = {
        subtitleTracks: a
      };
      this.log(`Updating subtitle tracks, ${a.length} track(s) found in "${s == null ? void 0 : s.join(",")}" group-id`), this.hls.trigger(y.SUBTITLE_TRACKS_UPDATED, l), c !== -1 && this.trackId === -1 && this.setSubtitleTrack(c);
    }
  }
  findTrackId(e) {
    const t = this.tracksInGroup, s = this.selectDefaultTrack;
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      if (!(s && !r.default || !s && !e) && (!e || Xt(r, e)))
        return n;
    }
    if (e) {
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (Cs(e.attrs, r.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))
          return n;
      }
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (Cs(e.attrs, r.attrs, ["LANGUAGE"]))
          return n;
      }
    }
    return -1;
  }
  findTrackForTextTrack(e) {
    if (e) {
      const t = this.tracksInGroup;
      for (let s = 0; s < t.length; s++) {
        const n = t[s];
        if (An(n, e))
          return s;
      }
    }
    return -1;
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === re.SUBTITLE_TRACK && t.context.id === this.trackId && (!this.groupIds || this.groupIds.indexOf(t.context.groupId) !== -1) && this.checkRetry(t);
  }
  get allSubtitleTracks() {
    return this.tracks;
  }
  /** get alternate subtitle tracks list from playlist **/
  get subtitleTracks() {
    return this.tracksInGroup;
  }
  /** get/set index of the selected subtitle track (based on index in subtitle track lists) **/
  get subtitleTrack() {
    return this.trackId;
  }
  set subtitleTrack(e) {
    this.selectDefaultTrack = !1, this.setSubtitleTrack(e);
  }
  setSubtitleOption(e) {
    if (this.hls.config.subtitlePreference = e, e) {
      if (e.id === -1)
        return this.setSubtitleTrack(-1), null;
      const t = this.allSubtitleTracks;
      if (this.selectDefaultTrack = !1, t.length) {
        const s = this.currentTrack;
        if (s && Xt(e, s))
          return s;
        const n = yt(e, this.tracksInGroup);
        if (n > -1) {
          const r = this.tracksInGroup[n];
          return this.setSubtitleTrack(n), r;
        } else {
          if (s)
            return null;
          {
            const r = yt(e, t);
            if (r > -1)
              return t[r];
          }
        }
      }
    }
    return null;
  }
  loadPlaylist(e) {
    super.loadPlaylist(), this.shouldLoadPlaylist(this.currentTrack) && this.scheduleLoading(this.currentTrack, e);
  }
  loadingPlaylist(e, t) {
    super.loadingPlaylist(e, t);
    const s = e.id, n = e.groupId, r = this.getUrlWithDirectives(e.url, t), a = e.details, o = a == null ? void 0 : a.age;
    this.log(`Loading subtitle ${s} "${e.name}" lang:${e.lang} group:${n}${(t == null ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${o && a.live ? " age " + o.toFixed(1) + (a.type && " " + a.type || "") : ""} ${r}`), this.hls.trigger(y.SUBTITLE_TRACK_LOADING, {
      url: r,
      id: s,
      groupId: n,
      deliveryDirectives: t || null,
      track: e
    });
  }
  /**
   * Disables the old subtitleTrack and sets current mode on the next subtitleTrack.
   * This operates on the DOM textTracks.
   * A value of -1 will disable all subtitle tracks.
   */
  toggleTrackModes() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = li(e.textTracks), s = this.currentTrack;
    let n;
    if (s && (n = t.filter((r) => An(s, r))[0], n || this.warn(`Unable to find subtitle TextTrack with name "${s.name}" and language "${s.lang}"`)), [].slice.call(t).forEach((r) => {
      r.mode !== "disabled" && r !== n && (r.mode = "disabled");
    }), n) {
      const r = this.subtitleDisplay ? "showing" : "hidden";
      n.mode !== r && (n.mode = r);
    }
  }
  /**
   * This method is responsible for validating the subtitle index and periodically reloading if live.
   * Dispatches the SUBTITLE_TRACK_SWITCH event, which instructs the subtitle-stream-controller to load the selected track.
   */
  setSubtitleTrack(e) {
    const t = this.tracksInGroup;
    if (!this.media) {
      this.queuedDefaultTrack = e;
      return;
    }
    if (e < -1 || e >= t.length || !G(e)) {
      this.warn(`Invalid subtitle track id: ${e}`);
      return;
    }
    this.selectDefaultTrack = !1;
    const s = this.currentTrack, n = t[e] || null;
    if (this.trackId = e, this.currentTrack = n, this.toggleTrackModes(), !n) {
      this.hls.trigger(y.SUBTITLE_TRACK_SWITCH, {
        id: e
      });
      return;
    }
    const r = !!n.details && !n.details.live;
    if (e === this.trackId && n === s && r)
      return;
    this.log(`Switching to subtitle-track ${e}` + (n ? ` "${n.name}" lang:${n.lang} group:${n.groupId}` : ""));
    const {
      id: a,
      groupId: o = "",
      name: c,
      type: l,
      url: u
    } = n;
    this.hls.trigger(y.SUBTITLE_TRACK_SWITCH, {
      id: a,
      groupId: o,
      name: c,
      type: l,
      url: u
    });
    const h = this.switchParams(n.url, s == null ? void 0 : s.details, n.details);
    this.loadPlaylist(h);
  }
}
function Rf() {
  try {
    return crypto.randomUUID();
  } catch {
    try {
      const e = URL.createObjectURL(new Blob()), t = e.toString();
      return URL.revokeObjectURL(e), t.slice(t.lastIndexOf("/") + 1);
    } catch {
      let t = (/* @__PURE__ */ new Date()).getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (n) => {
        const r = (t + Math.random() * 16) % 16 | 0;
        return t = Math.floor(t / 16), (n == "x" ? r : r & 3 | 8).toString(16);
      });
    }
  }
}
function Ss(i) {
  let e = 5381, t = i.length;
  for (; t; )
    e = e * 33 ^ i.charCodeAt(--t);
  return (e >>> 0).toString();
}
const us = 0.025;
let Ai = /* @__PURE__ */ (function(i) {
  return i[i.Point = 0] = "Point", i[i.Range = 1] = "Range", i;
})({});
function _f(i, e, t) {
  return `${i.identifier}-${t + 1}-${Ss(e)}`;
}
class kf {
  constructor(e, t) {
    this.base = void 0, this._duration = null, this._timelineStart = null, this.appendInPlaceDisabled = void 0, this.appendInPlaceStarted = void 0, this.dateRange = void 0, this.hasPlayed = !1, this.cumulativeDuration = 0, this.resumeOffset = NaN, this.playoutLimit = NaN, this.restrictions = {
      skip: !1,
      jump: !1
    }, this.snapOptions = {
      out: !1,
      in: !1
    }, this.assetList = [], this.assetListLoader = void 0, this.assetListResponse = null, this.resumeAnchor = void 0, this.error = void 0, this.resetOnResume = void 0, this.base = t, this.dateRange = e, this.setDateRange(e);
  }
  setDateRange(e) {
    this.dateRange = e, this.resumeOffset = e.attr.optionalFloat("X-RESUME-OFFSET", this.resumeOffset), this.playoutLimit = e.attr.optionalFloat("X-PLAYOUT-LIMIT", this.playoutLimit), this.restrictions = e.attr.enumeratedStringList("X-RESTRICT", this.restrictions), this.snapOptions = e.attr.enumeratedStringList("X-SNAP", this.snapOptions);
  }
  reset() {
    var e;
    this.appendInPlaceStarted = !1, (e = this.assetListLoader) == null || e.destroy(), this.assetListLoader = void 0, this.supplementsPrimary || (this.assetListResponse = null, this.assetList = [], this._duration = null);
  }
  isAssetPastPlayoutLimit(e) {
    var t;
    if (e > 0 && e >= this.assetList.length)
      return !0;
    const s = this.playoutLimit;
    return e <= 0 || isNaN(s) ? !1 : s === 0 ? !0 : (((t = this.assetList[e]) == null ? void 0 : t.startOffset) || 0) > s;
  }
  findAssetIndex(e) {
    return this.assetList.indexOf(e);
  }
  get identifier() {
    return this.dateRange.id;
  }
  get startDate() {
    return this.dateRange.startDate;
  }
  get startTime() {
    const e = this.dateRange.startTime;
    if (this.snapOptions.out) {
      const t = this.dateRange.tagAnchor;
      if (t)
        return Xi(e, t);
    }
    return e;
  }
  get startOffset() {
    return this.cue.pre ? 0 : this.startTime;
  }
  get startIsAligned() {
    if (this.startTime === 0 || this.snapOptions.out)
      return !0;
    const e = this.dateRange.tagAnchor;
    if (e) {
      const t = this.dateRange.startTime, s = Xi(t, e);
      return t - s < 0.1;
    }
    return !1;
  }
  get resumptionOffset() {
    const e = this.resumeOffset, t = G(e) ? e : this.duration;
    return this.cumulativeDuration + t;
  }
  get resumeTime() {
    const e = this.startOffset + this.resumptionOffset;
    if (this.snapOptions.in) {
      const t = this.resumeAnchor;
      if (t)
        return Xi(e, t);
    }
    return e;
  }
  get appendInPlace() {
    return this.appendInPlaceStarted ? !0 : this.appendInPlaceDisabled ? !1 : !!(!this.cue.once && !this.cue.pre && // preroll starts at startPosition before startPosition is known (live)
    this.startIsAligned && (isNaN(this.playoutLimit) && isNaN(this.resumeOffset) || this.resumeOffset && this.duration && Math.abs(this.resumeOffset - this.duration) < us));
  }
  set appendInPlace(e) {
    if (this.appendInPlaceStarted) {
      this.resetOnResume = !e;
      return;
    }
    this.appendInPlaceDisabled = !e;
  }
  // Extended timeline start time
  get timelineStart() {
    return this._timelineStart !== null ? this._timelineStart : this.startTime;
  }
  set timelineStart(e) {
    this._timelineStart = e;
  }
  get duration() {
    const e = this.playoutLimit;
    let t;
    return this._duration !== null ? t = this._duration : this.dateRange.duration ? t = this.dateRange.duration : t = this.dateRange.plannedDuration || 0, !isNaN(e) && e < t && (t = e), t;
  }
  set duration(e) {
    this._duration = e;
  }
  get cue() {
    return this.dateRange.cue;
  }
  get timelineOccupancy() {
    return this.dateRange.attr["X-TIMELINE-OCCUPIES"] === "RANGE" ? Ai.Range : Ai.Point;
  }
  get supplementsPrimary() {
    return this.dateRange.attr["X-TIMELINE-STYLE"] === "PRIMARY";
  }
  get contentMayVary() {
    return this.dateRange.attr["X-CONTENT-MAY-VARY"] !== "NO";
  }
  get assetUrl() {
    return this.dateRange.attr["X-ASSET-URI"];
  }
  get assetListUrl() {
    return this.dateRange.attr["X-ASSET-LIST"];
  }
  get baseUrl() {
    return this.base.url;
  }
  get assetListLoaded() {
    return this.assetList.length > 0 || this.assetListResponse !== null;
  }
  toString() {
    return Cf(this);
  }
}
function Xi(i, e) {
  return i - e.start < e.duration / 2 && !(Math.abs(i - (e.start + e.duration)) < us) ? e.start : e.start + e.duration;
}
function fl(i, e, t) {
  const s = new self.URL(i, t);
  return s.protocol !== "data:" && s.searchParams.set("_HLS_primary_id", e), s;
}
function Qi(i, e) {
  for (; (t = i.assetList[++e]) != null && t.error; )
    var t;
  return e;
}
function Cf(i) {
  return `["${i.identifier}" ${i.cue.pre ? "<pre>" : i.cue.post ? "<post>" : ""}${i.timelineStart.toFixed(2)}-${i.resumeTime.toFixed(2)}]`;
}
function rs(i) {
  const e = i.timelineStart, t = i.duration || 0;
  return `["${i.identifier}" ${e.toFixed(2)}-${(e + t).toFixed(2)}]`;
}
class wf {
  constructor(e, t, s, n) {
    this.hls = void 0, this.interstitial = void 0, this.assetItem = void 0, this.tracks = null, this.hasDetails = !1, this.mediaAttached = null, this._currentTime = void 0, this._bufferedEosTime = void 0, this.checkPlayout = () => {
      this.reachedPlayout(this.currentTime) && this.hls && this.hls.trigger(y.PLAYOUT_LIMIT_REACHED, {});
    };
    const r = this.hls = new e(t);
    this.interstitial = s, this.assetItem = n;
    const a = () => {
      this.hasDetails = !0;
    };
    r.once(y.LEVEL_LOADED, a), r.once(y.AUDIO_TRACK_LOADED, a), r.once(y.SUBTITLE_TRACK_LOADED, a), r.on(y.MEDIA_ATTACHING, (o, {
      media: c
    }) => {
      this.removeMediaListeners(), this.mediaAttached = c, this.interstitial.playoutLimit && (c.addEventListener("timeupdate", this.checkPlayout), this.appendInPlace && r.on(y.BUFFER_APPENDED, () => {
        const u = this.bufferedEnd;
        this.reachedPlayout(u) && (this._bufferedEosTime = u, r.trigger(y.BUFFERED_TO_END, void 0));
      }));
    });
  }
  get appendInPlace() {
    return this.interstitial.appendInPlace;
  }
  loadSource() {
    const e = this.hls;
    if (e)
      if (e.url)
        e.levels.length && !e.started && e.startLoad(-1, !0);
      else {
        let t = this.assetItem.uri;
        try {
          t = fl(t, e.config.primarySessionId || "").href;
        } catch {
        }
        e.loadSource(t);
      }
  }
  bufferedInPlaceToEnd(e) {
    var t;
    if (!this.appendInPlace)
      return !1;
    if ((t = this.hls) != null && t.bufferedToEnd)
      return !0;
    if (!e)
      return !1;
    const s = Math.min(this._bufferedEosTime || 1 / 0, this.duration), n = this.timelineOffset, r = se.bufferInfo(e, n, 0);
    return this.getAssetTime(r.end) >= s - 0.02;
  }
  reachedPlayout(e) {
    const s = this.interstitial.playoutLimit;
    return this.startOffset + e >= s;
  }
  get destroyed() {
    var e;
    return !((e = this.hls) != null && e.userConfig);
  }
  get assetId() {
    return this.assetItem.identifier;
  }
  get interstitialId() {
    return this.assetItem.parentIdentifier;
  }
  get media() {
    var e;
    return ((e = this.hls) == null ? void 0 : e.media) || null;
  }
  get bufferedEnd() {
    const e = this.media || this.mediaAttached;
    if (!e)
      return this._bufferedEosTime ? this._bufferedEosTime : this.currentTime;
    const t = se.bufferInfo(e, e.currentTime, 1e-3);
    return this.getAssetTime(t.end);
  }
  get currentTime() {
    const e = this.media || this.mediaAttached;
    return e ? this.getAssetTime(e.currentTime) : this._currentTime || 0;
  }
  get duration() {
    const e = this.assetItem.duration;
    if (!e)
      return 0;
    const t = this.interstitial.playoutLimit;
    if (t) {
      const s = t - this.startOffset;
      if (s > 0 && s < e)
        return s;
    }
    return e;
  }
  get remaining() {
    const e = this.duration;
    return e ? Math.max(0, e - this.currentTime) : 0;
  }
  get startOffset() {
    return this.assetItem.startOffset;
  }
  get timelineOffset() {
    var e;
    return ((e = this.hls) == null ? void 0 : e.config.timelineOffset) || 0;
  }
  set timelineOffset(e) {
    const t = this.timelineOffset;
    if (e !== t) {
      const s = e - t;
      if (Math.abs(s) > 1 / 9e4 && this.hls) {
        if (this.hasDetails)
          throw new Error("Cannot set timelineOffset after playlists are loaded");
        this.hls.config.timelineOffset = e;
      }
    }
  }
  getAssetTime(e) {
    const t = this.timelineOffset, s = this.duration;
    return Math.min(Math.max(0, e - t), s);
  }
  removeMediaListeners() {
    const e = this.mediaAttached;
    e && (this._currentTime = e.currentTime, this.bufferSnapShot(), e.removeEventListener("timeupdate", this.checkPlayout));
  }
  bufferSnapShot() {
    if (this.mediaAttached) {
      var e;
      (e = this.hls) != null && e.bufferedToEnd && (this._bufferedEosTime = this.bufferedEnd);
    }
  }
  destroy() {
    this.removeMediaListeners(), this.hls && this.hls.destroy(), this.hls = null, this.tracks = this.mediaAttached = this.checkPlayout = null;
  }
  attachMedia(e) {
    var t;
    this.loadSource(), (t = this.hls) == null || t.attachMedia(e);
  }
  detachMedia() {
    var e;
    this.removeMediaListeners(), this.mediaAttached = null, (e = this.hls) == null || e.detachMedia();
  }
  resumeBuffering() {
    var e;
    (e = this.hls) == null || e.resumeBuffering();
  }
  pauseBuffering() {
    var e;
    (e = this.hls) == null || e.pauseBuffering();
  }
  transferMedia() {
    var e;
    return this.bufferSnapShot(), ((e = this.hls) == null ? void 0 : e.transferMedia()) || null;
  }
  resetDetails() {
    const e = this.hls;
    if (e && this.hasDetails) {
      e.stopLoad();
      const t = (s) => delete s.details;
      e.levels.forEach(t), e.allAudioTracks.forEach(t), e.allSubtitleTracks.forEach(t), this.hasDetails = !1;
    }
  }
  on(e, t, s) {
    var n;
    (n = this.hls) == null || n.on(e, t);
  }
  once(e, t, s) {
    var n;
    (n = this.hls) == null || n.once(e, t);
  }
  off(e, t, s) {
    var n;
    (n = this.hls) == null || n.off(e, t);
  }
  toString() {
    var e;
    return `HlsAssetPlayer: ${rs(this.assetItem)} ${(e = this.hls) == null ? void 0 : e.sessionId} ${this.appendInPlace ? "append-in-place" : ""}`;
  }
}
const ba = 0.033;
class Df extends rt {
  constructor(e, t) {
    super("interstitials-sched", t), this.onScheduleUpdate = void 0, this.eventMap = {}, this.events = null, this.items = null, this.durations = {
      primary: 0,
      playout: 0,
      integrated: 0
    }, this.onScheduleUpdate = e;
  }
  destroy() {
    this.reset(), this.onScheduleUpdate = null;
  }
  reset() {
    this.eventMap = {}, this.setDurations(0, 0, 0), this.events && this.events.forEach((e) => e.reset()), this.events = this.items = null;
  }
  resetErrorsInRange(e, t) {
    return this.events ? this.events.reduce((s, n) => e <= n.startOffset && t > n.startOffset ? (delete n.error, s + 1) : s, 0) : 0;
  }
  get duration() {
    const e = this.items;
    return e ? e[e.length - 1].end : 0;
  }
  get length() {
    return this.items ? this.items.length : 0;
  }
  getEvent(e) {
    return e && this.eventMap[e] || null;
  }
  hasEvent(e) {
    return e in this.eventMap;
  }
  findItemIndex(e, t) {
    if (e.event)
      return this.findEventIndex(e.event.identifier);
    let s = -1;
    e.nextEvent ? s = this.findEventIndex(e.nextEvent.identifier) - 1 : e.previousEvent && (s = this.findEventIndex(e.previousEvent.identifier) + 1);
    const n = this.items;
    if (n)
      for (n[s] || (t === void 0 && (t = e.start), s = this.findItemIndexAtTime(t)); s >= 0 && (r = n[s]) != null && r.event; ) {
        var r;
        s--;
      }
    return s;
  }
  findItemIndexAtTime(e, t) {
    const s = this.items;
    if (s)
      for (let n = 0; n < s.length; n++) {
        let r = s[n];
        if (t && t !== "primary" && (r = r[t]), e === r.start || e > r.start && e < r.end)
          return n;
      }
    return -1;
  }
  findJumpRestrictedIndex(e, t) {
    const s = this.items;
    if (s)
      for (let n = e; n <= t && s[n]; n++) {
        const r = s[n].event;
        if (r != null && r.restrictions.jump && !r.appendInPlace)
          return n;
      }
    return -1;
  }
  findEventIndex(e) {
    const t = this.items;
    if (t)
      for (let n = t.length; n--; ) {
        var s;
        if (((s = t[n].event) == null ? void 0 : s.identifier) === e)
          return n;
      }
    return -1;
  }
  findAssetIndex(e, t) {
    const s = e.assetList, n = s.length;
    if (n > 1)
      for (let r = 0; r < n; r++) {
        const a = s[r];
        if (!a.error) {
          const o = a.timelineStart;
          if (t === o || t > o && (t < o + (a.duration || 0) || r === n - 1))
            return r;
        }
      }
    return 0;
  }
  get assetIdAtEnd() {
    var e;
    const t = (e = this.items) == null || (e = e[this.length - 1]) == null ? void 0 : e.event;
    if (t) {
      const s = t.assetList, n = s[s.length - 1];
      if (n)
        return n.identifier;
    }
    return null;
  }
  parseInterstitialDateRanges(e, t) {
    const s = e.main.details, {
      dateRanges: n
    } = s, r = this.events, a = this.parseDateRanges(n, {
      url: s.url
    }, t), o = Object.keys(n), c = r ? r.filter((l) => !o.includes(l.identifier)) : [];
    a.length && a.sort((l, u) => {
      const h = l.cue.pre, d = l.cue.post, g = u.cue.pre, f = u.cue.post;
      if (h && !g)
        return -1;
      if (g && !h || d && !f)
        return 1;
      if (f && !d)
        return -1;
      if (!h && !g && !d && !f) {
        const m = l.startTime, p = u.startTime;
        if (m !== p)
          return m - p;
      }
      return l.dateRange.tagOrder - u.dateRange.tagOrder;
    }), this.events = a, c.forEach((l) => {
      this.removeEvent(l);
    }), this.updateSchedule(e, c);
  }
  updateSchedule(e, t = [], s = !1) {
    const n = this.events || [];
    if (n.length || t.length || this.length < 2) {
      const r = this.items, a = this.parseSchedule(n, e);
      (s || t.length || (r == null ? void 0 : r.length) !== a.length || a.some((c, l) => Math.abs(c.playout.start - r[l].playout.start) > 5e-3 || Math.abs(c.playout.end - r[l].playout.end) > 5e-3)) && (this.items = a, this.onScheduleUpdate(t, r));
    }
  }
  parseDateRanges(e, t, s) {
    const n = [], r = Object.keys(e);
    for (let a = 0; a < r.length; a++) {
      const o = r[a], c = e[o];
      if (c.isInterstitial) {
        let l = this.eventMap[o];
        l ? l.setDateRange(c) : (l = new kf(c, t), this.eventMap[o] = l, s === !1 && (l.appendInPlace = s)), n.push(l);
      }
    }
    return n;
  }
  parseSchedule(e, t) {
    const s = [], n = t.main.details, r = n.live ? 1 / 0 : n.edge;
    let a = 0;
    if (e = e.filter((c) => !c.error && !(c.cue.once && c.hasPlayed)), e.length) {
      this.resolveOffsets(e, t);
      let c = 0, l = 0;
      if (e.forEach((u, h) => {
        const d = u.cue.pre, g = u.cue.post, f = e[h - 1] || null, m = u.appendInPlace, p = g ? r : u.startOffset, T = u.duration, E = u.timelineOccupancy === Ai.Range ? T : 0, v = u.resumptionOffset, x = (f == null ? void 0 : f.startTime) === p, A = p + u.cumulativeDuration;
        let _ = m ? A + T : p + v;
        if (d || !g && p <= 0) {
          const L = l;
          l += E, u.timelineStart = A;
          const I = a;
          a += T, s.push({
            event: u,
            start: A,
            end: _,
            playout: {
              start: I,
              end: a
            },
            integrated: {
              start: L,
              end: l
            }
          });
        } else if (p <= r) {
          if (!x) {
            const R = p - c;
            if (R > ba) {
              const w = c, O = l;
              l += R;
              const K = a;
              a += R;
              const W = {
                previousEvent: e[h - 1] || null,
                nextEvent: u,
                start: w,
                end: w + R,
                playout: {
                  start: K,
                  end: a
                },
                integrated: {
                  start: O,
                  end: l
                }
              };
              s.push(W);
            } else R > 0 && f && (f.cumulativeDuration += R, s[s.length - 1].end = p);
          }
          g && (_ = A), u.timelineStart = A;
          const L = l;
          l += E;
          const I = a;
          a += T, s.push({
            event: u,
            start: A,
            end: _,
            playout: {
              start: I,
              end: a
            },
            integrated: {
              start: L,
              end: l
            }
          });
        } else
          return;
        const S = u.resumeTime;
        g || S > r ? c = r : c = S;
      }), c < r) {
        var o;
        const u = c, h = l, d = r - c;
        l += d;
        const g = a;
        a += d, s.push({
          previousEvent: ((o = s[s.length - 1]) == null ? void 0 : o.event) || null,
          nextEvent: null,
          start: c,
          end: u + d,
          playout: {
            start: g,
            end: a
          },
          integrated: {
            start: h,
            end: l
          }
        });
      }
      this.setDurations(r, a, l);
    } else
      s.push({
        previousEvent: null,
        nextEvent: null,
        start: 0,
        end: r,
        playout: {
          start: 0,
          end: r
        },
        integrated: {
          start: 0,
          end: r
        }
      }), this.setDurations(r, r, r);
    return s;
  }
  setDurations(e, t, s) {
    this.durations = {
      primary: e,
      playout: t,
      integrated: s
    };
  }
  resolveOffsets(e, t) {
    const s = t.main.details, n = s.live ? 1 / 0 : s.edge;
    let r = 0, a = -1;
    e.forEach((o, c) => {
      const l = o.cue.pre, u = o.cue.post, h = l ? 0 : u ? n : o.startTime;
      this.updateAssetDurations(o), a === h ? o.cumulativeDuration = r : (r = 0, a = h), !u && o.snapOptions.in && (o.resumeAnchor = Qt(null, s.fragments, o.startOffset + o.resumptionOffset, 0, 0) || void 0), o.appendInPlace && !o.appendInPlaceStarted && (this.primaryCanResumeInPlaceAt(o, t) || (o.appendInPlace = !1)), !o.appendInPlace && c + 1 < e.length && e[c + 1].startTime - e[c].resumeTime < ba && (e[c + 1].appendInPlace = !1, e[c + 1].appendInPlace && this.warn(`Could not change append strategy for abutting event ${o}`));
      const g = G(o.resumeOffset) ? o.resumeOffset : o.duration;
      r += g;
    });
  }
  primaryCanResumeInPlaceAt(e, t) {
    const s = e.resumeTime, n = e.startTime + e.resumptionOffset;
    return Math.abs(s - n) > us ? (this.log(`"${e.identifier}" resumption ${s} not aligned with estimated timeline end ${n}`), !1) : !Object.keys(t).some((a) => {
      const o = t[a].details, c = o.edge;
      if (s >= c)
        return this.log(`"${e.identifier}" resumption ${s} past ${a} playlist end ${c}`), !1;
      const l = Qt(null, o.fragments, s);
      if (!l)
        return this.log(`"${e.identifier}" resumption ${s} does not align with any fragments in ${a} playlist (${o.fragStart}-${o.fragmentEnd})`), !0;
      const u = a === "audio" ? 0.175 : 0;
      return Math.abs(l.start - s) < us + u || Math.abs(l.end - s) < us + u ? !1 : (this.log(`"${e.identifier}" resumption ${s} not aligned with ${a} fragment bounds (${l.start}-${l.end} sn: ${l.sn} cc: ${l.cc})`), !0);
    });
  }
  updateAssetDurations(e) {
    if (!e.assetListLoaded)
      return;
    const t = e.timelineStart;
    let s = 0, n = !1, r = !1;
    for (let a = 0; a < e.assetList.length; a++) {
      const o = e.assetList[a], c = t + s;
      o.startOffset = s, o.timelineStart = c, n || (n = o.duration === null), r || (r = !!o.error);
      const l = o.error ? 0 : o.duration || 0;
      s += l;
    }
    n && !r ? e.duration = Math.max(s, e.duration) : e.duration = s;
  }
  removeEvent(e) {
    e.reset(), delete this.eventMap[e.identifier];
  }
}
function at(i) {
  return `[${i.event ? '"' + i.event.identifier + '"' : "primary"}: ${i.start.toFixed(2)}-${i.end.toFixed(2)}]`;
}
class Pf {
  constructor(e) {
    this.hls = void 0, this.hls = e;
  }
  destroy() {
    this.hls = null;
  }
  loadAssetList(e, t) {
    const s = e.assetListUrl;
    let n;
    try {
      n = fl(s, this.hls.sessionId, e.baseUrl);
    } catch (d) {
      const g = this.assignAssetListError(e, C.ASSET_LIST_LOAD_ERROR, d, s);
      this.hls.trigger(y.ERROR, g);
      return;
    }
    t && n.protocol !== "data:" && n.searchParams.set("_HLS_start_offset", "" + t);
    const r = this.hls.config, a = r.loader, o = new a(r), c = {
      responseType: "json",
      url: n.href
    }, l = r.interstitialAssetListLoadPolicy.default, u = {
      loadPolicy: l,
      timeout: l.maxLoadTimeMs,
      maxRetry: 0,
      retryDelay: 0,
      maxRetryDelay: 0
    }, h = {
      onSuccess: (d, g, f, m) => {
        const p = d.data, T = p == null ? void 0 : p.ASSETS;
        if (!Array.isArray(T)) {
          const E = this.assignAssetListError(e, C.ASSET_LIST_PARSING_ERROR, new Error("Invalid interstitial asset list"), f.url, g, m);
          this.hls.trigger(y.ERROR, E);
          return;
        }
        e.assetListResponse = p, this.hls.trigger(y.ASSET_LIST_LOADED, {
          event: e,
          assetListResponse: p,
          networkDetails: m
        });
      },
      onError: (d, g, f, m) => {
        const p = this.assignAssetListError(e, C.ASSET_LIST_LOAD_ERROR, new Error(`Error loading X-ASSET-LIST: HTTP status ${d.code} ${d.text} (${g.url})`), g.url, m, f);
        this.hls.trigger(y.ERROR, p);
      },
      onTimeout: (d, g, f) => {
        const m = this.assignAssetListError(e, C.ASSET_LIST_LOAD_TIMEOUT, new Error(`Timeout loading X-ASSET-LIST (${g.url})`), g.url, d, f);
        this.hls.trigger(y.ERROR, m);
      }
    };
    return o.load(c, u, h), this.hls.trigger(y.ASSET_LIST_LOADING, {
      event: e
    }), o;
  }
  assignAssetListError(e, t, s, n, r, a) {
    return e.error = s, {
      type: q.NETWORK_ERROR,
      details: t,
      fatal: !1,
      interstitial: e,
      url: n,
      error: s,
      networkDetails: a,
      stats: r
    };
  }
}
function Sa(i) {
  var e;
  i == null || (e = i.play()) == null || e.catch(() => {
  });
}
function zs(i, e) {
  return `[${i}] Advancing timeline position to ${e}`;
}
class Of extends rt {
  constructor(e, t) {
    super("interstitials", e.logger), this.HlsPlayerClass = void 0, this.hls = void 0, this.assetListLoader = void 0, this.mediaSelection = null, this.altSelection = null, this.media = null, this.detachedData = null, this.requiredTracks = null, this.manager = null, this.playerQueue = [], this.bufferedPos = -1, this.timelinePos = -1, this.schedule = void 0, this.playingItem = null, this.bufferingItem = null, this.waitingItem = null, this.endedItem = null, this.playingAsset = null, this.endedAsset = null, this.bufferingAsset = null, this.shouldPlay = !1, this.onPlay = () => {
      this.shouldPlay = !0;
    }, this.onPause = () => {
      this.shouldPlay = !1;
    }, this.onSeeking = () => {
      const s = this.currentTime;
      if (s === void 0 || this.playbackDisabled || !this.schedule)
        return;
      const n = s - this.timelinePos;
      if (Math.abs(n) < 1 / 7056e5)
        return;
      const a = n <= -0.01;
      this.timelinePos = s, this.bufferedPos = s;
      const o = this.playingItem;
      if (!o) {
        this.checkBuffer();
        return;
      }
      if (a && this.schedule.resetErrorsInRange(s, s - n) && this.updateSchedule(!0), this.checkBuffer(), a && s < o.start || s >= o.end) {
        var c;
        const g = this.findItemIndex(o);
        let f = this.schedule.findItemIndexAtTime(s);
        if (f === -1 && (f = g + (a ? -1 : 1), this.log(`seeked ${a ? "back " : ""}to position not covered by schedule ${s} (resolving from ${g} to ${f})`)), !this.isInterstitial(o) && (c = this.media) != null && c.paused && (this.shouldPlay = !1), !a && f > g) {
          const m = this.schedule.findJumpRestrictedIndex(g + 1, f);
          if (m > g) {
            this.setSchedulePosition(m);
            return;
          }
        }
        this.setSchedulePosition(f);
        return;
      }
      const l = this.playingAsset;
      if (!l) {
        if (this.playingLastItem && this.isInterstitial(o)) {
          const g = o.event.assetList[0];
          g && (this.endedItem = this.playingItem, this.playingItem = null, this.setScheduleToAssetAtTime(s, g));
        }
        return;
      }
      const u = l.timelineStart, h = l.duration || 0;
      if (a && s < u || s >= u + h) {
        var d;
        (d = o.event) != null && d.appendInPlace && (this.clearAssetPlayers(o.event, o), this.flushFrontBuffer(s)), this.setScheduleToAssetAtTime(s, l);
      }
    }, this.onTimeupdate = () => {
      const s = this.currentTime;
      if (s === void 0 || this.playbackDisabled)
        return;
      if (s > this.timelinePos)
        this.timelinePos = s, s > this.bufferedPos && this.checkBuffer();
      else
        return;
      const n = this.playingItem;
      if (!n || this.playingLastItem)
        return;
      if (s >= n.end) {
        this.timelinePos = n.end;
        const o = this.findItemIndex(n);
        this.setSchedulePosition(o + 1);
      }
      const r = this.playingAsset;
      if (!r)
        return;
      const a = r.timelineStart + (r.duration || 0);
      s >= a && this.setScheduleToAssetAtTime(s, r);
    }, this.onScheduleUpdate = (s, n) => {
      const r = this.schedule;
      if (!r)
        return;
      const a = this.playingItem, o = r.events || [], c = r.items || [], l = r.durations, u = s.map((m) => m.identifier), h = !!(o.length || u.length);
      (h || n) && this.log(`INTERSTITIALS_UPDATED (${o.length}): ${o}
Schedule: ${c.map((m) => at(m))} pos: ${this.timelinePos}`), u.length && this.log(`Removed events ${u}`);
      let d = null, g = null;
      a && (d = this.updateItem(a, this.timelinePos), this.itemsMatch(a, d) ? this.playingItem = d : this.waitingItem = this.endedItem = null), this.waitingItem = this.updateItem(this.waitingItem), this.endedItem = this.updateItem(this.endedItem);
      const f = this.bufferingItem;
      if (f && (g = this.updateItem(f, this.bufferedPos), this.itemsMatch(f, g) ? this.bufferingItem = g : f.event && (this.bufferingItem = this.playingItem, this.clearInterstitial(f.event, null))), s.forEach((m) => {
        m.assetList.forEach((p) => {
          this.clearAssetPlayer(p.identifier, null);
        });
      }), this.playerQueue.forEach((m) => {
        if (m.interstitial.appendInPlace) {
          const p = m.assetItem.timelineStart, T = m.timelineOffset - p;
          if (T)
            try {
              m.timelineOffset = p;
            } catch (E) {
              Math.abs(T) > us && this.warn(`${E} ("${m.assetId}" ${m.timelineOffset}->${p})`);
            }
        }
      }), h || n) {
        if (this.hls.trigger(y.INTERSTITIALS_UPDATED, {
          events: o.slice(0),
          schedule: c.slice(0),
          durations: l,
          removedIds: u
        }), this.isInterstitial(a) && u.includes(a.event.identifier)) {
          this.warn(`Interstitial "${a.event.identifier}" removed while playing`), this.primaryFallback(a.event);
          return;
        }
        a && this.trimInPlace(d, a), f && g !== d && this.trimInPlace(g, f), this.checkBuffer();
      }
    }, this.hls = e, this.HlsPlayerClass = t, this.assetListLoader = new Pf(e), this.schedule = new Df(this.onScheduleUpdate, e.logger), this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e && (e.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(y.AUDIO_TRACK_UPDATED, this.onAudioTrackUpdated, this), e.on(y.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.on(y.SUBTITLE_TRACK_UPDATED, this.onSubtitleTrackUpdated, this), e.on(y.EVENT_CUE_ENTER, this.onInterstitialCueEnter, this), e.on(y.ASSET_LIST_LOADED, this.onAssetListLoaded, this), e.on(y.BUFFER_APPENDED, this.onBufferAppended, this), e.on(y.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(y.BUFFERED_TO_END, this.onBufferedToEnd, this), e.on(y.MEDIA_ENDED, this.onMediaEnded, this), e.on(y.ERROR, this.onError, this), e.on(y.DESTROYING, this.onDestroying, this));
  }
  unregisterListeners() {
    const e = this.hls;
    e && (e.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(y.AUDIO_TRACK_UPDATED, this.onAudioTrackUpdated, this), e.off(y.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.off(y.SUBTITLE_TRACK_UPDATED, this.onSubtitleTrackUpdated, this), e.off(y.EVENT_CUE_ENTER, this.onInterstitialCueEnter, this), e.off(y.ASSET_LIST_LOADED, this.onAssetListLoaded, this), e.off(y.BUFFER_CODECS, this.onBufferCodecs, this), e.off(y.BUFFER_APPENDED, this.onBufferAppended, this), e.off(y.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(y.BUFFERED_TO_END, this.onBufferedToEnd, this), e.off(y.MEDIA_ENDED, this.onMediaEnded, this), e.off(y.ERROR, this.onError, this), e.off(y.DESTROYING, this.onDestroying, this));
  }
  startLoad() {
    this.resumeBuffering();
  }
  stopLoad() {
    this.pauseBuffering();
  }
  resumeBuffering() {
    var e;
    (e = this.getBufferingPlayer()) == null || e.resumeBuffering();
  }
  pauseBuffering() {
    var e;
    (e = this.getBufferingPlayer()) == null || e.pauseBuffering();
  }
  destroy() {
    this.unregisterListeners(), this.stopLoad(), this.assetListLoader && this.assetListLoader.destroy(), this.emptyPlayerQueue(), this.clearScheduleState(), this.schedule && this.schedule.destroy(), this.media = this.detachedData = this.mediaSelection = this.requiredTracks = this.altSelection = this.schedule = this.manager = null, this.hls = this.HlsPlayerClass = this.log = null, this.assetListLoader = null, this.onPlay = this.onPause = this.onSeeking = this.onTimeupdate = null, this.onScheduleUpdate = null;
  }
  onDestroying() {
    const e = this.primaryMedia || this.media;
    e && this.removeMediaListeners(e);
  }
  removeMediaListeners(e) {
    ze(e, "play", this.onPlay), ze(e, "pause", this.onPause), ze(e, "seeking", this.onSeeking), ze(e, "timeupdate", this.onTimeupdate);
  }
  onMediaAttaching(e, t) {
    const s = this.media = t.media;
    He(s, "seeking", this.onSeeking), He(s, "timeupdate", this.onTimeupdate), He(s, "play", this.onPlay), He(s, "pause", this.onPause);
  }
  onMediaAttached(e, t) {
    const s = this.effectivePlayingItem, n = this.detachedData;
    if (this.detachedData = null, s === null)
      this.checkStart();
    else if (!n) {
      this.clearScheduleState();
      const r = this.findItemIndex(s);
      this.setSchedulePosition(r);
    }
  }
  clearScheduleState() {
    this.log("clear schedule state"), this.playingItem = this.bufferingItem = this.waitingItem = this.endedItem = this.playingAsset = this.endedAsset = this.bufferingAsset = null;
  }
  onMediaDetaching(e, t) {
    const s = !!t.transferMedia, n = this.media;
    if (this.media = null, !s && (n && this.removeMediaListeners(n), this.detachedData)) {
      const r = this.getBufferingPlayer();
      r && (this.log(`Removing schedule state for detachedData and ${r}`), this.playingAsset = this.endedAsset = this.bufferingAsset = this.bufferingItem = this.waitingItem = this.detachedData = null, r.detachMedia()), this.shouldPlay = !1;
    }
  }
  get interstitialsManager() {
    if (!this.hls)
      return null;
    if (this.manager)
      return this.manager;
    const e = this, t = () => e.bufferingItem || e.waitingItem, s = (h) => h && e.getAssetPlayer(h.identifier), n = (h, d, g, f, m) => {
      if (h) {
        let p = h[d].start;
        const T = h.event;
        if (T) {
          if (d === "playout" || T.timelineOccupancy !== Ai.Point) {
            const E = s(g);
            (E == null ? void 0 : E.interstitial) === T && (p += E.assetItem.startOffset + E[m]);
          }
        } else {
          const E = f === "bufferedPos" ? a() : e[f];
          p += E - h.start;
        }
        return p;
      }
      return 0;
    }, r = (h, d) => {
      var g;
      if (h !== 0 && d !== "primary" && (g = e.schedule) != null && g.length) {
        var f;
        const m = e.schedule.findItemIndexAtTime(h), p = (f = e.schedule.items) == null ? void 0 : f[m];
        if (p) {
          const T = p[d].start - p.start;
          return h + T;
        }
      }
      return h;
    }, a = () => {
      const h = e.bufferedPos;
      return h === Number.MAX_VALUE ? o("primary") : Math.max(h, 0);
    }, o = (h) => {
      var d, g;
      return (d = e.primaryDetails) != null && d.live ? e.primaryDetails.edge : ((g = e.schedule) == null ? void 0 : g.durations[h]) || 0;
    }, c = (h, d) => {
      var g, f;
      const m = e.effectivePlayingItem;
      if (m != null && (g = m.event) != null && g.restrictions.skip || !e.schedule)
        return;
      e.log(`seek to ${h} "${d}"`);
      const p = e.effectivePlayingItem, T = e.schedule.findItemIndexAtTime(h, d), E = (f = e.schedule.items) == null ? void 0 : f[T], v = e.getBufferingPlayer(), x = v == null ? void 0 : v.interstitial, A = x == null ? void 0 : x.appendInPlace, _ = p && e.itemsMatch(p, E);
      if (p && (A || _)) {
        const S = s(e.playingAsset), L = (S == null ? void 0 : S.media) || e.primaryMedia;
        if (L) {
          const I = d === "primary" ? L.currentTime : n(p, d, e.playingAsset, "timelinePos", "currentTime"), R = h - I, w = (A ? I : L.currentTime) + R;
          if (w >= 0 && (!S || A || w <= S.duration)) {
            L.currentTime = w;
            return;
          }
        }
      }
      if (E) {
        let S = h;
        if (d !== "primary") {
          const I = E[d].start, R = h - I;
          S = E.start + R;
        }
        const L = !e.isInterstitial(E);
        if ((!e.isInterstitial(p) || p.event.appendInPlace) && (L || E.event.appendInPlace)) {
          const I = e.media || (A ? v == null ? void 0 : v.media : null);
          I && (I.currentTime = S);
        } else if (p) {
          const I = e.findItemIndex(p);
          if (T > I) {
            const w = e.schedule.findJumpRestrictedIndex(I + 1, T);
            if (w > I) {
              e.setSchedulePosition(w);
              return;
            }
          }
          let R = 0;
          if (L)
            e.timelinePos = S, e.checkBuffer();
          else {
            const w = E.event.assetList, O = h - (E[d] || E).start;
            for (let K = w.length; K--; ) {
              const W = w[K];
              if (W.duration && O >= W.startOffset && O < W.startOffset + W.duration) {
                R = K;
                break;
              }
            }
          }
          e.setSchedulePosition(T, R);
        }
      }
    }, l = () => {
      const h = e.effectivePlayingItem;
      if (e.isInterstitial(h))
        return h;
      const d = t();
      return e.isInterstitial(d) ? d : null;
    }, u = {
      get bufferedEnd() {
        const h = t(), d = e.bufferingItem;
        if (d && d === h) {
          var g;
          return n(d, "playout", e.bufferingAsset, "bufferedPos", "bufferedEnd") - d.playout.start || ((g = e.bufferingAsset) == null ? void 0 : g.startOffset) || 0;
        }
        return 0;
      },
      get currentTime() {
        const h = l(), d = e.effectivePlayingItem;
        return d && d === h ? n(d, "playout", e.effectivePlayingAsset, "timelinePos", "currentTime") - d.playout.start : 0;
      },
      set currentTime(h) {
        const d = l(), g = e.effectivePlayingItem;
        g && g === d && c(h + g.playout.start, "playout");
      },
      get duration() {
        const h = l();
        return h ? h.playout.end - h.playout.start : 0;
      },
      get assetPlayers() {
        var h;
        const d = (h = l()) == null ? void 0 : h.event.assetList;
        return d ? d.map((g) => e.getAssetPlayer(g.identifier)) : [];
      },
      get playingIndex() {
        var h;
        const d = (h = l()) == null ? void 0 : h.event;
        return d && e.effectivePlayingAsset ? d.findAssetIndex(e.effectivePlayingAsset) : -1;
      },
      get scheduleItem() {
        return l();
      }
    };
    return this.manager = {
      get events() {
        var h;
        return ((h = e.schedule) == null || (h = h.events) == null ? void 0 : h.slice(0)) || [];
      },
      get schedule() {
        var h;
        return ((h = e.schedule) == null || (h = h.items) == null ? void 0 : h.slice(0)) || [];
      },
      get interstitialPlayer() {
        return l() ? u : null;
      },
      get playerQueue() {
        return e.playerQueue.slice(0);
      },
      get bufferingAsset() {
        return e.bufferingAsset;
      },
      get bufferingItem() {
        return t();
      },
      get bufferingIndex() {
        const h = t();
        return e.findItemIndex(h);
      },
      get playingAsset() {
        return e.effectivePlayingAsset;
      },
      get playingItem() {
        return e.effectivePlayingItem;
      },
      get playingIndex() {
        const h = e.effectivePlayingItem;
        return e.findItemIndex(h);
      },
      primary: {
        get bufferedEnd() {
          return a();
        },
        get currentTime() {
          const h = e.timelinePos;
          return h > 0 ? h : 0;
        },
        set currentTime(h) {
          c(h, "primary");
        },
        get duration() {
          return o("primary");
        },
        get seekableStart() {
          var h;
          return ((h = e.primaryDetails) == null ? void 0 : h.fragmentStart) || 0;
        }
      },
      integrated: {
        get bufferedEnd() {
          return n(t(), "integrated", e.bufferingAsset, "bufferedPos", "bufferedEnd");
        },
        get currentTime() {
          return n(e.effectivePlayingItem, "integrated", e.effectivePlayingAsset, "timelinePos", "currentTime");
        },
        set currentTime(h) {
          c(h, "integrated");
        },
        get duration() {
          return o("integrated");
        },
        get seekableStart() {
          var h;
          return r(((h = e.primaryDetails) == null ? void 0 : h.fragmentStart) || 0, "integrated");
        }
      },
      skip: () => {
        const h = e.effectivePlayingItem, d = h == null ? void 0 : h.event;
        if (d && !d.restrictions.skip) {
          const g = e.findItemIndex(h);
          if (d.appendInPlace) {
            const f = h.playout.start + h.event.duration;
            c(f + 1e-3, "playout");
          } else
            e.advanceAfterAssetEnded(d, g, 1 / 0);
        }
      }
    };
  }
  // Schedule getters
  get effectivePlayingItem() {
    return this.waitingItem || this.playingItem || this.endedItem;
  }
  get effectivePlayingAsset() {
    return this.playingAsset || this.endedAsset;
  }
  get playingLastItem() {
    var e;
    const t = this.playingItem, s = (e = this.schedule) == null ? void 0 : e.items;
    return !this.playbackStarted || !t || !s ? !1 : this.findItemIndex(t) === s.length - 1;
  }
  get playbackStarted() {
    return this.effectivePlayingItem !== null;
  }
  // Media getters and event callbacks
  get currentTime() {
    var e, t;
    if (this.mediaSelection === null)
      return;
    const s = this.waitingItem || this.playingItem;
    if (this.isInterstitial(s) && !s.event.appendInPlace)
      return;
    let n = this.media;
    !n && (e = this.bufferingItem) != null && (e = e.event) != null && e.appendInPlace && (n = this.primaryMedia);
    const r = (t = n) == null ? void 0 : t.currentTime;
    if (!(r === void 0 || !G(r)))
      return r;
  }
  get primaryMedia() {
    var e;
    return this.media || ((e = this.detachedData) == null ? void 0 : e.media) || null;
  }
  isInterstitial(e) {
    return !!(e != null && e.event);
  }
  retreiveMediaSource(e, t) {
    const s = this.getAssetPlayer(e);
    s && this.transferMediaFromPlayer(s, t);
  }
  transferMediaFromPlayer(e, t) {
    const s = e.interstitial.appendInPlace, n = e.media;
    if (s && n === this.primaryMedia) {
      if (this.bufferingAsset = null, (!t || this.isInterstitial(t) && !t.event.appendInPlace) && t && n) {
        this.detachedData = {
          media: n
        };
        return;
      }
      const r = e.transferMedia();
      this.log(`transfer MediaSource from ${e} ${Te(r)}`), this.detachedData = r;
    } else t && n && (this.shouldPlay || (this.shouldPlay = !n.paused));
  }
  transferMediaTo(e, t) {
    var s, n;
    if (e.media === t)
      return;
    let r = null;
    const a = this.hls, o = e !== a, c = o && e.interstitial.appendInPlace, l = (s = this.detachedData) == null ? void 0 : s.mediaSource;
    let u;
    if (a.media)
      c && (r = a.transferMedia(), this.detachedData = r), u = "Primary";
    else if (l) {
      const f = this.getBufferingPlayer();
      f ? (r = f.transferMedia(), u = `${f}`) : u = "detached MediaSource";
    } else
      u = "detached media";
    if (!r) {
      if (l)
        r = this.detachedData, this.log(`using detachedData: MediaSource ${Te(r)}`);
      else if (!this.detachedData || a.media === t) {
        const f = this.playerQueue;
        f.length > 1 && f.forEach((m) => {
          if (o && m.interstitial.appendInPlace !== c) {
            const p = m.interstitial;
            this.clearInterstitial(m.interstitial, null), p.appendInPlace = !1, p.appendInPlace && this.warn(`Could not change append strategy for queued assets ${p}`);
          }
        }), this.hls.detachMedia(), this.detachedData = {
          media: t
        };
      }
    }
    const h = r && "mediaSource" in r && ((n = r.mediaSource) == null ? void 0 : n.readyState) !== "closed", d = h && r ? r : t;
    this.log(`${h ? "transfering MediaSource" : "attaching media"} to ${o ? e : "Primary"} from ${u} (media.currentTime: ${t.currentTime})`);
    const g = this.schedule;
    if (d === r && g) {
      const f = o && e.assetId === g.assetIdAtEnd;
      d.overrides = {
        duration: g.duration,
        endOfStream: !o || f,
        cueRemoval: !o
      };
    }
    e.attachMedia(d);
  }
  onInterstitialCueEnter() {
    this.onTimeupdate();
  }
  // Scheduling methods
  checkStart() {
    const e = this.schedule, t = e == null ? void 0 : e.events;
    if (!t || this.playbackDisabled || !this.media)
      return;
    this.bufferedPos === -1 && (this.bufferedPos = 0);
    const s = this.timelinePos, n = this.effectivePlayingItem;
    if (s === -1) {
      const r = this.hls.startPosition;
      if (this.log(zs("checkStart", r)), this.timelinePos = r, t.length && t[0].cue.pre) {
        const a = e.findEventIndex(t[0].identifier);
        this.setSchedulePosition(a);
      } else if (r >= 0 || !this.primaryLive) {
        const a = this.timelinePos = r > 0 ? r : 0, o = e.findItemIndexAtTime(a);
        this.setSchedulePosition(o);
      }
    } else if (n && !this.playingItem) {
      const r = e.findItemIndex(n);
      this.setSchedulePosition(r);
    }
  }
  advanceAssetBuffering(e, t) {
    const s = e.event, n = s.findAssetIndex(t), r = Qi(s, n);
    if (!s.isAssetPastPlayoutLimit(r))
      this.bufferedToEvent(e, r);
    else if (this.schedule) {
      var a;
      const o = (a = this.schedule.items) == null ? void 0 : a[this.findItemIndex(e) + 1];
      o && this.bufferedToItem(o);
    }
  }
  advanceAfterAssetEnded(e, t, s) {
    const n = Qi(e, s);
    if (e.isAssetPastPlayoutLimit(n)) {
      if (this.schedule) {
        const r = this.schedule.items;
        if (r) {
          const a = t + 1, o = r.length;
          if (a >= o) {
            this.setSchedulePosition(-1);
            return;
          }
          const c = e.resumeTime;
          this.timelinePos < c && (this.log(zs("advanceAfterAssetEnded", c)), this.timelinePos = c, e.appendInPlace && this.advanceInPlace(c), this.checkBuffer(this.bufferedPos < c)), this.setSchedulePosition(a);
        }
      }
    } else {
      if (e.appendInPlace) {
        const r = e.assetList[n];
        r && this.advanceInPlace(r.timelineStart);
      }
      this.setSchedulePosition(t, n);
    }
  }
  setScheduleToAssetAtTime(e, t) {
    const s = this.schedule;
    if (!s)
      return;
    const n = t.parentIdentifier, r = s.getEvent(n);
    if (r) {
      const a = s.findEventIndex(n), o = s.findAssetIndex(r, e);
      this.advanceAfterAssetEnded(r, a, o - 1);
    }
  }
  setSchedulePosition(e, t) {
    var s;
    const n = (s = this.schedule) == null ? void 0 : s.items;
    if (!n || this.playbackDisabled)
      return;
    const r = e >= 0 ? n[e] : null;
    this.log(`setSchedulePosition ${e}, ${t} (${r && at(r)}) pos: ${this.timelinePos}`);
    const a = this.waitingItem || this.playingItem, o = this.playingLastItem;
    if (this.isInterstitial(a)) {
      const u = a.event, h = this.playingAsset, d = h == null ? void 0 : h.identifier, g = d ? this.getAssetPlayer(d) : null;
      if (g && d && (!this.eventItemsMatch(a, r) || t !== void 0 && d !== u.assetList[t].identifier)) {
        var c;
        const f = u.findAssetIndex(h);
        if (this.log(`INTERSTITIAL_ASSET_ENDED ${f + 1}/${u.assetList.length} ${rs(h)}`), this.endedAsset = h, this.playingAsset = null, this.hls.trigger(y.INTERSTITIAL_ASSET_ENDED, {
          asset: h,
          assetListIndex: f,
          event: u,
          schedule: n.slice(0),
          scheduleIndex: e,
          player: g
        }), a !== this.playingItem) {
          this.itemsMatch(a, this.playingItem) && // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          !this.playingAsset && this.advanceAfterAssetEnded(u, this.findItemIndex(this.playingItem), f);
          return;
        }
        this.retreiveMediaSource(d, r), g.media && !((c = this.detachedData) != null && c.mediaSource) && g.detachMedia();
      }
      if (!this.eventItemsMatch(a, r) && (this.endedItem = a, this.playingItem = null, this.log(`INTERSTITIAL_ENDED ${u} ${at(a)}`), u.hasPlayed = !0, this.hls.trigger(y.INTERSTITIAL_ENDED, {
        event: u,
        schedule: n.slice(0),
        scheduleIndex: e
      }), u.cue.once)) {
        var l;
        this.updateSchedule();
        const f = (l = this.schedule) == null ? void 0 : l.items;
        if (r && f) {
          const m = this.findItemIndex(r);
          this.advanceSchedule(m, f, t, a, o);
        }
        return;
      }
    }
    this.advanceSchedule(e, n, t, a, o);
  }
  advanceSchedule(e, t, s, n, r) {
    const a = this.schedule;
    if (!a)
      return;
    const o = t[e] || null, c = this.primaryMedia, l = this.playerQueue;
    if (l.length && l.forEach((u) => {
      const h = u.interstitial, d = a.findEventIndex(h.identifier);
      (d < e || d > e + 1) && this.clearInterstitial(h, o);
    }), this.isInterstitial(o)) {
      this.timelinePos = Math.min(Math.max(this.timelinePos, o.start), o.end);
      const u = o.event;
      if (s === void 0) {
        s = a.findAssetIndex(u, this.timelinePos);
        const f = Qi(u, s - 1);
        if (u.isAssetPastPlayoutLimit(f) || u.appendInPlace && this.timelinePos === o.end) {
          this.advanceAfterAssetEnded(u, e, s);
          return;
        }
        s = f;
      }
      const h = this.waitingItem;
      this.assetsBuffered(o, c) || this.setBufferingItem(o);
      let d = this.preloadAssets(u, s);
      if (this.eventItemsMatch(o, h || n) || (this.waitingItem = o, this.log(`INTERSTITIAL_STARTED ${at(o)} ${u.appendInPlace ? "append in place" : ""}`), this.hls.trigger(y.INTERSTITIAL_STARTED, {
        event: u,
        schedule: t.slice(0),
        scheduleIndex: e
      })), !u.assetListLoaded) {
        this.log(`Waiting for ASSET-LIST to complete loading ${u}`);
        return;
      }
      if (u.assetListLoader && (u.assetListLoader.destroy(), u.assetListLoader = void 0), !c) {
        this.log(`Waiting for attachMedia to start Interstitial ${u}`);
        return;
      }
      this.waitingItem = this.endedItem = null, this.playingItem = o;
      const g = u.assetList[s];
      if (!g) {
        this.advanceAfterAssetEnded(u, e, s || 0);
        return;
      }
      if (d || (d = this.getAssetPlayer(g.identifier)), d === null || d.destroyed) {
        const f = u.assetList.length;
        this.warn(`asset ${s + 1}/${f} player destroyed ${u}`), d = this.createAssetPlayer(u, g, s), d.loadSource();
      }
      if (!this.eventItemsMatch(o, this.bufferingItem) && u.appendInPlace && this.isAssetBuffered(g))
        return;
      this.startAssetPlayer(d, s, t, e, c), this.shouldPlay && Sa(d.media);
    } else o ? (this.resumePrimary(o, e, n), this.shouldPlay && Sa(this.hls.media)) : r && this.isInterstitial(n) && (this.endedItem = null, this.playingItem = n, n.event.appendInPlace || this.attachPrimary(a.durations.primary, null));
  }
  get playbackDisabled() {
    return this.hls.config.enableInterstitialPlayback === !1;
  }
  get primaryDetails() {
    var e;
    return (e = this.mediaSelection) == null ? void 0 : e.main.details;
  }
  get primaryLive() {
    var e;
    return !!((e = this.primaryDetails) != null && e.live);
  }
  resumePrimary(e, t, s) {
    var n, r;
    if (this.playingItem = e, this.playingAsset = this.endedAsset = null, this.waitingItem = this.endedItem = null, this.bufferedToItem(e), this.log(`resuming ${at(e)}`), !((n = this.detachedData) != null && n.mediaSource)) {
      let o = this.timelinePos;
      (o < e.start || o >= e.end) && (o = this.getPrimaryResumption(e, t), this.log(zs("resumePrimary", o)), this.timelinePos = o), this.attachPrimary(o, e);
    }
    if (!s)
      return;
    const a = (r = this.schedule) == null ? void 0 : r.items;
    a && (this.log(`INTERSTITIALS_PRIMARY_RESUMED ${at(e)}`), this.hls.trigger(y.INTERSTITIALS_PRIMARY_RESUMED, {
      schedule: a.slice(0),
      scheduleIndex: t
    }), this.checkBuffer());
  }
  getPrimaryResumption(e, t) {
    const s = e.start;
    if (this.primaryLive) {
      const n = this.primaryDetails;
      if (t === 0)
        return this.hls.startPosition;
      if (n && (s < n.fragmentStart || s > n.edge))
        return this.hls.liveSyncPosition || -1;
    }
    return s;
  }
  isAssetBuffered(e) {
    const t = this.getAssetPlayer(e.identifier);
    return t != null && t.hls ? t.hls.bufferedToEnd : se.bufferInfo(this.primaryMedia, this.timelinePos, 0).end + 1 >= e.timelineStart + (e.duration || 0);
  }
  attachPrimary(e, t, s) {
    t ? this.setBufferingItem(t) : this.bufferingItem = this.playingItem, this.bufferingAsset = null;
    const n = this.primaryMedia;
    if (!n)
      return;
    const r = this.hls;
    r.media ? this.checkBuffer() : (this.transferMediaTo(r, n), s && this.startLoadingPrimaryAt(e, s)), s || (this.log(zs("attachPrimary", e)), this.timelinePos = e, this.startLoadingPrimaryAt(e, s));
  }
  startLoadingPrimaryAt(e, t) {
    var s;
    const n = this.hls;
    !n.loadingEnabled || !n.media || Math.abs((((s = n.mainForwardBufferInfo) == null ? void 0 : s.start) || n.media.currentTime) - e) > 0.5 ? n.startLoad(e, t) : n.bufferingEnabled || n.resumeBuffering();
  }
  // HLS.js event callbacks
  onManifestLoading() {
    var e;
    this.stopLoad(), (e = this.schedule) == null || e.reset(), this.emptyPlayerQueue(), this.clearScheduleState(), this.shouldPlay = !1, this.bufferedPos = this.timelinePos = -1, this.mediaSelection = this.altSelection = this.manager = this.requiredTracks = null, this.hls.off(y.BUFFER_CODECS, this.onBufferCodecs, this), this.hls.on(y.BUFFER_CODECS, this.onBufferCodecs, this);
  }
  onLevelUpdated(e, t) {
    if (t.level === -1 || !this.schedule)
      return;
    const s = this.hls.levels[t.level];
    if (!s.details)
      return;
    const n = fe(fe({}, this.mediaSelection || this.altSelection), {}, {
      main: s
    });
    this.mediaSelection = n, this.schedule.parseInterstitialDateRanges(n, this.hls.config.interstitialAppendInPlace), !this.effectivePlayingItem && this.schedule.items && this.checkStart();
  }
  onAudioTrackUpdated(e, t) {
    const s = this.hls.audioTracks[t.id], n = this.mediaSelection;
    if (!n) {
      this.altSelection = fe(fe({}, this.altSelection), {}, {
        audio: s
      });
      return;
    }
    const r = fe(fe({}, n), {}, {
      audio: s
    });
    this.mediaSelection = r;
  }
  onSubtitleTrackUpdated(e, t) {
    const s = this.hls.subtitleTracks[t.id], n = this.mediaSelection;
    if (!n) {
      this.altSelection = fe(fe({}, this.altSelection), {}, {
        subtitles: s
      });
      return;
    }
    const r = fe(fe({}, n), {}, {
      subtitles: s
    });
    this.mediaSelection = r;
  }
  onAudioTrackSwitching(e, t) {
    const s = wr(t);
    this.playerQueue.forEach(({
      hls: n
    }) => n && (n.setAudioOption(t) || n.setAudioOption(s)));
  }
  onSubtitleTrackSwitch(e, t) {
    const s = wr(t);
    this.playerQueue.forEach(({
      hls: n
    }) => n && (n.setSubtitleOption(t) || t.id !== -1 && n.setSubtitleOption(s)));
  }
  onBufferCodecs(e, t) {
    const s = t.tracks;
    s && (this.requiredTracks = s);
  }
  onBufferAppended(e, t) {
    this.checkBuffer();
  }
  onBufferFlushed(e, t) {
    const s = this.playingItem;
    if (s && !this.itemsMatch(s, this.bufferingItem) && !this.isInterstitial(s)) {
      const n = this.timelinePos;
      this.bufferedPos = n, this.checkBuffer();
    }
  }
  onBufferedToEnd(e) {
    if (!this.schedule)
      return;
    const t = this.schedule.events;
    if (this.bufferedPos < Number.MAX_VALUE && t) {
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (r.cue.post) {
          var s;
          const a = this.schedule.findEventIndex(r.identifier), o = (s = this.schedule.items) == null ? void 0 : s[a];
          this.isInterstitial(o) && this.eventItemsMatch(o, this.bufferingItem) && this.bufferedToItem(o, 0);
          break;
        }
      }
      this.bufferedPos = Number.MAX_VALUE;
    }
  }
  onMediaEnded(e) {
    const t = this.playingItem;
    if (!this.playingLastItem && t) {
      const s = this.findItemIndex(t);
      this.setSchedulePosition(s + 1);
    } else
      this.shouldPlay = !1;
  }
  updateItem(e, t) {
    var s;
    const n = (s = this.schedule) == null ? void 0 : s.items;
    if (e && n) {
      const r = this.findItemIndex(e, t);
      return n[r] || null;
    }
    return null;
  }
  trimInPlace(e, t) {
    if (this.isInterstitial(e) && e.event.appendInPlace && t.end - e.end > 0.25) {
      e.event.assetList.forEach((r, a) => {
        e.event.isAssetPastPlayoutLimit(a) && this.clearAssetPlayer(r.identifier, null);
      });
      const s = e.end + 0.25, n = se.bufferInfo(this.primaryMedia, s, 0);
      (n.end > s || (n.nextStart || 0) > s) && (this.log(`trim buffered interstitial ${at(e)} (was ${at(t)})`), this.attachPrimary(s, null, !0), this.flushFrontBuffer(s));
    }
  }
  itemsMatch(e, t) {
    return !!t && (e === t || e.event && t.event && this.eventItemsMatch(e, t) || !e.event && !t.event && this.findItemIndex(e) === this.findItemIndex(t));
  }
  eventItemsMatch(e, t) {
    var s;
    return !!t && (e === t || e.event.identifier === ((s = t.event) == null ? void 0 : s.identifier));
  }
  findItemIndex(e, t) {
    return e && this.schedule ? this.schedule.findItemIndex(e, t) : -1;
  }
  updateSchedule(e = !1) {
    var t;
    const s = this.mediaSelection;
    s && ((t = this.schedule) == null || t.updateSchedule(s, [], e));
  }
  // Schedule buffer control
  checkBuffer(e) {
    var t;
    const s = (t = this.schedule) == null ? void 0 : t.items;
    if (!s)
      return;
    const n = se.bufferInfo(this.primaryMedia, this.timelinePos, 0);
    e && (this.bufferedPos = this.timelinePos), e || (e = n.len < 1), this.updateBufferedPos(n.end, s, e);
  }
  updateBufferedPos(e, t, s) {
    const n = this.schedule, r = this.bufferingItem;
    if (this.bufferedPos > e || !n)
      return;
    if (t.length === 1 && this.itemsMatch(t[0], r)) {
      this.bufferedPos = e;
      return;
    }
    const a = this.playingItem, o = this.findItemIndex(a);
    let c = n.findItemIndexAtTime(e);
    if (this.bufferedPos < e) {
      var l;
      const u = this.findItemIndex(r), h = Math.min(u + 1, t.length - 1), d = t[h];
      if ((c === -1 && r && e >= r.end || (l = d.event) != null && l.appendInPlace && e + 0.01 >= d.start) && (c = h), this.isInterstitial(r)) {
        const g = r.event;
        if (h - o > 1 && g.appendInPlace === !1 || g.assetList.length === 0 && g.assetListLoader)
          return;
      }
      if (this.bufferedPos = e, c > u && c > o)
        this.bufferedToItem(d);
      else {
        const g = this.primaryDetails;
        this.primaryLive && g && e > g.edge - g.targetduration && d.start < g.edge + this.hls.config.interstitialLiveLookAhead && this.isInterstitial(d) && this.preloadAssets(d.event, 0);
      }
    } else s && a && !this.itemsMatch(a, r) && (c === o ? this.bufferedToItem(a) : c === o + 1 && this.bufferedToItem(t[c]));
  }
  assetsBuffered(e, t) {
    return e.event.assetList.length === 0 ? !1 : !e.event.assetList.some((n) => {
      const r = this.getAssetPlayer(n.identifier);
      return !(r != null && r.bufferedInPlaceToEnd(t));
    });
  }
  setBufferingItem(e) {
    const t = this.bufferingItem, s = this.schedule;
    if (!this.itemsMatch(e, t) && s) {
      const {
        items: n,
        events: r
      } = s;
      if (!n || !r)
        return t;
      const a = this.isInterstitial(e), o = this.getBufferingPlayer();
      this.bufferingItem = e, this.bufferedPos = Math.max(e.start, Math.min(e.end, this.timelinePos));
      const c = o ? o.remaining : t ? t.end - this.timelinePos : 0;
      if (this.log(`INTERSTITIALS_BUFFERED_TO_BOUNDARY ${at(e)}` + (t ? ` (${c.toFixed(2)} remaining)` : "")), !this.playbackDisabled)
        if (a) {
          const l = s.findAssetIndex(e.event, this.bufferedPos);
          e.event.assetList.forEach((u, h) => {
            const d = this.getAssetPlayer(u.identifier);
            d && (h === l && d.loadSource(), d.resumeBuffering());
          });
        } else
          this.hls.resumeBuffering(), this.playerQueue.forEach((l) => l.pauseBuffering());
      this.hls.trigger(y.INTERSTITIALS_BUFFERED_TO_BOUNDARY, {
        events: r.slice(0),
        schedule: n.slice(0),
        bufferingIndex: this.findItemIndex(e),
        playingIndex: this.findItemIndex(this.playingItem)
      });
    } else this.bufferingItem !== e && (this.bufferingItem = e);
    return t;
  }
  bufferedToItem(e, t = 0) {
    const s = this.setBufferingItem(e);
    if (!this.playbackDisabled) {
      if (this.isInterstitial(e))
        this.bufferedToEvent(e, t);
      else if (s !== null) {
        this.bufferingAsset = null;
        const n = this.detachedData;
        n ? n.mediaSource ? this.attachPrimary(e.start, e, !0) : this.preloadPrimary(e) : this.preloadPrimary(e);
      }
    }
  }
  preloadPrimary(e) {
    const t = this.findItemIndex(e), s = this.getPrimaryResumption(e, t);
    this.startLoadingPrimaryAt(s);
  }
  bufferedToEvent(e, t) {
    const s = e.event, n = s.assetList.length === 0 && !s.assetListLoader, r = s.cue.once;
    if (n || !r) {
      const a = this.preloadAssets(s, t);
      if (a != null && a.interstitial.appendInPlace) {
        const o = this.primaryMedia;
        o && this.bufferAssetPlayer(a, o);
      }
    }
  }
  preloadAssets(e, t) {
    const s = e.assetUrl, n = e.assetList.length, r = n === 0 && !e.assetListLoader, a = e.cue.once;
    if (r) {
      const c = e.timelineStart;
      if (e.appendInPlace) {
        var o;
        const d = this.playingItem;
        !this.isInterstitial(d) && (d == null || (o = d.nextEvent) == null ? void 0 : o.identifier) === e.identifier && this.flushFrontBuffer(c + 0.25);
      }
      let l, u = 0;
      if (!this.playingItem && this.primaryLive && (u = this.hls.startPosition, u === -1 && (u = this.hls.liveSyncPosition || 0)), u && !(e.cue.pre || e.cue.post)) {
        const d = u - c;
        d > 0 && (l = Math.round(d * 1e3) / 1e3);
      }
      if (this.log(`Load interstitial asset ${t + 1}/${s ? 1 : n} ${e}${l ? ` live-start: ${u} start-offset: ${l}` : ""}`), s)
        return this.createAsset(e, 0, 0, c, e.duration, s);
      const h = this.assetListLoader.loadAssetList(e, l);
      h && (e.assetListLoader = h);
    } else if (!a && n) {
      for (let l = t; l < n; l++) {
        const u = e.assetList[l], h = this.getAssetPlayerQueueIndex(u.identifier);
        (h === -1 || this.playerQueue[h].destroyed) && !u.error && this.createAssetPlayer(e, u, l);
      }
      const c = e.assetList[t];
      if (c) {
        const l = this.getAssetPlayer(c.identifier);
        return l && l.loadSource(), l;
      }
    }
    return null;
  }
  flushFrontBuffer(e) {
    const t = this.requiredTracks;
    if (!t)
      return;
    this.log(`Removing front buffer starting at ${e}`), Object.keys(t).forEach((n) => {
      this.hls.trigger(y.BUFFER_FLUSHING, {
        startOffset: e,
        endOffset: 1 / 0,
        type: n
      });
    });
  }
  // Interstitial Asset Player control
  getAssetPlayerQueueIndex(e) {
    const t = this.playerQueue;
    for (let s = 0; s < t.length; s++)
      if (e === t[s].assetId)
        return s;
    return -1;
  }
  getAssetPlayer(e) {
    const t = this.getAssetPlayerQueueIndex(e);
    return this.playerQueue[t] || null;
  }
  getBufferingPlayer() {
    const {
      playerQueue: e,
      primaryMedia: t
    } = this;
    if (t) {
      for (let s = 0; s < e.length; s++)
        if (e[s].media === t)
          return e[s];
    }
    return null;
  }
  createAsset(e, t, s, n, r, a) {
    const o = {
      parentIdentifier: e.identifier,
      identifier: _f(e, a, t),
      duration: r,
      startOffset: s,
      timelineStart: n,
      uri: a
    };
    return this.createAssetPlayer(e, o, t);
  }
  createAssetPlayer(e, t, s) {
    const n = this.hls, r = n.userConfig;
    let a = r.videoPreference;
    const o = n.loadLevelObj || n.levels[n.currentLevel];
    (a || o) && (a = pe({}, a), o.videoCodec && (a.videoCodec = o.videoCodec), o.videoRange && (a.allowedVideoRanges = [o.videoRange]));
    const c = n.audioTracks[n.audioTrack], l = n.subtitleTracks[n.subtitleTrack];
    let u = 0;
    if (this.primaryLive || e.appendInPlace) {
      const x = this.timelinePos - t.timelineStart;
      if (x > 1) {
        const A = t.duration;
        A && x < A && (u = x);
      }
    }
    const h = t.identifier, d = fe(fe({}, r), {}, {
      maxMaxBufferLength: Math.min(180, n.config.maxMaxBufferLength),
      autoStartLoad: !0,
      startFragPrefetch: !0,
      primarySessionId: n.sessionId,
      assetPlayerId: h,
      abrEwmaDefaultEstimate: n.bandwidthEstimate,
      interstitialsController: void 0,
      startPosition: u,
      liveDurationInfinity: !1,
      testBandwidth: !1,
      videoPreference: a,
      audioPreference: c || r.audioPreference,
      subtitlePreference: l || r.subtitlePreference
    });
    e.appendInPlace && (e.appendInPlaceStarted = !0, t.timelineStart && (d.timelineOffset = t.timelineStart));
    const g = d.cmcd;
    g != null && g.sessionId && g.contentId && (d.cmcd = pe({}, g, {
      contentId: Ss(t.uri)
    })), this.getAssetPlayer(h) && this.warn(`Duplicate date range identifier ${e} and asset ${h}`);
    const f = new wf(this.HlsPlayerClass, d, e, t);
    this.playerQueue.push(f), e.assetList[s] = t;
    let m = !0;
    const p = (x) => {
      if (x.live) {
        var A;
        const L = new Error(`Interstitials MUST be VOD assets ${e}`), I = {
          fatal: !0,
          type: q.OTHER_ERROR,
          details: C.INTERSTITIAL_ASSET_ITEM_ERROR,
          error: L
        }, R = ((A = this.schedule) == null ? void 0 : A.findEventIndex(e.identifier)) || -1;
        this.handleAssetItemError(I, e, R, s, L.message);
        return;
      }
      const _ = x.edge - x.fragmentStart, S = t.duration;
      (m || S === null || _ > S) && (m = !1, this.log(`Interstitial asset "${h}" duration change ${S} > ${_}`), t.duration = _, this.updateSchedule());
    };
    f.on(y.LEVEL_UPDATED, (x, {
      details: A
    }) => p(A)), f.on(y.LEVEL_PTS_UPDATED, (x, {
      details: A
    }) => p(A)), f.on(y.EVENT_CUE_ENTER, () => this.onInterstitialCueEnter());
    const T = (x, A) => {
      const _ = this.getAssetPlayer(h);
      if (_ && A.tracks) {
        _.off(y.BUFFER_CODECS, T), _.tracks = A.tracks;
        const S = this.primaryMedia;
        this.bufferingAsset === _.assetItem && S && !_.media && this.bufferAssetPlayer(_, S);
      }
    };
    f.on(y.BUFFER_CODECS, T);
    const E = () => {
      var x;
      const A = this.getAssetPlayer(h);
      if (this.log(`buffered to end of asset ${A}`), !A || !this.schedule)
        return;
      const _ = this.schedule.findEventIndex(e.identifier), S = (x = this.schedule.items) == null ? void 0 : x[_];
      this.isInterstitial(S) && this.advanceAssetBuffering(S, t);
    };
    f.on(y.BUFFERED_TO_END, E);
    const v = (x) => () => {
      if (!this.getAssetPlayer(h) || !this.schedule)
        return;
      this.shouldPlay = !0;
      const _ = this.schedule.findEventIndex(e.identifier);
      this.advanceAfterAssetEnded(e, _, x);
    };
    return f.once(y.MEDIA_ENDED, v(s)), f.once(y.PLAYOUT_LIMIT_REACHED, v(1 / 0)), f.on(y.ERROR, (x, A) => {
      if (!this.schedule)
        return;
      const _ = this.getAssetPlayer(h);
      if (A.details === C.BUFFER_STALLED_ERROR) {
        if (_ != null && _.appendInPlace) {
          this.handleInPlaceStall(e);
          return;
        }
        this.onTimeupdate(), this.checkBuffer(!0);
        return;
      }
      this.handleAssetItemError(A, e, this.schedule.findEventIndex(e.identifier), s, `Asset player error ${A.error} ${e}`);
    }), f.on(y.DESTROYING, () => {
      if (!this.getAssetPlayer(h) || !this.schedule)
        return;
      const A = new Error(`Asset player destroyed unexpectedly ${h}`), _ = {
        fatal: !0,
        type: q.OTHER_ERROR,
        details: C.INTERSTITIAL_ASSET_ITEM_ERROR,
        error: A
      };
      this.handleAssetItemError(_, e, this.schedule.findEventIndex(e.identifier), s, A.message);
    }), this.log(`INTERSTITIAL_ASSET_PLAYER_CREATED ${rs(t)}`), this.hls.trigger(y.INTERSTITIAL_ASSET_PLAYER_CREATED, {
      asset: t,
      assetListIndex: s,
      event: e,
      player: f
    }), f;
  }
  clearInterstitial(e, t) {
    this.clearAssetPlayers(e, t), e.reset();
  }
  clearAssetPlayers(e, t) {
    e.assetList.forEach((s) => {
      this.clearAssetPlayer(s.identifier, t);
    });
  }
  resetAssetPlayer(e) {
    const t = this.getAssetPlayerQueueIndex(e);
    if (t !== -1) {
      this.log(`reset asset player "${e}" after error`);
      const s = this.playerQueue[t];
      this.transferMediaFromPlayer(s, null), s.resetDetails();
    }
  }
  clearAssetPlayer(e, t) {
    const s = this.getAssetPlayerQueueIndex(e);
    if (s !== -1) {
      const n = this.playerQueue[s];
      this.log(`clear ${n} toSegment: ${t && at(t)}`), this.transferMediaFromPlayer(n, t), this.playerQueue.splice(s, 1), n.destroy();
    }
  }
  emptyPlayerQueue() {
    let e;
    for (; e = this.playerQueue.pop(); )
      e.destroy();
    this.playerQueue = [];
  }
  startAssetPlayer(e, t, s, n, r) {
    const {
      interstitial: a,
      assetItem: o,
      assetId: c
    } = e, l = a.assetList.length, u = this.playingAsset;
    this.endedAsset = null, this.playingAsset = o, (!u || u.identifier !== c) && (u && (this.clearAssetPlayer(u.identifier, s[n]), delete u.error), this.log(`INTERSTITIAL_ASSET_STARTED ${t + 1}/${l} ${rs(o)}`), this.hls.trigger(y.INTERSTITIAL_ASSET_STARTED, {
      asset: o,
      assetListIndex: t,
      event: a,
      schedule: s.slice(0),
      scheduleIndex: n,
      player: e
    })), this.bufferAssetPlayer(e, r);
  }
  bufferAssetPlayer(e, t) {
    var s, n;
    if (!this.schedule)
      return;
    const {
      interstitial: r,
      assetItem: a
    } = e, o = this.schedule.findEventIndex(r.identifier), c = (s = this.schedule.items) == null ? void 0 : s[o];
    if (!c)
      return;
    e.loadSource(), this.setBufferingItem(c), this.bufferingAsset = a;
    const l = this.getBufferingPlayer();
    if (l === e)
      return;
    const u = r.appendInPlace;
    if (u && (l == null ? void 0 : l.interstitial.appendInPlace) === !1)
      return;
    const h = (l == null ? void 0 : l.tracks) || ((n = this.detachedData) == null ? void 0 : n.tracks) || this.requiredTracks;
    if (u && a !== this.playingAsset) {
      if (!e.tracks) {
        this.log(`Waiting for track info before buffering ${e}`);
        return;
      }
      if (h && !Ya(h, e.tracks)) {
        const d = new Error(`Asset ${rs(a)} SourceBuffer tracks ('${Object.keys(e.tracks)}') are not compatible with primary content tracks ('${Object.keys(h)}')`), g = {
          fatal: !0,
          type: q.OTHER_ERROR,
          details: C.INTERSTITIAL_ASSET_ITEM_ERROR,
          error: d
        }, f = r.findAssetIndex(a);
        this.handleAssetItemError(g, r, o, f, d.message);
        return;
      }
    }
    this.transferMediaTo(e, t);
  }
  handleInPlaceStall(e) {
    const t = this.schedule, s = this.primaryMedia;
    if (!t || !s)
      return;
    const n = s.currentTime, r = t.findAssetIndex(e, n), a = e.assetList[r];
    if (a) {
      const o = this.getAssetPlayer(a.identifier);
      if (o) {
        const c = o.currentTime || n - a.timelineStart, l = o.duration - c;
        if (this.warn(`Stalled at ${c} of ${c + l} in ${o} ${e} (media.currentTime: ${n})`), c && (l / s.playbackRate < 0.5 || o.bufferedInPlaceToEnd(s)) && o.hls) {
          const u = t.findEventIndex(e.identifier);
          this.advanceAfterAssetEnded(e, u, r);
        }
      }
    }
  }
  advanceInPlace(e) {
    const t = this.primaryMedia;
    t && t.currentTime < e && (t.currentTime = e);
  }
  handleAssetItemError(e, t, s, n, r) {
    if (e.details === C.BUFFER_STALLED_ERROR)
      return;
    const a = t.assetList[n] || null;
    if (this.warn(`INTERSTITIAL_ASSET_ERROR ${a && rs(a)} ${e.error}`), !this.schedule)
      return;
    const o = (a == null ? void 0 : a.identifier) || "", c = this.getAssetPlayerQueueIndex(o), l = this.playerQueue[c] || null, u = this.schedule.items, h = pe({}, e, {
      fatal: !1,
      errorAction: os(!0),
      asset: a,
      assetListIndex: n,
      event: t,
      schedule: u,
      scheduleIndex: s,
      player: l
    });
    if (this.hls.trigger(y.INTERSTITIAL_ASSET_ERROR, h), !e.fatal)
      return;
    const d = this.playingAsset, g = this.bufferingAsset, f = new Error(r);
    if (a && (this.clearAssetPlayer(o, null), a.error = f), !t.assetList.some((m) => !m.error))
      t.error = f;
    else
      for (let m = n; m < t.assetList.length; m++)
        this.resetAssetPlayer(t.assetList[m].identifier);
    this.updateSchedule(!0), t.error ? this.primaryFallback(t) : d && d.identifier === o ? this.advanceAfterAssetEnded(t, s, n) : g && g.identifier === o && this.isInterstitial(this.bufferingItem) && this.advanceAssetBuffering(this.bufferingItem, g);
  }
  primaryFallback(e) {
    const t = e.timelineStart, s = this.effectivePlayingItem;
    let n = this.timelinePos;
    if (s) {
      this.log(`Fallback to primary from event "${e.identifier}" start: ${t} pos: ${n} playing: ${at(s)} error: ${e.error}`), n === -1 && (n = this.hls.startPosition);
      const a = this.updateItem(s, n);
      this.itemsMatch(s, a) && this.clearInterstitial(e, null), e.appendInPlace && (this.attachPrimary(t, null), this.flushFrontBuffer(t));
    } else if (n === -1) {
      this.checkStart();
      return;
    }
    if (!this.schedule)
      return;
    const r = this.schedule.findItemIndexAtTime(n);
    this.setSchedulePosition(r);
  }
  // Asset List loading
  onAssetListLoaded(e, t) {
    var s, n;
    const r = t.event, a = r.identifier, o = t.assetListResponse.ASSETS;
    if (!((s = this.schedule) != null && s.hasEvent(a)))
      return;
    const c = r.timelineStart, l = r.duration;
    let u = 0;
    o.forEach((m, p) => {
      const T = parseFloat(m.DURATION);
      this.createAsset(r, p, u, c + u, T, m.URI), u += T;
    }), r.duration = u, this.log(`Loaded asset-list with duration: ${u} (was: ${l}) ${r}`);
    const h = this.waitingItem, d = (h == null ? void 0 : h.event.identifier) === a;
    this.updateSchedule();
    const g = (n = this.bufferingItem) == null ? void 0 : n.event;
    if (d) {
      var f;
      const m = this.schedule.findEventIndex(a), p = (f = this.schedule.items) == null ? void 0 : f[m];
      if (p) {
        if (!this.playingItem && this.timelinePos > p.end && this.schedule.findItemIndexAtTime(this.timelinePos) !== m) {
          r.error = new Error(`Interstitial ${o.length ? "no longer within playback range" : "asset-list is empty"} ${this.timelinePos} ${r}`), this.log(r.error.message), this.updateSchedule(!0), this.primaryFallback(r);
          return;
        }
        this.setBufferingItem(p);
      }
      this.setSchedulePosition(m);
    } else if ((g == null ? void 0 : g.identifier) === a) {
      const m = r.assetList[0];
      if (m) {
        const p = this.getAssetPlayer(m.identifier);
        if (g.appendInPlace) {
          const T = this.primaryMedia;
          p && T && this.bufferAssetPlayer(p, T);
        } else p && p.loadSource();
      }
    }
  }
  onError(e, t) {
    if (this.schedule)
      switch (t.details) {
        case C.ASSET_LIST_PARSING_ERROR:
        case C.ASSET_LIST_LOAD_ERROR:
        case C.ASSET_LIST_LOAD_TIMEOUT: {
          const s = t.interstitial;
          s && (this.updateSchedule(!0), this.primaryFallback(s));
          break;
        }
        case C.BUFFER_STALLED_ERROR: {
          const s = this.endedItem || this.waitingItem || this.playingItem;
          if (this.isInterstitial(s) && s.event.appendInPlace) {
            this.handleInPlaceStall(s.event);
            return;
          }
          this.log(`Primary player stall @${this.timelinePos} bufferedPos: ${this.bufferedPos}`), this.onTimeupdate(), this.checkBuffer(!0);
          break;
        }
      }
  }
}
const xa = 500;
class Mf extends Xn {
  constructor(e, t, s) {
    super(e, t, s, "subtitle-stream-controller", j.SUBTITLE), this.currentTrackId = -1, this.tracksBuffered = [], this.mainDetails = null, this.registerListeners();
  }
  onHandlerDestroying() {
    this.unregisterListeners(), super.onHandlerDestroying(), this.mainDetails = null;
  }
  registerListeners() {
    super.registerListeners();
    const {
      hls: e
    } = this;
    e.on(y.LEVEL_LOADED, this.onLevelLoaded, this), e.on(y.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(y.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.on(y.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(y.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this);
  }
  unregisterListeners() {
    super.unregisterListeners();
    const {
      hls: e
    } = this;
    e.off(y.LEVEL_LOADED, this.onLevelLoaded, this), e.off(y.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(y.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.off(y.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(y.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this);
  }
  startLoad(e, t) {
    this.stopLoad(), this.state = D.IDLE, this.setInterval(xa), this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset, this.startPosition = t ? -1 : e, this.tick();
  }
  onManifestLoading() {
    super.onManifestLoading(), this.mainDetails = null;
  }
  onMediaDetaching(e, t) {
    this.tracksBuffered = [], super.onMediaDetaching(e, t);
  }
  onLevelLoaded(e, t) {
    this.mainDetails = t.details;
  }
  onSubtitleFragProcessed(e, t) {
    const {
      frag: s,
      success: n
    } = t;
    if (this.fragContextChanged(s) || (Le(s) && (this.fragPrevious = s), this.state = D.IDLE), !n)
      return;
    const r = this.tracksBuffered[this.currentTrackId];
    if (!r)
      return;
    let a;
    const o = s.start;
    for (let l = 0; l < r.length; l++)
      if (o >= r[l].start && o <= r[l].end) {
        a = r[l];
        break;
      }
    const c = s.start + s.duration;
    a ? a.end = c : (a = {
      start: o,
      end: c
    }, r.push(a)), this.fragmentTracker.fragBuffered(s), this.fragBufferedComplete(s, null), this.media && this.tick();
  }
  onBufferFlushing(e, t) {
    const {
      startOffset: s,
      endOffset: n
    } = t;
    if (s === 0 && n !== Number.POSITIVE_INFINITY) {
      const r = n - 1;
      if (r <= 0)
        return;
      t.endOffsetSubtitles = Math.max(0, r), this.tracksBuffered.forEach((a) => {
        for (let o = 0; o < a.length; ) {
          if (a[o].end <= r) {
            a.shift();
            continue;
          } else if (a[o].start < r)
            a[o].start = r;
          else
            break;
          o++;
        }
      }), this.fragmentTracker.removeFragmentsInRange(s, r, j.SUBTITLE);
    }
  }
  // If something goes wrong, proceed to next frag, if we were processing one.
  onError(e, t) {
    const s = t.frag;
    (s == null ? void 0 : s.type) === j.SUBTITLE && (t.details === C.FRAG_GAP && this.fragmentTracker.fragBuffered(s, !0), this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== D.STOPPED && (this.state = D.IDLE));
  }
  // Got all new subtitle levels.
  onSubtitleTracksUpdated(e, {
    subtitleTracks: t
  }) {
    if (this.levels && Zo(this.levels, t)) {
      this.levels = t.map((s) => new Is(s));
      return;
    }
    this.tracksBuffered = [], this.levels = t.map((s) => {
      const n = new Is(s);
      return this.tracksBuffered[n.id] = [], n;
    }), this.fragmentTracker.removeFragmentsInRange(0, Number.POSITIVE_INFINITY, j.SUBTITLE), this.fragPrevious = null, this.mediaBuffer = null;
  }
  onSubtitleTrackSwitch(e, t) {
    var s;
    if (this.currentTrackId = t.id, !((s = this.levels) != null && s.length) || this.currentTrackId === -1) {
      this.clearInterval();
      return;
    }
    const n = this.levels[this.currentTrackId];
    n != null && n.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, n && this.state !== D.STOPPED && this.setInterval(xa);
  }
  // Got a new set of subtitle fragments.
  onSubtitleTrackLoaded(e, t) {
    var s;
    const {
      currentTrackId: n,
      levels: r
    } = this, {
      details: a,
      id: o
    } = t;
    if (!r) {
      this.warn(`Subtitle tracks were reset while loading level ${o}`);
      return;
    }
    const c = r[o];
    if (o >= r.length || !c)
      return;
    this.log(`Subtitle track ${o} loaded [${a.startSN},${a.endSN}]${a.lastPartSn ? `[part-${a.lastPartSn}-${a.lastPartIndex}]` : ""},duration:${a.totalduration}`), this.mediaBuffer = this.mediaBufferTimeRanges;
    let l = 0;
    if (a.live || (s = c.details) != null && s.live) {
      if (a.deltaUpdateFailed)
        return;
      const h = this.mainDetails;
      if (!h) {
        this.startFragRequested = !1;
        return;
      }
      const d = h.fragments[0];
      if (!c.details)
        a.hasProgramDateTime && h.hasProgramDateTime ? (Si(a, h), l = a.fragmentStart) : d && (l = d.start, bn(a, l));
      else {
        var u;
        l = this.alignPlaylists(a, c.details, (u = this.levelLastLoaded) == null ? void 0 : u.details), l === 0 && d && (l = d.start, bn(a, l));
      }
      h && !this.startFragRequested && this.setStartPosition(h, l);
    }
    c.details = a, this.levelLastLoaded = c, o === n && (this.hls.trigger(y.SUBTITLE_TRACK_UPDATED, {
      details: a,
      id: o,
      groupId: t.groupId
    }), this.tick(), a.live && !this.fragCurrent && this.media && this.state === D.IDLE && (Qt(null, a.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), c.details = void 0)));
  }
  _handleFragmentLoadComplete(e) {
    const {
      frag: t,
      payload: s
    } = e, n = t.decryptdata, r = this.hls;
    if (!this.fragContextChanged(t) && s && s.byteLength > 0 && n != null && n.key && n.iv && ls(n.method)) {
      const a = performance.now();
      this.decrypter.decrypt(new Uint8Array(s), n.key.buffer, n.iv.buffer, Yn(n.method)).catch((o) => {
        throw r.trigger(y.ERROR, {
          type: q.MEDIA_ERROR,
          details: C.FRAG_DECRYPT_ERROR,
          fatal: !1,
          error: o,
          reason: o.message,
          frag: t
        }), o;
      }).then((o) => {
        const c = performance.now();
        r.trigger(y.FRAG_DECRYPTED, {
          frag: t,
          payload: o,
          stats: {
            tstart: a,
            tdecrypt: c
          }
        });
      }).catch((o) => {
        this.warn(`${o.name}: ${o.message}`), this.state = D.IDLE;
      });
    }
  }
  doTick() {
    if (!this.media) {
      this.state = D.IDLE;
      return;
    }
    if (this.state === D.IDLE) {
      const {
        currentTrackId: e,
        levels: t
      } = this, s = t == null ? void 0 : t[e];
      if (!s || !t.length || !s.details || this.waitForLive(s))
        return;
      const {
        config: n
      } = this, r = this.getLoadPosition(), a = se.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], r, n.maxBufferHole), {
        end: o,
        len: c
      } = a, l = s.details, u = this.hls.maxBufferLength + l.levelTargetDuration;
      if (c > u)
        return;
      const h = l.fragments, d = h.length, g = l.edge;
      let f = null;
      const m = this.fragPrevious;
      if (o < g) {
        const E = n.maxFragLookUpTolerance, v = o > g - E ? 0 : E;
        f = Qt(m, h, Math.max(h[0].start, o), v), !f && m && m.start < h[0].start && (f = h[0]);
      } else
        f = h[d - 1];
      if (f = this.filterReplacedPrimary(f, s.details), !f)
        return;
      const p = f.sn - l.startSN, T = h[p - 1];
      if (T && T.cc === f.cc && this.fragmentTracker.getState(T) === Pe.NOT_LOADED && (f = T), this.fragmentTracker.getState(f) === Pe.NOT_LOADED) {
        const E = this.mapToInitFragWhenRequired(f);
        E && this.loadFragment(E, s, o);
      }
    }
  }
  loadFragment(e, t, s) {
    Le(e) ? super.loadFragment(e, t, s) : this._loadInitSegment(e, t);
  }
  get mediaBufferTimeRanges() {
    return new Ff(this.tracksBuffered[this.currentTrackId] || []);
  }
}
class Ff {
  constructor(e) {
    this.buffered = void 0;
    const t = (s, n, r) => {
      if (n = n >>> 0, n > r - 1)
        throw new DOMException(`Failed to execute '${s}' on 'TimeRanges': The index provided (${n}) is greater than the maximum bound (${r})`);
      return e[n][s];
    };
    this.buffered = {
      get length() {
        return e.length;
      },
      end(s) {
        return t("end", s, e.length);
      },
      start(s) {
        return t("start", s, e.length);
      }
    };
  }
}
const Nf = {
  42: 225,
  // lowercase a, acute accent
  92: 233,
  // lowercase e, acute accent
  94: 237,
  // lowercase i, acute accent
  95: 243,
  // lowercase o, acute accent
  96: 250,
  // lowercase u, acute accent
  123: 231,
  // lowercase c with cedilla
  124: 247,
  // division symbol
  125: 209,
  // uppercase N tilde
  126: 241,
  // lowercase n tilde
  127: 9608,
  // Full block
  // THIS BLOCK INCLUDES THE 16 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x11 AND LOW BETWEEN 0x30 AND 0x3F
  // THIS MEANS THAT \x50 MUST BE ADDED TO THE VALUES
  128: 174,
  // Registered symbol (R)
  129: 176,
  // degree sign
  130: 189,
  // 1/2 symbol
  131: 191,
  // Inverted (open) question mark
  132: 8482,
  // Trademark symbol (TM)
  133: 162,
  // Cents symbol
  134: 163,
  // Pounds sterling
  135: 9834,
  // Music 8'th note
  136: 224,
  // lowercase a, grave accent
  137: 32,
  // transparent space (regular)
  138: 232,
  // lowercase e, grave accent
  139: 226,
  // lowercase a, circumflex accent
  140: 234,
  // lowercase e, circumflex accent
  141: 238,
  // lowercase i, circumflex accent
  142: 244,
  // lowercase o, circumflex accent
  143: 251,
  // lowercase u, circumflex accent
  // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x12 AND LOW BETWEEN 0x20 AND 0x3F
  144: 193,
  // capital letter A with acute
  145: 201,
  // capital letter E with acute
  146: 211,
  // capital letter O with acute
  147: 218,
  // capital letter U with acute
  148: 220,
  // capital letter U with diaresis
  149: 252,
  // lowercase letter U with diaeresis
  150: 8216,
  // opening single quote
  151: 161,
  // inverted exclamation mark
  152: 42,
  // asterisk
  153: 8217,
  // closing single quote
  154: 9473,
  // box drawings heavy horizontal
  155: 169,
  // copyright sign
  156: 8480,
  // Service mark
  157: 8226,
  // (round) bullet
  158: 8220,
  // Left double quotation mark
  159: 8221,
  // Right double quotation mark
  160: 192,
  // uppercase A, grave accent
  161: 194,
  // uppercase A, circumflex
  162: 199,
  // uppercase C with cedilla
  163: 200,
  // uppercase E, grave accent
  164: 202,
  // uppercase E, circumflex
  165: 203,
  // capital letter E with diaresis
  166: 235,
  // lowercase letter e with diaresis
  167: 206,
  // uppercase I, circumflex
  168: 207,
  // uppercase I, with diaresis
  169: 239,
  // lowercase i, with diaresis
  170: 212,
  // uppercase O, circumflex
  171: 217,
  // uppercase U, grave accent
  172: 249,
  // lowercase u, grave accent
  173: 219,
  // uppercase U, circumflex
  174: 171,
  // left-pointing double angle quotation mark
  175: 187,
  // right-pointing double angle quotation mark
  // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x13 AND LOW BETWEEN 0x20 AND 0x3F
  176: 195,
  // Uppercase A, tilde
  177: 227,
  // Lowercase a, tilde
  178: 205,
  // Uppercase I, acute accent
  179: 204,
  // Uppercase I, grave accent
  180: 236,
  // Lowercase i, grave accent
  181: 210,
  // Uppercase O, grave accent
  182: 242,
  // Lowercase o, grave accent
  183: 213,
  // Uppercase O, tilde
  184: 245,
  // Lowercase o, tilde
  185: 123,
  // Open curly brace
  186: 125,
  // Closing curly brace
  187: 92,
  // Backslash
  188: 94,
  // Caret
  189: 95,
  // Underscore
  190: 124,
  // Pipe (vertical line)
  191: 8764,
  // Tilde operator
  192: 196,
  // Uppercase A, umlaut
  193: 228,
  // Lowercase A, umlaut
  194: 214,
  // Uppercase O, umlaut
  195: 246,
  // Lowercase o, umlaut
  196: 223,
  // Esszett (sharp S)
  197: 165,
  // Yen symbol
  198: 164,
  // Generic currency sign
  199: 9475,
  // Box drawings heavy vertical
  200: 197,
  // Uppercase A, ring
  201: 229,
  // Lowercase A, ring
  202: 216,
  // Uppercase O, stroke
  203: 248,
  // Lowercase o, strok
  204: 9487,
  // Box drawings heavy down and right
  205: 9491,
  // Box drawings heavy down and left
  206: 9495,
  // Box drawings heavy up and right
  207: 9499
  // Box drawings heavy up and left
}, gl = (i) => String.fromCharCode(Nf[i] || i), ot = 15, Lt = 100, $f = {
  17: 1,
  18: 3,
  21: 5,
  22: 7,
  23: 9,
  16: 11,
  19: 12,
  20: 14
}, Bf = {
  17: 2,
  18: 4,
  21: 6,
  22: 8,
  23: 10,
  19: 13,
  20: 15
}, Uf = {
  25: 1,
  26: 3,
  29: 5,
  30: 7,
  31: 9,
  24: 11,
  27: 12,
  28: 14
}, Gf = {
  25: 2,
  26: 4,
  29: 6,
  30: 8,
  31: 10,
  27: 13,
  28: 15
}, Kf = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
class Vf {
  constructor() {
    this.time = null, this.verboseLevel = 0;
  }
  log(e, t) {
    if (this.verboseLevel >= e) {
      const s = typeof t == "function" ? t() : t;
      ge.log(`${this.time} [${e}] ${s}`);
    }
  }
}
const jt = function(e) {
  const t = [];
  for (let s = 0; s < e.length; s++)
    t.push(e[s].toString(16));
  return t;
};
class ml {
  constructor() {
    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1;
  }
  reset() {
    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1;
  }
  setStyles(e) {
    const t = ["foreground", "underline", "italics", "background", "flash"];
    for (let s = 0; s < t.length; s++) {
      const n = t[s];
      e.hasOwnProperty(n) && (this[n] = e[n]);
    }
  }
  isDefault() {
    return this.foreground === "white" && !this.underline && !this.italics && this.background === "black" && !this.flash;
  }
  equals(e) {
    return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash;
  }
  copy(e) {
    this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash;
  }
  toString() {
    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash;
  }
}
class Hf {
  constructor() {
    this.uchar = " ", this.penState = new ml();
  }
  reset() {
    this.uchar = " ", this.penState.reset();
  }
  setChar(e, t) {
    this.uchar = e, this.penState.copy(t);
  }
  setPenState(e) {
    this.penState.copy(e);
  }
  equals(e) {
    return this.uchar === e.uchar && this.penState.equals(e.penState);
  }
  copy(e) {
    this.uchar = e.uchar, this.penState.copy(e.penState);
  }
  isEmpty() {
    return this.uchar === " " && this.penState.isDefault();
  }
}
class jf {
  constructor(e) {
    this.chars = [], this.pos = 0, this.currPenState = new ml(), this.cueStartTime = null, this.logger = void 0;
    for (let t = 0; t < Lt; t++)
      this.chars.push(new Hf());
    this.logger = e;
  }
  equals(e) {
    for (let t = 0; t < Lt; t++)
      if (!this.chars[t].equals(e.chars[t]))
        return !1;
    return !0;
  }
  copy(e) {
    for (let t = 0; t < Lt; t++)
      this.chars[t].copy(e.chars[t]);
  }
  isEmpty() {
    let e = !0;
    for (let t = 0; t < Lt; t++)
      if (!this.chars[t].isEmpty()) {
        e = !1;
        break;
      }
    return e;
  }
  /**
   *  Set the cursor to a valid column.
   */
  setCursor(e) {
    this.pos !== e && (this.pos = e), this.pos < 0 ? (this.logger.log(3, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > Lt && (this.logger.log(3, "Too large cursor position " + this.pos), this.pos = Lt);
  }
  /**
   * Move the cursor relative to current position.
   */
  moveCursor(e) {
    const t = this.pos + e;
    if (e > 1)
      for (let s = this.pos + 1; s < t + 1; s++)
        this.chars[s].setPenState(this.currPenState);
    this.setCursor(t);
  }
  /**
   * Backspace, move one step back and clear character.
   */
  backSpace() {
    this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);
  }
  insertChar(e) {
    e >= 144 && this.backSpace();
    const t = gl(e);
    if (this.pos >= Lt) {
      this.logger.log(0, () => "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!");
      return;
    }
    this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1);
  }
  clearFromPos(e) {
    let t;
    for (t = e; t < Lt; t++)
      this.chars[t].reset();
  }
  clear() {
    this.clearFromPos(0), this.pos = 0, this.currPenState.reset();
  }
  clearToEndOfRow() {
    this.clearFromPos(this.pos);
  }
  getTextString() {
    const e = [];
    let t = !0;
    for (let s = 0; s < Lt; s++) {
      const n = this.chars[s].uchar;
      n !== " " && (t = !1), e.push(n);
    }
    return t ? "" : e.join("");
  }
  setPenStyles(e) {
    this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState);
  }
}
class Zi {
  constructor(e) {
    this.rows = [], this.currRow = ot - 1, this.nrRollUpRows = null, this.lastOutputScreen = null, this.logger = void 0;
    for (let t = 0; t < ot; t++)
      this.rows.push(new jf(e));
    this.logger = e;
  }
  reset() {
    for (let e = 0; e < ot; e++)
      this.rows[e].clear();
    this.currRow = ot - 1;
  }
  equals(e) {
    let t = !0;
    for (let s = 0; s < ot; s++)
      if (!this.rows[s].equals(e.rows[s])) {
        t = !1;
        break;
      }
    return t;
  }
  copy(e) {
    for (let t = 0; t < ot; t++)
      this.rows[t].copy(e.rows[t]);
  }
  isEmpty() {
    let e = !0;
    for (let t = 0; t < ot; t++)
      if (!this.rows[t].isEmpty()) {
        e = !1;
        break;
      }
    return e;
  }
  backSpace() {
    this.rows[this.currRow].backSpace();
  }
  clearToEndOfRow() {
    this.rows[this.currRow].clearToEndOfRow();
  }
  /**
   * Insert a character (without styling) in the current row.
   */
  insertChar(e) {
    this.rows[this.currRow].insertChar(e);
  }
  setPen(e) {
    this.rows[this.currRow].setPenStyles(e);
  }
  moveCursor(e) {
    this.rows[this.currRow].moveCursor(e);
  }
  setCursor(e) {
    this.logger.log(2, "setCursor: " + e), this.rows[this.currRow].setCursor(e);
  }
  setPAC(e) {
    this.logger.log(2, () => "pacData = " + Te(e));
    let t = e.row - 1;
    if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
      for (let o = 0; o < ot; o++)
        this.rows[o].clear();
      const r = this.currRow + 1 - this.nrRollUpRows, a = this.lastOutputScreen;
      if (a) {
        const o = a.rows[r].cueStartTime, c = this.logger.time;
        if (o !== null && c !== null && o < c)
          for (let l = 0; l < this.nrRollUpRows; l++)
            this.rows[t - this.nrRollUpRows + l + 1].copy(a.rows[r + l]);
      }
    }
    this.currRow = t;
    const s = this.rows[this.currRow];
    if (e.indent !== null) {
      const r = e.indent, a = Math.max(r - 1, 0);
      s.setCursor(e.indent), e.color = s.chars[a].penState.foreground;
    }
    const n = {
      foreground: e.color,
      underline: e.underline,
      italics: e.italics,
      background: "black",
      flash: !1
    };
    this.setPen(n);
  }
  /**
   * Set background/extra foreground, but first do back_space, and then insert space (backwards compatibility).
   */
  setBkgData(e) {
    this.logger.log(2, () => "bkgData = " + Te(e)), this.backSpace(), this.setPen(e), this.insertChar(32);
  }
  setRollUpRows(e) {
    this.nrRollUpRows = e;
  }
  rollUp() {
    if (this.nrRollUpRows === null) {
      this.logger.log(3, "roll_up but nrRollUpRows not set yet");
      return;
    }
    this.logger.log(1, () => this.getDisplayText());
    const e = this.currRow + 1 - this.nrRollUpRows, t = this.rows.splice(e, 1)[0];
    t.clear(), this.rows.splice(this.currRow, 0, t), this.logger.log(2, "Rolling up");
  }
  /**
   * Get all non-empty rows with as unicode text.
   */
  getDisplayText(e) {
    e = e || !1;
    const t = [];
    let s = "", n = -1;
    for (let r = 0; r < ot; r++) {
      const a = this.rows[r].getTextString();
      a && (n = r + 1, e ? t.push("Row " + n + ": '" + a + "'") : t.push(a.trim()));
    }
    return t.length > 0 && (e ? s = "[" + t.join(" | ") + "]" : s = t.join(`
`)), s;
  }
  getTextAndFormat() {
    return this.rows;
  }
}
class Aa {
  constructor(e, t, s) {
    this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new Zi(s), this.nonDisplayedMemory = new Zi(s), this.lastOutputScreen = new Zi(s), this.currRollUpRow = this.displayedMemory.rows[ot - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = s;
  }
  reset() {
    this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[ot - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null;
  }
  getHandler() {
    return this.outputFilter;
  }
  setHandler(e) {
    this.outputFilter = e;
  }
  setPAC(e) {
    this.writeScreen.setPAC(e);
  }
  setBkgData(e) {
    this.writeScreen.setBkgData(e);
  }
  setMode(e) {
    e !== this.mode && (this.mode = e, this.logger.log(2, () => "MODE=" + e), this.mode === "MODE_POP-ON" ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), this.mode !== "MODE_ROLL-UP" && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e);
  }
  insertChars(e) {
    for (let s = 0; s < e.length; s++)
      this.writeScreen.insertChar(e[s]);
    const t = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
    this.logger.log(2, () => t + ": " + this.writeScreen.getDisplayText(!0)), (this.mode === "MODE_PAINT-ON" || this.mode === "MODE_ROLL-UP") && (this.logger.log(1, () => "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate());
  }
  ccRCL() {
    this.logger.log(2, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON");
  }
  ccBS() {
    this.logger.log(2, "BS - BackSpace"), this.mode !== "MODE_TEXT" && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate());
  }
  ccAOF() {
  }
  ccAON() {
  }
  ccDER() {
    this.logger.log(2, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate();
  }
  ccRU(e) {
    this.logger.log(2, "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e);
  }
  ccFON() {
    this.logger.log(2, "FON - Flash On"), this.writeScreen.setPen({
      flash: !0
    });
  }
  ccRDC() {
    this.logger.log(2, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON");
  }
  ccTR() {
    this.logger.log(2, "TR"), this.setMode("MODE_TEXT");
  }
  ccRTD() {
    this.logger.log(2, "RTD"), this.setMode("MODE_TEXT");
  }
  ccEDM() {
    this.logger.log(2, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0);
  }
  ccCR() {
    this.logger.log(2, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0);
  }
  ccENM() {
    this.logger.log(2, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset();
  }
  ccEOC() {
    if (this.logger.log(2, "EOC - End Of Caption"), this.mode === "MODE_POP-ON") {
      const e = this.displayedMemory;
      this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, this.logger.log(1, () => "DISP: " + this.displayedMemory.getDisplayText());
    }
    this.outputDataUpdate(!0);
  }
  ccTO(e) {
    this.logger.log(2, "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e);
  }
  ccMIDROW(e) {
    const t = {
      flash: !1
    };
    if (t.underline = e % 2 === 1, t.italics = e >= 46, t.italics)
      t.foreground = "white";
    else {
      const s = Math.floor(e / 2) - 16, n = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
      t.foreground = n[s];
    }
    this.logger.log(2, "MIDROW: " + Te(t)), this.writeScreen.setPen(t);
  }
  outputDataUpdate(e = !1) {
    const t = this.logger.time;
    t !== null && this.outputFilter && (this.cueStartTime === null && !this.displayedMemory.isEmpty() ? this.cueStartTime = t : this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t), this.lastOutputScreen.copy(this.displayedMemory));
  }
  cueSplitAtTime(e) {
    this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e));
  }
}
class La {
  constructor(e, t, s) {
    this.channels = void 0, this.currentChannel = 0, this.cmdHistory = qf(), this.logger = void 0;
    const n = this.logger = new Vf();
    this.channels = [null, new Aa(e, t, n), new Aa(e + 1, s, n)];
  }
  getHandler(e) {
    return this.channels[e].getHandler();
  }
  setHandler(e, t) {
    this.channels[e].setHandler(t);
  }
  /**
   * Add data for time t in forms of list of bytes (unsigned ints). The bytes are treated as pairs.
   */
  addData(e, t) {
    this.logger.time = e;
    for (let s = 0; s < t.length; s += 2) {
      const n = t[s] & 127, r = t[s + 1] & 127;
      let a = !1, o = null;
      if (n === 0 && r === 0)
        continue;
      this.logger.log(3, () => "[" + jt([t[s], t[s + 1]]) + "] -> (" + jt([n, r]) + ")");
      const c = this.cmdHistory;
      if (n >= 16 && n <= 31) {
        if (Wf(n, r, c)) {
          Xs(null, null, c), this.logger.log(3, () => "Repeated command (" + jt([n, r]) + ") is dropped");
          continue;
        }
        Xs(n, r, this.cmdHistory), a = this.parseCmd(n, r), a || (a = this.parseMidrow(n, r)), a || (a = this.parsePAC(n, r)), a || (a = this.parseBackgroundAttributes(n, r));
      } else
        Xs(null, null, c);
      if (!a && (o = this.parseChars(n, r), o)) {
        const u = this.currentChannel;
        u && u > 0 ? this.channels[u].insertChars(o) : this.logger.log(2, "No channel found yet. TEXT-MODE?");
      }
      !a && !o && this.logger.log(2, () => "Couldn't parse cleaned data " + jt([n, r]) + " orig: " + jt([t[s], t[s + 1]]));
    }
  }
  /**
   * Parse Command.
   * @returns True if a command was found
   */
  parseCmd(e, t) {
    const s = (e === 20 || e === 28 || e === 21 || e === 29) && t >= 32 && t <= 47, n = (e === 23 || e === 31) && t >= 33 && t <= 35;
    if (!(s || n))
      return !1;
    const r = e === 20 || e === 21 || e === 23 ? 1 : 2, a = this.channels[r];
    return e === 20 || e === 21 || e === 28 || e === 29 ? t === 32 ? a.ccRCL() : t === 33 ? a.ccBS() : t === 34 ? a.ccAOF() : t === 35 ? a.ccAON() : t === 36 ? a.ccDER() : t === 37 ? a.ccRU(2) : t === 38 ? a.ccRU(3) : t === 39 ? a.ccRU(4) : t === 40 ? a.ccFON() : t === 41 ? a.ccRDC() : t === 42 ? a.ccTR() : t === 43 ? a.ccRTD() : t === 44 ? a.ccEDM() : t === 45 ? a.ccCR() : t === 46 ? a.ccENM() : t === 47 && a.ccEOC() : a.ccTO(t - 32), this.currentChannel = r, !0;
  }
  /**
   * Parse midrow styling command
   */
  parseMidrow(e, t) {
    let s = 0;
    if ((e === 17 || e === 25) && t >= 32 && t <= 47) {
      if (e === 17 ? s = 1 : s = 2, s !== this.currentChannel)
        return this.logger.log(0, "Mismatch channel in midrow parsing"), !1;
      const n = this.channels[s];
      return n ? (n.ccMIDROW(t), this.logger.log(3, () => "MIDROW (" + jt([e, t]) + ")"), !0) : !1;
    }
    return !1;
  }
  /**
   * Parse Preable Access Codes (Table 53).
   * @returns {Boolean} Tells if PAC found
   */
  parsePAC(e, t) {
    let s;
    const n = (e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127, r = (e === 16 || e === 24) && t >= 64 && t <= 95;
    if (!(n || r))
      return !1;
    const a = e <= 23 ? 1 : 2;
    t >= 64 && t <= 95 ? s = a === 1 ? $f[e] : Uf[e] : s = a === 1 ? Bf[e] : Gf[e];
    const o = this.channels[a];
    return o ? (o.setPAC(this.interpretPAC(s, t)), this.currentChannel = a, !0) : !1;
  }
  /**
   * Interpret the second byte of the pac, and return the information.
   * @returns pacData with style parameters
   */
  interpretPAC(e, t) {
    let s;
    const n = {
      color: null,
      italics: !1,
      indent: null,
      underline: !1,
      row: e
    };
    return t > 95 ? s = t - 96 : s = t - 64, n.underline = (s & 1) === 1, s <= 13 ? n.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(s / 2)] : s <= 15 ? (n.italics = !0, n.color = "white") : n.indent = Math.floor((s - 16) / 2) * 4, n;
  }
  /**
   * Parse characters.
   * @returns An array with 1 to 2 codes corresponding to chars, if found. null otherwise.
   */
  parseChars(e, t) {
    let s, n = null, r = null;
    if (e >= 25 ? (s = 2, r = e - 8) : (s = 1, r = e), r >= 17 && r <= 19) {
      let a;
      r === 17 ? a = t + 80 : r === 18 ? a = t + 112 : a = t + 144, this.logger.log(2, () => "Special char '" + gl(a) + "' in channel " + s), n = [a];
    } else e >= 32 && e <= 127 && (n = t === 0 ? [e] : [e, t]);
    return n && this.logger.log(3, () => "Char codes =  " + jt(n).join(",")), n;
  }
  /**
   * Parse extended background attributes as well as new foreground color black.
   * @returns True if background attributes are found
   */
  parseBackgroundAttributes(e, t) {
    const s = (e === 16 || e === 24) && t >= 32 && t <= 47, n = (e === 23 || e === 31) && t >= 45 && t <= 47;
    if (!(s || n))
      return !1;
    let r;
    const a = {};
    e === 16 || e === 24 ? (r = Math.floor((t - 32) / 2), a.background = Kf[r], t % 2 === 1 && (a.background = a.background + "_semi")) : t === 45 ? a.background = "transparent" : (a.foreground = "black", t === 47 && (a.underline = !0));
    const o = e <= 23 ? 1 : 2;
    return this.channels[o].setBkgData(a), !0;
  }
  /**
   * Reset state of parser and its channels.
   */
  reset() {
    for (let e = 0; e < Object.keys(this.channels).length; e++) {
      const t = this.channels[e];
      t && t.reset();
    }
    Xs(null, null, this.cmdHistory);
  }
  /**
   * Trigger the generation of a cue, and the start of a new one if displayScreens are not empty.
   */
  cueSplitAtTime(e) {
    for (let t = 0; t < this.channels.length; t++) {
      const s = this.channels[t];
      s && s.cueSplitAtTime(e);
    }
  }
}
function Xs(i, e, t) {
  t.a = i, t.b = e;
}
function Wf(i, e, t) {
  return t.a === i && t.b === e;
}
function qf() {
  return {
    a: null,
    b: null
  };
}
var lr = (function() {
  if (bi != null && bi.VTTCue)
    return self.VTTCue;
  const i = ["", "lr", "rl"], e = ["start", "middle", "end", "left", "right"];
  function t(o, c) {
    if (typeof c != "string" || !Array.isArray(o))
      return !1;
    const l = c.toLowerCase();
    return ~o.indexOf(l) ? l : !1;
  }
  function s(o) {
    return t(i, o);
  }
  function n(o) {
    return t(e, o);
  }
  function r(o, ...c) {
    let l = 1;
    for (; l < arguments.length; l++) {
      const u = arguments[l];
      for (const h in u)
        o[h] = u[h];
    }
    return o;
  }
  function a(o, c, l) {
    const u = this, h = {
      enumerable: !0
    };
    u.hasBeenReset = !1;
    let d = "", g = !1, f = o, m = c, p = l, T = null, E = "", v = !0, x = "auto", A = "start", _ = 50, S = "middle", L = 50, I = "middle";
    Object.defineProperty(u, "id", r({}, h, {
      get: function() {
        return d;
      },
      set: function(R) {
        d = "" + R;
      }
    })), Object.defineProperty(u, "pauseOnExit", r({}, h, {
      get: function() {
        return g;
      },
      set: function(R) {
        g = !!R;
      }
    })), Object.defineProperty(u, "startTime", r({}, h, {
      get: function() {
        return f;
      },
      set: function(R) {
        if (typeof R != "number")
          throw new TypeError("Start time must be set to a number.");
        f = R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "endTime", r({}, h, {
      get: function() {
        return m;
      },
      set: function(R) {
        if (typeof R != "number")
          throw new TypeError("End time must be set to a number.");
        m = R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "text", r({}, h, {
      get: function() {
        return p;
      },
      set: function(R) {
        p = "" + R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "region", r({}, h, {
      get: function() {
        return T;
      },
      set: function(R) {
        T = R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "vertical", r({}, h, {
      get: function() {
        return E;
      },
      set: function(R) {
        const w = s(R);
        if (w === !1)
          throw new SyntaxError("An invalid or illegal string was specified.");
        E = w, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "snapToLines", r({}, h, {
      get: function() {
        return v;
      },
      set: function(R) {
        v = !!R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "line", r({}, h, {
      get: function() {
        return x;
      },
      set: function(R) {
        if (typeof R != "number" && R !== "auto")
          throw new SyntaxError("An invalid number or illegal string was specified.");
        x = R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "lineAlign", r({}, h, {
      get: function() {
        return A;
      },
      set: function(R) {
        const w = n(R);
        if (!w)
          throw new SyntaxError("An invalid or illegal string was specified.");
        A = w, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "position", r({}, h, {
      get: function() {
        return _;
      },
      set: function(R) {
        if (R < 0 || R > 100)
          throw new Error("Position must be between 0 and 100.");
        _ = R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "positionAlign", r({}, h, {
      get: function() {
        return S;
      },
      set: function(R) {
        const w = n(R);
        if (!w)
          throw new SyntaxError("An invalid or illegal string was specified.");
        S = w, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "size", r({}, h, {
      get: function() {
        return L;
      },
      set: function(R) {
        if (R < 0 || R > 100)
          throw new Error("Size must be between 0 and 100.");
        L = R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "align", r({}, h, {
      get: function() {
        return I;
      },
      set: function(R) {
        const w = n(R);
        if (!w)
          throw new SyntaxError("An invalid or illegal string was specified.");
        I = w, this.hasBeenReset = !0;
      }
    })), u.displayState = void 0;
  }
  return a.prototype.getCueAsHTML = function() {
    return self.WebVTT.convertCueToDOMTree(self, this.text);
  }, a;
})();
class Yf {
  decode(e, t) {
    if (!e)
      return "";
    if (typeof e != "string")
      throw new Error("Error - expected string data.");
    return decodeURIComponent(encodeURIComponent(e));
  }
}
function pl(i) {
  function e(s, n, r, a) {
    return (s | 0) * 3600 + (n | 0) * 60 + (r | 0) + parseFloat(a || 0);
  }
  const t = i.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
  return t ? parseFloat(t[2]) > 59 ? e(t[2], t[3], 0, t[4]) : e(t[1], t[2], t[3], t[4]) : null;
}
class zf {
  constructor() {
    this.values = /* @__PURE__ */ Object.create(null);
  }
  // Only accept the first assignment to any key.
  set(e, t) {
    !this.get(e) && t !== "" && (this.values[e] = t);
  }
  // Return the value for a key, or a default value.
  // If 'defaultKey' is passed then 'dflt' is assumed to be an object with
  // a number of possible default values as properties where 'defaultKey' is
  // the key of the property that will be chosen; otherwise it's assumed to be
  // a single value.
  get(e, t, s) {
    return s ? this.has(e) ? this.values[e] : t[s] : this.has(e) ? this.values[e] : t;
  }
  // Check whether we have a value for a key.
  has(e) {
    return e in this.values;
  }
  // Accept a setting if its one of the given alternatives.
  alt(e, t, s) {
    for (let n = 0; n < s.length; ++n)
      if (t === s[n]) {
        this.set(e, t);
        break;
      }
  }
  // Accept a setting if its a valid (signed) integer.
  integer(e, t) {
    /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10));
  }
  // Accept a setting if its a valid percentage.
  percent(e, t) {
    if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t)) {
      const s = parseFloat(t);
      if (s >= 0 && s <= 100)
        return this.set(e, s), !0;
    }
    return !1;
  }
}
function yl(i, e, t, s) {
  const n = s ? i.split(s) : [i];
  for (const r in n) {
    if (typeof n[r] != "string")
      continue;
    const a = n[r].split(t);
    if (a.length !== 2)
      continue;
    const o = a[0], c = a[1];
    e(o, c);
  }
}
const kn = new lr(0, 0, ""), Qs = kn.align === "middle" ? "middle" : "center";
function Xf(i, e, t) {
  const s = i;
  function n() {
    const o = pl(i);
    if (o === null)
      throw new Error("Malformed timestamp: " + s);
    return i = i.replace(/^[^\sa-zA-Z-]+/, ""), o;
  }
  function r(o, c) {
    const l = new zf();
    yl(o, function(d, g) {
      let f;
      switch (d) {
        case "region":
          for (let m = t.length - 1; m >= 0; m--)
            if (t[m].id === g) {
              l.set(d, t[m].region);
              break;
            }
          break;
        case "vertical":
          l.alt(d, g, ["rl", "lr"]);
          break;
        case "line":
          f = g.split(","), l.integer(d, f[0]), l.percent(d, f[0]) && l.set("snapToLines", !1), l.alt(d, f[0], ["auto"]), f.length === 2 && l.alt("lineAlign", f[1], ["start", Qs, "end"]);
          break;
        case "position":
          f = g.split(","), l.percent(d, f[0]), f.length === 2 && l.alt("positionAlign", f[1], ["start", Qs, "end", "line-left", "line-right", "auto"]);
          break;
        case "size":
          l.percent(d, g);
          break;
        case "align":
          l.alt(d, g, ["start", Qs, "end", "left", "right"]);
          break;
      }
    }, /:/, /\s/), c.region = l.get("region", null), c.vertical = l.get("vertical", "");
    let u = l.get("line", "auto");
    u === "auto" && kn.line === -1 && (u = -1), c.line = u, c.lineAlign = l.get("lineAlign", "start"), c.snapToLines = l.get("snapToLines", !0), c.size = l.get("size", 100), c.align = l.get("align", Qs);
    let h = l.get("position", "auto");
    h === "auto" && kn.position === 50 && (h = c.align === "start" || c.align === "left" ? 0 : c.align === "end" || c.align === "right" ? 100 : 50), c.position = h;
  }
  function a() {
    i = i.replace(/^\s+/, "");
  }
  if (a(), e.startTime = n(), a(), i.slice(0, 3) !== "-->")
    throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + s);
  i = i.slice(3), a(), e.endTime = n(), a(), r(i, e);
}
function Tl(i) {
  return i.replace(/<br(?: \/)?>/gi, `
`);
}
class Qf {
  constructor() {
    this.state = "INITIAL", this.buffer = "", this.decoder = new Yf(), this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0;
  }
  parse(e) {
    const t = this;
    e && (t.buffer += t.decoder.decode(e, {
      stream: !0
    }));
    function s() {
      let r = t.buffer, a = 0;
      for (r = Tl(r); a < r.length && r[a] !== "\r" && r[a] !== `
`; )
        ++a;
      const o = r.slice(0, a);
      return r[a] === "\r" && ++a, r[a] === `
` && ++a, t.buffer = r.slice(a), o;
    }
    function n(r) {
      yl(r, function(a, o) {
      }, /:/);
    }
    try {
      let r = "";
      if (t.state === "INITIAL") {
        if (!/\r\n|\n/.test(t.buffer))
          return this;
        r = s();
        const o = r.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
        if (!(o != null && o[0]))
          throw new Error("Malformed WebVTT signature.");
        t.state = "HEADER";
      }
      let a = !1;
      for (; t.buffer; ) {
        if (!/\r\n|\n/.test(t.buffer))
          return this;
        switch (a ? a = !1 : r = s(), t.state) {
          case "HEADER":
            /:/.test(r) ? n(r) : r || (t.state = "ID");
            continue;
          case "NOTE":
            r || (t.state = "ID");
            continue;
          case "ID":
            if (/^NOTE($|[ \t])/.test(r)) {
              t.state = "NOTE";
              break;
            }
            if (!r)
              continue;
            if (t.cue = new lr(0, 0, ""), t.state = "CUE", r.indexOf("-->") === -1) {
              t.cue.id = r;
              continue;
            }
          // Process line as start of a cue.
          /* falls through */
          case "CUE":
            if (!t.cue) {
              t.state = "BADCUE";
              continue;
            }
            try {
              Xf(r, t.cue, t.regionList);
            } catch {
              t.cue = null, t.state = "BADCUE";
              continue;
            }
            t.state = "CUETEXT";
            continue;
          case "CUETEXT":
            {
              const o = r.indexOf("-->") !== -1;
              if (!r || o && (a = !0)) {
                t.oncue && t.cue && t.oncue(t.cue), t.cue = null, t.state = "ID";
                continue;
              }
              if (t.cue === null)
                continue;
              t.cue.text && (t.cue.text += `
`), t.cue.text += r;
            }
            continue;
          case "BADCUE":
            r || (t.state = "ID");
        }
      }
    } catch {
      t.state === "CUETEXT" && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = t.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
    }
    return this;
  }
  flush() {
    const e = this;
    try {
      if ((e.cue || e.state === "HEADER") && (e.buffer += `

`, e.parse()), e.state === "INITIAL" || e.state === "BADWEBVTT")
        throw new Error("Malformed WebVTT signature.");
    } catch (t) {
      e.onparsingerror && e.onparsingerror(t);
    }
    return e.onflush && e.onflush(), this;
  }
}
const Zf = /\r\n|\n\r|\n|\r/g, Ji = function(e, t, s = 0) {
  return e.slice(s, s + t.length) === t;
}, Jf = function(e) {
  let t = parseInt(e.slice(-3));
  const s = parseInt(e.slice(-6, -4)), n = parseInt(e.slice(-9, -7)), r = e.length > 9 ? parseInt(e.substring(0, e.indexOf(":"))) : 0;
  if (!G(t) || !G(s) || !G(n) || !G(r))
    throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);
  return t += 1e3 * s, t += 60 * 1e3 * n, t += 3600 * 1e3 * r, t;
};
function cr(i, e, t) {
  return Ss(i.toString()) + Ss(e.toString()) + Ss(t);
}
const eg = function(e, t, s) {
  let n = e[t], r = e[n.prevCC];
  if (!r || !r.new && n.new) {
    e.ccOffset = e.presentationOffset = n.start, n.new = !1;
    return;
  }
  for (; (a = r) != null && a.new; ) {
    var a;
    e.ccOffset += n.start - r.start, n.new = !1, n = r, r = e[n.prevCC];
  }
  e.presentationOffset = s;
};
function tg(i, e, t, s, n, r, a) {
  const o = new Qf(), c = it(new Uint8Array(i)).trim().replace(Zf, `
`).split(`
`), l = [], u = e ? ad(e.baseTime, e.timescale) : 0;
  let h = "00:00.000", d = 0, g = 0, f, m = !0;
  o.oncue = function(p) {
    const T = t[s];
    let E = t.ccOffset;
    const v = (d - u) / 9e4;
    if (T != null && T.new && (g !== void 0 ? E = t.ccOffset = T.start : eg(t, s, v)), v) {
      if (!e) {
        f = new Error("Missing initPTS for VTT MPEGTS");
        return;
      }
      E = v - t.presentationOffset;
    }
    const x = p.endTime - p.startTime, A = tt((p.startTime + E - g) * 9e4, n * 9e4) / 9e4;
    p.startTime = Math.max(A, 0), p.endTime = Math.max(A + x, 0);
    const _ = p.text.trim();
    p.text = decodeURIComponent(encodeURIComponent(_)), p.id || (p.id = cr(p.startTime, p.endTime, _)), p.endTime > 0 && l.push(p);
  }, o.onparsingerror = function(p) {
    f = p;
  }, o.onflush = function() {
    if (f) {
      a(f);
      return;
    }
    r(l);
  }, c.forEach((p) => {
    if (m)
      if (Ji(p, "X-TIMESTAMP-MAP=")) {
        m = !1, p.slice(16).split(",").forEach((T) => {
          Ji(T, "LOCAL:") ? h = T.slice(6) : Ji(T, "MPEGTS:") && (d = parseInt(T.slice(7)));
        });
        try {
          g = Jf(h) / 1e3;
        } catch (T) {
          f = T;
        }
        return;
      } else p === "" && (m = !1);
    o.parse(p + `
`);
  }), o.flush();
}
const en = "stpp.ttml.im1t", El = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, vl = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/, sg = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
};
function Ia(i, e, t, s) {
  const n = ne(new Uint8Array(i), ["mdat"]);
  if (n.length === 0) {
    s(new Error("Could not parse IMSC1 mdat"));
    return;
  }
  const r = n.map((o) => it(o)), a = rd(e.baseTime, 1, e.timescale);
  try {
    r.forEach((o) => t(ig(o, a)));
  } catch (o) {
    s(o);
  }
}
function ig(i, e) {
  const n = new DOMParser().parseFromString(i, "text/xml").getElementsByTagName("tt")[0];
  if (!n)
    throw new Error("Invalid ttml");
  const r = {
    frameRate: 30,
    subFrameRate: 1,
    frameRateMultiplier: 0,
    tickRate: 0
  }, a = Object.keys(r).reduce((h, d) => (h[d] = n.getAttribute(`ttp:${d}`) || r[d], h), {}), o = n.getAttribute("xml:space") !== "preserve", c = Ra(tn(n, "styling", "style")), l = Ra(tn(n, "layout", "region")), u = tn(n, "body", "[begin]");
  return [].map.call(u, (h) => {
    const d = bl(h, o);
    if (!d || !h.hasAttribute("begin"))
      return null;
    const g = nn(h.getAttribute("begin"), a), f = nn(h.getAttribute("dur"), a);
    let m = nn(h.getAttribute("end"), a);
    if (g === null)
      throw _a(h);
    if (m === null) {
      if (f === null)
        throw _a(h);
      m = g + f;
    }
    const p = new lr(g - e, m - e, d);
    p.id = cr(p.startTime, p.endTime, p.text);
    const T = l[h.getAttribute("region")], E = c[h.getAttribute("style")], v = ng(T, E, c), {
      textAlign: x
    } = v;
    if (x) {
      const A = sg[x];
      A && (p.lineAlign = A), p.align = x;
    }
    return pe(p, v), p;
  }).filter((h) => h !== null);
}
function tn(i, e, t) {
  const s = i.getElementsByTagName(e)[0];
  return s ? [].slice.call(s.querySelectorAll(t)) : [];
}
function Ra(i) {
  return i.reduce((e, t) => {
    const s = t.getAttribute("xml:id");
    return s && (e[s] = t), e;
  }, {});
}
function bl(i, e) {
  return [].slice.call(i.childNodes).reduce((t, s, n) => {
    var r;
    return s.nodeName === "br" && n ? t + `
` : (r = s.childNodes) != null && r.length ? bl(s, e) : e ? t + s.textContent.trim().replace(/\s+/g, " ") : t + s.textContent;
  }, "");
}
function ng(i, e, t) {
  const s = "http://www.w3.org/ns/ttml#styling";
  let n = null;
  const r = [
    "displayAlign",
    "textAlign",
    "color",
    "backgroundColor",
    "fontSize",
    "fontFamily"
    // 'fontWeight',
    // 'lineHeight',
    // 'wrapOption',
    // 'fontStyle',
    // 'direction',
    // 'writingMode'
  ], a = i != null && i.hasAttribute("style") ? i.getAttribute("style") : null;
  return a && t.hasOwnProperty(a) && (n = t[a]), r.reduce((o, c) => {
    const l = sn(e, s, c) || sn(i, s, c) || sn(n, s, c);
    return l && (o[c] = l), o;
  }, {});
}
function sn(i, e, t) {
  return i && i.hasAttributeNS(e, t) ? i.getAttributeNS(e, t) : null;
}
function _a(i) {
  return new Error(`Could not parse ttml timestamp ${i}`);
}
function nn(i, e) {
  if (!i)
    return null;
  let t = pl(i);
  return t === null && (El.test(i) ? t = rg(i, e) : vl.test(i) && (t = ag(i, e))), t;
}
function rg(i, e) {
  const t = El.exec(i), s = (t[4] | 0) + (t[5] | 0) / e.subFrameRate;
  return (t[1] | 0) * 3600 + (t[2] | 0) * 60 + (t[3] | 0) + s / e.frameRate;
}
function ag(i, e) {
  const t = vl.exec(i), s = Number(t[1]);
  switch (t[2]) {
    case "h":
      return s * 3600;
    case "m":
      return s * 60;
    case "ms":
      return s * 1e3;
    case "f":
      return s / e.frameRate;
    case "t":
      return s / e.tickRate;
  }
  return s;
}
class Zs {
  constructor(e, t) {
    this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = e, this.trackName = t;
  }
  dispatchCue() {
    this.startTime !== null && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null);
  }
  newCue(e, t, s) {
    (this.startTime === null || this.startTime > e) && (this.startTime = e), this.endTime = t, this.screen = s, this.timelineController.createCaptionsTrack(this.trackName);
  }
  reset() {
    this.cueRanges = [], this.startTime = null;
  }
}
class og {
  constructor(e) {
    this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = Ca(), this.captionsProperties = void 0, this.hls = e, this.config = e.config, this.Cues = e.config.cueHandler, this.captionsProperties = {
      textTrack1: {
        label: this.config.captionsTextTrack1Label,
        languageCode: this.config.captionsTextTrack1LanguageCode
      },
      textTrack2: {
        label: this.config.captionsTextTrack2Label,
        languageCode: this.config.captionsTextTrack2LanguageCode
      },
      textTrack3: {
        label: this.config.captionsTextTrack3Label,
        languageCode: this.config.captionsTextTrack3LanguageCode
      },
      textTrack4: {
        label: this.config.captionsTextTrack4Label,
        languageCode: this.config.captionsTextTrack4LanguageCode
      }
    }, e.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(y.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(y.FRAG_LOADING, this.onFragLoading, this), e.on(y.FRAG_LOADED, this.onFragLoaded, this), e.on(y.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.on(y.FRAG_DECRYPTED, this.onFragDecrypted, this), e.on(y.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(y.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this);
  }
  destroy() {
    const {
      hls: e
    } = this;
    e.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(y.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(y.FRAG_LOADING, this.onFragLoading, this), e.off(y.FRAG_LOADED, this.onFragLoaded, this), e.off(y.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.off(y.FRAG_DECRYPTED, this.onFragDecrypted, this), e.off(y.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(y.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.media = null, this.cea608Parser1 = this.cea608Parser2 = void 0;
  }
  initCea608Parsers() {
    const e = new Zs(this, "textTrack1"), t = new Zs(this, "textTrack2"), s = new Zs(this, "textTrack3"), n = new Zs(this, "textTrack4");
    this.cea608Parser1 = new La(1, e, t), this.cea608Parser2 = new La(3, s, n);
  }
  addCues(e, t, s, n, r) {
    let a = !1;
    for (let o = r.length; o--; ) {
      const c = r[o], l = lg(c[0], c[1], t, s);
      if (l >= 0 && (c[0] = Math.min(c[0], t), c[1] = Math.max(c[1], s), a = !0, l / (s - t) > 0.5))
        return;
    }
    if (a || r.push([t, s]), this.config.renderTextTracksNatively) {
      const o = this.captionsTracks[e];
      this.Cues.newCue(o, t, s, n);
    } else {
      const o = this.Cues.newCue(null, t, s, n);
      this.hls.trigger(y.CUES_PARSED, {
        type: "captions",
        cues: o,
        track: e
      });
    }
  }
  // Triggered when an initial PTS is found; used for synchronisation of WebVTT.
  onInitPtsFound(e, {
    frag: t,
    id: s,
    initPTS: n,
    timescale: r,
    trackId: a
  }) {
    const {
      unparsedVttFrags: o
    } = this;
    s === j.MAIN && (this.initPTS[t.cc] = {
      baseTime: n,
      timescale: r,
      trackId: a
    }), o.length && (this.unparsedVttFrags = [], o.forEach((c) => {
      this.initPTS[c.frag.cc] ? this.onFragLoaded(y.FRAG_LOADED, c) : this.hls.trigger(y.SUBTITLE_FRAG_PROCESSED, {
        success: !1,
        frag: c.frag,
        error: new Error("Subtitle discontinuity domain does not match main")
      });
    }));
  }
  getExistingTrack(e, t) {
    const {
      media: s
    } = this;
    if (s)
      for (let n = 0; n < s.textTracks.length; n++) {
        const r = s.textTracks[n];
        if (ka(r, {
          name: e,
          lang: t,
          characteristics: "transcribes-spoken-dialog,describes-music-and-sound"
        }))
          return r;
      }
    return null;
  }
  createCaptionsTrack(e) {
    this.config.renderTextTracksNatively ? this.createNativeTrack(e) : this.createNonNativeTrack(e);
  }
  createNativeTrack(e) {
    if (this.captionsTracks[e])
      return;
    const {
      captionsProperties: t,
      captionsTracks: s,
      media: n
    } = this, {
      label: r,
      languageCode: a
    } = t[e], o = this.getExistingTrack(r, a);
    if (o)
      s[e] = o, as(s[e]), hl(s[e], n);
    else {
      const c = this.createTextTrack("captions", r, a);
      c && (c[e] = !0, s[e] = c);
    }
  }
  createNonNativeTrack(e) {
    if (this.nonNativeCaptionsTracks[e])
      return;
    const t = this.captionsProperties[e];
    if (!t)
      return;
    const s = t.label, n = {
      _id: e,
      label: s,
      kind: "captions",
      default: t.media ? !!t.media.default : !1,
      closedCaptions: t.media
    };
    this.nonNativeCaptionsTracks[e] = n, this.hls.trigger(y.NON_NATIVE_TEXT_TRACKS_FOUND, {
      tracks: [n]
    });
  }
  createTextTrack(e, t, s) {
    const n = this.media;
    if (n)
      return n.addTextTrack(e, t, s);
  }
  onMediaAttaching(e, t) {
    this.media = t.media, t.mediaSource || this._cleanTracks();
  }
  onMediaDetaching(e, t) {
    const s = !!t.transferMedia;
    if (this.media = null, s)
      return;
    const {
      captionsTracks: n
    } = this;
    Object.keys(n).forEach((r) => {
      as(n[r]), delete n[r];
    }), this.nonNativeCaptionsTracks = {};
  }
  onManifestLoading() {
    this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = Ca(), this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset());
  }
  _cleanTracks() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = e.textTracks;
    if (t)
      for (let s = 0; s < t.length; s++)
        as(t[s]);
  }
  onSubtitleTracksUpdated(e, t) {
    const s = t.subtitleTracks || [], n = s.some((r) => r.textCodec === en);
    if (this.config.enableWebVTT || n && this.config.enableIMSC1) {
      if (Zo(this.tracks, s)) {
        this.tracks = s;
        return;
      }
      if (this.textTracks = [], this.tracks = s, this.config.renderTextTracksNatively) {
        const a = this.media, o = a ? li(a.textTracks) : null;
        if (this.tracks.forEach((c, l) => {
          let u;
          if (o) {
            let h = null;
            for (let d = 0; d < o.length; d++)
              if (o[d] && ka(o[d], c)) {
                h = o[d], o[d] = null;
                break;
              }
            h && (u = h);
          }
          if (u)
            as(u);
          else {
            const h = Sl(c);
            u = this.createTextTrack(h, c.name, c.lang), u && (u.mode = "disabled");
          }
          u && this.textTracks.push(u);
        }), o != null && o.length) {
          const c = o.filter((l) => l !== null).map((l) => l.label);
          c.length && this.hls.logger.warn(`Media element contains unused subtitle tracks: ${c.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`);
        }
      } else if (this.tracks.length) {
        const a = this.tracks.map((o) => ({
          label: o.name,
          kind: o.type.toLowerCase(),
          default: o.default,
          subtitleTrack: o
        }));
        this.hls.trigger(y.NON_NATIVE_TEXT_TRACKS_FOUND, {
          tracks: a
        });
      }
    }
  }
  onManifestLoaded(e, t) {
    this.config.enableCEA708Captions && t.captions && t.captions.forEach((s) => {
      const n = /(?:CC|SERVICE)([1-4])/.exec(s.instreamId);
      if (!n)
        return;
      const r = `textTrack${n[1]}`, a = this.captionsProperties[r];
      a && (a.label = s.name, s.lang && (a.languageCode = s.lang), a.media = s);
    });
  }
  closedCaptionsForLevel(e) {
    const t = this.hls.levels[e.level];
    return t == null ? void 0 : t.attrs["CLOSED-CAPTIONS"];
  }
  onFragLoading(e, t) {
    if (this.enabled && t.frag.type === j.MAIN) {
      var s, n;
      const {
        cea608Parser1: r,
        cea608Parser2: a,
        lastSn: o
      } = this, {
        cc: c,
        sn: l
      } = t.frag, u = (s = (n = t.part) == null ? void 0 : n.index) != null ? s : -1;
      r && a && (l !== o + 1 || l === o && u !== this.lastPartIndex + 1 || c !== this.lastCc) && (r.reset(), a.reset()), this.lastCc = c, this.lastSn = l, this.lastPartIndex = u;
    }
  }
  onFragLoaded(e, t) {
    const {
      frag: s,
      payload: n
    } = t;
    if (s.type === j.SUBTITLE)
      if (n.byteLength) {
        const r = s.decryptdata, a = "stats" in t;
        if (r == null || !r.encrypted || a) {
          const o = this.tracks[s.level], c = this.vttCCs;
          c[s.cc] || (c[s.cc] = {
            start: s.start,
            prevCC: this.prevCC,
            new: !0
          }, this.prevCC = s.cc), o && o.textCodec === en ? this._parseIMSC1(s, n) : this._parseVTTs(t);
        }
      } else
        this.hls.trigger(y.SUBTITLE_FRAG_PROCESSED, {
          success: !1,
          frag: s,
          error: new Error("Empty subtitle payload")
        });
  }
  _parseIMSC1(e, t) {
    const s = this.hls;
    Ia(t, this.initPTS[e.cc], (n) => {
      this._appendCues(n, e.level), s.trigger(y.SUBTITLE_FRAG_PROCESSED, {
        success: !0,
        frag: e
      });
    }, (n) => {
      s.logger.log(`Failed to parse IMSC1: ${n}`), s.trigger(y.SUBTITLE_FRAG_PROCESSED, {
        success: !1,
        frag: e,
        error: n
      });
    });
  }
  _parseVTTs(e) {
    var t;
    const {
      frag: s,
      payload: n
    } = e, {
      initPTS: r,
      unparsedVttFrags: a
    } = this, o = r.length - 1;
    if (!r[s.cc] && o === -1) {
      a.push(e);
      return;
    }
    const c = this.hls, l = (t = s.initSegment) != null && t.data ? nt(s.initSegment.data, new Uint8Array(n)).buffer : n;
    tg(l, this.initPTS[s.cc], this.vttCCs, s.cc, s.start, (u) => {
      this._appendCues(u, s.level), c.trigger(y.SUBTITLE_FRAG_PROCESSED, {
        success: !0,
        frag: s
      });
    }, (u) => {
      const h = u.message === "Missing initPTS for VTT MPEGTS";
      h ? a.push(e) : this._fallbackToIMSC1(s, n), c.logger.log(`Failed to parse VTT cue: ${u}`), !(h && o > s.cc) && c.trigger(y.SUBTITLE_FRAG_PROCESSED, {
        success: !1,
        frag: s,
        error: u
      });
    });
  }
  _fallbackToIMSC1(e, t) {
    const s = this.tracks[e.level];
    s.textCodec || Ia(t, this.initPTS[e.cc], () => {
      s.textCodec = en, this._parseIMSC1(e, t);
    }, () => {
      s.textCodec = "wvtt";
    });
  }
  _appendCues(e, t) {
    const s = this.hls;
    if (this.config.renderTextTracksNatively) {
      const n = this.textTracks[t];
      if (!n || n.mode === "disabled")
        return;
      e.forEach((r) => dl(n, r));
    } else {
      const n = this.tracks[t];
      if (!n)
        return;
      const r = n.default ? "default" : "subtitles" + t;
      s.trigger(y.CUES_PARSED, {
        type: "subtitles",
        cues: e,
        track: r
      });
    }
  }
  onFragDecrypted(e, t) {
    const {
      frag: s
    } = t;
    s.type === j.SUBTITLE && this.onFragLoaded(y.FRAG_LOADED, t);
  }
  onSubtitleTracksCleared() {
    this.tracks = [], this.captionsTracks = {};
  }
  onFragParsingUserdata(e, t) {
    if (!this.enabled || !this.config.enableCEA708Captions)
      return;
    const {
      frag: s,
      samples: n
    } = t;
    if (!(s.type === j.MAIN && this.closedCaptionsForLevel(s) === "NONE"))
      for (let r = 0; r < n.length; r++) {
        const a = n[r].bytes;
        if (a) {
          this.cea608Parser1 || this.initCea608Parsers();
          const o = this.extractCea608Data(a);
          this.cea608Parser1.addData(n[r].pts, o[0]), this.cea608Parser2.addData(n[r].pts, o[1]);
        }
      }
  }
  onBufferFlushing(e, {
    startOffset: t,
    endOffset: s,
    endOffsetSubtitles: n,
    type: r
  }) {
    const {
      media: a
    } = this;
    if (!(!a || a.currentTime < s)) {
      if (!r || r === "video") {
        const {
          captionsTracks: o
        } = this;
        Object.keys(o).forEach((c) => _n(o[c], t, s));
      }
      if (this.config.renderTextTracksNatively && t === 0 && n !== void 0) {
        const {
          textTracks: o
        } = this;
        Object.keys(o).forEach((c) => _n(o[c], t, n));
      }
    }
  }
  extractCea608Data(e) {
    const t = [[], []], s = e[0] & 31;
    let n = 2;
    for (let r = 0; r < s; r++) {
      const a = e[n++], o = 127 & e[n++], c = 127 & e[n++];
      if (o === 0 && c === 0)
        continue;
      if ((4 & a) !== 0) {
        const u = 3 & a;
        (u === 0 || u === 1) && (t[u].push(o), t[u].push(c));
      }
    }
    return t;
  }
}
function Sl(i) {
  return i.characteristics && /transcribes-spoken-dialog/gi.test(i.characteristics) && /describes-music-and-sound/gi.test(i.characteristics) ? "captions" : "subtitles";
}
function ka(i, e) {
  return !!i && i.kind === Sl(e) && An(e, i);
}
function lg(i, e, t, s) {
  return Math.min(e, s) - Math.max(i, t);
}
function Ca() {
  return {
    ccOffset: 0,
    presentationOffset: 0,
    0: {
      start: 0,
      prevCC: -1,
      new: !0
    }
  };
}
const cg = /\s/, ug = {
  newCue(i, e, t, s) {
    const n = [];
    let r, a, o, c, l;
    const u = self.VTTCue || self.TextTrackCue;
    for (let d = 0; d < s.rows.length; d++)
      if (r = s.rows[d], o = !0, c = 0, l = "", !r.isEmpty()) {
        var h;
        for (let m = 0; m < r.chars.length; m++)
          cg.test(r.chars[m].uchar) && o ? c++ : (l += r.chars[m].uchar, o = !1);
        r.cueStartTime = e, e === t && (t += 1e-4), c >= 16 ? c-- : c++;
        const g = Tl(l.trim()), f = cr(e, t, g);
        i != null && (h = i.cues) != null && h.getCueById(f) || (a = new u(e, t, g), a.id = f, a.line = d + 1, a.align = "left", a.position = 10 + Math.min(80, Math.floor(c * 8 / 32) * 10), n.push(a));
      }
    return i && n.length && (n.sort((d, g) => d.line === "auto" || g.line === "auto" ? 0 : d.line > 8 && g.line > 8 ? g.line - d.line : d.line - g.line), n.forEach((d) => dl(i, d))), n;
  }
};
function hg() {
  if (
    // @ts-ignore
    self.fetch && self.AbortController && self.ReadableStream && self.Request
  )
    try {
      return new self.ReadableStream({}), !0;
    } catch {
    }
  return !1;
}
const dg = /(\d+)-(\d+)\/(\d+)/;
class wa {
  constructor(e) {
    this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = null, this.response = null, this.controller = void 0, this.context = null, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = e.fetchSetup || pg, this.controller = new self.AbortController(), this.stats = new Gn();
  }
  destroy() {
    this.loader = this.callbacks = this.context = this.config = this.request = null, this.abortInternal(), this.response = null, this.fetchSetup = this.controller = this.stats = null;
  }
  abortInternal() {
    this.controller && !this.stats.loading.end && (this.stats.aborted = !0, this.controller.abort());
  }
  abort() {
    var e;
    this.abortInternal(), (e = this.callbacks) != null && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response);
  }
  load(e, t, s) {
    const n = this.stats;
    if (n.loading.start)
      throw new Error("Loader can only be used once.");
    n.loading.start = self.performance.now();
    const r = fg(e, this.controller.signal), a = e.responseType === "arraybuffer", o = a ? "byteLength" : "length", {
      maxTimeToFirstByteMs: c,
      maxLoadTimeMs: l
    } = t.loadPolicy;
    this.context = e, this.config = t, this.callbacks = s, this.request = this.fetchSetup(e, r), self.clearTimeout(this.requestTimeout), t.timeout = c && G(c) ? c : l, this.requestTimeout = self.setTimeout(() => {
      this.callbacks && (this.abortInternal(), this.callbacks.onTimeout(n, e, this.response));
    }, t.timeout), (ks(this.request) ? this.request.then(self.fetch) : self.fetch(this.request)).then((h) => {
      var d;
      this.response = this.loader = h;
      const g = Math.max(self.performance.now(), n.loading.start);
      if (self.clearTimeout(this.requestTimeout), t.timeout = l, this.requestTimeout = self.setTimeout(() => {
        this.callbacks && (this.abortInternal(), this.callbacks.onTimeout(n, e, this.response));
      }, l - (g - n.loading.start)), !h.ok) {
        const {
          status: m,
          statusText: p
        } = h;
        throw new yg(p || "fetch, bad network response", m, h);
      }
      n.loading.first = g, n.total = mg(h.headers) || n.total;
      const f = (d = this.callbacks) == null ? void 0 : d.onProgress;
      return f && G(t.highWaterMark) ? this.loadProgressively(h, n, e, t.highWaterMark, f) : a ? h.arrayBuffer() : e.responseType === "json" ? h.json() : h.text();
    }).then((h) => {
      var d, g;
      const f = this.response;
      if (!f)
        throw new Error("loader destroyed");
      self.clearTimeout(this.requestTimeout), n.loading.end = Math.max(self.performance.now(), n.loading.first);
      const m = h[o];
      m && (n.loaded = n.total = m);
      const p = {
        url: f.url,
        data: h,
        code: f.status
      }, T = (d = this.callbacks) == null ? void 0 : d.onProgress;
      T && !G(t.highWaterMark) && T(n, e, h, f), (g = this.callbacks) == null || g.onSuccess(p, n, e, f);
    }).catch((h) => {
      var d;
      if (self.clearTimeout(this.requestTimeout), n.aborted)
        return;
      const g = h && h.code || 0, f = h ? h.message : null;
      (d = this.callbacks) == null || d.onError({
        code: g,
        text: f
      }, e, h ? h.details : null, n);
    });
  }
  getCacheAge() {
    let e = null;
    if (this.response) {
      const t = this.response.headers.get("age");
      e = t ? parseFloat(t) : null;
    }
    return e;
  }
  getResponseHeader(e) {
    return this.response ? this.response.headers.get(e) : null;
  }
  loadProgressively(e, t, s, n = 0, r) {
    const a = new Do(), o = e.body.getReader(), c = () => o.read().then((l) => {
      if (l.done)
        return a.dataLength && r(t, s, a.flush().buffer, e), Promise.resolve(new ArrayBuffer(0));
      const u = l.value, h = u.length;
      return t.loaded += h, h < n || a.dataLength ? (a.push(u), a.dataLength >= n && r(t, s, a.flush().buffer, e)) : r(t, s, u.buffer, e), c();
    }).catch(() => Promise.reject());
    return c();
  }
}
function fg(i, e) {
  const t = {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    signal: e,
    headers: new self.Headers(pe({}, i.headers))
  };
  return i.rangeEnd && t.headers.set("Range", "bytes=" + i.rangeStart + "-" + String(i.rangeEnd - 1)), t;
}
function gg(i) {
  const e = dg.exec(i);
  if (e)
    return parseInt(e[2]) - parseInt(e[1]) + 1;
}
function mg(i) {
  const e = i.get("Content-Range");
  if (e) {
    const s = gg(e);
    if (G(s))
      return s;
  }
  const t = i.get("Content-Length");
  if (t)
    return parseInt(t);
}
function pg(i, e) {
  return new self.Request(i.url, e);
}
class yg extends Error {
  constructor(e, t, s) {
    super(e), this.code = void 0, this.details = void 0, this.code = t, this.details = s;
  }
}
const Tg = /^age:\s*[\d.]+\s*$/im;
class xl {
  constructor(e) {
    this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = null, this.loader = null, this.stats = void 0, this.xhrSetup = e && e.xhrSetup || null, this.stats = new Gn(), this.retryDelay = 0;
  }
  destroy() {
    this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null, this.context = null, this.xhrSetup = null;
  }
  abortInternal() {
    const e = this.loader;
    self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), e && (e.onreadystatechange = null, e.onprogress = null, e.readyState !== 4 && (this.stats.aborted = !0, e.abort()));
  }
  abort() {
    var e;
    this.abortInternal(), (e = this.callbacks) != null && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader);
  }
  load(e, t, s) {
    if (this.stats.loading.start)
      throw new Error("Loader can only be used once.");
    this.stats.loading.start = self.performance.now(), this.context = e, this.config = t, this.callbacks = s, this.loadInternal();
  }
  loadInternal() {
    const {
      config: e,
      context: t
    } = this;
    if (!e || !t)
      return;
    const s = this.loader = new self.XMLHttpRequest(), n = this.stats;
    n.loading.first = 0, n.loaded = 0, n.aborted = !1;
    const r = this.xhrSetup;
    r ? Promise.resolve().then(() => {
      if (!(this.loader !== s || this.stats.aborted))
        return r(s, t.url);
    }).catch((a) => {
      if (!(this.loader !== s || this.stats.aborted))
        return s.open("GET", t.url, !0), r(s, t.url);
    }).then(() => {
      this.loader !== s || this.stats.aborted || this.openAndSendXhr(s, t, e);
    }).catch((a) => {
      var o;
      (o = this.callbacks) == null || o.onError({
        code: s.status,
        text: a.message
      }, t, s, n);
    }) : this.openAndSendXhr(s, t, e);
  }
  openAndSendXhr(e, t, s) {
    e.readyState || e.open("GET", t.url, !0);
    const n = t.headers, {
      maxTimeToFirstByteMs: r,
      maxLoadTimeMs: a
    } = s.loadPolicy;
    if (n)
      for (const o in n)
        e.setRequestHeader(o, n[o]);
    t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, self.clearTimeout(this.requestTimeout), s.timeout = r && G(r) ? r : a, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), s.timeout), e.send();
  }
  readystatechange() {
    const {
      context: e,
      loader: t,
      stats: s
    } = this;
    if (!e || !t)
      return;
    const n = t.readyState, r = this.config;
    if (!s.aborted && n >= 2 && (s.loading.first === 0 && (s.loading.first = Math.max(self.performance.now(), s.loading.start), r.timeout !== r.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), r.timeout = r.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), r.loadPolicy.maxLoadTimeMs - (s.loading.first - s.loading.start)))), n === 4)) {
      self.clearTimeout(this.requestTimeout), t.onreadystatechange = null, t.onprogress = null;
      const l = t.status, u = t.responseType === "text" ? t.responseText : null;
      if (l >= 200 && l < 300) {
        const f = u ?? t.response;
        if (f != null) {
          var a, o;
          s.loading.end = Math.max(self.performance.now(), s.loading.first);
          const m = t.responseType === "arraybuffer" ? f.byteLength : f.length;
          s.loaded = s.total = m, s.bwEstimate = s.total * 8e3 / (s.loading.end - s.loading.first);
          const p = (a = this.callbacks) == null ? void 0 : a.onProgress;
          p && p(s, e, f, t);
          const T = {
            url: t.responseURL,
            data: f,
            code: l
          };
          (o = this.callbacks) == null || o.onSuccess(T, s, e, t);
          return;
        }
      }
      const h = r.loadPolicy.errorRetry, d = s.retry, g = {
        url: e.url,
        data: void 0,
        code: l
      };
      if (Ei(h, d, !1, g))
        this.retry(h);
      else {
        var c;
        ge.error(`${l} while loading ${e.url}`), (c = this.callbacks) == null || c.onError({
          code: l,
          text: t.statusText
        }, e, t, s);
      }
    }
  }
  loadtimeout() {
    if (!this.config) return;
    const e = this.config.loadPolicy.timeoutRetry, t = this.stats.retry;
    if (Ei(e, t, !0))
      this.retry(e);
    else {
      var s;
      ge.warn(`timeout while loading ${(s = this.context) == null ? void 0 : s.url}`);
      const n = this.callbacks;
      n && (this.abortInternal(), n.onTimeout(this.stats, this.context, this.loader));
    }
  }
  retry(e) {
    const {
      context: t,
      stats: s
    } = this;
    this.retryDelay = jn(e, s.retry), s.retry++, ge.warn(`${status ? "HTTP Status " + status : "Timeout"} while loading ${t == null ? void 0 : t.url}, retrying ${s.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay);
  }
  loadprogress(e) {
    const t = this.stats;
    t.loaded = e.loaded, e.lengthComputable && (t.total = e.total);
  }
  getCacheAge() {
    let e = null;
    if (this.loader && Tg.test(this.loader.getAllResponseHeaders())) {
      const t = this.loader.getResponseHeader("age");
      e = t ? parseFloat(t) : null;
    }
    return e;
  }
  getResponseHeader(e) {
    return this.loader && new RegExp(`^${e}:\\s*[\\d.]+\\s*$`, "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(e) : null;
  }
}
const Eg = {
  maxTimeToFirstByteMs: 8e3,
  maxLoadTimeMs: 2e4,
  timeoutRetry: null,
  errorRetry: null
}, vg = fe(fe({
  autoStartLoad: !0,
  // used by stream-controller
  startPosition: -1,
  // used by stream-controller
  defaultAudioCodec: void 0,
  // used by stream-controller
  debug: !1,
  // used by logger
  capLevelOnFPSDrop: !1,
  // used by fps-controller
  capLevelToPlayerSize: !1,
  // used by cap-level-controller
  ignoreDevicePixelRatio: !1,
  // used by cap-level-controller
  maxDevicePixelRatio: Number.POSITIVE_INFINITY,
  // used by cap-level-controller
  preferManagedMediaSource: !0,
  initialLiveManifestSize: 1,
  // used by stream-controller
  maxBufferLength: 30,
  // used by stream-controller
  backBufferLength: 1 / 0,
  // used by buffer-controller
  frontBufferFlushThreshold: 1 / 0,
  startOnSegmentBoundary: !1,
  // used by stream-controller
  maxBufferSize: 60 * 1e3 * 1e3,
  // used by stream-controller
  maxFragLookUpTolerance: 0.25,
  // used by stream-controller
  maxBufferHole: 0.1,
  // used by stream-controller and gap-controller
  detectStallWithCurrentTimeMs: 1250,
  // used by gap-controller
  highBufferWatchdogPeriod: 2,
  // used by gap-controller
  nudgeOffset: 0.1,
  // used by gap-controller
  nudgeMaxRetry: 3,
  // used by gap-controller
  nudgeOnVideoHole: !0,
  // used by gap-controller
  liveSyncMode: "edge",
  // used by stream-controller
  liveSyncDurationCount: 3,
  // used by latency-controller
  liveSyncOnStallIncrease: 1,
  // used by latency-controller
  liveMaxLatencyDurationCount: 1 / 0,
  // used by latency-controller
  liveSyncDuration: void 0,
  // used by latency-controller
  liveMaxLatencyDuration: void 0,
  // used by latency-controller
  maxLiveSyncPlaybackRate: 1,
  // used by latency-controller
  liveDurationInfinity: !1,
  // used by buffer-controller
  /**
   * @deprecated use backBufferLength
   */
  liveBackBufferLength: null,
  // used by buffer-controller
  maxMaxBufferLength: 600,
  // used by stream-controller
  enableWorker: !0,
  // used by transmuxer
  workerPath: null,
  // used by transmuxer
  enableSoftwareAES: !0,
  // used by decrypter
  startLevel: void 0,
  // used by level-controller
  startFragPrefetch: !1,
  // used by stream-controller
  fpsDroppedMonitoringPeriod: 5e3,
  // used by fps-controller
  fpsDroppedMonitoringThreshold: 0.2,
  // used by fps-controller
  appendErrorMaxRetry: 3,
  // used by buffer-controller
  ignorePlaylistParsingErrors: !1,
  loader: xl,
  // loader: FetchLoader,
  fLoader: void 0,
  // used by fragment-loader
  pLoader: void 0,
  // used by playlist-loader
  xhrSetup: void 0,
  // used by xhr-loader
  licenseXhrSetup: void 0,
  // used by eme-controller
  licenseResponseCallback: void 0,
  // used by eme-controller
  abrController: wu,
  bufferController: bd,
  capLevelController: rr,
  errorController: Fu,
  fpsController: xf,
  stretchShortVideoTrack: !1,
  // used by mp4-remuxer
  maxAudioFramesDrift: 1,
  // used by mp4-remuxer
  forceKeyFrameOnDiscontinuity: !0,
  // used by ts-demuxer
  abrEwmaFastLive: 3,
  // used by abr-controller
  abrEwmaSlowLive: 9,
  // used by abr-controller
  abrEwmaFastVoD: 3,
  // used by abr-controller
  abrEwmaSlowVoD: 9,
  // used by abr-controller
  abrEwmaDefaultEstimate: 5e5,
  // 500 kbps  // used by abr-controller
  abrEwmaDefaultEstimateMax: 5e6,
  // 5 mbps
  abrBandWidthFactor: 0.95,
  // used by abr-controller
  abrBandWidthUpFactor: 0.7,
  // used by abr-controller
  abrMaxWithRealBitrate: !1,
  // used by abr-controller
  maxStarvationDelay: 4,
  // used by abr-controller
  maxLoadingDelay: 4,
  // used by abr-controller
  minAutoBitrate: 0,
  // used by hls
  emeEnabled: !1,
  // used by eme-controller
  widevineLicenseUrl: void 0,
  // used by eme-controller
  drmSystems: {},
  // used by eme-controller
  drmSystemOptions: {},
  // used by eme-controller
  requestMediaKeySystemAccessFunc: bo,
  // used by eme-controller
  requireKeySystemAccessOnStart: !1,
  // used by eme-controller
  testBandwidth: !0,
  progressive: !1,
  lowLatencyMode: !0,
  cmcd: void 0,
  enableDateRangeMetadataCues: !0,
  enableEmsgMetadataCues: !0,
  enableEmsgKLVMetadata: !1,
  enableID3MetadataCues: !0,
  enableInterstitialPlayback: !0,
  interstitialAppendInPlace: !0,
  interstitialLiveLookAhead: 10,
  useMediaCapabilities: !0,
  preserveManualLevelOnError: !1,
  certLoadPolicy: {
    default: Eg
  },
  keyLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 8e3,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 2e4,
        backoff: "linear"
      },
      errorRetry: {
        maxNumRetry: 8,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 2e4,
        backoff: "linear"
      }
    }
  },
  manifestLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1 / 0,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  playlistLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 2,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  fragLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 12e4,
      timeoutRetry: {
        maxNumRetry: 4,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 6,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  steeringManifestLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  interstitialAssetListLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 3e4,
      timeoutRetry: {
        maxNumRetry: 0,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 0,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  // These default settings are deprecated in favor of the above policies
  // and are maintained for backwards compatibility
  manifestLoadingTimeOut: 1e4,
  manifestLoadingMaxRetry: 1,
  manifestLoadingRetryDelay: 1e3,
  manifestLoadingMaxRetryTimeout: 64e3,
  levelLoadingTimeOut: 1e4,
  levelLoadingMaxRetry: 4,
  levelLoadingRetryDelay: 1e3,
  levelLoadingMaxRetryTimeout: 64e3,
  fragLoadingTimeOut: 2e4,
  fragLoadingMaxRetry: 6,
  fragLoadingRetryDelay: 1e3,
  fragLoadingMaxRetryTimeout: 64e3
}, bg()), {}, {
  subtitleStreamController: Mf,
  subtitleTrackController: If,
  timelineController: og,
  audioStreamController: yd,
  audioTrackController: Td,
  emeController: cs,
  cmcdController: Ef,
  contentSteeringController: bf,
  interstitialsController: Of
});
function bg() {
  return {
    cueHandler: ug,
    // used by timeline-controller
    enableWebVTT: !0,
    // used by timeline-controller
    enableIMSC1: !0,
    // used by timeline-controller
    enableCEA708Captions: !0,
    // used by timeline-controller
    captionsTextTrack1Label: "English",
    // used by timeline-controller
    captionsTextTrack1LanguageCode: "en",
    // used by timeline-controller
    captionsTextTrack2Label: "Spanish",
    // used by timeline-controller
    captionsTextTrack2LanguageCode: "es",
    // used by timeline-controller
    captionsTextTrack3Label: "Unknown CC",
    // used by timeline-controller
    captionsTextTrack3LanguageCode: "",
    // used by timeline-controller
    captionsTextTrack4Label: "Unknown CC",
    // used by timeline-controller
    captionsTextTrack4LanguageCode: "",
    // used by timeline-controller
    renderTextTracksNatively: !0
  };
}
function Sg(i, e, t) {
  if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration))
    throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
  if (e.liveMaxLatencyDurationCount !== void 0 && (e.liveSyncDurationCount === void 0 || e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
  if (e.liveMaxLatencyDuration !== void 0 && (e.liveSyncDuration === void 0 || e.liveMaxLatencyDuration <= e.liveSyncDuration))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
  const s = Cn(i), n = ["manifest", "level", "frag"], r = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
  return n.forEach((a) => {
    const o = `${a === "level" ? "playlist" : a}LoadPolicy`, c = e[o] === void 0, l = [];
    r.forEach((u) => {
      const h = `${a}Loading${u}`, d = e[h];
      if (d !== void 0 && c) {
        l.push(h);
        const g = s[o].default;
        switch (e[o] = {
          default: g
        }, u) {
          case "TimeOut":
            g.maxLoadTimeMs = d, g.maxTimeToFirstByteMs = d;
            break;
          case "MaxRetry":
            g.errorRetry.maxNumRetry = d, g.timeoutRetry.maxNumRetry = d;
            break;
          case "RetryDelay":
            g.errorRetry.retryDelayMs = d, g.timeoutRetry.retryDelayMs = d;
            break;
          case "MaxRetryTimeout":
            g.errorRetry.maxRetryDelayMs = d, g.timeoutRetry.maxRetryDelayMs = d;
            break;
        }
      }
    }), l.length && t.warn(`hls.js config: "${l.join('", "')}" setting(s) are deprecated, use "${o}": ${Te(e[o])}`);
  }), fe(fe({}, s), e);
}
function Cn(i) {
  return i && typeof i == "object" ? Array.isArray(i) ? i.map(Cn) : Object.keys(i).reduce((e, t) => (e[t] = Cn(i[t]), e), {}) : i;
}
function xg(i, e) {
  const t = i.loader;
  t !== wa && t !== xl ? (e.log("[config]: Custom loader detected, cannot enable progressive streaming"), i.progressive = !1) : hg() && (i.loader = wa, i.progressive = !0, i.enableSoftwareAES = !0, e.log("[config]: Progressive streaming enabled, using FetchLoader"));
}
const ci = 2, Ag = 0.1, Lg = 0.05, Ig = 100;
class Rg extends po {
  constructor(e, t) {
    super("gap-controller", e.logger), this.hls = void 0, this.fragmentTracker = void 0, this.media = null, this.mediaSource = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.buffered = {}, this.lastCurrentTime = 0, this.ended = 0, this.waiting = 0, this.onMediaPlaying = () => {
      this.ended = 0, this.waiting = 0;
    }, this.onMediaWaiting = () => {
      var s;
      (s = this.media) != null && s.seeking || (this.waiting = self.performance.now(), this.tick());
    }, this.onMediaEnded = () => {
      if (this.hls) {
        var s;
        this.ended = ((s = this.media) == null ? void 0 : s.currentTime) || 1, this.hls.trigger(y.MEDIA_ENDED, {
          stalled: !1
        });
      }
    }, this.hls = e, this.fragmentTracker = t, this.registerListeners();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e && (e.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(y.BUFFER_APPENDED, this.onBufferAppended, this));
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(y.BUFFER_APPENDED, this.onBufferAppended, this));
  }
  destroy() {
    super.destroy(), this.unregisterListeners(), this.media = this.hls = this.fragmentTracker = null, this.mediaSource = void 0;
  }
  onMediaAttached(e, t) {
    this.setInterval(Ig), this.mediaSource = t.mediaSource;
    const s = this.media = t.media;
    He(s, "playing", this.onMediaPlaying), He(s, "waiting", this.onMediaWaiting), He(s, "ended", this.onMediaEnded);
  }
  onMediaDetaching(e, t) {
    this.clearInterval();
    const {
      media: s
    } = this;
    s && (ze(s, "playing", this.onMediaPlaying), ze(s, "waiting", this.onMediaWaiting), ze(s, "ended", this.onMediaEnded), this.media = null), this.mediaSource = void 0;
  }
  onBufferAppended(e, t) {
    this.buffered = t.timeRanges;
  }
  get hasBuffered() {
    return Object.keys(this.buffered).length > 0;
  }
  tick() {
    var e;
    if (!((e = this.media) != null && e.readyState) || !this.hasBuffered)
      return;
    const t = this.media.currentTime;
    this.poll(t, this.lastCurrentTime), this.lastCurrentTime = t;
  }
  /**
   * Checks if the playhead is stuck within a gap, and if so, attempts to free it.
   * A gap is an unbuffered range between two buffered ranges (or the start and the first buffered range).
   *
   * @param lastCurrentTime - Previously read playhead position
   */
  poll(e, t) {
    var s, n;
    const r = (s = this.hls) == null ? void 0 : s.config;
    if (!r)
      return;
    const a = this.media;
    if (!a)
      return;
    const {
      seeking: o
    } = a, c = this.seeking && !o, l = !this.seeking && o, u = a.paused && !o || a.ended || a.playbackRate === 0;
    if (this.seeking = o, e !== t) {
      t && (this.ended = 0), this.moved = !0, o || (this.nudgeRetry = 0, r.nudgeOnVideoHole && !u && e > t && this.nudgeOnVideoHole(e, t)), this.waiting === 0 && this.stallResolved(e);
      return;
    }
    if (l || c) {
      c && this.stallResolved(e);
      return;
    }
    if (u) {
      this.nudgeRetry = 0, this.stallResolved(e), !this.ended && a.ended && this.hls && (this.ended = e || 1, this.hls.trigger(y.MEDIA_ENDED, {
        stalled: !1
      }));
      return;
    }
    if (!se.getBuffered(a).length) {
      this.nudgeRetry = 0;
      return;
    }
    const h = se.bufferInfo(a, e, 0), d = h.nextStart || 0, g = this.fragmentTracker;
    if (o && g && this.hls) {
      const _ = Da(this.hls.inFlightFragments, e), S = h.len > ci, L = !d || _ || d - e > ci && !g.getPartialFragment(e);
      if (S || L)
        return;
      this.moved = !1;
    }
    const f = (n = this.hls) == null ? void 0 : n.latestLevelDetails;
    if (!this.moved && this.stalled !== null && g) {
      if (!(h.len > 0) && !d)
        return;
      const S = Math.max(d, h.start || 0) - e, I = !!(f != null && f.live) ? f.targetduration * 2 : ci, R = Js(e, g);
      if (S > 0 && (S <= I || R)) {
        a.paused || this._trySkipBufferHole(R);
        return;
      }
    }
    const m = r.detectStallWithCurrentTimeMs, p = self.performance.now(), T = this.waiting;
    let E = this.stalled;
    if (E === null)
      if (T > 0 && p - T < m)
        E = this.stalled = T;
      else {
        this.stalled = p;
        return;
      }
    const v = p - E;
    if (!o && (v >= m || T) && this.hls) {
      var x;
      if (((x = this.mediaSource) == null ? void 0 : x.readyState) === "ended" && !(f != null && f.live) && Math.abs(e - ((f == null ? void 0 : f.edge) || 0)) < 1) {
        if (this.ended)
          return;
        this.ended = e || 1, this.hls.trigger(y.MEDIA_ENDED, {
          stalled: !0
        });
        return;
      }
      if (this._reportStall(h), !this.media || !this.hls)
        return;
    }
    const A = se.bufferInfo(a, e, r.maxBufferHole);
    this._tryFixBufferStall(A, v, e);
  }
  stallResolved(e) {
    const t = this.stalled;
    if (t && this.hls && (this.stalled = null, this.stallReported)) {
      const s = self.performance.now() - t;
      this.log(`playback not stuck anymore @${e}, after ${Math.round(s)}ms`), this.stallReported = !1, this.waiting = 0, this.hls.trigger(y.STALL_RESOLVED, {});
    }
  }
  nudgeOnVideoHole(e, t) {
    var s;
    const n = this.buffered.video;
    if (this.hls && this.media && this.fragmentTracker && (s = this.buffered.audio) != null && s.length && n && n.length > 1 && e > n.end(0)) {
      const r = se.bufferedInfo(se.timeRangesToArray(this.buffered.audio), e, 0);
      if (r.len > 1 && t >= r.start) {
        const a = se.timeRangesToArray(n), o = se.bufferedInfo(a, t, 0).bufferedIndex;
        if (o > -1 && o < a.length - 1) {
          const c = se.bufferedInfo(a, e, 0).bufferedIndex, l = a[o].end, u = a[o + 1].start;
          if ((c === -1 || c > o) && u - l < 1 && // `maxBufferHole` may be too small and setting it to 0 should not disable this feature
          e - l < 2) {
            const h = new Error(`nudging playhead to flush pipeline after video hole. currentTime: ${e} hole: ${l} -> ${u} buffered index: ${c}`);
            this.warn(h.message), this.media.currentTime += 1e-6;
            let d = Js(e, this.fragmentTracker);
            d && "fragment" in d ? d = d.fragment : d || (d = void 0);
            const g = se.bufferInfo(this.media, e, 0);
            this.hls.trigger(y.ERROR, {
              type: q.MEDIA_ERROR,
              details: C.BUFFER_SEEK_OVER_HOLE,
              fatal: !1,
              error: h,
              reason: h.message,
              frag: d,
              buffer: g.len,
              bufferInfo: g
            });
          }
        }
      }
    }
  }
  /**
   * Detects and attempts to fix known buffer stalling issues.
   * @param bufferInfo - The properties of the current buffer.
   * @param stalledDurationMs - The amount of time Hls.js has been stalling for.
   * @private
   */
  _tryFixBufferStall(e, t, s) {
    var n, r;
    const {
      fragmentTracker: a,
      media: o
    } = this, c = (n = this.hls) == null ? void 0 : n.config;
    if (!o || !a || !c)
      return;
    const l = (r = this.hls) == null ? void 0 : r.latestLevelDetails, u = Js(s, a);
    if ((u || l != null && l.live && s < l.fragmentStart) && (this._trySkipBufferHole(u) || !this.media))
      return;
    const h = e.buffered, d = this.adjacentTraversal(e, s);
    (h && h.length > 1 && e.len > c.maxBufferHole || e.nextStart && (e.nextStart - s < c.maxBufferHole || d)) && (t > c.highBufferWatchdogPeriod * 1e3 || this.waiting) && (this.warn("Trying to nudge playhead over buffer-hole"), this._tryNudgeBuffer(e));
  }
  adjacentTraversal(e, t) {
    const s = this.fragmentTracker, n = e.nextStart;
    if (s && n) {
      const r = s.getFragAtPos(t, j.MAIN), a = s.getFragAtPos(n, j.MAIN);
      if (r && a)
        return a.sn - r.sn < 2;
    }
    return !1;
  }
  /**
   * Triggers a BUFFER_STALLED_ERROR event, but only once per stall period.
   * @param bufferLen - The playhead distance from the end of the current buffer segment.
   * @private
   */
  _reportStall(e) {
    const {
      hls: t,
      media: s,
      stallReported: n,
      stalled: r
    } = this;
    if (!n && r !== null && s && t) {
      this.stallReported = !0;
      const a = new Error(`Playback stalling at @${s.currentTime} due to low buffer (${Te(e)})`);
      this.warn(a.message), t.trigger(y.ERROR, {
        type: q.MEDIA_ERROR,
        details: C.BUFFER_STALLED_ERROR,
        fatal: !1,
        error: a,
        buffer: e.len,
        bufferInfo: e,
        stalled: {
          start: r
        }
      });
    }
  }
  /**
   * Attempts to fix buffer stalls by jumping over known gaps caused by partial fragments
   * @param appended - The fragment or part found at the current time (where playback is stalling).
   * @private
   */
  _trySkipBufferHole(e) {
    var t;
    const {
      fragmentTracker: s,
      media: n
    } = this, r = (t = this.hls) == null ? void 0 : t.config;
    if (!n || !s || !r)
      return 0;
    const a = n.currentTime, o = se.bufferInfo(n, a, 0), c = a < o.start ? o.start : o.nextStart;
    if (c && this.hls) {
      const u = o.len <= r.maxBufferHole, h = o.len > 0 && o.len < 1 && n.readyState < 3, d = c - a;
      if (d > 0 && (u || h)) {
        if (d > r.maxBufferHole) {
          let f = !1;
          if (a === 0) {
            const m = s.getAppendedFrag(0, j.MAIN);
            m && c < m.end && (f = !0);
          }
          if (!f && e) {
            var l;
            if (!((l = this.hls.loadLevelObj) != null && l.details) || Da(this.hls.inFlightFragments, c))
              return 0;
            let p = !1, T = e.end;
            for (; T < c; ) {
              const E = Js(T, s);
              if (E)
                T += E.duration;
              else {
                p = !0;
                break;
              }
            }
            if (p)
              return 0;
          }
        }
        const g = Math.max(c + Lg, a + Ag);
        if (this.warn(`skipping hole, adjusting currentTime from ${a} to ${g}`), this.moved = !0, n.currentTime = g, !(e != null && e.gap)) {
          const f = new Error(`fragment loaded with buffer holes, seeking from ${a} to ${g}`), m = {
            type: q.MEDIA_ERROR,
            details: C.BUFFER_SEEK_OVER_HOLE,
            fatal: !1,
            error: f,
            reason: f.message,
            buffer: o.len,
            bufferInfo: o
          };
          e && ("fragment" in e ? m.part = e : m.frag = e), this.hls.trigger(y.ERROR, m);
        }
        return g;
      }
    }
    return 0;
  }
  /**
   * Attempts to fix buffer stalls by advancing the mediaElement's current time by a small amount.
   * @private
   */
  _tryNudgeBuffer(e) {
    const {
      hls: t,
      media: s,
      nudgeRetry: n
    } = this, r = t == null ? void 0 : t.config;
    if (!s || !r)
      return 0;
    const a = s.currentTime;
    if (this.nudgeRetry++, n < r.nudgeMaxRetry) {
      const o = a + (n + 1) * r.nudgeOffset, c = new Error(`Nudging 'currentTime' from ${a} to ${o}`);
      this.warn(c.message), s.currentTime = o, t.trigger(y.ERROR, {
        type: q.MEDIA_ERROR,
        details: C.BUFFER_NUDGE_ON_STALL,
        error: c,
        fatal: !1,
        buffer: e.len,
        bufferInfo: e
      });
    } else {
      const o = new Error(`Playhead still not moving while enough data buffered @${a} after ${r.nudgeMaxRetry} nudges`);
      this.error(o.message), t.trigger(y.ERROR, {
        type: q.MEDIA_ERROR,
        details: C.BUFFER_STALLED_ERROR,
        error: o,
        fatal: !0,
        buffer: e.len,
        bufferInfo: e
      });
    }
  }
}
function Da(i, e) {
  const t = Pa(i.main);
  if (t && t.start <= e)
    return t;
  const s = Pa(i.audio);
  return s && s.start <= e ? s : null;
}
function Pa(i) {
  if (!i)
    return null;
  switch (i.state) {
    case D.IDLE:
    case D.STOPPED:
    case D.ENDED:
    case D.ERROR:
      return null;
  }
  return i.frag;
}
function Js(i, e) {
  return e.getAppendedFrag(i, j.MAIN) || e.getPartialFragment(i);
}
const _g = 0.25;
function wn() {
  if (!(typeof self > "u"))
    return self.VTTCue || self.TextTrackCue;
}
function rn(i, e, t, s, n) {
  let r = new i(e, t, "");
  try {
    r.value = s, n && (r.type = n);
  } catch {
    r = new i(e, t, Te(n ? fe({
      type: n
    }, s) : s));
  }
  return r;
}
const ei = (() => {
  const i = wn();
  try {
    i && new i(0, Number.POSITIVE_INFINITY, "");
  } catch {
    return Number.MAX_VALUE;
  }
  return Number.POSITIVE_INFINITY;
})();
class kg {
  constructor(e) {
    this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.removeCues = !0, this.assetCue = void 0, this.onEventCueEnter = () => {
      this.hls && this.hls.trigger(y.EVENT_CUE_ENTER, {});
    }, this.hls = e, this._registerListeners();
  }
  destroy() {
    this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = this.onEventCueEnter = null;
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e && (e.on(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.on(y.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(y.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(y.LEVEL_PTS_UPDATED, this.onLevelPtsUpdated, this));
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(y.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.off(y.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(y.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(y.LEVEL_PTS_UPDATED, this.onLevelPtsUpdated, this));
  }
  // Add ID3 metatadata text track.
  onMediaAttaching(e, t) {
    var s;
    this.media = t.media, ((s = t.overrides) == null ? void 0 : s.cueRemoval) === !1 && (this.removeCues = !1);
  }
  onMediaAttached() {
    var e;
    const t = (e = this.hls) == null ? void 0 : e.latestLevelDetails;
    t && this.updateDateRangeCues(t);
  }
  onMediaDetaching(e, t) {
    this.media = null, !t.transferMedia && (this.id3Track && (this.removeCues && as(this.id3Track, this.onEventCueEnter), this.id3Track = null), this.dateRangeCuesAppended = {});
  }
  onManifestLoading() {
    this.dateRangeCuesAppended = {};
  }
  createTrack(e) {
    const t = this.getID3Track(e.textTracks);
    return t.mode = "hidden", t;
  }
  getID3Track(e) {
    if (this.media) {
      for (let t = 0; t < e.length; t++) {
        const s = e[t];
        if (s.kind === "metadata" && s.label === "id3")
          return hl(s, this.media), s;
      }
      return this.media.addTextTrack("metadata", "id3");
    }
  }
  onFragParsingMetadata(e, t) {
    if (!this.media || !this.hls)
      return;
    const {
      enableEmsgMetadataCues: s,
      enableID3MetadataCues: n
    } = this.hls.config;
    if (!s && !n)
      return;
    const {
      samples: r
    } = t;
    this.id3Track || (this.id3Track = this.createTrack(this.media));
    const a = wn();
    if (a)
      for (let o = 0; o < r.length; o++) {
        const c = r[o].type;
        if (c === st.emsg && !s || !n)
          continue;
        const l = Bo(r[o].data), u = r[o].pts;
        let h = u + r[o].duration;
        h > ei && (h = ei), h - u <= 0 && (h = u + _g);
        for (let g = 0; g < l.length; g++) {
          const f = l[g];
          if (!Uo(f)) {
            this.updateId3CueEnds(u, c);
            const m = rn(a, u, h, f, c);
            m && this.id3Track.addCue(m);
          }
        }
      }
  }
  updateId3CueEnds(e, t) {
    var s;
    const n = (s = this.id3Track) == null ? void 0 : s.cues;
    if (n)
      for (let r = n.length; r--; ) {
        const a = n[r];
        a.type === t && a.startTime < e && a.endTime === ei && (a.endTime = e);
      }
  }
  onBufferFlushing(e, {
    startOffset: t,
    endOffset: s,
    type: n
  }) {
    const {
      id3Track: r,
      hls: a
    } = this;
    if (!a)
      return;
    const {
      config: {
        enableEmsgMetadataCues: o,
        enableID3MetadataCues: c
      }
    } = a;
    if (r && (o || c)) {
      let l;
      n === "audio" ? l = (u) => u.type === st.audioId3 && c : n === "video" ? l = (u) => u.type === st.emsg && o : l = (u) => u.type === st.audioId3 && c || u.type === st.emsg && o, _n(r, t, s, l);
    }
  }
  onLevelUpdated(e, {
    details: t
  }) {
    this.updateDateRangeCues(t, !0);
  }
  onLevelPtsUpdated(e, t) {
    Math.abs(t.drift) > 0.01 && this.updateDateRangeCues(t.details);
  }
  updateDateRangeCues(e, t) {
    if (!this.hls || !this.media)
      return;
    const {
      assetPlayerId: s,
      timelineOffset: n,
      enableDateRangeMetadataCues: r,
      interstitialsController: a
    } = this.hls.config;
    if (!r)
      return;
    const o = wn();
    if (s && n && !a) {
      const {
        fragmentStart: m,
        fragmentEnd: p
      } = e;
      let T = this.assetCue;
      T ? (T.startTime = m, T.endTime = p) : o && (T = this.assetCue = rn(o, m, p, {
        assetPlayerId: this.hls.config.assetPlayerId
      }, "hlsjs.interstitial.asset"), T && (T.id = s, this.id3Track || (this.id3Track = this.createTrack(this.media)), this.id3Track.addCue(T), T.addEventListener("enter", this.onEventCueEnter)));
    }
    if (!e.hasProgramDateTime)
      return;
    const {
      id3Track: c
    } = this, {
      dateRanges: l
    } = e, u = Object.keys(l);
    let h = this.dateRangeCuesAppended;
    if (c && t) {
      var d;
      if ((d = c.cues) != null && d.length) {
        const m = Object.keys(h).filter((p) => !u.includes(p));
        for (let p = m.length; p--; ) {
          var g;
          const T = m[p], E = (g = h[T]) == null ? void 0 : g.cues;
          delete h[T], E && Object.keys(E).forEach((v) => {
            const x = E[v];
            if (x) {
              x.removeEventListener("enter", this.onEventCueEnter);
              try {
                c.removeCue(x);
              } catch {
              }
            }
          });
        }
      } else
        h = this.dateRangeCuesAppended = {};
    }
    const f = e.fragments[e.fragments.length - 1];
    if (!(u.length === 0 || !G(f == null ? void 0 : f.programDateTime))) {
      this.id3Track || (this.id3Track = this.createTrack(this.media));
      for (let m = 0; m < u.length; m++) {
        const p = u[m], T = l[p], E = T.startTime, v = h[p], x = (v == null ? void 0 : v.cues) || {};
        let A = (v == null ? void 0 : v.durationKnown) || !1, _ = ei;
        const {
          duration: S,
          endDate: L
        } = T;
        if (L && S !== null)
          _ = E + S, A = !0;
        else if (T.endOnNext && !A) {
          const R = u.reduce((w, O) => {
            if (O !== T.id) {
              const K = l[O];
              if (K.class === T.class && K.startDate > T.startDate && (!w || T.startDate < w.startDate))
                return K;
            }
            return w;
          }, null);
          R && (_ = R.startTime, A = !0);
        }
        const I = Object.keys(T.attr);
        for (let R = 0; R < I.length; R++) {
          const w = I[R];
          if (!zu(w))
            continue;
          const O = x[w];
          if (O)
            A && !(v != null && v.durationKnown) ? O.endTime = _ : Math.abs(O.startTime - E) > 0.01 && (O.startTime = E, O.endTime = _);
          else if (o) {
            let K = T.attr[w];
            Xu(w) && (K = za(K));
            const B = rn(o, E, _, {
              key: w,
              data: K
            }, st.dateRange);
            B && (B.id = p, this.id3Track.addCue(B), x[w] = B, a && (w === "X-ASSET-LIST" || w === "X-ASSET-URL") && B.addEventListener("enter", this.onEventCueEnter));
          }
        }
        h[p] = {
          cues: x,
          dateRange: T,
          durationKnown: A
        };
      }
    }
  }
}
class Cg {
  constructor(e) {
    this.hls = void 0, this.config = void 0, this.media = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this._targetLatencyUpdated = !1, this.onTimeupdate = () => {
      const {
        media: t
      } = this, s = this.levelDetails;
      if (!t || !s)
        return;
      this.currentTime = t.currentTime;
      const n = this.computeLatency();
      if (n === null)
        return;
      this._latency = n;
      const {
        lowLatencyMode: r,
        maxLiveSyncPlaybackRate: a
      } = this.config;
      if (!r || a === 1 || !s.live)
        return;
      const o = this.targetLatency;
      if (o === null)
        return;
      const c = n - o, l = Math.min(this.maxLatency, o + s.targetduration);
      if (c < l && c > 0.05 && this.forwardBufferLength > 1) {
        const h = Math.min(2, Math.max(1, a)), d = Math.round(2 / (1 + Math.exp(-0.75 * c - this.edgeStalled)) * 20) / 20, g = Math.min(h, Math.max(1, d));
        this.changeMediaPlaybackRate(t, g);
      } else t.playbackRate !== 1 && t.playbackRate !== 0 && this.changeMediaPlaybackRate(t, 1);
    }, this.hls = e, this.config = e.config, this.registerListeners();
  }
  get levelDetails() {
    var e;
    return ((e = this.hls) == null ? void 0 : e.latestLevelDetails) || null;
  }
  get latency() {
    return this._latency || 0;
  }
  get maxLatency() {
    const {
      config: e
    } = this;
    if (e.liveMaxLatencyDuration !== void 0)
      return e.liveMaxLatencyDuration;
    const t = this.levelDetails;
    return t ? e.liveMaxLatencyDurationCount * t.targetduration : 0;
  }
  get targetLatency() {
    const e = this.levelDetails;
    if (e === null || this.hls === null)
      return null;
    const {
      holdBack: t,
      partHoldBack: s,
      targetduration: n
    } = e, {
      liveSyncDuration: r,
      liveSyncDurationCount: a,
      lowLatencyMode: o
    } = this.config, c = this.hls.userConfig;
    let l = o && s || t;
    (this._targetLatencyUpdated || c.liveSyncDuration || c.liveSyncDurationCount || l === 0) && (l = r !== void 0 ? r : a * n);
    const u = n;
    return l + Math.min(this.stallCount * this.config.liveSyncOnStallIncrease, u);
  }
  set targetLatency(e) {
    this.stallCount = 0, this.config.liveSyncDuration = e, this._targetLatencyUpdated = !0;
  }
  get liveSyncPosition() {
    const e = this.estimateLiveEdge(), t = this.targetLatency;
    if (e === null || t === null)
      return null;
    const s = this.levelDetails;
    if (s === null)
      return null;
    const n = s.edge, r = e - t - this.edgeStalled, a = n - s.totalduration, o = n - (this.config.lowLatencyMode && s.partTarget || s.targetduration);
    return Math.min(Math.max(a, r), o);
  }
  get drift() {
    const e = this.levelDetails;
    return e === null ? 1 : e.drift;
  }
  get edgeStalled() {
    const e = this.levelDetails;
    if (e === null)
      return 0;
    const t = (this.config.lowLatencyMode && e.partTarget || e.targetduration) * 3;
    return Math.max(e.age - t, 0);
  }
  get forwardBufferLength() {
    const {
      media: e
    } = this, t = this.levelDetails;
    if (!e || !t)
      return 0;
    const s = e.buffered.length;
    return (s ? e.buffered.end(s - 1) : t.edge) - this.currentTime;
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetaching(), this.hls = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e && (e.on(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(y.ERROR, this.onError, this));
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(y.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(y.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(y.ERROR, this.onError, this));
  }
  onMediaAttached(e, t) {
    this.media = t.media, this.media.addEventListener("timeupdate", this.onTimeupdate);
  }
  onMediaDetaching() {
    this.media && (this.media.removeEventListener("timeupdate", this.onTimeupdate), this.media = null);
  }
  onManifestLoading() {
    this._latency = null, this.stallCount = 0;
  }
  onLevelUpdated(e, {
    details: t
  }) {
    t.advanced && this.onTimeupdate(), !t.live && this.media && this.media.removeEventListener("timeupdate", this.onTimeupdate);
  }
  onError(e, t) {
    var s;
    t.details === C.BUFFER_STALLED_ERROR && (this.stallCount++, this.hls && (s = this.levelDetails) != null && s.live && this.hls.logger.warn("[latency-controller]: Stall detected, adjusting target latency"));
  }
  changeMediaPlaybackRate(e, t) {
    var s, n;
    e.playbackRate !== t && ((s = this.hls) == null || s.logger.debug(`[latency-controller]: latency=${this.latency.toFixed(3)}, targetLatency=${(n = this.targetLatency) == null ? void 0 : n.toFixed(3)}, forwardBufferLength=${this.forwardBufferLength.toFixed(3)}: adjusting playback rate from ${e.playbackRate} to ${t}`), e.playbackRate = t);
  }
  estimateLiveEdge() {
    const e = this.levelDetails;
    return e === null ? null : e.edge + e.age;
  }
  computeLatency() {
    const e = this.estimateLiveEdge();
    return e === null ? null : e - this.currentTime;
  }
}
class wg extends nr {
  constructor(e, t) {
    super(e, "level-controller"), this._levels = [], this._firstLevel = -1, this._maxAutoLevel = -1, this._startLevel = void 0, this.currentLevel = null, this.currentLevelIndex = -1, this.manualLevelIndex = -1, this.steering = void 0, this.onParsedComplete = void 0, this.steering = t, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(y.LEVEL_LOADED, this.onLevelLoaded, this), e.on(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(y.FRAG_BUFFERED, this.onFragBuffered, this), e.on(y.ERROR, this.onError, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(y.LEVEL_LOADED, this.onLevelLoaded, this), e.off(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(y.FRAG_BUFFERED, this.onFragBuffered, this), e.off(y.ERROR, this.onError, this);
  }
  destroy() {
    this._unregisterListeners(), this.steering = null, this.resetLevels(), super.destroy();
  }
  stopLoad() {
    this._levels.forEach((t) => {
      t.loadError = 0, t.fragmentError = 0;
    }), super.stopLoad();
  }
  resetLevels() {
    this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = [], this._maxAutoLevel = -1;
  }
  onManifestLoading(e, t) {
    this.resetLevels();
  }
  onManifestLoaded(e, t) {
    const s = this.hls.config.preferManagedMediaSource, n = [], r = {}, a = {};
    let o = !1, c = !1, l = !1;
    t.levels.forEach((u) => {
      const h = u.attrs;
      let {
        audioCodec: d,
        videoCodec: g
      } = u;
      d && (u.audioCodec = d = mi(d, s) || void 0), g && (g = u.videoCodec = du(g));
      const {
        width: f,
        height: m,
        unknownCodecs: p
      } = u, T = (p == null ? void 0 : p.length) || 0;
      if (o || (o = !!(f && m)), c || (c = !!g), l || (l = !!d), T || d && !this.isAudioSupported(d) || g && !this.isVideoSupported(g)) {
        this.log(`Some or all CODECS not supported "${h.CODECS}"`);
        return;
      }
      const {
        CODECS: E,
        "FRAME-RATE": v,
        "HDCP-LEVEL": x,
        "PATHWAY-ID": A,
        RESOLUTION: _,
        "VIDEO-RANGE": S
      } = h, I = `${`${A || "."}-`}${u.bitrate}-${_}-${v}-${E}-${S}-${x}`;
      if (r[I])
        if (r[I].uri !== u.url && !u.attrs["PATHWAY-ID"]) {
          const R = a[I] += 1;
          u.attrs["PATHWAY-ID"] = new Array(R + 1).join(".");
          const w = this.createLevel(u);
          r[I] = w, n.push(w);
        } else
          r[I].addGroupId("audio", h.AUDIO), r[I].addGroupId("text", h.SUBTITLES);
      else {
        const R = this.createLevel(u);
        r[I] = R, a[I] = 1, n.push(R);
      }
    }), this.filterAndSortMediaOptions(n, t, o, c, l);
  }
  createLevel(e) {
    const t = new Is(e), s = e.supplemental;
    if (s != null && s.videoCodec && !this.isVideoSupported(s.videoCodec)) {
      const n = new Error(`SUPPLEMENTAL-CODECS not supported "${s.videoCodec}"`);
      this.log(n.message), t.supportedResult = oo(n, []);
    }
    return t;
  }
  isAudioSupported(e) {
    return As(e, "audio", this.hls.config.preferManagedMediaSource);
  }
  isVideoSupported(e) {
    return As(e, "video", this.hls.config.preferManagedMediaSource);
  }
  filterAndSortMediaOptions(e, t, s, n, r) {
    var a;
    let o = [], c = [], l = e;
    const u = ((a = t.stats) == null ? void 0 : a.parsing) || {};
    if ((s || n) && r && (l = l.filter(({
      videoCodec: E,
      videoRange: v,
      width: x,
      height: A
    }) => (!!E || !!(x && A)) && Su(v))), l.length === 0) {
      Promise.resolve().then(() => {
        if (this.hls) {
          let E = "no level with compatible codecs found in manifest", v = E;
          t.levels.length && (v = `one or more CODECS in variant not supported: ${Te(t.levels.map((A) => A.attrs.CODECS).filter((A, _, S) => S.indexOf(A) === _))}`, this.warn(v), E += ` (${v})`);
          const x = new Error(E);
          this.hls.trigger(y.ERROR, {
            type: q.MEDIA_ERROR,
            details: C.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
            fatal: !0,
            url: t.url,
            error: x,
            reason: v
          });
        }
      }), u.end = performance.now();
      return;
    }
    t.audioTracks && (o = t.audioTracks.filter((E) => !E.audioCodec || this.isAudioSupported(E.audioCodec)), Oa(o)), t.subtitles && (c = t.subtitles, Oa(c));
    const h = l.slice(0);
    l.sort((E, v) => {
      if (E.attrs["HDCP-LEVEL"] !== v.attrs["HDCP-LEVEL"])
        return (E.attrs["HDCP-LEVEL"] || "") > (v.attrs["HDCP-LEVEL"] || "") ? 1 : -1;
      if (s && E.height !== v.height)
        return E.height - v.height;
      if (E.frameRate !== v.frameRate)
        return E.frameRate - v.frameRate;
      if (E.videoRange !== v.videoRange)
        return pi.indexOf(E.videoRange) - pi.indexOf(v.videoRange);
      if (E.videoCodec !== v.videoCodec) {
        const x = Lr(E.videoCodec), A = Lr(v.videoCodec);
        if (x !== A)
          return A - x;
      }
      if (E.uri === v.uri && E.codecSet !== v.codecSet) {
        const x = gi(E.codecSet), A = gi(v.codecSet);
        if (x !== A)
          return A - x;
      }
      return E.averageBitrate !== v.averageBitrate ? E.averageBitrate - v.averageBitrate : 0;
    });
    let d = h[0];
    if (this.steering && (l = this.steering.filterParsedLevels(l), l.length !== h.length)) {
      for (let E = 0; E < h.length; E++)
        if (h[E].pathwayId === l[0].pathwayId) {
          d = h[E];
          break;
        }
    }
    this._levels = l;
    for (let E = 0; E < l.length; E++)
      if (l[E] === d) {
        var g;
        this._firstLevel = E;
        const v = d.bitrate, x = this.hls.bandwidthEstimate;
        if (this.log(`manifest loaded, ${l.length} level(s) found, first bitrate: ${v}`), ((g = this.hls.userConfig) == null ? void 0 : g.abrEwmaDefaultEstimate) === void 0) {
          const A = Math.min(v, this.hls.config.abrEwmaDefaultEstimateMax);
          A > x && x === this.hls.abrEwmaDefaultEstimate && (this.hls.bandwidthEstimate = A);
        }
        break;
      }
    const f = r && !n, m = this.hls.config, p = !!(m.audioStreamController && m.audioTrackController), T = {
      levels: l,
      audioTracks: o,
      subtitleTracks: c,
      sessionData: t.sessionData,
      sessionKeys: t.sessionKeys,
      firstLevel: this._firstLevel,
      stats: t.stats,
      audio: r,
      video: n,
      altAudio: p && !f && o.some((E) => !!E.url)
    };
    u.end = performance.now(), this.hls.trigger(y.MANIFEST_PARSED, T);
  }
  get levels() {
    return this._levels.length === 0 ? null : this._levels;
  }
  get loadLevelObj() {
    return this.currentLevel;
  }
  get level() {
    return this.currentLevelIndex;
  }
  set level(e) {
    const t = this._levels;
    if (t.length === 0)
      return;
    if (e < 0 || e >= t.length) {
      const u = new Error("invalid level idx"), h = e < 0;
      if (this.hls.trigger(y.ERROR, {
        type: q.OTHER_ERROR,
        details: C.LEVEL_SWITCH_ERROR,
        level: e,
        fatal: h,
        error: u,
        reason: u.message
      }), h)
        return;
      e = Math.min(e, t.length - 1);
    }
    const s = this.currentLevelIndex, n = this.currentLevel, r = n ? n.attrs["PATHWAY-ID"] : void 0, a = t[e], o = a.attrs["PATHWAY-ID"];
    if (this.currentLevelIndex = e, this.currentLevel = a, s === e && n && r === o)
      return;
    this.log(`Switching to level ${e} (${a.height ? a.height + "p " : ""}${a.videoRange ? a.videoRange + " " : ""}${a.codecSet ? a.codecSet + " " : ""}@${a.bitrate})${o ? " with Pathway " + o : ""} from level ${s}${r ? " with Pathway " + r : ""}`);
    const c = {
      level: e,
      attrs: a.attrs,
      details: a.details,
      bitrate: a.bitrate,
      averageBitrate: a.averageBitrate,
      maxBitrate: a.maxBitrate,
      realBitrate: a.realBitrate,
      width: a.width,
      height: a.height,
      codecSet: a.codecSet,
      audioCodec: a.audioCodec,
      videoCodec: a.videoCodec,
      audioGroups: a.audioGroups,
      subtitleGroups: a.subtitleGroups,
      loaded: a.loaded,
      loadError: a.loadError,
      fragmentError: a.fragmentError,
      name: a.name,
      id: a.id,
      uri: a.uri,
      url: a.url,
      urlId: 0,
      audioGroupIds: a.audioGroupIds,
      textGroupIds: a.textGroupIds
    };
    this.hls.trigger(y.LEVEL_SWITCHING, c);
    const l = a.details;
    if (!l || l.live) {
      const u = this.switchParams(a.uri, n == null ? void 0 : n.details, l);
      this.loadPlaylist(u);
    }
  }
  get manualLevel() {
    return this.manualLevelIndex;
  }
  set manualLevel(e) {
    this.manualLevelIndex = e, this._startLevel === void 0 && (this._startLevel = e), e !== -1 && (this.level = e);
  }
  get firstLevel() {
    return this._firstLevel;
  }
  set firstLevel(e) {
    this._firstLevel = e;
  }
  get startLevel() {
    if (this._startLevel === void 0) {
      const e = this.hls.config.startLevel;
      return e !== void 0 ? e : this.hls.firstAutoLevel;
    }
    return this._startLevel;
  }
  set startLevel(e) {
    this._startLevel = e;
  }
  get pathways() {
    return this.steering ? this.steering.pathways() : [];
  }
  get pathwayPriority() {
    return this.steering ? this.steering.pathwayPriority : null;
  }
  set pathwayPriority(e) {
    if (this.steering) {
      const t = this.steering.pathways(), s = e.filter((n) => t.indexOf(n) !== -1);
      if (e.length < 1) {
        this.warn(`pathwayPriority ${e} should contain at least one pathway from list: ${t}`);
        return;
      }
      this.steering.pathwayPriority = s;
    }
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === re.LEVEL && t.context.level === this.level && this.checkRetry(t);
  }
  // reset errors on the successful load of a fragment
  onFragBuffered(e, {
    frag: t
  }) {
    if (t !== void 0 && t.type === j.MAIN) {
      const s = t.elementaryStreams;
      if (!Object.keys(s).some((r) => !!s[r]))
        return;
      const n = this._levels[t.level];
      n != null && n.loadError && (this.log(`Resetting level error count of ${n.loadError} on frag buffered`), n.loadError = 0);
    }
  }
  onLevelLoaded(e, t) {
    var s;
    const {
      level: n,
      details: r
    } = t, a = t.levelInfo;
    if (!a) {
      var o;
      this.warn(`Invalid level index ${n}`), (o = t.deliveryDirectives) != null && o.skip && (r.deltaUpdateFailed = !0);
      return;
    }
    if (a === this.currentLevel || t.withoutMultiVariant) {
      a.fragmentError === 0 && (a.loadError = 0);
      let c = a.details;
      c === t.details && c.advanced && (c = void 0), this.playlistLoaded(n, t, c);
    } else (s = t.deliveryDirectives) != null && s.skip && (r.deltaUpdateFailed = !0);
  }
  loadPlaylist(e) {
    super.loadPlaylist(), this.shouldLoadPlaylist(this.currentLevel) && this.scheduleLoading(this.currentLevel, e);
  }
  loadingPlaylist(e, t) {
    super.loadingPlaylist(e, t);
    const s = this.getUrlWithDirectives(e.uri, t), n = this.currentLevelIndex, r = e.attrs["PATHWAY-ID"], a = e.details, o = a == null ? void 0 : a.age;
    this.log(`Loading level index ${n}${(t == null ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${r ? " Pathway " + r : ""}${o && a.live ? " age " + o.toFixed(1) + (a.type && " " + a.type || "") : ""} ${s}`), this.hls.trigger(y.LEVEL_LOADING, {
      url: s,
      level: n,
      levelInfo: e,
      pathwayId: e.attrs["PATHWAY-ID"],
      id: 0,
      // Deprecated Level urlId
      deliveryDirectives: t || null
    });
  }
  get nextLoadLevel() {
    return this.manualLevelIndex !== -1 ? this.manualLevelIndex : this.hls.nextAutoLevel;
  }
  set nextLoadLevel(e) {
    this.level = e, this.manualLevelIndex === -1 && (this.hls.nextAutoLevel = e);
  }
  removeLevel(e) {
    var t;
    if (this._levels.length === 1)
      return;
    const s = this._levels.filter((r, a) => a !== e ? !0 : (this.steering && this.steering.removeLevel(r), r === this.currentLevel && (this.currentLevel = null, this.currentLevelIndex = -1, r.details && r.details.fragments.forEach((o) => o.level = -1)), !1));
    ko(s), this._levels = s, this.currentLevelIndex > -1 && (t = this.currentLevel) != null && t.details && (this.currentLevelIndex = this.currentLevel.details.fragments[0].level), this.manualLevelIndex > -1 && (this.manualLevelIndex = this.currentLevelIndex);
    const n = s.length - 1;
    this._firstLevel = Math.min(this._firstLevel, n), this._startLevel && (this._startLevel = Math.min(this._startLevel, n)), this.hls.trigger(y.LEVELS_UPDATED, {
      levels: s
    });
  }
  onLevelsUpdated(e, {
    levels: t
  }) {
    this._levels = t;
  }
  checkMaxAutoUpdated() {
    const {
      autoLevelCapping: e,
      maxAutoLevel: t,
      maxHdcpLevel: s
    } = this.hls;
    this._maxAutoLevel !== t && (this._maxAutoLevel = t, this.hls.trigger(y.MAX_AUTO_LEVEL_UPDATED, {
      autoLevelCapping: e,
      levels: this.levels,
      maxAutoLevel: t,
      minAutoLevel: this.hls.minAutoLevel,
      maxHdcpLevel: s
    }));
  }
}
function Oa(i) {
  const e = {};
  i.forEach((t) => {
    const s = t.groupId || "";
    t.id = e[s] = e[s] || 0, e[s]++;
  });
}
function Al() {
  return self.SourceBuffer || self.WebKitSourceBuffer;
}
function Ll() {
  if (!Bt())
    return !1;
  const e = Al();
  return !e || e.prototype && typeof e.prototype.appendBuffer == "function" && typeof e.prototype.remove == "function";
}
function Dg() {
  if (!Ll())
    return !1;
  const i = Bt();
  return typeof (i == null ? void 0 : i.isTypeSupported) == "function" && (["avc1.42E01E,mp4a.40.2", "av01.0.01M.08", "vp09.00.50.08"].some((e) => i.isTypeSupported(Ls(e, "video"))) || ["mp4a.40.2", "fLaC"].some((e) => i.isTypeSupported(Ls(e, "audio"))));
}
function Pg() {
  var i;
  const e = Al();
  return typeof (e == null || (i = e.prototype) == null ? void 0 : i.changeType) == "function";
}
const Og = 100;
class Mg extends Xn {
  constructor(e, t, s) {
    super(e, t, s, "stream-controller", j.MAIN), this.audioCodecSwap = !1, this.level = -1, this._forceStartLoad = !1, this._hasEnoughToStart = !1, this.altAudio = 0, this.audioOnly = !1, this.fragPlaying = null, this.fragLastKbps = 0, this.couldBacktrack = !1, this.backtrackFragment = null, this.audioCodecSwitch = !1, this.videoBuffer = null, this.onMediaPlaying = () => {
      this.tick();
    }, this.onMediaSeeked = () => {
      const n = this.media, r = n ? n.currentTime : null;
      if (r === null || !G(r) || (this.log(`Media seeked to ${r.toFixed(3)}`), !this.getBufferedFrag(r)))
        return;
      const a = this.getFwdBufferInfoAtPos(n, r, j.MAIN, 0);
      if (a === null || a.len === 0) {
        this.warn(`Main forward buffer length at ${r} on "seeked" event ${a ? a.len : "empty"})`);
        return;
      }
      this.tick();
    }, this.registerListeners();
  }
  registerListeners() {
    super.registerListeners();
    const {
      hls: e
    } = this;
    e.on(y.MANIFEST_PARSED, this.onManifestParsed, this), e.on(y.LEVEL_LOADING, this.onLevelLoading, this), e.on(y.LEVEL_LOADED, this.onLevelLoaded, this), e.on(y.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.on(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(y.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.on(y.BUFFER_CREATED, this.onBufferCreated, this), e.on(y.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(y.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  unregisterListeners() {
    super.unregisterListeners();
    const {
      hls: e
    } = this;
    e.off(y.MANIFEST_PARSED, this.onManifestParsed, this), e.off(y.LEVEL_LOADED, this.onLevelLoaded, this), e.off(y.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.off(y.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(y.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.off(y.BUFFER_CREATED, this.onBufferCreated, this), e.off(y.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(y.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(y.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  onHandlerDestroying() {
    this.onMediaPlaying = this.onMediaSeeked = null, this.unregisterListeners(), super.onHandlerDestroying();
  }
  startLoad(e, t) {
    if (this.levels) {
      const {
        lastCurrentTime: s,
        hls: n
      } = this;
      if (this.stopLoad(), this.setInterval(Og), this.level = -1, !this.startFragRequested) {
        let r = n.startLevel;
        r === -1 && (n.config.testBandwidth && this.levels.length > 1 ? (r = 0, this.bitrateTest = !0) : r = n.firstAutoLevel), n.nextLoadLevel = r, this.level = n.loadLevel, this._hasEnoughToStart = !!t;
      }
      s > 0 && e === -1 && !t && (this.log(`Override startPosition with lastCurrentTime @${s.toFixed(3)}`), e = s), this.state = D.IDLE, this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset, this.startPosition = t ? -1 : e, this.tick();
    } else
      this._forceStartLoad = !0, this.state = D.STOPPED;
  }
  stopLoad() {
    this._forceStartLoad = !1, super.stopLoad();
  }
  doTick() {
    switch (this.state) {
      case D.WAITING_LEVEL: {
        const {
          levels: e,
          level: t
        } = this, s = e == null ? void 0 : e[t], n = s == null ? void 0 : s.details;
        if (n && (!n.live || this.levelLastLoaded === s && !this.waitForLive(s))) {
          if (this.waitForCdnTuneIn(n))
            break;
          this.state = D.IDLE;
          break;
        } else if (this.hls.nextLoadLevel !== this.level) {
          this.state = D.IDLE;
          break;
        }
        break;
      }
      case D.FRAG_LOADING_WAITING_RETRY:
        this.checkRetryDate();
        break;
    }
    this.state === D.IDLE && this.doTickIdle(), this.onTickEnd();
  }
  onTickEnd() {
    var e;
    super.onTickEnd(), (e = this.media) != null && e.readyState && this.media.seeking === !1 && (this.lastCurrentTime = this.media.currentTime), this.checkFragmentChanged();
  }
  doTickIdle() {
    const {
      hls: e,
      levelLastLoaded: t,
      levels: s,
      media: n
    } = this;
    if (t === null || !n && !this.primaryPrefetch && (this.startFragRequested || !e.config.startFragPrefetch) || this.altAudio && this.audioOnly)
      return;
    const r = this.buffering ? e.nextLoadLevel : e.loadLevel;
    if (!(s != null && s[r]))
      return;
    const a = s[r], o = this.getMainFwdBufferInfo();
    if (o === null)
      return;
    const c = this.getLevelDetails();
    if (c && this._streamEnded(o, c)) {
      const m = {};
      this.altAudio === 2 && (m.type = "video"), this.hls.trigger(y.BUFFER_EOS, m), this.state = D.ENDED;
      return;
    }
    if (!this.buffering)
      return;
    e.loadLevel !== r && e.manualLevel === -1 && this.log(`Adapting to level ${r} from level ${this.level}`), this.level = e.nextLoadLevel = r;
    const l = a.details;
    if (!l || this.state === D.WAITING_LEVEL || this.waitForLive(a)) {
      this.level = r, this.state = D.WAITING_LEVEL, this.startFragRequested = !1;
      return;
    }
    const u = o.len, h = this.getMaxBufferLength(a.maxBitrate);
    if (u >= h)
      return;
    this.backtrackFragment && this.backtrackFragment.start > o.end && (this.backtrackFragment = null);
    const d = this.backtrackFragment ? this.backtrackFragment.start : o.end;
    let g = this.getNextFragment(d, l);
    if (this.couldBacktrack && !this.fragPrevious && g && Le(g) && this.fragmentTracker.getState(g) !== Pe.OK) {
      var f;
      const p = ((f = this.backtrackFragment) != null ? f : g).sn - l.startSN, T = l.fragments[p - 1];
      T && g.cc === T.cc && (g = T, this.fragmentTracker.removeFragment(T));
    } else this.backtrackFragment && o.len && (this.backtrackFragment = null);
    if (g && this.isLoopLoading(g, d)) {
      if (!g.gap) {
        const p = this.audioOnly && !this.altAudio ? ye.AUDIO : ye.VIDEO, T = (p === ye.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
        T && this.afterBufferFlushed(T, p, j.MAIN);
      }
      g = this.getNextFragmentLoopLoading(g, l, o, j.MAIN, h);
    }
    g && (g.initSegment && !g.initSegment.data && !this.bitrateTest && (g = g.initSegment), this.loadFragment(g, a, d));
  }
  loadFragment(e, t, s) {
    const n = this.fragmentTracker.getState(e);
    n === Pe.NOT_LOADED || n === Pe.PARTIAL ? Le(e) ? this.bitrateTest ? (this.log(`Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`), this._loadBitrateTestFrag(e, t)) : super.loadFragment(e, t, s) : this._loadInitSegment(e, t) : this.clearTrackerIfNeeded(e);
  }
  getBufferedFrag(e) {
    return this.fragmentTracker.getBufferedFrag(e, j.MAIN);
  }
  followingBufferedFrag(e) {
    return e ? this.getBufferedFrag(e.end + 0.5) : null;
  }
  /*
    on immediate level switch :
     - pause playback if playing
     - cancel any pending load request
     - and trigger a buffer flush
  */
  immediateLevelSwitch() {
    this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
  }
  /**
   * try to switch ASAP without breaking video playback:
   * in order to ensure smooth but quick level switching,
   * we need to find the next flushable buffer range
   * we should take into account new segment fetch time
   */
  nextLevelSwitch() {
    const {
      levels: e,
      media: t
    } = this;
    if (t != null && t.readyState) {
      let s;
      const n = this.getAppendedFrag(t.currentTime);
      n && n.start > 1 && this.flushMainBuffer(0, n.start - 1);
      const r = this.getLevelDetails();
      if (r != null && r.live) {
        const o = this.getMainFwdBufferInfo();
        if (!o || o.len < r.targetduration * 2)
          return;
      }
      if (!t.paused && e) {
        const o = this.hls.nextLoadLevel, c = e[o], l = this.fragLastKbps;
        l && this.fragCurrent ? s = this.fragCurrent.duration * c.maxBitrate / (1e3 * l) + 1 : s = 0;
      } else
        s = 0;
      const a = this.getBufferedFrag(t.currentTime + s);
      if (a) {
        const o = this.followingBufferedFrag(a);
        if (o) {
          this.abortCurrentFrag();
          const c = o.maxStartPTS ? o.maxStartPTS : o.start, l = o.duration, u = Math.max(a.end, c + Math.min(Math.max(l - this.config.maxFragLookUpTolerance, l * (this.couldBacktrack ? 0.5 : 0.125)), l * (this.couldBacktrack ? 0.75 : 0.25)));
          this.flushMainBuffer(u, Number.POSITIVE_INFINITY);
        }
      }
    }
  }
  abortCurrentFrag() {
    const e = this.fragCurrent;
    switch (this.fragCurrent = null, this.backtrackFragment = null, e && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.state) {
      case D.KEY_LOADING:
      case D.FRAG_LOADING:
      case D.FRAG_LOADING_WAITING_RETRY:
      case D.PARSING:
      case D.PARSED:
        this.state = D.IDLE;
        break;
    }
    this.nextLoadPosition = this.getLoadPosition();
  }
  flushMainBuffer(e, t) {
    super.flushMainBuffer(e, t, this.altAudio === 2 ? "video" : null);
  }
  onMediaAttached(e, t) {
    super.onMediaAttached(e, t);
    const s = t.media;
    He(s, "playing", this.onMediaPlaying), He(s, "seeked", this.onMediaSeeked);
  }
  onMediaDetaching(e, t) {
    const {
      media: s
    } = this;
    s && (ze(s, "playing", this.onMediaPlaying), ze(s, "seeked", this.onMediaSeeked)), this.videoBuffer = null, this.fragPlaying = null, super.onMediaDetaching(e, t), !t.transferMedia && (this._hasEnoughToStart = !1);
  }
  onManifestLoading() {
    super.onManifestLoading(), this.log("Trigger BUFFER_RESET"), this.hls.trigger(y.BUFFER_RESET, void 0), this.couldBacktrack = !1, this.fragLastKbps = 0, this.fragPlaying = this.backtrackFragment = null, this.altAudio = 0, this.audioOnly = !1;
  }
  onManifestParsed(e, t) {
    let s = !1, n = !1;
    for (let r = 0; r < t.levels.length; r++) {
      const a = t.levels[r].audioCodec;
      a && (s = s || a.indexOf("mp4a.40.2") !== -1, n = n || a.indexOf("mp4a.40.5") !== -1);
    }
    this.audioCodecSwitch = s && n && !Pg(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t.levels, this.startFragRequested = !1;
  }
  onLevelLoading(e, t) {
    const {
      levels: s
    } = this;
    if (!s || this.state !== D.IDLE)
      return;
    const n = t.levelInfo;
    (!n.details || n.details.live && (this.levelLastLoaded !== n || n.details.expired) || this.waitForCdnTuneIn(n.details)) && (this.state = D.WAITING_LEVEL);
  }
  onLevelLoaded(e, t) {
    var s;
    const {
      levels: n,
      startFragRequested: r
    } = this, a = t.level, o = t.details, c = o.totalduration;
    if (!n) {
      this.warn(`Levels were reset while loading level ${a}`);
      return;
    }
    this.log(`Level ${a} loaded [${o.startSN},${o.endSN}]${o.lastPartSn ? `[part-${o.lastPartSn}-${o.lastPartIndex}]` : ""}, cc [${o.startCC}, ${o.endCC}] duration:${c}`);
    const l = t.levelInfo, u = this.fragCurrent;
    u && (this.state === D.FRAG_LOADING || this.state === D.FRAG_LOADING_WAITING_RETRY) && u.level !== t.level && u.loader && this.abortCurrentFrag();
    let h = 0;
    if (o.live || (s = l.details) != null && s.live) {
      var d;
      if (this.checkLiveUpdate(o), o.deltaUpdateFailed)
        return;
      h = this.alignPlaylists(o, l.details, (d = this.levelLastLoaded) == null ? void 0 : d.details);
    }
    if (l.details = o, this.levelLastLoaded = l, r || this.setStartPosition(o, h), this.hls.trigger(y.LEVEL_UPDATED, {
      details: o,
      level: a
    }), this.state === D.WAITING_LEVEL) {
      if (this.waitForCdnTuneIn(o))
        return;
      this.state = D.IDLE;
    }
    r && o.live && this.synchronizeToLiveEdge(o), this.tick();
  }
  synchronizeToLiveEdge(e) {
    const {
      config: t,
      media: s
    } = this;
    if (!s)
      return;
    const n = this.hls.liveSyncPosition, r = this.getLoadPosition(), a = e.fragmentStart, o = e.edge, c = r >= a - t.maxFragLookUpTolerance && r <= o;
    if (n !== null && s.duration > n && (r < n || !c)) {
      const u = t.liveMaxLatencyDuration !== void 0 ? t.liveMaxLatencyDuration : t.liveMaxLatencyDurationCount * e.targetduration;
      if ((!c && s.readyState < 4 || r < o - u) && (this._hasEnoughToStart || (this.nextLoadPosition = n), s.readyState))
        if (this.warn(`Playback: ${r.toFixed(3)} is located too far from the end of live sliding playlist: ${o}, reset currentTime to : ${n.toFixed(3)}`), this.config.liveSyncMode === "buffered") {
          var l;
          const h = se.bufferInfo(s, n, 0);
          if (!((l = h.buffered) != null && l.length)) {
            s.currentTime = n;
            return;
          }
          if (h.start <= r) {
            s.currentTime = n;
            return;
          }
          const {
            nextStart: g
          } = se.bufferedInfo(h.buffered, r, 0);
          g && (s.currentTime = g);
        } else
          s.currentTime = n;
    }
  }
  _handleFragmentLoadProgress(e) {
    var t;
    const s = e.frag, {
      part: n,
      payload: r
    } = e, {
      levels: a
    } = this;
    if (!a) {
      this.warn(`Levels were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
      return;
    }
    const o = a[s.level];
    if (!o) {
      this.warn(`Level ${s.level} not found on progress`);
      return;
    }
    const c = o.details;
    if (!c) {
      this.warn(`Dropping fragment ${s.sn} of level ${s.level} after level details were reset`), this.fragmentTracker.removeFragment(s);
      return;
    }
    const l = o.videoCodec, u = c.PTSKnown || !c.live, h = (t = s.initSegment) == null ? void 0 : t.data, d = this._getAudioCodec(o), g = this.transmuxer = this.transmuxer || new Qo(this.hls, j.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), f = n ? n.index : -1, m = f !== -1, p = new qn(s.level, s.sn, s.stats.chunkCount, r.byteLength, f, m), T = this.initPTS[s.cc];
    g.push(r, h, d, l, s, n, c.totalduration, u, p, T);
  }
  onAudioTrackSwitching(e, t) {
    const s = this.hls, n = this.altAudio !== 0;
    if (yi(t.url, s))
      this.altAudio = 1;
    else {
      if (this.mediaBuffer !== this.media) {
        this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
        const a = this.fragCurrent;
        a && (this.log("Switching to main audio track, cancel main fragment load"), a.abortRequests(), this.fragmentTracker.removeFragment(a)), this.resetTransmuxer(), this.resetLoadingState();
      } else this.audioOnly && this.resetTransmuxer();
      if (n) {
        this.altAudio = 0, this.fragmentTracker.removeAllFragments(), s.once(y.BUFFER_FLUSHED, () => {
          this.hls && this.hls.trigger(y.AUDIO_TRACK_SWITCHED, t);
        }), s.trigger(y.BUFFER_FLUSHING, {
          startOffset: 0,
          endOffset: Number.POSITIVE_INFINITY,
          type: null
        });
        return;
      }
      s.trigger(y.AUDIO_TRACK_SWITCHED, t);
    }
  }
  onAudioTrackSwitched(e, t) {
    const s = yi(t.url, this.hls);
    if (s) {
      const n = this.videoBuffer;
      n && this.mediaBuffer !== n && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = n);
    }
    this.altAudio = s ? 2 : 0, this.tick();
  }
  onBufferCreated(e, t) {
    const s = t.tracks;
    let n, r, a = !1;
    for (const o in s) {
      const c = s[o];
      if (c.id === "main") {
        if (r = o, n = c, o === "video") {
          const l = s[o];
          l && (this.videoBuffer = l.buffer);
        }
      } else
        a = !0;
    }
    a && n ? (this.log(`Alternate track found, use ${r}.buffered to schedule main fragment loading`), this.mediaBuffer = n.buffer) : this.mediaBuffer = this.media;
  }
  onFragBuffered(e, t) {
    const {
      frag: s,
      part: n
    } = t, r = s.type === j.MAIN;
    if (r) {
      if (this.fragContextChanged(s)) {
        this.warn(`Fragment ${s.sn}${n ? " p: " + n.index : ""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}`), this.state === D.PARSED && (this.state = D.IDLE);
        return;
      }
      const o = n ? n.stats : s.stats;
      this.fragLastKbps = Math.round(8 * o.total / (o.buffering.end - o.loading.first)), Le(s) && (this.fragPrevious = s), this.fragBufferedComplete(s, n);
    }
    const a = this.media;
    a && (!this._hasEnoughToStart && se.getBuffered(a).length && (this._hasEnoughToStart = !0, this.seekToStartPos()), r && this.tick());
  }
  get hasEnoughToStart() {
    return this._hasEnoughToStart;
  }
  onError(e, t) {
    var s;
    if (t.fatal) {
      this.state = D.ERROR;
      return;
    }
    switch (t.details) {
      case C.FRAG_GAP:
      case C.FRAG_PARSING_ERROR:
      case C.FRAG_DECRYPT_ERROR:
      case C.FRAG_LOAD_ERROR:
      case C.FRAG_LOAD_TIMEOUT:
      case C.KEY_LOAD_ERROR:
      case C.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(j.MAIN, t);
        break;
      case C.LEVEL_LOAD_ERROR:
      case C.LEVEL_LOAD_TIMEOUT:
      case C.LEVEL_PARSING_ERROR:
        !t.levelRetry && this.state === D.WAITING_LEVEL && ((s = t.context) == null ? void 0 : s.type) === re.LEVEL && (this.state = D.IDLE);
        break;
      case C.BUFFER_ADD_CODEC_ERROR:
      case C.BUFFER_APPEND_ERROR:
        if (t.parent !== "main")
          return;
        this.reduceLengthAndFlushBuffer(t) && this.resetLoadingState();
        break;
      case C.BUFFER_FULL_ERROR:
        if (t.parent !== "main")
          return;
        this.reduceLengthAndFlushBuffer(t) && (!this.config.interstitialsController && this.config.assetPlayerId ? this._hasEnoughToStart = !0 : this.flushMainBuffer(0, Number.POSITIVE_INFINITY));
        break;
      case C.INTERNAL_EXCEPTION:
        this.recoverWorkerError(t);
        break;
    }
  }
  onFragLoadEmergencyAborted() {
    this.state = D.IDLE, this._hasEnoughToStart || (this.startFragRequested = !1, this.nextLoadPosition = this.lastCurrentTime), this.tickImmediate();
  }
  onBufferFlushed(e, {
    type: t
  }) {
    if (t !== ye.AUDIO || !this.altAudio) {
      const s = (t === ye.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
      s && (this.afterBufferFlushed(s, t, j.MAIN), this.tick());
    }
  }
  onLevelsUpdated(e, t) {
    this.level > -1 && this.fragCurrent && (this.level = this.fragCurrent.level, this.level === -1 && this.resetWhenMissingContext(this.fragCurrent)), this.levels = t.levels;
  }
  swapAudioCodec() {
    this.audioCodecSwap = !this.audioCodecSwap;
  }
  /**
   * Seeks to the set startPosition if not equal to the mediaElement's current time.
   */
  seekToStartPos() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = e.currentTime;
    let s = this.startPosition;
    if (s >= 0 && t < s) {
      if (e.seeking) {
        this.log(`could not seek to ${s}, already seeking at ${t}`);
        return;
      }
      const n = this.timelineOffset;
      n && s && (s += n);
      const r = this.getLevelDetails(), a = se.getBuffered(e), o = a.length ? a.start(0) : 0, c = o - s, l = Math.max(this.config.maxBufferHole, this.config.maxFragLookUpTolerance);
      (this.config.startOnSegmentBoundary || c > 0 && (c < l || this.loadingParts && c < 2 * ((r == null ? void 0 : r.partTarget) || 0))) && (this.log(`adjusting start position by ${c} to match buffer start`), s += c, this.startPosition = s), t < s && (this.log(`seek to target start position ${s} from current time ${t} buffer start ${o}`), e.currentTime = s);
    }
  }
  _getAudioCodec(e) {
    let t = this.config.defaultAudioCodec || e.audioCodec;
    return this.audioCodecSwap && t && (this.log("Swapping audio codec"), t.indexOf("mp4a.40.5") !== -1 ? t = "mp4a.40.2" : t = "mp4a.40.5"), t;
  }
  _loadBitrateTestFrag(e, t) {
    e.bitrateTest = !0, this._doFragLoad(e, t).then((s) => {
      const {
        hls: n
      } = this, r = s == null ? void 0 : s.frag;
      if (!r || this.fragContextChanged(r))
        return;
      t.fragmentError = 0, this.state = D.IDLE, this.startFragRequested = !1, this.bitrateTest = !1;
      const a = r.stats;
      a.parsing.start = a.parsing.end = a.buffering.start = a.buffering.end = self.performance.now(), n.trigger(y.FRAG_LOADED, s), r.bitrateTest = !1;
    }).catch((s) => {
      this.state === D.STOPPED || this.state === D.ERROR || (this.warn(s), this.resetFragmentLoading(e));
    });
  }
  _handleTransmuxComplete(e) {
    const t = this.playlistType, {
      hls: s
    } = this, {
      remuxResult: n,
      chunkMeta: r
    } = e, a = this.getCurrentContext(r);
    if (!a) {
      this.resetWhenMissingContext(r);
      return;
    }
    const {
      frag: o,
      part: c,
      level: l
    } = a, {
      video: u,
      text: h,
      id3: d,
      initSegment: g
    } = n, {
      details: f
    } = l, m = this.altAudio ? void 0 : n.audio;
    if (this.fragContextChanged(o)) {
      this.fragmentTracker.removeFragment(o);
      return;
    }
    if (this.state = D.PARSING, g) {
      const p = g.tracks;
      if (p) {
        const x = o.initSegment || o;
        if (this.unhandledEncryptionError(g, o))
          return;
        this._bufferInitSegment(l, p, x, r), s.trigger(y.FRAG_PARSING_INIT_SEGMENT, {
          frag: x,
          id: t,
          tracks: p
        });
      }
      const T = g.initPTS, E = g.timescale, v = this.initPTS[o.cc];
      if (G(T) && (!v || v.baseTime !== T || v.timescale !== E)) {
        const x = g.trackId;
        this.initPTS[o.cc] = {
          baseTime: T,
          timescale: E,
          trackId: x
        }, s.trigger(y.INIT_PTS_FOUND, {
          frag: o,
          id: t,
          initPTS: T,
          timescale: E,
          trackId: x
        });
      }
    }
    if (u && f) {
      m && u.type === "audiovideo" && this.logMuxedErr(o);
      const p = f.fragments[o.sn - 1 - f.startSN], T = o.sn === f.startSN, E = !p || o.cc > p.cc;
      if (n.independent !== !1) {
        const {
          startPTS: v,
          endPTS: x,
          startDTS: A,
          endDTS: _
        } = u;
        if (c)
          c.elementaryStreams[u.type] = {
            startPTS: v,
            endPTS: x,
            startDTS: A,
            endDTS: _
          };
        else if (u.firstKeyFrame && u.independent && r.id === 1 && !E && (this.couldBacktrack = !0), u.dropped && u.independent) {
          const S = this.getMainFwdBufferInfo(), L = (S ? S.end : this.getLoadPosition()) + this.config.maxBufferHole, I = u.firstKeyFramePTS ? u.firstKeyFramePTS : v;
          if (!T && L < I - this.config.maxBufferHole && !E) {
            this.backtrack(o);
            return;
          } else E && (o.gap = !0);
          o.setElementaryStreamInfo(u.type, o.start, x, o.start, _, !0);
        } else T && v - (f.appliedTimelineOffset || 0) > ci && (o.gap = !0);
        o.setElementaryStreamInfo(u.type, v, x, A, _), this.backtrackFragment && (this.backtrackFragment = o), this.bufferFragmentData(u, o, c, r, T || E);
      } else if (T || E)
        o.gap = !0;
      else {
        this.backtrack(o);
        return;
      }
    }
    if (m) {
      const {
        startPTS: p,
        endPTS: T,
        startDTS: E,
        endDTS: v
      } = m;
      c && (c.elementaryStreams[ye.AUDIO] = {
        startPTS: p,
        endPTS: T,
        startDTS: E,
        endDTS: v
      }), o.setElementaryStreamInfo(ye.AUDIO, p, T, E, v), this.bufferFragmentData(m, o, c, r);
    }
    if (f && d != null && d.samples.length) {
      const p = {
        id: t,
        frag: o,
        details: f,
        samples: d.samples
      };
      s.trigger(y.FRAG_PARSING_METADATA, p);
    }
    if (f && h) {
      const p = {
        id: t,
        frag: o,
        details: f,
        samples: h.samples
      };
      s.trigger(y.FRAG_PARSING_USERDATA, p);
    }
  }
  logMuxedErr(e) {
    this.warn(`${Le(e) ? "Media" : "Init"} segment with muxed audiovideo where only video expected: ${e.url}`);
  }
  _bufferInitSegment(e, t, s, n) {
    if (this.state !== D.PARSING)
      return;
    this.audioOnly = !!t.audio && !t.video, this.altAudio && !this.audioOnly && (delete t.audio, t.audiovideo && this.logMuxedErr(s));
    const {
      audio: r,
      video: a,
      audiovideo: o
    } = t;
    if (r) {
      const l = e.audioCodec;
      let u = si(r.codec, l);
      u === "mp4a" && (u = "mp4a.40.5");
      const h = navigator.userAgent.toLowerCase();
      if (this.audioCodecSwitch) {
        u && (u.indexOf("mp4a.40.5") !== -1 ? u = "mp4a.40.2" : u = "mp4a.40.5");
        const d = r.metadata;
        d && "channelCount" in d && (d.channelCount || 1) !== 1 && h.indexOf("firefox") === -1 && (u = "mp4a.40.5");
      }
      u && u.indexOf("mp4a.40.5") !== -1 && h.indexOf("android") !== -1 && r.container !== "audio/mpeg" && (u = "mp4a.40.2", this.log(`Android: force audio codec to ${u}`)), l && l !== u && this.log(`Swapping manifest audio codec "${l}" for "${u}"`), r.levelCodec = u, r.id = j.MAIN, this.log(`Init audio buffer, container:${r.container}, codecs[selected/level/parsed]=[${u || ""}/${l || ""}/${r.codec}]`), delete t.audiovideo;
    }
    if (a) {
      a.levelCodec = e.videoCodec, a.id = j.MAIN;
      const l = a.codec;
      if ((l == null ? void 0 : l.length) === 4)
        switch (l) {
          case "hvc1":
          case "hev1":
            a.codec = "hvc1.1.6.L120.90";
            break;
          case "av01":
            a.codec = "av01.0.04M.08";
            break;
          case "avc1":
            a.codec = "avc1.42e01e";
            break;
        }
      this.log(`Init video buffer, container:${a.container}, codecs[level/parsed]=[${e.videoCodec || ""}/${l}]${a.codec !== l ? " parsed-corrected=" + a.codec : ""}${a.supplemental ? " supplemental=" + a.supplemental : ""}`), delete t.audiovideo;
    }
    o && (this.log(`Init audiovideo buffer, container:${o.container}, codecs[level/parsed]=[${e.codecs}/${o.codec}]`), delete t.video, delete t.audio);
    const c = Object.keys(t);
    if (c.length) {
      if (this.hls.trigger(y.BUFFER_CODECS, t), !this.hls)
        return;
      c.forEach((l) => {
        const h = t[l].initSegment;
        h != null && h.byteLength && this.hls.trigger(y.BUFFER_APPENDING, {
          type: l,
          data: h,
          frag: s,
          part: null,
          chunkMeta: n,
          parent: s.type
        });
      });
    }
    this.tickImmediate();
  }
  getMainFwdBufferInfo() {
    const e = this.mediaBuffer && this.altAudio === 2 ? this.mediaBuffer : this.media;
    return this.getFwdBufferInfo(e, j.MAIN);
  }
  get maxBufferLength() {
    const {
      levels: e,
      level: t
    } = this, s = e == null ? void 0 : e[t];
    return s ? this.getMaxBufferLength(s.maxBitrate) : this.config.maxBufferLength;
  }
  backtrack(e) {
    this.couldBacktrack = !0, this.backtrackFragment = e, this.resetTransmuxer(), this.flushBufferGap(e), this.fragmentTracker.removeFragment(e), this.fragPrevious = null, this.nextLoadPosition = e.start, this.state = D.IDLE;
  }
  checkFragmentChanged() {
    const e = this.media;
    let t = null;
    if (e && e.readyState > 1 && e.seeking === !1) {
      const s = e.currentTime;
      if (se.isBuffered(e, s) ? t = this.getAppendedFrag(s) : se.isBuffered(e, s + 0.1) && (t = this.getAppendedFrag(s + 0.1)), t) {
        this.backtrackFragment = null;
        const n = this.fragPlaying, r = t.level;
        (!n || t.sn !== n.sn || n.level !== r) && (this.fragPlaying = t, this.hls.trigger(y.FRAG_CHANGED, {
          frag: t
        }), (!n || n.level !== r) && this.hls.trigger(y.LEVEL_SWITCHED, {
          level: r
        }));
      }
    }
  }
  get nextLevel() {
    const e = this.nextBufferedFrag;
    return e ? e.level : -1;
  }
  get currentFrag() {
    var e;
    if (this.fragPlaying)
      return this.fragPlaying;
    const t = ((e = this.media) == null ? void 0 : e.currentTime) || this.lastCurrentTime;
    return G(t) ? this.getAppendedFrag(t) : null;
  }
  get currentProgramDateTime() {
    var e;
    const t = ((e = this.media) == null ? void 0 : e.currentTime) || this.lastCurrentTime;
    if (G(t)) {
      const s = this.getLevelDetails(), n = this.currentFrag || (s ? Qt(null, s.fragments, t) : null);
      if (n) {
        const r = n.programDateTime;
        if (r !== null) {
          const a = r + (t - n.start) * 1e3;
          return new Date(a);
        }
      }
    }
    return null;
  }
  get currentLevel() {
    const e = this.currentFrag;
    return e ? e.level : -1;
  }
  get nextBufferedFrag() {
    const e = this.currentFrag;
    return e ? this.followingBufferedFrag(e) : null;
  }
  get forceStartLoad() {
    return this._forceStartLoad;
  }
}
class Fg extends rt {
  constructor(e, t) {
    super("key-loader", t), this.config = void 0, this.keyIdToKeyInfo = {}, this.emeController = null, this.config = e;
  }
  abort(e) {
    for (const s in this.keyIdToKeyInfo) {
      const n = this.keyIdToKeyInfo[s].loader;
      if (n) {
        var t;
        if (e && e !== ((t = n.context) == null ? void 0 : t.frag.type))
          return;
        n.abort();
      }
    }
  }
  detach() {
    for (const e in this.keyIdToKeyInfo) {
      const t = this.keyIdToKeyInfo[e];
      (t.mediaKeySessionContext || t.decryptdata.isCommonEncryption) && delete this.keyIdToKeyInfo[e];
    }
  }
  destroy() {
    this.detach();
    for (const e in this.keyIdToKeyInfo) {
      const t = this.keyIdToKeyInfo[e].loader;
      t && t.destroy();
    }
    this.keyIdToKeyInfo = {};
  }
  createKeyLoadError(e, t = C.KEY_LOAD_ERROR, s, n, r) {
    return new It({
      type: q.NETWORK_ERROR,
      details: t,
      fatal: !1,
      frag: e,
      response: r,
      error: s,
      networkDetails: n
    });
  }
  loadClear(e, t, s) {
    if (this.emeController && this.config.emeEnabled && !this.emeController.getSelectedKeySystemFormats().length) {
      if (t.length)
        for (let n = 0, r = t.length; n < r; n++) {
          const a = t[n];
          if (e.cc <= a.cc && (!Le(e) || !Le(a) || e.sn < a.sn) || !s && n == r - 1)
            return this.emeController.selectKeySystemFormat(a).then((o) => {
              if (!this.emeController)
                return;
              a.setKeyFormat(o);
              const c = ni(o);
              if (c)
                return this.emeController.getKeySystemAccess([c]);
            });
        }
      if (this.config.requireKeySystemAccessOnStart) {
        const n = Es(this.config);
        if (n.length)
          return this.emeController.getKeySystemAccess(n);
      }
    }
    return null;
  }
  load(e) {
    return !e.decryptdata && e.encrypted && this.emeController && this.config.emeEnabled ? this.emeController.selectKeySystemFormat(e).then((t) => this.loadInternal(e, t)) : this.loadInternal(e);
  }
  loadInternal(e, t) {
    var s, n;
    t && e.setKeyFormat(t);
    const r = e.decryptdata;
    if (!r) {
      const l = new Error(t ? `Expected frag.decryptdata to be defined after setting format ${t}` : `Missing decryption data on fragment in onKeyLoading (emeEnabled with controller: ${this.emeController && this.config.emeEnabled})`);
      return Promise.reject(this.createKeyLoadError(e, C.KEY_LOAD_ERROR, l));
    }
    const a = r.uri;
    if (!a)
      return Promise.reject(this.createKeyLoadError(e, C.KEY_LOAD_ERROR, new Error(`Invalid key URI: "${a}"`)));
    const o = an(r);
    let c = this.keyIdToKeyInfo[o];
    if ((s = c) != null && s.decryptdata.key)
      return r.key = c.decryptdata.key, Promise.resolve({
        frag: e,
        keyInfo: c
      });
    if (this.emeController && (n = c) != null && n.keyLoadPromise)
      switch (this.emeController.getKeyStatus(c.decryptdata)) {
        case "usable":
        case "usable-in-future":
          return c.keyLoadPromise.then((u) => {
            const {
              keyInfo: h
            } = u;
            return r.key = h.decryptdata.key, {
              frag: e,
              keyInfo: h
            };
          });
      }
    switch (this.log(`${this.keyIdToKeyInfo[o] ? "Rel" : "L"}oading${r.keyId ? " keyId: " + Be(r.keyId) : ""} URI: ${r.uri} from ${e.type} ${e.level}`), c = this.keyIdToKeyInfo[o] = {
      decryptdata: r,
      keyLoadPromise: null,
      loader: null,
      mediaKeySessionContext: null
    }, r.method) {
      case "SAMPLE-AES":
      case "SAMPLE-AES-CENC":
      case "SAMPLE-AES-CTR":
        return r.keyFormat === "identity" ? this.loadKeyHTTP(c, e) : this.loadKeyEME(c, e);
      case "AES-128":
      case "AES-256":
      case "AES-256-CTR":
        return this.loadKeyHTTP(c, e);
      default:
        return Promise.reject(this.createKeyLoadError(e, C.KEY_LOAD_ERROR, new Error(`Key supplied with unsupported METHOD: "${r.method}"`)));
    }
  }
  loadKeyEME(e, t) {
    const s = {
      frag: t,
      keyInfo: e
    };
    if (this.emeController && this.config.emeEnabled) {
      var n;
      if (!e.decryptdata.keyId && (n = t.initSegment) != null && n.data) {
        const a = eu(t.initSegment.data);
        if (a.length) {
          let o = a[0];
          o.some((c) => c !== 0) ? (this.log(`Using keyId found in init segment ${Be(o)}`), $t.setKeyIdForUri(e.decryptdata.uri, o)) : (o = $t.addKeyIdForUri(e.decryptdata.uri), this.log(`Generating keyId to patch media ${Be(o)}`)), e.decryptdata.keyId = o;
        }
      }
      if (!e.decryptdata.keyId && !Le(t))
        return Promise.resolve(s);
      const r = this.emeController.loadKey(s);
      return (e.keyLoadPromise = r.then((a) => (e.mediaKeySessionContext = a, s))).catch((a) => {
        throw e.keyLoadPromise = null, "data" in a && (a.data.frag = t), a;
      });
    }
    return Promise.resolve(s);
  }
  loadKeyHTTP(e, t) {
    const s = this.config, n = s.loader, r = new n(s);
    return t.keyLoader = e.loader = r, e.keyLoadPromise = new Promise((a, o) => {
      const c = {
        keyInfo: e,
        frag: t,
        responseType: "arraybuffer",
        url: e.decryptdata.uri
      }, l = s.keyLoadPolicy.default, u = {
        loadPolicy: l,
        timeout: l.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0
      }, h = {
        onSuccess: (d, g, f, m) => {
          const {
            frag: p,
            keyInfo: T
          } = f, E = an(T.decryptdata);
          if (!p.decryptdata || T !== this.keyIdToKeyInfo[E])
            return o(this.createKeyLoadError(p, C.KEY_LOAD_ERROR, new Error("after key load, decryptdata unset or changed"), m));
          T.decryptdata.key = p.decryptdata.key = new Uint8Array(d.data), p.keyLoader = null, T.loader = null, a({
            frag: p,
            keyInfo: T
          });
        },
        onError: (d, g, f, m) => {
          this.resetLoader(g), o(this.createKeyLoadError(t, C.KEY_LOAD_ERROR, new Error(`HTTP Error ${d.code} loading key ${d.text}`), f, fe({
            url: c.url,
            data: void 0
          }, d)));
        },
        onTimeout: (d, g, f) => {
          this.resetLoader(g), o(this.createKeyLoadError(t, C.KEY_LOAD_TIMEOUT, new Error("key loading timed out"), f));
        },
        onAbort: (d, g, f) => {
          this.resetLoader(g), o(this.createKeyLoadError(t, C.INTERNAL_ABORTED, new Error("key loading aborted"), f));
        }
      };
      r.load(c, u, h);
    });
  }
  resetLoader(e) {
    const {
      frag: t,
      keyInfo: s,
      url: n
    } = e, r = s.loader;
    t.keyLoader === r && (t.keyLoader = null, s.loader = null);
    const a = an(s.decryptdata) || n;
    delete this.keyIdToKeyInfo[a], r && r.destroy();
  }
}
function an(i) {
  if (i.keyFormat !== Ge.FAIRPLAY) {
    const e = i.keyId;
    if (e)
      return Be(e);
  }
  return i.uri;
}
function Ma(i) {
  const {
    type: e
  } = i;
  switch (e) {
    case re.AUDIO_TRACK:
      return j.AUDIO;
    case re.SUBTITLE_TRACK:
      return j.SUBTITLE;
    default:
      return j.MAIN;
  }
}
function on(i, e) {
  let t = i.url;
  return (t === void 0 || t.indexOf("data:") === 0) && (t = e.url), t;
}
class Ng {
  constructor(e) {
    this.hls = void 0, this.loaders = /* @__PURE__ */ Object.create(null), this.variableList = null, this.onManifestLoaded = this.checkAutostartLoad, this.hls = e, this.registerListeners();
  }
  startLoad(e) {
  }
  stopLoad() {
    this.destroyInternalLoaders();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(y.MANIFEST_LOADING, this.onManifestLoading, this), e.on(y.LEVEL_LOADING, this.onLevelLoading, this), e.on(y.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.on(y.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this), e.on(y.LEVELS_UPDATED, this.onLevelsUpdated, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(y.MANIFEST_LOADING, this.onManifestLoading, this), e.off(y.LEVEL_LOADING, this.onLevelLoading, this), e.off(y.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.off(y.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this), e.off(y.LEVELS_UPDATED, this.onLevelsUpdated, this);
  }
  /**
   * Returns defaults or configured loader-type overloads (pLoader and loader config params)
   */
  createInternalLoader(e) {
    const t = this.hls.config, s = t.pLoader, n = t.loader, r = s || n, a = new r(t);
    return this.loaders[e.type] = a, a;
  }
  getInternalLoader(e) {
    return this.loaders[e.type];
  }
  resetInternalLoader(e) {
    this.loaders[e] && delete this.loaders[e];
  }
  /**
   * Call `destroy` on all internal loader instances mapped (one per context type)
   */
  destroyInternalLoaders() {
    for (const e in this.loaders) {
      const t = this.loaders[e];
      t && t.destroy(), this.resetInternalLoader(e);
    }
  }
  destroy() {
    this.variableList = null, this.unregisterListeners(), this.destroyInternalLoaders();
  }
  onManifestLoading(e, t) {
    const {
      url: s
    } = t;
    this.variableList = null, this.load({
      id: null,
      level: 0,
      responseType: "text",
      type: re.MANIFEST,
      url: s,
      deliveryDirectives: null,
      levelOrTrack: null
    });
  }
  onLevelLoading(e, t) {
    const {
      id: s,
      level: n,
      pathwayId: r,
      url: a,
      deliveryDirectives: o,
      levelInfo: c
    } = t;
    this.load({
      id: s,
      level: n,
      pathwayId: r,
      responseType: "text",
      type: re.LEVEL,
      url: a,
      deliveryDirectives: o,
      levelOrTrack: c
    });
  }
  onAudioTrackLoading(e, t) {
    const {
      id: s,
      groupId: n,
      url: r,
      deliveryDirectives: a,
      track: o
    } = t;
    this.load({
      id: s,
      groupId: n,
      level: null,
      responseType: "text",
      type: re.AUDIO_TRACK,
      url: r,
      deliveryDirectives: a,
      levelOrTrack: o
    });
  }
  onSubtitleTrackLoading(e, t) {
    const {
      id: s,
      groupId: n,
      url: r,
      deliveryDirectives: a,
      track: o
    } = t;
    this.load({
      id: s,
      groupId: n,
      level: null,
      responseType: "text",
      type: re.SUBTITLE_TRACK,
      url: r,
      deliveryDirectives: a,
      levelOrTrack: o
    });
  }
  onLevelsUpdated(e, t) {
    const s = this.loaders[re.LEVEL];
    if (s) {
      const n = s.context;
      n && !t.levels.some((r) => r === n.levelOrTrack) && (s.abort(), delete this.loaders[re.LEVEL]);
    }
  }
  load(e) {
    var t;
    const s = this.hls.config;
    let n = this.getInternalLoader(e);
    if (n) {
      const l = this.hls.logger, u = n.context;
      if (u && u.levelOrTrack === e.levelOrTrack && (u.url === e.url || u.deliveryDirectives && !e.deliveryDirectives)) {
        u.url === e.url ? l.log(`[playlist-loader]: ignore ${e.url} ongoing request`) : l.log(`[playlist-loader]: ignore ${e.url} in favor of ${u.url}`);
        return;
      }
      l.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`), n.abort();
    }
    let r;
    if (e.type === re.MANIFEST ? r = s.manifestLoadPolicy.default : r = pe({}, s.playlistLoadPolicy.default, {
      timeoutRetry: null,
      errorRetry: null
    }), n = this.createInternalLoader(e), G((t = e.deliveryDirectives) == null ? void 0 : t.part)) {
      let l;
      if (e.type === re.LEVEL && e.level !== null ? l = this.hls.levels[e.level].details : e.type === re.AUDIO_TRACK && e.id !== null ? l = this.hls.audioTracks[e.id].details : e.type === re.SUBTITLE_TRACK && e.id !== null && (l = this.hls.subtitleTracks[e.id].details), l) {
        const u = l.partTarget, h = l.targetduration;
        if (u && h) {
          const d = Math.max(u * 3, h * 0.8) * 1e3;
          r = pe({}, r, {
            maxTimeToFirstByteMs: Math.min(d, r.maxTimeToFirstByteMs),
            maxLoadTimeMs: Math.min(d, r.maxTimeToFirstByteMs)
          });
        }
      }
    }
    const a = r.errorRetry || r.timeoutRetry || {}, o = {
      loadPolicy: r,
      timeout: r.maxLoadTimeMs,
      maxRetry: a.maxNumRetry || 0,
      retryDelay: a.retryDelayMs || 0,
      maxRetryDelay: a.maxRetryDelayMs || 0
    }, c = {
      onSuccess: (l, u, h, d) => {
        const g = this.getInternalLoader(h);
        this.resetInternalLoader(h.type);
        const f = l.data;
        u.parsing.start = performance.now(), Tt.isMediaPlaylist(f) || h.type !== re.MANIFEST ? this.handleTrackOrLevelPlaylist(l, u, h, d || null, g) : this.handleMasterPlaylist(l, u, h, d);
      },
      onError: (l, u, h, d) => {
        this.handleNetworkError(u, h, !1, l, d);
      },
      onTimeout: (l, u, h) => {
        this.handleNetworkError(u, h, !0, void 0, l);
      }
    };
    n.load(e, o, c);
  }
  checkAutostartLoad() {
    if (!this.hls)
      return;
    const {
      config: {
        autoStartLoad: e,
        startPosition: t
      },
      forceStartLoad: s
    } = this.hls;
    (e || s) && (this.hls.logger.log(`${e ? "auto" : "force"} startLoad with configured startPosition ${t}`), this.hls.startLoad(t));
  }
  handleMasterPlaylist(e, t, s, n) {
    const r = this.hls, a = e.data, o = on(e, s), c = Tt.parseMasterPlaylist(a, o);
    if (c.playlistParsingError) {
      t.parsing.end = performance.now(), this.handleManifestParsingError(e, s, c.playlistParsingError, n, t);
      return;
    }
    const {
      contentSteering: l,
      levels: u,
      sessionData: h,
      sessionKeys: d,
      startTimeOffset: g,
      variableList: f
    } = c;
    this.variableList = f, u.forEach((E) => {
      const {
        unknownCodecs: v
      } = E;
      if (v) {
        const {
          preferManagedMediaSource: x
        } = this.hls.config;
        let {
          audioCodec: A,
          videoCodec: _
        } = E;
        for (let S = v.length; S--; ) {
          const L = v[S];
          As(L, "audio", x) ? (E.audioCodec = A = A ? `${A},${L}` : L, hs.audio[A.substring(0, 4)] = 2, v.splice(S, 1)) : As(L, "video", x) && (E.videoCodec = _ = _ ? `${_},${L}` : L, hs.video[_.substring(0, 4)] = 2, v.splice(S, 1));
        }
      }
    });
    const {
      AUDIO: m = [],
      SUBTITLES: p,
      "CLOSED-CAPTIONS": T
    } = Tt.parseMasterPlaylistMedia(a, o, c);
    m.length && !m.some((v) => !v.url) && u[0].audioCodec && !u[0].attrs.AUDIO && (this.hls.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), m.unshift({
      type: "main",
      name: "main",
      groupId: "main",
      default: !1,
      autoselect: !1,
      forced: !1,
      id: -1,
      attrs: new Ee({}),
      bitrate: 0,
      url: ""
    })), r.trigger(y.MANIFEST_LOADED, {
      levels: u,
      audioTracks: m,
      subtitles: p,
      captions: T,
      contentSteering: l,
      url: o,
      stats: t,
      networkDetails: n,
      sessionData: h,
      sessionKeys: d,
      startTimeOffset: g,
      variableList: f
    });
  }
  handleTrackOrLevelPlaylist(e, t, s, n, r) {
    const a = this.hls, {
      id: o,
      level: c,
      type: l
    } = s, u = on(e, s), h = G(c) ? c : G(o) ? o : 0, d = Ma(s), g = Tt.parseLevelPlaylist(e.data, u, h, d, 0, this.variableList);
    if (l === re.MANIFEST) {
      const f = {
        attrs: new Ee({}),
        bitrate: 0,
        details: g,
        name: "",
        url: u
      };
      g.requestScheduled = t.loading.start + Io(g, 0), a.trigger(y.MANIFEST_LOADED, {
        levels: [f],
        audioTracks: [],
        url: u,
        stats: t,
        networkDetails: n,
        sessionData: null,
        sessionKeys: null,
        contentSteering: null,
        startTimeOffset: null,
        variableList: null
      });
    }
    t.parsing.end = performance.now(), s.levelDetails = g, this.handlePlaylistLoaded(g, e, t, s, n, r);
  }
  handleManifestParsingError(e, t, s, n, r) {
    this.hls.trigger(y.ERROR, {
      type: q.NETWORK_ERROR,
      details: C.MANIFEST_PARSING_ERROR,
      fatal: t.type === re.MANIFEST,
      url: e.url,
      err: s,
      error: s,
      reason: s.message,
      response: e,
      context: t,
      networkDetails: n,
      stats: r
    });
  }
  handleNetworkError(e, t, s = !1, n, r) {
    let a = `A network ${s ? "timeout" : "error" + (n ? " (status " + n.code + ")" : "")} occurred while loading ${e.type}`;
    e.type === re.LEVEL ? a += `: ${e.level} id: ${e.id}` : (e.type === re.AUDIO_TRACK || e.type === re.SUBTITLE_TRACK) && (a += ` id: ${e.id} group-id: "${e.groupId}"`);
    const o = new Error(a);
    this.hls.logger.warn(`[playlist-loader]: ${a}`);
    let c = C.UNKNOWN, l = !1;
    const u = this.getInternalLoader(e);
    switch (e.type) {
      case re.MANIFEST:
        c = s ? C.MANIFEST_LOAD_TIMEOUT : C.MANIFEST_LOAD_ERROR, l = !0;
        break;
      case re.LEVEL:
        c = s ? C.LEVEL_LOAD_TIMEOUT : C.LEVEL_LOAD_ERROR, l = !1;
        break;
      case re.AUDIO_TRACK:
        c = s ? C.AUDIO_TRACK_LOAD_TIMEOUT : C.AUDIO_TRACK_LOAD_ERROR, l = !1;
        break;
      case re.SUBTITLE_TRACK:
        c = s ? C.SUBTITLE_TRACK_LOAD_TIMEOUT : C.SUBTITLE_LOAD_ERROR, l = !1;
        break;
    }
    u && this.resetInternalLoader(e.type);
    const h = {
      type: q.NETWORK_ERROR,
      details: c,
      fatal: l,
      url: e.url,
      loader: u,
      context: e,
      error: o,
      networkDetails: t,
      stats: r
    };
    if (n) {
      const d = (t == null ? void 0 : t.url) || e.url;
      h.response = fe({
        url: d,
        data: void 0
      }, n);
    }
    this.hls.trigger(y.ERROR, h);
  }
  handlePlaylistLoaded(e, t, s, n, r, a) {
    const o = this.hls, {
      type: c,
      level: l,
      levelOrTrack: u,
      id: h,
      groupId: d,
      deliveryDirectives: g
    } = n, f = on(t, n), m = Ma(n);
    let p = typeof n.level == "number" && m === j.MAIN ? l : void 0;
    const T = e.playlistParsingError;
    if (T) {
      if (this.hls.logger.warn(`${T} ${e.url}`), !o.config.ignorePlaylistParsingErrors) {
        o.trigger(y.ERROR, {
          type: q.NETWORK_ERROR,
          details: C.LEVEL_PARSING_ERROR,
          fatal: !1,
          url: f,
          error: T,
          reason: T.message,
          response: t,
          context: n,
          level: p,
          parent: m,
          networkDetails: r,
          stats: s
        });
        return;
      }
      e.playlistParsingError = null;
    }
    if (!e.fragments.length) {
      const E = e.playlistParsingError = new Error("No Segments found in Playlist");
      o.trigger(y.ERROR, {
        type: q.NETWORK_ERROR,
        details: C.LEVEL_EMPTY_ERROR,
        fatal: !1,
        url: f,
        error: E,
        reason: E.message,
        response: t,
        context: n,
        level: p,
        parent: m,
        networkDetails: r,
        stats: s
      });
      return;
    }
    switch (e.live && a && (a.getCacheAge && (e.ageHeader = a.getCacheAge() || 0), (!a.getCacheAge || isNaN(e.ageHeader)) && (e.ageHeader = 0)), c) {
      case re.MANIFEST:
      case re.LEVEL:
        if (p) {
          if (!u)
            p = 0;
          else if (u !== o.levels[p]) {
            const E = o.levels.indexOf(u);
            E > -1 && (p = E);
          }
        }
        o.trigger(y.LEVEL_LOADED, {
          details: e,
          levelInfo: u || o.levels[0],
          level: p || 0,
          id: h || 0,
          stats: s,
          networkDetails: r,
          deliveryDirectives: g,
          withoutMultiVariant: c === re.MANIFEST
        });
        break;
      case re.AUDIO_TRACK:
        o.trigger(y.AUDIO_TRACK_LOADED, {
          details: e,
          track: u,
          id: h || 0,
          groupId: d || "",
          stats: s,
          networkDetails: r,
          deliveryDirectives: g
        });
        break;
      case re.SUBTITLE_TRACK:
        o.trigger(y.SUBTITLE_TRACK_LOADED, {
          details: e,
          track: u,
          id: h || 0,
          groupId: d || "",
          stats: s,
          networkDetails: r,
          deliveryDirectives: g
        });
        break;
    }
  }
}
class ct {
  /**
   * Get the video-dev/hls.js package version.
   */
  static get version() {
    return Rs;
  }
  /**
   * Check if the required MediaSource Extensions are available.
   */
  static isMSESupported() {
    return Ll();
  }
  /**
   * Check if MediaSource Extensions are available and isTypeSupported checks pass for any baseline codecs.
   */
  static isSupported() {
    return Dg();
  }
  /**
   * Get the MediaSource global used for MSE playback (ManagedMediaSource, MediaSource, or WebKitMediaSource).
   */
  static getMediaSource() {
    return Bt();
  }
  static get Events() {
    return y;
  }
  static get MetadataSchema() {
    return st;
  }
  static get ErrorTypes() {
    return q;
  }
  static get ErrorDetails() {
    return C;
  }
  /**
   * Get the default configuration applied to new instances.
   */
  static get DefaultConfig() {
    return ct.defaultConfig ? ct.defaultConfig : vg;
  }
  /**
   * Replace the default configuration applied to new instances.
   */
  static set DefaultConfig(e) {
    ct.defaultConfig = e;
  }
  /**
   * Creates an instance of an HLS client that can attach to exactly one `HTMLMediaElement`.
   * @param userConfig - Configuration options applied over `Hls.DefaultConfig`
   */
  constructor(e = {}) {
    this.config = void 0, this.userConfig = void 0, this.logger = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new Qn(), this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioStreamController = void 0, this.subtititleStreamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.interstitialsController = void 0, this.gapController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this._url = null, this._sessionId = void 0, this.triggeringException = void 0, this.started = !1;
    const t = this.logger = Kc(e.debug || !1, "Hls instance", e.assetPlayerId), s = this.config = Sg(ct.DefaultConfig, e, t);
    this.userConfig = e, s.progressive && xg(s, t);
    const {
      abrController: n,
      bufferController: r,
      capLevelController: a,
      errorController: o,
      fpsController: c
    } = s, l = new o(this), u = this.abrController = new n(this), h = new Nu(this), d = s.interstitialsController, g = d ? this.interstitialsController = new d(this, ct) : null, f = this.bufferController = new r(this, h), m = this.capLevelController = new a(this), p = new c(this), T = new Ng(this), E = s.contentSteeringController, v = E ? new E(this) : null, x = this.levelController = new wg(this, v), A = new kg(this), _ = new Fg(this.config, this.logger), S = this.streamController = new Mg(this, h, _), L = this.gapController = new Rg(this, h);
    m.setStreamController(S), p.setStreamController(S);
    const I = [T, x, S];
    g && I.splice(1, 0, g), v && I.splice(1, 0, v), this.networkControllers = I;
    const R = [u, f, L, m, p, A, h];
    this.audioTrackController = this.createController(s.audioTrackController, I);
    const w = s.audioStreamController;
    w && I.push(this.audioStreamController = new w(this, h, _)), this.subtitleTrackController = this.createController(s.subtitleTrackController, I);
    const O = s.subtitleStreamController;
    O && I.push(this.subtititleStreamController = new O(this, h, _)), this.createController(s.timelineController, R), _.emeController = this.emeController = this.createController(s.emeController, R), this.cmcdController = this.createController(s.cmcdController, R), this.latencyController = this.createController(Cg, R), this.coreComponents = R, I.push(l);
    const K = l.onErrorOut;
    typeof K == "function" && this.on(y.ERROR, K, l), this.on(y.MANIFEST_LOADED, T.onManifestLoaded, T);
  }
  createController(e, t) {
    if (e) {
      const s = new e(this);
      return t && t.push(s), s;
    }
    return null;
  }
  // Delegate the EventEmitter through the public API of Hls.js
  on(e, t, s = this) {
    this._emitter.on(e, t, s);
  }
  once(e, t, s = this) {
    this._emitter.once(e, t, s);
  }
  removeAllListeners(e) {
    this._emitter.removeAllListeners(e);
  }
  off(e, t, s = this, n) {
    this._emitter.off(e, t, s, n);
  }
  listeners(e) {
    return this._emitter.listeners(e);
  }
  emit(e, t, s) {
    return this._emitter.emit(e, t, s);
  }
  trigger(e, t) {
    if (this.config.debug)
      return this.emit(e, e, t);
    try {
      return this.emit(e, e, t);
    } catch (s) {
      if (this.logger.error("An internal error happened while handling event " + e + '. Error message: "' + s.message + '". Here is a stacktrace:', s), !this.triggeringException) {
        this.triggeringException = !0;
        const n = e === y.ERROR;
        this.trigger(y.ERROR, {
          type: q.OTHER_ERROR,
          details: C.INTERNAL_EXCEPTION,
          fatal: n,
          event: e,
          error: s
        }), this.triggeringException = !1;
      }
    }
    return !1;
  }
  listenerCount(e) {
    return this._emitter.listenerCount(e);
  }
  /**
   * Dispose of the instance
   */
  destroy() {
    this.logger.log("destroy"), this.trigger(y.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this._url = null, this.networkControllers.forEach((t) => t.destroy()), this.networkControllers.length = 0, this.coreComponents.forEach((t) => t.destroy()), this.coreComponents.length = 0;
    const e = this.config;
    e.xhrSetup = e.fetchSetup = void 0, this.userConfig = null;
  }
  /**
   * Attaches Hls.js to a media element
   */
  attachMedia(e) {
    if (!e || "media" in e && !e.media) {
      const r = new Error(`attachMedia failed: invalid argument (${e})`);
      this.trigger(y.ERROR, {
        type: q.OTHER_ERROR,
        details: C.ATTACH_MEDIA_ERROR,
        fatal: !0,
        error: r
      });
      return;
    }
    this.logger.log("attachMedia"), this._media && (this.logger.warn("media must be detached before attaching"), this.detachMedia());
    const t = "media" in e, s = t ? e.media : e, n = t ? e : {
      media: s
    };
    this._media = s, this.trigger(y.MEDIA_ATTACHING, n);
  }
  /**
   * Detach Hls.js from the media
   */
  detachMedia() {
    this.logger.log("detachMedia"), this.trigger(y.MEDIA_DETACHING, {}), this._media = null;
  }
  /**
   * Detach HTMLMediaElement, MediaSource, and SourceBuffers without reset, for attaching to another instance
   */
  transferMedia() {
    this._media = null;
    const e = this.bufferController.transferMedia();
    return this.trigger(y.MEDIA_DETACHING, {
      transferMedia: e
    }), e;
  }
  /**
   * Set the source URL. Can be relative or absolute.
   */
  loadSource(e) {
    this.stopLoad();
    const t = this.media, s = this._url, n = this._url = Un.buildAbsoluteURL(self.location.href, e, {
      alwaysNormalize: !0
    });
    this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.logger.log(`loadSource:${n}`), t && s && (s !== n || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(t)), this.trigger(y.MANIFEST_LOADING, {
      url: e
    });
  }
  /**
   * Gets the currently loaded URL
   */
  get url() {
    return this._url;
  }
  /**
   * Whether or not enough has been buffered to seek to start position or use `media.currentTime` to determine next load position
   */
  get hasEnoughToStart() {
    return this.streamController.hasEnoughToStart;
  }
  /**
   * Get the startPosition set on startLoad(position) or on autostart with config.startPosition
   */
  get startPosition() {
    return this.streamController.startPositionValue;
  }
  /**
   * Start loading data from the stream source.
   * Depending on default config, client starts loading automatically when a source is set.
   *
   * @param startPosition - Set the start position to stream from.
   * Defaults to -1 (None: starts from earliest point)
   */
  startLoad(e = -1, t) {
    this.logger.log(`startLoad(${e + (t ? ", <skip seek to start>" : "")})`), this.started = !0, this.resumeBuffering();
    for (let s = 0; s < this.networkControllers.length && (this.networkControllers[s].startLoad(e, t), !(!this.started || !this.networkControllers)); s++)
      ;
  }
  /**
   * Stop loading of any stream data.
   */
  stopLoad() {
    this.logger.log("stopLoad"), this.started = !1;
    for (let e = 0; e < this.networkControllers.length && (this.networkControllers[e].stopLoad(), !(this.started || !this.networkControllers)); e++)
      ;
  }
  /**
   * Returns whether loading, toggled with `startLoad()` and `stopLoad()`, is active or not`.
   */
  get loadingEnabled() {
    return this.started;
  }
  /**
   * Returns state of fragment loading toggled by calling `pauseBuffering()` and `resumeBuffering()`.
   */
  get bufferingEnabled() {
    return this.streamController.bufferingEnabled;
  }
  /**
   * Resumes stream controller segment loading after `pauseBuffering` has been called.
   */
  resumeBuffering() {
    this.bufferingEnabled || (this.logger.log("resume buffering"), this.networkControllers.forEach((e) => {
      e.resumeBuffering && e.resumeBuffering();
    }));
  }
  /**
   * Prevents stream controller from loading new segments until `resumeBuffering` is called.
   * This allows for media buffering to be paused without interupting playlist loading.
   */
  pauseBuffering() {
    this.bufferingEnabled && (this.logger.log("pause buffering"), this.networkControllers.forEach((e) => {
      e.pauseBuffering && e.pauseBuffering();
    }));
  }
  get inFlightFragments() {
    const e = {
      [j.MAIN]: this.streamController.inFlightFrag
    };
    return this.audioStreamController && (e[j.AUDIO] = this.audioStreamController.inFlightFrag), this.subtititleStreamController && (e[j.SUBTITLE] = this.subtititleStreamController.inFlightFrag), e;
  }
  /**
   * Swap through possible audio codecs in the stream (for example to switch from stereo to 5.1)
   */
  swapAudioCodec() {
    this.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec();
  }
  /**
   * When the media-element fails, this allows to detach and then re-attach it
   * as one call (convenience method).
   *
   * Automatic recovery of media-errors by this process is configurable.
   */
  recoverMediaError() {
    this.logger.log("recoverMediaError");
    const e = this._media, t = e == null ? void 0 : e.currentTime;
    this.detachMedia(), e && (this.attachMedia(e), t && this.startLoad(t));
  }
  removeLevel(e) {
    this.levelController.removeLevel(e);
  }
  /**
   * @returns a UUID for this player instance
   */
  get sessionId() {
    let e = this._sessionId;
    return e || (e = this._sessionId = Rf()), e;
  }
  /**
   * @returns an array of levels (variants) sorted by HDCP-LEVEL, RESOLUTION (height), FRAME-RATE, CODECS, VIDEO-RANGE, and BANDWIDTH
   */
  get levels() {
    const e = this.levelController.levels;
    return e || [];
  }
  /**
   * @returns LevelDetails of last loaded level (variant) or `null` prior to loading a media playlist.
   */
  get latestLevelDetails() {
    return this.streamController.getLevelDetails() || null;
  }
  /**
   * @returns Level object of selected level (variant) or `null` prior to selecting a level or once the level is removed.
   */
  get loadLevelObj() {
    return this.levelController.loadLevelObj;
  }
  /**
   * Index of quality level (variant) currently played
   */
  get currentLevel() {
    return this.streamController.currentLevel;
  }
  /**
   * Set quality level index immediately. This will flush the current buffer to replace the quality asap. That means playback will interrupt at least shortly to re-buffer and re-sync eventually. Set to -1 for automatic level selection.
   */
  set currentLevel(e) {
    this.logger.log(`set currentLevel:${e}`), this.levelController.manualLevel = e, this.streamController.immediateLevelSwitch();
  }
  /**
   * Index of next quality level loaded as scheduled by stream controller.
   */
  get nextLevel() {
    return this.streamController.nextLevel;
  }
  /**
   * Set quality level index for next loaded data.
   * This will switch the video quality asap, without interrupting playback.
   * May abort current loading of data, and flush parts of buffer (outside currently played fragment region).
   * @param newLevel - Pass -1 for automatic level selection
   */
  set nextLevel(e) {
    this.logger.log(`set nextLevel:${e}`), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch();
  }
  /**
   * Return the quality level of the currently or last (of none is loaded currently) segment
   */
  get loadLevel() {
    return this.levelController.level;
  }
  /**
   * Set quality level index for next loaded data in a conservative way.
   * This will switch the quality without flushing, but interrupt current loading.
   * Thus the moment when the quality switch will appear in effect will only be after the already existing buffer.
   * @param newLevel - Pass -1 for automatic level selection
   */
  set loadLevel(e) {
    this.logger.log(`set loadLevel:${e}`), this.levelController.manualLevel = e;
  }
  /**
   * get next quality level loaded
   */
  get nextLoadLevel() {
    return this.levelController.nextLoadLevel;
  }
  /**
   * Set quality level of next loaded segment in a fully "non-destructive" way.
   * Same as `loadLevel` but will wait for next switch (until current loading is done).
   */
  set nextLoadLevel(e) {
    this.levelController.nextLoadLevel = e;
  }
  /**
   * Return "first level": like a default level, if not set,
   * falls back to index of first level referenced in manifest
   */
  get firstLevel() {
    return Math.max(this.levelController.firstLevel, this.minAutoLevel);
  }
  /**
   * Sets "first-level", see getter.
   */
  set firstLevel(e) {
    this.logger.log(`set firstLevel:${e}`), this.levelController.firstLevel = e;
  }
  /**
   * Return the desired start level for the first fragment that will be loaded.
   * The default value of -1 indicates automatic start level selection.
   * Setting hls.nextAutoLevel without setting a startLevel will result in
   * the nextAutoLevel value being used for one fragment load.
   */
  get startLevel() {
    const e = this.levelController.startLevel;
    return e === -1 && this.abrController.forcedAutoLevel > -1 ? this.abrController.forcedAutoLevel : e;
  }
  /**
   * set  start level (level of first fragment that will be played back)
   * if not overrided by user, first level appearing in manifest will be used as start level
   * if -1 : automatic start level selection, playback will start from level matching download bandwidth
   * (determined from download of first segment)
   */
  set startLevel(e) {
    this.logger.log(`set startLevel:${e}`), e !== -1 && (e = Math.max(e, this.minAutoLevel)), this.levelController.startLevel = e;
  }
  /**
   * Whether level capping is enabled.
   * Default value is set via `config.capLevelToPlayerSize`.
   */
  get capLevelToPlayerSize() {
    return this.config.capLevelToPlayerSize;
  }
  /**
   * Enables or disables level capping. If disabled after previously enabled, `nextLevelSwitch` will be immediately called.
   */
  set capLevelToPlayerSize(e) {
    const t = !!e;
    t !== this.config.capLevelToPlayerSize && (t ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = t);
  }
  /**
   * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
   */
  get autoLevelCapping() {
    return this._autoLevelCapping;
  }
  /**
   * Returns the current bandwidth estimate in bits per second, when available. Otherwise, `NaN` is returned.
   */
  get bandwidthEstimate() {
    const {
      bwEstimator: e
    } = this.abrController;
    return e ? e.getEstimate() : NaN;
  }
  set bandwidthEstimate(e) {
    this.abrController.resetEstimator(e);
  }
  get abrEwmaDefaultEstimate() {
    const {
      bwEstimator: e
    } = this.abrController;
    return e ? e.defaultEstimate : NaN;
  }
  /**
   * get time to first byte estimate
   * @type {number}
   */
  get ttfbEstimate() {
    const {
      bwEstimator: e
    } = this.abrController;
    return e ? e.getEstimateTTFB() : NaN;
  }
  /**
   * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
   */
  set autoLevelCapping(e) {
    this._autoLevelCapping !== e && (this.logger.log(`set autoLevelCapping:${e}`), this._autoLevelCapping = e, this.levelController.checkMaxAutoUpdated());
  }
  get maxHdcpLevel() {
    return this._maxHdcpLevel;
  }
  set maxHdcpLevel(e) {
    bu(e) && this._maxHdcpLevel !== e && (this._maxHdcpLevel = e, this.levelController.checkMaxAutoUpdated());
  }
  /**
   * True when automatic level selection enabled
   */
  get autoLevelEnabled() {
    return this.levelController.manualLevel === -1;
  }
  /**
   * Level set manually (if any)
   */
  get manualLevel() {
    return this.levelController.manualLevel;
  }
  /**
   * min level selectable in auto mode according to config.minAutoBitrate
   */
  get minAutoLevel() {
    const {
      levels: e,
      config: {
        minAutoBitrate: t
      }
    } = this;
    if (!e) return 0;
    const s = e.length;
    for (let n = 0; n < s; n++)
      if (e[n].maxBitrate >= t)
        return n;
    return 0;
  }
  /**
   * max level selectable in auto mode according to autoLevelCapping
   */
  get maxAutoLevel() {
    const {
      levels: e,
      autoLevelCapping: t,
      maxHdcpLevel: s
    } = this;
    let n;
    if (t === -1 && e != null && e.length ? n = e.length - 1 : n = t, s)
      for (let r = n; r--; ) {
        const a = e[r].attrs["HDCP-LEVEL"];
        if (a && a <= s)
          return r;
      }
    return n;
  }
  get firstAutoLevel() {
    return this.abrController.firstAutoLevel;
  }
  /**
   * next automatically selected quality level
   */
  get nextAutoLevel() {
    return this.abrController.nextAutoLevel;
  }
  /**
   * this setter is used to force next auto level.
   * this is useful to force a switch down in auto mode:
   * in case of load error on level N, hls.js can set nextAutoLevel to N-1 for example)
   * forced value is valid for one fragment. upon successful frag loading at forced level,
   * this value will be resetted to -1 by ABR controller.
   */
  set nextAutoLevel(e) {
    this.abrController.nextAutoLevel = e;
  }
  /**
   * get the datetime value relative to media.currentTime for the active level Program Date Time if present
   */
  get playingDate() {
    return this.streamController.currentProgramDateTime;
  }
  get mainForwardBufferInfo() {
    return this.streamController.getMainFwdBufferInfo();
  }
  get maxBufferLength() {
    return this.streamController.maxBufferLength;
  }
  /**
   * Find and select the best matching audio track, making a level switch when a Group change is necessary.
   * Updates `hls.config.audioPreference`. Returns the selected track, or null when no matching track is found.
   */
  setAudioOption(e) {
    var t;
    return ((t = this.audioTrackController) == null ? void 0 : t.setAudioOption(e)) || null;
  }
  /**
   * Find and select the best matching subtitle track, making a level switch when a Group change is necessary.
   * Updates `hls.config.subtitlePreference`. Returns the selected track, or null when no matching track is found.
   */
  setSubtitleOption(e) {
    var t;
    return ((t = this.subtitleTrackController) == null ? void 0 : t.setSubtitleOption(e)) || null;
  }
  /**
   * Get the complete list of audio tracks across all media groups
   */
  get allAudioTracks() {
    const e = this.audioTrackController;
    return e ? e.allAudioTracks : [];
  }
  /**
   * Get the list of selectable audio tracks
   */
  get audioTracks() {
    const e = this.audioTrackController;
    return e ? e.audioTracks : [];
  }
  /**
   * index of the selected audio track (index in audio track lists)
   */
  get audioTrack() {
    const e = this.audioTrackController;
    return e ? e.audioTrack : -1;
  }
  /**
   * selects an audio track, based on its index in audio track lists
   */
  set audioTrack(e) {
    const t = this.audioTrackController;
    t && (t.audioTrack = e);
  }
  /**
   * get the complete list of subtitle tracks across all media groups
   */
  get allSubtitleTracks() {
    const e = this.subtitleTrackController;
    return e ? e.allSubtitleTracks : [];
  }
  /**
   * get alternate subtitle tracks list from playlist
   */
  get subtitleTracks() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleTracks : [];
  }
  /**
   * index of the selected subtitle track (index in subtitle track lists)
   */
  get subtitleTrack() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleTrack : -1;
  }
  get media() {
    return this._media;
  }
  /**
   * select an subtitle track, based on its index in subtitle track lists
   */
  set subtitleTrack(e) {
    const t = this.subtitleTrackController;
    t && (t.subtitleTrack = e);
  }
  /**
   * Whether subtitle display is enabled or not
   */
  get subtitleDisplay() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleDisplay : !1;
  }
  /**
   * Enable/disable subtitle display rendering
   */
  set subtitleDisplay(e) {
    const t = this.subtitleTrackController;
    t && (t.subtitleDisplay = e);
  }
  /**
   * get mode for Low-Latency HLS loading
   */
  get lowLatencyMode() {
    return this.config.lowLatencyMode;
  }
  /**
   * Enable/disable Low-Latency HLS part playlist and segment loading, and start live streams at playlist PART-HOLD-BACK rather than HOLD-BACK.
   */
  set lowLatencyMode(e) {
    this.config.lowLatencyMode = e;
  }
  /**
   * Position (in seconds) of live sync point (ie edge of live position minus safety delay defined by ```hls.config.liveSyncDuration```)
   * @returns null prior to loading live Playlist
   */
  get liveSyncPosition() {
    return this.latencyController.liveSyncPosition;
  }
  /**
   * Estimated position (in seconds) of live edge (ie edge of live playlist plus time sync playlist advanced)
   * @returns 0 before first playlist is loaded
   */
  get latency() {
    return this.latencyController.latency;
  }
  /**
   * maximum distance from the edge before the player seeks forward to ```hls.liveSyncPosition```
   * configured using ```liveMaxLatencyDurationCount``` (multiple of target duration) or ```liveMaxLatencyDuration```
   * @returns 0 before first playlist is loaded
   */
  get maxLatency() {
    return this.latencyController.maxLatency;
  }
  /**
   * target distance from the edge as calculated by the latency controller
   */
  get targetLatency() {
    return this.latencyController.targetLatency;
  }
  set targetLatency(e) {
    this.latencyController.targetLatency = e;
  }
  /**
   * the rate at which the edge of the current live playlist is advancing or 1 if there is none
   */
  get drift() {
    return this.latencyController.drift;
  }
  /**
   * set to true when startLoad is called before MANIFEST_PARSED event
   */
  get forceStartLoad() {
    return this.streamController.forceStartLoad;
  }
  /**
   * ContentSteering pathways getter
   */
  get pathways() {
    return this.levelController.pathways;
  }
  /**
   * ContentSteering pathwayPriority getter/setter
   */
  get pathwayPriority() {
    return this.levelController.pathwayPriority;
  }
  set pathwayPriority(e) {
    this.levelController.pathwayPriority = e;
  }
  /**
   * returns true when all SourceBuffers are buffered to the end
   */
  get bufferedToEnd() {
    var e;
    return !!((e = this.bufferController) != null && e.bufferedToEnd);
  }
  /**
   * returns Interstitials Program Manager
   */
  get interstitialsManager() {
    var e;
    return ((e = this.interstitialsController) == null ? void 0 : e.interstitialsManager) || null;
  }
  /**
   * returns mediaCapabilities.decodingInfo for a variant/rendition
   */
  getMediaDecodingInfo(e, t = this.allAudioTracks) {
    const s = uo(t);
    return lo(e, s, navigator.mediaCapabilities);
  }
}
ct.defaultConfig = void 0;
function ur() {
  const i = {
    ready: /* @__PURE__ */ new Set(),
    play: /* @__PURE__ */ new Set(),
    pause: /* @__PURE__ */ new Set(),
    progress: /* @__PURE__ */ new Set(),
    ended: /* @__PURE__ */ new Set(),
    mutechange: /* @__PURE__ */ new Set(),
    autoplayblocked: /* @__PURE__ */ new Set()
  };
  return {
    on(e, t) {
      return i[e].add(t), () => {
        i[e].delete(t);
      };
    },
    emit(e, ...t) {
      for (const s of i[e])
        s(...t);
    },
    clear() {
      for (const e of Object.values(i))
        e.clear();
    }
  };
}
function Il(i, e) {
  return {
    async play() {
      try {
        await i.play();
      } catch (t) {
        throw e.emit("autoplayblocked"), t;
      }
    },
    pause() {
      i.pause();
    },
    mute(t) {
      i.muted = t, e.emit("mutechange", i.muted);
    },
    seek(t) {
      i.currentTime = t, e.emit("progress", i.currentTime);
    },
    setLoop(t) {
      i.loop = t;
    },
    destroy() {
      i.pause(), i.removeAttribute("src"), i.load(), e.clear();
    },
    getCurrentTime() {
      return i.currentTime || 0;
    },
    getDuration() {
      return Number.isFinite(i.duration) ? i.duration : 0;
    },
    isMuted() {
      return i.muted;
    },
    onReady(t) {
      return e.on("ready", t);
    },
    onPlay(t) {
      return e.on("play", t);
    },
    onPause(t) {
      return e.on("pause", t);
    },
    onProgress(t) {
      return e.on("progress", t);
    },
    onEnded(t) {
      return e.on("ended", t);
    },
    onMuteChange(t) {
      return e.on("mutechange", t);
    },
    onAutoplayBlocked(t) {
      return e.on("autoplayblocked", t);
    }
  };
}
function Rl(i, e, t) {
  const s = () => e.emit("play"), n = () => e.emit("pause"), r = () => e.emit("progress", i.currentTime), a = () => e.emit("ended"), o = () => e.emit("mutechange", i.muted), c = () => t();
  return i.addEventListener("play", s), i.addEventListener("pause", n), i.addEventListener("timeupdate", r), i.addEventListener("ended", a), i.addEventListener("volumechange", o), i.addEventListener("loadedmetadata", c), i.addEventListener("canplay", c), i.readyState >= 1 && queueMicrotask(t), () => {
    i.removeEventListener("play", s), i.removeEventListener("pause", n), i.removeEventListener("timeupdate", r), i.removeEventListener("ended", a), i.removeEventListener("volumechange", o), i.removeEventListener("loadedmetadata", c), i.removeEventListener("canplay", c);
  };
}
function hr(i, e) {
  const t = [];
  return e.onReady && t.push(i.onReady(e.onReady)), e.onPlay && t.push(i.onPlay(e.onPlay)), e.onPause && t.push(i.onPause(e.onPause)), e.onProgress && t.push(i.onProgress(e.onProgress)), e.onEnded && t.push(i.onEnded(e.onEnded)), e.onMuteChange && t.push(i.onMuteChange(e.onMuteChange)), e.onAutoplayBlocked && t.push(i.onAutoplayBlocked(e.onAutoplayBlocked)), t;
}
function $g({
  enabled: i,
  videoId: e,
  muted: t,
  autoPlay: s,
  loop: n,
  onReady: r,
  onPlay: a,
  onPause: o,
  onProgress: c,
  onEnded: l,
  onMuteChange: u,
  onAutoplayBlocked: h
}) {
  const d = Ve(null), g = Ve(null), f = Ve({
    onReady: r,
    onPlay: a,
    onPause: o,
    onProgress: c,
    onEnded: l,
    onMuteChange: u,
    onAutoplayBlocked: h
  });
  return Ie(() => {
    f.current = {
      onReady: r,
      onPlay: a,
      onPause: o,
      onProgress: c,
      onEnded: l,
      onMuteChange: u,
      onAutoplayBlocked: h
    };
  }, [h, l, u, o, a, c, r]), Ie(() => {
    if (!i || !d.current)
      return;
    const m = d.current;
    console.log("[BunnyProvider] Inicializando stream (SOLO UNA VEZ):", e);
    const p = ur(), T = Il(m, p), E = hr(T, {
      onReady: (S) => {
        var L, I;
        return (I = (L = f.current).onReady) == null ? void 0 : I.call(L, S);
      },
      onPlay: () => {
        var S, L;
        return (L = (S = f.current).onPlay) == null ? void 0 : L.call(S);
      },
      onPause: () => {
        var S, L;
        return (L = (S = f.current).onPause) == null ? void 0 : L.call(S);
      },
      onProgress: (S) => {
        var L, I;
        return (I = (L = f.current).onProgress) == null ? void 0 : I.call(L, S);
      },
      onEnded: () => {
        var S, L;
        return (L = (S = f.current).onEnded) == null ? void 0 : L.call(S);
      },
      onMuteChange: (S) => {
        var L, I;
        return (I = (L = f.current).onMuteChange) == null ? void 0 : I.call(L, S);
      },
      onAutoplayBlocked: () => {
        var S, L;
        return (L = (S = f.current).onAutoplayBlocked) == null ? void 0 : L.call(S);
      }
    });
    let v = null, x = !1;
    const A = () => {
      x || (x = !0, p.emit("ready", T));
    };
    g.current = T, m.playsInline = !0, m.preload = "metadata", m.muted = t, m.autoplay = s, m.loop = n;
    const _ = Rl(m, p, A);
    return ct.isSupported() ? (v = new ct({
      startLevel: 2,
      capLevelToPlayerSize: !0
    }), v.loadSource(e), v.attachMedia(m), v.on(ct.Events.MANIFEST_PARSED, () => {
      A();
    }), v.on(ct.Events.ERROR, (S, L) => {
      console.error("[BunnyProvider HLS Error]:", L.type, L.details, L.fatal);
    })) : m.canPlayType("application/vnd.apple.mpegurl") ? (m.src = e, console.log("[BunnyProvider] Usando fallback nativo HLS para Safari:", e)) : console.warn("[KurukinPlayer] HLS no es compatible en este navegador para Bunny.net."), () => {
      _(), E.forEach((S) => S()), v == null || v.destroy(), T.destroy(), g.current = null;
    };
  }, [i, e]), Ie(() => {
    !i || !d.current || (d.current.autoplay = s);
  }, [s, i]), Ie(() => {
    var m;
    i && ((m = g.current) == null || m.mute(t));
  }, [i, t]), Ie(() => {
    var m;
    i && ((m = g.current) == null || m.setLoop(n));
  }, [i, n]), {
    mountRef: d,
    providerRef: g
  };
}
function Bg({
  enabled: i,
  videoId: e,
  muted: t,
  autoPlay: s,
  loop: n,
  controlsVariant: r,
  onReady: a,
  onPlay: o,
  onPause: c,
  onProgress: l,
  onEnded: u,
  onMuteChange: h,
  onAutoplayBlocked: d
}) {
  const g = Ve(null), f = Ve(null), m = Ve({
    onReady: a,
    onPlay: o,
    onPause: c,
    onProgress: l,
    onEnded: u,
    onMuteChange: h,
    onAutoplayBlocked: d
  });
  return Ie(() => {
    m.current = {
      onReady: a,
      onPlay: o,
      onPause: c,
      onProgress: l,
      onEnded: u,
      onMuteChange: h,
      onAutoplayBlocked: d
    };
  }, [d, u, h, c, o, l, a]), Ie(() => {
    if (!i || !g.current)
      return;
    const p = g.current, T = ur(), E = Il(p, T), v = hr(E, {
      onReady: (S) => {
        var L, I;
        return (I = (L = m.current).onReady) == null ? void 0 : I.call(L, S);
      },
      onPlay: () => {
        var S, L;
        return (L = (S = m.current).onPlay) == null ? void 0 : L.call(S);
      },
      onPause: () => {
        var S, L;
        return (L = (S = m.current).onPause) == null ? void 0 : L.call(S);
      },
      onProgress: (S) => {
        var L, I;
        return (I = (L = m.current).onProgress) == null ? void 0 : I.call(L, S);
      },
      onEnded: () => {
        var S, L;
        return (L = (S = m.current).onEnded) == null ? void 0 : L.call(S);
      },
      onMuteChange: (S) => {
        var L, I;
        return (I = (L = m.current).onMuteChange) == null ? void 0 : I.call(L, S);
      },
      onAutoplayBlocked: () => {
        var S, L;
        return (L = (S = m.current).onAutoplayBlocked) == null ? void 0 : L.call(S);
      }
    });
    let x = !1;
    const A = () => {
      x || (x = !0, T.emit("ready", E));
    };
    f.current = E, p.playsInline = !0, p.preload = "metadata", p.muted = t, p.autoplay = s, p.loop = n, p.controls = !1, p.dataset.controlsVariant = r || "standard", p.src = e;
    const _ = Rl(p, T, A);
    return () => {
      _(), v.forEach((S) => S()), E.destroy(), f.current = null;
    };
  }, [r, i, e]), Ie(() => {
    !i || !g.current || (g.current.autoplay = s);
  }, [s, i]), Ie(() => {
    var p;
    i && ((p = f.current) == null || p.mute(t));
  }, [i, t]), Ie(() => {
    var p;
    i && ((p = f.current) == null || p.setLoop(n));
  }, [i, n]), {
    mountRef: g,
    providerRef: f
  };
}
const Ug = () => {
}, Wt = () => Ug;
function Gg(i) {
  return {
    async play() {
      console.warn(`[KurukinPlayer] Provider "${i}" no implementado todavía.`);
    },
    pause() {
      console.warn(`[KurukinPlayer] Provider "${i}" no implementado todavía.`);
    },
    mute() {
      console.warn(`[KurukinPlayer] Provider "${i}" no implementado todavía.`);
    },
    seek() {
      console.warn(`[KurukinPlayer] Provider "${i}" no implementado todavía.`);
    },
    setLoop() {
      console.warn(`[KurukinPlayer] Provider "${i}" no implementado todavía.`);
    },
    destroy() {
    },
    getCurrentTime() {
      return 0;
    },
    getDuration() {
      return 0;
    },
    isMuted() {
      return !1;
    },
    onReady: Wt,
    onPlay: Wt,
    onPause: Wt,
    onProgress: Wt,
    onEnded: Wt,
    onMuteChange: Wt,
    onAutoplayBlocked: Wt
  };
}
function Kg(i, { enabled: e }) {
  const t = Ve(null), s = Ve(null);
  return Ie(() => {
    if (e)
      return console.warn(`[KurukinPlayer] Provider "${i}" no implementado todavía.`), s.current = Gg(i), () => {
        s.current = null;
      };
  }, [e, i]), {
    mountRef: t,
    providerRef: s
  };
}
function U(i, e, t) {
  return (e = Hg(e)) in i ? Object.defineProperty(i, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[e] = t, i;
}
function Vg(i, e) {
  if (typeof i != "object" || !i) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var s = t.call(i, e);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(i);
}
function Hg(i) {
  var e = Vg(i, "string");
  return typeof e == "symbol" ? e : e + "";
}
function jg(i, e) {
  if (!(i instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function Fa(i, e) {
  for (var t = 0; t < e.length; t++) {
    var s = e[t];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(i, s.key, s);
  }
}
function Wg(i, e, t) {
  return e && Fa(i.prototype, e), t && Fa(i, t), i;
}
function qg(i, e, t) {
  return e in i ? Object.defineProperty(i, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[e] = t, i;
}
function Na(i, e) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(i);
    e && (s = s.filter(function(n) {
      return Object.getOwnPropertyDescriptor(i, n).enumerable;
    })), t.push.apply(t, s);
  }
  return t;
}
function $a(i) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Na(Object(t), !0).forEach(function(s) {
      qg(i, s, t[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t)) : Na(Object(t)).forEach(function(s) {
      Object.defineProperty(i, s, Object.getOwnPropertyDescriptor(t, s));
    });
  }
  return i;
}
var Ba = {
  addCSS: !0,
  thumbWidth: 15,
  watch: !0
};
function Yg(i, e) {
  return (function() {
    return Array.from(document.querySelectorAll(e)).includes(this);
  }).call(i, e);
}
function zg(i, e) {
  if (i && e) {
    var t = new Event(e, {
      bubbles: !0
    });
    i.dispatchEvent(t);
  }
}
var Ms = function(i) {
  return i != null ? i.constructor : null;
}, dr = function(i, e) {
  return !!(i && e && i instanceof e);
}, _l = function(i) {
  return i == null;
}, kl = function(i) {
  return Ms(i) === Object;
}, Xg = function(i) {
  return Ms(i) === Number && !Number.isNaN(i);
}, Cl = function(i) {
  return Ms(i) === String;
}, Qg = function(i) {
  return Ms(i) === Boolean;
}, Zg = function(i) {
  return Ms(i) === Function;
}, wl = function(i) {
  return Array.isArray(i);
}, Dl = function(i) {
  return dr(i, NodeList);
}, Jg = function(i) {
  return dr(i, Element);
}, em = function(i) {
  return dr(i, Event);
}, tm = function(i) {
  return _l(i) || (Cl(i) || wl(i) || Dl(i)) && !i.length || kl(i) && !Object.keys(i).length;
}, Ke = {
  nullOrUndefined: _l,
  object: kl,
  number: Xg,
  string: Cl,
  boolean: Qg,
  function: Zg,
  array: wl,
  nodeList: Dl,
  element: Jg,
  event: em,
  empty: tm
};
function sm(i) {
  var e = "".concat(i).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return e ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? +e[2] : 0)) : 0;
}
function im(i, e) {
  if (1 > e) {
    var t = sm(e);
    return parseFloat(i.toFixed(t));
  }
  return Math.round(i / e) * e;
}
var nm = (function() {
  function i(e, t) {
    jg(this, i), Ke.element(e) ? this.element = e : Ke.string(e) && (this.element = document.querySelector(e)), Ke.element(this.element) && Ke.empty(this.element.rangeTouch) && (this.config = $a({}, Ba, {}, t), this.init());
  }
  return Wg(i, [{
    key: "init",
    value: function() {
      i.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this);
    }
  }, {
    key: "destroy",
    value: function() {
      i.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null);
    }
  }, {
    key: "listeners",
    value: function(e) {
      var t = this, s = e ? "addEventListener" : "removeEventListener";
      ["touchstart", "touchmove", "touchend"].forEach(function(n) {
        t.element[s](n, function(r) {
          return t.set(r);
        }, !1);
      });
    }
  }, {
    key: "get",
    value: function(e) {
      if (!i.enabled || !Ke.event(e)) return null;
      var t, s = e.target, n = e.changedTouches[0], r = parseFloat(s.getAttribute("min")) || 0, a = parseFloat(s.getAttribute("max")) || 100, o = parseFloat(s.getAttribute("step")) || 1, c = s.getBoundingClientRect(), l = 100 / c.width * (this.config.thumbWidth / 2) / 100;
      return 0 > (t = 100 / c.width * (n.clientX - c.left)) ? t = 0 : 100 < t && (t = 100), 50 > t ? t -= (100 - 2 * t) * l : 50 < t && (t += 2 * (t - 50) * l), r + im(t / 100 * (a - r), o);
    }
  }, {
    key: "set",
    value: function(e) {
      i.enabled && Ke.event(e) && !e.target.disabled && (e.preventDefault(), e.target.value = this.get(e), zg(e.target, e.type === "touchend" ? "change" : "input"));
    }
  }], [{
    key: "setup",
    value: function(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, s = null;
      if (Ke.empty(e) || Ke.string(e) ? s = Array.from(document.querySelectorAll(Ke.string(e) ? e : 'input[type="range"]')) : Ke.element(e) ? s = [e] : Ke.nodeList(e) ? s = Array.from(e) : Ke.array(e) && (s = e.filter(Ke.element)), Ke.empty(s)) return null;
      var n = $a({}, Ba, {}, t);
      if (Ke.string(e) && n.watch) {
        var r = new MutationObserver(function(a) {
          Array.from(a).forEach(function(o) {
            Array.from(o.addedNodes).forEach(function(c) {
              Ke.element(c) && Yg(c, e) && new i(c, n);
            });
          });
        });
        r.observe(document.body, {
          childList: !0,
          subtree: !0
        });
      }
      return s.map(function(a) {
        return new i(a, t);
      });
    }
  }, {
    key: "enabled",
    get: function() {
      return "ontouchstart" in document.documentElement;
    }
  }]), i;
})();
const Fs = (i) => i !== null && typeof i < "u" ? i.constructor : null, kt = (i, e) => !!(i && e && i instanceof e), fr = (i) => i === null || typeof i > "u", Pl = (i) => Fs(i) === Object, rm = (i) => Fs(i) === Number && !Number.isNaN(i), Di = (i) => Fs(i) === String, am = (i) => Fs(i) === Boolean, Ol = (i) => typeof i == "function", Ml = (i) => Array.isArray(i), om = (i) => kt(i, WeakMap), Fl = (i) => kt(i, NodeList), lm = (i) => Fs(i) === Text, cm = (i) => kt(i, Event), um = (i) => kt(i, KeyboardEvent), hm = (i) => kt(i, window.TextTrackCue) || kt(i, window.VTTCue), dm = (i) => kt(i, TextTrack) || !fr(i) && Di(i.kind), fm = (i) => kt(i, Promise) && Ol(i.then);
function gm(i) {
  return i !== null && typeof i == "object" && i.nodeType === 1 && typeof i.style == "object" && typeof i.ownerDocument == "object";
}
function Nl(i) {
  return fr(i) || (Di(i) || Ml(i) || Fl(i)) && !i.length || Pl(i) && !Object.keys(i).length;
}
function mm(i) {
  if (kt(i, window.URL))
    return !0;
  if (!Di(i))
    return !1;
  let e = i;
  (!i.startsWith("http://") || !i.startsWith("https://")) && (e = `http://${i}`);
  try {
    return !Nl(new URL(e).hostname);
  } catch {
    return !1;
  }
}
var b = {
  nullOrUndefined: fr,
  object: Pl,
  number: rm,
  string: Di,
  boolean: am,
  function: Ol,
  array: Ml,
  weakMap: om,
  nodeList: Fl,
  element: gm,
  textNode: lm,
  event: cm,
  keyboardEvent: um,
  cue: hm,
  track: dm,
  promise: fm,
  url: mm,
  empty: Nl
};
const Dn = (() => {
  const i = document.createElement("span"), e = {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd otransitionend",
    transition: "transitionend"
  }, t = Object.keys(e).find((s) => i.style[s] !== void 0);
  return b.string(t) ? e[t] : !1;
})();
function $l(i, e) {
  setTimeout(() => {
    try {
      i.hidden = !0, i.offsetHeight, i.hidden = !1;
    } catch {
    }
  }, e);
}
function pm(i) {
  return JSON.parse(JSON.stringify(i));
}
function Bl(i, e) {
  return e.split(".").reduce((t, s) => t && t[s], i);
}
function xe(i = {}, ...e) {
  if (!e.length)
    return i;
  const t = e.shift();
  return b.object(t) ? (Object.keys(t).forEach((s) => {
    b.object(t[s]) ? (Object.keys(i).includes(s) || Object.assign(i, {
      [s]: {}
    }), xe(i[s], t[s])) : Object.assign(i, {
      [s]: t[s]
    });
  }), xe(i, ...e)) : i;
}
function Ul(i, e) {
  const t = i.length ? i : [i];
  Array.from(t).reverse().forEach((s, n) => {
    const r = n > 0 ? e.cloneNode(!0) : e, a = s.parentNode, o = s.nextSibling;
    r.appendChild(s), o ? a.insertBefore(r, o) : a.appendChild(r);
  });
}
function Pn(i, e) {
  !b.element(i) || b.empty(e) || Object.entries(e).filter(([, t]) => !b.nullOrUndefined(t)).forEach(([t, s]) => i.setAttribute(t, s));
}
function Z(i, e, t) {
  const s = document.createElement(i);
  return b.object(e) && Pn(s, e), b.string(t) && (s.textContent = t), s;
}
function ym(i, e) {
  !b.element(i) || !b.element(e) || e.parentNode.insertBefore(i, e.nextSibling);
}
function Ua(i, e, t, s) {
  b.element(e) && e.appendChild(Z(i, t, s));
}
function _t(i) {
  if (b.nodeList(i) || b.array(i)) {
    Array.from(i).forEach(_t);
    return;
  }
  !b.element(i) || !b.element(i.parentNode) || i.parentNode.removeChild(i);
}
function ui(i) {
  if (!b.element(i)) return;
  let {
    length: e
  } = i.childNodes;
  for (; e > 0; )
    i.removeChild(i.lastChild), e -= 1;
}
function Li(i, e) {
  return !b.element(e) || !b.element(e.parentNode) || !b.element(i) ? null : (e.parentNode.replaceChild(i, e), i);
}
function gt(i, e) {
  if (!b.string(i) || b.empty(i)) return {};
  const t = {}, s = xe({}, e);
  return i.split(",").forEach((n) => {
    const r = n.trim(), a = r.replace(".", ""), c = r.replace(/[[\]]/g, "").split("="), [l] = c, u = c.length > 1 ? c[1].replace(/["']/g, "") : "";
    switch (r.charAt(0)) {
      case ".":
        b.string(s.class) ? t.class = `${s.class} ${a}` : t.class = a;
        break;
      case "#":
        t.id = r.replace("#", "");
        break;
      case "[":
        t[l] = u;
        break;
    }
  }), xe(s, t);
}
function qt(i, e) {
  if (!b.element(i)) return;
  let t = e;
  b.boolean(t) || (t = !i.hidden), i.hidden = t;
}
function de(i, e, t) {
  if (b.nodeList(i))
    return Array.from(i).map((s) => de(s, e, t));
  if (b.element(i)) {
    let s = "toggle";
    return typeof t < "u" && (s = t ? "add" : "remove"), i.classList[s](e), i.classList.contains(e);
  }
  return !1;
}
function Ii(i, e) {
  return b.element(i) && i.classList.contains(e);
}
function zt(i, e) {
  const {
    prototype: t
  } = Element;
  function s() {
    return Array.from(document.querySelectorAll(e)).includes(this);
  }
  return (t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || s).call(i, e);
}
function Tm(i, e) {
  const {
    prototype: t
  } = Element;
  function s() {
    let r = this;
    do {
      if (zt.matches(r, e)) return r;
      r = r.parentElement || r.parentNode;
    } while (r !== null && r.nodeType === 1);
    return null;
  }
  return (t.closest || s).call(i, e);
}
function ws(i) {
  return this.elements.container.querySelectorAll(i);
}
function we(i) {
  return this.elements.container.querySelector(i);
}
function ln(i = null, e = !1) {
  b.element(i) && i.focus({
    preventScroll: !0,
    focusVisible: e
  });
}
const Ga = {
  "audio/ogg": "vorbis",
  "audio/wav": "1",
  "video/webm": "vp8, vorbis",
  "video/mp4": "avc1.42E01E, mp4a.40.2",
  "video/ogg": "theora"
}, Ae = {
  // Basic support
  audio: "canPlayType" in document.createElement("audio"),
  video: "canPlayType" in document.createElement("video"),
  // Check for support
  // Basic functionality vs full UI
  check(i, e) {
    const t = Ae[i] || e !== "html5", s = t && Ae.rangeInput;
    return {
      api: t,
      ui: s
    };
  },
  // Picture-in-picture support
  pip: document.pictureInPictureEnabled && !Z("video").disablePictureInPicture,
  // Airplay support
  // Safari only currently
  airplay: b.function(window.WebKitPlaybackTargetAvailabilityEvent),
  // Inline playback support
  // https://webkit.org/blog/6784/new-video-policies-for-ios/
  playsinline: "playsInline" in document.createElement("video"),
  // Check for mime type support against a player instance
  // Credits: http://diveintohtml5.info/everything.html
  // Related: http://www.leanbackplayer.com/test/h5mt.html
  mime(i) {
    if (b.empty(i))
      return !1;
    const [e] = i.split("/");
    let t = i;
    if (!this.isHTML5 || e !== this.type)
      return !1;
    Object.keys(Ga).includes(t) && (t += `; codecs="${Ga[i]}"`);
    try {
      return !!(t && this.media.canPlayType(t).replace(/no/, ""));
    } catch {
      return !1;
    }
  },
  // Check for textTracks support
  textTracks: "textTracks" in document.createElement("video"),
  // <input type="range"> Sliders
  rangeInput: (() => {
    const i = document.createElement("input");
    return i.type = "range", i.type === "range";
  })(),
  // Touch
  // NOTE: Remember a device can be mouse + touch enabled so we check on first touch event
  touch: "ontouchstart" in document.documentElement,
  // Detect transitions support
  transitions: Dn !== !1,
  // Reduced motion iOS & MacOS setting
  // https://webkit.org/blog/7551/responsive-design-for-motion/
  reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
}, Em = (() => {
  let i = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        return i = !0, null;
      }
    });
    window.addEventListener("test", null, e), window.removeEventListener("test", null, e);
  } catch {
  }
  return i;
})();
function Ds(i, e, t, s = !1, n = !0, r = !1) {
  if (!i || !("addEventListener" in i) || b.empty(e) || !b.function(t))
    return;
  const a = e.split(" ");
  let o = r;
  Em && (o = {
    // Whether the listener can be passive (i.e. default never prevented)
    passive: n,
    // Whether the listener is a capturing listener or not
    capture: r
  }), a.forEach((c) => {
    this && this.eventListeners && s && this.eventListeners.push({
      element: i,
      type: c,
      callback: t,
      options: o
    }), i[s ? "addEventListener" : "removeEventListener"](c, t, o);
  });
}
function ue(i, e = "", t, s = !0, n = !1) {
  Ds.call(this, i, e, t, !0, s, n);
}
function Pi(i, e = "", t, s = !0, n = !1) {
  Ds.call(this, i, e, t, !1, s, n);
}
function gr(i, e = "", t, s = !0, n = !1) {
  const r = (...a) => {
    Pi(i, e, r, s, n), t.apply(this, a);
  };
  Ds.call(this, i, e, r, !0, s, n);
}
function J(i, e = "", t = !1, s = {}) {
  if (!b.element(i) || b.empty(e))
    return;
  const n = new CustomEvent(e, {
    bubbles: t,
    detail: {
      ...s,
      plyr: this
    }
  });
  i.dispatchEvent(n);
}
function vm() {
  this && this.eventListeners && (this.eventListeners.forEach((i) => {
    const {
      element: e,
      type: t,
      callback: s,
      options: n
    } = i;
    e.removeEventListener(t, s, n);
  }), this.eventListeners = []);
}
function bm() {
  return new Promise((i) => this.ready ? setTimeout(i, 0) : ue.call(this, this.elements.container, "ready", i)).then(() => {
  });
}
function pt(i) {
  b.promise(i) && i.then(null, () => {
  });
}
function On(i) {
  return b.array(i) ? i.filter((e, t) => i.indexOf(e) === t) : i;
}
function Gl(i, e) {
  return !b.array(i) || !i.length ? null : i.reduce((t, s) => Math.abs(s - e) < Math.abs(t - e) ? s : t);
}
function Kl(i) {
  return !window || !window.CSS ? !1 : window.CSS.supports(i);
}
const Ka = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce((i, [e, t]) => ({
  ...i,
  [e / t]: [e, t]
}), {});
function Vl(i) {
  return !b.array(i) && (!b.string(i) || !i.includes(":")) ? !1 : (b.array(i) ? i : i.split(":")).map(Number).every(b.number);
}
function Ri(i) {
  if (!b.array(i) || !i.every(b.number))
    return null;
  const [e, t] = i, s = (r, a) => a === 0 ? r : s(a, r % a), n = s(e, t);
  return [e / n, t / n];
}
function mr(i) {
  const e = (s) => Vl(s) ? s.split(":").map(Number) : null;
  let t = e(i);
  if (t === null && (t = e(this.config.ratio)), t === null && !b.empty(this.embed) && b.array(this.embed.ratio) && ({
    ratio: t
  } = this.embed), t === null && this.isHTML5) {
    const {
      videoWidth: s,
      videoHeight: n
    } = this.media;
    t = [s, n];
  }
  return Ri(t);
}
function fs(i) {
  if (!this.isVideo)
    return {};
  const {
    wrapper: e
  } = this.elements, t = mr.call(this, i);
  if (!b.array(t))
    return {};
  const [s, n] = Ri(t), r = Kl(`aspect-ratio: ${s}/${n}`), a = 100 / s * n;
  if (r ? e.style.aspectRatio = `${s}/${n}` : e.style.paddingBottom = `${a}%`, this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
    const o = 100 / this.media.offsetWidth * Number.parseInt(window.getComputedStyle(this.media).paddingBottom, 10), c = (o - a) / (o / 50);
    this.fullscreen.active ? e.style.paddingBottom = null : this.media.style.transform = `translateY(-${c}%)`;
  } else this.isHTML5 && e.classList.add(this.config.classNames.videoFixedRatio);
  return {
    padding: a,
    ratio: t
  };
}
function Hl(i, e, t = 0.05) {
  const s = i / e, n = Gl(Object.keys(Ka), s);
  return Math.abs(n - s) <= t ? Ka[n] : [i, e];
}
function Sm() {
  const i = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), e = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  return [i, e];
}
const Nt = {
  getSources() {
    return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter((e) => {
      const t = e.getAttribute("type");
      return b.empty(t) ? !0 : Ae.mime.call(this, t);
    }) : [];
  },
  // Get quality levels
  getQualityOptions() {
    return this.config.quality.forced ? this.config.quality.options : Nt.getSources.call(this).map((i) => Number(i.getAttribute("size"))).filter(Boolean);
  },
  setup() {
    if (!this.isHTML5)
      return;
    const i = this;
    i.options.speed = i.config.speed.options, b.empty(this.config.ratio) || fs.call(i), Object.defineProperty(i.media, "quality", {
      get() {
        const t = Nt.getSources.call(i).find((s) => s.getAttribute("src") === i.source);
        return t && Number(t.getAttribute("size"));
      },
      set(e) {
        if (i.quality !== e) {
          if (i.config.quality.forced && b.function(i.config.quality.onChange))
            i.config.quality.onChange(e);
          else {
            const s = Nt.getSources.call(i).find((l) => Number(l.getAttribute("size")) === e);
            if (!s)
              return;
            const {
              currentTime: n,
              paused: r,
              preload: a,
              readyState: o,
              playbackRate: c
            } = i.media;
            i.media.src = s.getAttribute("src"), (a !== "none" || o) && (i.once("loadedmetadata", () => {
              i.speed = c, i.currentTime = n, r || pt(i.play());
            }), i.media.load());
          }
          J.call(i, i.media, "qualitychange", !1, {
            quality: e
          });
        }
      }
    });
  },
  // Cancel current network requests
  // See https://github.com/sampotts/plyr/issues/174
  cancelRequests() {
    this.isHTML5 && (_t(Nt.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
  }
}, xm = !!window.document.documentMode, Am = /Edge/.test(navigator.userAgent), Lm = "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent), Im = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1, Rm = /iPad|iPhone|iPod/i.test(navigator.userAgent) && navigator.maxTouchPoints > 1;
var Ue = {
  isIE: xm,
  isEdge: Am,
  isWebKit: Lm,
  isIPadOS: Im,
  isIos: Rm
};
function _m(i) {
  return `${i}-${Math.floor(Math.random() * 1e4)}`;
}
function Mn(i, ...e) {
  return b.empty(i) ? i : i.toString().replace(/\{(\d+)\}/g, (t, s) => e[s].toString());
}
function km(i, e) {
  return i === 0 || e === 0 || Number.isNaN(i) || Number.isNaN(e) ? 0 : (i / e * 100).toFixed(2);
}
function xs(i = "", e = "", t = "") {
  return i.replace(new RegExp(e.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), t.toString());
}
function jl(i = "") {
  return i.toString().replace(/\w\S*/g, (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase());
}
function Cm(i = "") {
  let e = i.toString();
  return e = xs(e, "-", " "), e = xs(e, "_", " "), e = jl(e), xs(e, " ", "");
}
function wm(i = "") {
  let e = i.toString();
  return e = Cm(e), e.charAt(0).toLowerCase() + e.slice(1);
}
function Dm(i) {
  const e = document.createDocumentFragment(), t = document.createElement("div");
  return e.appendChild(t), t.innerHTML = i, e.firstChild.textContent;
}
function Pm(i) {
  const e = document.createElement("div");
  return e.appendChild(i), e.innerHTML;
}
const Va = {
  pip: "PIP",
  airplay: "AirPlay",
  html5: "HTML5",
  vimeo: "Vimeo",
  youtube: "YouTube"
}, Fe = {
  get(i = "", e = {}) {
    if (b.empty(i) || b.empty(e))
      return "";
    let t = Bl(e.i18n, i);
    if (b.empty(t))
      return Object.keys(Va).includes(i) ? Va[i] : "";
    const s = {
      "{seektime}": e.seekTime,
      "{title}": e.title
    };
    return Object.entries(s).forEach(([n, r]) => {
      t = xs(t, n, r);
    }), t;
  }
};
class Ps {
  constructor(e) {
    U(this, "get", (t) => {
      if (!Ps.supported || !this.enabled)
        return null;
      const s = window.localStorage.getItem(this.key);
      if (b.empty(s)) return null;
      const n = JSON.parse(s);
      return b.string(t) && t.length ? n[t] : n;
    }), U(this, "set", (t) => {
      if (!Ps.supported || !this.enabled || !b.object(t))
        return;
      let s = this.get();
      b.empty(s) && (s = {}), xe(s, t);
      try {
        window.localStorage.setItem(this.key, JSON.stringify(s));
      } catch {
      }
    }), this.enabled = e.config.storage.enabled, this.key = e.config.storage.key;
  }
  // Check for actual support (see if we can use it)
  static get supported() {
    try {
      if (!("localStorage" in window)) return !1;
      const e = "___test";
      return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0;
    } catch {
      return !1;
    }
  }
}
function Ns(i, e = "text", t = !1) {
  return new Promise((s, n) => {
    try {
      const r = new XMLHttpRequest();
      if (!("withCredentials" in r)) return;
      t && (r.withCredentials = !0), r.addEventListener("load", () => {
        if (e === "text")
          try {
            s(JSON.parse(r.responseText));
          } catch {
            s(r.responseText);
          }
        else
          s(r.response);
      }), r.addEventListener("error", () => {
        throw new Error(r.status);
      }), r.open("GET", i, !0), r.responseType = e, r.send();
    } catch (r) {
      n(r);
    }
  });
}
function Wl(i, e) {
  if (!b.string(i))
    return;
  const t = "cache", s = b.string(e);
  let n = !1;
  const r = () => document.getElementById(e) !== null, a = (o, c) => {
    o.innerHTML = c, !(s && r()) && document.body.insertAdjacentElement("afterbegin", o);
  };
  if (!s || !r()) {
    const o = Ps.supported, c = document.createElement("div");
    if (c.setAttribute("hidden", ""), s && c.setAttribute("id", e), o) {
      const l = window.localStorage.getItem(`${t}-${e}`);
      if (n = l !== null, n) {
        const u = JSON.parse(l);
        a(c, u.content);
      }
    }
    Ns(i).then((l) => {
      if (!b.empty(l)) {
        if (o)
          try {
            window.localStorage.setItem(`${t}-${e}`, JSON.stringify({
              content: l
            }));
          } catch {
          }
        a(c, l);
      }
    }).catch(() => {
    });
  }
}
const ql = (i) => Math.trunc(i / 60 / 60 % 60, 10), Om = (i) => Math.trunc(i / 60 % 60, 10), Mm = (i) => Math.trunc(i % 60, 10);
function Oi(i = 0, e = !1, t = !1) {
  if (!b.number(i))
    return Oi(void 0, e, t);
  const s = (o) => `0${o}`.slice(-2);
  let n = ql(i);
  const r = Om(i), a = Mm(i);
  return e || n > 0 ? n = `${n}:` : n = "", `${t && i > 0 ? "-" : ""}${n}${s(r)}:${s(a)}`;
}
const $ = {
  // Get icon URL
  getIconUrl() {
    const i = new URL(this.config.iconUrl, window.location), e = window.location.host ? window.location.host : window.top.location.host, t = i.host !== e || Ue.isIE && !window.svg4everybody;
    return {
      url: this.config.iconUrl,
      cors: t
    };
  },
  // Find the UI controls
  findElements() {
    try {
      return this.elements.controls = we.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
        play: ws.call(this, this.config.selectors.buttons.play),
        pause: we.call(this, this.config.selectors.buttons.pause),
        restart: we.call(this, this.config.selectors.buttons.restart),
        rewind: we.call(this, this.config.selectors.buttons.rewind),
        fastForward: we.call(this, this.config.selectors.buttons.fastForward),
        mute: we.call(this, this.config.selectors.buttons.mute),
        pip: we.call(this, this.config.selectors.buttons.pip),
        airplay: we.call(this, this.config.selectors.buttons.airplay),
        settings: we.call(this, this.config.selectors.buttons.settings),
        captions: we.call(this, this.config.selectors.buttons.captions),
        fullscreen: we.call(this, this.config.selectors.buttons.fullscreen)
      }, this.elements.progress = we.call(this, this.config.selectors.progress), this.elements.inputs = {
        seek: we.call(this, this.config.selectors.inputs.seek),
        volume: we.call(this, this.config.selectors.inputs.volume)
      }, this.elements.display = {
        buffer: we.call(this, this.config.selectors.display.buffer),
        currentTime: we.call(this, this.config.selectors.display.currentTime),
        duration: we.call(this, this.config.selectors.display.duration)
      }, b.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)), !0;
    } catch (i) {
      return this.debug.warn("It looks like there is a problem with your custom controls HTML", i), this.toggleNativeControls(!0), !1;
    }
  },
  // Create <svg> icon
  createIcon(i, e) {
    const t = "http://www.w3.org/2000/svg", s = $.getIconUrl.call(this), n = `${s.cors ? "" : s.url}#${this.config.iconPrefix}`, r = document.createElementNS(t, "svg");
    Pn(r, xe(e, {
      "aria-hidden": "true",
      focusable: "false"
    }));
    const a = document.createElementNS(t, "use"), o = `${n}-${i}`;
    return "href" in a && a.setAttributeNS("http://www.w3.org/1999/xlink", "href", o), a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o), r.appendChild(a), r;
  },
  // Create hidden text label
  createLabel(i, e = {}) {
    const t = Fe.get(i, this.config), s = {
      ...e,
      class: [e.class, this.config.classNames.hidden].filter(Boolean).join(" ")
    };
    return Z("span", s, t);
  },
  // Create a badge
  createBadge(i) {
    if (b.empty(i))
      return null;
    const e = Z("span", {
      class: this.config.classNames.menu.value
    });
    return e.appendChild(Z("span", {
      class: this.config.classNames.menu.badge
    }, i)), e;
  },
  // Create a <button>
  createButton(i, e) {
    const t = xe({}, e);
    let s = wm(i);
    const n = {
      element: "button",
      toggle: !1,
      label: null,
      icon: null,
      labelPressed: null,
      iconPressed: null
    };
    switch (["element", "icon", "label"].forEach((a) => {
      Object.keys(t).includes(a) && (n[a] = t[a], delete t[a]);
    }), n.element === "button" && !Object.keys(t).includes("type") && (t.type = "button"), Object.keys(t).includes("class") ? t.class.split(" ").includes(this.config.classNames.control) || xe(t, {
      class: `${t.class} ${this.config.classNames.control}`
    }) : t.class = this.config.classNames.control, i) {
      case "play":
        n.toggle = !0, n.label = "play", n.labelPressed = "pause", n.icon = "play", n.iconPressed = "pause";
        break;
      case "mute":
        n.toggle = !0, n.label = "mute", n.labelPressed = "unmute", n.icon = "volume", n.iconPressed = "muted";
        break;
      case "captions":
        n.toggle = !0, n.label = "enableCaptions", n.labelPressed = "disableCaptions", n.icon = "captions-off", n.iconPressed = "captions-on";
        break;
      case "fullscreen":
        n.toggle = !0, n.label = "enterFullscreen", n.labelPressed = "exitFullscreen", n.icon = "enter-fullscreen", n.iconPressed = "exit-fullscreen";
        break;
      case "play-large":
        t.class += ` ${this.config.classNames.control}--overlaid`, s = "play", n.label = "play", n.icon = "play";
        break;
      default:
        b.empty(n.label) && (n.label = s), b.empty(n.icon) && (n.icon = i);
    }
    const r = Z(n.element);
    return n.toggle ? (r.appendChild($.createIcon.call(this, n.iconPressed, {
      class: "icon--pressed"
    })), r.appendChild($.createIcon.call(this, n.icon, {
      class: "icon--not-pressed"
    })), r.appendChild($.createLabel.call(this, n.labelPressed, {
      class: "label--pressed"
    })), r.appendChild($.createLabel.call(this, n.label, {
      class: "label--not-pressed"
    }))) : (r.appendChild($.createIcon.call(this, n.icon)), r.appendChild($.createLabel.call(this, n.label))), xe(t, gt(this.config.selectors.buttons[s], t)), Pn(r, t), s === "play" ? (b.array(this.elements.buttons[s]) || (this.elements.buttons[s] = []), this.elements.buttons[s].push(r)) : this.elements.buttons[s] = r, r;
  },
  // Create an <input type='range'>
  createRange(i, e) {
    const t = Z("input", xe(gt(this.config.selectors.inputs[i]), {
      type: "range",
      min: 0,
      max: 100,
      step: 0.01,
      value: 0,
      autocomplete: "off",
      // A11y fixes for https://github.com/sampotts/plyr/issues/905
      role: "slider",
      "aria-label": Fe.get(i, this.config),
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": 0
    }, e));
    return this.elements.inputs[i] = t, $.updateRangeFill.call(this, t), nm.setup(t), t;
  },
  // Create a <progress>
  createProgress(i, e) {
    const t = Z("progress", xe(gt(this.config.selectors.display[i]), {
      min: 0,
      max: 100,
      value: 0,
      role: "progressbar",
      "aria-hidden": !0
    }, e));
    if (i !== "volume") {
      t.appendChild(Z("span", null, "0"));
      const s = {
        played: "played",
        buffer: "buffered"
      }[i], n = s ? Fe.get(s, this.config) : "";
      t.textContent = `% ${n.toLowerCase()}`;
    }
    return this.elements.display[i] = t, t;
  },
  // Create time display
  createTime(i, e) {
    const t = gt(this.config.selectors.display[i], e), s = Z("div", xe(t, {
      class: `${t.class ? t.class : ""} ${this.config.classNames.display.time} `.trim(),
      "aria-label": Fe.get(i, this.config),
      role: "timer"
    }), "00:00");
    return this.elements.display[i] = s, s;
  },
  // Bind keyboard shortcuts for a menu item
  // We have to bind to keyup otherwise Firefox triggers a click when a keydown event handler shifts focus
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
  bindMenuItemShortcuts(i, e) {
    ue.call(this, i, "keydown keyup", (t) => {
      if (![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(t.key) || (t.preventDefault(), t.stopPropagation(), t.type === "keydown"))
        return;
      const s = zt(i, '[role="menuitemradio"]');
      if (!s && [" ", "ArrowRight"].includes(t.key))
        $.showMenuPanel.call(this, e, !0);
      else {
        let n;
        t.key !== " " && (t.key === "ArrowDown" || s && t.key === "ArrowRight" ? (n = i.nextElementSibling, b.element(n) || (n = i.parentNode.firstElementChild)) : (n = i.previousElementSibling, b.element(n) || (n = i.parentNode.lastElementChild)), ln.call(this, n, !0));
      }
    }, !1), ue.call(this, i, "keyup", (t) => {
      t.key === "Return" && $.focusFirstMenuItem.call(this, null, !0);
    });
  },
  // Create a settings menu item
  createMenuItem({
    value: i,
    list: e,
    type: t,
    title: s,
    badge: n = null,
    checked: r = !1
  }) {
    const a = gt(this.config.selectors.inputs[t]), o = Z("button", xe(a, {
      type: "button",
      role: "menuitemradio",
      class: `${this.config.classNames.control} ${a.class ? a.class : ""}`.trim(),
      "aria-checked": r,
      value: i
    })), c = Z("span");
    c.innerHTML = s, b.element(n) && c.appendChild(n), o.appendChild(c), Object.defineProperty(o, "checked", {
      enumerable: !0,
      get() {
        return o.getAttribute("aria-checked") === "true";
      },
      set(l) {
        l && Array.from(o.parentNode.children).filter((u) => zt(u, '[role="menuitemradio"]')).forEach((u) => u.setAttribute("aria-checked", "false")), o.setAttribute("aria-checked", l ? "true" : "false");
      }
    }), this.listeners.bind(o, "click keyup", (l) => {
      if (!(b.keyboardEvent(l) && l.key !== " ")) {
        switch (l.preventDefault(), l.stopPropagation(), o.checked = !0, t) {
          case "language":
            this.currentTrack = Number(i);
            break;
          case "quality":
            this.quality = i;
            break;
          case "speed":
            this.speed = Number.parseFloat(i);
            break;
        }
        $.showMenuPanel.call(this, "home", b.keyboardEvent(l));
      }
    }, t, !1), $.bindMenuItemShortcuts.call(this, o, t), e.appendChild(o);
  },
  // Format a time for display
  formatTime(i = 0, e = !1) {
    if (!b.number(i))
      return i;
    const t = ql(this.duration) > 0;
    return Oi(i, t, e);
  },
  // Update the displayed time
  updateTimeDisplay(i = null, e = 0, t = !1) {
    !b.element(i) || !b.number(e) || (i.textContent = $.formatTime(e, t));
  },
  // Update volume UI and storage
  updateVolume() {
    this.supported.ui && (b.element(this.elements.inputs.volume) && $.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), b.element(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || this.volume === 0));
  },
  // Update seek value and lower fill
  setRange(i, e = 0) {
    b.element(i) && (i.value = e, $.updateRangeFill.call(this, i));
  },
  // Update <progress> elements
  updateProgress(i) {
    if (!this.supported.ui || !b.event(i))
      return;
    let e = 0;
    const t = (s, n) => {
      const r = b.number(n) ? n : 0, a = b.element(s) ? s : this.elements.display.buffer;
      if (b.element(a)) {
        a.value = r;
        const o = a.getElementsByTagName("span")[0];
        b.element(o) && (o.childNodes[0].nodeValue = r);
      }
    };
    if (i)
      switch (i.type) {
        // Video playing
        case "timeupdate":
        case "seeking":
        case "seeked":
          e = km(this.currentTime, this.duration), i.type === "timeupdate" && $.setRange.call(this, this.elements.inputs.seek, e);
          break;
        // Check buffer status
        case "playing":
        case "progress":
          t(this.elements.display.buffer, this.buffered * 100);
          break;
      }
  },
  // Webkit polyfill for lower fill range
  updateRangeFill(i) {
    const e = b.event(i) ? i.target : i;
    if (!(!b.element(e) || e.getAttribute("type") !== "range")) {
      if (zt(e, this.config.selectors.inputs.seek)) {
        e.setAttribute("aria-valuenow", this.currentTime);
        const t = $.formatTime(this.currentTime), s = $.formatTime(this.duration), n = Fe.get("seekLabel", this.config);
        e.setAttribute("aria-valuetext", n.replace("{currentTime}", t).replace("{duration}", s));
      } else if (zt(e, this.config.selectors.inputs.volume)) {
        const t = e.value * 100;
        e.setAttribute("aria-valuenow", t), e.setAttribute("aria-valuetext", `${t.toFixed(1)}%`);
      } else
        e.setAttribute("aria-valuenow", e.value);
      !Ue.isWebKit && !Ue.isIPadOS || e.style.setProperty("--value", `${e.value / e.max * 100}%`);
    }
  },
  // Update hover tooltip for seeking
  updateSeekTooltip(i) {
    var e, t;
    if (!this.config.tooltips.seek || !b.element(this.elements.inputs.seek) || !b.element(this.elements.display.seekTooltip) || this.duration === 0)
      return;
    const s = this.elements.display.seekTooltip, n = `${this.config.classNames.tooltip}--visible`, r = (u) => de(s, n, u);
    if (this.touch) {
      r(!1);
      return;
    }
    let a = 0;
    const o = this.elements.progress.getBoundingClientRect();
    if (b.event(i)) {
      const u = i.pageX - i.clientX;
      a = 100 / o.width * (i.pageX - o.left - u);
    } else if (Ii(s, n))
      a = Number.parseFloat(s.style.left, 10);
    else
      return;
    a < 0 ? a = 0 : a > 100 && (a = 100);
    const c = this.duration / 100 * a;
    s.textContent = $.formatTime(c);
    const l = (e = this.config.markers) === null || e === void 0 || (t = e.points) === null || t === void 0 ? void 0 : t.find(({
      time: u
    }) => u === Math.round(c));
    l && s.insertAdjacentHTML("afterbegin", `${l.label}<br>`), s.style.left = `${a}%`, b.event(i) && ["mouseenter", "mouseleave"].includes(i.type) && r(i.type === "mouseenter");
  },
  // Handle time change event
  timeUpdate(i) {
    const e = !b.element(this.elements.display.duration) && this.config.invertTime;
    $.updateTimeDisplay.call(this, this.elements.display.currentTime, e ? this.duration - this.currentTime : this.currentTime, e), !(i && i.type === "timeupdate" && this.media.seeking) && $.updateProgress.call(this, i);
  },
  // Show the duration on metadataloaded or durationchange events
  durationUpdate() {
    if (!this.supported.ui || !this.config.invertTime && this.currentTime)
      return;
    if (this.duration >= 2 ** 32) {
      qt(this.elements.display.currentTime, !0), qt(this.elements.progress, !0);
      return;
    }
    b.element(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
    const i = b.element(this.elements.display.duration);
    !i && this.config.displayDuration && this.paused && $.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), i && $.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), this.config.markers.enabled && $.setMarkers.call(this), $.updateSeekTooltip.call(this);
  },
  // Hide/show a tab
  toggleMenuButton(i, e) {
    qt(this.elements.settings.buttons[i], !e);
  },
  // Update the selected setting
  updateSetting(i, e, t) {
    const s = this.elements.settings.panels[i];
    let n = null, r = e;
    if (i === "captions")
      n = this.currentTrack;
    else {
      if (n = b.empty(t) ? this[i] : t, b.empty(n) && (n = this.config[i].default), !b.empty(this.options[i]) && !this.options[i].includes(n)) {
        this.debug.warn(`Unsupported value of '${n}' for ${i}`);
        return;
      }
      if (!this.config[i].options.includes(n)) {
        this.debug.warn(`Disabled value of '${n}' for ${i}`);
        return;
      }
    }
    if (b.element(r) || (r = s && s.querySelector('[role="menu"]')), !b.element(r))
      return;
    const a = this.elements.settings.buttons[i].querySelector(`.${this.config.classNames.menu.value}`);
    a.innerHTML = $.getLabel.call(this, i, n);
    const o = r && r.querySelector(`[value="${n}"]`);
    b.element(o) && (o.checked = !0);
  },
  // Translate a value into a nice label
  getLabel(i, e) {
    switch (i) {
      case "speed":
        return e === 1 ? Fe.get("normal", this.config) : `${e}&times;`;
      case "quality":
        if (b.number(e)) {
          const t = Fe.get(`qualityLabel.${e}`, this.config);
          return t.length ? t : `${e}p`;
        }
        return jl(e);
      case "captions":
        return he.getLabel.call(this);
      default:
        return null;
    }
  },
  // Set the quality menu
  setQualityMenu(i) {
    if (!b.element(this.elements.settings.panels.quality))
      return;
    const e = "quality", t = this.elements.settings.panels.quality.querySelector('[role="menu"]');
    b.array(i) && (this.options.quality = On(i).filter((r) => this.config.quality.options.includes(r)));
    const s = !b.empty(this.options.quality) && this.options.quality.length > 1;
    if ($.toggleMenuButton.call(this, e, s), ui(t), $.checkMenu.call(this), !s)
      return;
    const n = (r) => {
      const a = Fe.get(`qualityBadge.${r}`, this.config);
      return a.length ? $.createBadge.call(this, a) : null;
    };
    this.options.quality.sort((r, a) => {
      const o = this.config.quality.options;
      return o.indexOf(r) > o.indexOf(a) ? 1 : -1;
    }).forEach((r) => {
      $.createMenuItem.call(this, {
        value: r,
        list: t,
        type: e,
        title: $.getLabel.call(this, "quality", r),
        badge: n(r)
      });
    }), $.updateSetting.call(this, e, t);
  },
  // Set the looping options
  /* setLoopMenu() {
        // Menu required
        if (!is.element(this.elements.settings.panels.loop)) {
            return;
        }
         const options = ['start', 'end', 'all', 'reset'];
        const list = this.elements.settings.panels.loop.querySelector('[role="menu"]');
         // Show the pane and tab
        toggleHidden(this.elements.settings.buttons.loop, false);
        toggleHidden(this.elements.settings.panels.loop, false);
         // Toggle the pane and tab
        const toggle = !is.empty(this.loop.options);
        controls.toggleMenuButton.call(this, 'loop', toggle);
         // Empty the menu
        emptyElement(list);
         options.forEach(option => {
            const item = createElement('li');
             const button = createElement(
                'button',
                extend(getAttributesFromSelector(this.config.selectors.buttons.loop), {
                    type: 'button',
                    class: this.config.classNames.control,
                    'data-plyr-loop-action': option,
                }),
                i18n.get(option, this.config)
            );
             if (['start', 'end'].includes(option)) {
                const badge = controls.createBadge.call(this, '00:00');
                button.appendChild(badge);
            }
             item.appendChild(button);
            list.appendChild(item);
        });
    }, */
  // Get current selected caption language
  // TODO: rework this to user the getter in the API?
  // Set a list of available captions languages
  setCaptionsMenu() {
    if (!b.element(this.elements.settings.panels.captions))
      return;
    const i = "captions", e = this.elements.settings.panels.captions.querySelector('[role="menu"]'), t = he.getTracks.call(this), s = !!t.length;
    if ($.toggleMenuButton.call(this, i, s), ui(e), $.checkMenu.call(this), !s)
      return;
    const n = t.map((r, a) => ({
      value: a,
      checked: this.captions.toggled && this.currentTrack === a,
      title: he.getLabel.call(this, r),
      badge: r.language && $.createBadge.call(this, r.language.toUpperCase()),
      list: e,
      type: "language"
    }));
    n.unshift({
      value: -1,
      checked: !this.captions.toggled,
      title: Fe.get("disabled", this.config),
      list: e,
      type: "language"
    }), n.forEach($.createMenuItem.bind(this)), $.updateSetting.call(this, i, e);
  },
  // Set a list of available captions languages
  setSpeedMenu() {
    if (!b.element(this.elements.settings.panels.speed))
      return;
    const i = "speed", e = this.elements.settings.panels.speed.querySelector('[role="menu"]');
    this.options.speed = this.options.speed.filter((s) => s >= this.minimumSpeed && s <= this.maximumSpeed);
    const t = !b.empty(this.options.speed) && this.options.speed.length > 1;
    $.toggleMenuButton.call(this, i, t), ui(e), $.checkMenu.call(this), t && (this.options.speed.forEach((s) => {
      $.createMenuItem.call(this, {
        value: s,
        list: e,
        type: i,
        title: $.getLabel.call(this, "speed", s)
      });
    }), $.updateSetting.call(this, i, e));
  },
  // Check if we need to hide/show the settings menu
  checkMenu() {
    const {
      buttons: i
    } = this.elements.settings, e = !b.empty(i) && Object.values(i).some((t) => !t.hidden);
    qt(this.elements.settings.menu, !e);
  },
  // Focus the first menu item in a given (or visible) menu
  focusFirstMenuItem(i, e = !1) {
    if (this.elements.settings.popup.hidden)
      return;
    let t = i;
    b.element(t) || (t = Object.values(this.elements.settings.panels).find((n) => !n.hidden));
    const s = t.querySelector('[role^="menuitem"]');
    ln.call(this, s, e);
  },
  // Show/hide menu
  toggleMenu(i) {
    const {
      popup: e
    } = this.elements.settings, t = this.elements.buttons.settings;
    if (!b.element(e) || !b.element(t))
      return;
    const {
      hidden: s
    } = e;
    let n = s;
    if (b.boolean(i))
      n = i;
    else if (b.keyboardEvent(i) && i.key === "Escape")
      n = !1;
    else if (b.event(i)) {
      const r = b.function(i.composedPath) ? i.composedPath()[0] : i.target, a = e.contains(r);
      if (a || !a && i.target !== t && n)
        return;
    }
    t.setAttribute("aria-expanded", n), qt(e, !n), de(this.elements.container, this.config.classNames.menu.open, n), n && b.keyboardEvent(i) ? $.focusFirstMenuItem.call(this, null, !0) : !n && !s && ln.call(this, t, b.keyboardEvent(i));
  },
  // Get the natural size of a menu panel
  getMenuSize(i) {
    const e = i.cloneNode(!0);
    e.style.position = "absolute", e.style.opacity = 0, e.removeAttribute("hidden"), i.parentNode.appendChild(e);
    const t = e.scrollWidth, s = e.scrollHeight;
    return _t(e), {
      width: t,
      height: s
    };
  },
  // Show a panel in the menu
  showMenuPanel(i = "", e = !1) {
    const t = this.elements.container.querySelector(`#plyr-settings-${this.id}-${i}`);
    if (!b.element(t))
      return;
    const s = t.parentNode, n = Array.from(s.children).find((r) => !r.hidden);
    if (Ae.transitions && !Ae.reducedMotion) {
      s.style.width = `${n.scrollWidth}px`, s.style.height = `${n.scrollHeight}px`;
      const r = $.getMenuSize.call(this, t), a = (o) => {
        o.target !== s || !["width", "height"].includes(o.propertyName) || (s.style.width = "", s.style.height = "", Pi.call(this, s, Dn, a));
      };
      ue.call(this, s, Dn, a), s.style.width = `${r.width}px`, s.style.height = `${r.height}px`;
    }
    qt(n, !0), qt(t, !1), $.focusFirstMenuItem.call(this, t, e);
  },
  // Set the download URL
  setDownloadUrl() {
    const i = this.elements.buttons.download;
    b.element(i) && i.setAttribute("href", this.download);
  },
  // Build the default HTML
  create(i) {
    const {
      bindMenuItemShortcuts: e,
      createButton: t,
      createProgress: s,
      createRange: n,
      createTime: r,
      setQualityMenu: a,
      setSpeedMenu: o,
      showMenuPanel: c
    } = $;
    this.elements.controls = null, b.array(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(t.call(this, "play-large"));
    const l = Z("div", gt(this.config.selectors.controls.wrapper));
    this.elements.controls = l;
    const u = {
      class: "plyr__controls__item"
    };
    return On(b.array(this.config.controls) ? this.config.controls : []).forEach((h) => {
      if (h === "restart" && l.appendChild(t.call(this, "restart", u)), h === "rewind" && l.appendChild(t.call(this, "rewind", u)), h === "play" && l.appendChild(t.call(this, "play", u)), h === "fast-forward" && l.appendChild(t.call(this, "fast-forward", u)), h === "progress") {
        const d = Z("div", {
          class: `${u.class} plyr__progress__container`
        }), g = Z("div", gt(this.config.selectors.progress));
        if (g.appendChild(n.call(this, "seek", {
          id: `plyr-seek-${i.id}`
        })), g.appendChild(s.call(this, "buffer")), this.config.tooltips.seek) {
          const f = Z("span", {
            class: this.config.classNames.tooltip
          }, "00:00");
          g.appendChild(f), this.elements.display.seekTooltip = f;
        }
        this.elements.progress = g, d.appendChild(this.elements.progress), l.appendChild(d);
      }
      if (h === "current-time" && l.appendChild(r.call(this, "currentTime", u)), h === "duration" && l.appendChild(r.call(this, "duration", u)), h === "mute" || h === "volume") {
        let {
          volume: d
        } = this.elements;
        if ((!b.element(d) || !l.contains(d)) && (d = Z("div", xe({}, u, {
          class: `${u.class} plyr__volume`.trim()
        })), this.elements.volume = d, l.appendChild(d)), h === "mute" && d.appendChild(t.call(this, "mute")), h === "volume" && !Ue.isIos && !Ue.isIPadOS) {
          const g = {
            max: 1,
            step: 0.05,
            value: this.config.volume
          };
          d.appendChild(n.call(this, "volume", xe(g, {
            id: `plyr-volume-${i.id}`
          })));
        }
      }
      if (h === "captions" && l.appendChild(t.call(this, "captions", u)), h === "settings" && !b.empty(this.config.settings)) {
        const d = Z("div", xe({}, u, {
          class: `${u.class} plyr__menu`.trim(),
          hidden: ""
        }));
        d.appendChild(t.call(this, "settings", {
          "aria-haspopup": !0,
          "aria-controls": `plyr-settings-${i.id}`,
          "aria-expanded": !1
        }));
        const g = Z("div", {
          class: "plyr__menu__container",
          id: `plyr-settings-${i.id}`,
          hidden: ""
        }), f = Z("div"), m = Z("div", {
          id: `plyr-settings-${i.id}-home`
        }), p = Z("div", {
          role: "menu"
        });
        m.appendChild(p), f.appendChild(m), this.elements.settings.panels.home = m, this.config.settings.forEach((T) => {
          const E = Z("button", xe(gt(this.config.selectors.buttons.settings), {
            type: "button",
            class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
            role: "menuitem",
            "aria-haspopup": !0,
            hidden: ""
          }));
          e.call(this, E, T), ue.call(this, E, "click", () => {
            c.call(this, T, !1);
          });
          const v = Z("span", null, Fe.get(T, this.config)), x = Z("span", {
            class: this.config.classNames.menu.value
          });
          x.innerHTML = i[T], v.appendChild(x), E.appendChild(v), p.appendChild(E);
          const A = Z("div", {
            id: `plyr-settings-${i.id}-${T}`,
            hidden: ""
          }), _ = Z("button", {
            type: "button",
            class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
          });
          _.appendChild(Z("span", {
            "aria-hidden": !0
          }, Fe.get(T, this.config))), _.appendChild(Z("span", {
            class: this.config.classNames.hidden
          }, Fe.get("menuBack", this.config))), ue.call(this, A, "keydown", (S) => {
            S.key === "ArrowLeft" && (S.preventDefault(), S.stopPropagation(), c.call(this, "home", !0));
          }, !1), ue.call(this, _, "click", () => {
            c.call(this, "home", !1);
          }), A.appendChild(_), A.appendChild(Z("div", {
            role: "menu"
          })), f.appendChild(A), this.elements.settings.buttons[T] = E, this.elements.settings.panels[T] = A;
        }), g.appendChild(f), d.appendChild(g), l.appendChild(d), this.elements.settings.popup = g, this.elements.settings.menu = d;
      }
      if (h === "pip" && Ae.pip && l.appendChild(t.call(this, "pip", u)), h === "airplay" && Ae.airplay && l.appendChild(t.call(this, "airplay", u)), h === "download") {
        const d = xe({}, u, {
          element: "a",
          href: this.download,
          target: "_blank"
        });
        this.isHTML5 && (d.download = "");
        const {
          download: g
        } = this.config.urls;
        !b.url(g) && this.isEmbed && xe(d, {
          icon: `logo-${this.provider}`,
          label: this.provider
        }), l.appendChild(t.call(this, "download", d));
      }
      h === "fullscreen" && l.appendChild(t.call(this, "fullscreen", u));
    }), this.isHTML5 && a.call(this, Nt.getQualityOptions.call(this)), o.call(this), l;
  },
  // Insert controls
  inject() {
    if (this.config.loadSprite) {
      const a = $.getIconUrl.call(this);
      a.cors && Wl(a.url, "sprite-plyr");
    }
    this.id = Math.floor(Math.random() * 1e4);
    let i = null;
    this.elements.controls = null;
    const e = {
      id: this.id,
      seektime: this.config.seekTime,
      title: this.config.title
    };
    let t = !0;
    b.function(this.config.controls) && (this.config.controls = this.config.controls.call(this, e)), this.config.controls || (this.config.controls = []), b.element(this.config.controls) || b.string(this.config.controls) ? i = this.config.controls : (i = $.create.call(this, {
      id: this.id,
      seektime: this.config.seekTime,
      speed: this.speed,
      quality: this.quality,
      captions: he.getLabel.call(this)
      // TODO: Looping
      // loop: 'None',
    }), t = !1);
    const s = (a) => {
      let o = a;
      return Object.entries(e).forEach(([c, l]) => {
        o = xs(o, `{${c}}`, l);
      }), o;
    };
    t && b.string(this.config.controls) && (i = s(i));
    let n;
    b.string(this.config.selectors.controls.container) && (n = document.querySelector(this.config.selectors.controls.container)), b.element(n) || (n = this.elements.container);
    const r = b.element(i) ? "insertAdjacentElement" : "insertAdjacentHTML";
    if (n[r]("afterbegin", i), b.element(this.elements.controls) || $.findElements.call(this), !b.empty(this.elements.buttons)) {
      const a = (o) => {
        const c = this.config.classNames.controlPressed;
        o.setAttribute("aria-pressed", "false"), Object.defineProperty(o, "pressed", {
          configurable: !0,
          enumerable: !0,
          get() {
            return Ii(o, c);
          },
          set(l = !1) {
            de(o, c, l), o.setAttribute("aria-pressed", l ? "true" : "false");
          }
        });
      };
      Object.values(this.elements.buttons).filter(Boolean).forEach((o) => {
        b.array(o) || b.nodeList(o) ? Array.from(o).filter(Boolean).forEach(a) : a(o);
      });
    }
    if (Ue.isEdge && $l(n), this.config.tooltips.controls) {
      const {
        classNames: a,
        selectors: o
      } = this.config, c = `${o.controls.wrapper} ${o.labels} .${a.hidden}`, l = ws.call(this, c);
      Array.from(l).forEach((u) => {
        de(u, this.config.classNames.hidden, !1), de(u, this.config.classNames.tooltip, !0);
      });
    }
  },
  // Set media metadata
  setMediaMetadata() {
    try {
      "mediaSession" in navigator && (navigator.mediaSession.metadata = new window.MediaMetadata({
        title: this.config.mediaMetadata.title,
        artist: this.config.mediaMetadata.artist,
        album: this.config.mediaMetadata.album,
        artwork: this.config.mediaMetadata.artwork
      }));
    } catch {
    }
  },
  // Add markers
  setMarkers() {
    var i, e;
    if (!this.duration || this.elements.markers) return;
    const t = (i = this.config.markers) === null || i === void 0 || (e = i.points) === null || e === void 0 ? void 0 : e.filter(({
      time: c
    }) => c > 0 && c < this.duration);
    if (!(t != null && t.length)) return;
    const s = document.createDocumentFragment(), n = document.createDocumentFragment();
    let r = null;
    const a = `${this.config.classNames.tooltip}--visible`, o = (c) => de(r, a, c);
    t.forEach((c) => {
      const l = Z("span", {
        class: this.config.classNames.marker
      }, ""), u = `${c.time / this.duration * 100}%`;
      r && (l.addEventListener("mouseenter", () => {
        c.label || (r.style.left = u, r.innerHTML = c.label, o(!0));
      }), l.addEventListener("mouseleave", () => {
        o(!1);
      })), l.addEventListener("click", () => {
        this.currentTime = c.time;
      }), l.style.left = u, n.appendChild(l);
    }), s.appendChild(n), this.config.tooltips.seek || (r = Z("span", {
      class: this.config.classNames.tooltip
    }, ""), s.appendChild(r)), this.elements.markers = {
      points: n,
      tip: r
    }, this.elements.progress.appendChild(s);
  }
};
function Yl(i, e = !0) {
  let t = i;
  if (e) {
    const s = document.createElement("a");
    s.href = t, t = s.href;
  }
  try {
    return new URL(t);
  } catch {
    return null;
  }
}
function zl(i) {
  const e = new URLSearchParams();
  return b.object(i) && Object.entries(i).forEach(([t, s]) => {
    e.set(t, s);
  }), e;
}
const he = {
  // Setup captions
  setup() {
    if (!this.supported.ui)
      return;
    if (!this.isVideo || this.isYouTube || this.isHTML5 && !Ae.textTracks) {
      b.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && $.setCaptionsMenu.call(this);
      return;
    }
    if (b.element(this.elements.captions) || (this.elements.captions = Z("div", gt(this.config.selectors.captions)), this.elements.captions.setAttribute("dir", "auto"), ym(this.elements.captions, this.elements.wrapper)), Ue.isIE && window.URL) {
      const n = this.media.querySelectorAll("track");
      Array.from(n).forEach((r) => {
        const a = r.getAttribute("src"), o = Yl(a);
        o !== null && o.hostname !== window.location.href.hostname && ["http:", "https:"].includes(o.protocol) && Ns(a, "blob").then((c) => {
          r.setAttribute("src", window.URL.createObjectURL(c));
        }).catch(() => {
          _t(r);
        });
      });
    }
    const i = navigator.languages || [navigator.language || navigator.userLanguage || "en"], e = On(i.map((n) => n.split("-")[0]));
    let t = (this.storage.get("language") || this.captions.language || this.config.captions.language || "auto").toLowerCase();
    t === "auto" && ([t] = e);
    let s = this.storage.get("captions") || this.captions.active;
    if (b.boolean(s) || ({
      active: s
    } = this.config.captions), Object.assign(this.captions, {
      toggled: !1,
      active: s,
      language: t,
      languages: e
    }), this.isHTML5) {
      const n = this.config.captions.update ? "addtrack removetrack" : "removetrack";
      ue.call(this, this.media.textTracks, n, he.update.bind(this));
    }
    setTimeout(he.update.bind(this), 0);
  },
  // Update available language options in settings based on tracks
  update() {
    const i = he.getTracks.call(this, !0), {
      active: e,
      language: t,
      meta: s,
      currentTrackNode: n
    } = this.captions, r = !!i.find((a) => a.language === t);
    this.isHTML5 && this.isVideo && i.filter((a) => !s.get(a)).forEach((a) => {
      this.debug.log("Track added", a), s.set(a, {
        default: a.mode === "showing"
      }), a.mode === "showing" && (a.mode = "hidden"), ue.call(this, a, "cuechange", () => he.updateCues.call(this));
    }), (r && this.language !== t || !i.includes(n)) && (he.setLanguage.call(this, t), he.toggle.call(this, e && r)), this.elements && de(this.elements.container, this.config.classNames.captions.enabled, !b.empty(i)), b.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && $.setCaptionsMenu.call(this);
  },
  // Toggle captions display
  // Used internally for the toggleCaptions method, with the passive option forced to false
  toggle(i, e = !0) {
    if (!this.supported.ui)
      return;
    const {
      toggled: t
    } = this.captions, s = this.config.classNames.captions.active, n = b.nullOrUndefined(i) ? !t : i;
    if (n !== t) {
      if (e || (this.captions.active = n, this.storage.set({
        captions: n
      })), !this.language && n && !e) {
        const r = he.getTracks.call(this), a = he.findTrack.call(this, [this.captions.language, ...this.captions.languages], !0);
        this.captions.language = a.language, he.set.call(this, r.indexOf(a));
        return;
      }
      this.elements.buttons.captions && (this.elements.buttons.captions.pressed = n), de(this.elements.container, s, n), this.captions.toggled = n, $.updateSetting.call(this, "captions"), J.call(this, this.media, n ? "captionsenabled" : "captionsdisabled");
    }
    setTimeout(() => {
      n && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden");
    });
  },
  // Set captions by track index
  // Used internally for the currentTrack setter with the passive option forced to false
  set(i, e = !0) {
    const t = he.getTracks.call(this);
    if (i === -1) {
      he.toggle.call(this, !1, e);
      return;
    }
    if (!b.number(i)) {
      this.debug.warn("Invalid caption argument", i);
      return;
    }
    if (!(i in t)) {
      this.debug.warn("Track not found", i);
      return;
    }
    if (this.captions.currentTrack !== i) {
      this.captions.currentTrack = i;
      const s = t[i], {
        language: n
      } = s || {};
      this.captions.currentTrackNode = s, $.updateSetting.call(this, "captions"), e || (this.captions.language = n, this.storage.set({
        language: n
      })), this.isVimeo && this.embed.enableTextTrack(n, null, !1), J.call(this, this.media, "languagechange");
    }
    he.toggle.call(this, !0, e), this.isHTML5 && this.isVideo && he.updateCues.call(this);
  },
  // Set captions by language
  // Used internally for the language setter with the passive option forced to false
  setLanguage(i, e = !0) {
    if (!b.string(i)) {
      this.debug.warn("Invalid language argument", i);
      return;
    }
    const t = i.toLowerCase();
    this.captions.language = t;
    const s = he.getTracks.call(this), n = he.findTrack.call(this, [t]);
    he.set.call(this, s.indexOf(n), e);
  },
  // Get current valid caption tracks
  // If update is false it will also ignore tracks without metadata
  // This is used to "freeze" the language options when captions.update is false
  getTracks(i = !1) {
    return Array.from((this.media || {}).textTracks || []).filter((t) => !this.isHTML5 || i || this.captions.meta.has(t)).filter((t) => ["captions", "subtitles"].includes(t.kind));
  },
  // Match tracks based on languages and get the first
  findTrack(i, e = !1) {
    const t = he.getTracks.call(this), s = (a) => Number((this.captions.meta.get(a) || {}).default), n = Array.from(t).sort((a, o) => s(o) - s(a));
    let r;
    return i.every((a) => (r = n.find((o) => o.language === a), !r)), r || (e ? n[0] : void 0);
  },
  // Get the current track
  getCurrentTrack() {
    return he.getTracks.call(this)[this.currentTrack];
  },
  // Get UI label for track
  getLabel(i) {
    let e = i;
    return !b.track(e) && Ae.textTracks && this.captions.toggled && (e = he.getCurrentTrack.call(this)), b.track(e) ? b.empty(e.label) ? b.empty(e.language) ? Fe.get("enabled", this.config) : i.language.toUpperCase() : e.label : Fe.get("disabled", this.config);
  },
  // Update captions using current track's active cues
  // Also optional array argument in case there isn't any track (ex: vimeo)
  updateCues(i) {
    if (!this.supported.ui)
      return;
    if (!b.element(this.elements.captions)) {
      this.debug.warn("No captions element to render to");
      return;
    }
    if (!b.nullOrUndefined(i) && !Array.isArray(i)) {
      this.debug.warn("updateCues: Invalid input", i);
      return;
    }
    let e = i;
    if (!e) {
      const n = he.getCurrentTrack.call(this);
      e = Array.from((n || {}).activeCues || []).map((r) => r.getCueAsHTML()).map(Pm);
    }
    const t = e.map((n) => n.trim()).join(`
`);
    if (t !== this.elements.captions.innerHTML) {
      ui(this.elements.captions);
      const n = Z("span", gt(this.config.selectors.caption));
      n.innerHTML = t, this.elements.captions.appendChild(n), J.call(this, this.media, "cuechange");
    }
  }
}, Xl = {
  // Disable
  enabled: !0,
  // Custom media title
  title: "",
  // Logging to console
  debug: !1,
  // Auto play (if supported)
  autoplay: !1,
  // Only allow one media playing at once (vimeo only)
  autopause: !0,
  // Allow inline playback on iOS
  playsinline: !0,
  // Default time to skip when rewind/fast forward
  seekTime: 10,
  // Default volume
  volume: 1,
  muted: !1,
  // Pass a custom duration
  duration: null,
  // Display the media duration on load in the current time position
  // If you have opted to display both duration and currentTime, this is ignored
  displayDuration: !0,
  // Invert the current time to be a countdown
  invertTime: !0,
  // Clicking the currentTime inverts it's value to show time left rather than elapsed
  toggleInvert: !0,
  // Force an aspect ratio
  // The format must be `'w:h'` (e.g. `'16:9'`)
  ratio: null,
  // Click video container to play/pause
  clickToPlay: !0,
  // Auto hide the controls
  hideControls: !0,
  // Reset to start when playback ended
  resetOnEnd: !1,
  // Disable the standard context menu
  disableContextMenu: !0,
  // Sprite (for icons)
  loadSprite: !0,
  iconPrefix: "plyr",
  iconUrl: "https://cdn.plyr.io/3.8.4/plyr.svg",
  // Blank video (used to prevent errors on source change)
  blankVideo: "https://cdn.plyr.io/static/blank.mp4",
  // Quality default
  quality: {
    default: 576,
    // The options to display in the UI, if available for the source media
    options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
    forced: !1,
    onChange: null
  },
  // Set loops
  loop: {
    active: !1
    // start: null,
    // end: null,
  },
  // Speed default and options to display
  speed: {
    selected: 1,
    // The options to display in the UI, if available for the source media (e.g. Vimeo and YouTube only support 0.5x-4x)
    options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4]
  },
  // Keyboard shortcut settings
  keyboard: {
    focused: !0,
    global: !1
  },
  // Display tooltips
  tooltips: {
    controls: !1,
    seek: !0
  },
  // Captions settings
  captions: {
    active: !1,
    language: "auto",
    // Listen to new tracks added after Plyr is initialized.
    // This is needed for streaming captions, but may result in unselectable options
    update: !1
  },
  // Fullscreen settings
  fullscreen: {
    enabled: !0,
    // Allow fullscreen?
    fallback: !0,
    // Fallback using full viewport/window
    iosNative: !1
    // Use the native fullscreen in iOS (disables custom controls)
    // Selector for the fullscreen container so contextual / non-player content can remain visible in fullscreen mode
    // Non-ancestors of the player element will be ignored
    // container: null, // defaults to the player element
  },
  // Local storage
  storage: {
    enabled: !0,
    key: "plyr"
  },
  // Default controls
  controls: [
    "play-large",
    // 'restart',
    // 'rewind',
    "play",
    // 'fast-forward',
    "progress",
    "current-time",
    // 'duration',
    "mute",
    "volume",
    "captions",
    "settings",
    "pip",
    "airplay",
    // 'download',
    "fullscreen"
  ],
  settings: ["captions", "quality", "speed"],
  // Localisation
  i18n: {
    restart: "Restart",
    rewind: "Rewind {seektime}s",
    play: "Play",
    pause: "Pause",
    fastForward: "Forward {seektime}s",
    seek: "Seek",
    seekLabel: "{currentTime} of {duration}",
    played: "Played",
    buffered: "Buffered",
    currentTime: "Current time",
    duration: "Duration",
    volume: "Volume",
    mute: "Mute",
    unmute: "Unmute",
    enableCaptions: "Enable captions",
    disableCaptions: "Disable captions",
    download: "Download",
    enterFullscreen: "Enter fullscreen",
    exitFullscreen: "Exit fullscreen",
    frameTitle: "Player for {title}",
    captions: "Captions",
    settings: "Settings",
    pip: "PIP",
    menuBack: "Go back to previous menu",
    speed: "Speed",
    normal: "Normal",
    quality: "Quality",
    loop: "Loop",
    start: "Start",
    end: "End",
    all: "All",
    reset: "Reset",
    disabled: "Disabled",
    enabled: "Enabled",
    advertisement: "Ad",
    qualityBadge: {
      2160: "4K",
      1440: "HD",
      1080: "HD",
      720: "HD",
      576: "SD",
      480: "SD"
    }
  },
  // URLs
  urls: {
    download: null,
    vimeo: {
      sdk: "https://player.vimeo.com/api/player.js",
      iframe: "https://player.vimeo.com/video/{0}?{1}",
      api: "https://vimeo.com/api/oembed.json?url={0}"
    },
    youtube: {
      sdk: "https://www.youtube.com/iframe_api",
      api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
    },
    googleIMA: {
      sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
    }
  },
  // Custom control listeners
  listeners: {
    seek: null,
    play: null,
    pause: null,
    restart: null,
    rewind: null,
    fastForward: null,
    mute: null,
    volume: null,
    captions: null,
    download: null,
    fullscreen: null,
    pip: null,
    airplay: null,
    speed: null,
    quality: null,
    loop: null,
    language: null
  },
  // Events to watch and bubble
  events: [
    // Events to watch on HTML5 media elements and bubble
    // https://developer.mozilla.org/en/docs/Web/Guide/Events/Media_events
    "ended",
    "progress",
    "stalled",
    "playing",
    "waiting",
    "canplay",
    "canplaythrough",
    "loadstart",
    "loadeddata",
    "loadedmetadata",
    "timeupdate",
    "volumechange",
    "play",
    "pause",
    "error",
    "seeking",
    "seeked",
    "emptied",
    "ratechange",
    "cuechange",
    // Custom events
    "download",
    "enterfullscreen",
    "exitfullscreen",
    "captionsenabled",
    "captionsdisabled",
    "languagechange",
    "controlshidden",
    "controlsshown",
    "ready",
    // YouTube
    "statechange",
    // Quality
    "qualitychange",
    // Ads
    "adsloaded",
    "adscontentpause",
    "adscontentresume",
    "adstarted",
    "adsmidpoint",
    "adscomplete",
    "adsallcomplete",
    "adsimpression",
    "adsclick"
  ],
  // Selectors
  // Change these to match your template if using custom HTML
  selectors: {
    editable: "input, textarea, select, [contenteditable]",
    container: ".plyr",
    controls: {
      container: null,
      wrapper: ".plyr__controls"
    },
    labels: "[data-plyr]",
    buttons: {
      play: '[data-plyr="play"]',
      pause: '[data-plyr="pause"]',
      restart: '[data-plyr="restart"]',
      rewind: '[data-plyr="rewind"]',
      fastForward: '[data-plyr="fast-forward"]',
      mute: '[data-plyr="mute"]',
      captions: '[data-plyr="captions"]',
      download: '[data-plyr="download"]',
      fullscreen: '[data-plyr="fullscreen"]',
      pip: '[data-plyr="pip"]',
      airplay: '[data-plyr="airplay"]',
      settings: '[data-plyr="settings"]',
      loop: '[data-plyr="loop"]'
    },
    inputs: {
      seek: '[data-plyr="seek"]',
      volume: '[data-plyr="volume"]',
      speed: '[data-plyr="speed"]',
      language: '[data-plyr="language"]',
      quality: '[data-plyr="quality"]'
    },
    display: {
      currentTime: ".plyr__time--current",
      duration: ".plyr__time--duration",
      buffer: ".plyr__progress__buffer",
      loop: ".plyr__progress__loop",
      // Used later
      volume: ".plyr__volume--display"
    },
    progress: ".plyr__progress",
    captions: ".plyr__captions",
    caption: ".plyr__caption"
  },
  // Class hooks added to the player in different states
  classNames: {
    type: "plyr--{0}",
    provider: "plyr--{0}",
    video: "plyr__video-wrapper",
    embed: "plyr__video-embed",
    videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
    embedContainer: "plyr__video-embed__container",
    poster: "plyr__poster",
    posterEnabled: "plyr__poster-enabled",
    ads: "plyr__ads",
    control: "plyr__control",
    controlPressed: "plyr__control--pressed",
    playing: "plyr--playing",
    paused: "plyr--paused",
    stopped: "plyr--stopped",
    loading: "plyr--loading",
    hover: "plyr--hover",
    tooltip: "plyr__tooltip",
    cues: "plyr__cues",
    marker: "plyr__progress__marker",
    hidden: "plyr__sr-only",
    hideControls: "plyr--hide-controls",
    isTouch: "plyr--is-touch",
    uiSupported: "plyr--full-ui",
    noTransition: "plyr--no-transition",
    display: {
      time: "plyr__time"
    },
    menu: {
      value: "plyr__menu__value",
      badge: "plyr__badge",
      open: "plyr--menu-open"
    },
    captions: {
      enabled: "plyr--captions-enabled",
      active: "plyr--captions-active"
    },
    fullscreen: {
      enabled: "plyr--fullscreen-enabled",
      fallback: "plyr--fullscreen-fallback"
    },
    pip: {
      supported: "plyr--pip-supported",
      active: "plyr--pip-active"
    },
    airplay: {
      supported: "plyr--airplay-supported",
      active: "plyr--airplay-active"
    },
    previewThumbnails: {
      // Tooltip thumbs
      thumbContainer: "plyr__preview-thumb",
      thumbContainerShown: "plyr__preview-thumb--is-shown",
      imageContainer: "plyr__preview-thumb__image-container",
      timeContainer: "plyr__preview-thumb__time-container",
      // Scrubbing
      scrubbingContainer: "plyr__preview-scrubbing",
      scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
    }
  },
  // Embed attributes
  attributes: {
    embed: {
      provider: "data-plyr-provider",
      id: "data-plyr-embed-id",
      hash: "data-plyr-embed-hash"
    }
  },
  // Advertisements plugin
  // Register for an account here: http://vi.ai/publisher-video-monetization/?aid=plyrio
  ads: {
    enabled: !1,
    publisherId: "",
    tagUrl: ""
  },
  // Preview Thumbnails plugin
  previewThumbnails: {
    enabled: !1,
    src: "",
    withCredentials: !1
  },
  // Vimeo plugin
  vimeo: {
    byline: !1,
    portrait: !1,
    title: !1,
    speed: !0,
    transparent: !1,
    // Custom settings from Plyr
    customControls: !0,
    referrerPolicy: null,
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/referrerPolicy
    // Whether the owner of the video has a Pro or Business account
    // (which allows us to properly hide controls without CSS hacks, etc)
    premium: !1
  },
  // YouTube plugin
  youtube: {
    rel: 0,
    // No related vids
    showinfo: 0,
    // Hide info
    iv_load_policy: 3,
    // Hide annotations
    modestbranding: 1,
    // Hide logos as much as possible (they still show one in the corner when paused)
    // Custom settings from Plyr
    customControls: !0,
    noCookie: !1
    // Whether to use an alternative version of YouTube without cookies
  },
  // Media Metadata
  mediaMetadata: {
    title: "",
    artist: "",
    album: "",
    artwork: []
  },
  // Markers
  markers: {
    enabled: !1,
    points: []
  }
}, cn = {
  active: "picture-in-picture",
  inactive: "inline"
}, Ft = {
  html5: "html5",
  youtube: "youtube",
  vimeo: "vimeo"
}, un = {
  audio: "audio",
  video: "video"
};
function Fm(i) {
  return /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(i) ? Ft.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(i) ? Ft.vimeo : null;
}
function hn() {
}
class Nm {
  constructor(e = !1) {
    this.enabled = window.console && e, this.enabled && this.log("Debugging enabled");
  }
  get log() {
    return this.enabled ? Function.prototype.bind.call(console.log, console) : hn;
  }
  get warn() {
    return this.enabled ? Function.prototype.bind.call(console.warn, console) : hn;
  }
  get error() {
    return this.enabled ? Function.prototype.bind.call(console.error, console) : hn;
  }
}
class lt {
  constructor(e) {
    U(this, "onChange", () => {
      if (!this.supported) return;
      const t = this.player.elements.buttons.fullscreen;
      b.element(t) && (t.pressed = this.active);
      const s = this.target === this.player.media ? this.target : this.player.elements.container;
      J.call(this.player, s, this.active ? "enterfullscreen" : "exitfullscreen", !0);
    }), U(this, "toggleFallback", (t = !1) => {
      if (t) {
        var s, n;
        this.scrollPosition = {
          x: (s = window.scrollX) !== null && s !== void 0 ? s : 0,
          y: (n = window.scrollY) !== null && n !== void 0 ? n : 0
        };
      } else
        window.scrollTo(this.scrollPosition.x, this.scrollPosition.y);
      if (document.body.style.overflow = t ? "hidden" : "", de(this.target, this.player.config.classNames.fullscreen.fallback, t), Ue.isIos) {
        let r = document.head.querySelector('meta[name="viewport"]');
        const a = "viewport-fit=cover";
        r || (r = document.createElement("meta"), r.setAttribute("name", "viewport"));
        const o = b.string(r.content) && r.content.includes(a);
        t ? (this.cleanupViewport = !o, o || (r.content += `,${a}`)) : this.cleanupViewport && (r.content = r.content.split(",").filter((c) => c.trim() !== a).join(","));
      }
      this.onChange();
    }), U(this, "trapFocus", (t) => {
      if (Ue.isIos || Ue.isIPadOS || !this.active || t.key !== "Tab") return;
      const s = document.activeElement, n = ws.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"), [r] = n, a = n[n.length - 1];
      s === a && !t.shiftKey ? (r.focus(), t.preventDefault()) : s === r && t.shiftKey && (a.focus(), t.preventDefault());
    }), U(this, "update", () => {
      if (this.supported) {
        let t;
        this.forceFallback ? t = "Fallback (forced)" : lt.nativeSupported ? t = "Native" : t = "Fallback", this.player.debug.log(`${t} fullscreen enabled`);
      } else
        this.player.debug.log("Fullscreen not supported and fallback disabled");
      de(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.supported);
    }), U(this, "enter", () => {
      this.supported && (Ue.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !lt.nativeSupported || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? b.empty(this.prefix) || this.target[`${this.prefix}Request${this.property}`]() : this.target.requestFullscreen({
        navigationUI: "hide"
      }));
    }), U(this, "exit", () => {
      if (this.supported) {
        if (Ue.isIos && this.player.config.fullscreen.iosNative)
          this.player.isVimeo ? this.player.embed.exitFullscreen() : this.target.webkitEnterFullscreen(), pt(this.player.play());
        else if (!lt.nativeSupported || this.forceFallback)
          this.toggleFallback(!1);
        else if (!this.prefix)
          (document.cancelFullScreen || document.exitFullscreen).call(document);
        else if (!b.empty(this.prefix)) {
          const t = this.prefix === "moz" ? "Cancel" : "Exit";
          document[`${this.prefix}${t}${this.property}`]();
        }
      }
    }), U(this, "toggle", () => {
      this.active ? this.exit() : this.enter();
    }), this.player = e, this.prefix = lt.prefix, this.property = lt.property, this.scrollPosition = {
      x: 0,
      y: 0
    }, this.forceFallback = e.config.fullscreen.fallback === "force", this.player.elements.fullscreen = e.config.fullscreen.container && Tm(this.player.elements.container, e.config.fullscreen.container), ue.call(this.player, document, this.prefix === "ms" ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`, () => {
      this.onChange();
    }), ue.call(this.player, this.player.elements.container, "dblclick", (t) => {
      b.element(this.player.elements.controls) && this.player.elements.controls.contains(t.target) || this.player.listeners.proxy(t, this.toggle, "fullscreen");
    }), ue.call(this, this.player.elements.container, "keydown", (t) => this.trapFocus(t)), this.update();
  }
  // Determine if native supported
  static get nativeSupported() {
    return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
  }
  // If we're actually using native
  get useNative() {
    return lt.nativeSupported && !this.forceFallback;
  }
  // Get the prefix for handlers
  static get prefix() {
    if (b.function(document.exitFullscreen)) return "";
    let e = "";
    return ["webkit", "moz", "ms"].some((s) => b.function(document[`${s}ExitFullscreen`]) || b.function(document[`${s}CancelFullScreen`]) ? (e = s, !0) : !1), e;
  }
  static get property() {
    return this.prefix === "moz" ? "FullScreen" : "Fullscreen";
  }
  // Determine if fullscreen is supported
  get supported() {
    return [
      // Fullscreen is enabled in config
      this.player.config.fullscreen.enabled,
      // Must be a video
      this.player.isVideo,
      // Either native is supported or fallback enabled
      lt.nativeSupported || this.player.config.fullscreen.fallback,
      // YouTube has no way to trigger fullscreen, so on devices with no native support, playsinline
      // must be enabled and iosNative fullscreen must be disabled to offer the fullscreen fallback
      !this.player.isYouTube || lt.nativeSupported || !Ue.isIos || this.player.config.playsinline && !this.player.config.fullscreen.iosNative
    ].every(Boolean);
  }
  // Get active state
  get active() {
    if (!this.supported) return !1;
    if (!lt.nativeSupported || this.forceFallback)
      return Ii(this.target, this.player.config.classNames.fullscreen.fallback);
    const e = this.prefix ? this.target.getRootNode()[`${this.prefix}${this.property}Element`] : this.target.getRootNode().fullscreenElement;
    return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target;
  }
  // Get target element
  get target() {
    var e;
    return Ue.isIos && this.player.config.fullscreen.iosNative ? this.player.media : (e = this.player.elements.fullscreen) !== null && e !== void 0 ? e : this.player.elements.container;
  }
}
function hi(i, e = 1) {
  return new Promise((t, s) => {
    const n = new Image(), r = () => {
      delete n.onload, delete n.onerror, (n.naturalWidth >= e ? t : s)(n);
    };
    Object.assign(n, {
      onload: r,
      onerror: r,
      src: i
    });
  });
}
const me = {
  addStyleHook() {
    de(this.elements.container, this.config.selectors.container.replace(".", ""), !0), de(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
  },
  // Toggle native HTML5 media controls
  toggleNativeControls(i = !1) {
    i && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
  },
  // Setup the UI
  build() {
    if (this.listeners.media(), !this.supported.ui) {
      this.debug.warn(`Basic support only for ${this.provider} ${this.type}`), me.toggleNativeControls.call(this, !0);
      return;
    }
    b.element(this.elements.controls) || ($.inject.call(this), this.listeners.controls()), me.toggleNativeControls.call(this), this.isHTML5 && he.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, $.updateVolume.call(this), $.timeUpdate.call(this), $.durationUpdate.call(this), me.checkPlaying.call(this), de(this.elements.container, this.config.classNames.pip.supported, Ae.pip && this.isHTML5 && this.isVideo), de(this.elements.container, this.config.classNames.airplay.supported, Ae.airplay && this.isHTML5), de(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(() => {
      J.call(this, this.media, "ready");
    }, 0), me.setTitle.call(this), this.poster && me.setPoster.call(this, this.poster, !1).catch(() => {
    }), this.config.duration && $.durationUpdate.call(this), this.config.mediaMetadata && $.setMediaMetadata.call(this);
  },
  // Setup aria attribute for play and iframe title
  setTitle() {
    let i = Fe.get("play", this.config);
    if (b.string(this.config.title) && !b.empty(this.config.title) && (i += `, ${this.config.title}`), Array.from(this.elements.buttons.play || []).forEach((e) => {
      e.setAttribute("aria-label", i);
    }), this.isEmbed) {
      const e = we.call(this, "iframe");
      if (!b.element(e))
        return;
      const t = b.empty(this.config.title) ? "video" : this.config.title, s = Fe.get("frameTitle", this.config);
      e.setAttribute("title", s.replace("{title}", t));
    }
  },
  // Toggle poster
  togglePoster(i) {
    de(this.elements.container, this.config.classNames.posterEnabled, i);
  },
  // Set the poster image (async)
  // Used internally for the poster setter, with the passive option forced to false
  setPoster(i, e = !0) {
    return e && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", i), this.elements.poster.removeAttribute("hidden"), bm.call(this).then(() => hi(i)).catch((t) => {
      throw i === this.poster && me.togglePoster.call(this, !1), t;
    }).then(() => {
      if (i !== this.poster)
        throw new Error("setPoster cancelled by later call to setPoster");
    }).then(() => (Object.assign(this.elements.poster.style, {
      backgroundImage: `url('${i}')`,
      // Reset backgroundSize as well (since it can be set to "cover" for padded thumbnails for youtube)
      backgroundSize: ""
    }), me.togglePoster.call(this, !0), i)));
  },
  // Check playing state
  checkPlaying(i) {
    de(this.elements.container, this.config.classNames.playing, this.playing), de(this.elements.container, this.config.classNames.paused, this.paused), de(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((e) => {
      Object.assign(e, {
        pressed: this.playing
      }), e.setAttribute("aria-label", Fe.get(this.playing ? "pause" : "play", this.config));
    }), !(b.event(i) && i.type === "timeupdate") && me.toggleControls.call(this);
  },
  // Check if media is loading
  checkLoading(i) {
    this.loading = ["stalled", "waiting"].includes(i.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(() => {
      de(this.elements.container, this.config.classNames.loading, this.loading), me.toggleControls.call(this);
    }, this.loading ? 250 : 0);
  },
  // Toggle controls based on state and `force` argument
  toggleControls(i) {
    const {
      controls: e
    } = this.elements;
    if (e && this.config.hideControls) {
      const t = this.touch && this.lastSeekTime + 2e3 > Date.now();
      this.toggleControls(!!(i || this.loading || this.paused || e.pressed || e.hover || t));
    }
  },
  // Migrate any custom properties from the media to the parent
  migrateStyles() {
    Object.values({
      ...this.media.style
    }).filter((i) => !b.empty(i) && b.string(i) && i.startsWith("--plyr")).forEach((i) => {
      this.elements.container.style.setProperty(i, this.media.style.getPropertyValue(i)), this.media.style.removeProperty(i);
    }), b.empty(this.media.style) && this.media.removeAttribute("style");
  }
};
class $m {
  constructor(e) {
    U(this, "firstTouch", () => {
      const {
        player: t
      } = this, {
        elements: s
      } = t;
      t.touch = !0, de(s.container, t.config.classNames.isTouch, !0);
    }), U(this, "global", (t = !0) => {
      const {
        player: s
      } = this;
      s.config.keyboard.global && Ds.call(s, window, "keydown keyup", this.handleKey, t, !1), Ds.call(s, document.body, "click", this.toggleMenu, t), gr.call(s, document.body, "touchstart", this.firstTouch);
    }), U(this, "container", () => {
      const {
        player: t
      } = this, {
        config: s,
        elements: n,
        timers: r
      } = t;
      !s.keyboard.global && s.keyboard.focused && ue.call(t, n.container, "keydown keyup", this.handleKey, !1), ue.call(t, n.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (c) => {
        const {
          controls: l
        } = n;
        l && c.type === "enterfullscreen" && (l.pressed = !1, l.hover = !1);
        const u = ["touchstart", "touchmove", "mousemove"].includes(c.type);
        let h = 0;
        u && (me.toggleControls.call(t, !0), h = t.touch ? 3e3 : 2e3), clearTimeout(r.controls), r.controls = setTimeout(() => me.toggleControls.call(t, !1), h);
      });
      const a = () => {
        if (!t.isVimeo || t.config.vimeo.premium)
          return;
        const c = n.wrapper, {
          active: l
        } = t.fullscreen, [u, h] = mr.call(t), d = Kl(`aspect-ratio: ${u} / ${h}`);
        if (!l) {
          d ? (c.style.width = null, c.style.height = null) : (c.style.maxWidth = null, c.style.margin = null);
          return;
        }
        const [g, f] = Sm(), m = g / f > u / h;
        d ? (c.style.width = m ? "auto" : "100%", c.style.height = m ? "100%" : "auto") : (c.style.maxWidth = m ? `${f / h * u}px` : null, c.style.margin = m ? "0 auto" : null);
      }, o = () => {
        clearTimeout(r.resized), r.resized = setTimeout(a, 50);
      };
      ue.call(t, n.container, "enterfullscreen exitfullscreen", (c) => {
        const {
          target: l
        } = t.fullscreen;
        if (l !== n.container || !t.isEmbed && b.empty(t.config.ratio))
          return;
        a(), (c.type === "enterfullscreen" ? ue : Pi).call(t, window, "resize", o);
      });
    }), U(this, "media", () => {
      const {
        player: t
      } = this, {
        elements: s
      } = t;
      if (ue.call(t, t.media, "timeupdate seeking seeked", (r) => $.timeUpdate.call(t, r)), ue.call(t, t.media, "durationchange loadeddata loadedmetadata", (r) => $.durationUpdate.call(t, r)), ue.call(t, t.media, "ended", () => {
        t.isHTML5 && t.isVideo && t.config.resetOnEnd && (t.restart(), t.pause());
      }), ue.call(t, t.media, "progress playing seeking seeked", (r) => $.updateProgress.call(t, r)), ue.call(t, t.media, "volumechange", (r) => $.updateVolume.call(t, r)), ue.call(t, t.media, "playing play pause ended emptied timeupdate", (r) => me.checkPlaying.call(t, r)), ue.call(t, t.media, "waiting canplay seeked playing", (r) => me.checkLoading.call(t, r)), t.supported.ui && t.config.clickToPlay && !t.isAudio) {
        const r = we.call(t, `.${t.config.classNames.video}`);
        if (!b.element(r))
          return;
        ue.call(t, s.container, "click", (a) => {
          ![s.container, r].includes(a.target) && !r.contains(a.target) || t.touch && t.config.hideControls || (t.ended ? (this.proxy(a, t.restart, "restart"), this.proxy(a, () => {
            pt(t.play());
          }, "play")) : this.proxy(a, () => {
            pt(t.togglePlay());
          }, "play"));
        });
      }
      t.supported.ui && t.config.disableContextMenu && ue.call(t, s.wrapper, "contextmenu", (r) => {
        r.preventDefault();
      }, !1), ue.call(t, t.media, "volumechange", () => {
        t.storage.set({
          volume: t.volume,
          muted: t.muted
        });
      }), ue.call(t, t.media, "ratechange", () => {
        $.updateSetting.call(t, "speed"), t.storage.set({
          speed: t.speed
        });
      }), ue.call(t, t.media, "qualitychange", (r) => {
        $.updateSetting.call(t, "quality", null, r.detail.quality);
      }), ue.call(t, t.media, "ready qualitychange", () => {
        $.setDownloadUrl.call(t);
      });
      const n = t.config.events.concat(["keyup", "keydown"]).join(" ");
      ue.call(t, t.media, n, (r) => {
        let {
          detail: a = {}
        } = r;
        r.type === "error" && (a = t.media.error), J.call(t, s.container, r.type, !0, a);
      });
    }), U(this, "proxy", (t, s, n) => {
      const {
        player: r
      } = this, a = r.config.listeners[n], o = b.function(a);
      let c = !0;
      o && (c = a.call(r, t)), c !== !1 && b.function(s) && s.call(r, t);
    }), U(this, "bind", (t, s, n, r, a = !0) => {
      const {
        player: o
      } = this, c = o.config.listeners[r], l = b.function(c);
      ue.call(o, t, s, (u) => this.proxy(u, n, r), a && !l);
    }), U(this, "controls", () => {
      const {
        player: t
      } = this, {
        elements: s
      } = t, n = Ue.isIE ? "change" : "input";
      if (s.buttons.play && Array.from(s.buttons.play).forEach((r) => {
        this.bind(r, "click", () => {
          pt(t.togglePlay());
        }, "play");
      }), this.bind(s.buttons.restart, "click", t.restart, "restart"), this.bind(s.buttons.rewind, "click", () => {
        t.lastSeekTime = Date.now(), t.rewind();
      }, "rewind"), this.bind(s.buttons.fastForward, "click", () => {
        t.lastSeekTime = Date.now(), t.forward();
      }, "fastForward"), this.bind(s.buttons.mute, "click", () => {
        t.muted = !t.muted;
      }, "mute"), this.bind(s.buttons.captions, "click", () => t.toggleCaptions()), this.bind(s.buttons.download, "click", () => {
        J.call(t, t.media, "download");
      }, "download"), this.bind(s.buttons.fullscreen, "click", () => {
        t.fullscreen.toggle();
      }, "fullscreen"), this.bind(s.buttons.pip, "click", () => {
        t.pip = "toggle";
      }, "pip"), this.bind(s.buttons.airplay, "click", t.airplay, "airplay"), this.bind(s.buttons.settings, "click", (r) => {
        r.stopPropagation(), r.preventDefault(), $.toggleMenu.call(t, r);
      }, null, !1), this.bind(
        s.buttons.settings,
        "keyup",
        (r) => {
          if ([" ", "Enter"].includes(r.key)) {
            if (r.key === "Enter") {
              $.focusFirstMenuItem.call(t, null, !0);
              return;
            }
            r.preventDefault(), r.stopPropagation(), $.toggleMenu.call(t, r);
          }
        },
        null,
        !1
        // Can't be passive as we're preventing default
      ), this.bind(s.settings.menu, "keydown", (r) => {
        r.key === "Escape" && $.toggleMenu.call(t, r);
      }), this.bind(s.inputs.seek, "mousedown mousemove", (r) => {
        const a = s.progress.getBoundingClientRect(), o = r.pageX - r.clientX, c = 100 / a.width * (r.pageX - a.left - o);
        r.currentTarget.setAttribute("seek-value", c);
      }), this.bind(s.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (r) => {
        const a = r.currentTarget, o = "play-on-seeked";
        if (b.keyboardEvent(r) && !["ArrowLeft", "ArrowRight"].includes(r.key))
          return;
        t.lastSeekTime = Date.now();
        const c = a.hasAttribute(o), l = ["mouseup", "touchend", "keyup"].includes(r.type);
        c && l ? (a.removeAttribute(o), pt(t.play())) : !l && t.playing && (a.setAttribute(o, ""), t.pause());
      }), Ue.isIos) {
        const r = ws.call(t, 'input[type="range"]');
        Array.from(r).forEach((a) => this.bind(a, n, (o) => $l(o.target)));
      }
      this.bind(s.inputs.seek, n, (r) => {
        const a = r.currentTarget;
        let o = a.getAttribute("seek-value");
        b.empty(o) && (o = a.value), a.removeAttribute("seek-value"), t.currentTime = o / a.max * t.duration;
      }, "seek"), this.bind(s.progress, "mouseenter mouseleave mousemove", (r) => $.updateSeekTooltip.call(t, r)), this.bind(s.progress, "mousemove touchmove", (r) => {
        const {
          previewThumbnails: a
        } = t;
        a && a.loaded && a.startMove(r);
      }), this.bind(s.progress, "mouseleave touchend click", () => {
        const {
          previewThumbnails: r
        } = t;
        r && r.loaded && r.endMove(!1, !0);
      }), this.bind(s.progress, "mousedown touchstart", (r) => {
        const {
          previewThumbnails: a
        } = t;
        a && a.loaded && a.startScrubbing(r);
      }), this.bind(s.progress, "mouseup touchend", (r) => {
        const {
          previewThumbnails: a
        } = t;
        a && a.loaded && a.endScrubbing(r);
      }), Ue.isWebKit && Array.from(ws.call(t, 'input[type="range"]')).forEach((r) => {
        this.bind(r, "input", (a) => $.updateRangeFill.call(t, a.target));
      }), t.config.toggleInvert && !b.element(s.display.duration) && this.bind(s.display.currentTime, "click", () => {
        t.currentTime !== 0 && (t.config.invertTime = !t.config.invertTime, $.timeUpdate.call(t));
      }), this.bind(s.inputs.volume, n, (r) => {
        t.volume = r.target.value;
      }, "volume"), this.bind(s.controls, "mouseenter mouseleave", (r) => {
        s.controls.hover = !t.touch && r.type === "mouseenter";
      }), s.fullscreen && Array.from(s.fullscreen.children).filter((r) => !r.contains(s.container)).forEach((r) => {
        this.bind(r, "mouseenter mouseleave", (a) => {
          s.controls && (s.controls.hover = !t.touch && a.type === "mouseenter");
        });
      }), this.bind(s.controls, "mousedown mouseup touchstart touchend touchcancel", (r) => {
        s.controls.pressed = ["mousedown", "touchstart"].includes(r.type);
      }), this.bind(s.controls, "focusin", () => {
        const {
          config: r,
          timers: a
        } = t;
        de(s.controls, r.classNames.noTransition, !0), me.toggleControls.call(t, !0), setTimeout(() => {
          de(s.controls, r.classNames.noTransition, !1);
        }, 0);
        const o = this.touch ? 3e3 : 4e3;
        clearTimeout(a.controls), a.controls = setTimeout(() => me.toggleControls.call(t, !1), o);
      }), this.bind(s.inputs.volume, "wheel", (r) => {
        const a = r.webkitDirectionInvertedFromDevice, [o, c] = [r.deltaX, -r.deltaY].map((h) => a ? -h : h), l = Math.sign(Math.abs(o) > Math.abs(c) ? o : c);
        t.increaseVolume(l / 50);
        const {
          volume: u
        } = t.media;
        (l === 1 && u < 1 || l === -1 && u > 0) && r.preventDefault();
      }, "volume", !1);
    }), this.player = e, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.firstTouch = this.firstTouch.bind(this);
  }
  // Handle key presses
  handleKey(e) {
    const {
      player: t
    } = this, {
      elements: s
    } = t, {
      key: n,
      type: r,
      altKey: a,
      ctrlKey: o,
      metaKey: c,
      shiftKey: l
    } = e, u = r === "keydown", h = u && n === this.lastKey;
    if (a || o || c || l || !n)
      return;
    const d = (g) => {
      t.currentTime = t.duration / 10 * g;
    };
    if (u) {
      const g = document.activeElement;
      if (b.element(g)) {
        const {
          editable: m
        } = t.config.selectors, {
          seek: p
        } = s.inputs;
        if (g !== p && zt(g, m) || e.key === " " && zt(g, 'button, [role^="menuitem"]'))
          return;
      }
      switch ([" ", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m"].includes(n) && (e.preventDefault(), e.stopPropagation()), n) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          h || d(Number.parseInt(n, 10));
          break;
        case " ":
        case "k":
          h || pt(t.togglePlay());
          break;
        case "ArrowUp":
          t.increaseVolume(0.1);
          break;
        case "ArrowDown":
          t.decreaseVolume(0.1);
          break;
        case "m":
          h || (t.muted = !t.muted);
          break;
        case "ArrowRight":
          t.forward();
          break;
        case "ArrowLeft":
          t.rewind();
          break;
        case "f":
          t.fullscreen.toggle();
          break;
        case "c":
          h || t.toggleCaptions();
          break;
        case "l":
          t.loop = !t.loop;
          break;
      }
      n === "Escape" && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = n;
    } else
      this.lastKey = null;
  }
  // Toggle menu
  toggleMenu(e) {
    $.toggleMenu.call(this.player, e);
  }
}
function Bm(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var di = { exports: {} }, Um = di.exports, Ha;
function Gm() {
  return Ha || (Ha = 1, (function(i, e) {
    (function(t, s) {
      i.exports = s();
    })(Um, function() {
      var t = function() {
      }, s = {}, n = {}, r = {};
      function a(d, g) {
        d = d.push ? d : [d];
        var f = [], m = d.length, p = m, T, E, v, x;
        for (T = function(A, _) {
          _.length && f.push(A), p--, p || g(f);
        }; m--; ) {
          if (E = d[m], v = n[E], v) {
            T(E, v);
            continue;
          }
          x = r[E] = r[E] || [], x.push(T);
        }
      }
      function o(d, g) {
        if (d) {
          var f = r[d];
          if (n[d] = g, !!f)
            for (; f.length; )
              f[0](d, g), f.splice(0, 1);
        }
      }
      function c(d, g) {
        d.call && (d = {
          success: d
        }), g.length ? (d.error || t)(g) : (d.success || t)(d);
      }
      function l(d, g, f, m) {
        var p = document, T = f.async, E = (f.numRetries || 0) + 1, v = f.before || t, x = d.replace(/[\?|#].*$/, ""), A = d.replace(/^(css|img|module|nomodule)!/, ""), _, S, L;
        if (m = m || 0, /(^css!|\.css$)/.test(x))
          L = p.createElement("link"), L.rel = "stylesheet", L.href = A, _ = "hideFocus" in L, _ && L.relList && (_ = 0, L.rel = "preload", L.as = "style");
        else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(x))
          L = p.createElement("img"), L.src = A;
        else if (L = p.createElement("script"), L.src = A, L.async = T === void 0 ? !0 : T, S = "noModule" in L, /^module!/.test(x)) {
          if (!S) return g(d, "l");
          L.type = "module";
        } else if (/^nomodule!/.test(x) && S) return g(d, "l");
        L.onload = L.onerror = L.onbeforeload = function(I) {
          var R = I.type[0];
          if (_)
            try {
              L.sheet.cssText.length || (R = "e");
            } catch (w) {
              w.code != 18 && (R = "e");
            }
          if (R == "e") {
            if (m += 1, m < E)
              return l(d, g, f, m);
          } else if (L.rel == "preload" && L.as == "style")
            return L.rel = "stylesheet";
          g(d, R, I.defaultPrevented);
        }, v(d, L) !== !1 && p.head.appendChild(L);
      }
      function u(d, g, f) {
        d = d.push ? d : [d];
        var m = d.length, p = m, T = [], E, v;
        for (E = function(x, A, _) {
          if (A == "e" && T.push(x), A == "b")
            if (_) T.push(x);
            else return;
          m--, m || g(T);
        }, v = 0; v < p; v++) l(d[v], E, f);
      }
      function h(d, g, f) {
        var m, p;
        if (g && g.trim && (m = g), p = (m ? f : g) || {}, m) {
          if (m in s)
            throw "LoadJS";
          s[m] = !0;
        }
        function T(E, v) {
          u(d, function(x) {
            c(p, x), E && c({
              success: E,
              error: v
            }, x), o(m, x);
          }, p);
        }
        if (p.returnPromise) return new Promise(T);
        T();
      }
      return h.ready = function(g, f) {
        return a(g, function(m) {
          c(f, m);
        }), h;
      }, h.done = function(g) {
        o(g, []);
      }, h.reset = function() {
        s = {}, n = {}, r = {};
      }, h.isDefined = function(g) {
        return g in s;
      }, h;
    });
  })(di)), di.exports;
}
var Km = Gm(), Vm = /* @__PURE__ */ Bm(Km);
function pr(i) {
  return new Promise((e, t) => {
    Vm(i, {
      success: e,
      error: t
    });
  });
}
function Hm(i) {
  if (b.empty(i))
    return null;
  if (b.number(Number(i)))
    return i;
  const e = /^.*(vimeo.com\/|video\/)(\d+).*/, t = i.match(e);
  return t ? t[2] : i;
}
function jm(i) {
  const e = /^.*(vimeo.com\/|video\/)(\d+)(\?.*h=|\/)+([\d,a-f]+)/, t = i.match(e);
  return t && t.length === 5 ? t[4] : null;
}
function ys(i) {
  i && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === i && (this.media.paused = !i, J.call(this, this.media, i ? "play" : "pause"));
}
const Fn = {
  setup() {
    const i = this;
    de(i.elements.wrapper, i.config.classNames.embed, !0), i.options.speed = i.config.speed.options, fs.call(i), b.object(window.Vimeo) ? Fn.ready.call(i) : pr(i.config.urls.vimeo.sdk).then(() => {
      Fn.ready.call(i);
    }).catch((e) => {
      i.debug.warn("Vimeo SDK (player.js) failed to load", e);
    });
  },
  // API Ready
  ready() {
    const i = this, e = i.config.vimeo, {
      premium: t,
      referrerPolicy: s,
      ...n
    } = e;
    let r = i.media.getAttribute("src"), a = "";
    b.empty(r) ? (r = i.media.getAttribute(i.config.attributes.embed.id), a = i.media.getAttribute(i.config.attributes.embed.hash)) : a = jm(r);
    const o = a ? {
      h: a
    } : {};
    t && Object.assign(n, {
      controls: !1,
      sidedock: !1
    });
    const c = zl({
      loop: i.config.loop.active,
      autoplay: i.autoplay,
      muted: i.muted,
      gesture: "media",
      playsinline: i.config.playsinline,
      // hash has to be added to iframe-URL
      ...o,
      ...n
    }), l = Hm(r), u = Z("iframe"), h = Mn(i.config.urls.vimeo.iframe, l, c);
    if (u.setAttribute("src", h), u.setAttribute("allowfullscreen", ""), u.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")), b.empty(s) || u.setAttribute("referrerPolicy", s), t || !e.customControls)
      u.setAttribute("data-poster", i.poster), i.media = Li(u, i.media);
    else {
      const E = Z("div", {
        class: i.config.classNames.embedContainer,
        "data-poster": i.poster
      });
      E.appendChild(u), i.media = Li(E, i.media);
    }
    e.customControls || Ns(Mn(i.config.urls.vimeo.api, h)).then((E) => {
      b.empty(E) || !E.thumbnail_url || me.setPoster.call(i, E.thumbnail_url).catch(() => {
      });
    }), i.embed = new window.Vimeo.Player(u, {
      autopause: i.config.autopause,
      muted: i.muted
    }), i.media.paused = !0, i.media.currentTime = 0, i.supported.ui && i.embed.disableTextTrack(), i.media.play = () => (ys.call(i, !0), i.embed.play()), i.media.pause = () => (ys.call(i, !1), i.embed.pause()), i.media.stop = () => {
      i.pause(), i.currentTime = 0;
    };
    let {
      currentTime: d
    } = i.media;
    Object.defineProperty(i.media, "currentTime", {
      get() {
        return d;
      },
      set(E) {
        const {
          embed: v,
          media: x,
          paused: A,
          volume: _
        } = i, S = A && !v.hasPlayed;
        x.seeking = !0, J.call(i, x, "seeking"), Promise.resolve(S && v.setVolume(0)).then(() => v.setCurrentTime(E)).then(() => S && v.pause()).then(() => S && v.setVolume(_)).catch(() => {
        });
      }
    });
    let g = i.config.speed.selected;
    Object.defineProperty(i.media, "playbackRate", {
      get() {
        return g;
      },
      set(E) {
        i.embed.setPlaybackRate(E).then(() => {
          g = E, J.call(i, i.media, "ratechange");
        }).catch(() => {
          i.options.speed = [1];
        });
      }
    });
    let {
      volume: f
    } = i.config;
    Object.defineProperty(i.media, "volume", {
      get() {
        return f;
      },
      set(E) {
        i.embed.setVolume(E).then(() => {
          f = E, J.call(i, i.media, "volumechange");
        });
      }
    });
    let {
      muted: m
    } = i.config;
    Object.defineProperty(i.media, "muted", {
      get() {
        return m;
      },
      set(E) {
        const v = b.boolean(E) ? E : !1;
        i.embed.setMuted(v ? !0 : i.config.muted).then(() => {
          m = v, J.call(i, i.media, "volumechange");
        });
      }
    });
    let {
      loop: p
    } = i.config;
    Object.defineProperty(i.media, "loop", {
      get() {
        return p;
      },
      set(E) {
        const v = b.boolean(E) ? E : i.config.loop.active;
        i.embed.setLoop(v).then(() => {
          p = v;
        });
      }
    });
    let T;
    i.embed.getVideoUrl().then((E) => {
      T = E, $.setDownloadUrl.call(i);
    }).catch((E) => {
      this.debug.warn(E);
    }), Object.defineProperty(i.media, "currentSrc", {
      get() {
        return T;
      }
    }), Object.defineProperty(i.media, "ended", {
      get() {
        return i.currentTime === i.duration;
      }
    }), Promise.all([i.embed.getVideoWidth(), i.embed.getVideoHeight()]).then((E) => {
      const [v, x] = E;
      i.embed.ratio = Hl(v, x), fs.call(this);
    }), i.embed.setAutopause(i.config.autopause).then((E) => {
      i.config.autopause = E;
    }), i.embed.getVideoTitle().then((E) => {
      i.config.title = E, me.setTitle.call(this);
    }), i.embed.getCurrentTime().then((E) => {
      d = E, J.call(i, i.media, "timeupdate");
    }), i.embed.getDuration().then((E) => {
      i.media.duration = E, J.call(i, i.media, "durationchange");
    }), i.embed.getTextTracks().then((E) => {
      i.media.textTracks = E, he.setup.call(i);
    }), i.embed.on("cuechange", ({
      cues: E = []
    }) => {
      const v = E.map((x) => Dm(x.text));
      he.updateCues.call(i, v);
    }), i.embed.on("loaded", () => {
      i.embed.getPaused().then((E) => {
        ys.call(i, !E), E || J.call(i, i.media, "playing");
      }), b.element(i.embed.element) && i.supported.ui && i.embed.element.setAttribute("tabindex", -1);
    }), i.embed.on("bufferstart", () => {
      J.call(i, i.media, "waiting");
    }), i.embed.on("bufferend", () => {
      J.call(i, i.media, "playing");
    }), i.embed.on("play", () => {
      ys.call(i, !0), J.call(i, i.media, "playing");
    }), i.embed.on("pause", () => {
      ys.call(i, !1);
    }), i.embed.on("timeupdate", (E) => {
      i.media.seeking = !1, d = E.seconds, J.call(i, i.media, "timeupdate");
    }), i.embed.on("progress", (E) => {
      i.media.buffered = E.percent, J.call(i, i.media, "progress"), Number.parseInt(E.percent, 10) === 1 && J.call(i, i.media, "canplaythrough"), i.embed.getDuration().then((v) => {
        v !== i.media.duration && (i.media.duration = v, J.call(i, i.media, "durationchange"));
      });
    }), i.embed.on("seeked", () => {
      i.media.seeking = !1, J.call(i, i.media, "seeked");
    }), i.embed.on("ended", () => {
      i.media.paused = !0, J.call(i, i.media, "ended");
    }), i.embed.on("error", (E) => {
      i.media.error = E, J.call(i, i.media, "error");
    }), e.customControls && setTimeout(() => me.build.call(i), 0);
  }
};
function Wm(i) {
  if (b.empty(i))
    return null;
  const e = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/, t = i.match(e);
  return t && t[2] ? t[2] : i;
}
function Ts(i) {
  i && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === i && (this.media.paused = !i, J.call(this, this.media, i ? "play" : "pause"));
}
function qm(i) {
  if (i.noCookie)
    return "https://www.youtube-nocookie.com";
  if (window.location.protocol === "http:")
    return "http://www.youtube.com";
}
const fi = {
  setup() {
    if (de(this.elements.wrapper, this.config.classNames.embed, !0), b.object(window.YT) && b.function(window.YT.Player))
      fi.ready.call(this);
    else {
      const i = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        b.function(i) && i(), fi.ready.call(this);
      }, pr(this.config.urls.youtube.sdk).catch((e) => {
        this.debug.warn("YouTube API failed to load", e);
      });
    }
  },
  // Get the media title
  getTitle(i) {
    const e = Mn(this.config.urls.youtube.api, i);
    Ns(e).then((t) => {
      if (b.object(t)) {
        const {
          title: s,
          height: n,
          width: r
        } = t;
        this.config.title = s, me.setTitle.call(this), this.embed.ratio = Hl(r, n);
      }
      fs.call(this);
    }).catch(() => {
      fs.call(this);
    });
  },
  // API ready
  ready() {
    const i = this, e = i.config.youtube, t = i.media && i.media.getAttribute("id");
    if (!b.empty(t) && t.startsWith("youtube-"))
      return;
    let s = i.media.getAttribute("src");
    b.empty(s) && (s = i.media.getAttribute(this.config.attributes.embed.id));
    const n = Wm(s), r = _m(i.provider), a = Z("div", {
      id: r,
      "data-poster": e.customControls ? i.poster : void 0
    });
    if (i.media = Li(a, i.media), e.customControls) {
      const o = (c) => `https://i.ytimg.com/vi/${n}/${c}default.jpg`;
      hi(o("maxres"), 121).catch(() => hi(o("sd"), 121)).catch(() => hi(o("hq"))).then((c) => me.setPoster.call(i, c.src)).then((c) => {
        c.includes("maxres") || (i.elements.poster.style.backgroundSize = "cover");
      }).catch(() => {
      });
    }
    i.embed = new window.YT.Player(i.media, {
      videoId: n,
      host: qm(e),
      playerVars: xe({}, {
        // Autoplay
        autoplay: i.config.autoplay ? 1 : 0,
        // iframe interface language
        hl: i.config.hl,
        // Only show controls if not fully supported or opted out
        controls: i.supported.ui && e.customControls ? 0 : 1,
        // Disable keyboard as we handle it
        disablekb: 1,
        // Allow iOS inline playback
        playsinline: i.config.playsinline && !i.config.fullscreen.iosNative ? 1 : 0,
        // Captions are flaky on YouTube
        cc_load_policy: i.captions.active ? 1 : 0,
        cc_lang_pref: i.config.captions.language,
        // Tracking for stats
        widget_referrer: window ? window.location.href : null
      }, e),
      events: {
        onError(o) {
          if (!i.media.error) {
            const c = o.data, l = {
              2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
              5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
              100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
              101: "The owner of the requested video does not allow it to be played in embedded players.",
              150: "The owner of the requested video does not allow it to be played in embedded players."
            }[c] || "An unknown error occurred";
            i.media.error = {
              code: c,
              message: l
            }, J.call(i, i.media, "error");
          }
        },
        onPlaybackRateChange(o) {
          const c = o.target;
          i.media.playbackRate = c.getPlaybackRate(), J.call(i, i.media, "ratechange");
        },
        onReady(o) {
          if (b.function(i.media.play))
            return;
          const c = o.target;
          fi.getTitle.call(i, n), i.media.play = () => {
            Ts.call(i, !0), c.playVideo();
          }, i.media.pause = () => {
            Ts.call(i, !1), c.pauseVideo();
          }, i.media.stop = () => {
            c.stopVideo();
          }, i.media.duration = c.getDuration(), i.media.paused = !0, i.media.currentTime = 0, Object.defineProperty(i.media, "currentTime", {
            get() {
              return Number(c.getCurrentTime());
            },
            set(d) {
              i.paused && !i.embed.hasPlayed && i.embed.mute(), i.media.seeking = !0, J.call(i, i.media, "seeking"), c.seekTo(d);
            }
          }), Object.defineProperty(i.media, "playbackRate", {
            get() {
              return c.getPlaybackRate();
            },
            set(d) {
              c.setPlaybackRate(d);
            }
          });
          let {
            volume: l
          } = i.config;
          Object.defineProperty(i.media, "volume", {
            get() {
              return l;
            },
            set(d) {
              l = d, c.setVolume(l * 100), J.call(i, i.media, "volumechange");
            }
          });
          let {
            muted: u
          } = i.config;
          Object.defineProperty(i.media, "muted", {
            get() {
              return u;
            },
            set(d) {
              const g = b.boolean(d) ? d : u;
              u = g, c[g ? "mute" : "unMute"](), c.setVolume(l * 100), J.call(i, i.media, "volumechange");
            }
          }), Object.defineProperty(i.media, "currentSrc", {
            get() {
              return c.getVideoUrl();
            }
          }), Object.defineProperty(i.media, "ended", {
            get() {
              return i.currentTime === i.duration;
            }
          });
          const h = c.getAvailablePlaybackRates();
          i.options.speed = h.filter((d) => i.config.speed.options.includes(d)), i.supported.ui && e.customControls && i.media.setAttribute("tabindex", -1), J.call(i, i.media, "timeupdate"), J.call(i, i.media, "durationchange"), clearInterval(i.timers.buffering), i.timers.buffering = setInterval(() => {
            i.media.buffered = c.getVideoLoadedFraction(), (i.media.lastBuffered === null || i.media.lastBuffered < i.media.buffered) && J.call(i, i.media, "progress"), i.media.lastBuffered = i.media.buffered, i.media.buffered === 1 && (clearInterval(i.timers.buffering), J.call(i, i.media, "canplaythrough"));
          }, 200), e.customControls && setTimeout(() => me.build.call(i), 50);
        },
        onStateChange(o) {
          const c = o.target;
          switch (clearInterval(i.timers.playing), i.media.seeking && [1, 2].includes(o.data) && (i.media.seeking = !1, J.call(i, i.media, "seeked")), o.data) {
            case -1:
              J.call(i, i.media, "timeupdate"), i.media.buffered = c.getVideoLoadedFraction(), J.call(i, i.media, "progress");
              break;
            case 0:
              Ts.call(i, !1), i.media.loop ? (c.stopVideo(), c.playVideo()) : J.call(i, i.media, "ended");
              break;
            case 1:
              e.customControls && !i.config.autoplay && i.media.paused && !i.embed.hasPlayed ? i.media.pause() : (Ts.call(i, !0), J.call(i, i.media, "playing"), i.timers.playing = setInterval(() => {
                J.call(i, i.media, "timeupdate");
              }, 50), i.media.duration !== c.getDuration() && (i.media.duration = c.getDuration(), J.call(i, i.media, "durationchange")));
              break;
            case 2:
              i.muted || i.embed.unMute(), Ts.call(i, !1);
              break;
            case 3:
              J.call(i, i.media, "waiting");
              break;
          }
          J.call(i, i.elements.container, "statechange", !1, {
            code: o.data
          });
        }
      }
    });
  }
}, Ql = {
  // Setup media
  setup() {
    if (!this.media) {
      this.debug.warn("No media element found!");
      return;
    }
    de(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), de(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && de(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = Z("div", {
      class: this.config.classNames.video
    }), Ul(this.media, this.elements.wrapper), this.elements.poster = Z("div", {
      class: this.config.classNames.poster
    }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? Nt.setup.call(this) : this.isYouTube ? fi.setup.call(this) : this.isVimeo && Fn.setup.call(this);
  }
};
function Ym(i) {
  i.manager && i.manager.destroy(), i.elements.displayContainer && i.elements.displayContainer.destroy(), i.elements.container.remove();
}
class zm {
  /**
   * Ads constructor.
   * @param {object} player
   * @return {Ads}
   */
  constructor(e) {
    U(this, "load", () => {
      this.enabled && (!b.object(window.google) || !b.object(window.google.ima) ? pr(this.player.config.urls.googleIMA.sdk).then(() => {
        this.ready();
      }).catch(() => {
        this.trigger("error", new Error("Google IMA SDK failed to load"));
      }) : this.ready());
    }), U(this, "ready", () => {
      this.enabled || Ym(this), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(() => {
        this.clearSafetyTimer("onAdsManagerLoaded()");
      }), this.listeners(), this.setupIMA();
    }), U(this, "setupIMA", () => {
      this.elements.container = Z("div", {
        class: this.player.config.classNames.ads
      }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (t) => this.onAdsManagerLoaded(t), !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (t) => this.onAdError(t), !1), this.requestAds();
    }), U(this, "requestAds", () => {
      const {
        container: t
      } = this.player.elements;
      try {
        const s = new google.ima.AdsRequest();
        s.adTagUrl = this.tagUrl, s.linearAdSlotWidth = t.offsetWidth, s.linearAdSlotHeight = t.offsetHeight, s.nonLinearAdSlotWidth = t.offsetWidth, s.nonLinearAdSlotHeight = t.offsetHeight, s.forceNonLinearFullSlot = !1, s.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(s);
      } catch (s) {
        this.onAdError(s);
      }
    }), U(this, "pollCountdown", (t = !1) => {
      if (!t) {
        clearInterval(this.countdownTimer), this.elements.container.removeAttribute("data-badge-text");
        return;
      }
      const s = () => {
        const n = Oi(Math.max(this.manager.getRemainingTime(), 0)), r = `${Fe.get("advertisement", this.player.config)} - ${n}`;
        this.elements.container.setAttribute("data-badge-text", r);
      };
      this.countdownTimer = setInterval(s, 100);
    }), U(this, "onAdsManagerLoaded", (t) => {
      if (!this.enabled)
        return;
      const s = new google.ima.AdsRenderingSettings();
      s.restoreCustomPlaybackStateOnAdBreakComplete = !0, s.enablePreloading = !0, this.manager = t.getAdsManager(this.player, s), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (n) => this.onAdError(n)), Object.keys(google.ima.AdEvent.Type).forEach((n) => {
        this.manager.addEventListener(google.ima.AdEvent.Type[n], (r) => this.onAdEvent(r));
      }), this.trigger("loaded");
    }), U(this, "addCuePoints", () => {
      b.empty(this.cuePoints) || this.cuePoints.forEach((t) => {
        if (t !== 0 && t !== -1 && t < this.player.duration) {
          const s = this.player.elements.progress;
          if (b.element(s)) {
            const n = 100 / this.player.duration * t, r = Z("span", {
              class: this.player.config.classNames.cues
            });
            r.style.left = `${n.toString()}%`, s.appendChild(r);
          }
        }
      });
    }), U(this, "onAdEvent", (t) => {
      const {
        container: s
      } = this.player.elements, n = t.getAd(), r = t.getAdData();
      switch (((o) => {
        J.call(this.player, this.player.media, `ads${o.replace(/_/g, "").toLowerCase()}`);
      })(t.type), t.type) {
        case google.ima.AdEvent.Type.LOADED:
          this.trigger("loaded"), this.pollCountdown(!0), n.isLinear() || (n.width = s.offsetWidth, n.height = s.offsetHeight);
          break;
        case google.ima.AdEvent.Type.STARTED:
          this.manager.setVolume(this.player.volume);
          break;
        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
          this.player.ended ? this.loadAds() : this.loader.contentComplete();
          break;
        case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
          this.pauseContent();
          break;
        case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
          this.pollCountdown(), this.resumeContent();
          break;
        case google.ima.AdEvent.Type.LOG:
          r.adError && this.player.debug.warn(`Non-fatal ad error: ${r.adError.getMessage()}`);
          break;
      }
    }), U(this, "onAdError", (t) => {
      this.cancel(), this.player.debug.warn("Ads error", t);
    }), U(this, "listeners", () => {
      const {
        container: t
      } = this.player.elements;
      let s;
      this.player.on("canplay", () => {
        this.addCuePoints();
      }), this.player.on("ended", () => {
        this.loader.contentComplete();
      }), this.player.on("timeupdate", () => {
        s = this.player.currentTime;
      }), this.player.on("seeked", () => {
        const n = this.player.currentTime;
        b.empty(this.cuePoints) || this.cuePoints.forEach((r, a) => {
          s < r && r < n && (this.manager.discardAdBreak(), this.cuePoints.splice(a, 1));
        });
      }), window.addEventListener("resize", () => {
        this.manager && this.manager.resize(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL);
      });
    }), U(this, "play", () => {
      const {
        container: t
      } = this.player.elements;
      this.managerPromise || this.resumeContent(), this.managerPromise.then(() => {
        this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
        try {
          this.initialized || (this.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), this.manager.start()), this.initialized = !0;
        } catch (s) {
          this.onAdError(s);
        }
      }).catch(() => {
      });
    }), U(this, "resumeContent", () => {
      this.elements.container.style.zIndex = "", this.playing = !1, pt(this.player.media.play());
    }), U(this, "pauseContent", () => {
      this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause();
    }), U(this, "cancel", () => {
      this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
    }), U(this, "loadAds", () => {
      this.managerPromise.then(() => {
        this.manager && this.manager.destroy(), this.managerPromise = new Promise((t) => {
          this.on("loaded", t), this.player.debug.log(this.manager);
        }), this.initialized = !1, this.requestAds();
      }).catch(() => {
      });
    }), U(this, "trigger", (t, ...s) => {
      const n = this.events[t];
      b.array(n) && n.forEach((r) => {
        b.function(r) && r.apply(this, s);
      });
    }), U(this, "on", (t, s) => (b.array(this.events[t]) || (this.events[t] = []), this.events[t].push(s), this)), U(this, "startSafetyTimer", (t, s) => {
      this.player.debug.log(`Safety timer invoked from: ${s}`), this.safetyTimer = setTimeout(() => {
        this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
      }, t);
    }), U(this, "clearSafetyTimer", (t) => {
      b.nullOrUndefined(this.safetyTimer) || (this.player.debug.log(`Safety timer cleared from: ${t}`), clearTimeout(this.safetyTimer), this.safetyTimer = null);
    }), this.player = e, this.config = e.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
      container: null,
      displayContainer: null
    }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((t, s) => {
      this.on("loaded", t), this.on("error", s);
    }), this.load();
  }
  get enabled() {
    const {
      config: e
    } = this;
    return this.player.isHTML5 && this.player.isVideo && e.enabled && (!b.empty(e.publisherId) || b.url(e.tagUrl));
  }
  // Build the tag URL
  get tagUrl() {
    const {
      config: e
    } = this;
    if (b.url(e.tagUrl))
      return e.tagUrl;
    const t = {
      AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
      AV_CHANNELID: "5a0458dc28a06145e4519d21",
      AV_URL: window.location.hostname,
      cb: Date.now(),
      AV_WIDTH: 640,
      AV_HEIGHT: 480,
      AV_CDIM2: e.publisherId
    };
    return `https://go.aniview.com/api/adserver6/vast/?${zl(t)}`;
  }
}
function Zl(i = 0, e = 0, t = 255) {
  return Math.min(Math.max(i, e), t);
}
function Xm(i) {
  const e = [];
  return i.split(/\r\n\r\n|\n\n|\r\r/).forEach((s) => {
    const n = {};
    s.split(/\r\n|\n|\r/).forEach((a) => {
      if (b.number(n.startTime)) {
        if (!b.empty(a.trim()) && b.empty(n.text)) {
          const o = a.trim().split("#xywh=");
          [n.text] = o, o[1] && ([n.x, n.y, n.w, n.h] = o[1].split(","));
        }
      } else {
        const o = a.match(/(\d{2})?:?(\d{2}):(\d{2}).(\d{2,3})( ?--> ?)(\d{2})?:?(\d{2}):(\d{2}).(\d{2,3})/);
        o && (n.startTime = Number(o[1] || 0) * 60 * 60 + Number(o[2]) * 60 + Number(o[3]) + +`0.${o[4]}`, n.endTime = Number(o[6] || 0) * 60 * 60 + Number(o[7]) * 60 + Number(o[8]) + +`0.${o[9]}`);
      }
    }), n.text && e.push(n);
  }), e;
}
function ja(i, e) {
  const t = e.width / e.height, s = {};
  return i > t ? (s.width = e.width, s.height = 1 / i * e.width) : (s.height = e.height, s.width = i * e.height), s;
}
class Nn {
  /**
   * PreviewThumbnails constructor.
   * @param {Plyr} player
   * @return {PreviewThumbnails}
   */
  constructor(e) {
    U(this, "load", () => {
      this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(() => {
        this.enabled && (this.render(), this.determineContainerAutoSizing(), this.listeners(), this.loaded = !0);
      });
    }), U(this, "getThumbnails", () => new Promise((t) => {
      const {
        src: s
      } = this.player.config.previewThumbnails;
      if (b.empty(s))
        throw new Error("Missing previewThumbnails.src config attribute");
      const n = () => {
        this.thumbnails.sort((r, a) => r.height - a.height), this.player.debug.log("Preview thumbnails", this.thumbnails), t();
      };
      if (b.function(s))
        s((r) => {
          this.thumbnails = r, n();
        });
      else {
        const a = (b.string(s) ? [s] : s).map((o) => this.getThumbnail(o));
        Promise.all(a).then(n);
      }
    })), U(this, "getThumbnail", (t) => new Promise((s) => {
      Ns(t, void 0, this.player.config.previewThumbnails.withCredentials).then((n) => {
        const r = {
          frames: Xm(n),
          height: null,
          urlPrefix: ""
        };
        !r.frames[0].text.startsWith("/") && !r.frames[0].text.startsWith("http://") && !r.frames[0].text.startsWith("https://") && (r.urlPrefix = t.substring(0, t.lastIndexOf("/") + 1));
        const a = new Image();
        a.onload = () => {
          r.height = a.naturalHeight, r.width = a.naturalWidth, this.thumbnails.push(r), s();
        }, a.src = r.urlPrefix + r.frames[0].text;
      });
    })), U(this, "startMove", (t) => {
      if (this.loaded && !(!b.event(t) || !["touchmove", "mousemove"].includes(t.type)) && this.player.media.duration) {
        if (t.type === "touchmove")
          this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
        else {
          var s, n;
          const r = this.player.elements.progress.getBoundingClientRect(), a = 100 / r.width * (t.pageX - r.left);
          this.seekTime = this.player.media.duration * (a / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = t.pageX, this.elements.thumb.time.textContent = Oi(this.seekTime);
          const o = (s = this.player.config.markers) === null || s === void 0 || (n = s.points) === null || n === void 0 ? void 0 : n.find(({
            time: c
          }) => c === Math.round(this.seekTime));
          o && this.elements.thumb.time.insertAdjacentHTML("afterbegin", `${o.label}<br>`);
        }
        this.showImageAtCurrentTime();
      }
    }), U(this, "endMove", () => {
      this.toggleThumbContainer(!1, !0);
    }), U(this, "startScrubbing", (t) => {
      (b.nullOrUndefined(t.button) || t.button === !1 || t.button === 0) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()));
    }), U(this, "endScrubbing", () => {
      this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : gr.call(this.player, this.player.media, "timeupdate", () => {
        this.mouseDown || this.toggleScrubbingContainer(!1);
      });
    }), U(this, "listeners", () => {
      this.player.on("play", () => {
        this.toggleThumbContainer(!1, !0);
      }), this.player.on("seeked", () => {
        this.toggleThumbContainer(!1);
      }), this.player.on("timeupdate", () => {
        this.lastTime = this.player.media.currentTime;
      });
    }), U(this, "render", () => {
      this.elements.thumb.container = Z("div", {
        class: this.player.config.classNames.previewThumbnails.thumbContainer
      }), this.elements.thumb.imageContainer = Z("div", {
        class: this.player.config.classNames.previewThumbnails.imageContainer
      }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
      const t = Z("div", {
        class: this.player.config.classNames.previewThumbnails.timeContainer
      });
      this.elements.thumb.time = Z("span", {}, "00:00"), t.appendChild(this.elements.thumb.time), this.elements.thumb.imageContainer.appendChild(t), b.element(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = Z("div", {
        class: this.player.config.classNames.previewThumbnails.scrubbingContainer
      }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
    }), U(this, "destroy", () => {
      this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove();
    }), U(this, "showImageAtCurrentTime", () => {
      this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
      const t = this.thumbnails[0].frames.findIndex((r) => this.seekTime >= r.startTime && this.seekTime <= r.endTime), s = t >= 0;
      let n = 0;
      this.mouseDown || this.toggleThumbContainer(s), s && (this.thumbnails.forEach((r, a) => {
        this.loadedImages.includes(r.frames[t].text) && (n = a);
      }), t !== this.showingThumb && (this.showingThumb = t, this.loadImage(n)));
    }), U(this, "loadImage", (t = 0) => {
      const s = this.showingThumb, n = this.thumbnails[t], {
        urlPrefix: r
      } = n, a = n.frames[s], o = n.frames[s].text, c = r + o;
      if (!this.currentImageElement || this.currentImageElement.dataset.filename !== o) {
        this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
        const l = new Image();
        l.src = c, l.dataset.index = s, l.dataset.filename = o, this.showingThumbFilename = o, this.player.debug.log(`Loading image: ${c}`), l.onload = () => this.showImage(l, a, t, s, o, !0), this.loadingImage = l, this.removeOldImages(l);
      } else
        this.showImage(this.currentImageElement, a, t, s, o, !1), this.currentImageElement.dataset.index = s, this.removeOldImages(this.currentImageElement);
    }), U(this, "showImage", (t, s, n, r, a, o = !0) => {
      this.player.debug.log(`Showing thumb: ${a}. num: ${r}. qual: ${n}. newimg: ${o}`), this.setImageSizeAndOffset(t, s), o && (this.currentImageContainer.appendChild(t), this.currentImageElement = t, this.loadedImages.includes(a) || this.loadedImages.push(a)), this.preloadNearby(r, !0).then(this.preloadNearby(r, !1)).then(this.getHigherQuality(n, t, s, a));
    }), U(this, "removeOldImages", (t) => {
      Array.from(this.currentImageContainer.children).forEach((s) => {
        if (s.tagName.toLowerCase() !== "img")
          return;
        const n = this.usingSprites ? 500 : 1e3;
        if (s.dataset.index !== t.dataset.index && !s.dataset.deleting) {
          s.dataset.deleting = !0;
          const {
            currentImageContainer: r
          } = this;
          setTimeout(() => {
            r.removeChild(s), this.player.debug.log(`Removing thumb: ${s.dataset.filename}`);
          }, n);
        }
      });
    }), U(this, "preloadNearby", (t, s = !0) => new Promise((n) => {
      setTimeout(() => {
        const r = this.thumbnails[0].frames[t].text;
        if (this.showingThumbFilename === r) {
          let a;
          s ? a = this.thumbnails[0].frames.slice(t) : a = this.thumbnails[0].frames.slice(0, t).reverse();
          let o = !1;
          a.forEach((c) => {
            const l = c.text;
            if (l !== r && !this.loadedImages.includes(l)) {
              o = !0, this.player.debug.log(`Preloading thumb filename: ${l}`);
              const {
                urlPrefix: u
              } = this.thumbnails[0], h = u + l, d = new Image();
              d.src = h, d.onload = () => {
                this.player.debug.log(`Preloaded thumb filename: ${l}`), this.loadedImages.includes(l) || this.loadedImages.push(l), n();
              };
            }
          }), o || n();
        }
      }, 300);
    })), U(this, "getHigherQuality", (t, s, n, r) => {
      if (t < this.thumbnails.length - 1) {
        let a = s.naturalHeight;
        this.usingSprites && (a = n.h), a < this.thumbContainerHeight && setTimeout(() => {
          this.showingThumbFilename === r && (this.player.debug.log(`Showing higher quality thumb for: ${r}`), this.loadImage(t + 1));
        }, 300);
      }
    }), U(this, "toggleThumbContainer", (t = !1, s = !1) => {
      const n = this.player.config.classNames.previewThumbnails.thumbContainerShown;
      this.elements.thumb.container.classList.toggle(n, t), !t && s && (this.showingThumb = null, this.showingThumbFilename = null);
    }), U(this, "toggleScrubbingContainer", (t = !1) => {
      const s = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
      this.elements.scrubbing.container.classList.toggle(s, t), t || (this.showingThumb = null, this.showingThumbFilename = null);
    }), U(this, "determineContainerAutoSizing", () => {
      (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0);
    }), U(this, "setThumbContainerSizeAndPos", () => {
      const {
        imageContainer: t
      } = this.elements.thumb;
      if (this.sizeSpecifiedInCSS) {
        if (t.clientHeight > 20 && t.clientWidth < 20) {
          const s = Math.floor(t.clientHeight * this.thumbAspectRatio);
          t.style.width = `${s}px`;
        } else if (t.clientHeight < 20 && t.clientWidth > 20) {
          const s = Math.floor(t.clientWidth / this.thumbAspectRatio);
          t.style.height = `${s}px`;
        }
      } else {
        const s = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
        t.style.height = `${this.thumbContainerHeight}px`, t.style.width = `${s}px`;
      }
      this.setThumbContainerPos();
    }), U(this, "setThumbContainerPos", () => {
      const t = this.player.elements.progress.getBoundingClientRect(), s = this.player.elements.container.getBoundingClientRect(), {
        container: n
      } = this.elements.thumb, r = s.left - t.left + 10, a = s.right - t.left - n.clientWidth - 10, o = this.mousePosX - t.left - n.clientWidth / 2, c = Zl(o, r, a);
      n.style.left = `${c}px`, n.style.setProperty("--preview-arrow-offset", `${o - c}px`);
    }), U(this, "setScrubbingContainerSize", () => {
      const {
        width: t,
        height: s
      } = ja(this.thumbAspectRatio, {
        width: this.player.media.clientWidth,
        height: this.player.media.clientHeight
      });
      this.elements.scrubbing.container.style.width = `${t}px`, this.elements.scrubbing.container.style.height = `${s}px`;
    }), U(this, "setImageSizeAndOffset", (t, s) => {
      if (!this.usingSprites) return;
      const n = this.thumbContainerHeight / s.h;
      t.style.height = `${t.naturalHeight * n}px`, t.style.width = `${t.naturalWidth * n}px`, t.style.left = `-${s.x * n}px`, t.style.top = `-${s.y * n}px`;
    }), this.player = e, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
      thumb: {},
      scrubbing: {}
    }, this.load();
  }
  get enabled() {
    return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
  }
  get currentImageContainer() {
    return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
  }
  get usingSprites() {
    return Object.keys(this.thumbnails[0].frames[0]).includes("w");
  }
  get thumbAspectRatio() {
    return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
  }
  get thumbContainerHeight() {
    if (this.mouseDown) {
      const {
        height: e
      } = ja(this.thumbAspectRatio, {
        width: this.player.media.clientWidth,
        height: this.player.media.clientHeight
      });
      return e;
    }
    return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
  }
  get currentImageElement() {
    return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
  }
  set currentImageElement(e) {
    this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e;
  }
}
const $n = {
  // Add elements to HTML5 media (source, tracks, etc)
  insertElements(i, e) {
    b.string(e) ? Ua(i, this.media, {
      src: e
    }) : b.array(e) && e.forEach((t) => {
      Ua(i, this.media, t);
    });
  },
  // Update source
  // Sources are not checked for support so be careful
  change(i) {
    if (!Bl(i, "sources.length")) {
      this.debug.warn("Invalid source format");
      return;
    }
    Nt.cancelRequests.call(this), this.destroy(() => {
      this.options.quality = [], _t(this.media), this.media = null, b.element(this.elements.container) && this.elements.container.removeAttribute("class");
      const {
        sources: e,
        type: t
      } = i, [{
        provider: s = Ft.html5,
        src: n
      }] = e, r = s === "html5" ? t : "div", a = s === "html5" ? {} : {
        src: n
      };
      Object.assign(this, {
        provider: s,
        type: t,
        // Check for support
        supported: Ae.check(t, s, this.config.playsinline),
        // Create new element
        media: Z(r, a)
      }), this.elements.container.appendChild(this.media), b.boolean(i.autoplay) && (this.config.autoplay = i.autoplay), this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), this.config.autoplay && this.media.setAttribute("autoplay", ""), b.empty(i.poster) || (this.poster = i.poster), this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), this.config.playsinline && this.media.setAttribute("playsinline", "")), me.addStyleHook.call(this), this.isHTML5 && $n.insertElements.call(this, "source", e), this.config.title = i.title, Ql.setup.call(this), this.isHTML5 && Object.keys(i).includes("tracks") && $n.insertElements.call(this, "track", i.tracks), (this.isHTML5 || this.isEmbed && !this.supported.ui) && me.build.call(this), this.isHTML5 && this.media.load(), b.empty(i.previewThumbnails) || (Object.assign(this.config.previewThumbnails, i.previewThumbnails), this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new Nn(this))), this.fullscreen.update();
    }, !0);
  }
};
class Os {
  constructor(e, t) {
    if (U(this, "play", () => b.function(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(() => this.ads.play()).catch(() => pt(this.media.play())), this.media.play()) : null), U(this, "pause", () => !this.playing || !b.function(this.media.pause) ? null : this.media.pause()), U(this, "togglePlay", (o) => (b.boolean(o) ? o : !this.playing) ? this.play() : this.pause()), U(this, "stop", () => {
      this.isHTML5 ? (this.pause(), this.restart()) : b.function(this.media.stop) && this.media.stop();
    }), U(this, "restart", () => {
      this.currentTime = 0;
    }), U(this, "rewind", (o) => {
      this.currentTime -= b.number(o) ? o : this.config.seekTime;
    }), U(this, "forward", (o) => {
      this.currentTime += b.number(o) ? o : this.config.seekTime;
    }), U(this, "increaseVolume", (o) => {
      const c = this.media.muted ? 0 : this.volume;
      this.volume = c + (b.number(o) ? o : 0);
    }), U(this, "decreaseVolume", (o) => {
      this.increaseVolume(-o);
    }), U(this, "airplay", () => {
      Ae.airplay && this.media.webkitShowPlaybackTargetPicker();
    }), U(this, "toggleControls", (o) => {
      if (this.supported.ui && !this.isAudio) {
        const c = Ii(this.elements.container, this.config.classNames.hideControls), l = typeof o > "u" ? void 0 : !o, u = de(this.elements.container, this.config.classNames.hideControls, l);
        if (u && b.array(this.config.controls) && this.config.controls.includes("settings") && !b.empty(this.config.settings) && $.toggleMenu.call(this, !1), u !== c) {
          const h = u ? "controlshidden" : "controlsshown";
          J.call(this, this.media, h);
        }
        return !u;
      }
      return !1;
    }), U(this, "on", (o, c) => {
      ue.call(this, this.elements.container, o, c);
    }), U(this, "once", (o, c) => {
      gr.call(this, this.elements.container, o, c);
    }), U(this, "off", (o, c) => {
      Pi(this.elements.container, o, c);
    }), U(this, "destroy", (o, c = !1) => {
      if (!this.ready)
        return;
      const l = () => {
        document.body.style.overflow = "", this.embed = null, c ? (Object.keys(this.elements).length && (_t(this.elements.buttons.play), _t(this.elements.captions), _t(this.elements.controls), _t(this.elements.wrapper), this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, this.elements.wrapper = null), b.function(o) && o()) : (vm.call(this), Nt.cancelRequests.call(this), Li(this.elements.original, this.elements.container), J.call(this, this.elements.original, "destroyed", !0), b.function(o) && o.call(this.elements.original), this.ready = !1, setTimeout(() => {
          this.elements = null, this.media = null;
        }, 200));
      };
      this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (me.toggleNativeControls.call(this, !0), l()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), this.embed !== null && b.function(this.embed.destroy) && this.embed.destroy(), l()) : this.isVimeo && (this.embed !== null && this.embed.unload().then(l), setTimeout(l, 200));
    }), U(this, "supports", (o) => Ae.mime.call(this, o)), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = Ae.touch, this.media = e, b.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || b.nodeList(this.media) || b.array(this.media)) && (this.media = this.media[0]), this.config = xe({}, Xl, Os.defaults, t || {}, (() => {
      try {
        return JSON.parse(this.media.getAttribute("data-plyr-config"));
      } catch {
        return {};
      }
    })()), this.elements = {
      container: null,
      fullscreen: null,
      captions: null,
      buttons: {},
      display: {},
      progress: {},
      inputs: {},
      settings: {
        popup: null,
        menu: null,
        panels: {},
        buttons: {}
      }
    }, this.captions = {
      active: null,
      currentTrack: -1,
      meta: /* @__PURE__ */ new WeakMap()
    }, this.fullscreen = {
      active: !1
    }, this.options = {
      speed: [],
      quality: []
    }, this.debug = new Nm(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", Ae), b.nullOrUndefined(this.media) || !b.element(this.media)) {
      this.debug.error("Setup failed: no suitable element passed");
      return;
    }
    if (this.media.plyr) {
      this.debug.warn("Target already setup");
      return;
    }
    if (!this.config.enabled) {
      this.debug.error("Setup failed: disabled by config");
      return;
    }
    if (!Ae.check().api) {
      this.debug.error("Setup failed: no support");
      return;
    }
    const s = this.media.cloneNode(!0);
    s.autoplay = !1, this.elements.original = s;
    const n = this.media.tagName.toLowerCase();
    let r = null, a = null;
    switch (n) {
      case "div":
        if (r = this.media.querySelector("iframe"), b.element(r)) {
          if (a = Yl(r.getAttribute("src")), this.provider = Fm(a.toString()), this.elements.container = this.media, this.media = r, this.elements.container.className = "", a.search.length) {
            const o = ["1", "true"];
            o.includes(a.searchParams.get("autoplay")) && (this.config.autoplay = !0), o.includes(a.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = o.includes(a.searchParams.get("playsinline")), this.config.youtube.hl = a.searchParams.get("hl")) : this.config.playsinline = !0;
          }
        } else
          this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
        if (b.empty(this.provider) || !Object.values(Ft).includes(this.provider)) {
          this.debug.error("Setup failed: Invalid provider");
          return;
        }
        this.type = un.video;
        break;
      case "video":
      case "audio":
        this.type = n, this.provider = Ft.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
        break;
      default:
        this.debug.error("Setup failed: unsupported type");
        return;
    }
    if (this.supported = Ae.check(this.type, this.provider), !this.supported.api) {
      this.debug.error("Setup failed: no support");
      return;
    }
    this.eventListeners = [], this.listeners = new $m(this), this.storage = new Ps(this), this.media.plyr = this, b.element(this.elements.container) || (this.elements.container = Z("div"), Ul(this.media, this.elements.container)), me.migrateStyles.call(this), me.addStyleHook.call(this), Ql.setup.call(this), this.config.debug && ue.call(this, this.elements.container, this.config.events.join(" "), (o) => {
      this.debug.log(`event: ${o.type}`);
    }), this.fullscreen = new lt(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && me.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new zm(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", () => pt(this.play())), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new Nn(this));
  }
  // ---------------------------------------
  // API
  // ---------------------------------------
  /**
   * Types and provider helpers
   */
  get isHTML5() {
    return this.provider === Ft.html5;
  }
  get isEmbed() {
    return this.isYouTube || this.isVimeo;
  }
  get isYouTube() {
    return this.provider === Ft.youtube;
  }
  get isVimeo() {
    return this.provider === Ft.vimeo;
  }
  get isVideo() {
    return this.type === un.video;
  }
  get isAudio() {
    return this.type === un.audio;
  }
  /**
   * Get playing state
   */
  get playing() {
    return !!(this.ready && !this.paused && !this.ended);
  }
  /**
   * Get paused state
   */
  get paused() {
    return !!this.media.paused;
  }
  /**
   * Get stopped state
   */
  get stopped() {
    return !!(this.paused && this.currentTime === 0);
  }
  /**
   * Get ended state
   */
  get ended() {
    return !!this.media.ended;
  }
  /**
   * Seek to a time
   * @param {number} input - where to seek to in seconds. Defaults to 0 (the start)
   */
  set currentTime(e) {
    if (!this.duration)
      return;
    const t = b.number(e) && e > 0;
    this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log(`Seeking to ${this.currentTime} seconds`);
  }
  /**
   * Get current time
   */
  get currentTime() {
    return Number(this.media.currentTime);
  }
  /**
   * Get buffered
   */
  get buffered() {
    const {
      buffered: e
    } = this.media;
    return b.number(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0;
  }
  /**
   * Get seeking status
   */
  get seeking() {
    return !!this.media.seeking;
  }
  /**
   * Get the duration of the current media
   */
  get duration() {
    const e = Number.parseFloat(this.config.duration), t = (this.media || {}).duration, s = !b.number(t) || t === 1 / 0 ? 0 : t;
    return e || s;
  }
  /**
   * Set the player volume
   * @param {number} value - must be between 0 and 1. Defaults to the value from local storage and config.volume if not set in storage
   */
  set volume(e) {
    let t = e;
    const s = 1, n = 0;
    b.string(t) && (t = Number(t)), b.number(t) || (t = this.storage.get("volume")), b.number(t) || ({
      volume: t
    } = this.config), t > s && (t = s), t < n && (t = n), this.config.volume = t, this.media.volume = t, !b.empty(e) && this.muted && t > 0 && (this.muted = !1);
  }
  /**
   * Get the current player volume
   */
  get volume() {
    return Number(this.media.volume);
  }
  /**
   * Set muted state
   * @param {boolean} mute
   */
  set muted(e) {
    let t = e;
    b.boolean(t) || (t = this.storage.get("muted")), b.boolean(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t;
  }
  /**
   * Get current muted state
   */
  get muted() {
    return !!this.media.muted;
  }
  /**
   * Check if the media has audio
   */
  get hasAudio() {
    return !this.isHTML5 || this.isAudio ? !0 : !!this.media.mozHasAudio || !!this.media.webkitAudioDecodedByteCount || !!(this.media.audioTracks && this.media.audioTracks.length);
  }
  /**
   * Set playback speed
   * @param {number} input - the speed of playback (0.5-2.0)
   */
  set speed(e) {
    let t = null;
    b.number(e) && (t = e), b.number(t) || (t = this.storage.get("speed")), b.number(t) || (t = this.config.speed.selected);
    const {
      minimumSpeed: s,
      maximumSpeed: n
    } = this;
    t = Zl(t, s, n), this.config.speed.selected = t, setTimeout(() => {
      this.media && (this.media.playbackRate = t);
    }, 0);
  }
  /**
   * Get current playback speed
   */
  get speed() {
    return Number(this.media.playbackRate);
  }
  /**
   * Get the minimum allowed speed
   */
  get minimumSpeed() {
    return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? 0.5 : 0.0625;
  }
  /**
   * Get the maximum allowed speed
   */
  get maximumSpeed() {
    return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16;
  }
  /**
   * Set playback quality
   * Currently HTML5 & YouTube only
   * @param {number} input - Quality level
   */
  set quality(e) {
    const t = this.config.quality, s = this.options.quality;
    if (!s.length)
      return;
    let n = [!b.empty(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(b.number), r = !0;
    if (!s.includes(n)) {
      const a = Gl(s, n);
      this.debug.warn(`Unsupported quality option: ${n}, using ${a} instead`), n = a, r = !1;
    }
    t.selected = n, this.media.quality = n, r && this.storage.set({
      quality: n
    });
  }
  /**
   * Get current quality level
   */
  get quality() {
    return this.media.quality;
  }
  /**
   * Toggle loop
   * TODO: Finish fancy new logic. Set the indicator on load as user may pass loop as config
   * @param {boolean} input - Whether to loop or not
   */
  set loop(e) {
    const t = b.boolean(e) ? e : this.config.loop.active;
    this.config.loop.active = t, this.media.loop = t;
  }
  /**
   * Get current loop state
   */
  get loop() {
    return !!this.media.loop;
  }
  /**
   * Set new media source
   * @param {object} input - The new source object (see docs)
   */
  set source(e) {
    $n.change.call(this, e);
  }
  /**
   * Get current source
   */
  get source() {
    return this.media.currentSrc;
  }
  /**
   * Get a download URL (either source or custom)
   */
  get download() {
    const {
      download: e
    } = this.config.urls;
    return b.url(e) ? e : this.source;
  }
  /**
   * Set the download URL
   */
  set download(e) {
    b.url(e) && (this.config.urls.download = e, $.setDownloadUrl.call(this));
  }
  /**
   * Set the poster image for a video
   * @param {string} input - the URL for the new poster image
   */
  set poster(e) {
    if (!this.isVideo) {
      this.debug.warn("Poster can only be set for video");
      return;
    }
    me.setPoster.call(this, e, !1).catch(() => {
    });
  }
  /**
   * Get the current poster image
   */
  get poster() {
    return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null;
  }
  /**
   * Get the current aspect ratio in use
   */
  get ratio() {
    if (!this.isVideo)
      return null;
    const e = Ri(mr.call(this));
    return b.array(e) ? e.join(":") : e;
  }
  /**
   * Set video aspect ratio
   */
  set ratio(e) {
    if (!this.isVideo) {
      this.debug.warn("Aspect ratio can only be set for video");
      return;
    }
    if (!b.string(e) || !Vl(e)) {
      this.debug.error(`Invalid aspect ratio specified (${e})`);
      return;
    }
    this.config.ratio = Ri(e), fs.call(this);
  }
  /**
   * Set the autoplay state
   * @param {boolean} input - Whether to autoplay or not
   */
  set autoplay(e) {
    this.config.autoplay = b.boolean(e) ? e : this.config.autoplay;
  }
  /**
   * Get the current autoplay state
   */
  get autoplay() {
    return !!this.config.autoplay;
  }
  /**
   * Toggle captions
   * @param {boolean} input - Whether to enable captions
   */
  toggleCaptions(e) {
    he.toggle.call(this, e, !1);
  }
  /**
   * Set the caption track by index
   * @param {number} input - Caption index
   */
  set currentTrack(e) {
    he.set.call(this, e, !1), he.setup.call(this);
  }
  /**
   * Get the current caption track index (-1 if disabled)
   */
  get currentTrack() {
    const {
      toggled: e,
      currentTrack: t
    } = this.captions;
    return e ? t : -1;
  }
  /**
   * Set the wanted language for captions
   * Since tracks can be added later it won't update the actual caption track until there is a matching track
   * @param {string} input - Two character ISO language code (e.g. EN, FR, PT, etc)
   */
  set language(e) {
    he.setLanguage.call(this, e, !1);
  }
  /**
   * Get the current track's language
   */
  get language() {
    return (he.getCurrentTrack.call(this) || {}).language;
  }
  /**
   * Toggle picture-in-picture playback on WebKit/MacOS
   * TODO: update player with state, support, enabled
   * TODO: detect outside changes
   */
  set pip(e) {
    if (!Ae.pip)
      return;
    const t = b.boolean(e) ? e : !this.pip;
    b.function(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? cn.active : cn.inactive), b.function(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture());
  }
  /**
   * Get the current picture-in-picture state
   */
  get pip() {
    return Ae.pip ? b.empty(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === cn.active : null;
  }
  /**
   * Sets the preview thumbnails for the current source
   */
  setPreviewThumbnails(e) {
    this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, e), this.config.previewThumbnails.enabled && (this.previewThumbnails = new Nn(this));
  }
  /**
   * Check for support
   * @param {string} type - Player type (audio/video)
   * @param {string} provider - Provider (html5/youtube/vimeo)
   */
  static supported(e, t) {
    return Ae.check(e, t);
  }
  /**
   * Load an SVG sprite into the page
   * @param {string} url - URL for the SVG sprite
   * @param {string} [id] - Unique ID
   */
  static loadSprite(e, t) {
    return Wl(e, t);
  }
  /**
   * Setup multiple instances
   * @param {*} selector
   * @param {object} options
   */
  static setup(e, t = {}) {
    let s = null;
    return b.string(e) ? s = Array.from(document.querySelectorAll(e)) : b.nodeList(e) ? s = Array.from(e) : b.array(e) && (s = e.filter(b.element)), b.empty(s) ? null : s.map((n) => new Os(n, t));
  }
}
Os.defaults = pm(Xl);
function Qm({
  enabled: i,
  videoId: e,
  muted: t,
  autoPlay: s,
  loop: n,
  hideNativeUi: r,
  controlsVariant: a = "standard",
  onReady: o,
  onPlay: c,
  onPause: l,
  onProgress: u,
  onEnded: h,
  onMuteChange: d,
  onAutoplayBlocked: g
}) {
  const f = Ve(null), m = Ve(null), p = Ve({
    onReady: o,
    onPlay: c,
    onPause: l,
    onProgress: u,
    onEnded: h,
    onMuteChange: d,
    onAutoplayBlocked: g
  });
  return Ie(() => {
    p.current = {
      onReady: o,
      onPlay: c,
      onPause: l,
      onProgress: u,
      onEnded: h,
      onMuteChange: d,
      onAutoplayBlocked: g
    };
  }, [g, h, d, l, c, u, o]), Ie(() => {
    if (!i || !f.current)
      return;
    const T = ur(), E = f.current, x = a === "vsl" || a === "minimal" || r ? [] : ["play-large", "play", "progress", "current-time", "mute", "volume", "fullscreen"];
    E.dataset.plyrProvider = "youtube", E.dataset.plyrEmbedId = e;
    const A = new Os(E, {
      autoplay: s,
      muted: t,
      clickToPlay: !1,
      controls: x,
      youtube: {
        noCookie: !0,
        rel: 0,
        showinfo: 0,
        modestbranding: 1,
        iv_load_policy: 3,
        controls: 0,
        disablekb: 1,
        playsinline: 1
      }
    });
    let _ = n;
    const S = {
      async play() {
        try {
          await Promise.resolve(A.play());
        } catch (I) {
          throw T.emit("autoplayblocked"), I;
        }
      },
      pause() {
        A.pause();
      },
      mute(I) {
        A.muted = I, T.emit("mutechange", A.muted);
      },
      seek(I) {
        A.currentTime = I, T.emit("progress", A.currentTime);
      },
      setLoop(I) {
        _ = I;
      },
      destroy() {
        T.clear(), A.destroy();
      },
      getCurrentTime() {
        return A.currentTime || 0;
      },
      getDuration() {
        return Number.isFinite(A.duration) ? A.duration : 0;
      },
      isMuted() {
        return A.muted;
      },
      onReady(I) {
        return T.on("ready", I);
      },
      onPlay(I) {
        return T.on("play", I);
      },
      onPause(I) {
        return T.on("pause", I);
      },
      onProgress(I) {
        return T.on("progress", I);
      },
      onEnded(I) {
        return T.on("ended", I);
      },
      onMuteChange(I) {
        return T.on("mutechange", I);
      },
      onAutoplayBlocked(I) {
        return T.on("autoplayblocked", I);
      }
    }, L = hr(S, {
      onReady: (I) => {
        var R, w;
        return (w = (R = p.current).onReady) == null ? void 0 : w.call(R, I);
      },
      onPlay: () => {
        var I, R;
        return (R = (I = p.current).onPlay) == null ? void 0 : R.call(I);
      },
      onPause: () => {
        var I, R;
        return (R = (I = p.current).onPause) == null ? void 0 : R.call(I);
      },
      onProgress: (I) => {
        var R, w;
        return (w = (R = p.current).onProgress) == null ? void 0 : w.call(R, I);
      },
      onEnded: () => {
        var I, R;
        return (R = (I = p.current).onEnded) == null ? void 0 : R.call(I);
      },
      onMuteChange: (I) => {
        var R, w;
        return (w = (R = p.current).onMuteChange) == null ? void 0 : w.call(R, I);
      },
      onAutoplayBlocked: () => {
        var I, R;
        return (R = (I = p.current).onAutoplayBlocked) == null ? void 0 : R.call(I);
      }
    });
    return m.current = S, A.on("ready", () => {
      T.emit("ready", S);
    }), A.on("playing", () => {
      T.emit("play");
    }), A.on("pause", () => {
      T.emit("pause");
    }), A.on("timeupdate", () => {
      T.emit("progress", A.currentTime);
    }), A.on("volumechange", () => {
      T.emit("mutechange", A.muted);
    }), A.on("ended", () => {
      if (_) {
        A.restart(), Promise.resolve(A.play()).catch(() => {
        });
        return;
      }
      T.emit("ended");
    }), () => {
      L.forEach((I) => I()), S.destroy(), m.current = null;
    };
  }, [a, i, r, e]), Ie(() => {
    var T;
    i && ((T = m.current) == null || T.mute(t));
  }, [i, t]), Ie(() => {
    var T;
    i && ((T = m.current) == null || T.setLoop(n));
  }, [i, n]), {
    mountRef: f,
    providerRef: m
  };
}
function Zm({
  provider: i,
  ...e
}) {
  const t = Ve(null), s = Ve(null), n = $g({
    ...e,
    enabled: e.enabled && i === "bunnynet"
  }), r = Bg({
    ...e,
    enabled: e.enabled && i === "html5"
  }), a = Qm({
    ...e,
    enabled: e.enabled && i === "youtube"
  }), o = Kg(i, {
    ...e,
    enabled: e.enabled && (i === "vimeo" || i === "wistia")
  });
  switch (i) {
    case "bunnynet":
      return {
        surface: "video",
        mountRef: n.mountRef,
        providerRef: n.providerRef
      };
    case "html5":
      return {
        surface: "video",
        mountRef: r.mountRef,
        providerRef: r.providerRef
      };
    case "youtube":
      return {
        surface: "embed",
        mountRef: a.mountRef,
        providerRef: a.providerRef
      };
    case "vimeo":
    case "wistia":
      return {
        surface: "embed",
        mountRef: o.mountRef,
        providerRef: o.providerRef
      };
    default:
      return {
        surface: "video",
        mountRef: t,
        providerRef: s
      };
  }
}
function ti(...i) {
  return i.filter(Boolean).join(" ");
}
function np({
  provider: i,
  videoId: e,
  vslMode: t = !1,
  vslProgressBarColor: s,
  mutedPreview: n = { enabled: !1, overlayPosition: "center" },
  lazyLoadYoutube: r,
  stickyOnScroll: a,
  stickyScroll: o,
  resumePlayback: c = !1,
  onTimeUpdate: l,
  callToAction: u,
  hideYoutubeUi: h,
  smartPoster: d,
  className: g
}) {
  const f = !!t, m = !!n.enabled && !f, p = f || m, T = i === "youtube" && !!r && !p, E = i === "youtube" && !!h, v = i === "youtube" || i === "bunnynet" || i === "html5", x = !!(a ?? o), A = f ? "vsl" : "standard", _ = `kurukin-player:resume:${i}:${e}`, [S, L] = Ye(!T), [I, R] = Ye(!1), [w, O] = Ye(!1), [K, W] = Ye(p), [B, P] = Ye(f), [V, N] = Ye(0), [H, X] = Ye(0), [F, M] = Ye(m), [te, oe] = Ye(m), [Q, ie] = Ye(T), [ke, Re] = Ye(!1), [be, je] = Ye(!1), [Qe, Gt] = Ye(!1), Ct = Ve(p ? "autoplay" : null), ut = Ve(!1), Jt = Ve(-1), ce = Ce((z) => {
    R(!0), W(z.isMuted()), X(z.getDuration());
  }, []), Oe = Ce(() => {
    O(!0), ie(!1), Gt(!1);
  }, []), We = Ce(() => {
    O(!1);
  }, []), bt = Ce((z) => {
    if (N(z), l == null || l(z), !c || f)
      return;
    const ae = Math.floor(z);
    if (!(ae <= 0 || ae === Jt.current || typeof window > "u"))
      try {
        window.localStorage.setItem(_, String(ae)), Jt.current = ae;
      } catch (Ne) {
        console.warn("[KurukinPlayer] No se pudo persistir el progreso del video.", Ne);
      }
  }, [f, l, c, _]), Ze = Ce(() => {
    if (O(!1), N(0), !(!c || typeof window > "u"))
      try {
        window.localStorage.removeItem(_), Jt.current = -1;
      } catch (z) {
        console.warn("[KurukinPlayer] No se pudo limpiar el progreso guardado.", z);
      }
  }, [c, _]), wt = Ce((z) => {
    W(z);
  }, []), St = Ce(() => {
    Gt(!0), ie(!f), oe(!1), O(!1);
  }, [f]), le = Zm({
    provider: i,
    enabled: S,
    videoId: e,
    autoPlay: p,
    muted: K,
    loop: F,
    hideNativeUi: h,
    controlsVariant: A,
    onReady: ce,
    onPlay: Oe,
    onPause: We,
    onProgress: bt,
    onEnded: Ze,
    onMuteChange: wt,
    onAutoplayBlocked: St
  }), xt = Ce(async (z) => {
    const ae = Ct.current;
    if (ae) {
      Ct.current = null;
      try {
        await z.play(), ie(!1), Gt(!1);
      } catch {
        z.pause(), ie(!f), oe(!1), ae === "autoplay" && Gt(!0);
      }
    }
  }, [f]);
  Ie(() => {
    const z = !!t, ae = !!n.enabled && !z, Ne = z || ae, ms = i === "youtube" && !!r && !Ne;
    L(!ms), R(!1), O(!1), W(Ne), P(z), N(0), X(0), M(ae), oe(ae), ie(ms), Gt(!1), Re(!1), je(!1), ut.current = !1, Jt.current = -1, Ct.current = Ne ? "autoplay" : null;
  }, [i, e, r, n.enabled, t]), Ie(() => {
    !S || !I || !le.providerRef.current || xt(le.providerRef.current);
  }, [le.providerRef, I, xt, S]), Ie(() => {
    var ae;
    if (!I || H > 0)
      return;
    const z = ((ae = le.providerRef.current) == null ? void 0 : ae.getDuration()) ?? 0;
    z > 0 && X(z);
  }, [le.providerRef, V, H, I]), Ie(() => {
    if (!c || f || !I || ut.current || typeof window > "u")
      return;
    const z = le.providerRef.current;
    if (z)
      try {
        const ae = Number(window.localStorage.getItem(_));
        if (!Number.isFinite(ae) || ae <= 0) {
          ut.current = !0;
          return;
        }
        const Ne = H > 2 ? Math.min(ae, H - 2) : ae;
        if (Ne <= 0) {
          ut.current = !0;
          return;
        }
        z.seek(Ne), N(Ne), Jt.current = Math.floor(Ne), ut.current = !0;
      } catch (ae) {
        ut.current = !0, console.warn("[KurukinPlayer] No se pudo restaurar el progreso guardado.", ae);
      }
  }, [le.providerRef, H, I, f, c, _]), Ie(() => {
    var z;
    !(u != null && u.enabled) || ke || be || te || B || V >= u.displayAtSeconds && (Re(!0), je(!0), (z = le.providerRef.current) == null || z.pause());
  }, [u, le.providerRef, ke, V, B, be, te]);
  const _e = Ce(
    async (z, ae) => {
      var Ne, ms, yr;
      if (Ct.current = z, ae != null && ae.restartFromZero && (N(0), (Ne = le.providerRef.current) == null || Ne.seek(0)), ae != null && ae.unmute && (W(!1), P(!1), M(!1), oe(!1), (ms = le.providerRef.current) == null || ms.mute(!1), (yr = le.providerRef.current) == null || yr.setLoop(!1)), !S) {
        L(!0);
        return;
      }
      le.providerRef.current && await xt(le.providerRef.current);
    },
    [le.providerRef, xt, S]
  ), Kt = Ce(() => {
    _e("user", { unmute: Qe || !m || f });
  }, [Qe, m, f, _e]), $s = Ce(() => {
    je(!1), _e("user");
  }, [_e]), Mi = Ce(() => {
    var z;
    (z = le.providerRef.current) == null || z.seek(0), N(0), _e("user", { unmute: !0 });
  }, [le.providerRef, _e]), Bs = Ce(() => {
    var z, ae;
    W(!1), P(!1), (z = le.providerRef.current) == null || z.mute(!1), (ae = le.providerRef.current) == null || ae.seek(0), N(0), _e("user", { unmute: !0, restartFromZero: !0 });
  }, [le.providerRef, _e]), gs = Ce(() => {
    _e("user");
  }, [_e]), Vt = Ce(() => {
    const z = le.providerRef.current;
    if (!(B || Q || be)) {
      if (w) {
        z == null || z.pause();
        return;
      }
      if (z) {
        z.play().catch(() => {
          _e("user");
        });
        return;
      }
      _e("user");
    }
  }, [le.providerRef, w, B, _e, be, Q]), Jl = Ce(() => {
    var z;
    if (w) {
      (z = le.providerRef.current) == null || z.pause();
      return;
    }
    _e("user");
  }, [le.providerRef, w, _e]), ec = Ce(() => {
    var ae, Ne;
    const z = !K;
    W(z), (ae = le.providerRef.current) == null || ae.mute(z), z || (M(!1), oe(!1), (Ne = le.providerRef.current) == null || Ne.setLoop(!1));
  }, [le.providerRef, K]), Fi = Ce(
    (z) => {
      var ae;
      N(z), (ae = le.providerRef.current) == null || ae.seek(z);
    },
    [le.providerRef]
  ), tc = Ce(() => {
    Fi(0), _e("user");
  }, [Fi, _e]), sc = Qe ? (d == null ? void 0 : d.title) || "El navegador bloqueó el autoplay" : (d == null ? void 0 : d.title) || "Video listo para reproducir", ic = Qe ? (d == null ? void 0 : d.description) || "Haz click para iniciar la reproducción manualmente." : (d == null ? void 0 : d.description) || "Pulsa play para ver el video con nuestra experiencia premium.", nc = !f && !w && I && !F && !B && !be && !Q, rc = !f && (S && I && !Q && !be && !te && !B), ac = S && f && !Q, oc = S && f && !Q && !be, lc = f && !B && !w && !Q && !be, cc = le.surface === "video" ? le.mountRef : void 0;
  return /* @__PURE__ */ Xe(
    "div",
    {
      className: ti(
        "relative aspect-video w-full overflow-hidden rounded-2xl bg-black",
        E && "[&_iframe]:scale-[1.45] [&_iframe]:origin-center",
        g
      ),
      "data-provider": i,
      "data-vsl-mode": f ? "true" : "false",
      "data-sticky-enabled": x ? "true" : void 0,
      children: [
        S ? /* @__PURE__ */ Y("div", { className: ti("h-full w-full", f && "pointer-events-none"), children: le.surface === "video" ? /* @__PURE__ */ Y(
          "video",
          {
            ref: cc,
            className: ti("w-full h-full object-cover", f && "pointer-events-none"),
            playsInline: !0,
            controls: !1,
            onPlay: () => O(!0),
            onPause: () => O(!1),
            controlsList: f ? "nodownload noplaybackrate noremoteplayback" : void 0,
            disablePictureInPicture: f,
            muted: K,
            autoPlay: p
          }
        ) : /* @__PURE__ */ Y(
          "div",
          {
            ref: le.mountRef,
            className: ti("w-full h-full object-cover", f && "pointer-events-none")
          }
        ) }) : /* @__PURE__ */ Y("div", { className: "h-full w-full bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_35%),linear-gradient(135deg,#0a0a0b,#111827)]" }),
        /* @__PURE__ */ Y(
          Dc,
          {
            visible: Q,
            imageUrl: d == null ? void 0 : d.imageUrl,
            eyebrow: Qe ? (d == null ? void 0 : d.eyebrow) || "Autoplay bloqueado" : (d == null ? void 0 : d.eyebrow) || (T ? "Smart Poster" : "Universal Video Engine"),
            title: sc,
            description: ic,
            buttonText: (d == null ? void 0 : d.buttonText) || "Reproducir video",
            onPlay: Kt
          }
        ),
        S && m && te ? /* @__PURE__ */ Y(Cc, { config: n, onActivateSound: Mi }) : null,
        S && f && B && !Q ? /* @__PURE__ */ Y(Pc, { onUnmute: Bs }) : null,
        oc ? /* @__PURE__ */ Y(
          "button",
          {
            type: "button",
            className: "absolute inset-0 z-40 cursor-pointer bg-transparent",
            onClick: Vt,
            "aria-label": w ? "Pausar video" : "Reproducir video"
          }
        ) : null,
        ac ? /* @__PURE__ */ Y(_c, { color: s, currentTime: V, duration: H }) : null,
        lc ? /* @__PURE__ */ Y("div", { className: "absolute inset-0 z-30 flex items-center justify-center bg-black/20 backdrop-blur-[2px] pointer-events-none transition-all", children: /* @__PURE__ */ Y("div", { className: "rounded-full bg-black/40 p-6 md:p-8", children: /* @__PURE__ */ Y("svg", { className: "ml-2 h-12 w-12 text-white/70 md:h-16 md:w-16", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ Y("path", { d: "M8 5v14l11-7z" }) }) }) }) : null,
        nc ? /* @__PURE__ */ Y(
          "div",
          {
            className: "absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/50 backdrop-blur-md",
            onClick: gs,
            role: "button",
            tabIndex: 0,
            onKeyDown: (z) => {
              (z.key === "Enter" || z.key === " ") && (z.preventDefault(), gs());
            },
            children: /* @__PURE__ */ Y("span", { className: "flex h-20 w-20 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30 backdrop-blur", children: /* @__PURE__ */ Y(_i, { className: "h-10 w-10 fill-white text-white" }) })
          }
        ) : null,
        rc ? /* @__PURE__ */ Y(
          wc,
          {
            currentTime: V,
            duration: H,
            isMuted: K,
            isPlaying: w,
            onRestart: tc,
            onSeek: Fi,
            onToggleMute: ec,
            onTogglePlay: Jl,
            variant: A === "vsl" ? "standard" : A
          }
        ) : null,
        v ? null : /* @__PURE__ */ Y("div", { className: "absolute inset-0 z-30 flex items-center justify-center bg-black/70 px-6 text-center text-white", children: /* @__PURE__ */ Xe("div", { className: "rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm", children: [
          /* @__PURE__ */ Y("p", { className: "text-sm font-semibold uppercase tracking-[0.24em] text-amber-300", children: "Provider pendiente" }),
          /* @__PURE__ */ Xe("p", { className: "mt-2 text-sm text-white/80", children: [
            i,
            " quedó preparado en la factory, pero su adapter aún no está implementado."
          ] })
        ] }) }),
        u != null && u.enabled && be ? /* @__PURE__ */ Y(Lc, { callToAction: u, onDismiss: $s }) : null
      ]
    }
  );
}
export {
  np as KurukinPlayer
};
