import cloudinary from "./cloudinary";

const cloudinaryUpload = async (file: File, folder: string) => {
  const buffer = await file.arrayBuffer();
  const bytes = await Buffer.from(buffer);

  return new Promise(async (resolve, reject) => {
    await cloudinary.uploader
      .upload_stream(
        {
          resource_type: "auto",
          folder: folder,
        },
        async (error, result) => {
          if (error) {
            reject(
              error?.message || "Error while uploading image to cloudinary"
            );
          }
          resolve(result);
        }
      )
      .end(bytes);
  });
};

export default cloudinaryUpload;
