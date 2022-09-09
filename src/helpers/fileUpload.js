
export const fileUpload = async (file) => {
  
  if (!file) throw new Error("Debe cargar un archivo para hacer el envío");

  const cloudUrl = 'https://api.cloudinary.com/v1_1/dxqvovg13/upload';

  const formData = new FormData();
  formData.append('upload_preset', 'react-journal');
  formData.append('file', file);

  try {

    const resp = await fetch(cloudUrl,{
      method: 'POST',
      body: formData
    });

    if ( !resp.ok ) throw new Error("No se pudo cargar la imagen");

    const cloudResp = await resp.json();
    return cloudResp.secure_url;

  } catch (error) {
    throw new Error (error.message)
  }

}