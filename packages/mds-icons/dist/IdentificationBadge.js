import { jsxs as l, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: a = "1em",
  title: i,
  titleId: o,
  ...r
}, t) => {
  const n = h(), d = i ? o ?? n : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": i ? void 0 : !0, role: i ? "img" : void 0, ref: t, "aria-labelledby": d, ...r, children: [
    i ? /* @__PURE__ */ e("title", { id: d, children: i }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M18.75 1.875H5.25A1.875 1.875 0 0 0 3.375 3.75v16.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875V3.75a1.875 1.875 0 0 0-1.875-1.875m-.375 18H5.625V4.125h12.75zm-10.5-13.5A1.125 1.125 0 0 1 9 5.25h6a1.125 1.125 0 0 1 0 2.25H9a1.125 1.125 0 0 1-1.125-1.125m.825 11.94a4.5 4.5 0 0 1 6.6 0 1.125 1.125 0 1 0 1.65-1.53 6.8 6.8 0 0 0-1.8-1.375 4.125 4.125 0 1 0-6.3 0 6.8 6.8 0 0 0-1.8 1.376 1.125 1.125 0 0 0 1.65 1.53m3.3-7.44a1.875 1.875 0 1 1 0 3.75 1.875 1.875 0 0 1 0-3.75" })
  ] });
});
s.displayName = "IdentificationBadge";
export {
  s as IdentificationBadge
};
//# sourceMappingURL=IdentificationBadge.js.map
