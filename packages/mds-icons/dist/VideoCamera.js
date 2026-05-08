import { jsxs as m, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const h = n(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...a
}, l) => {
  const t = v(), o = r ? i ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...a, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M23.386 6.498a1.13 1.13 0 0 0-1.173.094L19.875 8.29V6.75A1.875 1.875 0 0 0 18 4.875H3A1.875 1.875 0 0 0 1.125 6.75v10.5A1.875 1.875 0 0 0 3 19.125h15a1.875 1.875 0 0 0 1.875-1.875v-1.54l2.338 1.7A1.125 1.125 0 0 0 24 16.5v-9a1.13 1.13 0 0 0-.614-1.002m-5.761 10.377H3.375v-9.75h14.25zm4.125-2.585-1.875-1.363v-1.854L21.75 9.71z" })
  ] });
});
h.displayName = "VideoCamera";
export {
  h as VideoCamera
};
//# sourceMappingURL=VideoCamera.js.map
