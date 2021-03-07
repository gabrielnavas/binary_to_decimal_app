import styled from 'styled-components/native'

import theme from '../../../../styles/theme'

export const Container = styled.Pressable`
  flex-direction: row;
  align-items: center;
  width: 95%;
  margin: 6px 10px;
  padding: 11px 10px;
  border-radius: 5px;
  background: ${theme.colors.blueDark};
`

export const BinaryText = styled.Text`
  color: ${theme.colors.white};
  font-size: 28px;
  font-weight: bold;
  margin-right: 5px;
`

export const DecimalText = styled.Text`
  color: ${theme.colors.white};
  font-size: 28px;
  margin-left: 5px;
`

export const LeftSide = styled.View`
  align-items: center;
  flex-direction: row;
  width: 77%;
  height: 100%;
`

export const RightSide = styled.View`
  flex-direction: row;
  height: 100%;
  width: 30%;
`

export const IconDeleteCancel = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 100%;
  background: ${theme.colors.white};
`

export const IconDelete = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 0px  6px;
  height: 100%;
  background: ${theme.colors.red};
`
