import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const numeric = Number.parseFloat(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1200, bounce: 0 });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!Number.isFinite(numeric)) {
      setDisplay(value);
      return;
    }
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(numeric % 1 === 0 ? Math.round(latest).toString() : latest.toFixed(2));
    });
    if (inView) motionValue.set(numeric);
    return unsubscribe;
  }, [inView, motionValue, numeric, spring, value]);

  return (
    <motion.span ref={ref}>
      {display}
      {suffix}
    </motion.span>
  );
}
