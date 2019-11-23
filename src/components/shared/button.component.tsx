import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { buttonStyles } from './styles/styles';

interface PropsType {
  onPressAction?: () => void;
  buttonText: string;
}

const CustomButton = ({ onPressAction, buttonText }: PropsType) => (
  <TouchableOpacity
    style={buttonStyles.buttonContainer}
    onPress={onPressAction}
  >
    <Text style={buttonStyles.buttonText}>{buttonText}</Text>
  </TouchableOpacity>
)

export default CustomButton;