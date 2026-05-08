import { jsxs as h, jsx as r } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const v = m(({
  size: a = "1em",
  title: l,
  titleId: d,
  ...e
}, i) => {
  const t = n(), o = l ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    l ? /* @__PURE__ */ r("title", { id: o, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M10.125 12.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5.25-1.5a1.5 1.5 0 1 0 0 3.001 1.5 1.5 0 0 0 0-3m6.398 2.455a1.835 1.835 0 0 1-1.148.137v3.409a4.13 4.13 0 0 1-4.125 4.125h-9a4.13 4.13 0 0 1-4.125-4.125v-3.41q-.18.037-.36.037c-.272-.001-.54-.06-.788-.173a1.85 1.85 0 0 1-1.068-2.053l1.54-8.25a1.875 1.875 0 0 1 2.297-1.47l.044.011 4.875 1.432h4.176l4.875-1.432.044-.012a1.875 1.875 0 0 1 2.297 1.474l1.54 8.25a1.85 1.85 0 0 1-1.075 2.05m-5.625-8.59 4.196 5.425-1.178-6.312zM3.656 10.54l4.196-5.425-3.018-.887zm14.719 6.71v-5.58l-4.677-6.044h-3.396L5.625 11.67v5.58A1.875 1.875 0 0 0 7.5 19.126h3.375v-.656l-1.17-1.171a1.127 1.127 0 1 1 1.594-1.594l.701.702.704-.705a1.126 1.126 0 1 1 1.594 1.594l-1.173 1.174v.656H16.5a1.875 1.875 0 0 0 1.875-1.875" })
  ] });
});
v.displayName = "Dog";
export {
  v as Dog
};
//# sourceMappingURL=Dog.js.map
