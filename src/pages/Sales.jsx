import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Sale = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    navigate("/shop?tag=Sale")
  }, [])

  return null
}

export default Sale