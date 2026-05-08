import { jsxs as h, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const c = n(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...a
}, t) => {
  const l = v(), i = r ? d ?? l : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: t, "aria-labelledby": i, ...a, children: [
    r ? /* @__PURE__ */ o("title", { id: i, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M15.75 2.625h-7.5A5.63 5.63 0 0 0 2.625 8.25v7.5a5.63 5.63 0 0 0 5.625 5.625h4.5q.181 0 .355-.058c2.59-.864 7.348-5.625 8.212-8.212q.058-.172.058-.355v-4.5a5.63 5.63 0 0 0-5.625-5.625M4.875 15.75v-7.5A3.375 3.375 0 0 1 8.25 4.875h7.5a3.375 3.375 0 0 1 3.375 3.375v3.375H17.25a5.63 5.63 0 0 0-5.625 5.625v1.875H8.25a3.375 3.375 0 0 1-3.375-3.375m9 2.59v-1.09a3.375 3.375 0 0 1 3.375-3.375h1.09c-1.09 1.51-2.955 3.375-4.465 4.465" })
  ] });
});
c.displayName = "Sticker";
export {
  c as Sticker
};
//# sourceMappingURL=Sticker.js.map
