import { jsxs as s, jsx as o } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const c = t(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...a
}, l) => {
  const n = m(), i = r ? d ?? n : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": i, ...a, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M15.375 5.25A1.125 1.125 0 0 1 16.5 4.125H21a1.125 1.125 0 0 1 0 2.25h-4.5a1.125 1.125 0 0 1-1.125-1.125m6.174 3.375a10.125 10.125 0 1 1-7.861-6.61 1.125 1.125 0 1 1-.375 2.219A7.87 7.87 0 0 0 5.818 16.87a7.8 7.8 0 0 1 2.718-2.196 4.875 4.875 0 1 1 6.938 0 7.8 7.8 0 0 1 2.719 2.195 7.87 7.87 0 0 0 1.234-7.494 1.125 1.125 0 0 1 2.122-.75M12 13.875a2.625 2.625 0 1 0 0-5.25 2.625 2.625 0 0 0 0 5.25m0 6a7.83 7.83 0 0 0 4.54-1.447 5.624 5.624 0 0 0-9.08 0A7.83 7.83 0 0 0 12 19.875" })
  ] });
});
c.displayName = "UserCircleMinus";
export {
  c as UserCircleMinus
};
//# sourceMappingURL=UserCircleMinus.js.map
