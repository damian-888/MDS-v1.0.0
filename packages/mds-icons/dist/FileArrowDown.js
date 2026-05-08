import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as h, useId as v } from "react";
const w = h(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...i
}, d) => {
  const n = v(), l = r ? e ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": l, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: l, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m20.296 7.455-5.25-5.25a1.12 1.12 0 0 0-.796-.33h-9A1.875 1.875 0 0 0 3.375 3.75v16.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875v-12c0-.298-.118-.584-.33-.795M15 5.344 17.156 7.5H15zM5.625 19.875V4.125h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v10.125zm9.42-5.67a1.125 1.125 0 0 1 0 1.593l-2.25 2.25a1.125 1.125 0 0 1-1.593 0l-2.25-2.25a1.127 1.127 0 1 1 1.594-1.594l.329.327v-2.906a1.125 1.125 0 1 1 2.25 0v2.906l.33-.33a1.124 1.124 0 0 1 1.59.003" })
  ] });
});
w.displayName = "FileArrowDown";
export {
  w as FileArrowDown
};
//# sourceMappingURL=FileArrowDown.js.map
