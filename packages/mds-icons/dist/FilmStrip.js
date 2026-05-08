import { jsxs as l, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as a } from "react";
const n = t(({
  size: r = "1em",
  title: h,
  titleId: m,
  ...o
}, d) => {
  const e = a(), v = h ? m ?? e : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": h ? void 0 : !0, role: h ? "img" : void 0, ref: d, "aria-labelledby": v, ...o, children: [
    h ? /* @__PURE__ */ i("title", { id: v, children: h }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M20.25 3.375H3.75A1.875 1.875 0 0 0 1.875 5.25v13.5a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875m-16.125 6h6.75v5.25h-6.75zm9-2.25v-1.5h2.25v1.5zm-2.25 0h-2.25v-1.5h2.25zm0 9.75v1.5h-2.25v-1.5zm2.25 0h2.25v1.5h-2.25zm0-2.25v-5.25h6.75v5.25zm6.75-7.5h-2.25v-1.5h2.25zm-13.5-1.5v1.5h-2.25v-1.5zm-2.25 11.25h2.25v1.5h-2.25zm13.5 1.5v-1.5h2.25v1.5z" })
  ] });
});
n.displayName = "FilmStrip";
export {
  n as FilmStrip
};
//# sourceMappingURL=FilmStrip.js.map
