import fs from "fs";
import path from "path";

const blurDir = path.join(process.cwd(), "public/images/blog/blur");

/**
 * Returns a base64 data URL for the blurred placeholder of a blog image.
 * Falls back to a generic tiny transparent PNG if the blur file doesn't exist.
 */
export function getBlurDataURL(imagePath: string): string {
  // imagePath looks like "/images/blog/some-slug.png"
  const baseName = path.basename(imagePath, path.extname(imagePath));
  const blurFile = path.join(blurDir, `${baseName}.png`);

  if (fs.existsSync(blurFile)) {
    const buffer = fs.readFileSync(blurFile);
    return `data:image/png;base64,${buffer.toString("base64")}`;
  }

  // Fallback: 1x1 transparent pixel
  return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88P/BfwAJhAPk2M5VaAAAAABJRU5ErkJggg==";
}
