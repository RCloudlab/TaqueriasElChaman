import { FaSquare } from "react-icons/fa"

interface Props {
    id:string,
    info: string,
    styles?: string,
}

export const ItemsContact = ({id, info,styles=''}: Props) => {
  return (
    <div className={`${styles} flex items-center space-x-1`}>
        <FaSquare className="text-gray-600 rotate-45 size-2"/>
        <p id={id}>{info}</p>
    </div>
  )
}
