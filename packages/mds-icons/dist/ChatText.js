import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...t
}, i) => {
  const l = m(), o = r ? d ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...t, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M20.25 4.125H3.75A1.875 1.875 0 0 0 1.875 6v15a1.86 1.86 0 0 0 1.084 1.697 1.867 1.867 0 0 0 1.998-.264l.01-.01 2.952-2.548H20.25A1.875 1.875 0 0 0 22.125 18V6a1.875 1.875 0 0 0-1.875-1.875m-.375 13.5H7.5c-.27 0-.531.097-.735.274l-2.64 2.279V6.375h15.75zm-12-7.5A1.125 1.125 0 0 1 9 9h6a1.125 1.125 0 0 1 0 2.25H9a1.125 1.125 0 0 1-1.125-1.125m0 3.75A1.125 1.125 0 0 1 9 12.75h6A1.125 1.125 0 1 1 15 15H9a1.125 1.125 0 0 1-1.125-1.125" })
  ] });
});
s.displayName = "ChatText";
export {
  s as ChatText
};
//# sourceMappingURL=ChatText.js.map
