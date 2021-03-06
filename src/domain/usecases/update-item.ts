import { editOne } from '../../services/async-storage/bin-to-dec'
import { Item } from '../entities/bin-to-dec/item-list'

export const updateItem = async (item: Item) => {
  return editOne(item)
}
