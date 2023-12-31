import { BaseTransportDataType, TransportAuthInfoType } from './transport'

export interface BaseOptionsType {
  /**
   * 接口地址
   */
  dsn?: string
  /**
   * 是否启用
   */
  disabled?: boolean
  /**
   * 最大Breadcrumbs
   * @default 20
   */
  maxBreadcrumbs?: number
  /**
   * 过滤xhr请求
   */
  excludeXhrUrl?: RegExp[]
  
  getAuthInfo?: () => Promise<TransportAuthInfoType>
  headers?: Record<string, any> | (() => Record<string, any>)
  transform?: (data: BaseTransportDataType) => any
}
