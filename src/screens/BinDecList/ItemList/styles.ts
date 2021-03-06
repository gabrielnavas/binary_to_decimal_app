import styled from 'styled-components/native'
import theme from '../../../styles/theme'

export const Container = styled.Pressable`
  flex-direction: row;
  align-items: center;
  width: 95%;
  margin: 6px 10px;
  padding: 10px 10px;
  border-radius: 5px;
  background: ${theme.colors.blueDark};
`

export const BinaryText = styled.Text`
  color: ${theme.colors.white};
  font-size: 24px;
  font-weight: bold;
  margin-right: 5px;
`
export const DecimalText = styled.Text`
  color: ${theme.colors.white};
  font-size: 24px;
  margin-left: 5px;
`
