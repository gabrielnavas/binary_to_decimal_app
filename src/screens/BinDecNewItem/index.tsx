import React from 'react'
import { Platform } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import theme from '../../styles/theme'

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

type Props = {
  actionType: 'new' | 'edit'
}

const BinDecNewOrEditScreen = (props: Props) => {
  const [decimal, setDecimal] = React.useState('')
  const [binary, setBinary] = React.useState('')
  const [error, setError] = React.useState('')

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
    setError('Hey is missing 0 or 1')
    setTimeout(() => setError(''), 5000)
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
        {
          decimal.length > 0
            ? <LabelDecimal>Decimal output</LabelDecimal>
            : <LabelDecimal>Tell me the binary</LabelDecimal>
        }
        {
          decimal.length > 0 && <DecimalText>{decimal}</DecimalText>
        }
        {
          error.length > 0 && <ErrorText>{error}</ErrorText>
        }
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
        <ButtonFinish>
          <Ionicons name='add-outline' size={42} color={theme.colors.white}/>
        {/* { props.actionType === 'new' && <Ionicons name='add-outline' size={24} color={theme.colors.white} />}
        { props.actionType === 'edit' && <Ionicons name='pencil-outline' size={24} color={theme.colors.white} />} */}
        </ButtonFinish>
      </Bottom>
    </Container>
  )
}

export default BinDecNewOrEditScreen
