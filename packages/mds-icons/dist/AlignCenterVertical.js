import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: e = "1em",
  title: r,
  titleId: h,
  ...l
}, o) => {
  const d = v(), i = r ? h ?? d : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: o, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ a("title", { id: i, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M21 10.875h-.75V6.75a1.875 1.875 0 0 0-1.875-1.875h-3.75A1.875 1.875 0 0 0 12.75 6.75v4.125h-1.5V4.5a1.875 1.875 0 0 0-1.875-1.875h-3.75A1.875 1.875 0 0 0 3.75 4.5v6.375H3a1.125 1.125 0 1 0 0 2.25h.75V19.5a1.875 1.875 0 0 0 1.875 1.875h3.75A1.875 1.875 0 0 0 11.25 19.5v-6.375h1.5v4.125a1.875 1.875 0 0 0 1.875 1.875h3.75a1.875 1.875 0 0 0 1.875-1.875v-4.125H21a1.125 1.125 0 1 0 0-2.25m-12 8.25H6V4.875h3zm9-2.25h-3v-9.75h3z" })
  ] });
});
m.displayName = "AlignCenterVertical";
export {
  m as AlignCenterVertical
};
//# sourceMappingURL=AlignCenterVertical.js.map
