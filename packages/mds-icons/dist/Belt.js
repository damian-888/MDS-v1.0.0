import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: h = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const l = v(), r = a ? o ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: h, height: h, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.875 14.625h-4.5v-5.25h4.5a1.125 1.125 0 0 0 0-2.25H18a1.88 1.88 0 0 0-1.5-.75h-6a1.88 1.88 0 0 0-1.5.75H6.31a1.125 1.125 0 0 0-2.12 0H1.126a1.125 1.125 0 0 0 0 2.25h3v5.25h-3a1.125 1.125 0 1 0 0 2.25h3.066a1.125 1.125 0 0 0 2.118 0H9a1.88 1.88 0 0 0 1.5.75h6a1.88 1.88 0 0 0 1.5-.75h4.875a1.125 1.125 0 1 0 0-2.25m-16.5-5.25h2.25v5.25h-2.25zm4.5-.75h5.25v2.25H13.5a1.125 1.125 0 1 0 0 2.25h2.625v2.25h-5.25z" })
  ] });
});
m.displayName = "Belt";
export {
  m as Belt
};
//# sourceMappingURL=Belt.js.map
