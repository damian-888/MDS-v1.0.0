import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const h = n(({
  size: e = "1em",
  title: l,
  titleId: d,
  ...a
}, i) => {
  const s = c(), o = l ? d ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": o, ...a, children: [
    l ? /* @__PURE__ */ r("title", { id: o, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M21.977 15.188a1.128 1.128 0 0 1-1.954 1.125l-1.58-2.766c-.883.555-1.834.992-2.83 1.3l.497 2.966a1.125 1.125 0 0 1-2.221.372l-.483-2.888c-.936.104-1.882.104-2.818 0l-.478 2.89a1.125 1.125 0 1 1-2.22-.374l.496-2.974a12 12 0 0 1-2.829-1.3l-1.58 2.774a1.127 1.127 0 1 1-1.954-1.125l1.727-3.014a15 15 0 0 1-1.623-1.717 1.125 1.125 0 0 1 1.748-1.414C5.38 10.905 8.01 13.125 12 13.125s6.62-2.22 8.124-4.082a1.125 1.125 0 0 1 1.75 1.414 15 15 0 0 1-1.624 1.717z" })
  ] });
});
h.displayName = "EyeClosed";
export {
  h as EyeClosed
};
//# sourceMappingURL=EyeClosed.js.map
