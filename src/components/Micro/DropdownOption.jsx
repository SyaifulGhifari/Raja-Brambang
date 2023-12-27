import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react"
import {useState} from 'react'

export default function DropdownOption({options,action}) {
  return (
    <div>
       <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered" 
        >
          Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={options}>
        {(item) => (
          <DropdownItem
          onClick={()=>action(item.name)}
            key={item.name}
          >
            {item.name}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
    </div>
  )
}
