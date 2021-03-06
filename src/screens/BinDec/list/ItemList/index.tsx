import React from 'react'
import { GestureResponderEvent } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

import theme from '../../../../styles/theme'

import {
  Container,
  BinaryText,
  DecimalText
} from './styles'

type Props = {
  binary: string
  decimal: string
  onPress: ((event: GestureResponderEvent) => void) | null | undefined
  onLongPress: ((event: GestureResponderEvent) => void) | null | undefined
}

const ItemList = (props: Props) => {
  return (
    <Container
      onPress={props.onPress}
      onLongPress={props.onLongPress}
    >
      <BinaryText>{props.binary}</BinaryText>
      <Ionicons
        name='arrow-forward-outline'
        size={24}
        color={theme.colors.white}
      />
      <DecimalText>{props.decimal}</DecimalText>
    </Container>
  )
}

export default ItemList
