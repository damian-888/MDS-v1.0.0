import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: r = "1em",
  title: a,
  titleId: l,
  ...d
}, t) => {
  const i = v(), o = a ? l ?? i : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: t, "aria-labelledby": o, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: o, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M18.75 7.875a1.125 1.125 0 0 0 1.125-1.125 5.63 5.63 0 0 0-5.625-5.625H7.5A1.875 1.875 0 0 0 5.625 3v4.5A1.875 1.875 0 0 1 3.75 9.375a1.125 1.125 0 0 0 0 2.25 4.13 4.13 0 0 0 4.108-3.75h2.267v1.933a1.87 1.87 0 0 1-.704 1.465l-1.498 1.196a4.1 4.1 0 0 0-1.548 3.223V21a1.875 1.875 0 0 0 1.875 1.875H18A1.875 1.875 0 0 0 19.875 21v-1.175a25.76 25.76 0 0 0-2.936-11.95zm-10.875-4.5h6.375a3.375 3.375 0 0 1 3.182 2.25H7.875zm9.75 16.45v.8h-9v-4.933a1.87 1.87 0 0 1 .704-1.465l1.5-1.198a4.1 4.1 0 0 0 1.546-3.22V7.874h1.991a23.5 23.5 0 0 1 3.259 11.95" })
  ] });
});
m.displayName = "SprayBottle";
export {
  m as SprayBottle
};
//# sourceMappingURL=SprayBottle.js.map
