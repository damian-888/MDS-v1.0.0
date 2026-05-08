import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const v = t(({
  size: o = "1em",
  title: r,
  titleId: i,
  ...l
}, s) => {
  const a = n(), e = r ? i ?? a : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: s, "aria-labelledby": e, ...l, children: [
    r ? /* @__PURE__ */ d("title", { id: e, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M20.625 3h-13.5A1.875 1.875 0 0 0 5.25 4.875V6.75H3.375A1.875 1.875 0 0 0 1.5 8.625v10.5A1.875 1.875 0 0 0 3.375 21h13.5a1.875 1.875 0 0 0 1.875-1.875V17.25h1.875a1.875 1.875 0 0 0 1.875-1.875v-10.5A1.875 1.875 0 0 0 20.625 3M16.5 9v1.5H3.75V9zm0 9.75H3.75v-6H16.5zM20.25 15h-1.5V8.625a1.875 1.875 0 0 0-1.875-1.875H7.5v-1.5h12.75z" })
  ] });
});
v.displayName = "Browsers";
export {
  v as Browsers
};
//# sourceMappingURL=Browsers.js.map
