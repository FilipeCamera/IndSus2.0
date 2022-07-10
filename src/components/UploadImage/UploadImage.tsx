import {Colors} from '@styles';
import {Text} from 'components';
import {handleUpload} from 'functions';
import React from 'react';
import {Image, View} from 'react-native';
import {ImageBox, UploadImageContainer} from './styles';

interface UploadImageProps {
  image: string;
  setImage: any;
}

const UploadImage = ({image, setImage}: UploadImageProps) => {
  const handleImage = () => {
    handleUpload()
      .then((res: any) => {
        setImage(res.data.assets[0].uri);
      })
      .catch(err => {});
  };
  return (
    <UploadImageContainer onPress={() => handleImage()}>
      {!!image && <ImageBox source={{uri: image}} />}
      {!image && (
        <View
          style={{
            backgroundColor: Colors.backgroundLight,
            width: '100%',
            height: '100%',
            borderRadius: 999,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            title="Selecione uma imagem"
            size={15}
            weight={500}
            color={Colors.secundaryTextGray}
            center
          />
        </View>
      )}
    </UploadImageContainer>
  );
};

export default UploadImage;
