import { FaSquare } from "react-icons/fa"

interface Props {
    id:string,
    info: string,
}

export const ItemsContact = ({id, info}: Props) => {
  return (
    <div className="flex items-center space-x-1">
        <FaSquare className="text-gray-600 rotate-45 size-2"/>
        <p id={id}>{info}m</p>
    </div>
  )
}
