import path from "node:path";
import { docsPath } from "./documentationMetadata";

export function getDocPath(filePath: string) {
  const fileDir = path.dirname(filePath);
  const fileName = `${path.basename(filePath, path.extname(filePath))}.md`;

  const outputDir = path.join(docsPath, "code", fileDir);

  return {
    path: path.join(outputDir, fileName),
    outputDir,
    fileDir,
    fileName
  };
}
