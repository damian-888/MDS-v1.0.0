import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as c, useId as s } from "react";
const m = c(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const t = s(), e = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M16.688 3.375a6.15 6.15 0 0 0-4.376 1.812L12 5.5l-.312-.313A6.187 6.187 0 0 0 1.125 9.563c0 6.782 9.92 12.2 10.342 12.428a1.13 1.13 0 0 0 1.066 0c.422-.228 10.342-5.646 10.342-12.428a6.195 6.195 0 0 0-6.187-6.188m-.515 13.346A31 31 0 0 1 12 19.703a31 31 0 0 1-4.173-2.982c-2.031-1.742-4.452-4.4-4.452-7.158a3.937 3.937 0 0 1 6.722-2.785l.31.312-.706.705a1.125 1.125 0 0 0 0 1.594l2.035 2.035-1.285 1.283a1.124 1.124 0 0 0 0 1.594 1.124 1.124 0 0 0 1.594 0l2.08-2.08a1.124 1.124 0 0 0 0-1.594L12.093 8.59l1.81-1.812a3.938 3.938 0 0 1 6.721 2.785c0 2.758-2.42 5.416-4.452 7.158" })
  ] });
});
m.displayName = "HeartBreak";
export {
  m as HeartBreak
};
//# sourceMappingURL=HeartBreak.js.map
