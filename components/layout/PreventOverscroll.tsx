'use client';

import { useEffect } from 'react';

/**
 * Prevents elastic overscroll at the top/bottom of the page (macOS/iOS bounce)
 * which exposes the light body background above the dark hero.
 */
export default function PreventOverscroll() {
  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      const atTop = window.scrollY <= 0;
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1;

      if ((atTop && event.deltaY < 0) || (atBottom && event.deltaY > 0)) {
        event.preventDefault();
      }
    };

    let touchStartY = 0;

    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (event: TouchEvent) => {
      const touchY = event.touches[0]?.clientY ?? touchStartY;
      const deltaY = touchStartY - touchY;
      const atTop = window.scrollY <= 0;
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1;

      if ((atTop && deltaY < 0) || (atBottom && deltaY > 0)) {
        event.preventDefault();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return null;
}
