import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: r = "1em",
  title: l,
  titleId: e,
  ...i
}, o) => {
  const h = s(), d = l ? e ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: o, "aria-labelledby": d, ...i, children: [
    l ? /* @__PURE__ */ a("title", { id: d, children: l }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M5.333 2.993a1.125 1.125 0 0 0-1.958.757 1.88 1.88 0 0 0-.75 1.5v5.25c0 5.09 2.468 8.177 4.538 9.87 2.222 1.819 4.447 2.438 4.54 2.465.195.053.4.053.593 0 .127-.034 2.813-.789 5.237-3.076l1.134 1.247a1.125 1.125 0 0 0 1.665-1.513zM12 20.567a11.9 11.9 0 0 1-3.477-1.99c-2.42-2.012-3.648-4.73-3.648-8.077V5.835l11.144 12.259A11.8 11.8 0 0 1 12 20.567M21.375 5.25v5.25a13.5 13.5 0 0 1-.772 4.609 1.124 1.124 0 1 1-2.115-.766c.434-1.235.65-2.535.637-3.843V5.625H10.25a1.125 1.125 0 0 1 0-2.25h9.25a1.875 1.875 0 0 1 1.875 1.875" })
  ] });
});
c.displayName = "ShieldSlash";
export {
  c as ShieldSlash
};
//# sourceMappingURL=ShieldSlash.js.map
