import request from '@/utils/request'
import { TYPES } from '@/constants/image'
import { ObjectType } from '@/constants/project'

export type QueryParams = {
  name?: string
  type?: number
  objectType?: ObjectType
  state?: TYPES
  url?: string
  limit?: number
  offset?: number
}
type Image = {
  name: string
  url: string
  description?: string
  enable_livecode?: boolean
}
type EditImage = Omit<Image, 'url'>
type ShareParams = {
  username: string
  email: string
  phone: string
  org: string
}

/** image service */
/**
 *
 * @param {number} id
 * @returns
 */
export function getImage(id: number) {
  return request.get(`images/${id}`)
}

/**
 * @param {*} params
 * { name, type, start_time = 0, end_time = 0, offset = 0, limit = 10, sort_by: 1|2 }
 * @returns
 */
/**
 * @description get images by query
 * @export
 * @param {QueryParams} { name, type, objectType, state, url, limit = 10, offset = 0 }
 */
export function getImages({ name, type, objectType, state, url, limit = 10, offset = 0 }: QueryParams) {
  return request.get('images/', {
    params: {
      name,
      type,
      object_type: objectType,
      state,
      url,
      limit,
      offset,
    },
  })
}

/**
 * delete image
 * @param {number} id
 * @returns
 */
export function delImage(id: number) {
  return request({
    method: 'delete',
    url: `/images/${id}`,
  })
}

/**
 * create a image
 * @param {object} image
 * {
 *   "hash": "string",
 *   "name": "string",
 *   "map": "string",
 *   "parameters": "string",
 *   "task_id": 0,
 *   "user_id": 0
 * }
 * @returns
 */
export function createImage(image: Image) {
  return request.post('/images/', image)
}

export function updateImage(id: number, { name, description }: EditImage) {
  return request({
    method: 'patch',
    url: `/images/${id}`,
    data: {
      name,
      description,
    },
  })
}

export function shareImage(id: number, { username, email, phone, org }: ShareParams) {
  return request.post(`/images/shared`, {
    docker_image_id: id,
    contributor: username,
    email,
    phone,
    organization: org,
  })
}

export function relateImage(id: number, relations: number[]) {
  return request({
    url: `/images/${id}/related`,
    method: 'PUT',
    data: {
      dest_image_ids: relations,
    },
  })
}

export function getShareImages() {
  return request.get('/images/shared')
}
