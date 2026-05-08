import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: l,
  titleId: i,
  ...o
}, d) => {
  const n = m(), a = l ? i ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": a, ...o, children: [
    l ? /* @__PURE__ */ e("title", { id: a, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m20.542 3.767-.034-.033L17.43.902a1.875 1.875 0 0 0-2.625.018l-4.458 4.432a3 3 0 0 0-4.262 4.22l-1.412 1.405a1.876 1.876 0 0 0 0 2.653l1.661 1.66-2.831 2.832a3 3 0 0 0 4.243 4.243l8.579-8.655a1.875 1.875 0 0 0-.036-2.682l-1.218-1.162 1.116-1.107 1.381 1.22a1.875 1.875 0 0 0 2.625-.032l.348-.348a4.126 4.126 0 0 0 0-5.834zM6.53 12.31l1.145-1.143 1.394 1.394-1.144 1.145zm-.375 8.47a.75.75 0 0 1-1.06-1.061l6.363-6.362a1.125 1.125 0 0 0 0-1.594L7.717 8.03A.75.75 0 1 1 8.78 6.968l.018.018 5.666 5.41zM18.951 8.01l-.094.094-1.394-1.22a1.88 1.88 0 0 0-2.608.035l-1.406 1.395-1.474-1.406 4.16-4.141 2.83 2.606a1.875 1.875 0 0 1-.014 2.637" })
  ] });
});
s.displayName = "PipeWrench";
export {
  s as PipeWrench
};
//# sourceMappingURL=PipeWrench.js.map
