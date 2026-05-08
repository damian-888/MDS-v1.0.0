import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as n } from "react";
const m = h(({
  size: r = "1em",
  title: l,
  titleId: e,
  ...d
}, a) => {
  const s = n(), i = l ? e ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: a, "aria-labelledby": i, ...d, children: [
    l ? /* @__PURE__ */ o("title", { id: i, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.063 18.158 13.627 12l6.436-6.157.017-.017a1.875 1.875 0 0 0-1.33-3.201H5.25a1.875 1.875 0 0 0-1.325 3.2l.017.018L10.374 12l-6.432 6.157-.017.017a1.875 1.875 0 0 0 1.325 3.201h13.5a1.875 1.875 0 0 0 1.326-3.2zM9.71 8.25h4.579L12 10.443zm8.102-3.375L16.64 6H7.359L6.188 4.875zM6.188 19.125 12 13.557l5.813 5.568z" })
  ] });
});
m.displayName = "HourglassSimpleHigh";
export {
  m as HourglassSimpleHigh
};
//# sourceMappingURL=HourglassSimpleHigh.js.map
