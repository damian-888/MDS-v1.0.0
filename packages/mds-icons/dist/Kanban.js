import { jsxs as v, jsx as o } from "react/jsx-runtime";
import { forwardRef as l, useId as m } from "react";
const t = l(({
  size: a = "1em",
  title: r,
  titleId: d,
  ...e
}, i) => {
  const n = m(), h = r ? d ?? n : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": h, ...e, children: [
    r ? /* @__PURE__ */ o("title", { id: h, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.25 4.125H3.75A1.125 1.125 0 0 0 2.625 5.25V19.5A1.875 1.875 0 0 0 4.5 21.375h3.75a1.875 1.875 0 0 0 1.875-1.875v-4.125h3.75V16.5a1.875 1.875 0 0 0 1.875 1.875h3.75a1.875 1.875 0 0 0 1.875-1.875V5.25a1.125 1.125 0 0 0-1.125-1.125m-1.125 6h-3v-3.75h3zm-11.25-3.75v3.75h-3v-3.75zm0 12.75h-3v-6.75h3zm2.25-6v-6.75h3.75v6.75zm6 3v-3.75h3v3.75z" })
  ] });
});
t.displayName = "Kanban";
export {
  t as Kanban
};
//# sourceMappingURL=Kanban.js.map
