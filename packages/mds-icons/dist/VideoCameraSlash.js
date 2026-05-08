import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: l = "1em",
  title: a,
  titleId: o,
  ...d
}, i) => {
  const h = s(), r = a ? o ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M23.386 6.496a1.13 1.13 0 0 0-1.173.094l-2.338 1.699v-1.54A1.875 1.875 0 0 0 18 4.872h-6.386a1.125 1.125 0 0 0 0 2.25h6.011v6.375a1.13 1.13 0 0 0 .418.875l.045.036 4.125 3a1.126 1.126 0 0 0 1.787-.91v-9a1.13 1.13 0 0 0-.614-1.003M21.75 14.29l-1.875-1.364v-1.854l1.875-1.363zM5.333 2.992a1.125 1.125 0 1 0-1.666 1.513l.335.368H3a1.875 1.875 0 0 0-1.875 1.875v10.5A1.875 1.875 0 0 0 3 19.123h13.957l1.71 1.882a1.125 1.125 0 0 0 1.665-1.513zM3.374 16.873v-9.75h2.673l8.864 9.75z" })
  ] });
});
v.displayName = "VideoCameraSlash";
export {
  v as VideoCameraSlash
};
//# sourceMappingURL=VideoCameraSlash.js.map
