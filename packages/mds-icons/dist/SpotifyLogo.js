import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const f = m(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...t
}, l) => {
  const a = s(), i = o ? e ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": i, ...t, children: [
    o ? /* @__PURE__ */ d("title", { id: i, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m6.243-7.909a1.125 1.125 0 0 1-1.523.462 10 10 0 0 0-9.44 0 1.126 1.126 0 0 1-1.06-1.983 12.25 12.25 0 0 1 11.559 0 1.125 1.125 0 0 1 .464 1.521m-1.5 3.375a1.124 1.124 0 0 1-1.522.469 6.84 6.84 0 0 0-6.442 0 1.125 1.125 0 0 1-1.058-1.986 9.1 9.1 0 0 1 8.558 0 1.125 1.125 0 0 1 .464 1.517" })
  ] });
});
f.displayName = "SpotifyLogo";
export {
  f as SpotifyLogo
};
//# sourceMappingURL=SpotifyLogo.js.map
