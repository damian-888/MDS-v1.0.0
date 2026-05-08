import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const c = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, a) => {
  const s = m(), i = r ? d ?? s : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.375 18a1.125 1.125 0 1 1-2.25 0c0-7.238-5.887-13.125-13.125-13.125a1.125 1.125 0 0 1 0-2.25c8.478 0 15.375 6.897 15.375 15.375M6 9.375a1.125 1.125 0 0 0 0 2.25A6.38 6.38 0 0 1 12.375 18a1.125 1.125 0 1 0 2.25 0A8.635 8.635 0 0 0 6 9.375m.375 6.75a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" })
  ] });
});
c.displayName = "RssSimple";
export {
  c as RssSimple
};
//# sourceMappingURL=RssSimple.js.map
