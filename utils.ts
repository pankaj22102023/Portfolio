import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fileReplacer(key: unknown, value: unknown) {
  return value instanceof File
    ? {
      name: value.name,
      size: value.size,
      type: value.type,
      lastModified: value.lastModified,
    }
    : value;
}

// Use Cases 
// 1. Detecting file changes in React state
// useEffect(() => {
//   // run effect only if file actually changed
// }, [JSON.stringify(file, fileReplacer)]);

// 2. Comparing files by metadata 
// JSON.stringify(file1, fileReplacer) === JSON.stringify(file2, fileReplacer) // true if metadata matches

// 3.Logging or debugging File objects 
// console.log(JSON.stringify(file)) // "{}"
// console.log(JSON.stringify(file, fileReplacer)) // {"name":"avatar.png","size":34567,"type":"image/png","lastModified":1712222222222}

// 4. Storing file metadata (not contents)
// localStorage.setItem("fileMeta", JSON.stringify(file, fileReplacer)); 

// 5. To avoid re-uploading the same file:
// if (JSON.stringify(old.photo, fileReplacer) === JSON.stringify(new.photo, fileReplacer)) {
//   payload.photo = undefined; // no need to update it
// }
