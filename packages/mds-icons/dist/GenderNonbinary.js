import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: e = "1em",
  title: r,
  titleId: a,
  ...i
}, l) => {
  const n = h(), o = r ? a ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M13.125 8.72V6.489l2.047 1.227a1.125 1.125 0 1 0 1.156-1.93l-2.142-1.285 2.142-1.285a1.125 1.125 0 0 0-1.156-1.93L12 3.19 8.828 1.287a1.125 1.125 0 0 0-1.156 1.929l2.142 1.285-2.142 1.286a1.125 1.125 0 1 0 1.156 1.929l2.047-1.227V8.72a7.125 7.125 0 1 0 2.25 0M12 20.626a4.875 4.875 0 1 1 0-9.75 4.875 4.875 0 0 1 0 9.75" })
  ] });
});
m.displayName = "GenderNonbinary";
export {
  m as GenderNonbinary
};
//# sourceMappingURL=GenderNonbinary.js.map
