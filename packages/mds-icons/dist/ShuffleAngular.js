import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as f } from "react";
const s = t(({
  size: a = "1em",
  title: l,
  titleId: o,
  ...d
}, i) => {
  const h = f(), r = l ? o ?? h : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    l ? /* @__PURE__ */ e("title", { id: r, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.546 16.455a1.125 1.125 0 0 1 0 1.594l-2.25 2.25a1.127 1.127 0 1 1-1.594-1.594l.33-.329H15.75a1.13 1.13 0 0 1-.915-.469L7.671 7.876H3a1.125 1.125 0 1 1 0-2.25h5.25a1.13 1.13 0 0 1 .915.469l7.164 10.031h2.702l-.33-.329a1.127 1.127 0 1 1 1.594-1.594zM10.35 14.311a1.124 1.124 0 0 0-1.57.262l-1.11 1.553H3a1.125 1.125 0 1 0 0 2.25h5.25a1.13 1.13 0 0 0 .915-.469l1.447-2.024a1.126 1.126 0 0 0-.262-1.572m3.3-4.62a1.125 1.125 0 0 0 1.57-.262l1.11-1.553h2.701l-.33.33a1.127 1.127 0 1 0 1.594 1.593l2.25-2.25a1.125 1.125 0 0 0 0-1.594l-2.25-2.25A1.127 1.127 0 1 0 18.701 5.3l.33.327H15.75a1.13 1.13 0 0 0-.915.469L13.388 8.12a1.126 1.126 0 0 0 .262 1.571" })
  ] });
});
s.displayName = "ShuffleAngular";
export {
  s as ShuffleAngular
};
//# sourceMappingURL=ShuffleAngular.js.map
