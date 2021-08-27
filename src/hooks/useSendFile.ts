import {storage} from 'firebase';

const useSendFile = () => {
  const sendFile = async ({uri, filename, onComplete, onFail, path}: any) => {
    const uploadFile = storage().ref(`${path}/${filename}`).putFile(uri);

    uploadFile.on(
      'state_changed',
      (snapshot: any) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log('uploading ..', progress);
      },
      (error: any) => {
        onFail(error);
      },
      () => {
        uploadFile.snapshot.ref
          .getDownloadURL()
          .then((downloadURL: any) => {
            onComplete(downloadURL);
            // return downloadURL;
          })
          .catch((error: any) => {
            // console.log("erro on get url", error);
            onFail(error);
            // return error
          });
      },
    );
  };
  return {sendFile};
};

export default useSendFile;
