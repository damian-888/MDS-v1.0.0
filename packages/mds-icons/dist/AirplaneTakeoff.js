import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as f, useId as m } from "react";
const s = f(({
  size: l = "1em",
  title: a,
  titleId: o,
  ...i
}, d) => {
  const n = m(), r = a ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": r, ...i, children: [
    a ? /* @__PURE__ */ e("title", { id: r, children: a }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M16.875 20.25a1.125 1.125 0 0 1-1.125 1.125H2.25a1.125 1.125 0 0 1 0-2.25h13.5a1.125 1.125 0 0 1 1.125 1.125m6.73-11.823a1.13 1.13 0 0 1-.528.759L9.258 17.438l-.012.006a4.1 4.1 0 0 1-4.894-.556l-.018-.017L.96 13.566a1.875 1.875 0 0 1 .52-3.066l.276-.135c.267-.13.574-.15.855-.055l2.485.838 1.326-.802-1.694-1.648A1.875 1.875 0 0 1 5.262 5.6l.045-.019.67-.253c.254-.095.534-.095.787 0l4.889 1.797 4.68-2.793a4.106 4.106 0 0 1 5.307.958l1.747 2.238a1.12 1.12 0 0 1 .219.899m-2.775-.52-.955-1.223a1.865 1.865 0 0 0-2.394-.42l-5.135 3.065a1.13 1.13 0 0 1-.965.094L7.068 7.835l1.969 1.912a1.125 1.125 0 0 1-.202 1.77L5.813 13.34a1.12 1.12 0 0 1-.938.103l-1.251-.422 2.279 2.231a1.865 1.865 0 0 0 2.212.249z" })
  ] });
});
s.displayName = "AirplaneTakeoff";
export {
  s as AirplaneTakeoff
};
//# sourceMappingURL=AirplaneTakeoff.js.map
