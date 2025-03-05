import { mkdir, writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import { dirname, join } from 'path';
import slugify from 'slugify';

export const POST = async (req: Request) => {
  const data = await req.formData();
  console.log(data);
  const file: File = data.get("file") as File;
  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }
  // On va maintenant manipuler le fichier,
  // ce que l'on va faire c'est que l'on va recuperer les donnees du fichier pour pour pouvoir ensuite sur notre disque dur sur `/public/images`
  // 1. On va recuperer les bytes avec `file.arrayBuffer()`

  const bytes = await file.arrayBuffer();
  // 2. On va maintenant creer ce buffer avec `Buffer.from(bytes)`
  const buffer = Buffer.from(bytes);
  // 3. Maintenant que l'on a le buffer il suffit simplement maintenant de definit le chemin vers lequel on va enregistrer ce buffer
  const filePath = `/images/${slugify(
    `${Date.now()}-${new Date().getTime()}-${file.name}`
  )}`;
  const imagePath = join(process.cwd(), `/public${filePath}`);
  // 4. On va maintenant enregistrer le fichier dans le dossier `/public/images`
  try {
    // Vérifier et créer le dossier si nécessaire

    await mkdir(dirname(imagePath), { recursive: true });
    await writeFile(imagePath, buffer);
    return NextResponse.json(
      { message: "Image uploaded", filePath },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = {
      error: "Failed to upload image",
      message: JSON.stringify(error),
    };
    console.error(errorMessage);
    return NextResponse.json(errorMessage, { status: 500 });
  }
};
