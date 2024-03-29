// vendors
import { useEffect } from "react";
import { useRouter } from "next/router";
import { startNavigationProgress, resetNavigationProgress, NavigationProgress } from "@mantine/nprogress";

export function RouterTransition() {
  const router = useRouter();

  useEffect(() => {
    function handleStart(url) {
      if (url !== router.asPath) {
        startNavigationProgress();
      }
    }
    function handleComplete() {
      resetNavigationProgress(0);
    }

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.asPath, router.events]);

  return <NavigationProgress stepInterval={80} size={5} />;
}
