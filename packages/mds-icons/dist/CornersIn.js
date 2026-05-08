import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as v } from "react";
const h = s(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...i
}, n) => {
  const l = v(), e = r ? d ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: n, "aria-labelledby": e, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: e, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M13.875 9V4.5a1.125 1.125 0 1 1 2.25 0v3.375H19.5a1.125 1.125 0 0 1 0 2.25H15A1.125 1.125 0 0 1 13.875 9M9 13.875H4.5a1.125 1.125 0 1 0 0 2.25h3.375V19.5a1.125 1.125 0 0 0 2.25 0V15A1.125 1.125 0 0 0 9 13.875m10.5 0H15A1.125 1.125 0 0 0 13.875 15v4.5a1.125 1.125 0 1 0 2.25 0v-3.375H19.5a1.125 1.125 0 1 0 0-2.25M9 3.375A1.125 1.125 0 0 0 7.875 4.5v3.375H4.5a1.125 1.125 0 0 0 0 2.25H9A1.125 1.125 0 0 0 10.125 9V4.5A1.125 1.125 0 0 0 9 3.375" })
  ] });
});
h.displayName = "CornersIn";
export {
  h as CornersIn
};
//# sourceMappingURL=CornersIn.js.map
