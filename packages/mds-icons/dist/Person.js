import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const h = s(({
  size: a = "1em",
  title: l,
  titleId: e,
  ...d
}, i) => {
  const n = m(), r = l ? e ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    l ? /* @__PURE__ */ o("title", { id: r, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m20.746 12.315-4.23-4.795a3.38 3.38 0 0 0-2.402-1.143 3.374 3.374 0 1 0-4.228 0A3.38 3.38 0 0 0 7.484 7.52l-4.23 4.795a2.25 2.25 0 0 0 3.16 3.203l.63-.506-1.256 4.771a2.25 2.25 0 0 0 4.1 1.846L12 17.993l2.111 3.636a2.25 2.25 0 0 0 4.1-1.846l-1.256-4.77.631.505a2.25 2.25 0 0 0 3.16-3.203M12 2.627a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m7.031 11.167-3.33-2.67a1.125 1.125 0 0 0-1.792 1.164l2.147 8.151q.026.098.069.188a1 1 0 0 0-.047-.094l-3.105-5.344a1.126 1.126 0 0 0-1.946 0l-3.105 5.344q-.026.046-.047.094.042-.09.068-.188l2.144-8.148a1.125 1.125 0 0 0-1.791-1.165l-3.327 2.668a1 1 0 0 0-.094.082q.026-.025.048-.05l4.248-4.818a1.13 1.13 0 0 1 .844-.381h3.97a1.13 1.13 0 0 1 .843.38l4.249 4.818q.024.026.049.051a1 1 0 0 0-.095-.082" })
  ] });
});
h.displayName = "Person";
export {
  h as Person
};
//# sourceMappingURL=Person.js.map
