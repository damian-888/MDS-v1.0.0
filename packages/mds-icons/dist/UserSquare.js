import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const t = h(), o = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M19.5 2.625h-15A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 2.25v13.523a7.84 7.84 0 0 0-3.664-3.72 4.875 4.875 0 1 0-6.922 0 7.84 7.84 0 0 0-3.664 3.72V4.875zm-9.75 6.375a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0M12 16.125a5.56 5.56 0 0 1 3.533 1.248 5.7 5.7 0 0 1 1.441 1.752H7.026a5.7 5.7 0 0 1 1.44-1.752A5.56 5.56 0 0 1 12 16.125" })
  ] });
});
m.displayName = "UserSquare";
export {
  m as UserSquare
};
//# sourceMappingURL=UserSquare.js.map
