import { jsxs as t, jsx as l } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: e,
  titleId: o,
  ...d
}, a) => {
  const n = m(), i = e ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: a, "aria-labelledby": i, ...d, children: [
    e ? /* @__PURE__ */ l("title", { id: i, children: e }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M19.125 12.75A1.125 1.125 0 0 1 18 13.875H6a1.125 1.125 0 1 1 0-2.25h12a1.125 1.125 0 0 1 1.125 1.125m2.625-5.625H2.25a1.125 1.125 0 0 0 0 2.25h19.5a1.125 1.125 0 0 0 0-2.25m-7.5 9h-4.5a1.125 1.125 0 1 0 0 2.25h4.5a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
s.displayName = "FunnelSimple";
export {
  s as FunnelSimple
};
//# sourceMappingURL=FunnelSimple.js.map
