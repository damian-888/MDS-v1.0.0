import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const v = n(({
  size: r = "1em",
  title: l,
  titleId: d,
  ...e
}, h) => {
  const i = s(), a = l ? d ?? i : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: h, "aria-labelledby": a, ...e, children: [
    l ? /* @__PURE__ */ o("title", { id: a, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M5.333 2.993A1.125 1.125 0 0 0 3.45 4.151 1.875 1.875 0 0 0 1.875 6v15a1.86 1.86 0 0 0 1.084 1.697 1.866 1.866 0 0 0 1.998-.264l.01-.011 2.952-2.547h9.72l1.031 1.131a1.125 1.125 0 1 0 1.665-1.514zM7.5 17.625c-.27 0-.531.097-.735.274l-2.64 2.279V6.375h1.241l10.228 11.25zM22.125 6v10.324a1.125 1.125 0 1 1-2.25 0v-9.95h-8.944a1.125 1.125 0 1 1 0-2.25h9.319A1.875 1.875 0 0 1 22.125 6" })
  ] });
});
v.displayName = "ChatSlash";
export {
  v as ChatSlash
};
//# sourceMappingURL=ChatSlash.js.map
