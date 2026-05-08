import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as n } from "react";
const s = h(({
  size: o = "1em",
  title: a,
  titleId: d,
  ...i
}, l) => {
  const c = n(), r = a ? d ?? c : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M16.875 5.625h-9.75A7.13 7.13 0 0 0 0 12.75v.375a2.25 2.25 0 0 0 1.288 2.033c.295.817.985 1.57 2.018 2.182 1.08.638 2.4 1.031 3.444 1.031a4.13 4.13 0 0 0 3.967-3h2.566a4.13 4.13 0 0 0 3.967 3.004c1.737 0 4.746-1.2 5.467-3.218A2.25 2.25 0 0 0 24 13.125v-.375a7.13 7.13 0 0 0-7.125-7.125m-9.75 2.25h9.75a4.88 4.88 0 0 1 4.793 3.994 6 6 0 0 0-.974-.713c-1.08-.638-2.4-1.031-3.444-1.031a4.13 4.13 0 0 0-3.967 3h-2.565a4.13 4.13 0 0 0-3.968-3c-1.256 0-3.178.63-4.418 1.74a4.88 4.88 0 0 1 4.793-3.99m-.375 8.25c-1.325 0-3.375-1.14-3.375-1.875 0-.257.333-.713 1.076-1.153.844-.499 1.763-.722 2.299-.722a1.875 1.875 0 1 1 0 3.75m12.799-.722c-.844.499-1.763.722-2.299.722a1.875 1.875 0 1 1 0-3.75c1.325 0 3.375 1.14 3.375 1.875 0 .257-.333.713-1.076 1.153" })
  ] });
});
s.displayName = "Goggles";
export {
  s as Goggles
};
//# sourceMappingURL=Goggles.js.map
