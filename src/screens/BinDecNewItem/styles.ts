import styled from 'styled-components/native'

import theme from '../../styles/theme'

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: ${theme.colors.blue};
`

export const Body = styled.View`
  flex: 0.90;
  align-items: center;
  justify-content: center;
  background: red;
  padding: 10px 10px;
  background: ${theme.colors.blue};
`

export const Bottom = styled.View`
  flex: 0.20;
  justify-content: flex-end;
  flex-direction: row;
`

export const LabelDecimal = styled.Text`
  font-size: 35px;
  color: ${theme.colors.white};
  font-weight: bold;
`

export const DecimalText = styled.Text`
  margin-top: 5px; 
  font-size: 25px;
  color: ${theme.colors.white};
  background: ${theme.colors.red};
  padding: 5px 18px;
  border-radius: 15px;
`

export const BinaryInput = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.blueDark
})`
  width: 80%;
  background: ${theme.colors.blueDark};
  color: ${theme.colors.red};
  padding: 0 15px;
  font-size: 30px;
`

export const ButtonFinish = styled.Pressable`
  justify-content: center;
  align-items: center;
  width: 20%;
  background: ${theme.colors.red};
  color: ${theme.colors.white};
`
