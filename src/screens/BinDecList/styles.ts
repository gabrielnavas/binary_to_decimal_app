import styled from 'styled-components/native'

import theme from '../../styles/theme'

export const Container = styled.View`
  flex: 1;
  background: ${theme.colors.blue};
`
export const Body = styled.View`
  flex: 0.9;
  
`
export const Bottom = styled.View`
  flex: 0.1;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.blue};
`
export const List = styled.ScrollView`
`
export const ButtonNew = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  width: 100%;
  background: ${theme.colors.blueDark};
`
export const ButtonText = styled.Text`
  color: ${theme.colors.white};
  font-weight: bold;
  font-size: 22px;
  margin-right: 15px;
`
