import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: a = "1em",
  title: l,
  titleId: d,
  ...h
}, e) => {
  const i = s(), r = l ? d ?? i : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: e, "aria-labelledby": r, ...h, children: [
    l ? /* @__PURE__ */ o("title", { id: r, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21 7.875h-4.106l.713-3.923a1.125 1.125 0 0 0-2.214-.403l-.787 4.326h-3.712l.713-3.923a1.125 1.125 0 1 0-2.214-.403l-.787 4.326H4.5a1.125 1.125 0 0 0 0 2.25h3.698l-.682 3.75H3a1.125 1.125 0 1 0 0 2.25h4.106l-.713 3.924a1.125 1.125 0 0 0 .905 1.312q.101.017.202.014a1.125 1.125 0 0 0 1.106-.924l.788-4.326h3.712l-.713 3.924a1.125 1.125 0 1 0 2.214.407l.787-4.33H19.5a1.125 1.125 0 1 0 0-2.25h-3.697l.681-3.75H21a1.125 1.125 0 1 0 0-2.25m-7.484 6H9.803l.681-3.75h3.714z" })
  ] });
});
m.displayName = "Hash";
export {
  m as Hash
};
//# sourceMappingURL=Hash.js.map
