import { setBaseUrlToken } from '.'
import { BASE_URL } from '../api/endpoints'

describe('setBaseUrlToken function', () => {
  it('setBaseUrlToken function exist', () => {
    expect(typeof setBaseUrlToken).toEqual('function')
  })

  it('sets access token in the base url', () => {
    const accessToken = '123'
    const finalUrl = BASE_URL + accessToken
    expect(setBaseUrlToken(accessToken)).toBe(finalUrl)
  })
})
