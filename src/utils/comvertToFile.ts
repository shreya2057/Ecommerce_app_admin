export const convertUrlToFile = async (imageUrl: string) => {
  try {
    // Fetch the image from the URL
    const response = await fetch(imageUrl);
    const blob = await response.blob(); // Convert response to a Blob

    const fileName = imageUrl?.split('/').pop()?.split('.')[0] ?? '';

    // Create a File from the Blob
    const file = new File([blob], fileName, { type: blob.type });

    return file;
  } catch (error) {
    console.error('Error converting image URL to File:', error);
  }
};
