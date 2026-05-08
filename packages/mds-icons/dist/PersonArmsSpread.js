import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const h = t(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const n = m(), l = r ? o ?? n : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: l, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.069 8.141a2.21 2.21 0 0 0-2.194-1.767h-5.757a3.376 3.376 0 1 0-4.236 0H4.125a2.25 2.25 0 0 0-.937 4.293l.018.008 4.465 1.969-1.88 7.136a2.25 2.25 0 0 0 3.27 2.758 2.25 2.25 0 0 0 .832-.91L12 17.991l2.11 3.637a2.25 2.25 0 0 0 4.1-1.848l-1.875-7.139 4.466-1.969.017-.008A2.21 2.21 0 0 0 22.07 8.14M12 2.624a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m2.547 8.344a1.125 1.125 0 0 0-.635 1.312l2.144 8.156q.026.098.068.188-.021-.045-.046-.09l-3.105-5.348a1.124 1.124 0 0 0-1.946 0l-3.104 5.349a1 1 0 0 0-.047.089q.043-.09.069-.188l2.144-8.148a1.125 1.125 0 0 0-.635-1.313L4.125 8.624h15.75z" })
  ] });
});
h.displayName = "PersonArmsSpread";
export {
  h as PersonArmsSpread
};
//# sourceMappingURL=PersonArmsSpread.js.map
