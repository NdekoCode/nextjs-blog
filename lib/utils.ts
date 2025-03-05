import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const uploadImage = async (image: File) => {
  const formData = new FormData();
  formData.append("file", image);
  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });
  if (!res.ok) {
    console.warn(
      `Failed to upload image: ${JSON.stringify(res, null, 2)}`
    );
  }
  const data = (await res.json()) as { filePath: string };
  return data.filePath;
};
