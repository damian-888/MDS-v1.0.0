import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...d
}, l) => {
  const t = m(), i = r ? a ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...d, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.25 5.626h-3.39a4.875 4.875 0 0 0-9.72 0H3.75A1.875 1.875 0 0 0 1.875 7.5v11.25a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875V7.5a1.875 1.875 0 0 0-1.875-1.875M12 3.376a2.625 2.625 0 0 1 2.598 2.25H9.402A2.625 2.625 0 0 1 12 3.376m7.875 15H4.125v-10.5h15.75z" })
  ] });
});
s.displayName = "BagSimple";
export {
  s as BagSimple
};
//# sourceMappingURL=BagSimple.js.map
