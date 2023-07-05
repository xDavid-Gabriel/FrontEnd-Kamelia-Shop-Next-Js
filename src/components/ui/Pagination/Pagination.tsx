import PaginationComoponent from '@etchteam/next-pagination'
import '@etchteam/next-pagination/dist/index.css' // Importa el archivo CSS
import styles from './pagination.module.css'
interface Props {
  pagination: {
    page: number
    pageCount: number
    pageSize: number
    total: number
  }
}
export const Pagination = ({ pagination }: Props) => {
  return (
    <PaginationComoponent
      total={pagination.total}
      sizes={[pagination.pageSize]}
      perPageText="Productos por pagina"
      theme={styles}
    />
  )
}
