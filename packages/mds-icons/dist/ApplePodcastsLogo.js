import { jsxs as s, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const m = n(({
  size: a = "1em",
  title: o,
  titleId: l,
  ...e
}, i) => {
  const t = h(), r = o ? l ?? t : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": r, ...e, children: [
    o ? /* @__PURE__ */ d("title", { id: r, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M15.128 12.187a3.75 3.75 0 1 0-6.255 0 2.66 2.66 0 0 0-.933 1.474 2.6 2.6 0 0 0 0 1.168l1.196 5.25a2.61 2.61 0 0 0 2.561 2.045h.606a2.61 2.61 0 0 0 2.561-2.043l1.195-5.25a2.61 2.61 0 0 0-.508-2.219 2.7 2.7 0 0 0-.424-.425M12 8.624a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m1.865 5.708-1.195 5.25a.375.375 0 0 1-.367.292h-.606a.375.375 0 0 1-.367-.292l-1.195-5.25a.37.37 0 0 1 .072-.316.38.38 0 0 1 .293-.142h3a.376.376 0 0 1 .367.292.4.4 0 0 1-.002.166m8.26-2.333a10.12 10.12 0 0 1-3.562 7.707A1.125 1.125 0 0 1 17.107 18a7.875 7.875 0 1 0-10.214 0 1.125 1.125 0 0 1-1.455 1.707A10.125 10.125 0 1 1 22.125 12" })
  ] });
});
m.displayName = "ApplePodcastsLogo";
export {
  m as ApplePodcastsLogo
};
//# sourceMappingURL=ApplePodcastsLogo.js.map
