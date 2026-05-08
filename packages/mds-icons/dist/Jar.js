import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...i
}, h) => {
  const l = m(), o = r ? e ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: h, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M17.625 4.658V3a1.875 1.875 0 0 0-1.875-1.875h-7.5A1.875 1.875 0 0 0 6.375 3v1.657a4.13 4.13 0 0 0-3 3.968V18.75A4.13 4.13 0 0 0 7.5 22.875h9a4.13 4.13 0 0 0 4.125-4.125V8.625a4.13 4.13 0 0 0-3-3.968m-2.25-.158h-2.25V3.375h2.25zm-4.5-1.125V4.5h-2.25V3.375zm7.5 15.375a1.875 1.875 0 0 1-1.875 1.875h-9a1.875 1.875 0 0 1-1.875-1.875V8.625A1.875 1.875 0 0 1 7.5 6.75h9a1.875 1.875 0 0 1 1.875 1.875z" })
  ] });
});
s.displayName = "Jar";
export {
  s as Jar
};
//# sourceMappingURL=Jar.js.map
