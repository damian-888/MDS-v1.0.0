import { jsxs as m, jsx as r } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const h = t(({
  size: a = "1em",
  title: l,
  titleId: e,
  ...o
}, d) => {
  const n = s(), i = l ? e ?? n : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": i, ...o, children: [
    l ? /* @__PURE__ */ r("title", { id: i, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "m8.204 14.204 6-6a1.127 1.127 0 1 1 1.593 1.594l-6 6a1.127 1.127 0 0 1-1.593-1.594m12.28-10.688a5.63 5.63 0 0 0-7.956 0L9.705 6.337a1.127 1.127 0 1 0 1.593 1.594l2.82-2.818a3.376 3.376 0 0 1 4.774 4.774l-2.823 2.817a1.128 1.128 0 0 0 1.594 1.594l2.82-2.819a5.634 5.634 0 0 0-.003-7.96zm-7.779 12.552-2.819 2.82a3.38 3.38 0 0 1-4.774 0 3.376 3.376 0 0 1 0-4.775l2.819-2.82A1.127 1.127 0 1 0 6.337 9.7l-2.816 2.822a5.626 5.626 0 0 0 7.957 7.957l2.818-2.82a1.127 1.127 0 1 0-1.593-1.593z" })
  ] });
});
h.displayName = "LinkSimple";
export {
  h as LinkSimple
};
//# sourceMappingURL=LinkSimple.js.map
