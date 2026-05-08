import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as s } from "react";
const m = h(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...l
}, t) => {
  const a = s(), d = r ? i ?? a : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": d, ...l, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.25 4.125H3.75A1.875 1.875 0 0 0 1.875 6v15a1.86 1.86 0 0 0 1.084 1.697 1.867 1.867 0 0 0 1.998-.264l.01-.01 2.952-2.548H20.25A1.875 1.875 0 0 0 22.125 18V6a1.875 1.875 0 0 0-1.875-1.875m-.375 13.5H7.5c-.27 0-.531.097-.735.274l-2.64 2.279V6.375h15.75z" })
  ] });
});
m.displayName = "Chat";
export {
  m as Chat
};
//# sourceMappingURL=Chat.js.map
