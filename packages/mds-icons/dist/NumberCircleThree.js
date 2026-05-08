import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...l
}, a) => {
  const t = h(), i = r ? d ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": i, ...l, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875m0 18A7.875 7.875 0 1 1 19.875 12 7.883 7.883 0 0 1 12 19.875m3.375-5.625a3.75 3.75 0 0 1-6.428 2.625 1.125 1.125 0 1 1 1.606-1.574 1.5 1.5 0 1 0 1.072-2.551 1.125 1.125 0 0 1-.922-1.77L12.093 9H9.75a1.125 1.125 0 0 1 0-2.25h4.5a1.125 1.125 0 0 1 .922 1.77l-1.72 2.456a3.75 3.75 0 0 1 1.923 3.274" })
  ] });
});
s.displayName = "NumberCircleThree";
export {
  s as NumberCircleThree
};
//# sourceMappingURL=NumberCircleThree.js.map
