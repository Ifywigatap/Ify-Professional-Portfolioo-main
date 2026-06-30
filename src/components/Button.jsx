import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);
const MotionA = motion.a;
const MotionButton = motion.button;

const buttonVariants = {
  primary: 'btn-primary',
  outline: 'btn-outline',
};

/**
 * A reusable Button component with motion effects.
 * It can render as a button, a react-router Link, or a standard anchor tag.
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  ...props
}) {
  const classes = `btn ${buttonVariants[variant] || ''} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
    className: classes,
    ...props,
  };

  if (to) {
    return <MotionLink to={to} {...motionProps}>{children}</MotionLink>;
  }

  if (href) {
    return <MotionA href={href} {...motionProps}>{children}</MotionA>;
  }

  return <MotionButton {...motionProps}>{children}</MotionButton>;
}