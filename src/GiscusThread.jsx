import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Giscus from "@giscus/react";

export default function GiscusThread() {
  return (
    <BrowserOnly>
      {() => (
        <Giscus
          repo="asteriasmoons/pandoryx-docs"
          repoId="R_kgDOPbmicA"
          category="Announcements"
          categoryId="DIC_kwDOPbmicM4CvZv-"
          mapping="specific"
          term="announcements"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="preferred_color_scheme"
          lang="en"
        />
      )}
    </BrowserOnly>
  );
}