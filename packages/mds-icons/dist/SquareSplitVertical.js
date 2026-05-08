import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as v, useId as h } from "react";
const m = v(({
  size: e = "1em",
  title: r,
  titleId: o,
  ...a
}, d) => {
  const t = h(), i = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": i, ...a, children: [
    r ? /* @__PURE__ */ l("title", { id: i, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M18.75 3.375H5.25A1.875 1.875 0 0 0 3.375 5.25v13.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875m-.375 2.25v5.25H5.625v-5.25zm-12.75 12.75v-5.25h12.75v5.25z" })
  ] });
});
m.displayName = "SquareSplitVertical";
export {
  m as SquareSplitVertical
};
//# sourceMappingURL=SquareSplitVertical.js.map
