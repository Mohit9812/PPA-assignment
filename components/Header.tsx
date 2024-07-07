import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"
import Image from "next/image"
import { MyContext } from "@/app/page"

import React, { useContext } from 'react'
import { Button } from "./ui/button"

const Header = () => {
  // @ts-ignore
  const {darkMode, setDarkMode} = useContext(MyContext)
  return (
    <div className={`${darkMode ? 'bg-[#6b7483]' : 'bg-[#F5F7FA]'} py-8`}>
      <NavigationMenu className={"flex flex-col md:flex-row md:justify-evenly max-w-full"}>
        <NavigationMenuList className="w-full">
          <NavigationMenuItem>
            <Image src={require("../public/Logo.svg")} alt={"Nexcent"} width={155} height={24} />
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="grid grid-cols-3 md:flex mt-6 md:mt-0">
          <NavigationMenuItem className="bg-transparent">
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Service
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Feature
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Product
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Testimonial
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                FAQ
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="mt-6 md:mt-0">
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-[#4CAF4F]`}>
                Login
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-[#4CAF4F] text-white`}>
                Sign up
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button className={`${darkMode ? '!bg-[#808692]' : ''}`} onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Light' : 'Dark'} Mode</Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>

  )
}

export default Header