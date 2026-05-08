import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: o = "1em",
  title: r,
  titleId: e,
  ...i
}, d) => {
  const t = v(), l = r ? e ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": l, ...i, children: [
    r ? /* @__PURE__ */ a("title", { id: l, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m20.296 7.455-5.25-5.25a1.12 1.12 0 0 0-.796-.33h-9A1.875 1.875 0 0 0 3.375 3.75v16.5a1.875 1.875 0 0 0 1.875 1.875h13.5a1.875 1.875 0 0 0 1.875-1.875v-12c0-.298-.118-.584-.33-.795m-3.14.045H15V5.344zM5.625 19.875V4.125h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v10.125zm9.42-6.796a1.127 1.127 0 1 1-1.593 1.594l-.327-.33v2.907a1.125 1.125 0 1 1-2.25 0v-2.906l-.33.33a1.127 1.127 0 1 1-1.593-1.594l2.25-2.25a1.125 1.125 0 0 1 1.594 0z" })
  ] });
});
m.displayName = "FileArrowUp";
export {
  m as FileArrowUp
};
//# sourceMappingURL=FileArrowUp.js.map
