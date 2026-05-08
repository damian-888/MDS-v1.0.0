import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const v = h(({
  size: r = "1em",
  title: e,
  titleId: a,
  ...d
}, i) => {
  const n = s(), l = e ? a ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    e ? /* @__PURE__ */ o("title", { id: l, children: e }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m21.888 17.308-3.837-4.934H19.5a1.125 1.125 0 0 0 .892-1.811l-7.5-9.75a1.126 1.126 0 0 0-1.782 0l-7.5 9.75a1.125 1.125 0 0 0 .89 1.81h1.45l-3.838 4.935A1.125 1.125 0 0 0 3 19.124h7.875v3.375a1.125 1.125 0 1 0 2.25 0v-3.375H21a1.125 1.125 0 0 0 .888-1.816M5.3 16.874l3.837-4.934a1.126 1.126 0 0 0-.888-1.816H6.785L12 3.344l5.215 6.78H15.75a1.125 1.125 0 0 0-.888 1.816l3.837 4.934z" })
  ] });
});
v.displayName = "TreeEvergreen";
export {
  v as TreeEvergreen
};
//# sourceMappingURL=TreeEvergreen.js.map
