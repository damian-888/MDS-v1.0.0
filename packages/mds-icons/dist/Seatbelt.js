import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: r = "1em",
  title: e,
  titleId: o,
  ...d
}, t) => {
  const i = h(), l = e ? o ?? i : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: t, "aria-labelledby": l, ...d, children: [
    e ? /* @__PURE__ */ a("title", { id: l, children: e }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M18.75 19.877H8.386l10.33-8.507a1.125 1.125 0 1 0-1.431-1.736l-1.667 1.372a7.8 7.8 0 0 0-1.594-.614 4.5 4.5 0 1 0-4.056 0 7.87 7.87 0 0 0-5.437 5.109 1.125 1.125 0 0 0 2.133.714 5.63 5.63 0 0 1 6.989-3.59l-9.119 7.509a1.125 1.125 0 0 0 .716 1.993h13.5a1.125 1.125 0 1 0 0-2.25M12 4.127a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5m7.182 10.642c.337.747.555 1.544.645 2.36a1.125 1.125 0 0 1-2.237.247 5.6 5.6 0 0 0-.46-1.683 1.125 1.125 0 0 1 2.052-.925" })
  ] });
});
m.displayName = "Seatbelt";
export {
  m as Seatbelt
};
//# sourceMappingURL=Seatbelt.js.map
