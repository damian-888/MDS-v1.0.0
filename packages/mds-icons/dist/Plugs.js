import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const h = s(({
  size: a = "1em",
  title: l,
  titleId: d,
  ...e
}, i) => {
  const t = m(), r = l ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    l ? /* @__PURE__ */ o("title", { id: r, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m12.844 15.75 1.08-1.08a1.127 1.127 0 1 0-1.594-1.593l-1.08 1.079-1.406-1.406 1.08-1.08a1.127 1.127 0 1 0-1.594-1.593l-1.08 1.079-1.454-1.452a1.127 1.127 0 1 0-1.594 1.594l.33.327-1.919 1.92a3.375 3.375 0 0 0 0 4.774l.24.238-2.399 2.397a1.127 1.127 0 1 0 1.594 1.594l2.397-2.398.238.239a3.38 3.38 0 0 0 4.773 0l1.919-1.92.33.33a1.127 1.127 0 1 0 1.593-1.594zm-3.98 3.046a1.125 1.125 0 0 1-1.595 0l-2.065-2.068a1.125 1.125 0 0 1 0-1.594l1.921-1.915 3.656 3.656zM22.55 1.452a1.125 1.125 0 0 0-1.594 0l-2.4 2.4-.238-.24a3.38 3.38 0 0 0-4.773 0l-1.921 1.919-.329-.33a1.127 1.127 0 0 0-1.594 1.594l7.5 7.5a1.127 1.127 0 0 0 1.594-1.594l-.327-.326 1.92-1.921a3.375 3.375 0 0 0 0-4.773l-.238-.238 2.398-2.397a1.124 1.124 0 0 0-.003-1.592zM18.8 8.858l-1.926 1.923-3.656-3.656 1.92-1.921a1.124 1.124 0 0 1 1.595 0l2.068 2.068a1.125 1.125 0 0 1 0 1.594z" })
  ] });
});
h.displayName = "Plugs";
export {
  h as Plugs
};
//# sourceMappingURL=Plugs.js.map
