export const convertToFormData = (
  data: Record<string, unknown>,
  arrayKey?: string,
) => {
  const formData = new FormData();
  Object.keys(data)?.map((key) => {
    const item = data[key as keyof typeof data];
    if (Array.isArray(item) && item?.length > 0) {
      item.forEach((file) => {
        formData.append(arrayKey ?? 'images', file);
      });
    } else {
      formData.append(key, item as string);
    }
  });
  return formData;
};
