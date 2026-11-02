import { useState, useEffect } from 'react';

/**
 * Custom hook to simulate typewriter effect across an array of phrases
 * @param {string[]} phrases - List of strings to cycle through
 * @param {number} typingSpeed - Speed in ms per character typed
 * @param {number} deletingSpeed - Speed in ms per character deleted
 * @param {number} pauseDuration - Pause duration in ms after finishing a phrase
 */
export function useTypingEffect(
  phrases,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseDuration = 1800
) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;

    const currentPhrase = phrases[currentPhraseIndex];
    let timeout;

    if (!isDeleting) {
      if (displayedText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 150);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return displayedText;
}
