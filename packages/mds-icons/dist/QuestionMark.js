import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const h = s(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...a
}, t) => {
  const l = c(), e = r ? d ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": e, ...a, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M18.375 9c0 2.763-2.27 5.067-5.25 5.537v.088a1.125 1.125 0 1 1-2.25 0V13.5A1.125 1.125 0 0 1 12 12.375c2.274 0 4.125-1.514 4.125-3.375S14.275 5.625 12 5.625 7.875 7.139 7.875 9a1.125 1.125 0 0 1-2.25 0c0-3.101 2.86-5.625 6.375-5.625S18.375 5.899 18.375 9M12 17.625a1.875 1.875 0 1 0 0 3.75 1.875 1.875 0 0 0 0-3.75" })
  ] });
});
h.displayName = "QuestionMark";
export {
  h as QuestionMark
};
//# sourceMappingURL=QuestionMark.js.map
