import { jsxs as m, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...h
}, i) => {
  const l = n(), o = r ? e ?? l : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...h, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M21 4.125H3A1.875 1.875 0 0 0 1.125 6v12A1.875 1.875 0 0 0 3 19.875h18A1.875 1.875 0 0 0 22.875 18V6A1.875 1.875 0 0 0 21 4.125m-.375 13.5H3.375V6.375h17.25zM4.875 12A1.125 1.125 0 0 1 6 10.875h12a1.125 1.125 0 1 1 0 2.25H6A1.125 1.125 0 0 1 4.875 12m0-3.375A1.125 1.125 0 0 1 6 7.5h12a1.125 1.125 0 0 1 0 2.25H6a1.125 1.125 0 0 1-1.125-1.125m0 6.75A1.125 1.125 0 0 1 6 14.25h.75a1.125 1.125 0 1 1 0 2.25H6a1.125 1.125 0 0 1-1.125-1.125m10.125 0a1.125 1.125 0 0 1-1.125 1.125h-3.75a1.125 1.125 0 1 1 0-2.25h3.75A1.125 1.125 0 0 1 15 15.375m4.125 0A1.125 1.125 0 0 1 18 16.5h-.75a1.125 1.125 0 1 1 0-2.25H18a1.125 1.125 0 0 1 1.125 1.125" })
  ] });
});
s.displayName = "Keyboard";
export {
  s as Keyboard
};
//# sourceMappingURL=Keyboard.js.map
