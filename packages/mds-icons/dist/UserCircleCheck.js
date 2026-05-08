import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as s, useId as c } from "react";
const h = s(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...o
}, d) => {
  const t = c(), a = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": a, ...o, children: [
    r ? /* @__PURE__ */ l("title", { id: a, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M20.69 9.391a1.125 1.125 0 0 0-.924 1.297q.11.65.109 1.312a7.84 7.84 0 0 1-1.687 4.87 7.8 7.8 0 0 0-2.72-2.196 4.876 4.876 0 1 0-6.937 0 7.8 7.8 0 0 0-2.719 2.196A7.87 7.87 0 0 1 12 4.125q.661 0 1.313.109a1.125 1.125 0 0 0 .374-2.22A10.134 10.134 0 0 0 1.876 12a10.125 10.125 0 1 0 20.11-1.687 1.125 1.125 0 0 0-1.295-.922m-11.315 1.86a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0M7.46 18.428a5.625 5.625 0 0 1 9.08 0 7.85 7.85 0 0 1-9.08 0M22.546 4.546l-3 3a1.125 1.125 0 0 1-1.594 0l-1.5-1.5a1.127 1.127 0 1 1 1.594-1.594l.704.704 2.204-2.205a1.127 1.127 0 1 1 1.594 1.594z" })
  ] });
});
h.displayName = "UserCircleCheck";
export {
  h as UserCircleCheck
};
//# sourceMappingURL=UserCircleCheck.js.map
