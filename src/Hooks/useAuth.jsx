import React, { use } from 'react'
import { AuthContext } from '../Context/AuthContext'

function useAuth() {
  const authInnfo = use(AuthContext);
  return authInnfo ;
}

export default useAuth