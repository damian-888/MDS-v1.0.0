import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...i
}, t) => {
  const l = s(), o = r ? d ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ e("title", { id: o, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M17.625 19.5a1.125 1.125 0 0 1-1.125 1.125H15a4.11 4.11 0 0 1-3-1.298 4.11 4.11 0 0 1-3 1.298H7.5a1.125 1.125 0 1 1 0-2.25H9a1.875 1.875 0 0 0 1.875-1.875v-3.375H9.75a1.125 1.125 0 1 1 0-2.25h1.125V7.5A1.875 1.875 0 0 0 9 5.625H7.5a1.125 1.125 0 0 1 0-2.25H9a4.11 4.11 0 0 1 3 1.298 4.11 4.11 0 0 1 3-1.298h1.5a1.125 1.125 0 0 1 0 2.25H15A1.875 1.875 0 0 0 13.125 7.5v3.375h1.125a1.125 1.125 0 1 1 0 2.25h-1.125V16.5A1.875 1.875 0 0 0 15 18.375h1.5a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
m.displayName = "CursorText";
export {
  m as CursorText
};
//# sourceMappingURL=CursorText.js.map
