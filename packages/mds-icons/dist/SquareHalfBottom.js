import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { forwardRef as m, useId as v } from "react";
const n = m(({
  size: r = "1em",
  title: o,
  titleId: d,
  ...t
}, i) => {
  const l = v(), e = o ? d ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": e, ...t, children: [
    o ? /* @__PURE__ */ a("title", { id: e, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M18.75 3.375H5.25A1.875 1.875 0 0 0 3.375 5.25v13.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875m-.375 2.25v5.25H5.625v-5.25zm-7.5 7.5v5.25h-1.5v-5.25zm2.25 0h1.5v5.25h-1.5zm-7.5 0h1.5v5.25h-1.5zm11.25 5.25v-5.25h1.5v5.25z" })
  ] });
});
n.displayName = "SquareHalfBottom";
export {
  n as SquareHalfBottom
};
//# sourceMappingURL=SquareHalfBottom.js.map
