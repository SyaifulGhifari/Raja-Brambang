export default function NavigationOption({options, action}) {
  return (
    <>
     {options.map((item, _index) => (
      <span key={_index} onClick={()=>action(item.name)} className="mx-3 cursor-pointer">
        {item.name}
      </span>
     ))} 
    </>
  )
}
