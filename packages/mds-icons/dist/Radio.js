import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: o = "1em",
  title: a,
  titleId: i,
  ...e
}, l) => {
  const m = h(), r = a ? i ?? m : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": r, ...e, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M15 16.126a3.374 3.374 0 1 0 0-6.75 3.374 3.374 0 0 0 0 6.75m0-4.5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m5.25-6h-9.585l7.658-2.297a1.126 1.126 0 1 0-.646-2.157l-15 4.5a1.125 1.125 0 0 0-.802 1.079V18a1.875 1.875 0 0 0 1.875 1.875h16.5A1.875 1.875 0 0 0 22.125 18V7.5a1.875 1.875 0 0 0-1.875-1.875m-.375 12H4.125v-9.75h15.75zm-14.25-6.75A1.125 1.125 0 0 1 6.75 9.75H9A1.125 1.125 0 1 1 9 12H6.75a1.125 1.125 0 0 1-1.125-1.125m0 3.75A1.125 1.125 0 0 1 6.75 13.5H9a1.125 1.125 0 1 1 0 2.25H6.75a1.125 1.125 0 0 1-1.125-1.125" })
  ] });
});
s.displayName = "Radio";
export {
  s as Radio
};
//# sourceMappingURL=Radio.js.map
