// eslint-disable-next-line no-use-before-define
import React, { useCallback } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import theme from '../../styles/theme'

import ItemList from './ItemList'

import {
  Container,
  Body,
  Bottom,
  List,
  ButtonNew,
  ButtonText
} from './styles'

type Props = {
  navigation: any
}

const BinDecListScreen = ({ navigation }: Props) => {
  const handleNew = useCallback(() => {
    navigation.navigate('BinDecNewOrEditScreen')
  }, [])

  const handleEdit = useCallback(() => {
    alert('to edit this')
  }, [])

  const handleDelete = useCallback(() => {
    alert('to delete this')
  }, [])

  return (
   <Container>
     <Body>
      <List>
        {
          Array(20)
            .fill({ binary: '010100', decimal: '20' })
            .map(({ binary, decimal }, index) =>
              <ItemList
                key={index}
                onPress={handleEdit}
                onLongPress={handleDelete}
                binary={binary}
                decimal={decimal} />)
        }
      </List>
     </Body>
     <Bottom>
      <ButtonNew
        onPress={handleNew}
      >
        <ButtonText>New</ButtonText>
        <Ionicons
          name='add-circle-outline'
          size={44}
          color={theme.colors.red}
        />
      </ButtonNew>
     </Bottom>
   </Container>
  )
}

export default BinDecListScreen
