import { jsxs as l, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const s = t(({
  size: a = "1em",
  title: r,
  titleId: v,
  ...e
}, i) => {
  const h = n(), o = r ? v ?? h : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "m23.55 11.1-4.5-3.375a1.125 1.125 0 0 0-1.8.9v2.25H7.125v-3.75h2.068a3.375 3.375 0 1 0 0-2.25H6.75A1.875 1.875 0 0 0 4.875 6.75v4.125h-3.75a1.125 1.125 0 1 0 0 2.25h3.75v4.125a1.875 1.875 0 0 0 1.875 1.875H9v.375a1.875 1.875 0 0 0 1.875 1.875h3A1.875 1.875 0 0 0 15.75 19.5v-3a1.875 1.875 0 0 0-1.875-1.875h-3A1.875 1.875 0 0 0 9 16.5v.375H7.125v-3.75H17.25v2.25a1.126 1.126 0 0 0 1.8.9l4.5-3.375a1.125 1.125 0 0 0 0-1.8M12.375 4.875a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m-1.125 12h2.25v2.25h-2.25zm8.25-3.75v-2.25L21 12z" })
  ] });
});
s.displayName = "Usb";
export {
  s as Usb
};
//# sourceMappingURL=Usb.js.map
