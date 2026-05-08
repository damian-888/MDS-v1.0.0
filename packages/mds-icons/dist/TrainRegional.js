import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const s = t(({
  size: a = "1em",
  title: l,
  titleId: o,
  ...e
}, d) => {
  const n = m(), r = l ? o ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": r, ...e, children: [
    l ? /* @__PURE__ */ i("title", { id: r, children: l }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "m21.336 10.954-2.1-7.697a1.875 1.875 0 0 0-1.809-1.382H6.573a1.875 1.875 0 0 0-1.809 1.382l-2.1 7.697a1.14 1.14 0 0 0 0 .592l2.1 7.697a1.875 1.875 0 0 0 1.809 1.382h.177l-.9 1.2a1.125 1.125 0 1 0 1.8 1.35l1.912-2.55h4.876l1.912 2.55a1.125 1.125 0 1 0 1.8-1.35l-.9-1.2h.177a1.875 1.875 0 0 0 1.809-1.382l2.1-7.697a1.14 1.14 0 0 0 0-.592M6.86 4.125h10.28l1.704 6.237L12 11.606l-6.844-1.244zm-1.555 8.55 5.57 1.012v4.688H6.86zm11.835 5.7h-4.015v-4.687l5.57-1.013zM7.875 8.25A1.125 1.125 0 0 1 9 7.125h6a1.125 1.125 0 0 1 0 2.25H9A1.125 1.125 0 0 1 7.875 8.25" })
  ] });
});
s.displayName = "TrainRegional";
export {
  s as TrainRegional
};
//# sourceMappingURL=TrainRegional.js.map
