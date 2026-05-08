import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const m = t(({
  size: l = "1em",
  title: a,
  titleId: d,
  ...e
}, i) => {
  const n = s(), r = a ? d ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M18.75 1.875h-6.44a1.86 1.86 0 0 0-1.325.549l-1.08 1.079-1.454-1.454a1.875 1.875 0 0 0-2.652 0l-2.25 2.25a1.875 1.875 0 0 0 0 2.651l1.455 1.455-1.08 1.08a1.86 1.86 0 0 0-.549 1.325v9.44a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875V3.75a1.875 1.875 0 0 0-1.875-1.875M5.406 5.625l1.72-1.72 1.189 1.189-1.72 1.72zm12.97 14.25H5.625v-8.907L7.39 9.2l5.079-5.075h5.906zm-5.626-13.5a1.125 1.125 0 0 1 1.125-1.125h1.875a1.125 1.125 0 0 1 0 2.25h-1.875a1.125 1.125 0 0 1-1.125-1.125m3.703 6.128-2.652 2.122 2.652 2.121a1.126 1.126 0 1 1-1.406 1.757L12 16.066l-3.047 2.437a1.125 1.125 0 1 1-1.406-1.757l2.652-2.121-2.652-2.122a1.125 1.125 0 1 1 1.406-1.757L12 13.184l3.047-2.438a1.12 1.12 0 0 1 1.581.175 1.12 1.12 0 0 1 .108 1.246q-.108.197-.283.336" })
  ] });
});
m.displayName = "GasCan";
export {
  m as GasCan
};
//# sourceMappingURL=GasCan.js.map
