import React from 'react'
import { Platform } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Item } from '../../../domain/entities/bin-to-dec/item-list'
import { newItem } from '../../../domain/usecases/new-item'
import { updateItem } from '../../../domain/usecases/update-item'
import theme from '../../../styles/theme'

import {
  Container,
  Body,
  Bottom,
  LabelDecimal,
  DecimalText,
  BinaryInput,
  ButtonFinish,
  ErrorText
} from './styles'

type ActionType = 'new' | 'edit'

type Props = {
  navigation: any,
  route: {
    params: {
      itemEdit: Item,
      actionType: ActionType
    }
  }
}

const BinDecNewOrEditScreen = (props: Props) => {
  const [actionType, setActionType] = React.useState<ActionType>()
  const [itemEdit, setItemEdit] = React.useState<Item>()
  const [decimal, setDecimal] = React.useState('')
  const [binary, setBinary] = React.useState('')
  const [error, setError] = React.useState('')

  React.useEffect(() => {
    const { actionType, itemEdit } = props.route.params
    setActionType(actionType)
    if (actionType === 'edit') {
      setItemEdit(itemEdit)
      setDecimal(itemEdit.decimal)
      setBinary(itemEdit.binary)
    }
  }, [])

  const clearInputOutputs = React.useCallback(() => {
    setDecimal('')
    setBinary('')
  }, [])

  const handleFinishNewOrEdit = React.useCallback(() => {
    const item = {
      id: itemEdit ? itemEdit.id : undefined,
      binary: binary.trim(),
      decimal: decimal.trim()
    } as Item

    if (item.decimal.length === 0 || item.binary.length === 0) {
      return handleError('Decimal or binary is empty')
    }
    if (actionType === 'new') {
      return newItem(item)
        .then(_ => clearInputOutputs())
        .catch(_ => handleError('Error in insert a new item binary to decimal in list'))
    }
    updateItem(item)
      .then(_ => {
        clearInputOutputs()
        props.navigation.navigate('BinDecListScreen')
      })
      .catch(_ => handleError('Error in edit a item binary to decimal in list'))
  }, [binary, decimal, actionType])

  const handleError = React.useCallback((error: string) => {
    setError(error)
    setTimeout(() => setError(''), 5000)
  }, [])

  const handleBinaryInput = React.useCallback((text: string) => {
    const textTrim = text.trim()
    if (textTrim.length === 0) {
      setDecimal('')
      setBinary('')
      return
    }
    const decimalTranslated = binaryToDecimal(textTrim)
    if (decimalTranslated !== undefined) {
      setError('')
      setBinary(text)
      setDecimal(decimalTranslated.toString())
      return
    }
    handleError('Hey is missing 0 or 1')
  }, [])

  const isBinary = React.useCallback(
    (character: string) => character === '0' || character === '1',
    [decimal, binary]
  )

  const binaryToDecimal = React.useCallback((text: string): number | undefined => {
    const character = text.charAt(text.length - 1)
    if (isBinary(character)) {
      const decimalTranslated = parseInt(text, 2)
      return decimalTranslated
    }

    return undefined
  }, [decimal, binary])

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Body>
        { decimal.length > 0
          ? <LabelDecimal>Decimal output</LabelDecimal>
          : <LabelDecimal>Tell me the binary</LabelDecimal>}
        { decimal.length > 0 && <DecimalText>{decimal}</DecimalText>}
        { error.length > 0 && <ErrorText>{error}</ErrorText>}
      </Body>
      <Bottom>
        <BinaryInput
          keyboardAppearance='dark'
          keyboardType='number-pad'
          autoCorrect={false}
          placeholder='binary...'
          value={binary}
          onChangeText={handleBinaryInput}
        />
        <ButtonFinish onPress={handleFinishNewOrEdit} >
          { actionType === 'new' &&
            <Ionicons
              name='add-outline'
              size={24}
              color={theme.colors.white}
            />}
          { actionType === 'edit' &&
            <Ionicons
              name='pencil-outline'
              size={24}
              color={theme.colors.white}
            />}
        </ButtonFinish>
      </Bottom>
    </Container>
  )
}

export default BinDecNewOrEditScreen
