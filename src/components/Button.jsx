import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React from 'react';

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
 * It also forwards refs to the underlying DOM element and handles external links securely.
 */
const Button = React.forwardRef(function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  ...props
}, ref) {
  const classes = `btn ${buttonVariants[variant] || ''} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
    className: classes,
    ...props,
  };

  const isExternal = href && /^(https?:\/\/|mailto:)/.test(href);

  if (to) {
    return <MotionLink ref={ref} to={to} {...motionProps}>{children}</MotionLink>;
  }

  if (href) {
    const externalProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return <MotionA ref={ref} href={href} {...motionProps} {...externalProps}>{children}</MotionA>;
  }

  return <MotionButton ref={ref} {...motionProps}>{children}</MotionButton>;
});

export default Button;