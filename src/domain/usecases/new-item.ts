import { v4 as uuidv4 } from 'uuid'
import { insertOne } from '../../services/async-storage/bin-to-dec'
import { Item } from '../entities/bin-to-dec/item-list'

export const newItem = async (item: Item): Promise<Item> => {
  for (const param of ['binary', 'decimal']) {
    if (!Object.keys(item).indexOf(param)) {
      throw new Error(`missing param ${param} of the item BinToDecItem`)
    }
  }
  item.id = uuidv4()
  await insertOne(item)
  return item
}
