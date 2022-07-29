/// <reference types="offscreencanvas" />

import { useEffect, useState } from "react";
import ModuleFactory from "../wasm/webpwasm";
import ModuleWasm from "../wasm/webpwasm.wasm";
import Lenna_PNG from "./Lenna.png";

async function getModuleFactory() {
  return await ModuleFactory({
    locateFile: () => {
      // get the path to the wasm file
      // Webpack puts this file in the `dist` directory
      return ModuleWasm;
    },
  });
}

async function loadImage(src: string) {
  const imgBlob = await fetch(src).then((resp) => resp.blob());
  const img = await createImageBitmap(imgBlob);
  const offscreen = new OffscreenCanvas(img.width, img.height);
  const ctx = offscreen.getContext("2d")!;
  ctx.drawImage(img, 0, 0);
  return ctx.getImageData(0, 0, img.width, img.height);
}

function WebAssemblyDemo() {
  const [version, setVersion] = useState<number | null>(null);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  useEffect(() => {
    const runAssembly = async () => {
      const module = await getModuleFactory();
      setVersion(module.webp.version());
      const image = await loadImage(Lenna_PNG);
      const p = module.webp.create_buffer(image.width, image.height);
      module.HEAP8.set(image.data, p);
      module.webp.encode(p, image.width, image.height, 100);
      const resultPtr = module.webp.get_result_pointer();
      const resultSize = module.webp.get_result_size();
      const resultView = new Uint8Array(
        module.HEAP8.buffer,
        resultPtr,
        resultSize
      );
      const result = new Uint8Array(resultView);
      const blob = new Blob([result], { type: "image/webp" });
      const blobUrl = URL.createObjectURL(blob);
      setBlobUrl(blobUrl);
      module.webp.destory_buffer(p);
    };
    runAssembly();
  }, []);

  return (
    <>
      <div>webplib version: {version}</div>
      {blobUrl ? <img src={blobUrl} alt="lenna_webp" width="300px" height="auto"/> : null}
    </>
  );
}

export default WebAssemblyDemo;
