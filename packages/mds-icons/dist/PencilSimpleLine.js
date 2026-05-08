import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: i = "1em",
  title: e,
  titleId: o,
  ...d
}, n) => {
  const a = h(), l = e ? o ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: n, "aria-labelledby": l, ...d, children: [
    e ? /* @__PURE__ */ r("title", { id: l, children: e }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "m21.577 6.613-4.19-4.189a1.875 1.875 0 0 0-2.651 0L3.174 13.984a1.86 1.86 0 0 0-.549 1.326v4.19A1.875 1.875 0 0 0 4.5 21.375h15.75a1.125 1.125 0 1 0 0-2.25h-8.531l9.858-9.86a1.875 1.875 0 0 0 0-2.652M8.53 19.125H4.875v-3.657l7.875-7.875 3.656 3.657zM18 9.655 14.344 6l1.72-1.72 3.655 3.656z" })
  ] });
});
s.displayName = "PencilSimpleLine";
export {
  s as PencilSimpleLine
};
//# sourceMappingURL=PencilSimpleLine.js.map
