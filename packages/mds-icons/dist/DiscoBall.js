import { jsxs as e, jsx as a } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: r = "1em",
  title: l,
  titleId: d,
  ...c
}, h) => {
  const o = n(), i = l ? d ?? o : void 0;
  return /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: h, "aria-labelledby": i, ...c, children: [
    l ? /* @__PURE__ */ a("title", { id: i, children: l }) : null,
    /* @__PURE__ */ a("g", { clipPath: "url(#a)", children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11.625 5.698V1.5a1.125 1.125 0 1 0-2.25 0v4.198a8.625 8.625 0 1 0 2.25 0m5.149 7.427H14.58c-.154-1.944-.69-3.469-1.295-4.608a6.4 6.4 0 0 1 3.489 4.608M10.5 20.156c-.656-.808-1.594-2.352-1.823-4.781h3.646c-.23 2.428-1.167 3.972-1.823 4.781m-1.823-7.031c.23-2.428 1.167-3.972 1.823-4.781.656.808 1.594 2.352 1.823 4.781zm-.962-4.608c-.605 1.14-1.141 2.664-1.295 4.608H4.226a6.4 6.4 0 0 1 3.489-4.608m-3.489 6.858H6.42c.154 1.944.69 3.469 1.295 4.608a6.4 6.4 0 0 1-3.489-4.608m9.06 4.608c.604-1.14 1.14-2.664 1.294-4.608h2.194a6.4 6.4 0 0 1-3.489 4.608M24 8.25a1.125 1.125 0 0 1-1.125 1.125H22.5v.375a1.125 1.125 0 1 1-2.25 0v-.375h-.375a1.125 1.125 0 0 1 0-2.25h.375V6.75a1.125 1.125 0 1 1 2.25 0v.375h.375A1.125 1.125 0 0 1 24 8.25M13.875 3.375A1.125 1.125 0 0 1 15 2.25h.75V1.5a1.125 1.125 0 1 1 2.25 0v.75h.75a1.125 1.125 0 0 1 0 2.25H18v.75a1.125 1.125 0 1 1-2.25 0V4.5H15a1.125 1.125 0 0 1-1.125-1.125" }) }),
    /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ a("clipPath", { id: "a", children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
m.displayName = "DiscoBall";
export {
  m as DiscoBall
};
//# sourceMappingURL=DiscoBall.js.map
