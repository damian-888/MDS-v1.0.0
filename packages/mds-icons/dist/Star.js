import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const h = s(({
  size: a = "1em",
  title: l,
  titleId: d,
  ...e
}, i) => {
  const t = m(), r = l ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    l ? /* @__PURE__ */ o("title", { id: r, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M22.781 9a1.905 1.905 0 0 0-1.663-1.313l-5.305-.428-2.048-4.951a1.909 1.909 0 0 0-3.53 0L8.189 7.26l-5.305.427a1.917 1.917 0 0 0-1.093 3.364l4.048 3.491L4.6 19.764a1.91 1.91 0 0 0 2.859 2.08L12 19.048l4.54 2.794a1.912 1.912 0 0 0 2.859-2.076l-1.238-5.222 4.048-3.491A1.915 1.915 0 0 0 22.781 9m-6.606 4.284a1.12 1.12 0 0 0-.36 1.112l1.208 5.104-4.433-2.727a1.13 1.13 0 0 0-1.18 0L6.977 19.5l1.208-5.1a1.13 1.13 0 0 0-.36-1.112L3.862 9.866l5.194-.42a1.13 1.13 0 0 0 .95-.691L12 3.927l1.994 4.828a1.13 1.13 0 0 0 .95.692l5.193.419z" })
  ] });
});
h.displayName = "Star";
export {
  h as Star
};
//# sourceMappingURL=Star.js.map
