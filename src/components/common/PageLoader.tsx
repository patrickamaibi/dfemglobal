import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane } from 'lucide-react';

interface PageLoaderProps {
  onComplete?: () => void;
  forceShow?: boolean;
}

type Stage = 'showing' | 'opening';

// Timeline (ms)
const MIN_VISIBLE_MS = 1400; // the logo always stays at least this long
const MAX_VISIBLE_MS = 5000; // never make anyone wait longer than this
const CURTAIN_MS = 700; // how long the curtains take to open

/**
 * True once the intro has played during THIS page load.
 * It lives in memory, so a refresh or a fresh visit resets it and the intro plays again,
 * while moving between pages inside the app does not replay it.
 */
let hasPlayedThisPageLoad = false;

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete, forceShow = false }) => {
  // Decide visibility on the very first render so the page never flashes before the loader.
  const [isVisible, setIsVisible] = useState<boolean>(
    () => forceShow || !(hasPlayedThisPageLoad || prefersReducedMotion())
  );
  const [stage, setStage] = useState<Stage>('showing');

  // Keep the latest onComplete without restarting the timers when the parent re-renders.
  const onCompleteRef = useRef(onComplete);
  const completedRef = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // React has started: remove the static splash from index.html (this loader takes over).
  useEffect(() => {
    document.getElementById('boot-splash')?.remove();
  }, []);

  // Single exit path, runs once whether the intro ends naturally or is skipped.
  const finish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    hasPlayedThisPageLoad = true;
    setIsVisible(false);
    onCompleteRef.current?.();
  }, []);

  // Timeline: stay for at least MIN_VISIBLE_MS AND until the page has finished loading
  // (but never longer than MAX_VISIBLE_MS), then open the curtains.
  useEffect(() => {
    if (!isVisible) {
      if (!completedRef.current) {
        completedRef.current = true;
        onCompleteRef.current?.();
      }
      return;
    }

    let minElapsed = false;
    let pageLoaded = document.readyState === 'complete';
    let opened = false;
    let closeTimer: ReturnType<typeof setTimeout> | undefined;

    const open = () => {
      if (opened) return;
      opened = true;
      setStage('opening');
      closeTimer = setTimeout(finish, CURTAIN_MS + 150);
    };
    const tryOpen = () => {
      if (minElapsed && pageLoaded) open();
    };
    const onLoad = () => {
      pageLoaded = true;
      tryOpen();
    };

    const minTimer = setTimeout(() => {
      minElapsed = true;
      tryOpen();
    }, MIN_VISIBLE_MS);
    const maxTimer = setTimeout(open, MAX_VISIBLE_MS);
    if (!pageLoaded) window.addEventListener('load', onLoad);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      if (closeTimer) clearTimeout(closeTimer);
      window.removeEventListener('load', onLoad);
    };
  }, [isVisible, finish]);

  // Lock page scroll while the intro covers the screen.
  useEffect(() => {
    if (!isVisible) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isVisible]);

  const isOpening = stage === 'opening';

  // AnimatePresence must stay mounted and decide by itself when its child leaves,
  // otherwise the exit animation never plays.
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="dkingsfems-loader"
          role="status"
          aria-live="polite"
          aria-label="Loading D'Kingsfems Global"
          // Transparent on purpose: the two curtains below provide the navy cover,
          // so when they slide apart the website is revealed underneath.
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {/* Shutter left curtain */}
          <motion.div
            className="absolute top-0 bottom-0 left-0 z-10 w-1/2 bg-[#050D1A]"
            initial={{ x: 0 }}
            animate={{ x: isOpening ? '-100%' : 0 }}
            transition={{ duration: CURTAIN_MS / 1000, ease: [0.77, 0, 0.175, 1] }}
          />

          {/* Shutter right curtain */}
          <motion.div
            className="absolute top-0 bottom-0 right-0 z-10 w-1/2 bg-[#050D1A]"
            initial={{ x: 0 }}
            animate={{ x: isOpening ? '100%' : 0 }}
            transition={{ duration: CURTAIN_MS / 1000, ease: [0.77, 0, 0.175, 1] }}
          />

          {/* Centre stage: the logo. It starts exactly like the static splash in index.html,
              so nothing jumps when React takes over. */}
          <motion.div
            className="relative z-20"
            initial={false}
            animate={isOpening ? { scale: 1.06, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute -inset-10 animate-pulse rounded-full bg-gradient-to-r from-blue-600/20 via-[#E5C158]/25 to-blue-400/20 blur-3xl"
              aria-hidden="true"
            />

            {/* #F3DC8A glow ring, pulsing gently behind the logo */}
            <motion.div
              className="pointer-events-none absolute -inset-14 rounded-full sm:-inset-16"
              style={{ boxShadow: '0 0 70px 14px #F3DC8A55, 0 0 140px 36px #F3DC8A22' }}
              animate={
                isOpening
                  ? { opacity: 0, scale: 1.15 }
                  : { opacity: [0.6, 1, 0.6], scale: [1, 1.04, 1] }
              }
              transition={
                isOpening
                  ? { duration: 0.4, ease: 'easeOut' }
                  : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
              }
              aria-hidden="true"
            />

            {/* Airplane: circles the logo while waiting, then zooms off to the right as the curtains open */}
            <motion.div
              className="pointer-events-none absolute -inset-16 sm:-inset-20"
              animate={isOpening ? { x: '160vw', opacity: [1, 1, 0] } : { rotate: 360 }}
              transition={
                isOpening
                  ? { duration: 0.55, ease: [0.6, -0.28, 0.9, 0.3] }
                  : { duration: 3.2, repeat: Infinity, ease: 'linear' }
              }
              aria-hidden="true"
            >
              <Plane
                className="absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 rotate-90 text-[#F3DC8A]"
                style={{ filter: 'drop-shadow(0 0 6px #F3DC8A)' }}
              />
            </motion.div>

            <img
              src="/dfem4.webp"
              alt="D'Kingsfems Global Ltd"
              className="relative block h-auto w-[min(80vw,20rem)] brightness-0 invert"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};