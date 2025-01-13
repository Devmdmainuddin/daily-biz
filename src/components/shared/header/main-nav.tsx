"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { POSTS } from "@/lib/data/data";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

export function MainNav() {
  return (
    <div
      className= "flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between flex-wrap gap-3   z-50"
    >
      <NavigationMenu>
        <NavigationMenuList>
        <NavigationMenuItem >
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink  className={`bg-0 flex items-center gap-1 hover:bg-[#d7f9ce] p-2 ${navigationMenuTriggerStyle}`}>
              <MenuIcon />  ALL
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem >
            <NavigationMenuTrigger className="bg-0">Today&apos;s Blogs</NavigationMenuTrigger>
            <NavigationMenuContent className="p-4">
              <ul className="grid w-[400px] gap-3  md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {POSTS.map((post) => (
                  <ListItem
                    key={post.title}
                    title={post.title}
                    href={post.href}
                  >
                    {post.description}
                  </ListItem>
                ))}
                
                
              </ul>
              <div className="mx-auto w-full">
                <Button>show more</Button>
                </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger  className="bg-0">Business</NavigationMenuTrigger>
            <NavigationMenuContent className="p-4">
              <ul className="grid w-[400px] gap-3  md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {POSTS.map((post) => (
                  <ListItem
                    key={post.title}
                    title={post.title}
                    href={post.href}
                  >
                    {post.description}
                  </ListItem>
                ))}
                
                
              </ul>
              <div className="mx-auto w-full">
                <Button>show more</Button>
                </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger  className="bg-0">Politics</NavigationMenuTrigger>
            <NavigationMenuContent className="p-4">
              <ul className="grid w-[400px] gap-3  md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {POSTS.map((post) => (
                  <ListItem
                    key={post.title}
                    title={post.title}
                    href={post.href}
                  >
                    {post.description}
                  </ListItem>
                ))}
                
                
              </ul>
              <div className="mx-auto w-full">
                <Button>show more</Button>
                </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger  className="bg-0">Entertainment</NavigationMenuTrigger>
            <NavigationMenuContent className="p-4">
              <ul className="grid w-[400px] gap-3  md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {POSTS.map((post) => (
                  <ListItem
                    key={post.title}
                    title={post.title}
                    href={post.href}
                  >
                    {post.description}
                  </ListItem>
                ))}
                
                
              </ul>
              <div className="mx-auto w-full">
                <Button>show more</Button>
                </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger  className="bg-0">Sports</NavigationMenuTrigger>
            <NavigationMenuContent className="p-4">
              <ul className="grid w-[400px] gap-3  md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {POSTS.map((post) => (
                  <ListItem
                    key={post.title}
                    title={post.title}
                    href={post.href}
                  >
                    {post.description}
                  </ListItem>
                ))}
                
                
              </ul>
              <div className="mx-auto w-full">
                <Button>show more</Button>
                </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem >
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink  className="bg-0">
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center justify-between w-20">
 
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";