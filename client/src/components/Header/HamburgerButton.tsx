'use client';
import { useState, Dispatch, SetStateAction } from 'react';

type HamburgerButtonProps = {
  animationType?: 'squeeze' | 'spin' | 'collapse' | 'elastic';
  color?: string;
  isActive?: boolean;
  onToggle?:Dispatch<SetStateAction<boolean>>;
} & Omit<React.ComponentPropsWithoutRef<'button'>, 'onClick'>;

export default function HamburgerButton({
  animationType = 'squeeze',

  isActive: controlledIsActive,
  onToggle,
  className = '',
  ...rest
}: HamburgerButtonProps) {
  const [internalIsActive, setInternalIsActive] = useState(false);
  const isActive = controlledIsActive ?? internalIsActive;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newState = !isActive;
    
    // Update internal state if not controlled
    if (controlledIsActive === undefined) {
      setInternalIsActive(newState);
    }
    
    // Handle both function types
    if (onToggle) {
      if (onToggle.length === 1) {
        (onToggle as (isActive: boolean) => void)(newState);
      } else {
        (onToggle as Dispatch<SetStateAction<boolean>>)(newState);
      }
    }
    
    console.log(e)
  };

  return (
    <button
      {...rest}
      className={`hamburger hamburger--${animationType} lg:hidden ${
        isActive ? 'is-active' : ''
      } z-50 ${className}`}
      type="button"
      aria-label={rest['aria-label'] || 'Menu'}
      aria-expanded={isActive}
      onClick={handleClick}
      style={{ ...rest.style }}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
}