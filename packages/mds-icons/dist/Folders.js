import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: l = "1em",
  title: r,
  titleId: e,
  ...i
}, a) => {
  const h = s(), o = r ? e ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21.375 5.25H15l-2.5-1.875A1.9 1.9 0 0 0 11.375 3h-4.25A1.875 1.875 0 0 0 5.25 4.875V6.75H3.375A1.875 1.875 0 0 0 1.5 8.625v10.5A1.875 1.875 0 0 0 3.375 21h14.333a1.793 1.793 0 0 0 1.792-1.792V17.25h1.958a1.793 1.793 0 0 0 1.792-1.792V7.125a1.875 1.875 0 0 0-1.875-1.875m-4.125 13.5H3.75V9H7.5l2.7 2.025c.195.146.432.225.675.225h6.375zM21 15h-1.5v-4.125A1.875 1.875 0 0 0 17.625 9H11.25l-2.5-1.875a1.9 1.9 0 0 0-1.125-.375H7.5v-1.5h3.75l2.7 2.025c.195.146.432.225.675.225H21z" })
  ] });
});
c.displayName = "Folders";
export {
  c as Folders
};
//# sourceMappingURL=Folders.js.map
