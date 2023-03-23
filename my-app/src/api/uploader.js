export async function uploadImage(file) {
  const data = new FormData();
  let url = process.env.REACT_APP_CLOUDINARY_URL;
  data.append("file", file);
  data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);

  return fetch(url, {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => data.url);
}
