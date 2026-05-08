import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: r = "1em",
  title: l,
  titleId: a,
  ...d
}, t) => {
  const i = m(), e = l ? a ?? i : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: t, "aria-labelledby": e, ...d, children: [
    l ? /* @__PURE__ */ o("title", { id: e, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m6.188-6.876-2.25 3.375a1.125 1.125 0 0 1-1.876 0L12 13.281l-2.062 3.093a1.125 1.125 0 0 1-1.876 0L5.813 13a1.125 1.125 0 0 1 .938-1.749h3.898L8.813 8.5a1.125 1.125 0 0 1 .937-1.75h4.5a1.125 1.125 0 0 1 .938 1.75l-1.836 2.75h3.898a1.125 1.125 0 0 1 .938 1.75" })
  ] });
});
s.displayName = "FalloutShelter";
export {
  s as FalloutShelter
};
//# sourceMappingURL=FalloutShelter.js.map
