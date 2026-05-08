import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as v } from "react";
const c = s(({
  size: r = "1em",
  title: a,
  titleId: e,
  ...i
}, l) => {
  const n = v(), d = a ? e ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": d, ...i, children: [
    a ? /* @__PURE__ */ o("title", { id: d, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M17.625 4.124a3 3 0 0 0-.75.094v-.094a3 3 0 0 0-5.699-1.312 3 3 0 0 0-4.05 2.812v4.765a3 3 0 0 0-4.876 3.44c2.983 6.289 4.814 9.045 9.75 9.045a8.635 8.635 0 0 0 8.625-8.625V7.124a3 3 0 0 0-3-3m.75 10.125A6.383 6.383 0 0 1 12 20.624c-3.359 0-4.66-1.312-7.732-7.794l-.043-.081a.75.75 0 0 1 1.299-.75l.02.033 1.75 2.812a1.125 1.125 0 0 0 2.081-.595V5.624a.75.75 0 1 1 1.5 0v5.625a1.125 1.125 0 1 0 2.25 0V4.124a.75.75 0 1 1 1.5 0v7.125a1.125 1.125 0 1 0 2.25 0V7.124a.75.75 0 1 1 1.5 0z" })
  ] });
});
c.displayName = "Hand";
export {
  c as Hand
};
//# sourceMappingURL=Hand.js.map
