import { jsxs as c, jsx as l } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...i
}, o) => {
  const t = h(), d = r ? e ?? t : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: o, "aria-labelledby": d, ...i, children: [
    r ? /* @__PURE__ */ l("title", { id: d, children: r }) : null,
    /* @__PURE__ */ l("g", { clipPath: "url(#a)", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M23.9 9.04a1.88 1.88 0 0 0-1.535-1.26 11.4 11.4 0 0 1-3.736-1.168l.367-.367a3 3 0 0 0-4.243-4.243l-.627.627a1.875 1.875 0 0 0-2.827-.207L7.673 6.048a1.875 1.875 0 0 0 .207 2.828L.878 15.879a3 3 0 0 0 4.242 4.243l6.743-6.744c.601 1.17.997 2.434 1.169 3.737a1.875 1.875 0 0 0 3.187 1.086l7.231-7.233a1.86 1.86 0 0 0 .45-1.928m-7.556-5.447a.751.751 0 0 1 1.061 1.061l-.71.71a13 13 0 0 1-1.12-1.002zM3.529 18.53a.751.751 0 0 1-1.06-1.061l7.145-7.145q.534.53 1 1.12zm11.614-2.438c-.844-4.546-3.682-7.353-5.567-8.762l3-3c1.406 1.885 4.219 4.719 8.761 5.566z" }) }),
    /* @__PURE__ */ l("defs", { children: /* @__PURE__ */ l("clipPath", { id: "a", children: /* @__PURE__ */ l("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
s.displayName = "Axe";
export {
  s as Axe
};
//# sourceMappingURL=Axe.js.map
