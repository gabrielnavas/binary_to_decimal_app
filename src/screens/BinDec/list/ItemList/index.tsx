import React from 'react'
import { GestureResponderEvent } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { deleteOne } from '../../../../domain/usecases/remove-one'

import theme from '../../../../styles/theme'

import {
  Container,
  BinaryText,
  DecimalText,
  LeftSide,
  RightSide,
  IconDeleteCancel,
  IconDelete
} from './styles'

type Props = {
  idItemToDelete?: string
  binary: string
  decimal: string
  editAction: ((event: GestureResponderEvent) => void) | null | undefined
}

const ItemList = (props: Props) => {
  const [showDelete, setShowDelete] = React.useState(false)

  const deleteAction = React.useCallback(() => {
    if (props.idItemToDelete) {
      deleteOne(props.idItemToDelete)
    }
  }, [])

  const handleShowDelete = React.useCallback(() => {
    setShowDelete(!showDelete)
  }, [showDelete])

  return (
    <Container
      onPress={props.editAction}
      onLongPress={handleShowDelete}
    >
      <LeftSide>
        <BinaryText>{props.binary}</BinaryText>
        <Ionicons
          name='arrow-forward-outline'
          size={24}
          color={theme.colors.white}
        />
        <DecimalText>{props.decimal}</DecimalText>
      </LeftSide>
      {
        showDelete && (
          <RightSide>
              <IconDeleteCancel onPress={handleShowDelete}>
              <Ionicons
                name='close-outline'
                size={32}
                color={theme.colors.red}
              />
            </IconDeleteCancel >
             <IconDelete onPress={deleteAction}>
              <Ionicons
                  name='trash-bin-outline'
                  size={32}
                  color={theme.colors.white}
              />
            </IconDelete>
          </RightSide>
        )
      }
    </Container>
  )
}

export default ItemList
