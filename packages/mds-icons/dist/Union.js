import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...n
}, a) => {
  const l = h(), i = o ? e ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: a, "aria-labelledby": i, ...n, children: [
    o ? /* @__PURE__ */ d("title", { id: i, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.875 6v7.5a7.875 7.875 0 0 1-15.75 0V6a1.125 1.125 0 0 1 2.25 0v7.5a5.625 5.625 0 0 0 11.25 0V6a1.125 1.125 0 1 1 2.25 0" })
  ] });
});
m.displayName = "Union";
export {
  m as Union
};
//# sourceMappingURL=Union.js.map
