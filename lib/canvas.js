import { createCanvas, loadImage as napiLoadImage, GlobalFonts } from "@napi-rs/canvas";
import fs from "fs";

export function registerFont(fontPath, options) {
  const family = typeof options === "string" ? options : options?.family;
  try {
    if (!fs.existsSync(fontPath)) {
      console.warn(`[Canvas] Fuente no encontrada en: ${fontPath}`);
      return false;
    }
    return GlobalFonts.registerFromPath(fontPath, family);
  } catch (error) {
    console.error("Error registrando fuente con @napi-rs/canvas:", error);
    return false;
  }
}

const imageCache = new Map();

export async function loadImage(source, options) {
  if (
    typeof source === "string" &&
    !source.startsWith("http://") &&
    !source.startsWith("https://") &&
    !source.startsWith("data:")
  ) {
    if (imageCache.has(source)) {
      return imageCache.get(source);
    }
    if (!fs.existsSync(source)) {
      throw new Error(`[Canvas] Imagen no encontrada en: ${source}`);
    }
    const loaded = await napiLoadImage(source, options);
    imageCache.set(source, loaded);
    return loaded;
  }
  return napiLoadImage(source, options);
}

export { createCanvas, GlobalFonts };
