import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, a) => {
  const n = h(), i = r ? d ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m11.25 12.844-6.75 6A1.128 1.128 0 1 1 3 17.156L8.804 12 3 6.844a1.129 1.129 0 0 1 1.5-1.688l6.75 6a1.125 1.125 0 0 1 0 1.688m9 4.031h-9a1.125 1.125 0 1 0 0 2.25h9a1.125 1.125 0 1 0 0-2.25" })
  ] });
});
s.displayName = "Terminal";
export {
  s as Terminal
};
//# sourceMappingURL=Terminal.js.map
