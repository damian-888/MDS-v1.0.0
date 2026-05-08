import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, l) => {
  const t = h(), e = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M19.97 16.336a1.124 1.124 0 0 0-1.572.256 7 7 0 0 1-.286.375 7.1 7.1 0 0 0-2.813-2.66 4.5 4.5 0 1 0-6.588.008 7.2 7.2 0 0 0-2.818 2.649 7.84 7.84 0 0 1-1.716-4.083 1.125 1.125 0 0 0 1.5-1.676L3.802 9.33a1.125 1.125 0 0 0-1.594 0L.333 11.205a1.125 1.125 0 0 0 1.578 1.603 10.11 10.11 0 0 0 3.536 6.9q.081.083.176.148a10.11 10.11 0 0 0 12.795-.025q.063-.045.12-.099a10 10 0 0 0 1.687-1.824 1.125 1.125 0 0 0-.256-1.573M12 8.999a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5m0 10.875a7.83 7.83 0 0 1-4.4-1.348 4.874 4.874 0 0 1 8.801 0 7.9 7.9 0 0 1-4.4 1.348m11.671-7.08-1.875 1.876a1.125 1.125 0 0 1-1.593 0l-1.875-1.875a1.125 1.125 0 0 1 1.5-1.677A7.875 7.875 0 0 0 5.6 7.405a1.125 1.125 0 1 1-1.826-1.313 10.125 10.125 0 0 1 18.318 5.1 1.125 1.125 0 0 1 1.578 1.604z" })
  ] });
});
m.displayName = "UserSwitch";
export {
  m as UserSwitch
};
//# sourceMappingURL=UserSwitch.js.map
