import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: r = "1em",
  title: a,
  titleId: d,
  ...e
}, l) => {
  const t = h(), i = a ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": i, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: i, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.125 10.125a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0m-15.75 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0m2.25-2.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5m6.75 0a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5m4.5 9.375a4.126 4.126 0 0 1-5.728 3.802 5.64 5.64 0 0 0-4.294 0 4.125 4.125 0 0 1-3.572-7.426 2.94 2.94 0 0 0 1.398-1.757 4.5 4.5 0 0 1 8.642 0c.215.747.718 1.38 1.398 1.757a4.13 4.13 0 0 1 2.156 3.624m-2.25 0a1.88 1.88 0 0 0-.983-1.65l-.01-.006a5.18 5.18 0 0 1-2.472-3.093 2.25 2.25 0 0 0-4.32 0 5.18 5.18 0 0 1-2.472 3.098l-.01.006a1.875 1.875 0 0 0 1.623 3.372h.012a7.88 7.88 0 0 1 6.014 0h.012a1.875 1.875 0 0 0 2.606-1.727" })
  ] });
});
s.displayName = "PawPrint";
export {
  s as PawPrint
};
//# sourceMappingURL=PawPrint.js.map
