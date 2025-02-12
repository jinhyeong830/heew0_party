import { useEffect } from 'react';

/**
 * index.html 의 title을 변경해주는 hook
 *
 * @param title 페이지 title
 * @returns {void}
 */
export default function useTitle(title: string) {
  useEffect(() => {
    const prev = document.title;
    document.title = title;
    return () => {
      document.title = prev;
    };
  }, [title]);
}
