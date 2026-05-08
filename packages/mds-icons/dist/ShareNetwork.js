import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...i
}, l) => {
  const t = m(), e = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M16.5 14.625a4.1 4.1 0 0 0-2.728 1.031L9.946 13.2a4.13 4.13 0 0 0 0-2.4l3.826-2.456a4.109 4.109 0 1 0-1.218-1.89L8.727 8.906a4.125 4.125 0 1 0 0 6.181l3.826 2.462a4.124 4.124 0 1 0 3.947-2.925m0-11.25a1.875 1.875 0 1 1 0 3.75 1.875 1.875 0 0 1 0-3.75M6 13.875a1.875 1.875 0 1 1 0-3.75 1.875 1.875 0 0 1 0 3.75m10.5 6.75a1.875 1.875 0 1 1 0-3.75 1.875 1.875 0 0 1 0 3.75" })
  ] });
});
s.displayName = "ShareNetwork";
export {
  s as ShareNetwork
};
//# sourceMappingURL=ShareNetwork.js.map
