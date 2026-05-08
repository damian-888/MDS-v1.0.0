import { jsxs as h, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: a = "1em",
  title: l,
  titleId: i,
  ...d
}, e) => {
  const t = m(), o = l ? i ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: e, "aria-labelledby": o, ...d, children: [
    l ? /* @__PURE__ */ r("title", { id: o, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M23.515 16.012a1.13 1.13 0 0 0-1.015-.638h-8.625v-1.5h6.375a1.125 1.125 0 0 0 .833-1.881l-7.208-7.929v-2.94A1.125 1.125 0 0 0 11.89.402l-9.75 11.625A1.125 1.125 0 0 0 3 13.874h8.625v1.5H1.5a1.125 1.125 0 0 0-.878 1.829l2.775 3.468a1.87 1.87 0 0 0 1.463.703h14.28a1.87 1.87 0 0 0 1.464-.704l2.775-3.468a1.13 1.13 0 0 0 .136-1.19m-5.808-4.388h-3.832V7.406zm-12.295 0 6.213-7.406v7.406zm13.547 7.5H5.041l-1.197-1.5h16.313z" })
  ] });
});
s.displayName = "Sailboat";
export {
  s as Sailboat
};
//# sourceMappingURL=Sailboat.js.map
