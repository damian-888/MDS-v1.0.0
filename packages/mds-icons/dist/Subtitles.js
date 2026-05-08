import { jsxs as l, jsx as h } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: a = "1em",
  title: r,
  titleId: i,
  ...o
}, d) => {
  const t = s(), e = r ? i ?? t : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    r ? /* @__PURE__ */ h("title", { id: e, children: r }) : null,
    /* @__PURE__ */ h("path", { fill: "currentColor", d: "M21 4.125H3A1.875 1.875 0 0 0 1.125 6v12A1.875 1.875 0 0 0 3 19.875h18A1.875 1.875 0 0 0 22.875 18V6A1.875 1.875 0 0 0 21 4.125m-.375 13.5H3.375V6.375h17.25zM4.5 12a1.125 1.125 0 0 1 1.125-1.125h1.5a1.125 1.125 0 1 1 0 2.25h-1.5A1.125 1.125 0 0 1 4.5 12m5.25 0a1.125 1.125 0 0 1 1.125-1.125h7.5a1.125 1.125 0 1 1 0 2.25h-7.5A1.125 1.125 0 0 1 9.75 12M4.5 15.375a1.125 1.125 0 0 1 1.125-1.125h7.5a1.125 1.125 0 1 1 0 2.25h-7.5A1.125 1.125 0 0 1 4.5 15.375m15 0a1.125 1.125 0 0 1-1.125 1.125h-1.5a1.125 1.125 0 1 1 0-2.25h1.5a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
m.displayName = "Subtitles";
export {
  m as Subtitles
};
//# sourceMappingURL=Subtitles.js.map
