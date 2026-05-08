import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const h = m(({
  size: r = "1em",
  title: l,
  titleId: o,
  ...d
}, i) => {
  const n = s(), a = l ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": a, ...d, children: [
    l ? /* @__PURE__ */ e("title", { id: a, children: l }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.635 6.51a1.875 1.875 0 0 0-1.385-3.135H3.75a1.875 1.875 0 0 0-1.388 3.136l.012.013 6.25 6.671v7.055a1.875 1.875 0 0 0 2.915 1.56l3-2a1.88 1.88 0 0 0 .835-1.56v-5.055l6.25-6.67zm-8.207 5.471a1.13 1.13 0 0 0-.303.769v5.299l-2.25 1.5V12.75c0-.286-.109-.56-.304-.769L4.615 5.625h14.768zm9.868 7.474a1.127 1.127 0 0 1-1.594 1.594l-1.452-1.455-1.455 1.454a1.127 1.127 0 1 1-1.594-1.594L18.656 18l-1.455-1.455a1.127 1.127 0 1 1 1.594-1.594l1.455 1.455 1.454-1.455a1.127 1.127 0 1 1 1.594 1.594L21.844 18z" })
  ] });
});
h.displayName = "FunnelX";
export {
  h as FunnelX
};
//# sourceMappingURL=FunnelX.js.map
