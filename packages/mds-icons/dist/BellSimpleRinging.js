import { jsxs as m, jsx as r } from "react/jsx-runtime";
import { forwardRef as t, useId as c } from "react";
const s = t(({
  size: e = "1em",
  title: i,
  titleId: a,
  ...o
}, d) => {
  const n = c(), l = i ? a ?? n : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: d, "aria-labelledby": l, ...o, children: [
    i ? /* @__PURE__ */ r("title", { id: l, children: i }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M16.125 21.375A1.125 1.125 0 0 1 15 22.5H9a1.125 1.125 0 1 1 0-2.25h6a1.125 1.125 0 0 1 1.125 1.125m5.526-15.892a10.8 10.8 0 0 0-3.8-4.184 1.125 1.125 0 1 0-1.2 1.903 8.45 8.45 0 0 1 3 3.316 1.125 1.125 0 0 0 1.519.48 1.125 1.125 0 0 0 .48-1.515M4.347 6.518a8.45 8.45 0 0 1 3-3.316A1.125 1.125 0 1 0 6.15 1.299a10.8 10.8 0 0 0-3.8 4.184 1.125 1.125 0 0 0 1.997 1.035m16.267 9.22a1.875 1.875 0 0 1-1.489 3.012H4.875a1.875 1.875 0 0 1-1.491-3.011c.672-.875 1.474-2.496 1.488-5.245a7.126 7.126 0 1 1 14.253.006c.014 2.743.817 4.364 1.489 5.239m-2.207.762c-.765-1.219-1.518-3.147-1.532-5.994a4.875 4.875 0 0 0-9.75-.006c-.014 2.852-.767 4.781-1.532 6z" })
  ] });
});
s.displayName = "BellSimpleRinging";
export {
  s as BellSimpleRinging
};
//# sourceMappingURL=BellSimpleRinging.js.map
