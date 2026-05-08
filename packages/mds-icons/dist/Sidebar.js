import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: d = "1em",
  title: r,
  titleId: o,
  ...a
}, l) => {
  const t = m(), e = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: d, height: d, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...a, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M20.25 3.375H3.75A1.875 1.875 0 0 0 1.875 5.25v13.5a1.875 1.875 0 0 0 1.875 1.875h16.5a1.875 1.875 0 0 0 1.875-1.875V5.25a1.875 1.875 0 0 0-1.875-1.875M4.125 9.75H6.75v1.875H4.125zM6.75 5.625V7.5H4.125V5.625zm-2.625 8.25H6.75v4.5H4.125zm15.75 4.5H9V5.625h10.875z" })
  ] });
});
s.displayName = "Sidebar";
export {
  s as Sidebar
};
//# sourceMappingURL=Sidebar.js.map
