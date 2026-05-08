import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: l = "1em",
  title: r,
  titleId: d,
  ...a
}, i) => {
  const n = s(), e = r ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...a, children: [
    r ? /* @__PURE__ */ o("title", { id: e, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m21.577 6.613-4.19-4.189a1.875 1.875 0 0 0-2.651 0L3.174 13.984a1.86 1.86 0 0 0-.549 1.326v4.19A1.875 1.875 0 0 0 4.5 21.375h4.19a1.86 1.86 0 0 0 1.325-.55l7.45-7.448.39 1.302-3.275 3.275a1.127 1.127 0 1 0 1.594 1.593l3.75-3.75a1.13 1.13 0 0 0 .281-1.119l-.932-3.106 2.305-2.305a1.873 1.873 0 0 0-.001-2.654M6.094 14.25l6.656-6.657 3.656 3.657-6.656 6.656zm-1.219 1.968 2.906 2.907H4.875zM18 9.656 14.344 6l1.72-1.72 3.655 3.656z" })
  ] });
});
h.displayName = "Pen";
export {
  h as Pen
};
//# sourceMappingURL=Pen.js.map
