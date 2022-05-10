import { withIronSessionApiRoute } from 'iron-session/next'

import { sessionOptions } from '../../libs/session'
import { apiCredential, apiUrl } from '../api/variables'

export default withIronSessionApiRoute(async (req, res) => {
  const { email, password } = await req.body
  const body = {
    email: email,
    password: password,
  }

  try {
    const userAuthenUrl = `${apiUrl}/users/authen`
    const resp = await fetch(userAuthenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: apiCredential,
      },
      body: JSON.stringify(body),
      mode: 'cors',
    })

    const data = await resp.json()
    if (data?.error) {
      res.json({ error: data.error, message: data.error })
      return
    }
    if (data?.user) {
      const user = {
        isLoggedIn: true,
        email: data?.user.email,
        accessRole: data?.user.access_role,
        id: data?.user.id,
      }
      req.session.user = user
      await req.session.save()
      res.json(user)
    } else {
      console.log('HANDLE THIS ERROR')
      res.json({ error: 'oh no something bad just happen' })
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Service is not available', message: error.message })
  }
}, sessionOptions)
