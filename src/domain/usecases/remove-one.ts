import { removeOne } from '../../services/async-storage/bin-to-dec'

export const deleteOne = async (id: string) => {
  return removeOne(id)
}
