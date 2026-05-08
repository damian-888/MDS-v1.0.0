import { jsxs as m, jsx as a } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const v = t(({
  size: o = "1em",
  title: e,
  titleId: i,
  ...d
}, h) => {
  const l = n(), r = e ? i ?? l : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: h, "aria-labelledby": r, ...d, children: [
    e ? /* @__PURE__ */ a("title", { id: r, children: e }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M7.875 10.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m6.75-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-.6 4.298a3.84 3.84 0 0 1-4.05 0 1.126 1.126 0 1 0-1.2 1.904 6.09 6.09 0 0 0 6.45 0 1.125 1.125 0 1 0-1.2-1.904m6.6-5.423v8.25a3.38 3.38 0 0 1-2.25 3.182V21a1.875 1.875 0 0 1-1.875 1.875h-9A1.875 1.875 0 0 1 5.625 21v-1.693a3.38 3.38 0 0 1-2.25-3.182v-8.25A3.375 3.375 0 0 1 6.75 4.5h1.125V3A1.875 1.875 0 0 1 9.75 1.125h4.5A1.875 1.875 0 0 1 16.125 3v1.5h1.125a3.375 3.375 0 0 1 3.375 3.375M10.125 4.5h3.75V3.375h-3.75zm6 16.125V19.5h-8.25v1.125zm2.25-12.75A1.125 1.125 0 0 0 17.25 6.75H6.75a1.125 1.125 0 0 0-1.125 1.125v8.25A1.125 1.125 0 0 0 6.75 17.25h10.5a1.125 1.125 0 0 0 1.125-1.125z" })
  ] });
});
v.displayName = "LegoSmiley";
export {
  v as LegoSmiley
};
//# sourceMappingURL=LegoSmiley.js.map
