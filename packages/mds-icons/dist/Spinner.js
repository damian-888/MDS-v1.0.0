import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: r = "1em",
  title: a,
  titleId: l,
  ...o
}, d) => {
  const n = h(), e = a ? l ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    a ? /* @__PURE__ */ i("title", { id: e, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M13.125 3v3a1.125 1.125 0 1 1-2.25 0V3a1.125 1.125 0 1 1 2.25 0m3.117 5.883a1.13 1.13 0 0 0 .796-.33L19.16 6.43a1.127 1.127 0 0 0-1.594-1.593l-2.119 2.124a1.125 1.125 0 0 0 .795 1.92M21 10.875h-3a1.125 1.125 0 1 0 0 2.25h3a1.125 1.125 0 1 0 0-2.25m-3.962 4.572a1.125 1.125 0 0 0-1.924.797 1.13 1.13 0 0 0 .33.797l2.122 2.122a1.127 1.127 0 0 0 1.594-1.594zM12 16.875A1.125 1.125 0 0 0 10.875 18v3a1.125 1.125 0 1 0 2.25 0v-3A1.125 1.125 0 0 0 12 16.875m-5.038-1.428L4.84 17.57a1.127 1.127 0 0 0 1.594 1.594l2.122-2.122a1.127 1.127 0 1 0-1.594-1.594M7.125 12A1.125 1.125 0 0 0 6 10.875H3a1.125 1.125 0 1 0 0 2.25h3A1.125 1.125 0 0 0 7.125 12m-.694-7.16a1.127 1.127 0 0 0-1.593 1.594l2.124 2.119a1.127 1.127 0 1 0 1.594-1.594z" })
  ] });
});
s.displayName = "Spinner";
export {
  s as Spinner
};
//# sourceMappingURL=Spinner.js.map
