

export default function details(props) {
  return (
    <div className={`${props.color} h-screen`}>
        <h2 className="uppercase h-36 flex items-center justify-center shadow-2xl" 
        id={props.link}>{props.name}</h2>
        
        </div>
  )
}
