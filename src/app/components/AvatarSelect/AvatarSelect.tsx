import React, {useState, useEffect} from 'react';
import {Image, Platform, View} from 'react-native';
import {AvatarStyle} from './styles';

import CamAddIcon from 'assets/svg/cam_add.svg';
import {Colors} from '@styles';
import {useSendFile} from 'hooks';
import {handleUpload} from 'functions';
import {firestore} from 'firebase';

interface AvatarProps {
  edit: boolean;
  avatar: any;
  setAvatar: any;
  error: any;
}

const AvatarSelect = ({avatar, setAvatar, error, edit}: AvatarProps) => {
  const {sendFile} = useSendFile();
  const [image, setImage] = useState<any>({});

  const handleImage = () => {
    handleUpload()
      .then((res: any) => {
        setImage(res.data.assets[0]);
      })
      .catch((error: any) => {});
  };
  useEffect(() => {
    if (Object.keys(image).length !== 0) {
      const {uri} = image;
      const filename =
        firestore.FieldValue.serverTimestamp() +
        uri.substring(uri.lastIndexOf('/') + 1);
      const uploadUri =
        Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
      sendFile({
        uri: uploadUri,
        filename,
        path: 'avatars',
        onComplete: (url: string) => {
          setAvatar(url);
        },
        onFail: (error: any) => {
          console.log(error);
        },
      });
    }
  }, [image]);
  return (
    <AvatarStyle onPress={handleImage} error={error}>
      <View style={{width: 140, height: 140, borderRadius: 70}}>
        <Image
          source={{
            uri: avatar
              ? avatar
              : image.uri
              ? image.uri
              : 'http://www.rachegebran.com.br/wp-content/uploads/perfil.jpg',
          }}
          style={{width: '100%', height: '100%', borderRadius: 9999}}
        />
      </View>
      {Object.keys(image).length === 0 && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: Colors.background,
            width: 50,
            height: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 2,
            borderWidth: error ? 1 : 0,
            borderColor: error ? Colors.red : Colors.background,
          }}>
          <CamAddIcon />
        </View>
      )}
    </AvatarStyle>
  );
};

export default AvatarSelect;
