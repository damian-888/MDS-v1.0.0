import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...i
}, l) => {
  const h = v(), d = r ? e ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": d, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: d, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M22.5 17.625h-.375V15A1.125 1.125 0 0 0 21 13.875h-6A1.125 1.125 0 0 0 13.875 15v2.625h-9.75v-12h15.75v5.625a1.125 1.125 0 1 0 2.25 0v-6a1.875 1.875 0 0 0-1.875-1.875H3.75A1.875 1.875 0 0 0 1.875 5.25v12.375H1.5a1.125 1.125 0 1 0 0 2.25h21a1.125 1.125 0 1 0 0-2.25m-6.375-1.5h3.75v1.5h-3.75z" })
  ] });
});
m.displayName = "ChalkboardSimple";
export {
  m as ChalkboardSimple
};
//# sourceMappingURL=ChalkboardSimple.js.map
