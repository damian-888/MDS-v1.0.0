import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as v } from "react";
const h = m(({
  size: r = "1em",
  title: o,
  titleId: l,
  ...e
}, i) => {
  const t = v(), a = o ? l ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": a, ...e, children: [
    o ? /* @__PURE__ */ d("title", { id: a, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M18 1.125H9.75A1.875 1.875 0 0 0 7.875 3v7.031l-3.522 3.525a5.9 5.9 0 1 0 8.344 8.344l6.412-6.412a2.6 2.6 0 0 0 .769-1.857V3A1.875 1.875 0 0 0 18 1.125m-.375 2.25v1.5h-7.5v-1.5zm-6.522 16.931a3.648 3.648 0 1 1-5.156-5.156l3.852-3.851a1.13 1.13 0 0 0 .326-.799V7.125h7.5v2.363a5.63 5.63 0 0 0-4.5 5.512 5.57 5.57 0 0 0 .656 2.632zm6.413-6.412-2.017 2.016a3.38 3.38 0 0 1 2.126-4.092v1.81a.37.37 0 0 1-.11.266" })
  ] });
});
h.displayName = "Sock";
export {
  h as Sock
};
//# sourceMappingURL=Sock.js.map
