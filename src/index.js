const detectHover = {
  update() {
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      this.hover = window.matchMedia('(hover: hover)').matches;
      this.none = window.matchMedia('(hover: none)').matches;
      this.onDemand = window.matchMedia('(hover: on-demand)').matches;
      this.anyHover = window.matchMedia('(any-hover: hover)').matches;
      this.anyNone = window.matchMedia('(any-hover: none)').matches;
      this.anyOnDemand = window.matchMedia('(any-hover: on-demand)').matches;
    }
  },
};

detectHover.update();
export default detectHover;
