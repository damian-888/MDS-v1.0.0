import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const m = n(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...a
}, h) => {
  const l = v(), d = o ? i ?? l : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: h, "aria-labelledby": d, ...a, children: [
    o ? /* @__PURE__ */ e("title", { id: d, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.25 2.625h-12A1.125 1.125 0 0 0 7.125 3.75v3.375H3.75A1.125 1.125 0 0 0 2.625 8.25v12a1.125 1.125 0 0 0 1.125 1.125h12a1.125 1.125 0 0 0 1.125-1.125v-3.375h3.375a1.125 1.125 0 0 0 1.125-1.125v-12a1.125 1.125 0 0 0-1.125-1.125m-5.625 16.5h-9.75v-9.75h9.75zm4.5-4.5h-2.25V8.25a1.125 1.125 0 0 0-1.125-1.125H9.375v-2.25h9.75z" })
  ] });
});
m.displayName = "Copy";
export {
  m as Copy
};
//# sourceMappingURL=Copy.js.map
