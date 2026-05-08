import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as c } from "react";
const h = m(({
  size: r = "1em",
  title: i,
  titleId: l,
  ...o
}, d) => {
  const n = c(), a = i ? l ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: d, "aria-labelledby": a, ...o, children: [
    i ? /* @__PURE__ */ e("title", { id: a, children: i }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.17 6.998a1.125 1.125 0 0 1-1.517-.48 8.45 8.45 0 0 0-3-3.316 1.124 1.124 0 1 1 1.2-1.903 10.8 10.8 0 0 1 3.8 4.184 1.123 1.123 0 0 1-.483 1.515m-16.823-.48a8.45 8.45 0 0 1 3-3.316A1.125 1.125 0 1 0 6.15 1.299a10.8 10.8 0 0 0-3.8 4.184 1.125 1.125 0 0 0 1.997 1.035m16.267 9.22a1.875 1.875 0 0 1-1.489 3.012h-3.018a4.125 4.125 0 0 1-8.214 0H4.875a1.875 1.875 0 0 1-1.491-3.011c.672-.875 1.474-2.496 1.488-5.245a7.126 7.126 0 1 1 14.253.006c.014 2.743.817 4.364 1.489 5.239m-6.776 3.012h-3.675a1.875 1.875 0 0 0 3.675 0m4.57-2.25c-.766-1.219-1.519-3.147-1.533-5.994a4.875 4.875 0 0 0-9.75-.006c-.014 2.852-.767 4.781-1.532 6z" })
  ] });
});
h.displayName = "BellRinging";
export {
  h as BellRinging
};
//# sourceMappingURL=BellRinging.js.map
