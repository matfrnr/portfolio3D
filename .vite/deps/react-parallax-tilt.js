import {
  require_jsx_runtime
} from "./chunk-H3AWBCVN.js";
import {
  require_react
} from "./chunk-W24JOBID.js";
import {
  __toESM
} from "./chunk-EWTE5DHJ.js";

// node_modules/react-parallax-tilt/dist/modern/index.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
var i = (t2, e2, i2, n2) => {
  t2.style.transition = `${e2} ${i2}ms ${n2}`;
};
var n = (t2, e2, i2) => Math.min(Math.max(t2, e2), i2);
var s = class {
  constructor(t2, e2) {
    this.glareAngle = 0, this.glareOpacity = 0, this.calculateGlareSize = (t3) => {
      const { width: e3, height: i3 } = t3, n2 = Math.sqrt(e3 ** 2 + i3 ** 2);
      return { width: n2, height: n2 };
    }, this.setSize = (t3) => {
      const e3 = this.calculateGlareSize(t3);
      this.glareEl.style.width = `${e3.width}px`, this.glareEl.style.height = `${e3.height}px`;
    }, this.update = (t3, e3, i3, n2) => {
      this.updateAngle(t3, e3.glareReverse), this.updateOpacity(t3, e3, i3, n2);
    }, this.updateAngle = (t3, e3) => {
      const { xPercentage: i3, yPercentage: n2 } = t3, s3 = 180 / Math.PI, r3 = i3 ? Math.atan2(n2, -i3) * s3 : 0;
      this.glareAngle = r3 - (e3 ? 180 : 0);
    }, this.updateOpacity = (t3, e3, i3, s3) => {
      const { xPercentage: r3, yPercentage: l2 } = t3, { glarePosition: a2, glareReverse: o, glareMaxOpacity: h } = e3, p = i3 ? -1 : 1, c = s3 ? -1 : 1, g = o ? -1 : 1;
      let d = 0;
      switch (a2) {
        case "top":
          d = -r3 * p * g;
          break;
        case "right":
          d = l2 * c * g;
          break;
        case "bottom":
        case void 0:
          d = r3 * p * g;
          break;
        case "left":
          d = -l2 * c * g;
          break;
        case "all":
          d = Math.hypot(r3, l2);
      }
      const u = n(d, 0, 100);
      this.glareOpacity = u * h / 100;
    }, this.render = (t3) => {
      const { glareColor: e3 } = t3;
      this.glareEl.style.transform = `rotate(${this.glareAngle}deg) translate(-50%, -50%)`, this.glareEl.style.opacity = this.glareOpacity.toString(), this.glareEl.style.background = `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${e3} 100%)`;
    }, this.glareWrapperEl = document.createElement("div"), this.glareEl = document.createElement("div"), this.glareWrapperEl.appendChild(this.glareEl), this.glareWrapperEl.className = "glare-wrapper", this.glareEl.className = "glare";
    const i2 = { position: "absolute", top: "0", left: "0", width: "100%", height: "100%", overflow: "hidden", borderRadius: e2, WebkitMaskImage: "-webkit-radial-gradient(white, black)", pointerEvents: "none" }, s2 = this.calculateGlareSize(t2), r2 = { position: "absolute", top: "50%", left: "50%", transformOrigin: "0% 0%", pointerEvents: "none", width: `${s2.width}px`, height: `${s2.height}px` };
    Object.assign(this.glareWrapperEl.style, i2), Object.assign(this.glareEl.style, r2);
  }
};
var r = class {
  constructor() {
    this.glareAngle = 0, this.glareOpacity = 0, this.tiltAngleX = 0, this.tiltAngleY = 0, this.tiltAngleXPercentage = 0, this.tiltAngleYPercentage = 0, this.update = (t2, e2) => {
      this.updateTilt(t2, e2), this.updateTiltManualInput(t2, e2), this.updateTiltReverse(e2), this.updateTiltLimits(e2);
    }, this.updateTilt = (t2, e2) => {
      const { xPercentage: i2, yPercentage: n2 } = t2, { tiltMaxAngleX: s2, tiltMaxAngleY: r2 } = e2;
      this.tiltAngleX = i2 * s2 / 100, this.tiltAngleY = n2 * r2 / 100 * -1;
    }, this.updateTiltManualInput = (t2, e2) => {
      const { tiltAngleXManual: i2, tiltAngleYManual: n2, tiltMaxAngleX: s2, tiltMaxAngleY: r2 } = e2;
      (null !== i2 || null !== n2) && (this.tiltAngleX = null !== i2 ? i2 : 0, this.tiltAngleY = null !== n2 ? n2 : 0, t2.xPercentage = 100 * this.tiltAngleX / s2, t2.yPercentage = 100 * this.tiltAngleY / r2);
    }, this.updateTiltReverse = (t2) => {
      const e2 = t2.tiltReverse ? -1 : 1;
      this.tiltAngleX = e2 * this.tiltAngleX, this.tiltAngleY = e2 * this.tiltAngleY;
    }, this.updateTiltLimits = (t2) => {
      const { tiltAxis: e2 } = t2;
      this.tiltAngleX = n(this.tiltAngleX, -90, 90), this.tiltAngleY = n(this.tiltAngleY, -90, 90);
      e2 && (this.tiltAngleX = "x" === e2 ? this.tiltAngleX : 0, this.tiltAngleY = "y" === e2 ? this.tiltAngleY : 0);
    }, this.updateTiltAnglesPercentage = (t2) => {
      const { tiltMaxAngleX: e2, tiltMaxAngleY: i2 } = t2;
      this.tiltAngleXPercentage = this.tiltAngleX / e2 * 100, this.tiltAngleYPercentage = this.tiltAngleY / i2 * 100;
    }, this.render = (t2) => {
      t2.style.transform += `rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `;
    };
  }
};
var l = { scale: 1, perspective: 1e3, flipVertically: false, flipHorizontally: false, reset: true, transitionEasing: "cubic-bezier(.03,.98,.52,.99)", transitionSpeed: 400, trackOnWindow: false, gyroscope: false, ...{ tiltEnable: true, tiltReverse: false, tiltAngleXInitial: 0, tiltAngleYInitial: 0, tiltMaxAngleX: 20, tiltMaxAngleY: 20, tiltAxis: void 0, tiltAngleXManual: null, tiltAngleYManual: null }, glareEnable: false, glareMaxOpacity: 0.7, glareColor: "#ffffff", glarePosition: "bottom", glareReverse: false, glareBorderRadius: "0" };
var a = class extends import_react.PureComponent {
  constructor() {
    super(...arguments), this.wrapperEl = { node: null, size: { width: 0, height: 0, left: 0, top: 0 }, clientPosition: { x: null, y: null, xPercentage: 0, yPercentage: 0 }, updateAnimationId: null, scale: 1 }, this.tilt = null, this.glare = null, this.addDeviceOrientationEventListener = async () => {
      if (!window.DeviceOrientationEvent) return;
      const t2 = DeviceOrientationEvent.requestPermission;
      if ("function" == typeof t2) {
        "granted" === await t2() && window.addEventListener("deviceorientation", this.onMove);
      } else window.addEventListener("deviceorientation", this.onMove);
    }, this.setSize = () => {
      this.setWrapperElSize(), this.glare && this.glare.setSize(this.wrapperEl.size);
    }, this.mainLoop = (t2) => {
      null !== this.wrapperEl.updateAnimationId && cancelAnimationFrame(this.wrapperEl.updateAnimationId), this.processInput(t2), this.update(t2.type), this.wrapperEl.updateAnimationId = requestAnimationFrame(this.renderFrame);
    }, this.onEnter = (t2) => {
      const { onEnter: e2 } = this.props;
      this.setSize(), this.wrapperEl.node.style.willChange = "transform", this.setTransitions(), e2 && e2({ event: t2 });
    }, this.onMove = (t2) => {
      this.mainLoop(t2), this.emitOnMove(t2);
    }, this.onLeave = (t2) => {
      const { onLeave: e2 } = this.props;
      if (this.setTransitions(), e2 && e2({ event: t2 }), this.props.reset) {
        const t3 = new CustomEvent("autoreset");
        this.onMove(t3);
      }
    }, this.processInput = (t2) => {
      const { scale: e2 } = this.props;
      switch (t2.type) {
        case "mousemove":
          this.wrapperEl.clientPosition.x = t2.pageX, this.wrapperEl.clientPosition.y = t2.pageY, this.wrapperEl.scale = e2;
          break;
        case "touchmove":
          this.wrapperEl.clientPosition.x = t2.touches[0].pageX, this.wrapperEl.clientPosition.y = t2.touches[0].pageY, this.wrapperEl.scale = e2;
          break;
        case "deviceorientation":
          this.processInputDeviceOrientation(t2), this.wrapperEl.scale = e2;
          break;
        case "autoreset": {
          const { tiltAngleXInitial: t3, tiltAngleYInitial: e3, tiltMaxAngleX: i2, tiltMaxAngleY: s2 } = this.props, r2 = e3 / s2 * 100;
          this.wrapperEl.clientPosition.xPercentage = n(t3 / i2 * 100, -100, 100), this.wrapperEl.clientPosition.yPercentage = n(r2, -100, 100), this.wrapperEl.scale = 1;
          break;
        }
      }
    }, this.processInputDeviceOrientation = (t2) => {
      if (!t2.gamma || !t2.beta || !this.props.gyroscope) return;
      const { tiltMaxAngleX: e2, tiltMaxAngleY: i2 } = this.props, s2 = t2.gamma;
      this.wrapperEl.clientPosition.xPercentage = t2.beta / e2 * 100, this.wrapperEl.clientPosition.yPercentage = s2 / i2 * 100, this.wrapperEl.clientPosition.xPercentage = n(this.wrapperEl.clientPosition.xPercentage, -100, 100), this.wrapperEl.clientPosition.yPercentage = n(this.wrapperEl.clientPosition.yPercentage, -100, 100);
    }, this.update = (t2) => {
      const { tiltEnable: e2, flipVertically: i2, flipHorizontally: n2 } = this.props;
      "autoreset" !== t2 && "deviceorientation" !== t2 && "propChange" !== t2 && this.updateClientInput(), e2 && this.tilt.update(this.wrapperEl.clientPosition, this.props), this.updateFlip(), this.tilt.updateTiltAnglesPercentage(this.props), this.glare && this.glare.update(this.wrapperEl.clientPosition, this.props, i2, n2);
    }, this.updateClientInput = () => {
      const { trackOnWindow: t2 } = this.props;
      let e2, i2;
      if (t2) {
        const { x: t3, y: n2 } = this.wrapperEl.clientPosition;
        e2 = n2 / window.innerHeight * 200 - 100, i2 = t3 / window.innerWidth * 200 - 100;
      } else {
        const { size: { width: t3, height: n2, left: s2, top: r2 }, clientPosition: { x: l2, y: a2 } } = this.wrapperEl;
        e2 = (a2 - r2) / n2 * 200 - 100, i2 = (l2 - s2) / t3 * 200 - 100;
      }
      this.wrapperEl.clientPosition.xPercentage = n(e2, -100, 100), this.wrapperEl.clientPosition.yPercentage = n(i2, -100, 100);
    }, this.updateFlip = () => {
      const { flipVertically: t2, flipHorizontally: e2 } = this.props;
      t2 && (this.tilt.tiltAngleX += 180, this.tilt.tiltAngleY *= -1), e2 && (this.tilt.tiltAngleY += 180);
    }, this.renderFrame = () => {
      this.resetWrapperElTransform(), this.renderPerspective(), this.tilt.render(this.wrapperEl.node), this.renderScale(), this.glare && this.glare.render(this.props);
    };
  }
  componentDidMount() {
    if (this.tilt = new r(), this.initGlare(), this.setSize(), this.addEventListeners(), "undefined" == typeof CustomEvent) return;
    const t2 = new CustomEvent("autoreset");
    this.mainLoop(t2);
    const e2 = new CustomEvent("initial");
    this.emitOnMove(e2);
  }
  componentWillUnmount() {
    null !== this.wrapperEl.updateAnimationId && cancelAnimationFrame(this.wrapperEl.updateAnimationId), this.removeEventListeners();
  }
  componentDidUpdate() {
    const t2 = new CustomEvent("propChange");
    this.mainLoop(t2), this.emitOnMove(t2);
  }
  addEventListeners() {
    const { trackOnWindow: t2, gyroscope: e2 } = this.props;
    window.addEventListener("resize", this.setSize), t2 && (window.addEventListener("mouseenter", this.onEnter), window.addEventListener("mousemove", this.onMove), window.addEventListener("mouseout", this.onLeave), window.addEventListener("touchstart", this.onEnter), window.addEventListener("touchmove", this.onMove), window.addEventListener("touchend", this.onLeave)), e2 && this.addDeviceOrientationEventListener();
  }
  removeEventListeners() {
    const { trackOnWindow: t2, gyroscope: e2 } = this.props;
    window.removeEventListener("resize", this.setSize), t2 && (window.removeEventListener("mouseenter", this.onEnter), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseout", this.onLeave), window.removeEventListener("touchstart", this.onEnter), window.removeEventListener("touchmove", this.onMove), window.removeEventListener("touchend", this.onLeave)), e2 && window.DeviceOrientationEvent && window.removeEventListener("deviceorientation", this.onMove);
  }
  setWrapperElSize() {
    const t2 = this.wrapperEl.node.getBoundingClientRect();
    this.wrapperEl.size.width = this.wrapperEl.node.offsetWidth, this.wrapperEl.size.height = this.wrapperEl.node.offsetHeight, this.wrapperEl.size.left = t2.left + window.scrollX, this.wrapperEl.size.top = t2.top + window.scrollY;
  }
  initGlare() {
    const { glareEnable: t2, glareBorderRadius: e2 } = this.props;
    t2 && (this.glare = new s(this.wrapperEl.size, e2), this.wrapperEl.node.appendChild(this.glare.glareWrapperEl));
  }
  emitOnMove(t2) {
    const { onMove: e2 } = this.props;
    if (!e2) return;
    let i2 = 0, n2 = 0;
    this.glare && (i2 = this.glare.glareAngle, n2 = this.glare.glareOpacity), e2({ tiltAngleX: this.tilt.tiltAngleX, tiltAngleY: this.tilt.tiltAngleY, tiltAngleXPercentage: this.tilt.tiltAngleXPercentage, tiltAngleYPercentage: this.tilt.tiltAngleYPercentage, glareAngle: i2, glareOpacity: n2, event: t2 });
  }
  resetWrapperElTransform() {
    this.wrapperEl.node.style.transform = "";
  }
  renderPerspective() {
    const { perspective: t2 } = this.props;
    this.wrapperEl.node.style.transform += `perspective(${t2}px) `;
  }
  renderScale() {
    const { scale: t2 } = this.wrapperEl;
    this.wrapperEl.node.style.transform += `scale3d(${t2},${t2},${t2})`;
  }
  setTransitions() {
    const { transitionSpeed: t2, transitionEasing: e2 } = this.props;
    i(this.wrapperEl.node, "all", t2, e2), this.glare && i(this.glare.glareEl, "opacity", t2, e2);
  }
  render() {
    const { children: e2, className: i2, style: n2 } = this.props;
    return (0, import_jsx_runtime.jsx)("div", { ref: (t2) => {
      this.wrapperEl.node = t2;
    }, onMouseEnter: this.onEnter, onMouseMove: this.onMove, onMouseLeave: this.onLeave, onTouchStart: this.onEnter, onTouchMove: this.onMove, onTouchEnd: this.onLeave, className: i2, style: n2, children: e2 });
  }
};
a.defaultProps = l;
export {
  a as default
};
//# sourceMappingURL=react-parallax-tilt.js.map
