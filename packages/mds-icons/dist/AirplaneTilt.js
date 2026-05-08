import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { forwardRef as c, useId as m } from "react";
const s = c(({
  size: a = "1em",
  title: l,
  titleId: e,
  ...o
}, d) => {
  const t = m(), r = l ? e ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": r, ...o, children: [
    l ? /* @__PURE__ */ i("title", { id: r, children: l }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "m17.812 10.81 2.551-2.401.024-.024a3.375 3.375 0 0 0-4.772-4.773q-.012.011-.025.024l-2.4 2.551-7.556-2.746a1.13 1.13 0 0 0-1.18.262l-2.25 2.25a1.125 1.125 0 0 0 .171 1.734l5.61 3.739-.954.948H5.25c-.299 0-.584.119-.795.33l-2.25 2.25a1.125 1.125 0 0 0 .375 1.839l3.302 1.322 1.319 3.294.008.02a1.126 1.126 0 0 0 1.852.348l2.233-2.233a1.12 1.12 0 0 0 .33-.794v-1.782l.95-.95 3.738 5.605a1.125 1.125 0 0 0 1.732.171l2.25-2.25a1.12 1.12 0 0 0 .261-1.18zm-.385 8.423-3.74-5.609a1.127 1.127 0 0 0-1.733-.17l-2.25 2.25c-.211.211-.33.497-.33.796v1.78l-.714.715-.866-2.166a1.13 1.13 0 0 0-.627-.627L5 15.336l.717-.712H7.5c.298 0 .584-.118.795-.328l2.25-2.25a1.125 1.125 0 0 0-.171-1.734L4.766 6.573l.772-.773 7.578 2.755a1.13 1.13 0 0 0 1.204-.286l2.896-3.077a1.127 1.127 0 0 1 1.594 1.594l-3.077 2.896a1.13 1.13 0 0 0-.287 1.204l2.756 7.577z" })
  ] });
});
s.displayName = "AirplaneTilt";
export {
  s as AirplaneTilt
};
//# sourceMappingURL=AirplaneTilt.js.map
