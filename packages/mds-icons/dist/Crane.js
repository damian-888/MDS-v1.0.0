import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as t, useId as h } from "react";
const m = t(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const v = h(), o = r ? d ?? v : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M21.578 1.285a1.13 1.13 0 0 0-1.108-.028L9.47 7.125H3A1.875 1.875 0 0 0 1.125 9v9.75A1.875 1.875 0 0 0 3 20.625h8.25a1.875 1.875 0 0 0 1.875-1.875v-3q0-.166-.048-.323l-1.985-6.614 8.783-4.688v10.5H18.75v-.375a1.125 1.125 0 1 0-2.25 0V15a1.875 1.875 0 0 0 1.875 1.875h1.875A1.875 1.875 0 0 0 22.125 15V2.25a1.12 1.12 0 0 0-.547-.965M8.913 9.375l1.575 5.25H7.125v-5.25zm-4.038 0v5.25h-1.5v-5.25zm-1.5 9v-1.5h7.5v1.5z" })
  ] });
});
m.displayName = "Crane";
export {
  m as Crane
};
//# sourceMappingURL=Crane.js.map
