import { jsxs as s, jsx as r } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const n = h(({
  size: e = "1em",
  title: l,
  titleId: o,
  ...i
}, d) => {
  const t = m(), a = l ? o ?? t : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: d, "aria-labelledby": a, ...i, children: [
    l ? /* @__PURE__ */ r("title", { id: a, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875M19.875 12a7.8 7.8 0 0 1-.42 2.531l-3.799-2.344a1.8 1.8 0 0 0-.731-.26l-2.14-.289a1.89 1.89 0 0 0-1.749.737h-.381l-.254-.525a1.86 1.86 0 0 0-1.294-1.016l-.251-.053.375-.656h1.349c.316 0 .628-.08.905-.233l1.149-.634q.19-.106.35-.251l2.524-2.281a1.87 1.87 0 0 0 .617-1.43A7.88 7.88 0 0 1 19.875 12m-6.679-7.781.582 1.04-2.27 2.053-1.025.563h-1.47a1.88 1.88 0 0 0-1.627.943l-.421.736-.62-1.653.93-2.195a7.87 7.87 0 0 1 5.921-1.487M4.125 12c0-.854.14-1.701.412-2.51l.726 1.936a1.87 1.87 0 0 0 1.361 1.175l1.831.394.282.572a1.89 1.89 0 0 0 1.27 1.01l-.469 1.042a1.88 1.88 0 0 0 .336 2.035l.02.02 1.702 1.754-.084.43A7.883 7.883 0 0 1 4.126 12m9.717 7.656a1.89 1.89 0 0 0-.469-1.622l-.02-.02-1.66-1.712 1.065-2.392 1.782.24 3.884 2.388a7.9 7.9 0 0 1-4.582 3.118" })
  ] });
});
n.displayName = "GlobeHemisphereWest";
export {
  n as GlobeHemisphereWest
};
//# sourceMappingURL=GlobeHemisphereWest.js.map
