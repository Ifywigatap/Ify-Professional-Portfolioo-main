import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

/**
 * A reusable Card component with motion effects.
 * It renders a motion-enabled div by default.
 * For links, wrap this component in a Link or anchor tag.
 */
export default function Card({ children, className = '', as: Component = 'div', ...props }) {
  const allClassNames = `card ${className}`;
  const MotionComponent = motion[Component];

  return (
    <MotionComponent
      variants={itemVariants}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className={allClassNames}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}