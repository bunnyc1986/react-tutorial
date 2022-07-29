/// <reference types="emscripten" />

export interface WebPModule extends EmscriptenModule {
  webp: {
    version: () => number;
    create_buffer: (width: uint, height: number) => number;
    destory_buffer: (p: number) => void;
    encode: (
      img_in: number,
      width: number,
      height: number,
      quality: number
    ) => void;
    free_result: (result: number) => void;
    get_result_pointer: () => number;
    get_result_size: () => number;
  };
}

const createWebPModule: EmscriptenModuleFactory<WebPModule>;

export default createWebPModule;
