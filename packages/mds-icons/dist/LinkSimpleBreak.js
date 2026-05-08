import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: r = "1em",
  title: l,
  titleId: i,
  ...o
}, d) => {
  const n = s(), a = l ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": a, ...o, children: [
    l ? /* @__PURE__ */ e("title", { id: a, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m20.48 11.478-2.82 2.818a1.126 1.126 0 1 1-1.594-1.593l2.82-2.82a3.376 3.376 0 0 0-4.774-4.773l-2.816 2.82a1.127 1.127 0 0 1-1.594-1.593l2.819-2.818a5.626 5.626 0 1 1 7.956 7.957zm-7.774 4.594-2.82 2.82a3.375 3.375 0 1 1-4.773-4.775l2.818-2.819a1.127 1.127 0 0 0-1.594-1.594l-2.816 2.82a5.627 5.627 0 0 0 7.957 7.956l2.818-2.819a1.127 1.127 0 0 0-1.593-1.594z" })
  ] });
});
h.displayName = "LinkSimpleBreak";
export {
  h as LinkSimpleBreak
};
//# sourceMappingURL=LinkSimpleBreak.js.map
