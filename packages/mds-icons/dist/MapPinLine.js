import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as c, useId as h } from "react";
const s = c(({
  size: i = "1em",
  title: a,
  titleId: o,
  ...d
}, n) => {
  const l = h(), r = a ? o ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: n, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M18.75 20.625h-3.682a25 25 0 0 0 1.531-1.606c2.634-3.028 4.026-6.234 4.026-9.269a8.625 8.625 0 0 0-17.25 0c0 4.688 3.199 8.62 5.548 10.875H5.25a1.125 1.125 0 1 0 0 2.25h13.5a1.125 1.125 0 1 0 0-2.25M5.625 9.75a6.375 6.375 0 0 1 12.75 0c0 3.123-1.875 5.94-3.44 7.754A23.4 23.4 0 0 1 12 20.334a23.4 23.4 0 0 1-2.934-2.83C7.5 15.691 5.625 12.873 5.625 9.75M12 13.875a4.125 4.125 0 1 0 0-8.25 4.125 4.125 0 0 0 0 8.25m0-6a1.875 1.875 0 1 1 0 3.75 1.875 1.875 0 0 1 0-3.75" })
  ] });
});
s.displayName = "MapPinLine";
export {
  s as MapPinLine
};
//# sourceMappingURL=MapPinLine.js.map
