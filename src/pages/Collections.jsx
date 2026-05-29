import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Collections = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    navigate("/shop")
  }, [])

  return null
}

export default Collections