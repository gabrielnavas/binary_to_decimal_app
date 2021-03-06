// eslint-disable-next-line no-use-before-define
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Item } from '../../../domain/entities/bin-to-dec/item-list'
import { List as ListItem } from '../../../domain/entities/bin-to-dec/list'
import { getAll } from '../../../domain/usecases/get-all'
import { deleteOne } from '../../../domain/usecases/remove-one'

import theme from '../../../styles/theme'

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
  const [list, setList] = React.useState<ListItem>([])

  React.useEffect(() => {
    getAll().then(list => setList(list))
  }, [list])

  const handleNew = React.useCallback(() => {
    navigation.navigate('BinDecNewOrEditScreen', { actionType: 'new' })
  }, [])

  const handleEdit = React.useCallback((itemEdit: Item) => {
    navigation.navigate('BinDecNewOrEditScreen', { actionType: 'edit', itemEdit })
  }, [])

  const handleDelete = React.useCallback((idToItemRemove: string) => {
    deleteOne(idToItemRemove)
  }, [])

  return (
   <Container>
     <Body>
      <List>
        {
          list.map((item, index) =>
            <ItemList
              key={index}
              onPress={() => handleEdit(item)}
              onLongPress={() => handleDelete(item.id)}
              binary={item.binary}
              decimal={item.decimal} />)
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
