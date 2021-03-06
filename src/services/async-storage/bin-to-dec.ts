import AsyncStorage from '@react-native-async-storage/async-storage'
import { Item } from '../../domain/entities/bin-to-dec/item-list'
import { List } from '../../domain/entities/bin-to-dec/list'

const asyncListName = '@BinToDecList'

const setList = async (list: List): Promise<void> => {
  try {
    await AsyncStorage.setItem(asyncListName, JSON.stringify(list))
  } catch (error) {
    throw error
  }
}

export const getList = async (): Promise<List> => {
  try {
    const listJson = await AsyncStorage.getItem(asyncListName)
    if (!listJson) {
      return [] as List
    }
    return JSON.parse(listJson) as List
  } catch (error) {
    throw error
  }
}

export const insertOne = async (item: Item): Promise<void> => {
  try {
    const list = await getList()
    if (list !== null) {
      list.unshift(item)
      return setList(list)
    }
    const newList: List = []
    newList.push(item)
    setList(newList)
  } catch (error) {
    throw error
  }
}

export const editOne = async (itemToUpdate: Item) => {
  try {
    const listToEdit = await getList()
    const newList = listToEdit.map(itemParam =>
      itemParam.id === itemToUpdate.id
        ? itemToUpdate
        : itemParam
    )
    setList(newList)
  } catch (error) {
    throw error
  }
}

export const removeOne = async (idToItemRemove: string) => {
  try {
    const listToEdit = await getList()
    const newList = listToEdit.filter(itemParam => itemParam.id !== idToItemRemove)
    setList(newList)
  } catch (error) {
    throw error
  }
}
