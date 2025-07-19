import GenericTextField from './GenericTextField';

const SecureTextField = ({placeholder}) => {
  return (
    <GenericTextField placeholder={placeholder} secureTextEntry={true}/>
  );
}

export default SecureTextField;