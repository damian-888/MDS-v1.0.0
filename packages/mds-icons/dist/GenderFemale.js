import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: e,
  titleId: a,
  ...i
}, l) => {
  const n = m(), d = e ? a ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": d, ...i, children: [
    e ? /* @__PURE__ */ o("title", { id: d, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M19.875 9a7.875 7.875 0 1 0-9 7.794v1.582H8.25a1.125 1.125 0 1 0 0 2.25h2.625V22.5a1.125 1.125 0 1 0 2.25 0v-1.875h2.625a1.125 1.125 0 1 0 0-2.25h-2.625v-1.582a7.886 7.886 0 0 0 6.75-7.793m-13.5 0A5.625 5.625 0 1 1 12 14.627 5.63 5.63 0 0 1 6.375 9" })
  ] });
});
s.displayName = "GenderFemale";
export {
  s as GenderFemale
};
//# sourceMappingURL=GenderFemale.js.map
