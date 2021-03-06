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
  ButtonFinish
} from './styles'

type Props = {
  actionType: 'new' | 'edit'
}

const BinDecNewOrEditScreen = (props: Props) => {
  const [decimal, setDecimal] = React.useState('')
  const [binary, setBinary] = React.useState('')

  const binaryToDecimal = React.useCallback((text: string) => {
    setBinary(text)
    setDecimal(text)
  }, [])

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Body>
        {
          decimal.length > 0
            ? <LabelDecimal>Decimal output</LabelDecimal>
            : <LabelDecimal>Enter the binary</LabelDecimal>
        }
        {
          decimal.length > 0 && <DecimalText>{decimal}</DecimalText>
        }

      </Body>
      <Bottom>
        <BinaryInput
          placeholder='binary...'
          value={binary}
          onChangeText={binaryToDecimal}
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
